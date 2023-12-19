var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');
const btns = document.querySelector(".bn24")


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

   const pyazi = document.getElementById("#result");

   function saveCredentials() {
    // Kullanıcının girdiği değerler alınıyor
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;

    // Kullanıcı adı ve şifre localStorage'a kaydediliyor
    localStorage.setItem('username', enteredUsername);
    localStorage.setItem('password', enteredPassword);

    document.getElementById('result').innerText = 'Kullanıcı adı ve şifre başarıyla kaydedildi!';
}

  function checkLogin() {
    // Kullanıcının girdiği değerler alınıyor
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;

    // Storage'dan kaydedilmiş değerler alınıyor
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Kullanıcı adı ve şifre kontrol ediliyor
    if(enteredUsername === storedUsername && enteredPassword === storedPassword){
        window.location.href = 'index.html';
   } else{

    document.getElementById('result').innerText = 'Giriş Başarısız. Lütfen tekrar deneyin.';
 }
  } 
  function kayitsayfayagit(){
    window.location.href = 'kayıtol.html';
  }
function girissayfayagit(){
    window.location.href = 'giriş.html';
}
function git() {
    document.getElementById('slider-container').scrollIntoView({ behavior: 'smooth' });
}




const telefonUrunleri = [
    {id:1, marka: 'Samsung', model: 'Galaxy S21', fiyat: 4599 , img: "https://cdn.akakce.com/z/samsung/samsung-galaxy-s21-fe-5g.jpg"},
    {id:2, marka: 'iPhone', model: '13 Pro', fiyat: 6799, img:"https://productimages.hepsiburada.net/s/337/375-375/110000157420823.jpg" },
    {id:3, marka: 'OnePlus', model: '9', fiyat: 3899 , img:"https://cdn.akakce.com/oneplus/oneplus-8-pro-256-gb-z.jpg"},
    {id:4, marka: 'Xiaomi', model: 'Mi 11', fiyat: 3299, img:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1633677458.1062281.png" },
    {id:5, marka: 'Google', model: 'Pixel 6', fiyat: 4499, img:"https://storage.googleapis.com/alpine-inkwell-325917.appspot.com/devices/pixel-6-header.png" },
    {id:6, marka: 'Huawei', model: 'P40 Lite', fiyat: 2899, img: "https://sc04.alicdn.com/kf/H09379370575e422fb01c510de3db3d1ca.png" },
    {id:7, marka: 'Nokia', model: '7.2', fiyat: 1799, img: "https://images.ctfassets.net/wcfotm6rrl7u/XLD0DLyWLXZ9WCSRMrp8o/b1fd6a528e19bbc8610de63749565b26/nokia_7_2-DTC-Bright-Screen-desktop.png" },
    {id:8, marka: 'Sony', model: 'Xperia 5 III', fiyat: 5999, img:"https://www.refurbished.store/cache/images/sony-xperia-5-iii-zwart-frontandback_600x600_BGresize_16777215-tj.png" },
    {id:9, marka: 'LG', model: 'Velvet', fiyat: 3499, img: "https://fdn2.gsmarena.com/vv/pics/lg/lg-velvet-1.jpg" },
    {id:10, marka: 'Motorola', model: 'Moto G Power', fiyat: 1999, img: "https://motorolacaen.vtexassets.com/arquivos/ids/156952-800-auto?width=800&height=auto&aspect=true" },
    {id:11, marka: 'Asus', model: 'Zenfone 8', fiyat: 4599, img: "https://resim.epey.com/691893/m_asus-zenfone-8-1.png" },
    {id:12, marka: 'BlackBerry', model: 'Key2', fiyat: 2799, img:"https://p7.hiclipart.com/preview/118/619/699/blackberry-key2-smartphone-64-gb-blackberry.jpg" },
    {id:13, marka: 'Lenovo', model: 'Legion Phone Duel', fiyat: 5299, img: "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/l/e/legion_duel_2_3.jpg" },
    {id:14, marka: 'Oppo', model: 'Find X3 Pro', fiyat: 5499, img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x3-pro-4.jpg" },
    {id:15, marka: 'Vivo', model: 'X60 Pro', fiyat: 3899, img: "https://www.notebookcheck-tr.com/uploads/tx_nbc2/Teaser_04.png" },
    {id:16, marka: 'ZTE', model: 'Axon 30 Ultra', fiyat: 4699, img: "https://www.notebookcheck-tr.com/uploads/tx_nbc2/4_to_3_Teaser_ZTE_Axon_30_5G.jpg" },
    {id:17, marka: 'Alcatel', model: '3L', fiyat: 1299, img: "https://www.alcatelmobile.com/caribbean/wp-content/uploads/2020/01/comp1_513x599.png" },
    {id:18, marka: 'HTC', model: 'U20 5G', fiyat: 3199, img:"https://fdn2.mobgsm.com/vv/bigpic/htc-u20-5g.jpg" },
    {id:19, marka: 'Meizu', model: '18 Pro', fiyat: 4199, img:"https://resim.epey.com/663327/m_meizu-18-2.png" }
  ];
  const giyimEsyalari = [
    { adi: "T-shirt", bedeni: "M", cinsiyeti: "Unisex", img:"https://cdn03.ciceksepeti.com/cicek/kcm76833700-1/M/unisex-brooklyn-baskili-t-shirt-kcm76833700-1-d53f8cf16e544d49ac63b8c8c675933e.jpg"},
    { adi: "Kazak", bedeni: "L", cinsiyeti: "Kadın", img:"https://cdn.dsmcdn.com/ty1012/product/media/images/prod/SPM/PIM/20231009/19/635298e2-a402-386c-bedd-fc232e367a8b/1_org_zoom.jpg" },
    { adi: "Kot Pantolon", bedeni: "32", cinsiyeti: "Erkek", img:"https://cdn.dsmcdn.com/ty157/product/media/images/20210814/12/118502543/226957787/1/1_org_zoom.jpg" },
    { adi: "Etek", bedeni: "S", cinsiyeti: "Kadın", img:"https://cdn.dsmcdn.com/ty986/product/media/images/20230814/9/402985433/969572830/2/2_org_zoom.jpg" },
    { adi: "Ceket", bedeni: "XL", cinsiyeti: "Unisex", img:"https://cdn.dsmcdn.com/ty1022/product/media/images/prod/SPM/PIM/20231022/01/39bdba7a-33f5-365c-9239-c441facdf36e/1_org_zoom.jpg" },
    { adi: "Şort", bedeni: "30", cinsiyeti: "Erkek", img:"https://cdn.dsmcdn.com/ty933/product/media/images/20230602/10/376670870/961469480/1/1_org_zoom.jpg" },
    { adi: "Bluz", bedeni: "M", cinsiyeti: "Kadın",img:"https://cdn.dsmcdn.com/ty625/product/media/images/20221207/0/228820905/640705752/1/1_org_zoom.jpg" },
    { adi: "Sweatshirt", bedeni: "L", cinsiyeti: "Unisex", img:"https://cdn.dsmcdn.com/ty1005/product/media/images/prod/SPM/PIM/20231001/20/b0eb8666-14c6-35d2-ba8e-a0eef48b616f/1_org_zoom.jpg" },
    { adi: "Elbise", bedeni: "M", cinsiyeti: "Kadın ",img:"https://cdn.dsmcdn.com/ty990/product/media/images/jpim-outputs/assets/product/media/images/20230828/11/408464523/960695402/2/2_org_zoom.jpg" },
    { adi: "Polo Yaka T-shirt", bedeni: "S", cinsiyeti: "Erkek", img:"https://cdn.dsmcdn.com/ty1083/product/media/images/prod/SPM/PIM/20231211/12/c612c791-18fb-375d-a646-3aad7b8bce27/1_org_zoom.jpg" },
    { adi: "Mont", bedeni: "XL", cinsiyeti: "Unisex" , img:"https://cdn.dsmcdn.com/ty1026/product/media/images/prod/SPM/PIM/20231030/00/13874b96-6721-3ea1-a20f-30feef21d393/1_org_zoom.jpg"},
    { adi: "Jeans Ceket", bedeni: "L", cinsiyeti: "Erkek", img:"https://cdn.dsmcdn.com/ty830/product/media/images/20230416/13/326455253/594609990/1/1_org_zoom.jpg" },
    { adi: "Blazer", bedeni: "M", cinsiyeti: "Kadın", img:"https://cdn.dsmcdn.com/ty327/product/media/images/20220209/16/47566707/147826098/3/3_org_zoom.jpg" },
    { adi: "Sweatpants", bedeni: "M", cinsiyeti: "Unisex", img: "https://cdn.dsmcdn.com/ty416/product/media/images/20220505/10/101962997/466238615/1/1_org_zoom.jpg"},
    { adi: "Tişört Elbise", bedeni: "S", cinsiyeti: "Kadın", img:"https://cdn.dsmcdn.com/ty809/product/media/images/20230402/23/317283865/902571759/1/1_org_zoom.jpg" },
    { adi: "Gömlek", bedeni: "L", cinsiyeti: "Erkek", img: "https://cdn.dsmcdn.com/ty866/product/media/images/20230504/16/339729008/536270117/1/1_org_zoom.jpg"},
    { adi: "Pantolon", bedeni: "32", cinsiyeti: "Unisex", img:"https://cdn.dsmcdn.com/ty999/product/media/images/prod/SPM/PIM/20230915/20/c3acf6fa-63d7-3b03-b82e-dc9c697351c9/1_org_zoom.jpg" },
    { adi: "Üst Giyim Seti", bedeni: "M", cinsiyeti: "Kadın", img:"https://cdn.dsmcdn.com/ty752/product/media/images/20230227/0/290546129/869818322/1/1_org_zoom.jpg" },
    { adi: "Eldiven", bedeni: "S/M", cinsiyeti: "Unisex", img:"https://cdn.dsmcdn.com/ty1041/product/media/images/prod/SPM/PIM/20231005/16/7dfa705b-7aaf-3d97-93e8-ac1053c0ac51/1_org_zoom.jpg" },
    { adi: "Bağcıklı Ayakkabı", bedeni: "38", cinsiyeti: "Kadın", img: "https://cdn.dsmcdn.com/ty709/product/media/images/20230130/21/270308655/507471176/1/1_org_zoom.jpg"}
  ];
  
const getir = document.querySelector("#getir");
const giyimgetir = document.querySelector("#giyim");

// localStorage ürünleri kaydet (Bu satırları sadece bir kez çalıştırın)
localStorage.setItem('telefonUrunleri', JSON.stringify(telefonUrunleri));
localStorage.setItem('giyimEsyalari', JSON.stringify(giyimEsyalari));


getir.addEventListener("click", displayProductList);
giyimgetir.addEventListener("click", giyimÜrünleri);

function displayProductList() {
  // Temizleme işlemi ekledik
  clearProductList();

  const productListElement = document.querySelector(".wrapper_2");

  // localStorage telefon ürünlerini al
  const telefonUrunleri = JSON.parse(localStorage.getItem('telefonUrunleri'));

  telefonUrunleri.forEach(telefon => {
    var listItem = document.createElement('div');
    listItem.classList.add('wrapper_2');
    listItem.innerHTML = `
      <div class="card2">
        <div class="düzenlee">
          <img class="image-item" src=${telefon.img}>
        </div>
        <div>
          <h4>Markası: ${telefon.marka} </h4>
          <div>
            <span>Modeli: ${telefon.model}</span>
          </div>
          <div>
            <span>Fiyatı: ${telefon.fiyat}</span>
          </div>
          <button class="bn632-hover bn24">Sepete Ekle</button>
        </div>
      </div>
    `;
    productListElement.appendChild(listItem);
  });
}

function giyimÜrünleri() {
  // giyim kategorisini başka butona bastığında kaldırma fonk çağırıyor
  clearProductList();

  const ürünGiyim = document.querySelector(".wrapper_2");

  // localStorage giyim eşyalarını alıyo
  const giyimEsyalari = JSON.parse(localStorage.getItem('giyimEsyalari'));

  giyimEsyalari.forEach(giyim1 => {
    const giyimitem = document.createElement('div');
    giyimitem.classList.add('wrapper_2');
    giyimitem.innerHTML = `
      <div class="card2">
        <div class="düzenlee">
          <img class="image-item" src=${giyim1.img}>
        </div>
        <div>
          <h4>Kategori: ${giyim1.adi} </h4>
          <div>
            <span>Bedeni: ${giyim1.bedeni}</span>
          </div>
          <div>
            <span>Cinsiyeti: ${giyim1.cinsiyeti}</span>
          </div>
          <button class="bn632-hover bn24">Sepete Ekle</button>
        </div>
      </div>
    `;
    ürünGiyim.appendChild(giyimitem);
  });
}

function clearProductList() {
  const productListElement = document.querySelector(".wrapper_2");
  productListElement.innerHTML = ""; 
    
}



var cart = JSON.parse(localStorage.getItem('sepet1'));


//sepette kaç tane ürün varsa onu yazdır
const getirs = document.querySelector(".getirs")
getirs.textContent = cart.length


let image = document.querySelector('#a').src;
let markası = document.querySelector('.markası').textContent;
let fiyatı = document.querySelector(".fiyatı").textContent;
let modeli = document.querySelector(".modeli").textContent;

function ekle(){
    
 
var newItem = {
  resim: image,
  marka: markası,
  modeli: modeli,
  fiyati: fiyatı,
  adet:1
};
cart.push(newItem);

// Sepeti güncelle
localStorage.setItem('sepet1', JSON.stringify(cart));
}

