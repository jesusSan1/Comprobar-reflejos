var inicio = new Date().getTime(); // Alcance global
function obtenerColorAleatorio() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
function aparecerForma()
{
    var top=Math.random()*400;
    var left=Math.random()*400;
    var width=(Math.random()*200)+100;
    var colorAleatorio = obtenerColorAleatorio();

    if (Math.random()>0.5)
        {
            document.getElementById("cuadrado").style.borderRadius = "50%";
        }
    else
        {
            document.getElementById("cuadrado").style.borderRadius = "0%";
        }
    document.getElementById("cuadrado").style.display = "block";
    document.getElementById("cuadrado").style.top = top;
    document.getElementById("cuadrado").style.left = left;
    document.getElementById("cuadrado").style.width = width;
    document.getElementById("cuadrado").style.height = width;
    document.getElementById("cuadrado").style.backgroundColor = colorAleatorio;

    inicio = new Date().getTime();
}
function aparecerFormaDespuesRetraso()
{
    setTimeout(aparecerForma, Math.random()*2000);
}
aparecerFormaDespuesRetraso();
document.getElementById("forma").onclick=function()
{
    document.getElementById("forma").style.display = "none";
    var fin = new Date().getTime();
    var diferencia = (fin-inicio)/1000;
    document.getElementById("tiempoReaccion").innerHTML = diferencia + "s";
    aparecerFormaDespuesRetraso();
}
        