import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MangaDex } from '../../services/sites/MangaDex/MangaDex';
// Import Swiper styles
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MangaViewer() {
  const chapterId = useSelector((state: any) => state.mangaViewer.chapterId);
  const [uiVisible, setUiVisible] = useState(true);

  const { data, isLoading } = useQuery({
    queryKey: [chapterId],
    queryFn: () => MangaDex.getPages(chapterId),
  });

  return isLoading ? (
    <></>
  ) : (
    <Swiper
      keyboard={{
        enabled: true,
      }}
      slidesPerView={1}
      pagination={
        uiVisible && {
          type: 'fraction',
        }
      }
      navigation={uiVisible}
      modules={[Keyboard, Pagination, Navigation]}
    >
      {data?.map((curr) => (
        <SwiperSlide
          onClick={() => {
            setUiVisible(!uiVisible);
          }}
          className='object-contain self-center '
        >
          <img src={curr} alt={curr} className='w-full' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
