// const btn = document.getElementById('button')

// btn.addEventListener('click',function() {
//     document.body.classList.toggle('biru')
// }
// )


// const btnWarna = document.createElement('button')
// const textBtn = document.createTextNode("Ubah Warna Random")
// btnWarna.appendChild(textBtn)
// btnWarna.setAttribute('type','button')
// btn.after(btnWarna)

// btnWarna.addEventListener('click',function() {
//     const r = Math.round(Math.random() * 255 + 1)
//     const g = Math.round(Math.random() * 255 + 1)
//     const b = Math.round(Math.random() * 255 + 1)
//     document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
// })

// const sliderMerah = document.querySelector('input[name=Red]')
// const sliderHijau = document.querySelector('input[name=Green]')
// const sliderBiru = document.querySelector('input[name=Blue]')

// sliderMerah.addEventListener('input',function() {
//     const r = sliderMerah.value
//     const g = sliderHijau.value
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +',100)'
// })
// sliderHijau.addEventListener('input',function() {
//     const r = sliderMerah.value
//     const g = sliderHijau.value
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +',100)'
// })
// sliderBiru.addEventListener('input',function() {
//     const r = sliderMerah.value
//     const g = sliderHijau.value
//     const b = sliderBiru.value
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
// })

const range = document.querySelectorAll('input');

for (let i = 0; i < range.length; i++) {

    range[i].addEventListener('input', function () {
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}

document.body.addEventListener('mousemove',function(e) {
const xPosition = Math.round((e.clientX / window.innerWidth) * 255)
const yPosition = Math.round((e.clientY / window.innerHeight) * 255)
console.log(xPosition);
console.log(yPosition);
document.body.style.backgroundColor = 'rgb('+ xPosition +','+ yPosition +',100)'
})