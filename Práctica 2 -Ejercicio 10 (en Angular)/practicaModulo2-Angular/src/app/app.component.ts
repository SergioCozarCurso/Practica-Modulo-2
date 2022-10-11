import { Component, OnInit } from '@angular/core';


interface modeloDatos {
  gestor: string
  cliente: string
  mensaje: string
  transferencia: number
}

class modeloDeDatosBanco {
  gestor: string
  cliente: string
  mensaje: string
  transferencia: number

  constructor(gestor: string, cliente: string, mensaje: string, transferencia: number) {
    this.gestor = gestor;
    this.cliente = cliente;
    this.mensaje = mensaje;
    this.transferencia = transferencia;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, modeloDatos, modeloDeDatosBanco{
  title = 'practica Modulo2-Angular';

  constructor(){}

  ngOnInit(): void{
  }

  /* 
Usa el siguiente comando para traspilar este archivo a JavaScript:
tsc ejercicio9-JStoTS.ts
*/


btnEjercicio5 = document.getElementById("Ejercicio5")
btnEjercicio6a = document.getElementById("Ejercicio6a")
btnEjercicio6b = document.getElementById("Ejercicio6b")
btnEjercicio7 = document.getElementById("Ejercicio7")
btnEjercicio8 = document.getElementById("Ejercicio8")
btnEjercicio8stop = document.getElementById("Ejercicio8stop")

/* 
Ejercicio 4:
Escribe un programa que declare 3 objetos de cada modelo de datos considerado:
gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos
pueden ser arbitrarios.
*/

Object1: modeloDatos = new modeloDeDatosBanco("Manuel", "Sergio", "Nómina Agosto", 1000)
Object2: modeloDatos = new modeloDeDatosBanco("Fernando", "Silvia", "Gastos de transporte", 200)
Object3: modeloDatos = new modeloDeDatosBanco("Roberto", "Adrián", "Finiquito", 800)


ejercicio4(){
  console.warn("Ejercicio 4")
    console.log(this.Object1);    
    console.log(this.Object2);    
    console.log(this.Object3);    
    alert("Mira el resultado por consola!")
}


/* 
Ejercicio 5:
Escribe un programa que almacene los objetos creados en el ejercio anterior del
proyecto dentro de un array (un array por cada modelo de datos). A continuación,
recorre cada uno de los arrays y muestra todas propiedades.
*/
arrayObject1: object[] = [];
arrayObject2: object[] = [];
arrayObject3: object[] = [];

const objectsToArray = (object: modeloDatos, arrayObject: object[]) =>{


    Object.entries(object).forEach(element => {
        arrayObject.push(element)
    });

    console.log("Array del objeto: ", arrayObject);
    
}

ejercicio5(){
  console.warn("Ejercicio 5")
    this.objectsToArray(this.Object1, this.arrayObject1)
    this.objectsToArray(this.Object2, this.arrayObject2)
    this.objectsToArray(this.Object3, this.arrayObject3)
       
    alert("Mira el resultado por consola!")
}


/* 
Ejercicio 6:
Escribe un programa que realice la conversión a JSON del array (y viceversa) creado
en el ejercicio anterior del proyecto.
*/

let json1: string;
let json2: string;
let json3: string;

let conversorArrayToJson = (array: object[]) => {

    let json = JSON.stringify(array)
    console.log("Json del Array: ", json);
    return json;
}

let conversorJsonToArray = (json: string) => {

    let array = JSON.parse(json)
    console.log("Array del Json: ", array);
}



btnEjercicio6a!.addEventListener("click", () => {

    if(arrayObject1.length === 0){
        alert("Haz primero el ejercicio 5 para continuar")
    }else{
        alert("Mira el resultado por consola!")
        console.warn("Ejercicio 6 (Array to JSON):")
        json1 = conversorArrayToJson(arrayObject1)
        json2 = conversorArrayToJson(arrayObject2)
        json3 = conversorArrayToJson(arrayObject3)
    }
});

btnEjercicio6b!.addEventListener("click", () => {


    if(json1 === ''){
        alert("Haz primero el ejercicio 6 (Array to Json) para continuar")
    }else{
        alert("Mira el resultado por consola!")
        console.warn("Ejercicio 6 (JSON to Array):")
        conversorJsonToArray(json1)
        conversorJsonToArray(json2)
        conversorJsonToArray(json3)
    }
});

/* 
Ejercicio 7:
Escribe un programa que haga uso del servicio web del banco y realice una petición
con AJAX a la url: http://localhost:8085/ok 
*/

const peticionAjax = async () =>{
    let request = await $.ajax({
        method: "GET",
        headers: {  'Access-Control-Allow-Origin': 'http://localhost:8085/ok' },
        url: "http://localhost:8085/ok"
      });

    
      
      return request;

} 

btnEjercicio7!.addEventListener("click", async () => {

    console.warn("Ejercicio 7")

    let respuesta = await peticionAjax()

    console.log(respuesta);
   
    alert("Mira el resultado por consola")
});

/* 
Ejercicio 8:
Crea una función en JavaScript que obtenga todos los gestores de forma periódica
cada 5 segundos.
*/

let interval: string | number | NodeJS.Timer | undefined;

btnEjercicio8!.addEventListener("click", () => {

    console.warn("Ejercicio 8")
    console.log("Inicio de interval");
    interval = setInterval(async() => {
        
        let data = await peticionAjax()

        if (data){
           data.banco.forEach((gestion: { gestor: any }) => {
            let gestor = gestion.gestor
            console.log({gestor});
           })
            
        }
   }, 5000);


});

btnEjercicio8stop!.addEventListener("click", () => {

    clearInterval(interval)
    console.log("Interval parado");
});




}
