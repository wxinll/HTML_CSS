window.onload = function(){
	var box = document.getElementById('container');
	var imgs = box.getElementsByTagName('img');

	var imgwidth = imgs[0].offsetWidth;
	var exposewidth = 160;

	var boxwidth = imgwidth + (imgs.length - 1) * exposewidth;
	box.style.width = boxwidth +'px';

	function setImgPos(){
		for (var i = 1; i < imgs.length; i++) {
			imgs[i].style.left = imgwidth + (i-1) * exposewidth + 'px';  
		}		
	}
	setImgPos();

	for (var i = 0; i < imgs.length; i++) {
		(function(i){
			imgs[i].onmouseover = function(){
				setImgPos();
				for (var j = 0; j <= i; j++) {
					imgs[j].style.left = j * exposewidth + 'px';
				}
			};
		})(i)
	}
};