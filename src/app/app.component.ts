import { Component } from '@angular/core';
import {Producto} from 'src/app/componet.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda Virtual';
  nombre = "Diego";
  edad = 30;
  img = "https://source.unsplash.com/random";
  habilitado = false;
  ejemplo = "";
  widthImg ="50";

  form = {
    name: "",
    email: "",
    password: "",
  }

  box = {
    width : "100",
    height : "100",
    background : "red"
  }

  products: Producto[]= [
    {
      name: "Aceite T1",
      price: 40,
      image: "./assets/imagen/producto1.png",
      comentario: "Producto en Descuento hasta fin de mes"
    },
    {
      name: "Aceite T2",
      price: 42,
      image: "./assets/imagen/producto2.webp",
    },
    {
      name: "Aceite T3",
      price: 43,
      image: "./assets/imagen/producto3.webp",
    },
    {
      name: "Bateria 1",
      price: 200,
      image: "./assets/imagen/producto4.jpg",
    },
    {
      name: "Bateria 2",
      price: 220,
      image: "./assets/imagen/producto5.jpg",
    },
    {
      name: "Bateria 3",
      price: 250,
      image: "./assets/imagen/producto6.jpg",
    },
    {
      name: "Neumaticos e1",
      price: 400,
      image: "./assets/imagen/producto7.jpg",
    },
    {
      name: "Neumaticos e2",
      price: 450,
      image: "./assets/imagen/producto8.jpg",
    },
    {
      name: "Neumaticos e3",
      price: 500,
      image: "./assets/imagen/producto9.jpg",
    },
    {
      name: "Aceite T2",
      price: 42,
      image: "./assets/imagen/producto2.webp",
    },
    {
      name: "Aceite T2",
      price: 42,
      image: "./assets/imagen/producto2.webp",
    },
    {
      name: "Aceite T2",
      price: 42,
      image: "./assets/imagen/producto2.webp",
    },
  ]


  newName = "";
  chocolates :string[] = [
    "Pakari",
    "Nestle",
    "Republica del Cacao",
    "Nicolo",
    "Manicho"
  ]

  person = {
    name : "Alexander",
    age : 30,
    avatar : 'https://img.freepik.com/vector-gratis/hombre-muestra-gesto-gran-idea_10045-637.jpg?w=2000'
  }

  //Funciones
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }

  increaseAge(){
    this.person.age += 1
  }

  onScroll(event : Event){
    const element = event.target as HTMLInputElement;
    console.log(element.scrollTop)
  }

  agregarChololate(){
    this.chocolates.push(this.newName);
    this.newName = "";
  }

  borrarChocolate(index:number){
    this.chocolates.splice(index, 1);
  }

  onRegister(){
    console.log(this.onRegister)
  }
}
