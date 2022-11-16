import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
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
    <Swiper className='h-1/2'>
      {data?.map((curr) => (
        <SwiperSlide className='object-contain'>
          <img src={curr} alt={curr} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
