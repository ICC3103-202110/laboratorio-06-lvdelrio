function calculated_tipPercent(billAmount,tipPercent){
    const resultado = ((billAmount*tipPercent))/100
    return resultado
}


function update(value_1,value_2, model){
    const {billAmount} = model
    const {tipPercent} = model
    const {tip} = model
    const {total} = model
    const new_Tip = calculated_tipPercent(value_1, value_2)
    const new_Total = (Number(value_1)+new_Tip)
    return{
        ...model,
        billAmount:Number(value_1).toFixed(2), tipPercent:Number(value_2).toFixed(2),
        tip: new_Tip.toFixed(2), total: new_Total.toFixed(2)
    }
}

module.exports = {
    update
}