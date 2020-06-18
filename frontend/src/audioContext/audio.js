module.exports = class {
    constructor(audio, canvas, animation) {
        this.audio = audio;
        this.animation = animation;
        this.ctx = canvas.getContext('2d');
        this.fftSize = 128;
    }
    openPlay() {
        var self = this;
        var a = this.audio;

        //储存定时器
        var timer = null;

        //解析器
        var AudCtx = new AudioContext();
        var src = AudCtx.createMediaElementSource(a);
        var analyser = AudCtx.createAnalyser();

        src.connect(analyser);
        analyser.connect(AudCtx.destination);
        analyser.fftSize = this.fftSize;

        var bufferLength = analyser.frequencyBinCount;

        var dataArray = new Uint8Array(bufferLength);//8位无符号定长数组

        function changeTime() {
            timer = requestAnimationFrame(changeTime);
            analyser.getByteFrequencyData(dataArray);

            self.animation(dataArray, self.ctx);

        }

        a.addEventListener('play', () => {
            changeTime();
        })

        a.addEventListener('pause', () => {
            cancelAnimationFrame(timer);
        })
    }
}