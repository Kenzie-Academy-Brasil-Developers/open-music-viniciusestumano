export const darkModeAdd = () => {
    const darkModeButton = document.querySelector(".darkMode__button");
    const html = document.querySelector('html');
    const theme = JSON.parse(localStorage.getItem("darkmode"));

    if(theme){
        darkModeButton.innerText = "Light Mode";
        html.classList.add("dark__mode");
    } else {
        darkModeButton.innerText = "Dark Mode";
        html.classList.remove("dark__mode");
    }

    darkModeButton.addEventListener("click", () => {
        html.classList.toggle("dark__mode");

        if(html.classList.contains("dark__mode")) {
            darkModeButton.innerText = "Light Mode";
            localStorage.setItem('darkmode', JSON.stringify(true));
        } else {
            darkModeButton.innerText = "Dark Mode";
            localStorage.setItem("darkmode", JSON.stringifyrin(false));
        }
    })
}