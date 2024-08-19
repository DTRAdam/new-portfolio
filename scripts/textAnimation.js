function textanimation(text, who, time) {
    let element = document.getElementById(who)
    let textArr = text.split("");
    for (let i = 0; i < textArr.length; i++) {
        setTimeout(() => {
            element.innerHTML += textArr[i];

        }, i * time);
    }
}
textanimation("web development.", "textspan", 140)
textanimation("HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.", "aboutmespan", 60)
textanimation("Van Gogh's and Galileo's art combined.", "galleryspan", 65)

