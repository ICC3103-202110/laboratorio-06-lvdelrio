const {getTitle} = require('./view');
const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')
//impure
async function app(state, update, view){
    while(true){
    const {model, currentView} = state
    const {title, table} = currentView
    // I/O
    
    console.clear()
    console.log(title)
    printTable(table)
    //FORM (ask)
    const value = await inputForm(model)
    const updateModel = update(value['billAmount'],value['tipPercent'], model)
    state = {
        ...state,
        model: updateModel,
        currentView: view(updateModel)
        }

    }
    
}

module.exports = {app}