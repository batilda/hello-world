function galleryImage(numImage) {
	//среда и четверг поменяны местами, так как флоаты 2345 идут горизонтально, а дни недели - вертикально, 2435		
	var imageMessages = [
	"Cheese Sticks - on mondays!",
	"Croissants - on tuesdays!",
	"Berries - on thursdays!",
	"Pizza - on wednesdays!",
	"Noodle - on fridays!",
	"We have nothing on this day of week"
	];
	if ((numImage >= 0)&&(numImage < imageMessages.length)) {
		alert(imageMessages[numImage - 1]);
	} else
	alert(imageMessages[imageMessages.length - 1]);	
}


var featImages = [
 	"img/feat11.png", "img/feat12.png", "img/feat13.png", "img/feat14.png",
 	"img/feat21.png", "img/feat22.png", "img/feat23.png", "img/feat24.png",
 	"img/feat31.png", "img/feat32.png", "img/feat33.png", "img/feat34.png",
 	"img/feat41.png", "img/feat42.png", "img/feat43.png", "img/feat44.png"  
];

var sliderPos = 0; // Позиции слайдера - 0,1,2,3
var imagesInRow = 4; // 4 картинки в ряду для каждой позиции

function prevSliderFeatureDishes() {    	
	var sliderDotOld = 'sliderDot' + (sliderPos + 1); // Этот кружок станет пассивным
	var featImg1 = document.getElementById('featImg1');    
	var featImg2 = document.getElementById('featImg2');    
	var featImg3 = document.getElementById('featImg3');    
	var featImg4 = document.getElementById('featImg4');
	sliderPos--;
	if(sliderPos < 0) {
		sliderPos = imagesInRow - 1;	
	} 
	featImg1.src = featImages[sliderPos * imagesInRow]; //картинки 1,5,9,13
	featImg2.src = featImages[sliderPos * imagesInRow  + 1]; // и так далее 
	featImg3.src = featImages[sliderPos * imagesInRow  + 2];
	featImg4.src = featImages[sliderPos * imagesInRow  + 3];
	var sliderDotNew = 'sliderDot'+ (sliderPos + 1); // Этот кружок станет активным	
	var sliderDotPassive = document.getElementById(sliderDotOld);
	sliderDotPassive.style.color = '#b9b9b9';	
	var sliderDotActive = document.getElementById(sliderDotNew);
	sliderDotActive.style.color = '#3b3b3b';		
}

function nextSliderFeatureDishes() {	
	var sliderDotOld = 'sliderDot' + (sliderPos + 1); // Этот кружок станет пассивным
	var featImg1 = document.getElementById('featImg1');
	var featImg2 = document.getElementById('featImg2');    
	var featImg3 = document.getElementById('featImg3');    
	var featImg4 = document.getElementById('featImg4');
	sliderPos++;
	if(sliderPos >= imagesInRow) {
		sliderPos = 0;
	}	
	featImg1.src = featImages[sliderPos * imagesInRow ]; //картинки 1,5,9,13
	featImg2.src = featImages[sliderPos * imagesInRow  + 1]; // и так далее 
	featImg3.src = featImages[sliderPos * imagesInRow  + 2];
	featImg4.src = featImages[sliderPos * imagesInRow  + 3];
	var sliderDotNew = 'sliderDot'+ (sliderPos + 1); // Этот кружок станет активным	
	var sliderDotPassive = document.getElementById(sliderDotOld);
	sliderDotPassive.style.color = '#b9b9b9';	
	var sliderDotActive = document.getElementById(sliderDotNew);
	sliderDotActive.style.color = '#3b3b3b';	
}


