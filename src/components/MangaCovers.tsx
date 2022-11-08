import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import { MangaEntry } from '../services/MangaService';

type PropTypes = { mangaEntries: MangaEntry[] };

const MangaCovers = ({ mangaEntries }: PropTypes) => {
  const Column = ({ index, style }: any) => {
    const { coverURL, title, id } = mangaEntries[index];
    console.log('dynamically loaded index:  ', index);
    return (
      <div className='p-1' key={index} data-index={index} style={style}>
        <img src={coverURL} alt={title} id={id} className='rounded-md' />
        <text>{title}</text>
      </div>
    );
  };
  return (
    <>
      <AutoSizer style={{ width: '100%' }}>
        {({ width }) => (
          <List
            height={170}
            width={width}
            itemCount={1000}
            layout='horizontal'
            itemSize={() => 100}
          >
            {Column as any}
          </List>
        )}
      </AutoSizer>
    </>
  );
};

export default MangaCovers;
