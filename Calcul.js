var mouseX;
var mouseY;
var myInterval;

document.getElementById("reset").onclick = function()
{
	clearInterval(myInterval);
	
	// Création du canvas
	var canvas = new CL_Canvas();
	canvas.constr();
	
	// Création de la balle
	var balle = new CL_Balle();
	balle.constr(20, 205, canvas.getHeight() - 120, 5, Math.floor(Math.random() * 90) + 135); // diametre, posX, posY, vitesse, direction
	
	// Création de la raquette
	var raquette = new CL_Raquette();
	raquette.constr(100, 20, 225, 100); // largeurRaquette, hauteurRaquette, posX, posY

	// Création du compteur de vies, initialisation à 3 vies
	var vie = new compteurVies();
	vie.setVies(3);
	
    myInterval = setInterval(animate, 1000/60);
	
	function animate()
	{
		// Correspond aux coordonnées supposées à l'image suivante
		var nextPosX = Math.round(balle.getPosX() + (balle.getVitesse() * Math.sin(balle.getDirection() * Math.PI / 180)));
		var nextPosY = Math.round(balle.getPosY() + (balle.getVitesse() * Math.cos(balle.getDirection() * Math.PI / 180)));

		// Vérifie les collisions, renvoie false si aucune collision n'est detectée
		if (!checkCollisions(nextPosX, nextPosY, balle, raquette, canvas, vie))
		{
			balle.setPosX(nextPosX);
			balle.setPosY(nextPosY);
		}

		// Si une collision a eu lieu, on recalcule le nouveau point suivant
		else
		{
			balle.setPosX(Math.round(balle.getPosX() + (balle.getVitesse() * Math.sin(balle.getDirection() * Math.PI / 180))))
			balle.setPosY(Math.round(balle.getPosY() + (balle.getVitesse() * Math.cos(balle.getDirection() * Math.PI / 180))));
		}
		
		// Acceleration de la vitesse verticale selon la pesanteur
		//vitesseY -= 0.1;
		
		// Position de la raquette
		if (souris.getMouseX() > 50 && souris.getMouseX() < canvas.getWidth() - 50)
			raquette.setPosX(souris.getMouseX());
			
		else if (souris.getMouseX() < 50)
			raquette.setPosX(50);
			
		else
			raquette.setPosX(canvas.getWidth() - 50);
		
		document.getElementById("direction").textContent = balle.getDirection();
		document.getElementById("vitesse").textContent = balle.getVitesse();
		document.getElementById("mouseX").textContent = souris.getMouseX();
		document.getElementById("mouseY").textContent = souris.getMouseX();
		document.getElementById("posX").textContent = balle.getPosX();
		document.getElementById("posY").textContent = balle.getPosY();
		
		if (vie.vivant())
		{
			var stringVies = "";
			for (var i = vie.getVies(); i > 0; i--)
			{
				stringVies += " &#9829;";
			}
			
			document.getElementById("echec").innerHTML = stringVies;
		}
		
		else
		{
			document.getElementById("echec").innerHTML = "YOU LOSE";
			clearInterval(myInterval);
		}
		
		 //balle.setDirection(balle.getDirection() + 1);
		 //balle.setVitesse(balle.getVitesse() + 1);
		
		// Redessine le canvas selon les coordonnées de chaque élément
		canvas.draw(balle.getPosX(), balle.getPosY(), balle.getDiametre(), raquette.getPosX(), raquette.getPosY()); // ballePosX, ballePosY, diametreBalle, raquettePosX, raquettePosY
	}
}

function compteurVies()
{
	var vies;
	
	this.setVies = function(nombre)
	{
		this.vies = nombre;
	}
	
	this.mourir = function()
	{
		this.vies -= 1;
	}
	
	this.vivant = function()
	{
		if (this.vies > 0)
			return true;
			
		return false;
	}
	
	this.getVies = function()
	{
		return this.vies;
	}
}