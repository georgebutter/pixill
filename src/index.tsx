import * as React from 'react';
import './index.css'
import { render } from 'react-dom';
import { Stage, Layer } from 'react-konva';
import Canvas from './canvas';
import Menu from './menu';


const App: React.FC = () => {
  const [tool, setTool] = React.useState('Move')
  const [cellSize, setCellSize] = React.useState(10)
  const [rowCount, setRowCount] = React.useState(32)
  const [columnCount, setColumnCount] = React.useState(32)
  return (
    <main className={'flex flex-col'}>
      <Menu></Menu>
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
                tool={tool}
              />
            </Layer>
          </Stage>
        </div>
        <div className={'bg-gray-500 fixed inset-y-0 right-0 z-20'}>
          <ul className={``}>
            <li>
              <button
                className={'p-1'}
                onClick={() => {
                  setTool('Move')
                }}
              >
                Move
              </button>
            </li>
            <li>
              <button
                className={'p-1'}
                onClick={() => {
                  setTool('Draw')
                }}
              >
                Draw
              </button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}


render(<App />, document.getElementById('root'));
