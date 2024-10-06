const header = document.querySelector('header')

document.addEventListener('scroll',function(){
  if(window.scrollY > 0){
    header.classList.add('header-shadow')
  }else{
    header.classList.remove('header-shadow')
  }
})




const options = {
  threshold : 0.3
}
const containerRight = document.querySelectorAll('.showRight-container')
const observerRight = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry=>{
    entry.target.classList.toggle('showRight', entry.isIntersecting)
  })
  
},options)

containerRight.forEach(el=>{
  observerRight.observe(el)
})


const containerLeft = document.querySelectorAll('.showLeft-container')
const observerLeft = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry=>{
    entry.target.classList.toggle('showLeft', entry.isIntersecting)
  })
  
},options)

containerLeft.forEach(el=>{
  observerLeft.observe(el)
})

// ///////////// responsive ////////////
const sideBar = document.querySelector(".sideBar")
const burgerIcon = document.querySelector("header i")
function showSidebare(){
  sideBar.style.display = 'flex'
  burgerIcon.style.display = 'none'
}

function closeSideBar(){
  sideBar.style.display = 'none'
  burgerIcon.style.display = 'block'

}