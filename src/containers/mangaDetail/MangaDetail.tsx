import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

type PropTypes = {};

const MangaDetail = (props: PropTypes) => {
  const { t } = useTranslation();
  const { coverURL, title, id, description, author } = useSelector(
    (state: any) => state.mangaDetail.mangaEntry
  );
  return (
    <div className='p-1'>
      <img src={coverURL} alt={title} id={id} className='rounded-md w-1/2' />
      <text>{title}</text>
    </div>
  );
};

export default MangaDetail;
