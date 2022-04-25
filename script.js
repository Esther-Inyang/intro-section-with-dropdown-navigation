
const openMenu = document.querySelector(".open-menu-icon")
const closeMenu = document.querySelector(".close-menu-icon");
const menuSection = document.querySelector(".menu-section");

closeMenu.addEventListener("click", ()=>{
    menuSection.style.display = "none";
})

openMenu.addEventListener("click", ()=>{
    menuSection.style.display = "block";

})

const featureItems = document.querySelector(".feature-items")
const companyItems = document.querySelector(".company-items")

const angleDownFeature = document.querySelector(".angle-down-icon")
const angleUpFeature = document.querySelector(".angle-up-icon")
const angleDownCompany = document.querySelector(".angle-down-b-icon")
const angleUpCompany = document.querySelector(".angle-up-b-icon")

angleDownFeature.addEventListener("click", ()=>{
    featureItems.style.display = "block";
    angleDownFeature.style.display = "none";
    angleUpFeature.style.display = "block";
})

angleUpFeature.addEventListener("click", ()=>{
    featureItems.style.display = "none";
    angleDownFeature.style.display = "block";
    angleUpFeature.style.display = "none";
})

angleDownCompany.addEventListener("click", ()=>{
    companyItems.style.display = "block";
    angleDownCompany.style.display = "none";
    angleUpCompany.style.display = "block";
})

angleUpCompany.addEventListener("click", ()=>{
    companyItems.style.display = "none";
    angleDownCompany.style.display = "block";
    angleUpCompany.style.display = "none";
})
