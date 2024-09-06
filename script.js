const header = document.querySelector('header')

document.addEventListener('scroll',function(){
  if(window.scrollY > 0){
    header.classList.add('header-shadow')
  }else{
    header.classList.remove('header-shadow')
  }
})




const options = {
  threshold : 0.4
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
