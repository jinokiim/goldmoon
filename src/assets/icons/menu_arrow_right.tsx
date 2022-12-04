import { Box, BoxProps } from '@mui/material';

export default function MenuArrowRight(props: BoxProps) {
  return (
    <Box {...props}>
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.08857 0.636039C1.34892 0.37569 1.77103 0.37569 2.03138 0.63604L7.92394 6.5286C8.18428 6.78895 8.18429 7.21106 7.92394 7.4714L2.03138 13.364C1.77103 13.6243 1.34892 13.6243 1.08857 13.364C0.828221 13.1036 0.828221 12.6815 1.08857 12.4212L6.50972 7L1.08857 1.57885C0.828221 1.3185 0.828221 0.896389 1.08857 0.636039Z"
          fill={props.color?.toString() || '#33374D'}
        />
      </svg>
    </Box>
  );
}
