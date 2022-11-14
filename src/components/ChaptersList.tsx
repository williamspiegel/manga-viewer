import { Link } from '@tanstack/react-location';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import { Chapter } from '../services/MangaService';

type Props = { chapters: Chapter[]; className?: string };

export default function ChaptersList({ chapters = [], className = '' }: Props) {
  const Row = ({ index, style }: { index: number; style: Object }) => {
    const { id, title, scanlationAuthor = '' } = chapters[index];

    return (
      <Link
        to='/viewer'
        onClick={() => {
          //TODO: viewer implementation
        }}
      >
        <div className='p-1' key={index} data-index={index} style={style}>
          <text>{title}</text>
        </div>
      </Link>
    );
  };
  return (
    <AutoSizer className={'flex-1 mt-5' + className} style={{ width: '100%' }}>
      {({ width, height }) => (
        <List
          height={height}
          width={width}
          itemCount={chapters.length}
          layout='vertical'
          itemSize={() => 50}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
}
