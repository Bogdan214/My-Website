const glow = document.querySelector('.glow');

document.addEventListener('mousemove', (e) => {
    let helper = e.pageX + "px";
    glow.style.left = helper;
    helper = e.pageY + "px";
    glow.style.top = helper;
    glow.style.transform = "translate(-50% , -50%)";
});
