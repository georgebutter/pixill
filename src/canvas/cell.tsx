import * as React from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';

const CanvasCell: React.FC<Props> = ({ row, cell, cellSize, tool, colour }) => {
  const [cellColour, setCellColour] = React.useState('#fff');
  return (
    <Rect
      x={cell * cellSize}
      y={row * cellSize}
      width={cellSize}
      height={cellSize}
      fill={cellColour}
      onClick={() => {
        if (tool === 'Draw') {
          setCellColour(`#${colour}`)
        } else if (tool === 'Erase') {
          setCellColour('#fff')
        }
      }}
      onMouseOver={(e) => {
        if (tool === 'Draw' && e.evt.buttons === 1) {
          setCellColour(`#${colour}`)
        } else if (tool === 'Draw' && e.evt.buttons === 2) {
          setCellColour('#fff')
        } else if (tool === 'Erase' && e.evt.buttons === 1) {
          setCellColour('#fff')
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
  colour: string;
}

export default CanvasCell
