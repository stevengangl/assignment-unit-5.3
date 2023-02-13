console.log('***** Music Collection *****')

let collection = []
function addToCollection(title, artist, yearPublished) {
    let music = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(music)
    return music;
}
addToCollection('dog', 'cat', 10)

console.log('adding to the collection array', addToCollection('dog1', 'cat1', 11))

console.log('2nd added', addToCollection('dog2', 'cat2', 12))

console.log('3rd added', addToCollection('dog3', 'cat3', 13))

console.log('4th added', addToCollection('dog4', 'cat4', 14))

console.log('5th added', addToCollection('dog5', 'cat5', 15))

console.log('6th added', addToCollection('dog6', 'cat6', 16))

console.log('collection array', collection);

