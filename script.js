document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById("hide");
    const weekDisplay = document.querySelector('.week h4');
    const itemDivs = document.querySelectorAll('.itemParent div');


    function toggleChildDivs() {
        const childDivs = sideBar.getElementsByTagName("div");
        let shouldShow = window.getComputedStyle(childDivs[0]).display === "none"; 
        for (let i = 0; i < childDivs.length; i++) {
            childDivs[i].style.display = shouldShow ? "block" : "none";
        }
        sideBar.style.position = "relative";
        sideBar.style.left = shouldShow ? "200px" : "-10px";
        sideBar.style.transition = "left 0.5s ease, opacity 0.3s ease";
        sideBar.style.boxShadow = "0px 0px 2px 0px #32B9B1"
    }
 
    sideBar.addEventListener("click", toggleChildDivs);

    itemDivs.forEach(item => {
        item.addEventListener('click', () => {
            const weekText = item.querySelector('h4') ? item.querySelector('h4').innerText : '';
            if (weekText.startsWith('WEEK')) {
                weekDisplay.innerText = weekText;
            }
        });
    });

    //new function
    function toChangeColor(event){
        const siblings = Array.from(this.parentElement.children);
        if(this.style.backgroundColor === 'rgb(8, 23, 63)'){
            this.style.backgroundColor = '#438EAE';
        }else{
           this.style.backgroundColor = '#08173f';
        }
    }

    const mwfAttendance = document.querySelectorAll('.containerAtt > div');
    const tthAttendance = document.querySelectorAll('.container2 > div');

    mwfAttendance.forEach(div =>{
        div.addEventListener("click", toChangeColor);
    });
    tthAttendance.forEach(div =>{
        div.addEventListener("click", toChangeColor);
    });
});
