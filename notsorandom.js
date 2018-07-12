function random(number){
    console.log(number * Math.random());

}
random(100);

function randomletter(word){
    const number = Math.random() * word.length;
    const feed = Math.floor(number);
    console.log( word.charAt(feed));

}
randomletter("new ye for the day");