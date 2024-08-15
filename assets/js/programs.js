// Playlist Cover generator!
document.addEventListener('DOMContentLoaded', () => {
	let c = document.querySelector('canvas');
	if (!c) {
	  console.error('Canvas element not found');
	}
	let ctx = c.getContext('2d');
	let fontName = 'CircularSp';
	// Define the font URL
	let genURL = window.siteConfig.genURL;
	let fontUrl = "url('"+`${genURL}/assets/fonts/CircularSpotifyText-Bold.otf`+"')";
	// let fontUrl = "url('/assets/fonts/CircularSpotifyText-Bold.otf')";
	let f = new FontFace(fontName, fontUrl);
	f.load().then(function () {
	  document.fonts.add(f);
	  ctx.font = '72px ' + fontName;
	  console.log('font loaded', ctx.font);
	  updateCover();
	}).catch(function (error) {
	  console.error('Error loading font:', error);
	});
	let face = new Image();
	let faceLoaded = false;
	face.onload = function () {
	  faceLoaded = true;
	  console.log('face loaded');
	  URL.revokeObjectURL(face.src);
	  updateCover();
	};
	let f1 = document.querySelector('.f1');
	if (!f1) {
	  console.error('File input element not found');
	} else {
	  f1.addEventListener('change', fileChange);
	}
	function fileChange(e) {
	  if (e.target.files && e.target.files[0]) {
		face.src = URL.createObjectURL(e.target.files[0]);
	  } else {
		console.error('No file selected');
	  }
	}
	let z1 = document.querySelector('.z1');
	let z2 = document.querySelector('.z2');
	let z3 = document.querySelector('.z3');
	let c1 = document.querySelector('.c1');
	let c2 = document.querySelector('.c2');
	let c3 = document.querySelector('.c3');
	let opacitySlider = document.querySelector('#opacitySlider');
	let blendModeDropdown = document.querySelector('#blendMode');
	if (!z1 || !z2 || !z3 || !c1 || !c2 || !c3 || !opacitySlider || !blendModeDropdown) {
	  console.error('One or more input elements not found');
	}
	let textpos = { l: 72, t: 485 };
	let lh = 76;
	function updateCover() {
	  console.log('Updating cover');
	  // clear
	  ctx.clearRect(0, 0, 720, 720);
	  // gradient
	  let gradient = ctx.createLinearGradient(720, 0, 0, 720);
	  gradient.addColorStop(0, c1.value);
	  gradient.addColorStop(0.6, c2.value);
	  gradient.addColorStop(1, c3.value);
	  ctx.fillStyle = gradient;
	  ctx.globalAlpha = opacitySlider.value;
	  ctx.fillRect(0, 0, 720, 720);
	  // face
	  ctx.globalCompositeOperation = blendModeDropdown.value;
	  ctx.globalAlpha = 0.5;
	  if (faceLoaded) {
		let canvasAspect = c.width / c.height;
		let imgAspect = face.width / face.height;
		let sx, sy, sWidth, sHeight;
  
		if (canvasAspect > imgAspect) {
		  sWidth = face.width;
		  sHeight = face.width / canvasAspect;
		  sx = 0;
		  sy = (face.height - sHeight) / 2;
		} else {
		  sWidth = face.height * canvasAspect;
		  sHeight = face.height;
		  sx = (face.width - sWidth) / 2;
		  sy = 0;
		}
		ctx.drawImage(face, sx, sy, sWidth, sHeight, 0, 0, c.width, c.height);
	  }
	  ctx.globalCompositeOperation = 'source-over';
	  ctx.globalAlpha = 1;
	  // text
	  ctx.fillStyle = 'white';
	  ctx.font = '72px ' + fontName;
	  ctx.fillText(z1.value, textpos.l, textpos.t);
	  ctx.fillText(z2.value, textpos.l, textpos.t + lh);
	  ctx.fillText(z3.value, textpos.l, textpos.t + (lh * 2));
	}
	if (z1 && z2 && z3) {
	  z1.addEventListener('input', updateCover);
	  z2.addEventListener('input', updateCover);
	  z3.addEventListener('input', updateCover);
	  z1.value = '🌌The';
	  z2.value = 'Journey';
	  z3.value = 'by-Kibzai';
	}
	if (c1 && c2 && c3) {
	  c1.addEventListener('input', updateCover);
	  c2.addEventListener('input', updateCover);
	  c3.addEventListener('input', updateCover);
	  c1.value = '#3a86ff';
	  c2.value = '#8338ec';
	  c3.value = '#ff006e';
	}
	if (opacitySlider && blendModeDropdown) {
	  opacitySlider.addEventListener('input', updateCover);
	  blendModeDropdown.addEventListener('input', updateCover);
	}
	updateCover();
	let saveButton = document.querySelector('.save');
	if (!saveButton) {
	  console.error('Save button not found');
	} else {
	  saveButton.addEventListener('click', save);
	}
	function save() {
	  let image = c.toDataURL("image/jpeg");
	  let link = document.createElement('a');
	  link.href = image;
	  link.download = `${z1.value} ${z2.value} ${z3.value}`;
	  document.body.appendChild(link);
	  link.click();
	  document.body.removeChild(link);
	}
  });
  