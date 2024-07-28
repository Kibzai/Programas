// assets/js/scripts.js
console.log("Scripts JS loaded.");
// Copy Code Blocks
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('pre code').forEach((block) => {
		// Create and append the copy button
		let btn = document.createElement('button');
		btn.className = 'copy-btn';
		btn.textContent = 'Copy';
		block.parentNode.insertBefore(btn, block);
		// Add click event listener
		btn.addEventListener('click', () => {
			// Copy code to clipboard
			let code = block.textContent;
			let el = document.createElement('textarea');
			el.value = code;
			document.body.appendChild(el);
			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);
			// Button feedback
			btn.textContent = 'Copied!';
			setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
		});
	});
});
// External Links to new tab
document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('a');
	const currentHost = window.location.host;

	links.forEach(link => {
		try {
			const linkUrl = new URL(link.href);
			const linkHost = linkUrl.host;

			// Check if the link is external
			if (linkHost && linkHost !== currentHost) {
				link.setAttribute('target', '_blank');
			}
		} catch (e) {
			// If the URL is invalid (e.g., mailto: or javascript:), do nothing
		}
	});
});
// Open fullscreen
function openFullscreen() {
	let elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { // Firefox
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { // IE/Edge
		elem.msRequestFullscreen();
	}
}