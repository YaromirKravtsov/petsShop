const card = {
    "t00000":{
        "name":"Великий та шуршачий тунель  ",
        "url": "#",
        "image": "img/card-img.png",
        "prise": 250,
        "top": true,
        "interactive": false,
        "electrical": true,
        "catnip": false,
        "care": false,
        "dishes": false,
        "food":false,
        "properties ": "yes",
        "propertiesName": "Цвет",
        
    },
    "t00001":{
        "name":"Великий та шуршачий тунель  ",
        "url": "#",
        "image": "img/card-img.png",
        "prise": 250,
        "top": true,
        "interactive": false,
        "electrical": false,
        "catnip": false,
        "care": true,
        "dishes": false,
        "food":true
    },
    "t00002":{
        "name":"Великий та шуршачий тунель  ",
        "url": "#",
        "image": "img/card-img.png",
        "prise": 250,
        "top": false,
        "interactive": true,
        "electrical": true,
        "catnip": false,
        "care": true,
        "dishes": false,
        "food":false
    },
    "t00003":{
        "name":"Великий та шуршачий тунель  ",
        "url": "#",
        "image": "img/card-img.png",
        "prise": 250,
        "top": false,
        "interactive": true,
        "electrical": false,
        "catnip": false,
        "care": true,
        "dishes": false,
        "food":false
    },
    "t00004":{
        "name":"Великий та шуршачий тунель  ",
        "url": "#",
        "image": "img/card-img.png",
        "prise": 250,
        "top": false,
        "interactive": false,
        "electrical": true,
        "catnip": false,
        "care": true,
        "dishes": false,
        "food":false
    },
    "t00005":{
        "name":"Великий та шуршачий тунель  ",
        "url": "#",
        "image": "img/card-img.png",
        "prise": 250,
        "top": true,
        "interactive": false,
        "electrical": false,
        "catnip": false,
        "care": true,
        "dishes": false,
        "food":false
    },
};
function printCards(type){
    out = ""
    for(let key in card){
        if(card[key][type] == true) {
            out += `<div class="card" >`
            out += `<img src="${card[key]["image"]}">`;
            out += ` <h2>${card[key]["name"]} </h2>`;
            out += `<p>${card[key]["prise"]} ₴</p>`;
            out += `<div class="card-button" id = "addToBasket" data-articul = "${key}">Додати в кошик</div>`;
            out += `</div>`;
        }
        }
        document.querySelector(".content__row").innerHTML = out;
}
printCards('top')
document.getElementById("top").addEventListener("click", () =>{printCards('top')});
document.getElementById("Interactive").addEventListener("click", () =>{printCards('interactive')});
document.getElementById("Electrical").addEventListener("click", () =>{printCards('electrical')});
document.getElementById("Catnip").addEventListener("click", () =>{printCards('catnip')});
document.getElementById("Care").addEventListener("click", () =>{printCards('care')});
document.getElementById("dishes").addEventListener("click", () =>{printCards('dishes')});
document.getElementById("food").addEventListener("click", () =>{printCards('food')});

const basketObj = {}
let output = '';
let obj = {}
let totalPOut = '';
let totalP = 0;
let count = 0;

function desktopBasket(){
function totalValue(){
    totalPOut = '';
    totalP = 0;
    count = 0;
    for(let key in basketObj){
        totalP += basketObj[key]['prise'] * basketObj[key]['count'];
        count++;
    }   
    document.querySelector(".basket__total-quantity").innerHTML = `Усього товарів: ${count}`; 
    totalPOut+= totalP;
    document.querySelector(".basket__total-prise").innerHTML = `Загальна вартість: ${totalP} ₴`;
}
function printBasketDesktop(){
    output = ''
        obj = {...basketObj}
        for(let key in obj){
            output += `<div class="basket__card">`;
            output += ` <div class="basket__card-title"><img src="${obj[key]['image']}" alt=""> <p>${obj[key]['name']}</p></div>`;
            output += ` <div class="basket__card-prise">${obj[key]['prise']} </div>`;
            output += ` <div class="basket__card-quantity">
                            <div data-articul = "${key}" class="basket__card-quantity-left" id="minus">-</div>
                            <div class="basket__card-quantity-value" id="quantityValue">${obj[key]['count']}</div>
                            <div data-articul = "${key}" class="basket__card-quantity-right" id="plus">+</div>
                         </div>`;
            output += `<div class="basket__card-total-price">${obj[key]['count']*obj[key]['prise'] }</div>`;
          
            output += `<img data-articul = "${key}" id ="delete" class= "delete" src="img/basket-delete.png" alt="">`;
   
            output += `</div>`;
            output += `</div>`;
            }
       
        document.querySelector(".basket__cards").innerHTML = output;
        totalValue();
      
}

document.querySelector(".content__row").addEventListener("click", event =>{
    if(event.target.classList.contains('card-button')){
        let articul = event.target.dataset['articul'];
        if(basketObj[articul] !== undefined){
            basketObj[articul]['count']++;
        }
        else{
            basketObj[articul] = card[articul];
            basketObj[articul]['count'] = 1;
        }
        localStorage.setItem('card', JSON.stringify(basketObj));
        document.querySelector(".basket-wraper").style.display = "flex";
        document.body.style.overflowY = "hidden";
        printBasketDesktop();
    }
})

document.querySelector(".basket__cards").addEventListener("click", event =>{
    if(event.target.classList.contains('basket__card-quantity-left')){
        let articul = event.target.dataset['articul'];
        basketObj[articul]['count']--; 
        if(basketObj[articul]['count'] <= 0)/* delete basketObj[articul]; */ basketObj[articul]['count'] = 0
        printBasketDesktop();
    }
});
document.querySelector(".basket__cards").addEventListener("click", event =>{
    if(event.target.classList.contains('basket__card-quantity-right')){
        let articul = event.target.dataset['articul'];
        basketObj[articul]['count']++;
        if(basketObj[articul]['count'] <= 0)basketObj[articul]['count'] =0
        printBasketDesktop();
    }
});
document.querySelector(".basket__cards").addEventListener("click", event =>{
    if(event.target.classList.contains('delete')){
        let articul = event.target.dataset['articul'];
        delete basketObj[articul]; 
        printBasketDesktop();
    }
});
}

