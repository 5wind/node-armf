/**
 * Created by hp on 2017/6/5.
 */
var mysql = require('mysql');

exports.createConn = function(options){
    var client = mysql.createConnection(options);
    return client;
};

exports.getUsers = function (client,callback){
    var selectstatement = 'select * from message';
    client.query(selectstatement,function(errs,rows,fields){
        if(errs){
            console.log(111222333)
            callback(errs);
        }
        if(rows){
            console.log(112233)
            //console.log(rows);
            callback(rows);
        }
    })
};
exports.end=function(client){
    client.end(function(err){
        if(err)  return;
    });
};