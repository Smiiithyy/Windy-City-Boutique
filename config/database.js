const mongoose = require('mongoose')

//Auth line

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//   });

mongoose.connect('mongodb://localhost:27017/Sloane-Store', {
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongodDB at ${db.host}:${db.port}`)
})