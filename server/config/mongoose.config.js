const mongoose = require("mongoose");
const db_name = 'examdb';


//mongoose connection
mongoose.connect(`mongodb+srv://root:root@cluster0.ms1glhc.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

    