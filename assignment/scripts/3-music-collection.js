console.log('***** Music Collection *****')
console.log('start First question')

let collection = []
function addToCollection(title, artist, yearPublished) {
    let music = {
        songTitle: title,
        songArtist: artist,
        songYearPublished: yearPublished
    }
    collection.push(music)
    return music;
}

console.log('adding to the collection array', addToCollection('dog1', 'cat1', 11))

console.log('2nd added', addToCollection('dog2', 'cat1', 12))

console.log('3rd added', addToCollection('dog3', 'cat3', 13))

console.log('4th added', addToCollection('dog4', 'cat4', 14))

console.log('5th added', addToCollection('dog5', 'cat5', 15))

console.log('6th added', addToCollection('dog6', 'cat6', 16))

console.log('collection array', collection);
console.log('End of First question')

console.log('Start ofSecond question')



function showCollection(array) {
    console.log(collection.length);
    for (i = 0; i < collection.length; i++) {
        console.log(array[i].songTitle, 'by', array[i].songArtist, 'published in', array[i].songYearPublished)
    }
}
showCollection(collection);

console.log(showCollection(collection));

console.log('End of second question');

console.log('Start of third question');

function findByArtist(artist) {              //input parameter should be a string
    let array = [];
    for (i = 0; i < collection.length; i++){
        if(artist === collection[i].songArtist){
            array.push(collection[i])
        }
        
    }
    console.log(array);
}
findByArtist('cat1');
console.log(findByArtist('cat13'));

