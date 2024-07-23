// H2 t accordions
document.addEventListener("DOMContentLoaded", function () {
	const headers = document.querySelectorAll("h2");
	headers.forEach(header => {
		// Crear un div para envolver el contenido
		let content = document.createElement('div');
		content.classList.add('accordion-content');
		// Recoger nodos hijos hasta encontrar un hr o una regla horizontal (---)
		let sibling = header.nextElementSibling;
		while (sibling && sibling.tagName !== 'H2') {
			if (sibling.tagName === 'HR' || sibling.textContent.trim() === '---') {
				break;
			}
			let nextSibling = sibling.nextElementSibling;
			content.appendChild(sibling);
			sibling = nextSibling;
		}
		// Insertar el div de contenido después del encabezado
		header.insertAdjacentElement('afterend', content);
		// Añadir la clase accordion-header al encabezado
		header.classList.add('accordion-header');
		// Añadir evento de clic al encabezado
		header.addEventListener("click", function () {
			// Alternar la clase activa en el encabezado
			this.classList.toggle("active");
			// Transición suave para la visualización del contenido
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
			// Opcionalmente, colapsar otras secciones de contenido si es necesario
			headers.forEach(otherHeader => {
				if (otherHeader !== this) {
					otherHeader.classList.remove("active");
					otherHeader.nextElementSibling.style.maxHeight = null;
				}
			});
		});
	});

	// Abrir el primer encabezado después de un retraso de 3 segundos
	setTimeout(() => {
		if (headers.length > 0) {
			headers[0].classList.add("active");
			let firstContent = headers[0].nextElementSibling;
			firstContent.style.maxHeight = firstContent.scrollHeight + "px";
		}
	}, 1000);
});
