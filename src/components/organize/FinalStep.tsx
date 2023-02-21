import { useEffect, useState } from 'react';

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Card from '../Card';
import { COLORS } from '@/src/theme/palette';
import { MyTeamProps } from '@/src/pages/main/organize';
import { useRouter } from 'next/router';
// import { memberType } from '@/src/pages/main/members';

//--------------------------------------------------------------------------
interface memberType {
  name: string;
  bird: number;
}
export function FinalStep({
  value,
  selectedMembers,
  onPrev
}: {
  value: MyTeamProps;
  selectedMembers: string[];

  onPrev?: () => void;
  onNext?: () => void;
  onChange: (data: Partial<MyTeamProps>) => void;
}) {
  const router = useRouter();

  const [organize, setOrganize] = useState<string[][]>();

  // ----------- 랜덤모드
  const randomMode = (selectedMembers: string[], rooms: number) => {
    const shuffledMembers = selectedMembers.sort(() => Math.random() - 0.5);

    const subarrays: string[][] = [];
    const chunkSize: number = Math.ceil(selectedMembers.length / rooms);
    let startIndex = 0;
    for (let i = 0; i < rooms; i++) {
      const endIndex = Math.min(startIndex + chunkSize, selectedMembers.length);
      subarrays.push(shuffledMembers.slice(startIndex, endIndex));
      startIndex = endIndex;
    }

    while (startIndex < selectedMembers.length) {
      const index = Math.floor(Math.random() * subarrays.length);
      subarrays[index].push(shuffledMembers[startIndex]);
      startIndex++;
    }

    return subarrays;
  };
  const subarrays = randomMode(selectedMembers, value.rooms);

  // -------------- 밸런스 모드
  function groupByBirdCount(members: memberType[], rooms: number) {
    const birdOne: string[] = [];
    const birdTwo: string[] = [];
    const birdThree: string[] = [];
    const birdFour: string[] = [];
    const birdFive: string[] = [];

    for (const member of members) {
      const birdCount = member.bird;
      switch (birdCount) {
        case 1:
          birdOne.push(member.name);
          break;
        case 2:
          birdTwo.push(member.name);
          break;
        case 3:
          birdThree.push(member.name);
          break;
        case 4:
          birdFour.push(member.name);
          break;
        case 5:
          birdFive.push(member.name);
          break;
        default:
          console.log(`Member ${member.name} has an invalid bird count: ${birdCount}`);
          break;
      }
    }

    shuffle(birdOne);
    shuffle(birdTwo);
    shuffle(birdThree);
    shuffle(birdFour);
    shuffle(birdFive);

    const birdUnion: string[] = birdFive.concat(birdFour, birdThree, birdTwo, birdOne);

    const groups = Array.from({ length: rooms }, () => []);

    birdUnion.forEach((element: any, index) => {
      const groupIndex = index % rooms;
      /* @ts-ignore */
      groups[groupIndex].push(element);
    });

    return groups;
  }

  useEffect(() => {
    value.category === 'random'
      ? setOrganize(randomMode(selectedMembers, value.rooms))
      : setOrganize(groupByBirdCount(value.members, value.rooms));
  }, [value]);

  return (
    <>
      <Box sx={{ px: 2.5 }}>
        <Box sx={{ pt: 3, mb: 2 }}>
          <Typography variant="h6" align="center">
            {selectedMembers.length}명의 인원을 {value.rooms}개의 그룹으로 나누었어요
          </Typography>
        </Box>
        <Box sx={{ pb: 5, mx: 2 }}>
          {/*  */}
          <Grid container spacing={3}>
            {/*  */}

            {organize?.map((item, index) => {
              return (
                <>
                  <Grid item xs={6} key={index}>
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
                            {index + 1}
                          </Typography>
                          {item.map((item, index) => {
                            return (
                              <>
                                <Box key={index}>
                                  <Typography variant="h6">{item}</Typography>
                                </Box>
                              </>
                            );
                          })}
                        </Stack>
                      </Card>
                    </Box>
                  </Grid>
                </>
              );
            })}

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
          onClick={onPrev}
        >
          이전
        </Button>
        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ flex: 4 }}
          onClick={() => router.push('/main')}
        >
          확인, 메인으로 돌아가기
        </Button>
      </Stack>
    </>
  );
}

function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
