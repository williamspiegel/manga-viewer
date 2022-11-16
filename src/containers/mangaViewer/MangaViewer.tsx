import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MangaDex } from '../../services/sites/MangaDex/MangaDex';
// Import Swiper styles
import 'swiper/css';
type Props = {};

export default function MangaViewer({}: Props) {
  const chapterId = useSelector((state: any) => state.mangaViewer.chapterId);

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
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
    >
      {data?.map((curr) => (
        <SwiperSlide className='object-contain self-center '>
          <img src={curr} alt={curr} className='w-full' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
