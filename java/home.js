
const search = document.querySelector('.search-bar')
const searchicon = document.querySelector('.search')
const searchform = document.getElementById('search-form')
searchicon.addEventListener('click',function(ev){
    search.classList.toggle('active')
    searchform.focus()
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(!searchicon.contains(ev.target) && !search.contains(ev.target)){
        search.classList.remove('active')
    }
})
const menubut = document.getElementById('menubut')
const nav = document.querySelector('.navigasi')
menubut.addEventListener('click',function(ev){
    nav.classList.toggle('active')
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(!menubut.contains(ev.target) && !nav.contains(ev.target)){
        nav.classList.remove('active')
    }
})