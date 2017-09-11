function CL_Canvas()
{
	var canvas;
	var context;
	var height;
	var width;
	
	// Constructeur - crée le canvas
	this.constr = function()
	{
		this.canvas = document.getElementById("myCanvas");
		if(!this.canvas)
		{
			alert("Impossible de récupérer le canvas");
			return;
		}

		this.context = this.canvas.getContext("2d");
		if(!this.context)
		{
			alert("Impossible de récupérer le context");
			return;
		}

		this.height = this.canvas.height;
		this.width = this.canvas.width;
	}
	
	// Met à jour l'affichage du canvas
	this.draw = function(ballePosX, ballePosY, diametreBalle, raquettePosX, raquettePosY)
	{
		// Efface le canvas
		this.context.clearRect(0, 0, this.width, this.height);

		//Tracé de la balle
		this.context.beginPath();
		this.context.arc(ballePosX, this.height - ballePosY, diametreBalle/2, 0, Math.PI*2);
		this.context.fillStyle="blue";
		this.context.fill();
		this.context.closePath();
		
		/* 
		// Tracé de la ligne curseur
		context.beginPath();
		context.moveTo(posX, canvas.height - mouseY);
		context.lineTo(canvas.width, canvas.height - mouseY);
		context.stroke();
		context.closePath();
		  */
		 
		// Tracé de la raquette
		this.context.beginPath();
		this.context.moveTo(raquettePosX - 50, this.height - 80);
		this.context.lineTo(raquettePosX + 50, this.height - 80);
		this.context.lineTo(raquettePosX + 50, this.height - 100);
		this.context.lineTo(raquettePosX - 50, this.height - 100);
		this.context.fill();
		this.context.closePath();
	}
	
	// Renvoie la hauteur du canvas
	this.getHeight = function()
	{
		return this.height;
	}
	
	// Renvoie la largeur du canvas
	this.getWidth = function()
	{
		return this.width;
	}
}