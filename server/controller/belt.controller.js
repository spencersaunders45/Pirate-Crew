const Belt = require("../model/belt.model")

// creates a new entry
module.exports.createEntry = (req, res) => {
    const { name, url, chests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand } = req.body;
    Belt.create({
        name,
        url,
        chests,
        catchPhrase,
        crewPosition,
        pegLeg,
        eyePatch,
        hookHand
    })
        .then(entry => res.json(entry))
        .catch(err => res.status(400).json(err));
}

//shows all entrys on the page
module.exports.getAllEntries = (req, res) => {
    Belt.find({})
        .then(entries => res.json(entries))
        .catch(err => res.json(err))
}

//shows details of a entry
module.exports.getEntry = (req, res) => {
    Belt.findOne({_id:req.params.id})
        .then(entry => res.json(entry))
        .catch(err => res.json(err))
}

//updates a entry
module.exports.updateEntry = (req, res) => {
    Belt.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedEntry => res.json(updatedEntry))
        .catch(err => res.json(err))
}

//deletes a entry
module.exports.deleteEntry = (req, res) => {
    Belt.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}