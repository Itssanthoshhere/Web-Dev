console.log("Script.js is initializing...");

async function getSongs() {
    let a = await fetch("http://10.12.61.14:3000/songs/");
    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a");

    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }

    return songs
}

async function main() {
    // Get the list of all songs
    let songs = await getSongs();
    console.log(songs);

    // Play the first song
    var audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(duration);
        // The duration variable now holds the duration (in seconds) of the audio clip
    });
}

main();