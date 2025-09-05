let isAnimating=true;
function toggle_animation()
{
    const element_planets = document.querySelectorAll("#container div , #container div::before");

    element_planets.forEach((element_planets)=>{
        
    if(isAnimating){
    element_planets.style.animationPlayState="paused";
  }  else{
    element_planets.style.animationPlayState="running";
  }
});
isAnimating = !isAnimating;
}