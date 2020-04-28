function calculate() {
    let number = document.getElementById('number')
    let num = Number(number.value)
    let res = document.getElementById('res')
    
    let inc = 1

    res.innerHTML = ''
    for( let n = num ; inc <= 10 ; inc++ ) {
        let item = document.createElement('option')
        item.text = `${n} x ${inc} = ${n*inc}`
        res.appendChild(item)
    }
}