function calcBMI() {
    var weightinput = document.getElementById('weight')
    var heightinput = document.getElementById('height')

    var weight = parseInt(weightinput.value)
    var height = parseInt(heightinput.value)

    var heightinM = height/100 
    
    var bmi = weight/ (heightinM * heightinM)

document.getElementById('BMIresult').innerHTML = bmi.toFixed(2)
}
