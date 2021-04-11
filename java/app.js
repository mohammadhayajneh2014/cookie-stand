'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
const Seattle = {
    min: 23,
    max: 65,
    Avg: 6.3,
    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Seattle.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            this.AverageCookisPerHour.push(Math.floor(this.numberOfCustumer[n] * this.Avg))
        }
        console.log('Average Cookis Per Hour',this.AverageCookisPerHour)
    },
    display:function(){
        let container = document.getElementById('display');
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = null;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = this.numberOfCustumer[i];// this.likes[0];
        }},


}

Seattle.getcustumernumber();
Seattle.getAverageCookisPerHour();
Seattle.display();


// from Grapper website helper function
function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

  const Tokyo = {
    min: 3 ,
    max: 24 ,
    Avg: 1.2 ,
    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Tokyo.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            this.AverageCookisPerHour.push(Math.floor(this.numberOfCustumer[n] * this.Avg))
        }
        console.log('Average Cookis Per Hour',this.AverageCookisPerHour)
    },

    display:function(){
        let container = document.getElementById('display');
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = null;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = this.numberOfCustumer[i];// this.likes[0];
        }},
}
Tokyo.getcustumernumber();
Tokyo.getAverageCookisPerHour();
Tokyo.display();
   const Dubai = {
    min: 11 ,
    max: 38 ,
    Avg: 3.7 ,
    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Dubai.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            this.AverageCookisPerHour.push(Math.floor(this.numberOfCustumer[n] * this.Avg))
        }
        console.log('Average Cookis Per Hour',this.AverageCookisPerHour)
    },
    display:function(){
        let container = document.getElementById('display');
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = null;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = this.numberOfCustumer[i];// this.likes[0];
        }},

}
Dubai.getcustumernumber();
Dubai.getAverageCookisPerHour();
Dubai.display();
  const Paris = {
    min: 20 ,
    max: 38 ,
    Avg: 2.3 ,

    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Paris.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            this.AverageCookisPerHour.push(Math.floor(this.numberOfCustumer[n] * this.Avg))
        }
        console.log('Average Cookis Per Hour',this.AverageCookisPerHour)
    },
    display:function(){
        let container = document.getElementById('display');
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = null;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = this.numberOfCustumer[i];// this.likes[0];
        }},
}
Paris.getcustumernumber();
Paris.getAverageCookisPerHour();
Paris.display();
  const Lima = {
    min: 2 ,
    max: 16 ,
    Avg: 4.6 ,
    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Lima.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            this.AverageCookisPerHour.push(Math.floor(this.numberOfCustumer[n] * this.Avg))
        }
        console.log('Average Cookis Per Hour',this.AverageCookisPerHour)
    },
    display:function(){
        let container = document.getElementById('display');
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = null;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = this.numberOfCustumer[i];// this.likes[0];
        }},

}
Lima.getcustumernumber();
Lima.getAverageCookisPerHour();
Lima.display();

