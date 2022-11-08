import { useVirtualizer } from '@tanstack/react-virtual';
import React from 'react';
import { MangaEntry } from '../services/MangaService';

type PropTypes = { mangaEntries: MangaEntry[] };

const MangaCovers = ({ mangaEntries }: PropTypes) => {
  const parentRef = React.useRef();
  const virtualizer = useVirtualizer({
    horizontal: true,
    count: mangaEntries.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
  });
  return (
    <>
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          overflow: 'auto',
        }}
        ref={parentRef as any}
      >
        <div
          className='flex flex-row'
          style={{
            width: virtualizer.getTotalSize(),
          }}
        >
          {virtualizer.getVirtualItems().map(({ key, index, start }) => {
            const { coverURL, title, id } = mangaEntries[index];
            console.log('dynamically loaded index:  ', index);
            return (
              <div
                className='p-1'
                key={key}
                data-index={index}
                ref={virtualizer.measureElement}
              >
                <img
                  src={coverURL}
                  alt={title}
                  id={id}
                  className='rounded-md'
                />
                <text>{title}</text>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MangaCovers;
