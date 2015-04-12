promiseland-pg
==============

a promising connection object and storage module

connect:
========

```
var Con = require "promiseland-pg";
  
var con = new Con("postgres://postgres:pwd@localhost/mydb");
```

query:
======

```
console.log(*con.query("select * from mytable"));
```

reading table definition:
=========================

```
var myTableDescription = *con.tableDescription({name: "mytable", schema: "myschema"}); // schema is optional

var myTable = myTableDescription.table;   // a node-sql object describing the table
var indexes = myTableDescription.indexes; // array of indexes
var pk = myTableDescription.pk;           // the primary keyk
```

see  [node-sql](https://github.com/brianc/node-sql) for details on the table description objects.  


creating/modifying a table without desroying existing data:
===========================================================

this is one of the advanced and very convenient features. you can provide a node-sql table object to create.  
before the table will be created the db is scanned for a existing object of the same name.  
if a existing table is found the existing data will be transformed to the new description.  
(please only use this feature with productive data when you have a backup)  

```
  var sql = con.sql;

  var myTable = sql.define({
    name: 'myTable',
    schema: "public", // optional
    columns: [{
      name: 'id',
      dataType: "integer",
      primaryKey: true
    }, {
      name: 'someval',
      dataType: 'char(30)'
    }, {
      name: 'someotherval',
      dataType: 'varchar'
    }]
  });

  *con.createTable({
    table: myTable,
    indexes: []     // optional
  });
```

promiseland storage:
====================

Now to the most advanced feature. A promiseland savable storage module is provided. See [promiseland savable](https://github.com/soliton4/promiseland/wiki/savable) for details.  

a complete promiseland module:
```
<{ name: "myModule" }>

var Con = require "promiseland-pg";
var con = new Con("postgres://postgres:pwd@localhost/mydb");
  
promiseland.classSystem.setStorageEngine(con.storageHandler());

class type savable MyClass {
  constructor: (var pk){
    
  },
  a: 1,
  var meta { type: "int" } b: 2,
  var c: "some default data",
  y: "other default data"
};
  
MyClass instance1 = *new MyClass("yy"); // load data with pk "yy"
  
console.log(instance1.c);
  
instance1.c = "something else";
instance1.b = 4;
  
*instance1.save();
```
