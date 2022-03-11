const ourItemDiv = document.getElementsByClassName("item")
const openIcon = document.getElementsByClassName("icon-open")
const closeIcon = document.getElementsByClassName("icon-close")

console.log(ourItemDiv)

for(let i = 0; i<ourItemDiv.length; i++)
{
    // closeIcon[i].style.dispaly = "none";

    ourItemDiv[i].addEventListener("click", () =>{
        ourItemDiv[i].classList.toggle("active");
    });
}
