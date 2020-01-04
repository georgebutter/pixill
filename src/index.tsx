import * as React from 'react';
import './index.css'
import { render } from 'react-dom';
import { Stage, Layer } from 'react-konva';
import Canvas from './canvas';
import Menu from './menu';
import Toolbar from './toolbar';
import Palette from './palette';

const App: React.FC = () => {
  const [tool, setTool] = React.useState('Move')
  const [cellSize, setCellSize] = React.useState(10)
  const [rowCount, setRowCount] = React.useState(32)
  const [columnCount, setColumnCount] = React.useState(32)
  const [palette, setPalette] = React.useState(['0D2B45', '203C56', '544E68', '8D697A', 'D08159', 'FFAA5E', 'FFD4A3', 'FFECD6'])
  const [colour, setColour] = React.useState(palette[palette.length - 1])
  return (
    <main className={'flex flex-col'}>
      <Menu></Menu>
      <Toolbar
        setTool={setTool}
        setCellSize={setCellSize}
      />
      <Palette
        palette={palette}
        setColour={setColour}
      />
      <div className={'flex-1 bg-blue-200'}>
        <div>
          <Stage
            className={`
              ${tool === 'Move' ? 'cursor-move' : ''}
              ${tool === 'Draw' ? 'crosshair' : ''}
            `}
            width={window.innerWidth}
            height={window.innerHeight}
            draggable={tool === 'Move'}
          >
            <Layer
              x={(window.innerWidth / 2) - ((rowCount * cellSize) / 2)}
              y={(window.innerHeight / 2) - ((columnCount * cellSize) / 2)}
            >
              <Canvas
                columnCount={columnCount}
                rowCount={rowCount}
                cellSize={cellSize}
                colour={colour}
                tool={tool}
              />
            </Layer>
          </Stage>
        </div>
      </div>
    </main>
  )
}


render(<App />, document.getElementById('root'));
