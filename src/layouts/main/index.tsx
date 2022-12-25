import { memo, ReactElement, ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, BoxProps } from '@mui/material';
import { pick } from 'lodash';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import useSettings from '@/src/hooks/useSettings';
import { SxProps } from '@mui/system';
// import { isIOS } from 'react-device-detect';
// import { logger } from 'utils';
import { motion } from 'framer-motion';
import { MOTION_VARIANTS } from '../../utils/motions';
import { SEGUE } from 'consts';

// ----------------------------------------------------------------------

interface MainLayoutProps extends BoxProps {
  hasSegue?: boolean;
  isPortalSticky?: boolean;
  hasNav?: boolean;
  isLoading?: boolean;
  loadingTitle?: string;
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  title?: string;
  styles?: {
    wrapper?: SxProps;
    header?: SxProps;
    content?: SxProps;
    footer?: SxProps;
  };
}

const MemoizedAnimationWrapper = (children: JSX.Element) => {
  const direction = sessionStorage.getItem(SEGUE.DIR_KEY);
  const [style, setStyle] = useState<SxProps>({ transform: 'initial' });
  useEffect(() => {
    setTimeout(() => {
      setStyle({ transform: 'none !important' });
    }, 300);
  }, []);
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Box
      ref={ref}
      exit={'out'}
      animate={'in'}
      initial="initial"
      sx={{ ...style }}
      custom={{ direction }}
      component={motion.div}
      variants={MOTION_VARIANTS}
      onAnimationComplete={() => {
        ref.current?.style.removeProperty('transform');
      }}
    >
      {children}
    </Box>
  );
};

function MainLayout(props: MainLayoutProps): ReactElement {
  const { wrapper, header, content, footer } = pick(props?.styles, [
    'wrapper',
    'content',
    'header',
    'footer'
  ]);

  const hasNav = props?.hasNav || false;
  const isLoading = props?.isLoading || false;
  // const loadingTitle = props?.loadingTitle || '';
  const hasSegue = props?.hasSegue || false;
  const isPortalSticky = props?.isPortalSticky || false;
  const { headerHeight, footerHeight, navigationHeight, onChangeLayout, onSetNavigation } =
    useSettings();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  //TODO: footer padding fix 해야함
  useLayoutEffect(() => {
    const tempHeaderHeight = headerRef.current?.clientHeight;
    const tempFooterHeight = footerRef.current?.clientHeight;

    onChangeLayout({
      headerHeight: isPortalSticky ? 0 : tempHeaderHeight ?? 56,
      footerHeight: isPortalSticky ? 0 : tempFooterHeight ?? 0
    });
  }, [headerRef, footerRef, isLoading]);

  useEffect(() => {
    onSetNavigation(hasNav);
  }, [hasNav]);

  if (isLoading) {
    return <Box>로딩중</Box>;
  }

  const children = (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // ...(isIOS && { overflowY: 'auto' }),
        ...wrapper
      }}
    >
      {props.title && (
        <Helmet>
          <title>{props.title}</title>
        </Helmet>
      )}
      {props.header && (
        <Header isPortalSticky={isPortalSticky} headerRef={headerRef} sx={header}>
          {props.header}
        </Header>
      )}
      {props.content && (
        <Content
          sx={{
            pt: `${headerHeight}px`,
            pb: `${footerHeight + (hasNav ? navigationHeight : 0)}px`,
            ...content
          }}
        >
          {props.content}
        </Content>
      )}
      {props.footer && (
        <Footer
          isPortalSticky={isPortalSticky}
          footerRef={footerRef}
          sx={{ boxShadow: 'none', ...footer }}
        >
          {props.footer}
        </Footer>
      )}
    </Box>
  );

  return hasSegue ? MemoizedAnimationWrapper(children) : children;
}

export default memo(MainLayout);
