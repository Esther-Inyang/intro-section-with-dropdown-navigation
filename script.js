
const openMenu = document.querySelector(".open-menu-icon")
const closeMenu = document.querySelector(".close-menu-icon");
const menuSection = document.querySelector(".menu-section");
const menu = document.querySelector(".menu");

closeMenu.addEventListener("click", ()=>{
    menuSection.style.display = "none";
})

openMenu.addEventListener("click", ()=>{
    menuSection.style.display = "block";

})

const featureItems = document.querySelector(".feature-items")
const companyItems = document.querySelector(".company-items")

const angleDownFeature = document.querySelector(".feature-angle-down")
const angleUpFeature = document.querySelector(".feature-angle-up")
const angleDownCompany = document.querySelector(".company-angle-down")
const angleUpCompany = document.querySelector(".company-angle-up")

// if(e.target.id !== "select-reg" && e.target.id !== "angle-dw"){

//      IDs
// features-id
// features-angle-down
// features-angle-up
//company
//company-angle-down
//company-angle-down

// menu.addEventListener("click", (e)=>{
//     if(e.target.classList ===  )
// })

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
