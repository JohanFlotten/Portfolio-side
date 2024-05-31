const links = [
    {backgroundImage: "url('../images/linkedin.png')"},
    {backgroundImage: "url('../images/github_logo.png')"},
    {backgroundImage: "url('../images/instagram-logo.png')"},
    {backgroundImage: "url('../images/twitter.jpg')"},
];

const socials = document.querySelector("#socials");

links.forEach(link => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.backgroundImage = link.backgroundImage;
    bubble.style.backgroundSize = "cover";

    socials.appendChild(bubble);
});