let form = document.querySelector('form')
let btn = document.querySelector('.btn')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const result = document.querySelector('#results')
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    if (height == '' || height < 0 || isNaN(height)) {

        alert('please give valid height value')

    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {
        alert('please give valid weight value')
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1)
        if (bmi < 18.6) {
            result.innerHTML = `<span>Underweight:${bmi}</span>`
        }
        if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = 
           `<span 
               style=" background-color: #fff;display: inline-block;
               width:45%;
               padding:15px 0px;
               margin:0px 30px;
               border:1px solid black;
               border-radius:8px;">
                 
                Normal Range:${bmi}
           </span>`
        }
        if (bmi > 24.9) {
            result.innerHTML = `<span>Overweight:${bmi}</span>`
        }
    }
})