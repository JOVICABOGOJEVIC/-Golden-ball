const data = require ('./data.json');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + "/public"))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index',{data : data})
})

app.get('/table',(req,res)=>{

    res.render('table',{data:data})
})


app.get('/single/:id',(req,res) => {
    let id = req.params.id;
    let wine = data.filter(el=>{
        return el.id == id;
    })[0];
    wine.visited++;
    fs.writeFile(__dirname+"/data.json",JSON.stringify(data),(err)=>{
       if(err) throw err;
       console.log(wine);
       res.render('single',{writer : wine});
    })
})
    
app.listen(3000,() => {
    console.log('listening to port 3000');
})