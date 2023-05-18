var thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

db.collection.find({
  _id: { $lt: ObjectId(Math.floor(thirtyDaysAgo.getTime() / 1000).toString(16) + "0000000000000000") }
});