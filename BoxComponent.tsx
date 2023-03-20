import {Node, Rect, Line, Layout, LayoutProps} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {Arrow} from './ArrowComponent';
import {Stop} from './StopComponent';
import {colorSignal, initial, signal} from '@motion-canvas/2d/lib/decorators';
import {range, debug} from "@motion-canvas/core/lib/utils";
import {Vector2} from '@motion-canvas/core/lib/types';
import {tween, map, easeOutQuart} from '@motion-canvas/core/lib/tweening';
import { Color } from "@motion-canvas/core/lib/types";

export interface BoxProps extends LayoutProps {
  numberOfLines?: SignalValue<number>;
  numberOfPositions?: SignalValue<number>;
}

export class Box extends Layout {

  @initial(2)
  @signal()
  public declare readonly numberOfLines: SimpleSignal<number, this>;

  @initial(2)
  @signal()
  public declare readonly numberOfPositions: SimpleSignal<number, this>;

  private readonly boxSize = 200;
  private readonly lineThickness = 10;
  private readonly layoutRef = createRef<Layout>();
  private readonly supRef = createRef<Stop>();
  private readonly arrowRef = createRef<Arrow>();

  public constructor(props?: BoxProps) {

    super({
      ...props,
      layout: true,
    });

    this.add(
      <>
        <Rect
          fill={"fff0"}
          size={this.boxSize}
          lineWidth={this.lineThickness}
          stroke={"black"}
          >
            <Arrow
              ref={this.arrowRef}
              points={[[0,this.boxSize/2],[0,-this.boxSize/2]]}
              lineWidth={this.lineThickness}
              arrowColor={"black"}
              endArrow={true}
              />
          </Rect>
        <Rect
          size={this.boxSize}
          fill={"ffffff00"}
          stroke={'black'}
          lineWidth={this.lineThickness}
          justifyContent={"center"}
          direction={"column"}
          >
          <Layout
            justifyContent={"center"}
            >
            <Stop rotation={180}/>
          </Layout>
          <Layout grow={2}/>
          <Layout
            justifyContent={"center"}
            >
            <Stop ref={this.supRef}/>
          </Layout>
        </Rect>
      </>
    )
    // debug("box is darwn")

//     this.add(
//       <Layout
//         layout={true}
//         spawner={()=>
//           range(this.numberOfPositions()).map(() =>
//             <Rect
//               size={this.boxSize}
//               fill={"ffffff00"}
//               stroke={'black'}
//               lineWidth={this.lineThickness}>
//                 <Arrow />
//             </Rect>
//           )
//         }/>
//     )
//   }

  }

//   public *colorInletArrow(color: Color, duration: number) {
//     yield* this.arrowRef().stroke(color, duration);
//   }

  public* colorInletArrow(color: Color, duration: number) {
    yield* this.arrowRef().stroke(color, duration);
  }
}
