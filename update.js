function convert_temp(t_conv, t_Unit1, t_Unit2){
    if(t_Unit1 == 'Fahrenheit'){
        //Fahrenheit To ...
        if(t_Unit2 == 'Celsius') {
            return ((Number(t_conv)-32)*(5/9))
        }
        else if(t_Unit2 == 'Kelvin') {
            return (Number(t_conv)-32)*5/9 + 273.15
        }
        else {
            return Number(t_conv)
        }
    }
    else if(t_Unit1 == 'Celsius'){
        //Celsius To ...
        if(t_Unit2 == 'Fahrenheit') {
            return ((Number(t_conv)*9/5)+32)
            }
        else if(t_Unit2 == 'Kelvin') {
            return (Number(t_conv) + 273.15)
        }
        else {
            return Number(t_conv)
        }
    }
    else if(t_Unit1 == 'Kelvin'){
        //Kelvin To ...
        if(t_Unit2 == 'Fahrenheit') {
            return (Number((t_conv)*9) - (273.15*(9/5)) + 32)
        }
        else if(t_Unit2 == 'Celsius') {
            return (Number(t_conv) - 273.15)
        }
        else {
            return Number(t_conv)
        }
    }
}


function update(source,t_conv, t_Unit1, t_Unit2, model){
    console.log(source)
    console.log(t_conv)
    if(source.toLowerCase()  === 'y'){
        return{
            ...model,
            leftValue: Number(t_conv),
            leftUnit: t_Unit1,
            rightValue: Number(convert_temp(t_conv, t_Unit1, t_Unit2)),
            rightUnit: t_Unit2
        }
    }
    
    else if(source.toLowerCase()  === 'n'){
        return{
            ...model,
            leftValue: Number(convert_temp(t_conv, t_Unit1, t_Unit2)),
            leftUnit: t_Unit2,
            rightValue: Number(t_conv),
            rightUnit: t_Unit1
        }
    }
}
module.exports = {update}
