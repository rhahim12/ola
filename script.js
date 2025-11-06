const paraTag_elem = document.querySelector("p")
console.log(paraTag_elem)


// On retire la classe font-14
// paraTag_elem.classList.remove("font-14");


// On ajoute la classe font-6
paraTag_elem.classList.add("font-6");


// On inverse la présence de la classe text-content

paraTag_elem.classList.toggle("text-content");               
console.log(paraTag_elem.getAttribute("class"));     // => "font-6"

// On inverse la présence de la classe text-content
// paraTag_elem.classList.toggle("text-content");               
// console.log(paraTag_elem.getAttribute("class"));     // => "font-6 text-content"

// const searchInput_elem = document.querySelector(".search_input");
// searchInput_elem.addEventListener("change",function(event_obj){
    // console.log(event_obj.target.value); // Affiche la valeur du champ à chaque caractère tapé.
// });