


var tags =  Array.from(document.getElementsByClassName("image-item"));
var lightboxcontainer = document.querySelector(".lightbox-container");
var lightboxItem = document.querySelector(".lightbox-item");
var nextButton = document.getElementById("next");
var closeButton = document.getElementById("close");
var prevButton = document.getElementById("prev");
var curentindex ;
console.log(lightboxItem)
// console.log(lightboxcontainer);
for( var i=0; i<tags.length;i++)
{
    tags[i].addEventListener("click",function(e){
        var imgSrc = e.target.getAttribute("src");
        curentindex =  tags.indexOf(e.target);
       console.log(curentindex)
        lightboxcontainer.classList.replace("d-none","d-flex")
        lightboxItem.style.backgroundImage =`url(${imgSrc})`;
    })
}

function nextslider() 
{
    curentindex ++ ;
    if(curentindex==tags.length)
    {
        curentindex = 0;
    }
 var imgSrc = tags[curentindex].getAttribute("Src");

lightboxItem.style.backgroundImage =`url(${imgSrc})`;

}


function prevslider() 
{
    curentindex -- ;
    if(curentindex < 0)
    {
        curentindex = tags.length -1;
    }
 var imgSrc = tags[curentindex].getAttribute("src");

lightboxItem.style.backgroundImage =`url(${imgSrc})`;

}
function closenext() 
{
    lightboxcontainer.classList.replace("d-flex","d-none");
    
}

prevButton.addEventListener("click",prevslider);
nextButton.addEventListener("click",nextslider);
closeButton.addEventListener("click",closenext);


document.addEventListener("keydown",function(e){
    if(e.key=="ArrowRight")
    {
    prevslider (1);

    }
     else if(e.key=="ArrowLeft") 
     {
        nextslider (-1)
    } 
    else if(e.key=="Escape")
    {
        closenext();
    }
    
})