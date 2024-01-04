const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/InternshipRegistrationFormResponses", {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Connection Failed:", e.message);
});
