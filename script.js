let cursor = document.querySelector("#cursor");
let Aall = document.querySelectorAll(".nav a")
document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})

Aall.forEach((navlink) => {
    navlink.addEventListener("mouseenter", () => {
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white";
        cursor.style.backgroundColor = "transparent"
    })
    navlink.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.border = "0px solid transparent";
        cursor.style.backgroundColor = "#95c11e"
    })
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        // scrollTrigger:"body",
        // markers:true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})
gsap.from("#about-us, img,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        start: "top 50%",
        end: "top 60%",
        scrub: 2
    }
})