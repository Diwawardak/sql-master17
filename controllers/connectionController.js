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
    functions.createStaffMember();
    res.send('created')
}

exports.deleteStaffMemeber = async (req, res) => {
    let {ID} = req.query;
    functions.deleteDiwa(ID);
    res.send('diwa has been deleted')
}