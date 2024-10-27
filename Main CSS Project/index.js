let main = document.querySelector(".main-container");
let button = document.getElementById("mode")
let mode = document.querySelector("#modebtn")
button.addEventListener("click",function(e){
    if(main.classList.contains('dark')){
    main.classList.remove('dark');
    mode.classList.remove("fa-sun")
    e.preventDefault();

}else{
    main.classList.add('dark');
    mode.classList.add("fa-sun");

    e.preventDefault();
}

})