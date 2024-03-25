jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    $("#loader-fade").fadeOut(800);
});

jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    /* ===================================
       Nav Scroll
       ====================================== */

    $(".scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 40}, 7000);
    });
   
    
    /* ====================================
       Nav Fixed On Scroll
       ======================================= */

    // $(window).on('scroll', function () {
    //     if ($(this).scrollTop() >= 80) { // Set position from top to add class
    //         $('header').addClass('header-appear');
    //     }
    //     else {
    //         $('header').removeClass('header-appear');
    //     }
    // });
    // /*bottom menu fix*/
    // if ($("nav.navbar").hasClass("bottom-nav")) {
    //     var navHeight = $(".bottom-nav").offset().top;
    //     $(window).on("scroll", function () {
    //         if ($window.scrollTop() > navHeight) {
    //             $('header').addClass('header-appear');
    //         } else {
    //             $('header').removeClass('header-appear');
    //         }
    //     });
    // }

    /* ===================================
       Side Menu
       ====================================== */

    if ($(".sidemenu_toggle").length) {
        $(".sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        })
    }
    /* =====================================
       Wow
       ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /* ===================================
        Animated Cursor
       ====================================== */

    function animatedCursor() {

        if ($("#animated-cursor").length) {

            var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a =    document.getElementById("cursor"),
                i = document.getElementById("cursor-loader");
            TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
                var n = window.pageYOffset || document.documentElement.scrollTop;
                e.x = t.pageX, e.y = t.pageY - n
            }), TweenLite.ticker.addEventListener("tick", function () {
                o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {x: t.x, y: t.y}))
            }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
                }),

                $(".testimonial-images .animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
                }),

                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                        x: t.x,
                        y: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2 - m) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
                }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
                TweenMax.to("#cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
            }),$(".link").mouseenter(function (e) {
                TweenMax.to("#cursor", .2, {
                    borderWidth: "0px",
                    scale: 3,
                    backgroundColor: "rgba(255,255,255,0.47)",
                    opacity: .15
                })
            }), $(".link").mouseleave(function (e) {
                TweenMax.to("#cursor", .3, {
                    borderWidth: "2px",
                    scale: 1,
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    opacity: 1
                })
            })

        }

    }

    if ($(window).width() > 991) {
        setTimeout(function () {
            animatedCursor();
        }, 1000);
    }
    /* ===================================
       Features Section Number Scroller
       ====================================== */

    $(".stats").each(function () {
        $('.numscroller').appear(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    /* ===================================
       Parallax
       ====================================== */

    if (windowsize > 992) {
        $(".parallaxie").parallaxie({
            speed: 0.4,
            offset: 0
        });
    }

    /* ===================================
       Cube Portfolio
       ====================================== */

    (function ($, window, document, undefined) {

        // init cubeportfolio
        $('#js-grid-mosaic-flat').cubeportfolio({
            filters: '#js-filters-mosaic-flat',
            layoutMode: 'mosaic',
            defaultFilter: '*',
            animationType: 'scaleSides',
            gapHorizontal: -1,
            gapVertical: -1,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'fadeIn',
            displayTypeSpeed: 100,
            sortByDimension: true,
            mediaQueries: [{
                width: 1500,
                cols: 4
            },{
                width: 1100,
                cols: 4
            }, {
                width: 768,
                cols: 2
            }, {
                width: 480,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }],
            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            plugins: {
                loadMore: {
                    element: '#js-loadMore-mosaic-flat',
                    action: 'click',
                    loadItems: 3,
                }
            },
        })

        /*Blog Masonry*/
        $("#blog-masonry").cubeportfolio({
            layoutMode: 'grid',
            defaultFilter: '*',
            animationType: "scaleSides",
            gapHorizontal: 30,
            gapVertical: 30,
            gridAdjustment: "responsive",
            mediaQueries: [{
                width: 1500,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 992,
                cols: 2
            }, {
                width: 600,
                cols: 2
            }, {
                width: 480,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }]
        });
        /*Portfolio Three*/
        $('#js-grid-mosaic').cubeportfolio({
            filters: '.filtering',
            layoutMode: 'grid',
            sortByDimension: true,
            mediaQueries: [{
                width: 1500,
                cols: 2
            },{
                width: 1100,
                cols: 2
            }, {
                width: 768,
                cols: 2
            }, {
                width: 600,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'fadeOut',
            gapHorizontal: 20,
            gapVertical: 60,
            gridAdjustment: 'responsive',
            caption: 'zoom',

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            plugins: {
                loadMore: {
                    element: "#js-loadMore-lightbox-gallery",
                    action: "click",
                    loadItems: 5,
                }
            }

        })

    })(jQuery, window, document);


    /* ===================================
       Fancy Box
       ====================================== */
    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null,
    });

    /* ===================================
       Rotating Text
       ====================================== */

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "flipInX",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    /* ===================================
       Owl Carousel
       ====================================== */

    /* Testimonial */
    $('.testimonial-two').owlCarousel({
        items:1,
        loop: true,
        smartSpeed: 500,
        responsiveClass: true,
        nav: false,
        dots: true,
        dotsContainer: ".owl-thumbs",
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            480: {
                items: 1,
                margin: 30,
            },
            992: {
                items: 1,
                margin: 30,
            }
        }
    });

    /* Blog */
    $(".owl-split").owlCarousel({
        items: 1,
        margin: 0,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        smartSpeed:500,
        navSpeed: true,
        autoplayHoverPause:true,
        responsiveClass:true
    });

    /* ===================================
       Revolution Slider
       ====================================== */

    /*Design Studio*/
    $("#rev_slider_8_1").show().revolution({
        sliderType:"standard",
        jsFileLocation:"//localhost/revslider/revslider/public/assets/js/",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
            keyboardNavigation:"off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation:"off",
            mouseScrollReverse:"default",
            onHoverStop:"on",
            touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 50,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            }
            ,
            arrows: {
                style:"uranus",
                enable:false,
                hide_onmobile:true,
                hide_under:600,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                tmp:'<div class="hvr-pulse"></div>',
                left: {
                    h_align:"left",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                },
                right: {
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                }
            }
            ,
            bullets: {
                enable:false,
                hide_onmobile:true,
                hide_under:600,
                style:"hephaistos",
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                direction:"horizontal",
                h_align:"center",
                v_align:"bottom",
                h_offset:0,
                v_offset:30,
                space:5,
                tmp:''
            }
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1240,1024,778,480],
        gridheight:[868,600,500,400],
        lazyType:"smart",
        parallax: {
            type:"mouse",
            origo:"slidercenter",
            speed:2000,
            speedbg:0,
            speedls:0,
            levels:[2,3,4,5,6,7,12,16,10,50,10,11,12,13,14,55],
        },
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
    });
});


  

 //Javascript for dialer
 function dialNumber() {
    var phoneNumber = document.getElementById('dialButton').innerText;
    window.location.href = 'tel:' + phoneNumber;
}
//JAvascript for reloading page while clicking the logo
// function reloadPage() {
//     location.reload();
// }

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// Add event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the interactive element
    const interBubble = document.querySelector('.interactive');
    
    // Initialize variables for current and target positions
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    // Define the move function to animate the element
    function move() {
        // Update current position based on target position
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        // Apply the new position to the element's style
        interBubble.style.transform = 'translate(' + Math.round(curX) + 'px, ' + Math.round(curY) + 'px)';
        // Call move function recursively for smooth animation
        requestAnimationFrame(move);
    }

    // Add event listener for mouse movement
    window.addEventListener('mousemove', function(event) {
        // Update target position based on mouse coordinates
        tgX = event.clientX;
        tgY = event.clientY;
    });
    
    // Add event listener for touch events
    window.addEventListener('touchstart', function(event) {
        // Update target position based on touch coordinates
        const touch = event.touches[0];
        tgX = touch.clientX;
        tgY = touch.clientY;
    });
    
    window.addEventListener('touchmove', function(event) {
        // Prevent default behavior to prevent scrolling
        event.preventDefault();
        // Update target position based on touch coordinates
        const touch = event.touches[0];
        tgX = touch.clientX;
        tgY = touch.clientY;
    });

    // Call the move function to start the animation
    move();
});

