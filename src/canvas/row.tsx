import * as React from 'react';
import CanvasCell from './cell';

const CanvasRow: React.FC<Props> = ({
  row,
  columnCount,
  cellSize,
  tool,
  colour
}) => {
  return (
    <React.Fragment>
      {[...Array(columnCount)].map((_x, i) =>
        <CanvasCell
          key={`row-${row}-cell-${i}`}
          row={row}
          cell={i}
          cellSize={cellSize}
          tool={tool}
          colour={colour}
        />
      )}
    </React.Fragment>
  )
}

export interface Props {
  row: number;
  columnCount: number;
  cellSize: number;
  tool: string;
  colour: string;
}

export default CanvasRow;
