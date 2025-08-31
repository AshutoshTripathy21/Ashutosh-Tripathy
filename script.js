function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

    document.querySelectorAll('[data-scroll-to]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('data-scroll-to'));
            locoScroll.scrollTo(target);
        });
    });
}
locoScroll()

function cursorEffect() {
    var mainContent = document.querySelector("#main")
    var cursor = document.querySelector("#cursor")
    var buttons = document.querySelectorAll("#profile-dets-buttons button");
    var socialIcons = document.querySelectorAll(".social-icon");
    var projectTitles = document.querySelectorAll(".project-card h3 a");
    var submitButton = document.querySelector(".submit-btn");

    mainContent.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            duration: 0.1
        })
    })

    mainContent.addEventListener("mouseenter", function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1,
            display:"block"
        })
    })

    mainContent.addEventListener("mouseleave", function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0,
            display:"none"
        })
    })

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            gsap.to(cursor, {
                scale: 0.5,
                duration: 0.2
            });
            gsap.to(button, {
                scale: 1.1,
                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)",
                duration: 0.3,
                ease: "power2.out"
            });
        });

        button.addEventListener("mouseleave", function () {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.2
            });
            gsap.to(button, {
                scale: 1,
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    socialIcons.forEach(icon => {
        icon.addEventListener("mouseenter", function () {
            gsap.to(cursor, {
                scale: 0.5,
                duration: 0.2
            });
            gsap.to(icon, {
                scale: 1.2,
                textShadow: "0 0 5px #03e9f4, 0 0 10px #03e9f4",
                duration: 0.3,
                ease: "power2.out"
            });
        });

        icon.addEventListener("mouseleave", function () {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.2
            });
            gsap.to(icon, {
                scale: 1,
                textShadow: "0 0 5px #03e9f4, 0 0 10px #03e9f4",
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    projectTitles.forEach(title => {
        title.addEventListener("mouseenter", function() {
            gsap.to(cursor, {
                scale: 0.5,
                duration: 0.2
            });
        });

        title.addEventListener("mouseleave", function() {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.2
            });
        });
    });

    if (submitButton) {
        submitButton.addEventListener("mouseenter", function () {
            gsap.to(cursor, {
                scale: 0.5,
                duration: 0.2
            });
            gsap.to(submitButton, {
                scale: 1.1,
                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)",
                duration: 0.3,
                ease: "power2.out"
            });
        });

        submitButton.addEventListener("mouseleave", function () {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.2
            });
            gsap.to(submitButton, {
                scale: 1,
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }
}
cursorEffect()


gsap.set("#nav", { opacity: 0 });
gsap.set("#content", { opacity: 0 });

var tl = gsap.timeline();
tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.7
})
.to("#loader h3", {
    opacity: 0,
    x: -40,
    duration: 1.2,
    stagger: -0.3
})
.to("#loader", {
    opacity: 0,
    y: -700,
    display: "none",
    duration: 1
});

tl.to("#nav", {
    opacity: 1,
    duration: 0.1
}, "-=0.5")

tl.to("#content", {
    opacity: 1,
    duration: 0.1
}, "-=0.3");

var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#profile-desc",
        scroller: "#main",
        start: "top 5%",
        end: "top 0",
        scrub: 3
    }
})

t2.to("#profile-desc h1", {
    y: -30,
}, "anim")

t2.to("#profile-desc h2", {
    y: -30,
}, "anim")


t2.to("#profile-dets h4", {
    y: -30,
}, "anim")

t2.to("#profile-dets h3", {
    y: -30,
}, "anim")

t2.to("#profile-dets p", {
    y: -30,
}, "anim")

t2.to("#profile-dets button", {
    y: -30,
}, "anim")


t2.to("#follow-us h3", {
    y: -30,
}, "anim")

t2.to("#social-icons", {
    y: -30,
}, "anim")


