console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-CO");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.getAttribute("target"));
$linkDOM.setAttribute("target","_blank");
console.log($linkDOM.getAttribute("target"));
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://clubpenguin.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));