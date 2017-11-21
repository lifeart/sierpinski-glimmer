import Component, { tracked } from '@glimmer/component';

const dotStyle = {
    'position': 'absolute',
    'background': '#61dafb',
    'font': 'normal 15px sans-serif',
    'text-aglign': 'center',
    'cursor': 'pointer'
};

export default class SierpinskiDot extends Component {
    @tracked private hover = false;

    @tracked('args','hover')
    get text() {
        return this.hover ? '*' + this.args.text + '*' : this.args.text;
    }

    @tracked('args', 'hover')
    get style() {
        const s = this.args.size * 1.3;
        const newStyle = {
            ...dotStyle,
            'top': (this.args.y) + 'px',
            'width': s + 'px',
            'height': s + 'px',
            'left': (this.args.x) + 'px',
            'border-radius': (s / 2) + 'px',
            'lineHeight': (s) + 'px',
            'background': this.hover ? '#ff0' : dotStyle.background
        };
        return Object.keys(newStyle).map((key) => {
            return `${key}:${newStyle[key]}`;
        }).join(';');
    }
    enter() {
       this.hover = true;
    }
    leave() {
        this.hover = false;
    }
}
