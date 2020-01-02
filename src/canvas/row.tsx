import * as React from 'react';
import CanvasCell from './cell';

const CanvasRow: React.FC<Props> = ({ row, columnCount, cellSize, tool }) => {
  return (
    <React.Fragment>
      {[...Array(columnCount)].map((_x, i) =>
        <CanvasCell
          key={`row-${row}-cell-${i}`}
          row={row}
          cell={i}
          cellSize={cellSize}
          tool={tool}
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
}

export default CanvasRow;
