function calculateTip(event) {
    event.preventDefault();
    let bill = parseFloat(document.getElementById('bill').value)
    let serviceQual = parseFloat(document.getElementById('serviceQual').value)
    let numOfPeople = parseFloat(document.getElementById('people').value)

    if(bill == 0 | serviceQual == 0){
        alert("Por favor, preencha os valores")
    }

    if(numOfPeople == "" | numOfPeople <= 1){
        numOfPeople = 1
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'   
    }
    console.log(serviceQual,bill,numOfPeople)
    let total = ((bill + (bill * serviceQual/100)) / numOfPeople)
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total
    document.getElementById('totalTip').style.display = 'block'

}
document.getElementById('totalTip').style.display = 'none'
document.getElementById('each').style.display = 'none'

document.getElementById('tipsform').addEventListener('submit' , calculateTip)