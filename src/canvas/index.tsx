import * as React from 'react';
import CanvasRow from './row'

const Canvas: React.FC<Props> = ({ columnCount, rowCount, cellSize, tool, colour }) => {
  return (
    <React.Fragment>
      {[...Array(rowCount)].map((_x, i) =>
        <CanvasRow
          key={`row-${i}`}
          row={i}
          columnCount={columnCount}
          cellSize={cellSize}
          tool={tool}
          colour={colour}
        />
      )}
    </React.Fragment>
  )
}

export interface Props {
  rowCount: number;
  columnCount: number;
  cellSize: number;
  tool: string;
  colour: string;
}

export default Canvas;
