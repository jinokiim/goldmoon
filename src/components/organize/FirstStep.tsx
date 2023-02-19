import { useEffect, useState } from 'react';

import { Box, Button, Grid, Stack, Typography, SxProps } from '@mui/material';
import Card from '../Card';
import { COLORS } from '@/src/theme/palette';
import RandomIcon from '@/src/assets/menu/random_icon';
import BalanceIcon from '@/src/assets/menu/balance_icon';
import { StepProps } from '@/src/pages/main/organize';

//--------------------------------------------------------------------------

const menuIcon: SxProps = {
  objectFit: 'contain',
  width: 48,
  height: 48,
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  transitionDuration: '0.5s',
  '&:hover': {}
};
const makeTeamMenuLists = [
  {
    title: '랜덤하게',
    title_eng: 'random',
    icon: (
      <Box className="GoldmoonIcon" sx={{ ...menuIcon }}>
        <RandomIcon />
      </Box>
    ),
    info: '선택한 인원들로 랜덤하게 방을 구성해요'
  },
  {
    title: '공평하게',
    title_eng: 'balance',
    icon: (
      <Box className="GoldmoonIcon" sx={{ ...menuIcon }}>
        <BalanceIcon />
      </Box>
    ),
    info: '선택한 인원들로 공평하게 방을 구성해요'
  }
];

export function FirstStep({ value, onChange, onNext }: StepProps) {
  const [picked, setPicked] = useState<String>('');
  const [desc, setDesc] = useState<String>('');
  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ px: 2.5 }}>
        <Box sx={{ pt: 3, mb: 8 }}>
          <Typography variant="h4" align="center">
            어떻게 구성할지 선택해주세요
          </Typography>
        </Box>
        <Box sx={{ pb: 5 }}>
          {/*  */}
          <Grid container spacing={2}>
            {makeTeamMenuLists.map((item, index) => (
              <Grid item xs={6} key={index}>
                <Box>
                  <Card
                    type="common"
                    sx={{
                      backgroundColor:
                        picked === item.title_eng ? COLORS.secondary700 : COLORS.backgroundDefault,
                      flex: 1,
                      height: '160px',
                      padding: 0
                    }}
                    onClick={() => {
                      setPicked(item.title_eng);
                      setDesc(item.title);
                      // onChange({
                      //   category: item.title_eng
                      // });
                    }}
                  >
                    <Stack
                      height="100%"
                      justifyContent="space-between"
                      sx={{ pt: 2.5, pb: 1, pl: 2.5, pr: 2.5 }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color:
                            picked === item.title_eng
                              ? COLORS.backgroundDefault
                              : COLORS.secondary700,

                          mb: 1
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Stack justifyContent="flex-end" alignItems="flex-end" sx={{ pb: 2 }}>
                        {item.icon}
                      </Stack>
                    </Stack>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
          {/*  */}
        </Box>
        {picked && (
          <Box>
            <Typography variant="h6">
              선택한 인원들로{' '}
              <Box component="span" color={COLORS.secondary700}>
                {desc}
              </Box>{' '}
              방을 구성해요
            </Typography>
          </Box>
        )}
      </Box>
      <Stack sx={{ width: '100%', position: 'fixed', px: 2.5, bottom: 0, mb: 1 }}>
        <Button fullWidth size="large" variant="contained" onClick={onNext}>
          다음
        </Button>
      </Stack>
    </>
  );
}
