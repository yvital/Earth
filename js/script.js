window.onload = function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	scene.background = new THREE.Color( 0xffffff );

	var light = new THREE.DirectionalLight( 0xffffff );
	light.position = camera.position;
	scene.add(light);

	var ambient = new THREE.AmbientLight( 0xffffff);
	scene.add(ambient);

	var geometry = new THREE.SphereGeometry( 1.3, 60, 60 );
	var Texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/yvital/Earth/master/img/earth.jpg');
	var material = new THREE.MeshLambertMaterial({ map: Texture, transparent: true, opacity: 0.5 });
	material.depthWrite = false;
	
	var earth = new THREE.Mesh( geometry, material );
	earth.position.x = -0.5;
	scene.add( earth );

	var earth_2 = new THREE.Mesh( geometry, material );
	earth_2.position.x = 0.5;
	scene.add( earth_2 );

	camera.position.z = 5;

	var animate = function () {
	requestAnimationFrame( animate );

		earth.rotation.y += 0.01;
		earth_2.rotation.y += 0.01;
		renderer.render( scene, camera );
	};

	animate();

}	