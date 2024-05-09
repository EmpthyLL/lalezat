const listresep = ["Rendang","Bakwan Goreng","Nasi Goreng","Chicken Wings","Pempek","Tom Yam","Tiramisu","Sate","Risol","Kari Ayam","Mie Goreng","Tempe Mendoan","Bakso","Rawon","Soto Lamongan","Nasi Liwet","Nasi Pecel","Gado-gado","Pasta Tomat"]
const menucards = document.querySelector('.menu-cards')
listresep.forEach(function(resep){
    const div = document.createElement('div')
    div.classList.add("menu-cards")
    const card = document.createElement('div')
    card.classList.add("menu")
    const img = document.createElement('img')
    img.src = `img/Food/${resep}.jpg`
    card.appendChild(img)
    const des = document.createElement('div')
    des.classList.add('menudes')
    const h3 = document.createElement('h3')
    h3.innerHTML = resep
    const eye = document.createElement('a')
    eye.innerHTML = '<ion-icon class="detail" name="eye"></ion-icon>'
    des.appendChild(h3)
    des.appendChild(eye)
    card.appendChild(des)
    div.appendChild(card)
    menucards.appendChild(div)
})
const modal = document.querySelector('#item-detail')
const modalimg = document.querySelector('.imginmodal')
const menuname = document.querySelector('.product-content h3')
document.addEventListener('click',function(ev){
    if(ev.target.classList.contains('detail')){
        modal.style.display = 'flex'
        modalimg.src = ev.target.parentElement.parentElement.previousElementSibling.src
        menuname.innerHTML = ev.target.parentElement.previousElementSibling.innerHTML
    }
})
document.querySelector(".modal .close").addEventListener('click',function(ev){
    modal.style.display = 'none'
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(ev.target === modal)
    modal.style.display = 'none'
})