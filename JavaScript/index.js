const links = [
    {title: "linkedin"},
    {title: "github"},
    {title: "insta"},
    {title: "twitter"},
];

const socials = document.querySelector("#socials");

links.forEach(link => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    const websiteName = document.createElement("p");
    websiteName.classList.add("website-name");
    websiteName.textContent = link.title;

    bubble.appendChild(websiteName);
    socials.appendChild(bubble);
});