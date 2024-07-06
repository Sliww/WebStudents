const savingBtn = document.querySelector(".savingBtn");
const savingBtn2 = document.querySelector(".savingBtn2");

savingBtn.addEventListener("mouseover", ()=>{
    savingBtn.classList.add("dnone");
    savingBtn2.classList.remove("dnone");
})

savingBtn2.addEventListener("mouseleave", ()=>{
    savingBtn2.classList.add("dnone");
    savingBtn.classList.remove("dnone");
})