const carosul1 = document.querySelector(".carosul1")
const arrowButtons = document.querySelectorAll(".wrapper i")
const firstCardWidth = document.querySelector(".card").offsetWidth;
const carosuleCheldrens = [...carosul1.children];


let isDragging = false, startX, startScrollLeft;

let cardPerView = Math.round(carosul1.offsetWidth / firstCardWidth);

carosuleCheldrens.slice(-cardPerView).reverse().forEach(card => {
    carosul1.insertAdjacentHTML("afterbegin", card.outerHTML)
})

carosuleCheldrens.slice(0, cardPerView).forEach(card => {
    carosul1.insertAdjacentHTML("beforeend", card.outerHTML)
})

arrowButtons.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        carosul1.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})

const dragStart = (e)=>{
    isDragging = true
    carosul1.classList.add("dragging")
    startX = e.pageX
    startScrollLeft = carosul1.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carosul1.scrollLeft = startScrollLeft - (e.pageX - startX);
}


const dragStop = () => {
    isDragging = false
    carosul1.classList.remove("dragging")
}

const infiniteScroll = () => {
    if(carosul1.scrollLeft === 0){
        carosul1.classList.add("no-transition")
        carosul1.scrollLeft = carosul1.scrollWidth - (2 * carosul1.offsetWidth)
        carosul1.classList.remove("no-transition")
    } 
    else if(Math.ceil(carosul1.scrollLeft) === carosul1.scrollWidth - carosul1.offsetWidth){
        carosul1.classList.add("no-transition")
        carosul1.scrollLeft = carosul1.offsetWidth
        carosul1.classList.remove("no-transition")
    }
    
}

carosul1.addEventListener("mousedown", dragStart);
carosul1.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop)
carosul1.addEventListener("scroll", infiniteScroll)