const express = require("express") 
const app = express();


app.set('view engine','ejs')
app.use(express.static('public/css')) // for external css


app.get('/', (req,res) => {
    res.render('home'); 
})


const PORT = 4100
app.listen(PORT, ()=> {
    console.log("Server running successfully at port " + PORT);
}) 






