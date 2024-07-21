document.addEventListener("DOMContentLoaded", function () {
	const headers = document.querySelectorAll("h2");
	headers.forEach(header => {
		// Create a div to wrap the content
		let content = document.createElement('div');
		content.classList.add('accordion-content');
		// Collect child nodes until an hr or horizontal rule (---) is encountered
		let sibling = header.nextElementSibling;
		while (sibling && sibling.tagName !== 'H2') {
			if (sibling.tagName === 'HR' || sibling.textContent.trim() === '---') {
				break;
			}
			let nextSibling = sibling.nextElementSibling;
			content.appendChild(sibling);
			sibling = nextSibling;
		}
		// Insert the content div after the header
		header.insertAdjacentElement('afterend', content);
		// Add the accordion-header class to the header
		header.classList.add('accordion-header');
		// Add click event to the header
		header.addEventListener("click", function () {
			// Toggle the active class on the header
			this.classList.toggle("active");
			// Smooth transition for the content display
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
			// Optionally, collapse other content sections if needed
			headers.forEach(otherHeader => {
				if (otherHeader !== this) {
					otherHeader.classList.remove("active");
					otherHeader.nextElementSibling.style.maxHeight = null;
				}
			});
		});
	});
});
