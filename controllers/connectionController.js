const functions = require('../lib/connection');

exports.getIndex = async (req, res) => {
    let values = await functions.SelectAllStaff(); 
    let display = values.recordset;
    console.table(display);
    res.send(display); 
}

exports.getStaffMember = async (req, res) => {
    let {ID} = req.query;
    let values = await functions.SelectStaffMember(ID);
    let display = values.recordsets;
    console.log(display);
    res.send(display);
}

exports.postStaff = async (req, res) => {
    // let { all of the values } = req.query 
    let {ID, Name, Role, Location, Salary, Commission} = req.query;
    functions.createStaffMember(ID, Name, Role, Location, Salary, Commission);
    res.send('Employee created.')
}

exports.updateStaffMember = async (req, res) => {
    functions.updateStaffMember();
    res.send('staff member updated')
}

exports.deleteStaffMember = async (req, res) => {
    let {ID} = req.query;
    functions.deleteDiwa(ID);
    res.send('diwa has been deleted')
}