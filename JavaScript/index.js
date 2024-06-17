const links = [
    { backgroundImage: "url('./images/linkedin.png')", link: "https://www.linkedin.com" },
    { backgroundImage: "url('./images/github_logo.png')", link: "https://github.com" },
    { backgroundImage: "url('./images/instagram-logo.png')", link: "https://www.instagram.com" },
    { backgroundImage: "url('./images/twitter.jpg')", link: "https://twitter.com" },
];

const socials = document.querySelector("#socials");

links.forEach(link => {
    const bubble = document.createElement("a");
    bubble.classList.add("bubble");
    bubble.style.backgroundImage = link.backgroundImage;
    bubble.style.backgroundSize = "cover";
    bubble.href = link.link;
    bubble.target = "_blank";

    socials.appendChild(bubble);
});
