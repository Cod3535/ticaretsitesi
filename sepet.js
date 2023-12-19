const telefonUrunleri = JSON.parse(localStorage.getItem('telefonUrunleri'));
const wrapperss = document.querySelector(".wrapperss")
const basket  = document.querySelector(".basket")

function startPage(){
    const sepet = JSON.parse(localStorage.getItem("sepet1"))

    if (sepet){
        for(let i of sepet){
            sepeteEkle(i)
        }

    }else{
        localStorage.setItem("sepet1","[]")
    }

}
startPage()
       


function sepeteEkle(urun){
    const div = document.createElement("div")
    div.classList.add("d-flex", "justify-content-around", "align-items-center", "p-2")
    div.innerHTML =
    `
            <img src="${urun.resim}" width="100px" height="100px" alt="">
            <p class="m-0">${urun.marka}</p>
            <p class="m-0">${urun.modeli}</p>
            <p class="m-0">${urun.fiyatı * urun.adet}</p>
            <p class="m-0"><span>${urun.adet}</span>x</p>
            <p class="m-0">Sil</p>
    `
    basket.append(div)
}


function ekranaYazdir(){
    for (let i of telefonUrunleri){
        
        const col = document.createElement("div")
        col.classList.add("col-lg-3", "col-sm-6", "col-12")
        col.innerHTML = 
        `
        <div class="card" id="${i.id}">
              <div class="card-header d-flex justify-content-between align-items-center">
                <span>${i.marka}</span>
                
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>       
                </span>    
              </div>
              <div class="card-body">
                <img class= w-100 style = "height:300px;"   src="${i.img}" alt="">
                <span class = "marka1">${i.marka}</span>
                <span class = "model1">${i.model}</span>
                
                <p class = "fiyat1">${i.fiyat}</p>
                <button onclick=satınAl(${i.id}) class="btn btn-outline-primary">Satın Al</button>
              </div>
            </div>
        
        `
        wrapperss.append(col)
    }
}
ekranaYazdir()


function satınAl(id){
    const card = document.getElementById(id)
    

    const marka2 = card.querySelector(".marka1").textContent
    const price = card.querySelector(".fiyat1").textContent
    const model2 = card.querySelector(".model1").textContent
    const resim2 = card.querySelector("img").src


    const urun = {
        "id": id,
        "marka": marka2,
        fiyatı : price,
        "modeli":model2,
        "resim": resim2,
        "adet" : 1

    }
    let urunler = JSON.parse(localStorage.getItem("sepet1"))
    let ilgiliurun = urunler.find(i => i.id == urun.id)
    if(ilgiliurun == undefined){
        urunler.push(urun)
    }
    else if(ilgiliurun){
        ilgiliurun.adet += 1
    }
  
        
    
    localStorage.setItem("sepet1",JSON.stringify(urunler))
    location.reload()
}




            
 