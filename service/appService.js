
const employee = require('../modle/employee');

function appGetService(){

    return "veeraPand";
}


async function appGetServiceDataBase(){
    const data = await employee.findAll();
    console.log("List", data);
    return data;
}




module.exports = {appGetService, appGetServiceDataBase};