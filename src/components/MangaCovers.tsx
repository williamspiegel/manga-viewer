import { Link } from '@tanstack/react-location';
import { useDispatch } from 'react-redux';
import { Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { setMangaEntry } from '../containers/mangaDetail/mangaDetailSlice';
import { MangaEntry } from '../services/MangaService';

type PropTypes = { mangaEntries: MangaEntry[]; className?: string | undefined };

const MangaCovers = ({ mangaEntries, className = '' }: PropTypes) => {
  const dispatch = useDispatch();

  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={10}
      navigation={true}
      virtual
      className={'w-full ' + className}
      modules={[Virtual, Navigation]}
    >
      {mangaEntries.map((slideContent, index) => {
        const { coverURL, title, id, description, author } = slideContent;

        return (
          <SwiperSlide key={index} virtualIndex={index}>
            <Link
              to='/mangaDetail'
              onClick={() => {
                dispatch(
                  setMangaEntry({ coverURL, title, id, description, author })
                );
              }}
            >
              <div className='p-1'>
                <img
                  src={coverURL}
                  alt={title}
                  id={id}
                  className='rounded-md object-cover aspect-[2/3]'
                />
                <p className='line-clamp-2'>{title}</p>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MangaCovers;
