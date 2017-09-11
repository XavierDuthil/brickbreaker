function CL_Souris()
{
	var mouseX;
	var mouseY;

	// Obtient la position x de la souris sur la page du navigateur
	this.updatePos = function(e)
	{
		if (!e) var e = window.event;
		if (e.pageX)
		{
			mouseX = e.pageX;
			mouseY = e.pageY;
		}
		
		else if (e.clientX)
		{
			mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
	}
	
	// Renvoie la position X
	this.getMouseX = function()
	{
		return mouseX;
	}
	
	// Renvoie la position Y
	this.getMouseY = function()
	{
		return mouseY;
	}
}