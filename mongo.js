var start = new Date(); 
db.alunosmat.find(); 
var end = new Date(); 
print("Insert time (ms): " + (end - start));

var start = new Date(); 
db.alunosmat.find({$and: [{sex:'F'}, {Mjob: 'at_home'}]});
var end = new Date(); 
print("Insert time (ms): " + (end - start));

var start = new Date(); 
db.alunosmat.insertOne({sex:'F', G1:5,G2:5,G3:5}); 
var end = new Date(); 
print("Insert time (ms): " + (end - start));

var start = new Date(); 
db.alunosmat.insertMany([{sex:'M',age: 21,guardian: 'father',paid: 'yes', G1:5,G2:5,G3:5},{sex:'F',age: 19,guardian: 'mother',paid: 'no', G1:5,G2:5,G3:5},{sex:'M',age: 30,guardian: 'mother',paid: 'yes', G1:5,G2:5,G3:5}]); 
var end = new Date(); 
print("Insert time (ms): " + (end - start));

var start = new Date(); 
db.alunosmat.deleteMany({G1:5,G2:5,G3:5}); 
var end = new Date(); 
print("Insert time (ms): " + (end - start));

var start = new Date(); 
db.alunosmat.updateMany({sex:'F'},{$set:{G1:5,G2:5,G3:5}}); 
var end = new Date(); 
print("Insert time (ms): " + (end - start));