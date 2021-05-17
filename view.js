const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            ' Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {tipPercent} = model
    const {tip} = model
    const {total} = model // const counter = model.counter
    return[{'billAmount': billAmount, 'tip(%)': tipPercent, 'tip': tip, 'total': total}]
}

function inputForm(model){
    const{billAmount} = model
    const{tipPercent} = model
    return inquirer.prompt([{
        name: 'billAmount',
        type: 'input',
        message: 'Bill Amount?',
        default: billAmount,
        validate: function(value){
            if(value >= 0 ){
                return true
            } 
            else{
                return 'incorrect number, the number must be greater than 0'
                }
            }
        },{
            name: 'tipPercent',
            type: 'input',
            message: 'Tip(%)?',
            default: tipPercent,
            validate: function(value){

                if (value >= 0){

                    return true
                }
                else{
                    return 'incorrect number, percent must be bigger than 0'
                }
            } 
        }
    ])
}


//get actual console view
function view(model){
    return{
        title: getTitle(),
        table: getTable(model)
        }
}

module.exports = {
    view,
    inputForm
}