const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Unit converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model // const counter = model.counter
    return[{'leftValue': leftValue, 'leftUnit': leftUnit, 'rightValue': rightValue, 'rightUnit': rightUnit}]
}


function sourceInput(model){
    const {source} = model
    message = 'left temperature is your source?'
    return inquirer.prompt([ 
        { 
            name: 'source',
            type: 'input',
            message: message,
            default: 'Y/n'
            
        }
    ])
}

function inputForm(Source,model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    const message_Temperature = 'Temperature value to convert?'
    const message_from = 'from?'
    const message_To = 'To?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    if (Source.toLowerCase() == 'y'){
        return inquirer.prompt([{
                name: 'leftValue',
                type: 'input',
                message: message_Temperature,
                default: leftValue
            },
            {
                name: 'leftUnit',
                type: 'list',
                message: message_from,
                default: leftUnit,
                choices: choices
            },
            {
                name: 'rightUnit',
                type: 'list',
                message: message_To,
                default: rightUnit,
                choices: choices
            }
        
        ])
    }
    else if (Source.toLowerCase() == 'n'){
        return inquirer.prompt([{
                name: 'rightValue',
                type: 'input',
                message: message_Temperature,
                default: rightValue
            },
            {
                name: 'rightUnit',
                type: 'list',
                message: message_from,
                default: rightUnit,
                choices: choices
            },
            {
                name: 'leftUnit',
                type: 'list',
                message: message_To,
                default: leftUnit,
                choices: choices
            }

        ])
    }
        
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
    inputForm,
    sourceInput
}