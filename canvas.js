var canvas = document.querySelector('canvas');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		var context = canvas.getContext('2d');

		context.fillStyle='rgba(255, 0, 0, 0.5)';
		context.fillRect(100, 100, 100, 100);
		context.fillStyle='rgba(0, 255, 0, 0.5)';
		context.fillRect(300, 200, 100, 100);
		console.log(canvas);

	function myMap() {
		    	var mapOptions = {
			        center: new google.maps.LatLng(1.2921, 36.8219),
			        zoom: 10,
			        mapTypeId: google.maps.MapTypeId.HYBRID
			    }
				var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			}
