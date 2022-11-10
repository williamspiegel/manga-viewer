import { Link } from '@tanstack/react-location';
import { useDispatch } from 'react-redux';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import { setMangaEntry } from '../containers/mangaDetail/mangaDetailSlice';
import { MangaEntry } from '../services/MangaService';

type PropTypes = { mangaEntries: MangaEntry[]; className?: string | undefined };

const MangaCovers = ({ mangaEntries, className = '' }: PropTypes) => {
  const dispatch = useDispatch();
  const Column = ({ index, style }: { index: number; style: Object }) => {
    const { coverURL, title, id, description, author } = mangaEntries[index];

    return (
      <Link
        to='/mangaDetail'
        onClick={() => {
          dispatch(setMangaEntry({ coverURL, title, id, description, author }));
        }}
      >
        <div className='p-1' key={index} data-index={index} style={style}>
          <img src={coverURL} alt={title} id={id} className='rounded-md' />
          <text>{title}</text>
        </div>
      </Link>
    );
  };
  return (
    // TODO: figure out why w-full does not work for className
    /* TODO: test out setting height and itemSize based off only the height 
    of the initial render to avoid virtualization jank with new items being loaded in */
    <AutoSizer className={'flex-1 mt-5' + className} style={{ width: '100%' }}>
      {({ width }) => (
        <List
          height={180}
          width={width}
          itemCount={mangaEntries.length}
          layout='horizontal'
          itemSize={() => 100}
        >
          {Column}
        </List>
      )}
    </AutoSizer>
  );
};

export default MangaCovers;
