let sliderContainer = document.querySelector(".slider-wrapper");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slides = document.querySelectorAll(".slider .text");

let slidesWidth = sliderContainer.offsetWidth;

let slideIndex =0;

slides.forEach(function(slides)
{
    slides.style.width= slidesWidth +"px";
})

let NumberOfSlides = slides.length;

//sliderContainer.style.width = (NumberOfSlides * slidesWidth) +"px";

next.onclick=function()
{
    if(slideIndex ===  slides.length-1)
    {
        slideIndex = 0; 
    }
    else
    {
        slideIndex++;
        sliderContainer.style.marginRight= -(slideIndex * slidesWidth) +"px";

    
    }
}

prev.onclick=function()
{
    if( slideIndex === 0)
    {
        slideIndex = slides.length - 1; 
  
    }
    else
    {
        
        slideIndex--;
        sliderContainer.style.marginRight= -(slideIndex * slidesWidth) +"px";

    }

}
/*******************/
let bars = document.getElementById("bars");
let nav = document.getElementById("nav");
let searchbox = document.querySelector(".searchbox")
bars.onclick=function()
{
    console.log(5464)
    nav.classList.toggle("active");
    searchbox.classList.toggle("asd");
   
}


let list = Array.from(document.querySelectorAll(".list li a"));

let navAnimation = document.getElementById("text-content");

let paragraphContainer = document.getElementById("paragraphContainer")

let index = 0;

let img = document.getElementById("img");

let imgSrc2 = document.getElementById("imgSrc");


for(let i=0;i<list.length;++i)
{
    list[i].onmouseenter=function(e)
    {
        e.preventDefault();
        
        index = i;
        getAlt();
        src();

    }
    list[i].onmouseleave=function(e)
    {
        e.preventDefault();
        paragraphContainer.classList.remove("apper")
        img.classList.remove("avti");

    }
}




function getAlt()
{
    paragraphContainer.classList.add("apper")
    let imageAlt = list[index].getAttribute("alt");
 
    navAnimation.textContent=imageAlt;
}



function src()
{
    img.classList.add("avti");
    let imageSrc = list[index].getAttribute("data-src");
 
    imgSrc2.setAttribute("src","img/"+imageSrc+"")

}