//sidebar
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector(".content");

toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("close");
    content.classList.toggle("full");

    document.querySelector(".footer").classList.toggle("full");
    
    console.log(content.className);
});

//active navigation
const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
    let current = "";
    section.forEach(section =>{
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#"+current) {
            link.classList.add("active")

        }
    });
    console.log(current);
});

//filter produk
function filterBrand(brand){
    const products = document.querySelectorAll(".card");

    products.forEach(product =>{

        if(product.dataset.brand === brand){
            product.parentElement.style.display = "";
        }else{
            product.parentElement.style.display = "none";
        }
    });
}
document.getElementById("brand-asus").addEventListener("click", function(){
    filterBrand("asus")
    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("brand-acer").addEventListener("click", function(){
    filterBrand("acer")
    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("brand-msi").addEventListener("click", function(){
    filterBrand("msi")
    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("brand-lenovo").addEventListener("click", function(){
    filterBrand("lenovo")
    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("brand-hp").addEventListener("click", function(){
    filterBrand("hp")
    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("brand-axioo").addEventListener("click", function(){
    filterBrand("axioo")
    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("brand-all").addEventListener("click", function(){
    const products = document.querySelectorAll(".card");

    products.forEach(product => {
        product.parentElement.style.display = "";
        
        searchResult.textContent = "";
        searchInput.value = "";

        document.getElementById("produk").scrollIntoView({
        behavior: "smooth",
       
        });
    });
});
    
//search produk
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

searchBtn.addEventListener("click", function(){
    const keyword = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".card");

    let found = 0;
    products.forEach(product => {

        const title = product.querySelector(".card-title").textContent.toLowerCase();
        if(title.includes(keyword)){
            product.parentElement.style.display = "";
            found++;
        }else{
            product.parentElement.style.display = "none";
        } 
    });
    if(found ===0){
        searchResult.textContent = "Produk tidak ditemukan";
    
        searchResult.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }else{
        searchResult.textContent = `hasil pencarian: "${keyword}"`;
        document.getElementById("produk").scrollIntoView({
            behavior: "smooth"
        })
    }
});


//modal detail
const detailButtons = document.querySelectorAll(".detail-btn");

detailButtons.forEach(button => {
    button.addEventListener("click", function(){

    document.getElementById("modalNama").textContent =
        this.dataset.nama;
    document.getElementById("modalCPU").textContent =
        this.dataset.cpu;
    document.getElementById("modalRam").textContent =
        this.dataset.ram;
    document.getElementById("modalStorage").textContent =
        this.dataset.storage;
    document.getElementById("modalGPU").textContent =
        this.dataset.gpu;
    document.getElementById("modalHarga").textContent =
        this.dataset.harga;
    document.getElementById("modalImg").src = 
        this.dataset.img;
    });
});


//darkMode
const darkModetoggle = document.getElementById("darkModetoggle");
darkModetoggle.addEventListener("change", function(){
    document.body.classList.toggle("dark-mode");
    if(this.checked){
        themeIcon.className = "bi bi-sun-fill";
    }else{
        themeIcon.className = "bi bi-moon-stars-fill";
    }
});


//validasi form kontak
document.getElementById("btnKirim").addEventListener("click", function(){
const nama = document.getElementById("nama").value;
const email = document.getElementById("email").value;
const hp = document.getElementById("hp").value;
const pesan = document.getElementById("pesan").value;

    if(nama===""){
        alert("Nama Lengkap belum disi");
    }else if (email ===""){
        alert("Email belum diisi");
    }else if (hp ===""){
        alert("Nomor HP belum diisi");
    }else if (pesan ===""){
        alert("Pesan Belum diisi");
    }else{
        alert("Terimakasih Pesan Anda berhasil dikirim");
    }
});