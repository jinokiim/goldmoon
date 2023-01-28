import { Box, BoxProps, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/system';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  errorMessage: string;
  password: number[] | string[];
  maxInputSize: number;
  errorMessageStyles?: SxProps<Theme> | undefined;
}

export default function PinMask({
  errorMessage,
  password,
  maxInputSize,
  sx,
  errorMessageStyles
}: Props) {
  const blanks = new Array(maxInputSize).fill(0);
  const theme = useTheme();

  return (
    <Box sx={{ ...sx }}>
      <Box sx={{ width: '60%', margin: '0 auto' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          {blanks.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: '14px',
                height: '14px',
                backgroundColor:
                  password[index] || password[index] === 0
                    ? theme.palette.secondary.main
                    : theme.palette.info.dark,
                borderRadius: '50px'
              }}
            />
          ))}
        </Box>
      </Box>
      {errorMessage && (
        <Typography
          component="div"
          variant="caption1"
          sx={{
            color: theme.palette.error.main,
            fontSize: theme.typography.overline.fontSize,
            fontWeight: theme.typography.overline.fontWeight,
            textAlign: 'center',
            mt: 3,
            ...errorMessageStyles
          }}
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
}
