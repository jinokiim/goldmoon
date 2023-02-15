import { useEffect, useState } from 'react';

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Card from '../Card';
import { COLORS } from '@/src/theme/palette';
import MakeTeam from '@/src/assets/menu/make_team_icon';

//--------------------------------------------------------------------------
enum OrganizeType {
  RANDOM = 'random',
  BALANCE = 'balance'
}

const OrganizeState = ['random', 'balance'];

export function FirstStep() {
  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ px: 2.5 }}>
        <Box sx={{ pt: 3, mb: 2.5 }}>
          <Typography variant="h4" align="center">
            어떻게 구성할지 선택해주세요
          </Typography>
        </Box>
        <Box sx={{ pb: 5 }}>
          {/*  */}
          <Grid container spacing={2}>
            {OrganizeState.map((item, index) => (
              <Grid item xs={6} key={index}>
                <Box>
                  <Card
                    type="common"
                    sx={{
                      backgroundColor: COLORS.secondary700,
                      flex: 1,
                      height: '160px',
                      padding: 0
                    }}
                    onClick={() => {}}
                  >
                    <Stack
                      height="100%"
                      justifyContent="space-between"
                      sx={{ pt: 2.5, pb: 1, pl: 2.5, pr: 2.5 }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: COLORS.backgroundPaper,
                          mb: 1
                        }}
                      >
                        {item === 'random' ? '랜덤하게' : '공평하게'}
                      </Typography>
                      <Stack justifyContent="flex-end" alignItems="flex-end">
                        <MakeTeam />
                      </Stack>
                    </Stack>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
          {/*  */}
        </Box>
      </Box>
      <Stack sx={{ width: '100%', position: 'fixed', px: 2.5, bottom: 0, mb: 1 }}>
        <Button fullWidth size="large" variant="contained" onClick={() => {}}>
          다음
        </Button>
      </Stack>
    </>
  );
}
