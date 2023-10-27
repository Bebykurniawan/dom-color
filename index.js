const btn = document.getElementById('button')

btn.addEventListener('click',function() {
    document.body.classList.toggle('biru')
}
)


const btnWarna = document.createElement('button')
const textBtn = document.createTextNode("Ubah Warna Random")
btnWarna.appendChild(textBtn)
btnWarna.setAttribute('type','button')
btn.after(btnWarna)

btnWarna.addEventListener('click',function() {
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
})
