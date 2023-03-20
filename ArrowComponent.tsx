import {Line, LineProps} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {colorSignal, initial, signal} from '@motion-canvas/2d/lib/decorators';
import {
  Color,
  ColorSignal,
  PossibleColor,
} from '@motion-canvas/core/lib/types/Color';

export interface ArrowProps extends LineProps {
  arrowColor?: SignalValue<PossibleColor>;
}

export class Arrow extends Line {

  private readonly boxSize = 200;
  private readonly lineThickness = 10;

  @initial("black")
  @colorSignal()
  public declare readonly arrowColor: ColorSignal<this>;

  public constructor(props?: LineProps) {
    super({
      layout: false,
      ...props,
    });

    this.stroke = this.arrowColor;

    this.add(
      <Line
              points={[[0,-this.boxSize/2+this.lineThickness],
                      [-this.boxSize/12,-this.boxSize/4],
                      [this.boxSize/12,-this.boxSize/4]]}
              stroke={this.arrowColor}
              fill={this.arrowColor}
              lineWidth={this.lineThickness}
              closed={true}
              layout={false}
              endOffset={0}
              />
    )
  }


  //to empty default arrows and replace with our own
  private override drawArrow() {

  };

}
