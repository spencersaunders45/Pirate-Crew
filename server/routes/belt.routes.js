const BeltController = require('../controller/belt.controller');

module.exports = function(app){
    app.post('/api/belt/new', BeltController.createEntry);
    app.get('/api/belt', BeltController.getAllEntries);
    app.get('/api/belt/:id', BeltController.getEntry);
    app.put('/api/belt/:id/edit', BeltController.updateEntry);
    app.delete('/api/belt/:id/delete', BeltController.deleteEntry);
}