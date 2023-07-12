function randomizeText() {
    const texts = ["my", "heart", "will", "go", "on"]
    const randomPick = Math.floor(Math.random() * texts.length)
    document.getElementById('header').innerHTML = texts[randomPick]
}