import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function GreenBubble({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0541 2.00015C6.53182 1.96979 2.03051 6.42188 2.00015 11.9441C1.99121 13.5746 2.38111 15.1826 3.13589 16.6278L3.33588 17.0178C3.50191 17.3242 3.53789 17.6845 3.43585 18.0177C3.15017 18.7769 2.91142 19.553 2.72092 20.3415C2.72092 20.7415 2.83489 20.9704 3.26485 20.9605C4.02214 20.7921 4.76792 20.5756 5.49768 20.3125C5.81318 20.2255 6.14862 20.2456 6.45158 20.3695C6.72854 20.5024 7.29046 20.8454 7.31052 20.8454C12.1963 23.4194 18.2436 21.5452 20.8176 16.6595C23.3915 11.7736 21.5174 5.72629 16.6316 3.15235C15.2196 2.40848 13.65 2.0134 12.0541 2.00015Z"
          fill="#3AD1A9"
        />
        <circle cx="16.6667" cy="12" r="1.33333" fill="white" />
        <circle cx="12" cy="12" r="1.33333" fill="white" />
        <ellipse cx="7.33333" cy="12" rx="1.33333" ry="1.33333" fill="white" />
      </svg>
    </Box>
  );
}
