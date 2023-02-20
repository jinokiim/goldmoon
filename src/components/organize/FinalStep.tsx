import { useEffect } from 'react';

import { Box, Button, Grid, Stack, Typography, SxProps, Badge, Paper } from '@mui/material';
import Card from '../Card';
import { COLORS } from '@/src/theme/palette';
import RandomIcon from '@/src/assets/menu/random_icon';
import BalanceIcon from '@/src/assets/menu/balance_icon';
import { memberType } from '@/src/pages/main/members';

//--------------------------------------------------------------------------

export function FinalStep() {
  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ px: 2.5 }}>
        <Box sx={{ pt: 3, mb: 2 }}>
          <Typography variant="h6" align="center">
            00명의 인원을 00개의 그룹으로 나누었어요
          </Typography>
        </Box>
        <Box sx={{ pb: 5, mx: 2 }}>
          {/*  */}
          <Grid container spacing={3}>
            {/*  */}
            <Grid item xs={6}>
              <Box>
                <Card
                  type="common"
                  sx={{
                    backgroundColor: COLORS.backgroundPaper,
                    flex: 1,
                    // height: '160px',
                    padding: 0,
                    border: `1px solid ${COLORS.secondary700}`
                  }}
                  onClick={() => {}}
                >
                  <Stack
                    height="100%"
                    // justifyContent="space-between"
                    sx={{ pt: 0.5, pb: 1, pl: 2.5, pr: 2.5 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: COLORS.secondary700
                      }}
                    >
                      1번 그룹
                    </Typography>
                    <Typography>124234</Typography>
                    <Typography>124234</Typography>
                    <Typography>124234</Typography>
                    <Typography>124234</Typography>
                  </Stack>
                </Card>
              </Box>
            </Grid>
            {/*  */}
          </Grid>
          {/*  */}
        </Box>
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