//Js rotating
// const rotatingText = document.querySelector('.js-rotating p');
// const sentences = ['Make rehabilitation efficient', 'Make recovery entertaining'];
// let index = 0;

// // Hide the text initially
// rotatingText.style.opacity = '0';

// function rotateSentence() {
//     rotatingText.textContent = sentences[index];
//     index = (index + 1) % sentences.length;

//     // Add a class to show the text with the transition
//     rotatingText.classList.add('show');
//     setTimeout(() => {
//         rotatingText.classList.remove('show');
//     }, 1000);
// }

// // Set initial delay before starting the rotation
// setTimeout(() => {
//     // Show the text after the initial delay
//     rotatingText.style.opacity = '1';
    
//     // Set interval for rotating the sentences every 3 seconds (adjust as needed)
//     setInterval(() => {
//         // Call rotateSentence to rotate the sentences
//         rotateSentence();
//     }, 4000);
// }, 800); // Adjust the delay as needed



//EmaailJS
const serviceId='service_hdxg4xc'
const templateId='template_0qhoaej'
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact:document.getElementById('contact').value,
      organization:document.getElementById('organization').value,
      subject:document.getElementById('subject').value,
      message: document.getElementById("message").value,
    };
  
   
  
      emailjs.send(serviceId, templateId, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("contact").value = "";
          document.getElementById("organization").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  const contactForm=document.getElementById('contactForm')
  contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMail();
  })
  

