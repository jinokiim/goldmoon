import { ReactElement, ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
}

export default function Content({ children, sx }: Props): ReactElement {
  return (
    <Box
      sx={{
        height: 'fit-content',
        ...sx
      }}
    >
      {children}
    </Box>
  );
}
