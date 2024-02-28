let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
});

//HOME
sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

//INTRODUCTION
sr.reveal('.hero-text-intro',{delay:400, origin:'top'});
sr.reveal('.hero-title-intro',{delay:450, origin:'top'});
sr.reveal('.hero-img-intro',{delay:400, origin:'top'});

//CONTACT
sr.reveal('.hero-title-contact',{delay:480, origin:'top'});
sr.reveal('.hero-img-contact1',{delay:400, origin:'top'});
sr.reveal('.hero-text-contact1',{delay:400, origin:'top'});
sr.reveal('.hero-img-contact2',{delay:400, origin:'top'});
sr.reveal('.hero-text-contact2',{delay:400, origin:'top'});
sr.reveal('.hero-img-contact3',{delay:400, origin:'top'});
sr.reveal('.hero-text-contact3',{delay:400, origin:'top'});

//RESUME
sr.reveal('.container',{delay:400, origin:'top'});
sr.reveal('.resume-link',{delay:400, origin:'top'});

//PROJECTS
sr.reveal('.hero-title-project',{delay:480, origin:'top'});
sr.reveal('.hero-img-project1',{delay:400, origin:'left'});
sr.reveal('.hero-text-project1',{delay:400, origin:'top'});
sr.reveal('.hero-img-project2',{delay:400, origin:'right'});
sr.reveal('.hero-text-project2',{delay:400, origin:'top'});
sr.reveal('.hero-img-project3',{delay:400, origin:'left'});
sr.reveal('.hero-text-project3',{delay:400, origin:'top'});

//TFT
sr.reveal('.hero-title-tft',{delay:450, origin:'top'});
sr.reveal('.hero-text-tft1',{delay:400, origin:'top'});
sr.reveal('.hero-img-tft1',{delay:400, origin:'top'});