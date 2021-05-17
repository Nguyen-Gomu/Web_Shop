const Connect = () => {
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/shops', {useNewUrlParser: true});
    const db = mongoose.connection;
    
    db.on('error', (err) => {
        console.log(err);
    });
    
    db.once('open', () => {
        console.log('Database connection successfully!');
    });
}

module.exports = Connect;