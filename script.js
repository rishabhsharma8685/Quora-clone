var addbtn = document.querySelector("#add-btn");
var modal = document.querySelector(".modal");
var closebtn = document.querySelector(".modal-btn");

addbtn.onclick = function(){
    modal.classList.add("active");
    document.getElementById('mainbody').style.opacity = "0.2";
}
closebtn.addEventListener("click",()=>{
    document.getElementById('mainbody').style.opacity = "1";
    modal.classList.remove('active');
})


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}