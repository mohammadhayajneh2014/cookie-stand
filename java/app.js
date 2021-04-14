'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
let container = document.getElementById('render');
let table = document.createElement('table');
container.appendChild(table);

let sumColom=0;
var sumColomn=0;
let arrayShop=[];

 function readHour(){
    let th1 = document.createElement('th');
    table.appendChild(th1);
    th1.textContent = "   ";

    for(let b=0;b<hours.length ;b++){
    
        let th = document.createElement('th');
        table.appendChild(th);
        th.textContent = hours[b];
    }

 }
// from Grapper website helper function
function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function cookiesShop(name,min,max,avg){
    this.name =  name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this. numberOfCustumer= [];
    this.AverageCookisPerHour= [];
    this.total =0 ;
    this.totalcolomn=0;
    arrayShop.push(this);
    
  }
let Seattle = new cookiesShop('Seattle',23,65,6.3)
let Tokyo = new cookiesShop('Tokyo',3,24,1.2)
let Dubai = new cookiesShop('Dubai',11,38,3.7)
let Paris = new cookiesShop('Paris',20,38,2.3)
let Lima = new cookiesShop('Lima',2,16,4.6) 
console.log (arrayShop);


  cookiesShop.prototype.getcustumernumber = function()
  {
    for (let i = 0; i <= hours.length - 1; i++) {
        let v=0;
       
        v=randomValue(this.min, this.max)
        this.total=this.total+v
        console.log(this.total)
        this.numberOfCustumer.push( v)
    };
   console.log('number of custumer array',this.numberOfCustumer)
}
 
cookiesShop.prototype.getAverageCookisPerHour = function () {
    let arr=[];
    for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
        this.AverageCookisPerHour.push(Math.floor(this.numberOfCustumer[n] * this.avg))
//arr.push(this.numberOfCustumer[n]*this.avg)
       
    }


   // console.log('number of custumer array',this.numberOfCustumer)
    console.log('Average Cookis Per Hour',this.AverageCookisPerHour) 
}


cookiesShop.prototype.total2 = function(){

}
readHour();
let th1 = document.createElement('th');
table.appendChild(th1);
th1.textContent = "total colomn";

cookiesShop.prototype.render = function(){

    var tr = document.createElement('tr');
    table.appendChild(tr);
    tr.textContent =this.name;
   
for(let b=0;b<hours.length ;b++){

    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent =this.AverageCookisPerHour[b];
  
}
let x=0
for(let a=0;a<hours.length;a++){

x=x+this.AverageCookisPerHour[a];
}
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent =x;

}


let form = document.getElementById('cookie');
form.addEventListener("submit",newone);
function newone (event){
    event.preventDefault();
    //console.log(event);

    let newName=event.target.cookiesName.value;
console.log(newName);

let minimum=event.target.min.value;
minimum=parseInt(minimum)
console.log(typeof minimum);

let maximum=event.target.max.value;
maximum=parseInt(maximum)
console.log(typeof maximum);

let avgAvg=event.target.avg.value;
avgAvg=parseFloat(avgAvg)
console.log(typeof avgAvg);

let newsub = new cookiesShop(newName,minimum,maximum,avgAvg) 
table.removeChild(table.lastElementChild);
newsub.getcustumernumber();
newsub.getAverageCookisPerHour();
newsub.render();
totalfun();

} 

for(let i=0 ;i<arrayShop.length;i++){

    arrayShop[i].getcustumernumber();
    arrayShop[i].getAverageCookisPerHour();
    arrayShop[i].render();
    arrayShop[i].total2();  
    
  } 
  totalfun(); 
    //Seattle.render();
    console.log(arrayShop);


    function totalfun (){

var tr2 = document.createElement('tr');
table.appendChild(tr2);
tr2.textContent ='total raw';

for(let i=0;i<hours.length;i++){
    var totalColom=0;
    let td = document.createElement('td');
    tr2.appendChild(td);
    for (let a =0; a<arrayShop.length ;a++) {
     sumColom = totalColom+=arrayShop[a].AverageCookisPerHour[i] 
            
}
sumColomn=sumColomn+sumColom 
    td.textContent =sumColom;
//sumValue(sumColom);  
console.log('hallo from total',totalColom)
console.log('hallo from location', sumColom)
}
let td = document.createElement('td');
tr2.appendChild(td);
td.textContent =sumColomn;

}