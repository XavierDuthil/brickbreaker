var souris = new CL_Souris();

window.onmousemove = function(e)
{
	souris.updatePos(e);
	
	mouseX = souris.getMouseX(e) - 10;
	mouseY = 800 - souris.getMouseY(e) - 10;
}