import { useEffect } from 'react';

import { Box, Button, Grid, Stack, Typography, SxProps, Badge } from '@mui/material';
import Card from '../Card';
import { COLORS } from '@/src/theme/palette';
import RandomIcon from '@/src/assets/menu/random_icon';
import BalanceIcon from '@/src/assets/menu/balance_icon';
import { memberType } from '@/src/pages/main/members';

//--------------------------------------------------------------------------

export function SecondStep({ members }: { members: memberType[] }) {
  useEffect(() => {
    console.log(members);
  }, []);

  return (
    <>
      <Box sx={{ px: 2.5 }}>
        <Box sx={{ pt: 3, mb: 2 }}>
          <Typography variant="h4" align="center">
            참여 인원을 선택해주세요
          </Typography>
        </Box>
        <Box sx={{ pb: 5 }}>
          {/*  */}
          {members.map((item, index) => {
            return (
              <>
                <Badge
                  key={index}
                  badgeContent={
                    <Typography
                      variant="badgeLabelMedium"
                      color={item.gender === 'm' ? COLORS.text600 : COLORS.white}
                    >
                      {item.name}
                    </Typography>
                  }
                  sx={{
                    mx: 1,
                    my: 0.5,
                    '& .MuiBadge-badge': {
                      height: 'unset',
                      padding: '6px 8px !important',
                      borderRadius: '14px',
                      background: item.gender === 'm' ? COLORS.primary300 : '#F5BCE9'
                    }
                  }}
                />
              </>
            );
          })}
          {/*  */}
        </Box>
        <Box>
          <Typography variant="h4">
            총{' '}
            <Box component="span" color={COLORS.secondary700}>
              00명
            </Box>
            을 선택했어요
          </Typography>
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
