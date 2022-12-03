import { ReactElement, ReactNode, RefObject } from 'react';
import { BoxProps, AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  headerRef: RefObject<HTMLDivElement>;
  isPortalSticky?: boolean;
}

export default function Header({ children, sx, headerRef, isPortalSticky }: Props): ReactElement {
  const theme = useTheme();

  return (
    <AppBar
      ref={headerRef}
      sx={{ boxShadow: 'none', backgroundColor: theme.palette.common.white, ...sx }}
      color="default"
      position={isPortalSticky ? 'sticky' : 'fixed'}
    >
      {children}
    </AppBar>
  );
}
