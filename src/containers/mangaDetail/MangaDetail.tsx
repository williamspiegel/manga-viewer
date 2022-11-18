import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ChaptersList from '../../components/ChaptersList';
import { MangaDex } from '../../services/sites/MangaDex/MangaDex';

type PropTypes = {};

const MangaDetail = (props: PropTypes) => {
  const { t } = useTranslation();
  const { coverURL, title, id, description, author } = useSelector(
    (state: any) => state.mangaDetail.mangaEntry
  );
  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => MangaDex.getChapters(id),
  });

  return (
    <>
      <div className='flex flex-row'>
        <div className='basis-1/3 self-start flex flex-col'>
          <img src={coverURL} alt={title} id={id} className='object-contain' />
          <text className='text-center text-lg'>{title}</text>
          <text className='text-center text-sm'>{author}</text>
        </div>

        <div className='basis-2/3 p-5 flex flex-col'>
          <text className='text-clip overflow-hidden ...'>{description}</text>
        </div>
      </div>
      <div className='divider' />
      <ChaptersList chapters={data || []} />
    </>
  );
};

export default MangaDetail;
