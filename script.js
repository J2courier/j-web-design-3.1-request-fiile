/*document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById("hide");

    function toggleChildDivs(event) {
        const childDivs = sideBar.getElementsByTagName("div");

        for (let i = 0; i < childDivs.length; i++) {
            if (childDivs[i].style.display === "none") {
                childDivs[i].style.display = "block"; 
                sideBar.style.position = "relative";
                sideBar.style.left = "200px";
                sideBar.style.transition = "opacity 0.5s ease;";
            } else {
                childDivs[i].style.display = "none"; 
                sideBar.style.position = "relative";
                sideBar.style.left = "-10px";
            }
        }
    }

    sideBar.addEventListener("click", toggleChildDivs);
}); */
 
/*document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById("hide");

    function toggleChildDivs() {
        const childDivs = sideBar.getElementsByTagName("div");
        let shouldShow = window.getComputedStyle(childDivs[0]).display === "none"; // Check if any child is hidden

        for (let i = 0; i < childDivs.length; i++) {
            childDivs[i].style.display = shouldShow ? "block" : "none";
        }

        sideBar.style.position = "relative";
        sideBar.style.left = shouldShow ? "200px" : "-10px";
        sideBar.style.transition = "left 0.5s ease";
    }

    sideBar.addEventListener("click", toggleChildDivs);
}); */

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
});

