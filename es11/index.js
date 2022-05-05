//Dynami Import 

const button = document.getElementById("id");

button.addEventListener("click",async function(){
    const module = await("./file.js");
    module.hello();
});