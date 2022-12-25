"use strict"
/* Меню бургер */

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const droDownMenu = document.querySelector(".dropdown");

if(iconMenu){
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

	});

}
if(window.screen.width <=1100){
	let count = 0;
 	droDownMenu.addEventListener("click", () =>{
		count++
		if(count %2 !=0){
			document.querySelector('.dropdown-content').style.display = "block"
		}else	document.querySelector('.dropdown-content').style.display = "none"


	});	
}

const basket = document.getElementById("basket");
const continueBuy= document.getElementById("continue");


basket.addEventListener("click", () =>{
	document.querySelector(".basket-wraper").style.display = "flex";
	if(window.screen.width>=780){
		document.querySelector(".basket-desktop").style.display = "flex";
		document.querySelector(".basket-mobile").style.display = "none";
		
	}else {
		document.querySelector(".basket-desktop").style.display = "none";
		document.querySelector(".basket-mobile").style.display = "flex";
	}
	
	if(window.screen.width>=780)document.body.style.overflowY = "hidden";
	else document.body.style.overflowY = "auto";
});

document.getElementById("continue").addEventListener("click", () =>{
	document.querySelector(".basket-wraper").style.display = "none";
	document.body.style.overflowY = "auto";
});
document.getElementById("continue1").addEventListener("click", () =>{
	document.querySelector(".basket-wraper").style.display = "none";
	document.body.style.overflowY = "auto";
});
