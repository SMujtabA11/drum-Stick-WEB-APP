function playSound(x) {
    var audio;
    switch(x) {
        case 1:
            audio = new Audio("./audio/Kick-Drum.mp3");
            audio.play();
            break;
        case 2:
            audio = new Audio("./audio/Crash-Cymbal.mp3");
            audio.play();
            break;
        case 3:
            audio = new Audio("./audio/Floor-Tom.mp3");
            audio.play();
            break;
        case 4:
            audio = new Audio("./audio/Hi-Hat.mp3");
            audio.play();
            break;
        case 5:
            audio = new Audio("./audio/Rack-Tom.mp3");
            audio.play();
            break;
        case 6:
            audio = new Audio("./audio/Ride-Cymbal.mp3");
            audio.play();
            break;
        case 7:
            audio = new Audio("./audio/Snare-drum.mp3");
            audio.play();
            break;
        default:
            console.log("Invalid sound number");
            return;
    }
   
}