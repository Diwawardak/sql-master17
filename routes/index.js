const routes = require('express').Router();
const routeController = require('../controllers/connectionController');

routes.get('/', routeController.getIndex);
routes.get('/StaffMember', routeController.getStaffMember);
routes.post('/createStaffMember', routeController.postStaff);
routes.patch('/updateStaffMember', routeController.updateStaffMember);
routes.delete('/deleteStaffMember', routeController.deleteStaffMember);


module.exports = routes; 

