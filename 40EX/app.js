function make_album(artist, title, track) {
    var Album = {
        artist: artist,
        title: title
    };
    if (track != undefined) {
        Album.track;
    }
    ;
    //Return A object
    return Album;
}
var ALBUM1 = make_album("Sramad Sindhi", "Munja Marooara");
var ALBUM2 = make_album("Atif Aslam", "Allah Hu");
// With Track
var ALBUM3 = make_album("Nusrat Fateh Ali Khan", "Kali Kali Zulfon Ke PHANDE na dalo", 5);
console.log(ALBUM1);
console.log(ALBUM2);
console.log(ALBUM3);
