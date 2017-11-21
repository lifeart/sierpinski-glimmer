import Component, { tracked } from '@glimmer/component';

const containerStyle = {
    position: 'absolute',
    'transform-origin': '0 0',
    left: '50%',
    top: '50%',
    width: '10px',
    height: '10px',
    zoom: '.75',
};

const styleLine =  Object.keys(containerStyle).map((key) => {
    return `${key}:${containerStyle[key]}`;
}).join(';');

export default class SierpinskiGlimmer extends Component {
    public targetSize = 25;
    public start = 0;
    public intervalID = null;
    @tracked public seconds = 0;
    @tracked public elapsed = 0;
    @tracked public style = '';
    public x = 0;
    public y = 0;
    public s = 1000;
    public tick() {
        this.seconds = (this.seconds % 10 ) + 1;
    }

    public updateRender() {
        this.elapsed = new Date().getTime() - this.start;
        const t = (this.elapsed / 1000) % 10;
        const scale = 1 + (t > 5 ? 10 - t : t) / 10;
        const transform = 'scaleX(' + (scale / 2.1) + ') scaleY(0.7) translateZ(0.1px)';
        this.style = `${styleLine};transform:${transform}`;
    }

    public didInsertElement() {
        this.start = new Date().getTime();
        this.intervalID = setInterval(this.tick.bind(this), 1000);
        const update = ()  => {
            this.updateRender();
            requestAnimationFrame(update);
        };
        setTimeout(update);
    }
}
