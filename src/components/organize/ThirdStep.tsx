import { useEffect } from 'react';

import { Box, Button, Grid, Stack, Typography, SxProps, Badge } from '@mui/material';
import Card from '../Card';
import { COLORS } from '@/src/theme/palette';
import RandomIcon from '@/src/assets/menu/random_icon';
import BalanceIcon from '@/src/assets/menu/balance_icon';
import { memberType } from '@/src/pages/main/members';

//--------------------------------------------------------------------------

export function ThirdStep() {
  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ px: 2.5 }}>
        <Box sx={{ pt: 3, mb: 2 }}>
          <Typography variant="h4" align="center">
            몇 개의 방으로 나눌까요?
          </Typography>
          <Typography variant="h6" align="center">
            1 부터 10까지의 숫자 중 선택해주세요
          </Typography>
        </Box>
        <Box sx={{ pb: 5, mx: 4 }}>
          {/*  */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', verticalAlign: 'middle' }}>
            <Box>
              <Button>
                <Typography variant="h1">-</Typography>
              </Button>
            </Box>
            <Box>
              <Typography variant="h1" color={COLORS.secondary500}>
                3
              </Typography>
            </Box>
            <Box>
              <Button>
                <Typography variant="h1">+</Typography>
              </Button>
            </Box>
          </Box>
          {/*  */}
        </Box>
      </Box>
      <Box>
        <Typography>총 00개의 방으로 나누며</Typography>
        <Typography>한 방에 약 00명씩 나누어져요</Typography>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: '100%', position: 'fixed', px: 2.5, bottom: 0, mb: 1 }}
      >
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="gray"
          sx={{ flex: 1 }}
          // onClick={onPrev}
        >
          이전
        </Button>
        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ flex: 4 }}
          //  onClick={handleNext}
        >
          다음
        </Button>
      </Stack>
    </>
  );
}
