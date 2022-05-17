import React from 'react'
import { Htag, Button, P, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <P size='s'>Малой</P>
      <P size='m'>Средний</P>
      <P size='l'>Большой</P>
      <Tag size='s' color='ghost'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
    </div>
  );
}
