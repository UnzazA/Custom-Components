import {Node, Rect, RectProps, Layout, Line} from '@motion-canvas/2d/lib/components';

export class Stop extends Rect {

  private readonly boxSize = 200;
  private readonly lineThickness = 10;

  public constructor(props?: RectProps) {
    super({
        ...props,
        layout: true,
        direction: "column",
//         rotation: 180
    });



    this.add(
      <Line
        points={[[this.boxSize/10,0],[-this.boxSize/10,0]]}
        lineWidth={this.lineThickness}
        stroke={'black'}
        alignSelf={"end"}/>
    )

        this.add(
        <Line
        points={[[0,0],[0,this.boxSize/5]]}
        lineWidth={this.lineThickness}
        stroke={'black'}
        alignSelf={"center"}/>

    );
  }
}
