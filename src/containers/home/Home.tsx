import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import MangaCovers from '../../components/MangaCovers';
import { MangaDex } from '../../services/sites/MangaDex/MangaDex';

export default function Home() {
  const [input, setInput] = useState('');
  const { data } = useQuery({
    queryKey: [input],
    queryFn: () => MangaDex.getMangaList(input),
  });

  return (
    <div className=' flex flex-col  items-center'>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-full max-w-xs m-3 flex'
        onInput={(event) => {
          setInput(event.currentTarget.value);
        }}
      />
      <MangaCovers mangaEntries={data || []} />
    </div>
  );
}
