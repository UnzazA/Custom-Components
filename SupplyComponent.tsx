import {Circle} from '@motion-canvas/2d/lib/components';

export class Supply extends Circle {
    public constructor(props?: CircleProps) {
        super({
            ...props,
        })

        this.add(
            <Circle
                size={80}
                stroke={"black"}
                lineWidth={10}
                fill={"ffffffff"}
                >
                    <Circle size={30} fill={"black"}/>
            </Circle>
        )
    }
}
