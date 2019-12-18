window.onload = function(){
	
	var photos = document.querySelectorAll('.photos__review-photo'); 
	
	for(var i = 0; i < photos.length; i++){
			photos[i].onclick = activeItem;
		}
	
	function activeItem(){
		this.classList.toggle('active');
	}
}
