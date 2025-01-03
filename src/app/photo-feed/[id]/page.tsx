// 這個頁面是 /photo-feed/[id] 的原始頁面，用來顯示特定的照片，當直接輸入網址或當頁重整時會顯示這個元件
import Image from 'next/image';
import wondersImages, { WonderImage } from '../wonders';

export default function Home({ params: { id } }: { params: { id: string } }) {
  const photo: WonderImage = wondersImages.find((wonder) => wonder.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square"
        />
        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
