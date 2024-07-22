const btnOperaciones = document.querySelector('.btnOperaciones');
const btnPotencia = document.querySelector('.btnPotencia');
const btnRaiz=document.querySelector('.btnRaiz');
const btnFactorial=document.querySelector('.btnFactorial')

const resultadoSuma = document.querySelector('.resultadosSuma');
const resultadoResta = document.querySelector('.resultadosResta');
const resultadoMultiplicacion = document.querySelector('.resultadosMultiplicacion');
const resultadoDivision = document.querySelector('.resultadosDivision');
const resultadoPotencia=document.querySelector('.resultadoPotencia');
const resultadoRaiz=document.querySelector('.resultadoRaiz');
const resultadoFactorial=document.querySelector('.resultadoFactorial')


btnOperaciones.addEventListener('click', () => {
    const numero1 = parseFloat(document.querySelector('.numero1').value);
    const numero2 = parseFloat(document.querySelector('.numero2').value);

    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;

    resultadoSuma.value = suma;
    resultadoResta.value = resta;
    resultadoMultiplicacion.value = multiplicacion;
    resultadoDivision.value = division;
});
btnPotencia.addEventListener('click', () => {
    const base = parseFloat(document.querySelector('.base').value);
    const potencia = parseFloat(document.querySelector('.potencia').value);
    
    const exponenciacion = base **potencia;
      
    resultadoPotencia.value = exponenciacion;
    
});
btnRaiz.addEventListener('click', () => {
    const radicando = parseFloat(document.querySelector('.radicando').value);
    const indice = parseFloat(document.querySelector('.indice').value);
    
    const radicacion = Math.pow(radicando, 1 / indice);
      
    resultadoRaiz.value = radicacion;
    
});
btnFactorial.addEventListener('click', () => {
    const numero = parseFloat(document.querySelector('.numerofactorial').value);

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    resultadoFactorial.value = factorial(numero);
});