//nav-item
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var navLink = document.querySelector('.nav-link[href="#home"]');

        if (scrollPosition === 0) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
});

 
document.addEventListener('DOMContentLoaded', function() {
    var lastScrollTop = 0;
    var navbar = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll down
            navbar.style.top = "-100px"; // Hide navbar
        } else {
            // Scroll up
            navbar.style.top = "0"; // Show navbar
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});


// Testimonial
document.addEventListener('DOMContentLoaded', function() {
    // Testimonial Slider Initialization (Using Swiper.js)
    var swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true
        },
        spaceBetween: 60,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
});
 // Remove the loading class once the content is loaded
 window.addEventListener('load', function() {
    document.body.classList.remove('loading');
});

// new about section
// Define data for different sections
const imagePath1 = "ad-agency\\img\\Milife Medicare -happymoves.jpg";
const imagePathNeck='ad-agency\\img\\neck-happymoves.jpg'
const imagePathHand= "ad-agency\\img\\hand-happymoves.jpg";
const sectionsData = {
    "key-features": {
        "details": ["Immersive Therapy", "Customised Programs", "Real-Time Progress Tracking", "Comprehensive Skill Improvement"],
        "visual": [imagePath1,imagePathNeck,imagePath1,imagePath1], // Array of image paths
        "visualData": ["Dive into a world where therapy becomes an immersive and engaging experience, enhancing motivation and participation.",
            "Tailor rehabilitation programs to individual needs, addressing specific areas such as upper body, neck, shoulder, hand, and spinal cord",
            "Gain insights into patient progress with real-time tracking, empowering therapists to make data-driven decisions for optimal outcomes.",
            "Address fine motor skills, gross motor skills, and cognitive improvements simultaneously, providing a holistic approach to rehabilitation."]
    },

    "what-we-give": {
        "details": ["Muscle Memory Enhancement in Physiotherapy",
            "Enhanced Patient Engagement and Motivation",
            "Cognitive Improvement in Medical Rehabilitation"],
        "visual": ['ad-agency/img/Ayurgreen -happymoves.JPG', 'path_to_what_we_give_image_2.jpg', 'ad-agency/img/Milife Medizone-happymoves.jpg'], // Array of image paths
        "visualData": ["Improves muscle memory development, accuracy, and strength enhancement for patients undergoing physiotherapeutic rehabilitation.",
            "Guarantees a captivating and pleasant experience, fostering heightened patient motivation and adherence.",
            "Effective for improving accuracy and cognitive senses in a range of medical conditions, including stroke, paralysis, spinal cord injury, Parkinson’s Disease, and upper Musculoskeletal Problems."
        ]
    },
    "focused-therapy": {
        "details": ["Neck", "Shoulder", "Hand", "Cognitive Enhancement"],
        "visual": [imagePathNeck, 'path_to_focused_therapy_image_2.jpg',imagePathHand], // Array of image paths
        "visualData": ["Our virtual reality platform offers targeted exercises and therapies designed to improve neck mobility, flexibility, and strength. With personalised programs and immersive experiences, patients can regain comfort and function in their daily activities.",
            "Happy Moves provides comprehensive shoulder rehabilitation programs aimed at enhancing range of motion, stability, and strength. Through interactive VR exercises, users can effectively recover from injuries, surgeries, or chronic conditions affecting the shoulder.",
            "Our VR technology offers engaging hand therapy sessions to promote dexterity, coordination, and fine motor skills. Patients can enjoy interactive games and exercises designed to facilitate recovery from hand injuries, arthritis, or neurological conditions.",
            "Happy Moves goes beyond physical rehabilitation to address cognitive functions such as memory, attention, and problem-solving. Our VR platform offers stimulating cognitive exercises and activities to support brain health and overall well-being."]
    }
};
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to heading items
    const headings = document.querySelectorAll(".heading");
    headings.forEach(heading => {
        heading.addEventListener("click", handleHeadingClick);
    });

    // Trigger click on the first heading item to select it
    const firstHeading = document.querySelector(".heading");
    firstHeading.click();
});

