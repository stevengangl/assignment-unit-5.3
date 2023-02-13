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
addToCollection('dog','cat', 'fox')
console.log('this is the collections array', collection)









