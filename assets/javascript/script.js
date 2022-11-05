function insere(num)
{
    var numero = document.getElementById('calcVisor').innerHTML;
    document.getElementById('calcVisor').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('calcVisor').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('calcVisor').innerHTML;
    document.getElementById('calcVisor').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('calcVisor').innerHTML;
    if(resultado)
    {
        document.getElementById('calcVisor').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('calcVisor').innerHTML = "Nada..."
    }
}