
import mongodb from 'mongodb';

let mongoClient = new mongodb.MongoClient('mongodb://localhost:27017/', {
	useUnifiedTopology: true
});

mongoClient.connect(async function(error, mongo) {
	if (!error) {
		let db = mongo.db('test');
		let coll = db.collection('users');
		
		let res = await coll.find().toArray();
		console.log(res);
	} else {
		console.error(err);
	}
});