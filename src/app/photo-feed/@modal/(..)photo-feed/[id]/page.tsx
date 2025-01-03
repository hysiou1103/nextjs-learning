// 使用 @modal 專門為 modal 建立一個平行路由與背景內容（例如照片流）同時顯示，使 modal 成為主頁面的「疊加層」。
// 這樣的資料夾結構使 modal 只在 /photo-feed/[id] 路由下才會顯示
// 使用者按下瀏覽器返回按鈕，路由回到 /photo-feed，@modal/default.tsx 再次 return null，Modal 隱藏。

import Image from 'next/image';
import wondersImages, { WonderImage } from '../../../wonders';
import Modal from '@/components/modal';

export default function Home({ params: { id } }: { params: { id: string } }) {
  const photo: WonderImage = wondersImages.find((wonder) => wonder.id === id)!;
  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
