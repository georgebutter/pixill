import * as React from 'react';

const Palette: React.FC<Props> = ({ setColour, palette }) => (
  <div className={'bg-gray-500 fixed inset-x-0 bottom-0 z-20'}>
    <div className={'flex'}>
      {palette.map((colour) => (
        <button
          key={colour}
          className={'h-10 w-10'}
          onClick={() => setColour(colour)}
          style={{
            backgroundColor: `#${colour}`
          }}
        />
      ))}
    </div>
  </div>
)


export interface Props {
  setColour: React.Dispatch<React.SetStateAction<string>>;
  palette: Array<string>;
}

export default Palette;
