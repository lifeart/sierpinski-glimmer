import Component, { tracked } from '@glimmer/component';

export default class SierpinskiTriangle extends Component {
    @tracked('args')
    get attrs() {
        let halfTarget = this.args.targetSize / 2;
        let x =  this.args.x - halfTarget;
        let y =  this.args.y - halfTarget;
        let s =  this.args.s / 2;
        let result =  {
            dotX: x - halfTarget,
            dotY: y - halfTarget,
            s,
            size: this.args.targetSize,
            renderDot: this.args.s <= this.args.targetSize,
            x1: x,
            x2: x - s,
            x3: x + s,
            y1: y - (s / 2),
            y2: y + (s / 2),
            y3: y + (s / 2)
        };
        return result;
    }
}
