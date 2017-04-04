var ul = document.getElementById("codirectors")

// setInterval(function(){
	for (var i = ul.children.length; i >= 0; i--) {
    	ul.appendChild(ul.children[Math.random() * i | 0]);
		}	
	// }, 10000);


