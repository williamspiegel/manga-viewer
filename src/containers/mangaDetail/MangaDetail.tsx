import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

type PropTypes = {};

const MangaDetail = (props: PropTypes) => {
  const { t } = useTranslation();
  const { coverURL, title, id, description, author } = useSelector(
    (state: any) => state.mangaDetail.mangaEntry
  );
  return (
    <>
      <div className='flex flex-row'>
        <img
          src={coverURL}
          alt={title}
          id={id}
          className='basis-1/3 w-1/3 object-contain'
        />
        <div className='basis-2/3 p-5 flex flex-col'>
          <text className=' text-center'>{title}</text>
          <text>{description}</text>
        </div>
      </div>
      <div className='divider'></div>
    </>
  );
};

export default MangaDetail;
