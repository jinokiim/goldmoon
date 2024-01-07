import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  SxProps,
  InputBase,
  Paper,
  IconButton
} from '@mui/material';
import Card from '../Card';
import { COLORS } from '@/src/theme/palette';
import RandomIcon from '@/src/assets/menu/random_icon';
import BalanceIcon from '@/src/assets/menu/balance_icon';
import { StepProps } from '@/src/pages/main/organize';

import { PaymentsInput } from './PaymentsInput';

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
    title: '이름',
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

export function FirstStep({ onChange, onNext }: StepProps) {
  const [picked, setPicked] = useState<String>('');
  const [desc, setDesc] = useState<String>('');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ px: 2.5 }}>
        <Box sx={{ pt: 3, mb: 8 }}>
          <Typography variant="h4" align="center">
            정산에 관한 정보를 입력해 주세요
          </Typography>
        </Box>
        <Box sx={{ pb: 5 }}>
          {/*  */}
          <Grid container spacing={2}>
            {makeTeamMenuLists.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Box>
                  <Card
                    type="common"
                    sx={{
                      backgroundColor:
                        picked === item.title_eng ? COLORS.secondary700 : COLORS.backgroundDefault,
                      flex: 1,
                      height: '80px',
                      padding: 0
                    }}
                    onClick={() => {
                      setPicked(item.title_eng);
                      setDesc(item.title);
                      onChange({
                        category: item.title_eng
                      });
                    }}
                  >
                    <Box
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
                      <PaymentsInput
                        value={search}
                        // handleChange={handleSearchChange}
                        placeholder="이름을 입력해보세요"
                        onEmptySearchIconClick={() => setSearch('')}
                      />
                    </Box>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
          {/*  */}
        </Box>
        <Grid item xs={12}>
          <Card
            type="common"
            sx={{
              backgroundColor: COLORS.backgroundDefault,
              flex: 1,
              height: '80px',
              padding: 0
            }}
            onClick={() => {
              // setPicked(item.title_eng);
              // setDesc(item.title);
              onChange({
                // category: item.title_eng
              });
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: COLORS.secondary700,
                mb: 1
              }}
            >
              item.title
            </Typography>
          </Card>
        </Grid>
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
