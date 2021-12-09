const { db } = require('../database.js');
const data = require('../api/data.json')

const HAMSTERS = 'hamsters'


populate();

// Fill the collection with test data
async function populate() {

    data.forEach(object => {

        let newObject = {
            ...object,

        }
        db.collection(HAMSTERS).add(newObject)
    })

    console.log('Hamsters reborn')
}