/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */

function mobileBasket(){
    function totalValue(){
        totalPOut = '';
        totalP = 0;
        count = 0;
        for(let key in basketObj){
            totalP += basketObj[key]['prise'] * basketObj[key]['count'];
            count++;
        }   
        document.querySelector(".basket-mobile__total-count").innerHTML = `Усього товарів:<br> ${count}`; 
        totalPOut+= totalP;
        document.querySelector(".basket-mobile__total-prise").innerHTML = `Загальна вартість:<br>  ${totalP} ₴`;
    }
    function printBasketMobile(){
        output = ''
        
            for(let key in basketObj){
                output += `<div class="basket__card-mobile">`;
                output += `<div class="basket__cards__row1">`;
                output += `<img src="${basketObj[key]["image"]}" alt="">`;
                output += ` <div class="basket__cards__row1__column">`;
                output += `<h2>${basketObj[key]["name"]}</h2>`;
                output += `  <p>${basketObj[key]["prise"]} ₴</p>`;
                output += ` </div>`;
                output += ` </div>`;
                output += ` <div class="basket__cards__row2">`;
                output += `<div class="basket__card-quantity">`;
                output += `<div data-articul = "${key}" class="basket__card-quantity-left" id="minus">-</div>`;
                output += ` <div class="basket__card-quantity-value" id="quantityValue">${basketObj[key]["count"]}</div>`;
                output += ` <div data-articul = "${key}" class="basket__card-quantity-right" id="plus">+</div>`;
                output += ` </div>`;
                output += `<img data-articul = "${key}"  class= "delete1" src="img/basket-delete.png" alt="">`;
                output += `</div>`;
                output += `</div> `;
                }
           
            document.querySelector(".basket__row-mobile").innerHTML = output;
            totalValue();
        
          
    }
    
    document.querySelector(".content__row").addEventListener("click", event =>{
        if(event.target.classList.contains('card-button')){
            let articul = event.target.dataset['articul'];
            if(basketObj[articul] !== undefined){
                basketObj[articul]['count']++;
            }
            else{
                basketObj[articul] = card[articul];
                basketObj[articul]['count'] = 1;
            }
            localStorage.setItem('card', JSON.stringify(basketObj));
            document.querySelector(".basket-wraper").style.display = "flex";
            document.body.style.overflowY = "hidden";
            console.log(basketObj)
            printBasketMobile();
        }
    })
    
    document.querySelector(".basket__row-mobile").addEventListener("click", event =>{
        if(event.target.classList.contains('basket__card-quantity-left')){
            let articul = event.target.dataset['articul'];
            console.log(1)
            basketObj[articul]['count']--; 
            if(basketObj[articul]['count'] <= 0)/* delete basketObj[articul]; */ basketObj[articul]['count'] = 0
            printBasketMobile();
        }
    });
    document.querySelector(".basket__row-mobile").addEventListener("click", event =>{
        if(event.target.classList.contains('basket__card-quantity-right')){
            let articul = event.target.dataset['articul'];
            basketObj[articul]['count']++;
            if(basketObj[articul]['count'] <= 0)basketObj[articul]['count'] =0
            printBasketMobile();
        }
    });
    document.querySelector(".basket__row-mobile").addEventListener("click", event =>{
        if(event.target.classList.contains('delete1')){
            let articul = event.target.dataset['articul'];
            delete basketObj[articul]; 
            printBasketMobile();
        }
    });
    }


if(window.screen.width>=780){
    desktopBasket();
}else mobileBasket();
/* ---------------------------------------------------------------------------------------------------------- */

