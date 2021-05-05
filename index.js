

// nav menu operation
const get = element => document.getElementById(element);
let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})

// sticky header

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickHeader()};

// Get the header
const header = document.getElementById("header--sticky");
const siteName = document.querySelector(".site-name")
const tagline = document.querySelector(".tagline")
const logo = document.querySelector(".logo")
const brandingContainer = document.querySelector(".branding-container")



// Get the offset position of the navbar
let stickyHeader = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickHeader() {
  if (window.pageYOffset > stickyHeader) {
    header.classList.add("stickyTop")
    siteName.classList.add("stickySiteName")
    logo.classList.add("stickyLogo")
    tagline.classList.add("stickyTagline")
    brandingContainer.classList.add("stickyBrandingContainer")
  } else {
    header.classList.remove("stickyTop");
    logo.classList.remove("stickyLogo")
    tagline.classList.remove("stickyTagline")
    siteName.classList.remove("stickySiteName")
    brandingContainer.classList.remove("stickyBrandingContainer")

  }
} 


// generate toc
const titles = document.querySelectorAll('.heading__2,.heading__3')
let toc = document.querySelector('.toc__list')
let tocTitleHtml = ""

let titleCounter = 0
let subTitleCounter
titles.forEach(title=>{
  console.log(title)
    let headingText = title.innerText;
        if (title.tagName === "H2"){
            titleCounter ++ 
            subTitleCounter = 0    
 
            tocTitleHtml += `<a class="displayTitle scrollingItem" href="#">${headingText}</a><br> `
    }   else if (title.tagName === 'H3'){
            subTitleCounter ++
            tocTitleHtml +=`<a class="displaySubtitle scrollingItem" href="#">${headingText}</a><br>`
    }
     return tocTitleHtml
  })

   toc.innerHTML += tocTitleHtml;

