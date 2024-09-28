var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
    y: -40,
    opacity: 0,
    duration: 0.4,
    stagger: 0.15,
});

    function cursoreffect() {
        var p1c = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")
    p1c.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })
    
    p1c.addEventListener("mouseenter",function () {
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    p1c.addEventListener("mouseleave",function () {
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
    }
    cursoreffect()

    gsap.from("h1 span", {
        y: 100,
        duration: 0.2,
        opacity: 0,
        stagger: {
            each: 0.29, // Delay between each span element
            from: "start", // Start from the first span
        },
    });


    document.querySelectorAll('.dropdown-toggle').forEach(function (dropdownToggle) {
      dropdownToggle.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevents closing when clicking inside the dropdown content
        let dropdownContent = this.nextElementSibling;
    
        // Close other open dropdowns
        document.querySelectorAll('.dropdown-content').forEach(function (content) {
          if (content !== dropdownContent) {
            content.style.display = 'none';
          }
        });
    
        // Toggle the current dropdown
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      });
    });
    
    // Close the dropdown if clicking outside of it
    window.addEventListener('click', function (e) {
      document.querySelectorAll('.dropdown-content').forEach(function (dropdownContent) {
        if (!dropdownContent.contains(e.target) && !dropdownContent.previousElementSibling.contains(e.target)) {
          dropdownContent.style.display = 'none';
        }
      });
    });
    
    
    var p1c = document.querySelector("#page1")

    p1c.addEventListener("mouseenter",function () {
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    p1c.addEventListener("mouseleave",function () {
        gsap.to(cursor,{
            scale:0,    
            opacity:0
        })
    })

    function breakTheText() {
        var quote = document.querySelector("#quote p"); // Select the paragraph inside the #quote div
        var quoteText = quote.textContent; // Get the text content
        var splitText = quoteText.split(""); // Split the text into an array of characters
        var clutter = "";
    
        // Loop through each character and wrap it in a <span>
        splitText.forEach(function (char) {
          // Handle spaces by converting them to non-breaking spaces (&nbsp;)
          if (char === " ") {
            clutter += `<span>&nbsp;</span>`;
          } else {
            clutter += `<span>${char}</span>`;
          }
        });
    
        // Set the modified HTML back into the quote
        quote.innerHTML = clutter;
      }
    
      breakTheText();
      gsap.from("#quote span", {
        y: 100,
        duration: 0.8,
        delay: 0.5,
        opacity: 0,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    
      // Example: Adding a scroll-triggered animation (optional)
      gsap.to("#quote span", {
        scrollTrigger: {
          trigger: "body",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0.7,
          y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.out",
        },
        
      });

      document.addEventListener("click", function (event) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function (dropdown) {
            if (!event.target.closest('.dropdown')) {
                dropdown.style.display = 'none';
            }
        });
    });
    
      
      
      


      // Function to break the text into individual characters
function breakTheText() {
    var quote = document.querySelector("#quote p"); // Select the paragraph inside #quote
    var quoteText = quote.textContent; // Get the text content
    var splitText = quoteText.split(""); // Split the text into an array of characters
    var clutter = "";
  
    // Loop through each character and wrap it in a <span>
    splitText.forEach(function (char) {
      // Handle spaces by converting them to non-breaking spaces (&nbsp;)
      if (char === " ") {
        clutter += `<span>&nbsp;</span>`;
      } else {
        clutter += `<span>${char}</span>`;
      }
    });
  
    // Set the modified HTML back into the quote
    quote.innerHTML = clutter;
  }
  
  breakTheText();
  
  // GSAP animation for each span
  gsap.from("#quote span", {
    y: 100,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out(1.7)"
  });
  
  // Optional: Scroll-triggered animation if needed
  gsap.to("#quote span", {
    scrollTrigger: {
      trigger: "#quote",
      start: "top 80%", 
      end: "bottom 50%",
      scrub: true,
    },
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 0.5,
    ease: "power1.out",
  });
  

    /*
See https://www.greensock.com/splittext/ for details. 
This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/


    