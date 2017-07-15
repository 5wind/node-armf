/**
 * Created by hp on 2017/6/2.
 */
var express=require('express');
var db=require('./fengzhuang.js');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/register',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    var data=req.body;
    console.log(data);

    db.insert('student',data,function(err,result){
        if(err){
            console.log(err)
        };



        res.send(result);
        console.log(result);

    })




});
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/login',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    var data=req.body;
    console.log(data);
    db.find('student',data,function(err,result){
        if(err) {
            console.log(err)
        };
        res.send(result);
        console.log(result);

    })
});
app.use('/message',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    var data=req.body;
    db.insert('message',data,function(err,result){
        if(err) {
            console.log(err)
        };
        res.send(result.ops);
        console.log(result.ops);
    })
});
app.use('/modify',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    var data=req.body;
    var dataone=req.body;
    console.log(data);
   /* console.log(dataone);*/
    db.updateMany('message',
        {name:dataone.two,number:dataone.one,classroom:dataone.three},
        {$set:{name:data.nametwo,number:data.numberone,classroom:data.classroomone}},
        function(err,result){

        if(err) {
            console.log(err)
        };
        res.send(result);
        console.log(result);


    })





});
app.use('/delete',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    var data=req.body;
    console.log(data);
    db.deleteMany('message',data,function(err,result){

        if(err){
            console.log(err)
        };
        res.send(result);
        console.log(result);


    })






});
app.use('/alist',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");

    db.find('message',{},function(err,result){
        if(err){
            console.log(err);
        }
        res.send(result);

    });
});
app.use('/search',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    var data=req.body;
    console.log(data);
    db.find('message',data,function(err,result){

        if(err){
            console.log(err)
        };
        res.send(result);
        console.log(result);


    })






});


app.listen(3000);