let count = 0
let counter = document.querySelector('section#counter')

function ct() { 
    count ++
    counter.innerHTML = `<b>There's <mark>${count}</mark> clicks!</b> <br> <br>`
}

function restart() {
    count = 0
    counter.innerHTML = `<b>Counter restarted!<b> <br><br>`
}