// Function to handle click on heading items
function handleHeadingClick(event) {
    const headingId = event.target.parentElement.id; // Get the ID of the clicked heading
    const boxDetailsContainer = document.getElementById("box-details-container");

    // Clear existing content
    boxDetailsContainer.innerHTML = '';

    let selectedIndex = 0; // Default selected index

    // Set selected index for "Focused Therapy" and "What We Give" heading items
    if (headingId === "focused-therapy" || headingId === "what-we-give") {
        selectedIndex = 0;
    } else {
        // Get the index of the clicked detail item
        selectedIndex = Array.from(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);
    }

    // Populate with new content based on clicked heading and selected index
    const details = sectionsData[headingId].details;
    details.forEach((detail, index) => {
        const detailElem = document.createElement("div");
        detailElem.classList.add("about-box", "box-details");
        detailElem.innerHTML = `<p class="box-data">${detail}</p>`;
        boxDetailsContainer.appendChild(detailElem);

        // Add click event listener to each box-detail item
        detailElem.addEventListener('click', function () {
            // Update visual data based on clicked detail
            updateVisualData(headingId, index, index);
        });

        // Initially set the first detail item as selected
        if (index === 0 && selectedIndex === 0) {
            detailElem.classList.add("selected");
            // Initially set visual data based on the first detail item
            updateVisualData(headingId, selectedIndex, 0);
        }
    });

    // Remove the selected class from all heading items
    const headings = document.querySelectorAll(".heading");
    headings.forEach(heading => {
        heading.classList.remove("selected");
    });

    // Add selected class to the clicked heading item
    event.target.classList.add("selected");
    
}


// Function to update visual data based on selected detail item
function updateVisualData(headingId, selectedIndex, detailIndex) {
    const visualImage = document.getElementById("visual-image");
    const visualData = document.getElementById("visual-data");

    // Set visual image and visual data based on selected index
    visualImage.src = sectionsData[headingId].visual[selectedIndex];
    visualData.innerText = sectionsData[headingId].visualData[detailIndex];

    // Remove the selected class from all detail elements
    const detailElems = document.querySelectorAll(".box-details");
    detailElems.forEach(elem => {
        elem.classList.remove("selected");
    });

    // Add selected class to the clicked detail element
    detailElems[detailIndex].classList.add("selected");

    // Remove the selected class from all heading items
    const headings = document.querySelectorAll(".headings");
    headings.forEach(heading => {
        heading.classList.remove("selected");
    });

    // Add selected class to the clicked heading item
    document.getElementById(headingId).classList.add("selected");
   
}
