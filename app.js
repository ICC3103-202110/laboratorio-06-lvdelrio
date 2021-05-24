const {getTitle} = require('./view');
const {inputForm,sourceInput} = require('./view')
const {printTable} = require('console-table-printer')
//impure
async function app(state, update, view){
    while(true){
    const {model, currentView} = state
    const {title, table} = currentView
    // I/O
    
    //console.clear()
    console.log(title)
    printTable(table)
    //FORM (ask)
    const source = await sourceInput(model)
    const choice = await inputForm(source['source'],model)

    if (source['source'].toLowerCase()  === 'y'){
        const updatedModel = update(source['source'],choice['leftValue'], choice['leftUnit'],choice['rightUnit'], model)
        state = {
            ...state, 
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
    else if (source['source'].toLowerCase()  === 'n'){
        const updatedModel = update(source['source'],choice['rightValue'], choice['rightUnit'],choice['leftUnit'], model)
        state = {
            ...state, 
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }

    }
    
}

module.exports = {app}