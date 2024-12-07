var HEADER_BACKGROUNDS_COUNT = 8;

var setRandomHeaderBackground = function () {
    var fileNumber = 1 + Math.floor(Math.random() * 100) % HEADER_BACKGROUNDS_COUNT
    var filePath = 'assets/img/header/' + fileNumber + '.webp'
    var header = document.getElementById('header')
    header.style.background = '#2d241d url("' + filePath + '") 100% 100% no-repeat'
    header.style.backgroundPosition = 'center'
    header.style.backgroundSize = 'cover'
}

var processCollapsibles = function () {
    var collapsibles = document.getElementsByClassName('collapsible')
    for (const collapsible of collapsibles) {
        const opener = collapsible.getElementsByClassName('collapsible-opener')[0]
        const content = collapsible.getElementsByClassName('collapsible-content')[0]

        if (opener && content) {
            opener.onclick = (e) => {
                e.preventDefault()
                if (content.classList.toggle('collapsible-content-expanded')) {
                    collapsible.scrollIntoView({ block: 'start', behavior: 'smooth' })
                }
            }
        }
    }
}

setRandomHeaderBackground()
processCollapsibles()
