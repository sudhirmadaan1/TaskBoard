import bodyParser from 'body-parser';
import express from 'express';
import GraphqlHTTP from 'express-graphql';
import session from 'express-session';

const config = require('./config.js');
// const swaggerDocument = require('./swagger.json');
// import { publishGlobalEvents, subscribeGlobalEvents } from './utils/pub-sub';

const app = express();
// Setup bodyParsing middleware
app.use(bodyParser.json());

// app.use('/graphql', GraphqlHTTP({
// 	schema: Schema,
// 	pretty: true,
// 	graphiql: true
// }));

app.get('/', (req, res) => {
	res.send('Hello, I am up and running');
});

app.listen(config.PORT, () => {
	console.log(`server listen at ${config.PORT}`);
});

// db(`${config.MONGO.PROTOCOL}${config.MONGO.DOMAIN}${config.MONGO.PORT}${config.MONGO.BUCKET}`, function(err){
// 	if(err){
// 		console.log("Unable to connect to mongoDB....");
// 	}else{
// 		app.listen(config.PORT, () => {
// 			console.log(`server listen at ${config.PORT}`);
// 		});
// 	}
// });