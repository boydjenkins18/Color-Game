var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var ip=process.env.IP;


app.set('view engine','ejs');
app.use('/public',express.static(process.cwd()+'/public'));


app.get('/',function(req , res){

  res.render('pages/home');
});

app.listen(port,ip,function(){
  console.log('Server is listening on port '+port+'...');
});
