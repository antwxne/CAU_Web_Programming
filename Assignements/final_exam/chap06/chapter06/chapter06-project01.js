window.onload = () => {

   let mainForm = document.getElementById("mainForm");
   let required = document.querySelectorAll(".required");

   // change the color to red when loading the page
   for (let i = 0; i < required.length; ++i) {
      if ((required[i].type === "checkbox" && !required[i].checked) || required[i].value === "") {
         required[i].style.backgroundColor = 'red';
         required[i].style.color = 'white';
         required[i].parentNode.style.color = 'white';
         required[i].parentNode.style.backgroundColor = 'red';
      }
   }
   // check the form and change the color
   mainForm.onsubmit = e => {
      let required = document.querySelectorAll(".required");
      for (let i = 0; i < required.length; ++i) {
         if ((required[i].type === "checkbox" && !required[i].checked) || required[i].value === "") {
            e.preventDefault();
            required[i].style.backgroundColor = 'red';
            required[i].style.color = 'white';
            required[i].parentNode.style.color = 'white';
            required[i].parentNode.style.backgroundColor = 'red';
         }
      }
   };

   // Change color when input
   mainForm.oninput = event => {
      console.log(event.target.value);
      if ((event.target.type === "checkbox" && !event.target.checked) || event.target.value === "") {
         event.target.style.backgroundColor = 'red';
         event.target.style.color = 'white';
         event.target.parentNode.style.color = 'white';
         event.target.parentNode.style.backgroundColor = 'red';
      } else {
         event.target.style.backgroundColor = 'white';
         event.target.parentNode.style.color = 'black';
         event.target.style.color = 'black';
         event.target.parentNode.style.backgroundColor = 'white';
      }
   }
}

