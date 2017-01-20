const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const User = db.define('user', {
 //table schema of attributes
 name: Sequelize.STRING,
 pictureUrl: Sequelize.STRING
}, {
	//methods -- class, instance, hooks
})

User.sync({force: true})
	.then(() => {
		const person = User.build({
			name: "Raina",
			pictureUrl: "http://fillmurray.com/100/100"
		})

		return Promise.all([
			person.save(),
			User.create({
			name: "Meredith",
			pictureUrl: "http://fillmurray.com/101/101"
		})
			])
	})
	.then((arrayOfCreatedPeoples) => {
		return User.findAll({ where: {name: 'Raina'}})
		// console.log('done ', arrayOfCreatedPeoples[0].name)
	})
	.then((allUsers)=> {
		console.log('HEYAYSDFSADF ', allUsers)
	})
