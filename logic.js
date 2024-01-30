let rect = document.querySelector("#main");

rect.addEventListener("mousemove", (details) => {
    var rectLocation = rect.getBoundingClientRect();
    var insideRect = details.clientX - rectLocation.left;

    if (insideRect < rectLocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, insideRect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        });
    } else {
        // console.log("right");
        var blueColor = gsap.utils.mapRange(rectLocation.width / 2, rectLocation.width, 0, 255, insideRect);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        });
    }

    rect.addEventListener("mouseleave", () => {
        gsap.to(rect, {
            backgroundColor: "white",
            ease: Power4,
        });


    })
})


