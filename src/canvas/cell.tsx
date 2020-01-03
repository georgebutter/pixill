import * as React from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';

const CanvasCell: React.FC<Props> = ({ row, cell, cellSize, tool }) => {
  const [color, setColor] = React.useState('#fff');
  return (
    <Rect
      x={cell * cellSize}
      y={row * cellSize}
      width={cellSize}
      height={cellSize}
      fill={color}
      onClick={() => {
        if (tool === 'Draw') {
          setColor('#000')
        }
      }}
      onMouseOver={(e) => {
        if (tool === 'Draw' && e.evt.buttons === 1) {
          setColor('#000')
        } else if (tool === 'Draw' && e.evt.buttons === 2) {
          setColor('#fff')
        } else if (tool === 'Erase' && e.evt.buttons === 1) {
          setColor('#fff')
        }
      }}
    />
  )
}

export interface Props {
  row: number;
  cell: number;
  cellSize: number;
  tool: string;
}

export default CanvasCell