var t3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 90%", 
        end: "bottom 20%", 
        scrub: 3,
        onEnter: () => {
            gsap.to("#main", {
                backgroundColor: "#d2d0d1",
                duration: 1
            });
        },
        onLeave: () => {
            gsap.to("#main", {
                backgroundColor: "black",
                duration: 1
            });
        },
        onEnterBack: () => {
            gsap.to("#main", {
                backgroundColor: "#d2d0d1",
                duration: 1
            });
        },
        onLeaveBack: () => {
            gsap.to("#main", {
                backgroundColor: "black",
                duration: 1
            });
        }
    }
});


var t4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 100%", 
        end: "bottom 50%", 
        scrub: 2,
    }
});

t4.to("#matriculation", {
    opacity: 1,
    y: 0,
    duration: 1
}, "education-sections")
.to("#matriculation", {
    opacity: 0,
    y: 23,
    duration: 1
}, "education-sections+=3");

t4.to("#intermediate", {
    opacity: 1,
    y: 0,
    duration: 1
}, "education-sections+=0.5")
.to("#intermediate", {
    opacity: 0,
    y: 20,
    duration: 1
}, "education-sections+=3.5");

t4.to("#bachelors", {
    opacity: 1,
    y: 0,
    duration: 1
}, "education-sections+=1")
.to("#bachelors", {
    opacity: 0,
    y: 10,
    duration: 1
}, "education-sections+=4");

gsap.set("#work-experience", { opacity: 0, y: 30 });

var t5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main", 
        start: "top 30%", 
        end: "bottom 50%", 
        scrub: 2, 
    }
});

t5.to("#work-experience", {
    opacity: 1, 
    y: 0,
    duration: 1 
}, ">");

t5.to("#work-experience", {
    opacity: 0, 
    y: 30,
    duration: 1 
}, ">");

var t6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 30%", 
        end: "bottom 50%", 
        scrub: 3,
        onEnter: () => {
            gsap.to("#main", {
                backgroundColor: "#1b1515",
                duration: 1
            });
        },
        onLeave: () => {
            gsap.to("#main", {
                backgroundColor: "black", 
                duration: 1
            });
        },
        onEnterBack: () => {
            gsap.to("#main", {
                backgroundColor: "#1b1515", 
                duration: 1
            });
        },
        onLeaveBack: () => {
            gsap.to("#main", {
                backgroundColor: "black", 
                duration: 1
            });
        }
    }
});

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 768) {
    // 🖥️ Desktop Animation
    var projectsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 100%",
            end: "bottom 10%",
            scrub: 2,
        }
    });

    projectsTimeline.to("#page4 .section-heading", { y: -30, opacity: 1 }, "projects-sections");

    // Animate projects one by one
    for (let i = 1; i <= 9; i++) {
        projectsTimeline.to(`#project${i}`, {
            opacity: 1,
            y: 0,
            duration: 1
        }, `projects-sections+=${i * 0.5}`)
        .to(`#project${i}`, {
            opacity: 0,
            y: 20,
            duration: 1
        }, `projects-sections+=${i + 4}`);
    }

    projectsTimeline.to("#page4 .view-more-btn", { y: -30, opacity: 1 }, "projects-sections+=5");

}

var projectsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main", 
        start: "top 100%",
        end: "bottom 10%", 
        scrub: 2,
    }
});

projectsTimeline.to("#page4 .section-heading", { y: -30, opacity: 1 }, "projects-sections");

projectsTimeline.to("#project1", {
    opacity: 1,
    y: 0,
    duration: 1
}, "projects-sections")
.to("#project1", {
    opacity: 0,
    y: 20,
    duration: 1
}, "projects-sections+=4");

projectsTimeline.to("#project2", {
    opacity: 1,
    y: 0,
    duration: 1
}, "projects-sections+=0.5")
.to("#project2", {
    opacity: 0,
    y: 20,
    duration: 1
}, "projects-sections+=4.5");

projectsTimeline.to("#project3", {
    opacity: 1,
    y: 0,
    duration: 1
}, "projects-sections+=1")
.to("#project3", {
    opacity: 0,
    y: 20,
    duration: 1
}, "projects-sections+=5");

projectsTimeline.to("#project4", {
    opacity: 1,
    y: 0,
    duration: 1
}, "projects-sections+=1.5")
.to("#project4", {
    opacity: 0,
    y: 20,
    duration: 1
}, "projects-sections+=5.5");

