const imageEl=document.querySelector(".container-image")
const btnEl=document.querySelector(".btn")

btnEl.addEventListener("click", ()=>{
       const imageLength=4
    for (let index = 0; index < imageLength; index++) {
            const imag=document.createElement("img")
        imag.src =`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        imageEl.appendChild(imag)    
    }

})


window.addEventListener('load', ()=>{

    const imageLength = 4
    for (let index = 0; index < imageLength; index++) {
        const imag = document.createElement("img")
        imag.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        imageEl.appendChild(imag)
    }  
})