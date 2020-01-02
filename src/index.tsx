import * as React from 'react';
import './index.css'
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

const ColouredRect: React.FC = () => {
  const [color, setColor] = React.useState(Konva.Util.getRandomColor());
  return (
    <Rect
      x={20}
      y={20}
      width={50}
      height={50}
      fill={color}
      onClick={() => setColor(Konva.Util.getRandomColor())}
    />
  )
}

const App: React.FC = () => (
  <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
      <Text text="Click on the square" />
      <ColouredRect />
    </Layer>
  </Stage>
)

render(<App />, document.getElementById('root'));
