const image = document.getElementById('img');
const name = document.getElementById('name');
const profession = document.getElementById('profession');
const review = document.getElementById('review');

const data = [
	{ image:"image1.jpg",
	name:"Alex",
	profession:"UI Designer",
	review:"The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us. Thanks to its scheduling feature, we don’t need staff to work outside of business hours."
	},
	{image:"image2.jpg",
	name:"Adam",
	profession:"App Developer",
	review:"This app allows me to do [problem] from my smartphone where I want and when I want to. The interface is easy to navigate and I find everything I need quickly. I can’t wait for [feature]!"
	},
	{ image:"image3.jpg",
	name:"Peter",
	profession:"Surgeon",
	review:"Dr. X is an excellent professional. All staff was kind and made me feel very comfortable. I’m also very satisfied with the final result!."
	},
	{ image:"image4.jpg",
	name:"Louis",
	profession:"Real Estate Agent",
	review:"[Name of agent] was very professional. She was patient and showed us 20+ properties until we found the perfect one. She carefully listened to our needs and helped us find exactly what we were looking for."
	}
]

let count = 0;

function getPerson(){
	image.src = data[count].image;
	name.textContent = data[count].name;
	profession.textContent = data[count].profession;
	review.textContent = data[count].review;
}

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener("click", function(){
	count++ ;
	if (count > data.length-1) { count = 0};
	getPerson();
});

prevBtn.addEventListener("click", function(){
	count-- ;
	if (count <= -1) { count = data.length-1};
	getPerson();
})

