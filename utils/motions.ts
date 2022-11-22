import { useEffect, useRef } from 'react';
import { SEGUE } from 'consts';

export const useSegue = (pathname: string) => {
  const hasMount = useRef(false);
  const pathQueue = useRef();
  const SHOULD_UPDATE_CACHE = useRef(false);

  const prevPath = useRef(null);

  const direction = useRef('');

  if (!hasMount.current) {
    // mount
    hasMount.current = true;
    const cacheList = sessionStorage.getItem(SEGUE.CACHE_KEY);
    if (!cacheList) {
      // @ts-ignore
      prevPath.current = pathname;
      // @ts-ignore
      pathQueue.current = [pathname];
      SHOULD_UPDATE_CACHE.current = true;
    } else {
      pathQueue.current = JSON.parse(cacheList);
      // @ts-ignore
      prevPath.current = pathQueue.current[pathQueue.current.length - 1];
    }
  } else {
    // update
    if (prevPath.current !== pathname) {
      // @ts-ignore
      const nextIndex = pathQueue.current.lastIndexOf(pathname);

      if (nextIndex === -1) {
        direction.current = 'forward';
        // @ts-ignore
        pathQueue.current.push(pathname);
      } else {
        direction.current = 'backward';
        // @ts-ignore
        pathQueue.current.length = nextIndex + 1;
      }

      SHOULD_UPDATE_CACHE.current = true;
      // @ts-ignore
      prevPath.current = pathname;
    }
  }

  useEffect(() => {
    if (SHOULD_UPDATE_CACHE.current) {
      SHOULD_UPDATE_CACHE.current = false;
      sessionStorage.setItem(SEGUE.CACHE_KEY, JSON.stringify(pathQueue.current));
    }
  });

  return {
    direction: direction.current
  };
};

export const MOTION_VARIANTS = {
  initial: ({ direction }: { direction: 'forward' | 'backward' }) => ({
    x: direction === 'backward' ? '-100%' : '100%',
    transition: {
      type: 'linear',
      duration: 0.2,
      delay: 0
    }
  }),
  in: {
    x: 0,
    transition: {
      type: 'linear',
      duration: 0.2,
      delay: 0
    }
  },
  out: ({ direction }: { direction: 'forward' | 'backward' }) => ({
    x: direction === 'backward' ? '100%' : '-100%',
    transition: {
      type: 'linear',
      duration: 0.2,
      delay: 0
    }
  })
};
