// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
/*document.getElementById('loadQuote').addEventListener("click", printQuote, false);  */


/*  Here is the array with  5 objects and each object has two value/pairs one for quotes and one for source */

//THis is an array of objects and is used to the array uses [] and each object is separated by { } and a ,
// objects are also used to have a key and a value with a semi colon separating them 


let skills = [
	{
		skill: 'Bootstrap Design',
		category: "Front End Development"
	},

	{
		skill: 'CSS Grid',
		category: "Front End Development"
	},

	{
		skill: 'HTML Layout',
		category: "Front End Developement"
	},

	{ 
		skill: 'Array & Objects',
		category: "Javascript"

	},

	{
		skill: 'Functions',
		category: "Javascript"
	}


];

/*  This is a function to get a random quote---I have usd the random()  function to get a number from 0-1 multiplied it by the length of the quotes array
and the used the math.floor to round the number to an integer */

//The random number generator pics a number fromt he total length of the array, the random function generates a number from 0-1 and then you times it by the length
// and then use the Math.floor to round it down, I have created a separate function and then called it in the next function when it is run and stored the out put in a variable
// I think a good way to to use function and take input and store inputs in variable sna dthen use the vairable in other functions and store then in variables 
//it is a good way to break thigns up , functions take inout and create outputs, the inputs can be added dymanically 
// the return statement says what should be the output of the function and what value it should return 

 function getRandomSkill (){
	 var random =Math.floor(Math.random()*skills.length);
	 return random; 

	}

/*  the printQuote function  takes the results from the GetRandomQuote Function and builds some HTMl from it and selects the place on the HTML page to insert the created HTML */

//the next function takes the resutls of the first functino by calling it and storing it in a  variable.
//it then accesses the array called skills and inserts the results of the function stored in the vairable random
//I have saved the results of accessing two object values using the random selector in two variables mySkills & Mycategory
//I then selected two sections ont he html site one for skills and one for category
//the next things i did was set the innerHTML of these sections to the results of the query for the array, 
// to access the array you need to first name the array skills and then use an index number to choose a number in the array 
//  the number chooses one item in the array and then you need to choose one of the values in the object with the dot notation .  
// This will select one of the keys in the object and will return the value selected
//


function printSkill(){

	let random = getRandomSkill();
	var mySkills = skills[random].skill;
	var myCategory = skills[random].category;
	var skill = document.getElementsByClassName('skill')[0];
	var category = document.getElementsByClassName('category')[0];
	skill.innerHTML = mySkills;
	category.innerHTML= myCategory;
}

/*  THis is the part where I select the part of the page and set an event handler to the section */

//


document.getElementById('loadSkill').addEventListener("click", printSkill, false); 
document.getElementById('loadEducation').addEventListener("click", printEducation, false); 
document.getElementById('loadExperience').addEventListener("click", printExperience, false); 
document.getElementById('loadAchievements').addEventListener("click", printAchievement, false); 



//Create objects for each one of these
//Section for Education, Experience, Awards
// Testimonails of previous employers



var education = [
{
	School:  'University of Utah',
	Degree: "Finance BA"
},
{
	School: "University of Utah",
	Degree: "Master of Business Finance"
},
{
	School: 'Western Governors University',
	Degree: "Accounting BA"
},
{
	School: 'Team Treehouse ',
	Degree: 'Full Stack Javascript Tech Degree'
},
{
	School: 'Team Treehouse',
	Degree: 'Front End Development '
}
]

console.log(education);


 function getRandomEducation (){
	 var random =Math.floor(Math.random()*education.length);
	 return random; 

	}

function printEducation(){

	let random = getRandomEducation();
	var mySkills = education[random].School;
	var myCategory = education[random].Degree;
	var skill = document.getElementsByClassName('skill')[0];
	var category = document.getElementsByClassName('category')[0];
	skill.innerHTML = mySkills;
	category.innerHTML= myCategory;
}



var experience = [

{
	Company:  "Curb Real Estate",
	Position: "Associate Broker",
	Responsibilities: "Many"
},

{
	Company:  "Realty Path Real Estate",
	Position: "Associate Broker",
	Responsibilities: "Many"
},

{
	Company:  "TD Ameritrade",
	Position: "Sales Associate",
	Responsibilities: "Many"
},

{
	Company:  "Robison & Company",
	Position: "Associate Broker",
	Responsibilities: "Many"
}


]

function getRandomExperience (){
	 var random =Math.floor(Math.random()*experience.length);
	 return random; 

	}

function printExperience(){

	let random = getRandomExperience();
	var mySkills = experience[random].Company;
	var myCategory = experience[random].Position;
	var myResponsibility = experience[random].Responsibilities;

	var skill = document.getElementsByClassName('skill')[0];
	var category = document.getElementsByClassName('category')[0];
	var responsibility = document.getElementsByClassName('responsibility')[0];

	skill.innerHTML = mySkills;
	category.innerHTML= myCategory;
	responsibility.innerHTML= myResponsibility;

}


var achievements = [
{
	Company: "Curb Real Estate",
	Title: "Outstanding Sales Performance",
	Year: '2016'
},
{
	Company: "Realty Path Real Estate",
	Title: "Outstanding Sales Performance",
	Year: '2015'
},

{
	Company: "Realty Path Real Estate",
	Title: "Outstanding Leadership Performance",
	Year: '2014'
},
]

function getRandomAchievement (){
	 var random =Math.floor(Math.random()*achievements.length);
	 return random; 

	}

function printAchievement(){

	let random = getRandomAchievement();
	var mySkills = achievements[random].Company;
	var myCategory = achievements[random].Title;
	var myResponsibility = achievements[random].Year;

	var skill = document.getElementsByClassName('skill')[0];
	var category = document.getElementsByClassName('category')[0];
	var responsibility = document.getElementsByClassName('responsibility')[0];

	skill.innerHTML = mySkills;
	category.innerHTML= myCategory;
	responsibility.innerHTML= myResponsibility;

}



console.log(experience);

console.log(skills);

console.log(achievements);


// Regular Array 




//var objA = 

var showButton = document.getElementById('loadArray');

showButton.addEventListener('click', showArray, true);

function showArray(){
	var text = "";

	var show =document.getElementById('showArray');
	for (i=0; i<g.length; i++){
		 text += "The month is " + g[i] + "<br>";
	}
	show.innerHTML = text;
 
	

}


//AssociativeArray 

var showButtonA = document.getElementById('loadArrayA');

showButtonA.addEventListener('click', showArrayA, true);

function showArrayA(){
	var text = "";

	var show =document.getElementById('showArrayA');
	for (i=0; i<assA.length; i++){
		 text += "The month is " + assA[i][2]+ "<br>";
	}
	show.innerHTML = text;
 
	

}




//AssociativeArray 

