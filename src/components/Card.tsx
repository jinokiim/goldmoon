import { Box, BoxProps } from '@mui/material';
import { merge } from 'lodash';
import React, { ReactNode } from 'react';

interface Props extends BoxProps {
  type: 'common' | 'outline';
  shadow?: boolean;

  icon?: ReactNode;
  onClickIcon?: () => void;
}

export default function Card(props: Props) {
  const { sx, type, children, icon, onClickIcon, ...rest } = props;

  const styles: Record<string, any> = {
    common: {
      p: 2,
      background: '#FFFFFF',
      boxShadow: ' 0px 2px 8px rgba(112, 144, 176, 0.12), 0px 4px 16px rgba(112, 144, 176, 0.12)',
      borderRadius: '12px'
    },
    outline: {
      p: 2,
      background: '#FFFFFF',
      border: '1px solid rgba(51, 55, 77, 0.12)',
      borderRadius: '8px'
    }
  };

  const wrapperStyle = merge(styles[type], sx);
  return (
    <Box sx={wrapperStyle} {...rest}>
      <Box sx={{ float: 'right', m: '-2px -2px 0 0' }} onClick={onClickIcon}>
        {icon}
      </Box>
      {children}
    </Box>
  );
}
