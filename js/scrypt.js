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
