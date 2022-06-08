function calcResult() {
    let cpu = document.getElementById('cpu').valueAsNumber;
    let mboard = document.getElementById('mboard').valueAsNumber;
    let ram = document.getElementById('ram').valueAsNumber;
    let ssd = document.getElementById('ssd').valueAsNumber;
    let psu = document.getElementById('psu').valueAsNumber;
    let pcase = document.getElementById('pcase').valueAsNumber;
    let resultRUB = cpu + mboard + ram + ssd + psu + pcase;
    let resultUSD = resultRUB / 65;
    let resultEUR = resultRUB / 70;
    if (isNaN(resultRUB)) {
        document.getElementById('modal').style.opacity = 1;
        setTimeout(() => {
            document.getElementById('modal').style.opacity = 0;
        }, "2000")
    } else {
        document.getElementById('modal').style.opacity = 0;
        document.getElementById('resRUB').innerHTML = resultRUB + ' ' + 'RUB'
        document.getElementById('resUSD').innerHTML = Math.round(resultUSD) + ' ' + 'USD'
        document.getElementById('resEUR').innerHTML = Math.round(resultEUR) + ' ' + 'EUR'
    }
}


