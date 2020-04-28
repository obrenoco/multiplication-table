function calculate() {
    let number = document.getElementById('number')
    let num = Number(number.value)
    let res = document.getElementById('res')
    res.innerHTML = ''
    
    if(number.value.length == 0) {
        alert('Insert a number')
    } else {
        let inc = 1
        for( let n = num ; inc <= 10 ; inc++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${inc} = ${n*inc}`
            item.value = `res${inc}`
            res.appendChild(item)
        }
    }
}
