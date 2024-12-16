console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "AisayKaisay-Hasan Raheem", filePath: "1.mp3", coverPath: "covers/Aisay Kaisay - Hasan Raheem.jpg" },
    { songName: "Attention-Charlie Puth", filePath: "2.mp3", coverPath: "covers/Attention - Charlie Puth.jpg" },
    { songName: "Bikhra-Abdul Hannan", filePath: "3.mp3", coverPath: "covers/Bikhra - Abdul Hannan.jpg" },
    { songName: "Call Out My Name-TheWeeknd", filePath: "5.mp3", coverPath: "covers/Call Out My Name - The Weeknd.jpg" },
    { songName: "Harleys In Hawaii-Katy Perry", filePath: "6.mp3", coverPath: "covers/Harleys In Hawaii - Katy Perry.jpg" },
    { songName: "Heat Waves-Glass Animals", filePath: "7.mp3", coverPath: "covers/Heat Waves - Glass Animals.jpg" },
    { songName: "Hope-XXXTENTACION", filePath: "8.mp3", coverPath: "covers/Hope -XXXTENTACION.jpg" },
    { songName: "JOONA-Hasan Raheem", filePath: "9.mp3", coverPath: "covers/JOONA -Hasan Raheem.jpg" },
    { songName: "Afsanay-Young Stunners", filePath: "11.mp3", coverPath: "covers/Afsanay-Young Stunners.jpg" },
    { songName: "Akhiyaan - Mitraz", filePath: "14.mp3", coverPath: "covers/Akhiyaan - Mitraz.jpg" },
    { songName: "Blow Your Mind-Dua Lipa", filePath: "21.mp3", coverPath: "covers/Blow Your Mind-Dua Lipa.jpg" },
    { songName: "Burning Down - EYK", filePath: "22.mp3", coverPath: "covers/Burning Down-Everyone You Know.jpg" },
    { songName: "Closer-The Chainsmokers", filePath: "24.mp3", coverPath: "covers/Closer-The Chainsmokers.jpg" },
    { songName: "Copines-Aya Nakamura", filePath: "25.mp3", coverPath: "covers/Copines-Aya Nakamura.jpg" },
    { songName: "Die For You-TheWeeknd", filePath: "28.mp3", coverPath: "covers/Die For You-TheWeeknd.jpg" },
    { songName: "Dont Let Me Down-Chainsmokers", filePath: "30.mp3", coverPath: "covers/Don't Let Me Down-The Chainsmokers.jpg" },
    { songName: "Don't Mind-Young Stunners", filePath: "31.mp3", coverPath: "covers/Don't Mind-Young Stunners.jpg" },
    { songName: "Excuses-Ap Dhillon", filePath: "33.mp3", coverPath: "covers/Excuses-Ap Dhillon.jpg" },
    { songName: "Goosebumps-Travis ", filePath: "35.mp3", coverPath: "covers/Goosebumps-Travis Scott.jpg" },
    { songName: "Hymn For - Coldplay", filePath: "39.mp3", coverPath: "covers/Hymn For The Weekend-Coldplay.jpg" },
    { songName: "In the Dark - Swae", filePath: "40.mp3", coverPath: "covers/In the Dark-Swae Lee.jpg" },
    { songName: "Let Me Kiss You - 1D", filePath: "42.mp3", coverPath: "covers/Kiss You-1D.jpg" },
    { songName: "Levitating-Dua Lipa", filePath: "45.mp3", coverPath: "covers/Levitating-Dua Lipa.jpg" },
    { songName: "Lights Down -MAX", filePath: "46.mp3", coverPath: "covers/Lights Down Low-MAX.jpg" },
    { songName: "Love Nwantiti-CKay", filePath: "47.mp3", coverPath: "covers/Love Nwantiti-CKay.jpg" },
    { songName: "Lovely - Billie Eilish,Khalid", filePath: "48.mp3", coverPath: "covers/Lovely-Billie Eilish.jpg" },
    { songName: "Mystery of Love-Sufjan Stevens", filePath: "54.mp3", coverPath: "covers/Mystery of Love-Sufjan Stevens.jpg" },
    { songName: "No Lie -Dua Lipa,Sean Paul", filePath: "55.mp3", coverPath: "covers/No Lie-Dua Lipa.jpg" },
    { songName: "Peaky Blinder-Otnicka", filePath: "57.mp3", coverPath: "covers/Peaky Blinder-Otnicka.jpg" },
    { songName: "Piche Hut - Hassan Raheem", filePath: "58.mp3", coverPath: "covers/Piche Hut - Hassan Raheem.jpg" },
    { songName: "Right Round - Rida", filePath: "59.mp3", coverPath: "covers/Right Round - Flo Rida.jpg" },
    { songName: "Smile - Juice WRLD", filePath: "61.mp3", coverPath: "covers/Smile-Juice WRLD.jpg" },
    { songName: "Sorry - Justin Bieber", filePath: "62.mp3", coverPath: "covers/Sorry-Justin Bieber.jpg" },
    { songName: "Takeaway-Smokers", filePath: "65.mp3", coverPath: "covers/Takeaway-The Chainsmokers.jpg" },
    { songName: "We Don't Talk-Puth", filePath: "68.mp3", coverPath: "covers/We Don't Talk Anymore - Charlie Puth.jpg" },
    { songName: "Do You Mean-Justin ", filePath: "69.mp3", coverPath: "covers/What Do You Mean-Justin .jpg" },
    
]
 //Dynamically playlist setup
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause control
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})
//jump at any point of song
ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})
//each song has its own play and pause button
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
//Next
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 36) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
//previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})