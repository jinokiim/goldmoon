import { useEffect, useState } from 'react';

import { Box, Button, Grid, Stack, Typography, SxProps, Badge } from '@mui/material';
import Card from '../Card';
import { COLORS } from '@/src/theme/palette';
import RandomIcon from '@/src/assets/menu/random_icon';
import BalanceIcon from '@/src/assets/menu/balance_icon';
import { memberType } from '@/src/pages/main/members';
import { MyTeamProps } from '@/src/pages/main/organize';

//--------------------------------------------------------------------------

export function SecondStep({
  members,
  value,
  selectedMembers,
  onChange,
  handleSelectedMembers,
  onPrev,
  onNext
}: {
  members: memberType[];
  value: MyTeamProps;
  selectedMembers: string[];
  onPrev?: () => void;
  onNext?: () => void;
  onChange: (data: Partial<MyTeamProps>) => void;
  handleSelectedMembers: (data: string) => void;
}) {
  const filteredMembers = members.filter((member) => selectedMembers.includes(member.name));

  useEffect(() => {
    console.log(value);
  }, [filteredMembers]);

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
                      color={
                        item.gender === 'm' && selectedMembers.indexOf(item.name) !== -1
                          ? COLORS.text600
                          : item.gender === 'f' && selectedMembers.indexOf(item.name) !== -1
                          ? COLORS.white
                          : COLORS.black
                      }
                    >
                      {item.name}
                    </Typography>
                  }
                  onClick={() => {
                    handleSelectedMembers(item.name);
                    console.log(item);
                    console.log('selectedMembers', selectedMembers);
                    console.log(selectedMembers.includes(item.name));
                  }}
                  sx={{
                    mx: 1,
                    my: 0.5,
                    '& .MuiBadge-badge': {
                      height: 'unset',
                      padding: '6px 8px !important',
                      borderRadius: '14px',
                      background:
                        item.gender === 'm' && selectedMembers.indexOf(item.name) !== -1
                          ? COLORS.primary300
                          : item.gender === 'f' && selectedMembers.indexOf(item.name) !== -1
                          ? '#F5BCE9'
                          : COLORS.backgroundDefault
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
              {selectedMembers.length}명
            </Box>
            을 선택했어요
          </Typography>
          <button
            onClick={() => {
              console.log(selectedMembers);
              console.log('filteredMembers', filteredMembers);
              console.log(value);
            }}
          >
            @@@
          </button>
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
              members: filteredMembers
            });
            console.log('value', value);
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
