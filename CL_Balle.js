function CL_Balle()
{
	var diametre;
	var posX;
    var posY;
    var vitesse;
	var direction;

	// Constructeur de la classe
	this.constr = function(diametre, posX, posY, vitesse, direction)
	{
		this.diametre = diametre;
		this.posX = posX;
		this.posY = posY;
		this.vitesse = vitesse;
		this.direction = direction;
	}
	
	// SETTER
	// Changer le diametre de la balle
	this.setDiametre = function(newDiametre)
	{
		this.diametre = newDiametre;
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
	
	// Changer la vitesse de la balle
	this.setVitesse = function(newVitesse)
	{
		this.vitesse = newVitesse;
	}
	
	// Changer la direction de la balle
	this.setDirection = function(newDirection)
	{
		// La direction est comprise entre 0 et 359 (degrés)
		this.direction = newDirection % 360;
	}
	
	// GETTER
	// Renvoie le diametre la balle
	this.getDiametre = function()
	{
		return this.diametre;
	}
	
	// Renvoie la position X de la balle
	this.getPosX = function()
	{
		return this.posX;
	}
	
	// Renvoie la position Y de la balle
	this.getPosY = function()
	{
		return this.posY;
	}
	
	// Renvoie la vitesse de la balle
	this.getVitesse = function()
	{
		return this.vitesse;
	}
	
	// Renvoie la direction de la balle
	this.getDirection = function()
	{
		return this.direction;
	}
}

























