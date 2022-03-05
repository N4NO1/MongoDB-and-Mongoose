require('dotenv').config();
const mongoose = require('mongoose')
const { schema } = mongoose
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
})

const Person = mongoose.model('Person', personSchema)



const createAndSavePerson = (done) => {
    var nathanRouse = new Person({ name: "Nathan Rouse", age: 20, favoriteFoods: ["Sausages", "Chips", "Mash"] })

    nathanRouse.save(function (err, data) {
        if (err) return console.error(err)
        done(null,data)
    })
};



const createManyPeople = (arrayOfPeople, done) => {
    arrayOfPeople = [
        { name: "Nathan Rouse", age: 20, favoriteFoods: ["Sausages", "Chips", "Mash"] },
        { name: "Sandra Rouse", age: 65, favoriteFoods: ["Sausages", "Chips", "Mash"] },
        { name: "Philip Rouse", age: 67, favoriteFoods: ["Sausages", "Chips", "Mash"] },
    ]
    Person.insertMany(arrayOfPeople, function (err, people) {
        if (err) return console.log(err)
        done(null, people)
    })
    }



const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
