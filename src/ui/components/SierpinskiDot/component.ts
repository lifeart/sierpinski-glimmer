import Component, { tracked } from '@glimmer/component';

const dotStyle = {
    'position': 'absolute',
    'background': '#61dafb',
    'font': 'normal 15px sans-serif',
    'text-align': 'center',
    'cursor': 'pointer'
};

export default class SierpinskiDot extends Component {
    @tracked private hover = false;
    private allStyles = '';
    private tagName = '';
    @tracked('args', 'hover')
    get text() {
        return this.hover ? '*' + this.args.text + '*' : this.args.text;
    }
    public didInsertElement() {
        const s = this.args.size * 1.3;
        const newStyle = {
            ...dotStyle,
            'top': (this.args.y) + 'px',
            'width': s + 'px',
            'height': s + 'px',
            'left': (this.args.x) + 'px',
            'border-radius': (s / 2) + 'px',
            'line-height': (s) + 'px',
        };
        this.allStyles =  Object.keys(newStyle).map((key) => {
            return `${key}:${newStyle[key]}`;
        }).join(';');
    }
    @tracked('args', 'hover')
    get style() {
        return this.allStyles + ';background:' + (this.hover ? '#ff0' : dotStyle.background);
    }
    enter() {
       this.hover = true;
    }
    leave() {
        this.hover = false;
    }
}
