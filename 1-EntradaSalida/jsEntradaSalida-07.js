/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var numeroUno ;
var numeroDos;							
var suma ;

 numeroUno = txtIdNumeroUno.value;
 numeroUno = parseInt(numeroUno)
 numeroDos = txtIdNumeroDos.value;
 numeroDos = parseInt(numeroDos);
 suma= (numeroUno) + (numeroDos);

 alert ("el resultado de la suma " + suma) ; 


// id numero 1 txtIdNumeroUno
// id numero 2 txtIdNumeroDos


}

function restar()
{var numeroUno ;
	var numeroDos;							
	var resta ;
	
	 numeroUno = txtIdNumeroUno.value;
	 numeroUno = parseInt(numeroUno)
	 numeroDos = txtIdNumeroDos.value;
	 numeroDos = parseInt(numeroDos);
	 resta= numeroUno - numeroDos;
	
	 alert ("el resultado de la resta " + resta) ; 
	
	
	


}

function multiplicar()
{ var numeroUno ;
	var numeroDos;							
	var multiplicar ;
	
	 numeroUno = txtIdNumeroUno.value;
	 numeroUno = parseInt(numeroUno)
	 numeroDos = txtIdNumeroDos.value;
	 numeroDos = parseInt(numeroDos);
	 multiplicar= numeroUno * numeroDos;
	
	 alert ("el resultado de la multiplicacion " + multiplicar) ; 
	
	
}

function dividir()

{var numeroUno ;
	var numeroDos;							
	var dividir ;
	
	 numeroUno = txtIdNumeroUno.value;
	 numeroUno = parseInt(numeroUno)
	 numeroDos = txtIdNumeroDos.value;
	 numeroDos = parseInt(numeroDos);
	 dividir= numeroUno / numeroDos;
	
	 alert ("el resultado de la division " + dividir) ; 

	
}

