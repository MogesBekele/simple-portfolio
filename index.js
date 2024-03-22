let scrollcontainer = document.querySelector(".gallery")
let prevbtn = document.getElementById("prevbtn")
let nextbtn = document.getElementById("nextbtn")


scrollcontainer.addEventListener("wheel", (evt)=>{
  evt.preventDefault();
  scrollcontainer.scrollLeft += evt.deltaY;
});
nextbtn.addEventListener("click", ()=>{
  scrollcontainer.scrollLeft += 300;
})
prevbtn.addEventListener("click", ()=>{
  scrollcontainer.scrollLeft -= 300;
})