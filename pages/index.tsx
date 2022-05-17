import React, { useEffect, useState } from 'react'
import { Htag, Button, P, Tag } from '../components';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter: ' + counter);
    return function cleanup() {
      console.log('Unmount');
    }
  });

  return (
    <div>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='right' onClick={() => setCounter(x => x - 1)}>Кнопка</Button>
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
