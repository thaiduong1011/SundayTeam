let song, fft;

function preload() {
    song = loadSound("https://lab.ma77os.com/audio-cloud/music/paradise_circus.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);

    //init button
    playButton = createButton('Play');
    playButton.position(windowWidth / 2, windowHeight - 100);
    playButton.size(100, 60)
    playButton.mousePressed(playMusic)

    //set up music
    fft = new p5.FFT();
    fft.setInput(song);

}

function draw() {
    background(200);

    let spectrum = fft.analyze();
    for (i = 0; i < spectrum.length; i++) {
        rectMode(CENTER);
        rect(i * 10, 200, 10, spectrum[i * 2])
    }
}

function playMusic() {
    if (song.isPlaying()) {
        song.stop();
    } else {
        song.play();
    }
}