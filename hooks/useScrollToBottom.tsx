import { RefObject, useState } from 'react';

export default function useScrollToBottom(): (
  newId: number,
  target: RefObject<HTMLDivElement>
) => void {
  const [id, setId] = useState<number>();

  const scrollToBottom = (target: RefObject<HTMLDivElement>) => {
    const container = target.current;
    if (container) {
      setTimeout(() => {
        console.log(
          '🚀 ~ file: useScrollToBottom.tsx:15 ~ setTimeout ~ container.scrollHeight:',
          container.scrollHeight
        );
        container.scrollTo({ top: container.scrollHeight });
      }, 400);
    }
  };

  const scrollNow = (newId: number, target: RefObject<HTMLDivElement>) => {
    if (newId !== id) {
      setId(newId);
      scrollToBottom(target);
    }
  };

  return scrollNow;
}
