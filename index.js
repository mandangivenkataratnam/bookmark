let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let bookmarksList = document.getElementById("bookmarksList");

function addBookmark() {
    let siteName = siteNameInput.value;
    let siteUrl = siteUrlInput.value;
    let list = document.createElement("li");
    bookmarksList.appendChild(list);
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = siteName;
    bookmarkUrl.textContent = siteUrl;
    bookmarkUrl.href = siteUrl;
    bookmarkUrl.setAttribute("target", "_blank");
    bookmarksList.classList.toggle("d-none");
    list.appendChild(bookmarkName);
    list.appendChild(bookmarkUrl);
}
siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});
siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameInput.textContent = "Required*";
    } else {
        siteNameInput.textContent = "";
    }
});
bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookmark();
});