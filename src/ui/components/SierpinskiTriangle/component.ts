import Component, { tracked } from '@glimmer/component';

export default class SierpinskiTriangle extends Component {
    @tracked('args')
    get attrs() {
        let halfTarget = this.args.targetSize / 2;
        let { x, y } = this.args;
        let renderDot = this.args.s <= this.args.targetSize;
        if (renderDot) {
            return {
                dotX: x - halfTarget,
                dotY: y - halfTarget,
                renderDot
            };
        } else {
            let s = this.args.s / 2;
            let halfS = s / 2;
            
            let slowDown = true;
            if (slowDown) {
                let e = performance.now() + 0.8;
                while (performance.now() < e) {
                    // Artificially long execution time.
                }
            }

            return {
                s,
                renderDot,
                x1: x,
                x2: x - s,
                x3: x + s,
                y1: y - halfS,
                y2: y + halfS,
                y3: y + halfS
            };
        }
    }
}
