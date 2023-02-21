import { useEffect, useState } from 'react';

import { Box, Button, Card, Paper, Stack, Typography } from '@mui/material';
import { COLORS } from '@/src/theme/palette';
import { MyTeamProps } from '@/src/pages/main/organize';

//--------------------------------------------------------------------------

export function ThirdStep({
  value,
  selectedMembers,
  onChange,
  onNext,
  onPrev
}: {
  value: MyTeamProps;
  selectedMembers: string[];

  onPrev?: () => void;
  onNext?: () => void;
  onChange: (data: Partial<MyTeamProps>) => void;
}) {
  const [roomTemp, setRoomTemp] = useState<number>(1);

  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ px: 2.5 }}>
        <Box sx={{ pt: 3, mb: 2 }}>
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

          <Box sx={{ my: 2.5 }}>
            <Box sx={{ wordBreak: 'keep-all' }}>
              <Paper
                sx={{
                  p: 2,
                  background: '#FFFFFF',
                  border: '1px solid #DDE4EE',
                  boxSizing: 'border-box',
                  borderRadius: '12px'
                }}
              >
                <Typography variant="h6">
                  {selectedMembers.map((item, index) => {
                    return (
                      <>
                        <Box component="span" sx={{ mx: 0.5 }}>
                          {item}
                          {'  '}
                        </Box>
                      </>
                    );
                  })}
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ mt: 2, mb: 1 }}>
              <Typography variant="h6">총 {roomTemp}개의 그룹으로 나누며</Typography>
            </Box>

            {Math.floor(selectedMembers.length / roomTemp) !==
            Math.ceil(selectedMembers.length / roomTemp) ? (
              <Typography variant="h5">
                하나의 그룹에 약{' '}
                <Box component="span" sx={{ color: COLORS.secondary700 }}>
                  {Math.floor(selectedMembers.length / roomTemp)} ~{' '}
                  {Math.ceil(selectedMembers.length / roomTemp)}
                </Box>{' '}
                명 씩 나누어져요
              </Typography>
            ) : (
              <Typography variant="h5">
                하나의 그룹에{' '}
                <Box component="span" sx={{ color: COLORS.secondary700 }}>
                  {Math.floor(selectedMembers.length / roomTemp)}{' '}
                </Box>
                명 씩 나누어져요
              </Typography>
            )}
          </Box>
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
          onClick={onPrev}
        >
          이전
        </Button>
        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ flex: 4 }}
          onClick={() => {
            onChange({
              rooms: roomTemp
            });
            /* @ts-ignore */
            onNext();
          }}
        >
          다음
        </Button>
      </Stack>
    </>
  );
}
