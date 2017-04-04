var ul = document.getElementById("codirectors")


	for (var i = ul.children.length; i >= 0; i--) {
    	ul.appendChild(ul.children[Math.random() * i | 0]);
		}	

// setInterval(function(){
	// }, 10000);
