import { Suspense } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getWidgetItem } from '@/service/api/home';
import { UniqueIdentifier } from '@dnd-kit/core';
import ConsumeWeatherCard from './ConsumeWeatherCard';
import WidgetSkeleton from './WidgetSkeleton';

import {
  WidgetBudget,
  WidgetCardPerformance,
  WidgetCurrentMonth,
  WidgetLastMonth,
  WidgetMtCredit,
  WidgetMyChallenge,
  WidgetUpcomingExpenses
} from './widget-item';

const HomeWidgetSection = async () => {
  const data = await getWidgetItem();

  const widgetMap: { [key: UniqueIdentifier]: React.ComponentType } = {
    a: WidgetBudget,
    b: WidgetCardPerformance,
    c: WidgetCurrentMonth,
    d: WidgetLastMonth,
    e: WidgetMtCredit,
    f: WidgetMyChallenge,
    g: WidgetUpcomingExpenses,
    h: WidgetMyChallenge,
    i: WidgetMyChallenge
  };

  return (
    <>
      <FlexBox justifyContent='between' alignItems='center' className='mb-[1.6rem] mt-[4rem]'>
        <Text sizes='20' weight='700' variant='h2'>
          한 눈에 보기
        </Text>
        <Button
          asChild
          styled='outline'
          size='xs'
          className='focus:outline-none focus:ring focus:ring-gray-500/50 focus:ring-offset-1'
        >
          <Link aria-label='위젯 편집으로 이동' href='/edit-widget'>
            편집
          </Link>
        </Button>
      </FlexBox>

      {/* 소비날씨 */}
      <ConsumeWeatherCard />

      {/* 위젯 영역 */}
      <div className='mb-[3rem] grid grid-cols-2 gap-x-20 gap-y-20'>
        {data[0].showWidget.map((item) => {
          const WidgetComponent = widgetMap[item.id];
          return WidgetComponent ? <WidgetComponent key={item.id} /> : null;
        })}
      </div>
    </>
  );
};

const HomeWidgetSectionWrapper = () => {
  return (
    <Suspense fallback={<WidgetSkeleton />}>
      <HomeWidgetSection />
    </Suspense>
  );
};

export default HomeWidgetSectionWrapper;