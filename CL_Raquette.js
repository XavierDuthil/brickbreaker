function CL_Raquette()
{
	var largeurRaquette;
	var hauteurRaquette;
	var posX;
    var posY;

	// Constructeur de la classe
	this.constr = function(largeurRaquette, hauteurRaquette, posX, posY)
	{
		this.largeurRaquette = largeurRaquette;
		this.hauteurRaquette = hauteurRaquette;
		this.posX = posX;
		this.posY = posY;
	}
	
	// SETTER
	// Changer la largeur de la raquette
	this.setLargeur = function(newLargeur)
	{
		this.largeurRaquette = newLargeur;
	}
	
	// Changer la hauteur de la raquette
	this.setHauteur = function(newHauteur)
	{
		this.hauteurRaquette = newHauteur;
	}
	
	// Changer la position X de la balle
	this.setPosX = function(newPosX)
	{
		this.posX = newPosX;
	}
	
	// Changer la position Y de la balle
	this.setPosY = function(newPosY)
	{
		this.posY = newPosY;
	}
	
	// GETTER
	// Renvoie la largeur de la raquette
	this.getLargeur = function()
	{
		return this.largeur;
	}
	
	// Renvoie la largeur de la raquette
	this.getHauteur = function()
	{
		return this.hauteur;
	}
	
	// Renvoie la position X de la raquette
	this.getPosX = function()
	{
		return this.posX;
	}
	
	// Renvoie la position Y de la raquette
	this.getPosY = function()
	{
		return this.posY;
	}
}