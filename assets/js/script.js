// assets/js/script.js
console.log("Custom JS loaded.");

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

    let links = document.querySelectorAll('a');

    // Loop through each link
    for (let i = 0; i < links.length; i++) {
      // Check if the link already has a target attribute
      if (!links[i].hasAttribute('target')) {
        // Set the target attribute to '_blank' to open in a new tab
        links[i].setAttribute('target', '_blank');
      }
    }
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll("h2");

    headers.forEach(header => {
        // Wrap content between this header and the next header in a div
        let content = document.createElement('div');
        content.classList.add('accordion-content');

        let sibling = header.nextElementSibling;
        while (sibling && sibling.tagName !== 'H2') {
            let nextSibling = sibling.nextElementSibling;
            content.appendChild(sibling);
            sibling = nextSibling;
        }

        // Insert the content div after the header
        header.insertAdjacentElement('afterend', content);

        // Add the accordion-header class to the header
        header.classList.add('accordion-header');

        // Add click event to the header
        header.addEventListener("click", function() {
            // Toggle the active class to the header
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
