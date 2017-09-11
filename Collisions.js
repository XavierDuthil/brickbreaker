function checkCollisions(nextPosX, nextPosY, balle, raquette, canvas, vie)
{
	// Correspond aux coordonnées supposées à l'image suivante
	var nextHautBalle = nextPosY + balle.getDiametre()/2;
	var nextBasBalle = nextPosY - balle.getDiametre()/2;
	var nextGaucheBalle = nextPosX - balle.getDiametre()/2;
	var nextDroiteBalle = nextPosX + balle.getDiametre()/2;
	
	// En cas de collision avec le bas
	if (nextBasBalle <= 0)
	{
		vie.mourir();
		if (vie.getVies() > 0)
		{
			// La balle est réinitialisée
			balle.setPosX(195+balle.getDiametre()/2);
			balle.setPosY(canvas.getHeight() - (50 +balle.getDiametre()/2));
		}
		
		return true;
	}
	
	// En cas de collision avec le haut
	else if (nextHautBalle >= canvas.getHeight())
	{
		// La direction est refléchie selon un axe horizontal
		balle.setDirection(360 + (180 - balle.getDirection()) % 360);
		
		// La balle est placée au contact de l'obstacle
		balle.setPosY(canvas.getHeight() - balle.getDiametre()/2 - 1);
		
		return true;
	}


	// En cas de collision avec les bords droit et gauche
	if (nextDroiteBalle >= canvas.getWidth() || nextGaucheBalle <= 0) //Si on touche le bord gauche ou droit
	{
		// La direction est refléchie selon un axe vertical
		balle.setDirection((360 - balle.getDirection()) % 360);

		// La collision se fait avec le mur gauche
		if (nextPosX < 50)
			balle.setPosX(1 + balle.getDiametre()/2);
		
		// La collision se fait avec le mur droit
		else
			balle.setPosX(canvas.getWidth() - balle.getDiametre()/2 - 1);
		
		return true;
	}

	/*
	// En cas de collision avec le curseur
	else if (nextHautBalle > mouseY && nextBasBalle < mouseY)
	{
		// Si la balle arrive en dessous du curseur
		if (posY < mouseY)
			posY = mouseY - balle.getDiametre()/2 - 1;
			
		// Si la balle arrive au dessus du curseur
		else
			posY = mouseY + balle.getDiametre()/2 + 1;
		
		vitesseY *= -1;
	}
	*/

	// En cas de collision avec la raquette
	else if (nextHautBalle > 100 && nextBasBalle < 100)
	{
		if (nextGaucheBalle >= raquette.getPosX() - 50 - balle.getDiametre() && nextDroiteBalle <= raquette.getPosX() + 50 + balle.getDiametre())
		{
			// La direction est refléchie selon l'endroit où elle percute la raquette
			var tendanceRaquette = Math.round((nextPosX - raquette.getPosX()) * 1.6 + 360 + 91) % 360; // Donne un angle entre 270° et 90°
			var tendanceRebond = Math.round((360 + (180 - balle.getDirection() + 91)) % 360);
			balle.setDirection((((tendanceRaquette + tendanceRebond) / 2 - 91) + 360 ) % 360);
				
			// La balle est placée au contact de l'obstacle
			balle.setPosY(100 + balle.getDiametre()/2 + 1);

			return true;
		}
	}
	
	return false;
}