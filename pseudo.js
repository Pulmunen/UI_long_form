const titles = document.querySelectorAll('h2,h3')
let toc = document.getElementById('toc')
tocTitleHtml = ""

let titleCounter = 0
let subTitleCounter
titles.forEach(title=>{
    let headingText = title.innerText;
        if (title.tagName === "H2"){

            titleCounter ++ 
            subTitleCounter = 0           
            tocTitleHtml += `<li>${titleCounter}. :  ${headingText}</li> `
    }   else if (title.tagName === 'H3'){
            subTitleCounter ++
            tocTitleHtml +=`<li>${titleCounter}.${subTitleCounter}:  ${headingText}</li>`
    }
 
     return tocTitleHtml
  })
   toc.innerHTML += tocTitleHtml