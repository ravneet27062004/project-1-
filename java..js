 var cursr = document.querySelector("#cursor")
 var blur= document.querySelector("#cursor-blur")
document.addEventListener('mousemove',function(dets){
 cursr.style.left = dets.x +30+"px",
 cursr.style.top = dets.y+"px"
 blur.style.left = dets.x -250+"px",
    blur.style.top = dets.y -250 +"px"
    
})
 var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursr.style.scale=3
        cursr.style.border="1px solid #fff"
cursr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
    cursr.style.scale=1
    cursr.style.border="0px solid #95C11E "
cursr.style.backgroundColor="#95C11E"
})
})



gsap.to("#main", {

    backgroundColor:"black",
   
    scrollTrigger: {
        trigger: "#main", // Element that triggers the animation
        scroller: "body", // The scrollable element
        start: "top -25%", // Animation starts when the trigger element is 50% above the viewport
        end: "top -70%", // Animation ends when the trigger element is 100% above the viewport
        scrub:2
    }
});
gsap.to("#nav", {
height : "110px",
    backgroundColor:" #95C11E",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav", // Element that triggers the animation
        scroller: "body", // The scrollable element
        start: "top -10%", // Animation starts when the trigger element is 50% above the viewport
        end: "top -11%", // Animation ends when the trigger element is 100% above the viewport
        scrub:1,
        markers:true
      }
});
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from(".cards",{
   scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    stagger:0.4,scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
trigger:"#colon1",
scroller:"body",
// markers:true,
start:"top 55%",
end:"top 47%",
scrub:4
    }
    
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
trigger:"#colon2",
scroller:"body",
// markers:true,
start:"top 55%",
end:"top 47%",
scrub:4
    }
    
})
gsap.from("#page4 h1 ",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 90%",
        scrub:2
            }
})