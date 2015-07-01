var nav = document.getElementById('navLinks');
var button = document.getElementById('navButton');

(function(){
	var width = window.innerWidth;
		if(width >= 768){
			nav.classList.add('show');
		} else {
			nav.classList.add('hide');
		}

}("docReady", window));


button.addEventListener('click', function(){
	nav.classList.toggle('hide');
	nav.classList.toggle('show');
})

window.addEventListener('resize', function(){
	var width = window.innerWidth;
		if(width <= 768){
			nav.classList.add('hide');
			nav.classList.remove('show');
		} else {
			nav.classList.remove('hide');
			nav.classList.add('show');
		}
})

