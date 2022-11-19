window.onload = () => {
   let images = document.querySelectorAll(".artThumb");

   for (let i = 0; i < images.length; i++) {
      images[i].onmouseover = function() {
         let span = document.createElement("span");
         let new_image = document.createElement("img");

         new_image.src = this.src;
         new_image.style = `border:solid 0.5em black;` +
         "padding: 0.5em; float: right;";
         new_image.className = 'NEW_IMAGE';
         new_image.style.height = `${this.height + 50}px`;

         span.appendChild(new_image);
         this.parentNode.appendChild(span);
      }
      images[i].onmouseout = function () {
         let images = document.querySelectorAll(".NEW_IMAGE");
			for (let i = 0; i < images.length; i++) {
				images[i].parentNode.removeChild(images[i]);
			}
      }
   }
}