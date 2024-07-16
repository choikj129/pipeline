let express = require('express')
let app = express()
let logger = require("morgan")
let axios = require("axios")


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger("dev"))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(13000, function(){
    console.log(`
    _ _     _     _ _ _ _     _ _ _ _     _ _ _ _  
   |   \\   | |   /  _ _  \\   |  _ _  \\   |  _ _ _|
   | |\\ \\  | |  /  /   \\  \\  | |   \\  \\  | |_ _ _
   | | \\ \\ | | |  |     |  | | |    |  | |  _ _ _|
   | |  \\ \\| |  \\  \\_ _/  /  | |_ _/  /  | |_ _ _
   |_|   \\_ _|   \\_ _ _ _/   |_ _ _ _/   |_ _ _ _|

   `)
})