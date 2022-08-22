import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


resultado ?:number
n1:number
n2:number


resu:number
celsius:number
fahren:number






ionViewCanEnter(){

}

  constructor() {}
    som(){
      var num = Number(this.n1) + Number(this.n2)

      this.resultado = num


  }



  sub(){
    var num = Number(this.n1) - Number(this.n2)

    this.resultado = num

}


mult(){
  var num = Number(this.n1) * Number(this.n2)

  this.resultado = num

}


divi(){

  if(this.n2!=0){
    var num = Number(this.n1) / Number(this.n2)
    this.resultado = num

}

this.resultado = 0

}


clear(){

  var num = 0
   this.resultado = num
}



convert(){
  var r = (this.celsius * 1.8 )+32

  this.resu = Number(r)
}


  }




