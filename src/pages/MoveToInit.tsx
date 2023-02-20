import { Box, Typography, Button } from '@mui/material';
import Layout from '@/src/layouts/main';
import { COLORS } from '../theme/palette';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function MoveToInit() {
  const router = useRouter();

  return (
    <Layout
      content={
        <Box
          sx={{
            textAlign: 'center',
            my: 12
          }}
        >
          <Box>
            <Box>
              <Typography pb={3} variant="h6">
                앗, 코드를 입력하지 않은 것 같아요!{' '}
              </Typography>
              <Typography variant="body1" sx={{ color: COLORS.text600 }}>
                첫 페이지로 이동할게요.
              </Typography>
            </Box>
          </Box>
        </Box>
      }
      footer={
        <Button
          fullWidth
          size="large"
          sx={{ m: 2 }}
          variant="contained"
          onClick={() => {
            router.push('/');
          }}
        >
          확인
        </Button>
      }
    />
  );
}
