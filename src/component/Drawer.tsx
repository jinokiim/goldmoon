import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Box, BoxProps, Stack, Typography } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '../assets/icons/close';
import { MIconButton } from './@material-extend';

// ----------------------------------------------------------------------

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}));

// ----------------------------------------------------------------------

export interface Props extends BoxProps {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  round?: boolean;
  anchor?: 'bottom' | 'left' | 'right' | 'top' | undefined;
  hideBackdrop?: boolean | undefined;
  disableSwipeToOpen?: boolean | undefined;
  swipeAreaWidth?: number | undefined;
  variant?: 'permanent' | 'persistent' | 'temporary';
  backdropColor?: string;
  title?: string;
  subTitle?: string;
  disableOnClose?: boolean;
  hideCloseButton?: boolean;
}

export default function SwipeableEdgeDrawer(props: Props) {
  const {
    children,
    round,
    open,
    setOpen,
    anchor = 'bottom',
    hideBackdrop = false,
    disableSwipeToOpen = false,
    swipeAreaWidth = 0,
    variant = 'temporary',
    disableOnClose = false,
    title,
    subTitle,
    sx,
    hideCloseButton = false
  } = props;

  return (
    <SwipeableDrawer
      variant={variant}
      anchor={anchor}
      hideBackdrop={hideBackdrop}
      open={open}
      onClose={() => !disableOnClose && setOpen(false)}
      onOpen={() => setOpen(true)}
      swipeAreaWidth={swipeAreaWidth}
      disableSwipeToOpen={disableSwipeToOpen}
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        '& .MuiPaper-root': {
          borderTop: 'none'
        },
        ...(round && {
          '& .MuiPaper-root': {
            borderRadius: '20px 20px 0px 0px !important',
            borderTop: 'none'
          }
        })
      }}
    >
      <StyledBox
        sx={{
          pb: 2.5,
          height: '100%',
          overflow: 'auto',
          ...sx
        }}
      >
        {title && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2.5, py: 1 }}
          >
            <Box>
              <Typography variant="subtitle1">{title}</Typography>
              {subTitle && <Typography variant="caption">{subTitle}</Typography>}
            </Box>

            {!hideCloseButton && (
              <MIconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </MIconButton>
            )}
          </Stack>
        )}
        {children}
      </StyledBox>
    </SwipeableDrawer>
  );
}
