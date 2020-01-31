require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(x => {
	console.log(`Connected to database ${x.connections[0].name}`);
});

const celebrities = [
	{
		name: 'Taylor Swift',
		occupation: 'Singer',
		catchPhrase: 'People are going to judge you anyway, so you might as well do what you want.'
	},
	{
		name: 'Elisabeth Moss',
		occupation: 'Actress',
		catchPhrase: 'We are the story in print and we are writing the story ourselves.'
	},
	{
		name: 'Carrie Fisher',
		occupation: 'Actress',
		catchPhrase: 'Stay afraid, but do it anyway.'
	}
];

async function seedDB() {
	const count = await Celebrity.collection.countDocuments({});
	try {
		if (count !== 0) {
			await Celebrity.collection.drop().then(x => console.log('emptied database'));
		}
		await Celebrity.create(celebrities).then(data => console.log(`Seed database with ${data}`));
	} catch (error) {
		console.log(`Something went wrong: ${error}`);
	} finally {
		mongoose.disconnect();
		console.log('Disconnected from database');
	}
}

seedDB();
