import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import { MangaEntry } from '../services/MangaService';

type PropTypes = { mangaEntries: MangaEntry[]; className?: string | undefined };

const MangaCovers = ({ mangaEntries, className = '' }: PropTypes) => {
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
    // TODO: figure out why w-full does not work for className
    <AutoSizer className={'flex-1 ' + className} style={{ width: '100%' }}>
      {({ width }) => (
        <List
          height={170}
          width={width}
          itemCount={mangaEntries.length}
          layout='horizontal'
          itemSize={() => 100}
        >
          {Column as any}
        </List>
      )}
    </AutoSizer>
  );
};

export default MangaCovers;
