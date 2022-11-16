import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { MangaDex } from '../../services/sites/MangaDex/MangaDex';

type Props = {};

export default function MangaViewer({}: Props) {
  const chapterId = useSelector((state: any) => state.mangaViewer.chapterId);

  const { data } = useQuery({
    queryKey: [],
    queryFn: () => MangaDex.getPages(chapterId),
  });

  return (
    <Carousel dynamicHeight>
      {data?.map((curr) => (
        <img src={curr} alt={curr} />
      ))}
    </Carousel>
  );
}
