'use client';
import React, { useState } from 'react';
import { ListCard, ListHeader, ListFooter, ListContent } from './bucket-challenge';
import Image from 'next/image';

const BucketListCard = () => {
  const [load, setLoad] = useState(false);
  const onLoadImage = () => {
    setLoad(true);
  };

  return (
    <ListCard bgColor='bucket'>
      <ListHeader badgeText='버킷리스트' headerText='유럽 여행가기' />
      <ListContent textColor='bucket'>
        <Image
          src='/images/home/bucket_img_step1.webp'
          width={155}
          height={155}
          alt='버킷리스트'
          title='버킷리스트 이미지'
          loading='lazy'
          onLoad={onLoadImage}
          quality={load ? '100' : '10'}
          placeholder='blur'
          blurDataURL='data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSAwAAAABAAI7W2YAZAAA/v////8vQUxQSAwAAAABAAI7W2YAZA'
          className='pointer-events-none h-[15.5rem] w-[15.5rem]'
        />
      </ListContent>
      <ListFooter targetAmount={2000000} currentAmount={350000} />
    </ListCard>
  );
};

export default BucketListCard;