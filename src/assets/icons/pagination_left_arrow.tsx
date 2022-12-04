// material
import { Button, ButtonProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends ButtonProps {
  width?: number;
  height?: number;
}

export default function PaginationLeftArrow({ width = 20, height = 20, ...other }: Props) {
  return (
    <Button disableRipple variant="unstyled" {...other}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4714 4.8577C12.7318 5.11805 12.7318 5.54016 12.4714 5.80051L8.22876 10.0431L12.4714 14.2858C12.7318 14.5461 12.7318 14.9682 12.4714 15.2286C12.2111 15.4889 11.7889 15.4889 11.5286 15.2286L6.81455 10.5146C6.5542 10.2542 6.5542 9.83209 6.81455 9.57174L11.5286 4.8577C11.7889 4.59735 12.2111 4.59735 12.4714 4.8577Z"
          fill="#33374D"
        />
      </svg>
    </Button>
  );
}
