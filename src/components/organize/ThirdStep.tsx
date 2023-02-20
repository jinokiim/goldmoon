import { useEffect, useState } from 'react';

import { Box, Button, Grid, Stack, Typography, SxProps, Badge } from '@mui/material';
import Card from '../Card';
import { COLORS } from '@/src/theme/palette';
import RandomIcon from '@/src/assets/menu/random_icon';
import BalanceIcon from '@/src/assets/menu/balance_icon';
import { memberType } from '@/src/pages/main/members';
import { MyTeamProps } from '@/src/pages/main/organize';

//--------------------------------------------------------------------------

export function ThirdStep({
  value,
  selectedMembers,
  onChange,
  onPrev,
  onNext
}: {
  value: MyTeamProps;
  selectedMembers: string[];

  onPrev?: () => void;
  onNext?: () => void;
  onChange: (data: Partial<MyTeamProps>) => void;
}) {
  const [roomTemp, setRoomTemp] = useState<number>(1);

  useEffect(() => {
    console.log('selectedMembers', selectedMembers);
    console.log('value', value);
  }, []);

  return (
    <>
      <Box sx={{ px: 2.5 }}>
        <Box sx={{ pt: 3, mb: 2 }}>
          <button
            onClick={() => {
              console.log(value);
            }}
          >
            @@@
          </button>
          <Typography variant="h4" align="center">
            몇 개의 그룹으로 나눌까요?
          </Typography>
        </Box>
        <Box sx={{ pb: 5, mx: 4 }}>
          {/*  */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', verticalAlign: 'middle' }}>
            <Box>
              <Button
                onClick={() => {
                  roomTemp > 1 && setRoomTemp(roomTemp - 1);
                }}
              >
                <Typography variant="h1">-</Typography>
              </Button>
            </Box>
            <Box>
              <Typography variant="h1" color={COLORS.secondary500}>
                {roomTemp}
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  roomTemp < 10 &&
                    selectedMembers.length / roomTemp > 1 &&
                    setRoomTemp(roomTemp + 1);
                }}
              >
                <Typography variant="h1">+</Typography>
              </Button>
            </Box>
          </Box>
          {/*  */}
        </Box>
      </Box>
      <Box>
        <Typography>총 {roomTemp}개의 그룹으로 나누며</Typography>

        {Math.floor(selectedMembers.length / roomTemp) !==
        Math.ceil(selectedMembers.length / roomTemp) ? (
          <Typography>
            하나의 그룹에 약 {Math.floor(selectedMembers.length / roomTemp)} ~{' '}
            {Math.ceil(selectedMembers.length / roomTemp)} 명 씩 나누어져요
          </Typography>
        ) : (
          <Typography>
            하나의 그룹에 약 {Math.floor(selectedMembers.length / roomTemp)} 명 씩 나누어져요
          </Typography>
        )}
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
          onClick={onPrev}
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
