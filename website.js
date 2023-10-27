window.addEventListener('scroll', function(){
    let navbar1 = document.getElementById('nav1');
    let scrollValue = window.scrollY;
if (scrollValue > 1) {
    navbar1.classList.add('bgColor')
    let header = document.querySelectorAll("#navbar-main a");
    header.forEach(headers =>{
        headers.style.color = "white"
    })
    // document.getElementById('nav1').style.background="red";
}
else if (scrollValue < 1) {
    navbar1.classList.remove('bgColor')
    let header = document.querySelectorAll("#navbar-main a");
    header.forEach(headers =>{
        headers.style.color = "black"
    })
}
});