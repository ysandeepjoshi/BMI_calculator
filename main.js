function calculate(){
    let weight, height, measure, bmi, result;
    weight = parseFloat(document.getElementById("weight").value).toFixed(2);
    height = parseFloat(document.getElementById("height").value).toFixed(2);

    result = document.getElementById("results");

    if(height === "" || isNaN(height) || height <=0){
        result.innerHTML = "Provide a valid height!";
        result.classList.add('error');
        result.classList.remove('success');

    }
    else if(weight === "" || isNaN(weight) || weight <=0){
        result.innerHTML = "Provide a valid weight!";
        result.classList.add('error');
        result.classList.remove('success');
    }
    else{
        result.classList.remove('error');
        result.classList.add('success');
        height /=100;
        height *= height;
        bmi = weight / height;
        bmi = bmi.toFixed(1);
        if(bmi<= 18.4){
            measure = "Your BMI is "+ bmi + " which means "+ " you are Underweight";
        }
        else if(bmi>=18.5 && bmi<=24.9){
            measure = "Your BMI is "+ bmi + " which means "+ " you are Normal";
        }else if(bmi>=25 && bmi<=29.9){
            measure = "Your BMI is "+ bmi + " which means "+ " you are Overweight";
        }
        else{
            measure = "Your BMI is "+ bmi + " which means "+ " you are Obese";
        }
        result.innerHTML = measure;
    }
}