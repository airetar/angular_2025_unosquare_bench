interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}
const song = 'New Song';
const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

// const { song: anotherSong, songDuration: duration, details: { author } } = audioPlayer; (Another way to do destructuration for author)

/*
console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author); 
*/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [,,trunks] = dbz; Imprimirá Trunks
const [,,,trunks = 'Not found'] = dbz; // Imprimirá not found si la posición que buscamos es undefined

console.log('Personaje: ', trunks);

export {};