projectsTimeline.to("#project5", {
    opacity: 1,
    y: 0,
    duration: 1
}, "projects-sections+=2")
.to("#project5", {
    opacity: 0,
    y: 20,
    duration: 1
}, "projects-sections+=6");

projectsTimeline.to("#project6", {
    opacity: 1,
    y: 0,
    duration: 1
}, "projects-sections+=2.5")
.to("#project6", {
    opacity: 0,
    y: 20,
    duration: 1
}, "projects-sections+=6.5");

projectsTimeline.to("#page4 .view-more-btn", { y: -30, opacity: 1 }, "projects-sections+=3");

var t7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 30%", 
        end: "bottom 50%", 
        scrub: 3,
        onEnter: () => {
            gsap.to("#main", {
                backgroundColor: "#133838",
                duration: 1
            });
        },
        onLeave: () => {
            gsap.to("#main", {
                backgroundColor: "black", 
                duration: 1
            });
        },
        onEnterBack: () => {
            gsap.to("#main", {
                backgroundColor: "#133838", 
                duration: 1
            });
        },
        onLeaveBack: () => {
            gsap.to("#main", {
                backgroundColor: "black", 
                duration: 1
            });
        }
    }
});

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 768) {
    // 🖥️ Desktop Animation (sequential fade-in/out)
    var skillsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main", 
            start: "top 100%",
            end: "bottom 40%", 
            scrub: 2,
        }
    });

    skillsTimeline.to("#page5 h1", { y: -30, opacity: 1 }, "skills-sections");

    skillsTimeline.to("#programming-languages", { opacity: 1, y: 0, duration: 1 }, "skills-sections")
        .to("#programming-languages", { opacity: 0, y: 20, duration: 1 }, "skills-sections+=4");

    skillsTimeline.to("#devops-cloud", { opacity: 1, y: 0, duration: 1 }, "skills-sections+=0.5")
        .to("#devops-cloud", { opacity: 0, y: 20, duration: 1 }, "skills-sections+=4.5");
  
    skillsTimeline.to("#frontend", { opacity: 1, y: 0, duration: 1 }, "skills-sections+=1")
        .to("#frontend", { opacity: 0, y: 20, duration: 1 }, "skills-sections+=5");

    skillsTimeline.to("#backend", { opacity: 1, y: 0, duration: 1 }, "skills-sections+=1.5")
        .to("#backend", { opacity: 0, y: 20, duration: 1 }, "skills-sections+=5.5");

}

var skillsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main", 
        start: "top 100%",
        end: "bottom 40%", 
        scrub: 2,
    }
});

skillsTimeline.to("#page5 h1", { y: -30, opacity: 1 }, "skills-sections");

skillsTimeline.to("#programming-languages", {
    opacity: 1,
    y: 0,
    duration: 1
}, "skills-sections")
.to("#programming-languages", {
    opacity: 0,
    y: 20,
    duration: 1
}, "skills-sections+=4");

skillsTimeline.to("#frontend", {
    opacity: 1,
    y: 0,
    duration: 1
}, "skills-sections+=0.5")
.to("#frontend", {
    opacity: 0,
    y: 20,
    duration: 1
}, "skills-sections+=4.5");

skillsTimeline.to("#devops-cloud", {
    opacity: 1,
    y: 0,
    duration: 1
}, "skills-sections+=1")
.to("#devops-cloud", {
    opacity: 0,
    y: 20,
    duration: 1
}, "skills-sections+=5");

skillsTimeline.to("#backend", {
    opacity: 1,
    y: 0,
    duration: 1
}, "skills-sections+=1.5")
.to("#backend", {
    opacity: 0,
    y: 20,
    duration: 1
}, "skills-sections+=5.5");

document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".form-group", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
    });

    gsap.from(".submit-btn", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1,
        ease: "power3.out",
    });

    const starsContainer = document.getElementById("starsContainer");
    const starCount = window.innerWidth <= 480 ? 40 : 100; // fewer stars on mobile

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDuration = 5 + Math.random() * 10 + "s";
        starsContainer.appendChild(star);
    }
});



ScrollTrigger.refresh();