import * as React from 'react';
import { Box, Tooltip, TooltipProps, tooltipClasses, styled, BoxProps } from '@mui/material';
import { COLORS } from 'theme/palette';

// ----------------------------------------------------------------------
export const ToolTipCPWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgba(97, 97, 97, 0.9)'
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(97, 97, 97, 0.9)',
    marginTop: '17px !important'
  }
}));
// ----------------------------------------------------------------------
export const ToolTipCP = React.forwardRef((props, ref) => (
  <Box sx={{ borderRadius: '50%', justifyContent: 'center' }} {...props} ref={ref} display={'flex'}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#D6D7DB" />
      <ellipse cx="12" cy="7.2" rx="1.2" ry="1.2" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2 9.60001V18.4H10.8V9.60001H13.2Z"
        fill="white"
      />
    </svg>
  </Box>
));

// ------------------

export const CustomToolTip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(97, 97, 97, 0.9)',
    color: COLORS.white,
    fontSize: 13,
    width: '306px',
    marginRight: '25px',
    borderRadius: '4px',
    px: 1,
    py: 1,
    marginTop: '5px !important',
    lineHeight: '18px'
  },
  [`& .${tooltipClasses.tooltipArrow}`]: {
    backgroundColor: '#616161E5'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#616161E5',
    marginLeft: '13px'
  }
}));

export const ToolTipCPIcon = ({ ...other }: BoxProps) => {
  return (
    <Box {...other}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.5" cy="12.5" r="10" fill="#D6D7DB" />
        <ellipse cx="12.5" cy="7.7" rx="1.2" ry="1.2" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7001 10.1001V18.9001H11.3V10.1001H13.7001Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};
