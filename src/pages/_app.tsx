import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeConfig from '../theme';
import ThemePrimaryColor from '../components/ThemePrimaryColor';
import { useEffect, useRef, useState } from 'react';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  const [isScrolling, setIsScrolling] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const preventZoom = (event: { touches: any[]; preventDefault: () => void }) => {
      if (!isScrolling) {
        if (event.touches.length > 1) {
          event.preventDefault();
        } else {
          const touch = event.touches[0];
          const distance = Math.sqrt(touch.clientX ** 2 + touch.clientY ** 2);
          if (distance < 150) {
            event.preventDefault();
          }
        }
      }
    };

    const startScrolling = () => {
      setIsScrolling(true);
    };

    const stopScrolling = () => {
      setIsScrolling(false);
    };

    const element = ref.current;

    if (element) {
      /* @ts-ignore */
      element.addEventListener('touchmove', preventZoom, { passive: false });
      /* @ts-ignore */
      element.addEventListener('touchstart', startScrolling, { passive: false });
      /* @ts-ignore */
      element.addEventListener('touchend', stopScrolling, { passive: false });
    }

    return () => {
      if (element) {
        /* @ts-ignore */
        element.removeEventListener('touchmove', preventZoom);
        /* @ts-ignore */
        element.removeEventListener('touchstart', startScrolling);
        /* @ts-ignore */
        element.removeEventListener('touchend', stopScrolling);
      }
    };
  }, [isScrolling]);

  return (
    <>
      <div ref={ref}>
        <ThemeConfig>
          <ThemePrimaryColor>
            <Component {...pageProps} />
          </ThemePrimaryColor>
        </ThemeConfig>
      </div>
    </>
  );
};

export default MyApp;
