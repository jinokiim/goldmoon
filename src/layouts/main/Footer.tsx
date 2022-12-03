import { ReactElement, ReactNode, RefObject } from 'react';
import { AppBar, Toolbar, BoxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface FooterProps extends BoxProps {
  children: ReactNode;
  footerRef: RefObject<HTMLDivElement>;
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent';
  isPortalSticky?: boolean;
}

export default function Footer({
  children,
  sx,
  footerRef,
  color = 'primary',
  isPortalSticky
}: FooterProps): ReactElement {
  const theme = useTheme();

  return (
    <AppBar
      ref={footerRef}
      position={isPortalSticky ? 'sticky' : 'fixed'}
      color={color}
      sx={{
        top: 'auto',
        bottom: 0,
        '& .MuiToolbar-root': { px: 0 },
        backgroundColor: theme.palette.common.white,
        boxShadow: 'none',
        ...sx
      }}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}
