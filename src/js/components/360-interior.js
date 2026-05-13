$(function () {
	function initPanorama() {
		console.log('loaded')
		var infospot1, infospot2, infospot3, infospot4, infospot5, infospot6, infospot7, infospot8, infospot9, infospot10, infospot11, infospot13, panorama, viewer, parameters;
		var interiorContainer = document.getElementById('interior-360');
		var infoIcon = 'data:image/png;base64,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'

		// var textureLoader = new THREE.TextureLoader();

		// var texture = textureLoader.load(url, function(){
		// 	var infospot = new PANOLENS.Infospot('scale','url');
		// });

		// Focus tweening parameter
		parameters = {
			amount: 50,
			duration: 1000,
			curve: 'Exponential',
			easing: 'Out',
			iterative: false
		};

		infospot1 = new PANOLENS.Infospot(350, infoIcon);
		infospot1.position.set(4779.29, -1417.59, -228.00);
		infospot1.addEventListener('click', onFocus);
		infospot1.addHoverElement(document.getElementById('soft-touch-feature'), 200);

		infospot2 = new PANOLENS.Infospot(350, infoIcon);
		infospot2.position.set(3801.07, -1632.96, -2800.50);
		infospot2.addEventListener('click', onFocus);
		infospot2.addHoverElement(document.getElementById('lcd-meter-feature'), 200);

		infospot3 = new PANOLENS.Infospot(350, infoIcon);
		infospot3.position.set(3333.48, -3714.42, -162.99);
		infospot3.addHoverElement(document.getElementById('speed-dual-feature'), 200);
		infospot3.addEventListener('click', onFocus);

		infospot4 = new PANOLENS.Infospot(350, infoIcon);
		infospot4.position.set(4180.28, -2647.74, -671.36);
		infospot4.addHoverElement(document.getElementById('infotainment-feature'), 200);
		infospot4.addEventListener('click', onFocus);

		infospot5 = new PANOLENS.Infospot(350, infoIcon);
		infospot5.position.set(3868.05, -3116.24, -186.23);
		infospot5.addHoverElement(document.getElementById('dual-zone-feature'), 200);
		infospot5.addEventListener('click', onFocus);

		infospot6 = new PANOLENS.Infospot(350, infoIcon);
		infospot6.position.set(-1377.29, -4791.09, 331.57);
		infospot6.addHoverElement(document.getElementById('air-purifier-feature'), 200);
		infospot6.addEventListener('click', onFocus);

		infospot7 = new PANOLENS.Infospot(350, infoIcon);
		infospot7.position.set(-2714.10, -282.47, -4177.87);
		infospot7.addHoverElement(document.getElementById('nappa-leather-feature'), 200);
		infospot7.addEventListener('click', onFocus);

		infospot8 = new PANOLENS.Infospot(350, infoIcon);
		infospot8.position.set(1129.28, -4220.22, -2424.75);
		infospot8.addHoverElement(document.getElementById('front-ventilated-feature'), 200);
		infospot8.addEventListener('click', onFocus);

		infospot9 = new PANOLENS.Infospot(350, infoIcon);
		infospot9.position.set(-2470.43, -4104.11, 1408.34);
		infospot9.addHoverElement(document.getElementById('power-seat-feature'), 200);
		infospot9.addEventListener('click', onFocus);

		infospot10 = new PANOLENS.Infospot(350, infoIcon);
		infospot10.position.set(3118.05, -3821.53, -796.99);
		infospot10.addHoverElement(document.getElementById('electric-parking-feature'), 200);
		infospot10.addEventListener('click', onFocus);

		infospot11 = new PANOLENS.Infospot(350, infoIcon);
		infospot11.position.set(3440.11, -3569.18, 617.39);
		infospot11.addHoverElement(document.getElementById('drive-mode-feature'), 200);
		infospot11.addEventListener('click', onFocus);

		infospot12 = new PANOLENS.Infospot(350, infoIcon);
		infospot12.position.set(2769.98, 4150.52, 212.71);
		infospot12.addHoverElement(document.getElementById('panaromic-sunroof-feature'), 200);
		infospot12.addEventListener('click', onFocus);

		infospot13 = new PANOLENS.Infospot(350, infoIcon);
		infospot13.position.set(4942.41, 746.52, -4.74);
		infospot13.addHoverElement(document.getElementById('auto-diming-feature'), 200);
		infospot13.addEventListener('click', onFocus);

		panorama = new PANOLENS.ImagePanorama('/assets/x70/2020/img/section/360/Interior/X70Proton360Interior.png');
		panorama.add(infospot1, infospot2, infospot3, infospot4, infospot5, infospot6, infospot7, infospot8, infospot9, infospot10, infospot11, infospot12, infospot13);

		viewer = new PANOLENS.Viewer({
			container: interiorContainer,
			output: 'console',
			controlBar: false,
			autoHideInfospot: false
		});
		// viewer.OrbitControls.noZoom = true;
		// viewer.getCamera().fov = 120;
		// viewer.OrbitControls.center.x = -100;
		// viewer.camera.position.y = 800
		// console.log(viewer.camera)
		// console.log(viewer.OrbitControls.center.x)

		viewer.OrbitControls.maxFov = 50;
		viewer.setCameraFov(50);
		viewer.camera.position.set(2000, 850, 0);
		viewer.add(panorama);

		function onFocus(event) {
			var id = '#' + this.element.id
			this.focus(parameters.duration, TWEEN.Easing[parameters.curve][parameters.easing]);

			if (this.element) {
				this.onHoverStart(event);
				// Lock element
				this.lockHoverElement();
				$('.panolens-infospot').not(id).hide();
			}
		}
	}

	var interiorView = $('.interior-360-wrapper');
	var exteriorView = $('.exterior-360-wrapper');
	var interiorBtn = $('.btn-interior');
	var exteriorBtn = $('.btn-exterior');

	$(interiorBtn).click(function (event) {
		event.preventDefault();
		$(exteriorView).addClass('d-none');
		$(interiorView).removeClass('d-none');
		initPanorama();
		console.log('loading')
	})

	$(exteriorBtn).click(function (event) {
		event.preventDefault();
		$(interiorView).addClass('d-none');
		$(exteriorView).removeClass('d-none');
	})
})