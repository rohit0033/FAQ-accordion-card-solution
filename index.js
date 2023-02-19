document.querySelectorAll('.head').forEach((item)=> {
    item.addEventListener('click', (event) => {
      //handle click
      console.log("click!");
      if(item.parentNode.classList.contains("active")){
        item.parentNode.classList.toggle("active");
      }
      else{
        document.querySelectorAll('.head').forEach(item => item.parentNode.classList.remove("active"))
        item.parentNode.classList.add("active");

      }
    });
    
});