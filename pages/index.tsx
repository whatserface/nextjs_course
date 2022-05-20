import React, { useEffect, useState } from 'react'
import { Htag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <P size='s'>Малой</P>
      <P size='m'>Средний</P>
      <P size='l'>Большой</P>
      <Tag size='s' color='ghost'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
}

export default withLayout(Home);