```javascript
//Incorrect usage of $inc operator in update query
db.collection('myCollection').updateOne({"_id":ObjectId("someObjectId")},{$inc:{field:value}});
```