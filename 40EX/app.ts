function make_album(artist:string,title:string,track?:number):object {

    const Album:any = {
        artist:artist, 
        title:title
        
    }
    if(track != undefined){
        Album.track
    };
    //Return A object
    return Album
}

const ALBUM1 = make_album("Sramad Sindhi","Munja Marooara")

const ALBUM2 = make_album("Atif Aslam","Allah Hu")


// With Track
const ALBUM3 = make_album("Nusrat Fateh Ali Khan","Kali Kali Zulfon Ke PHANDE na dalo",5)

console.log(ALBUM1)
console.log(ALBUM2)
console.log(ALBUM3)
