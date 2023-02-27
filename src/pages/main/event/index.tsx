// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, Divider, Stack, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';

import { COLORS } from '@/src/theme/palette';
import { useRouter } from 'next/router';
import { StyledButton } from '@/src/components/common/Styled';
import AppHeader from '@/src/components/Header';
import Event001 from '@/src/components/events/Event001';

// ----------------------------------------------------------------------

const IndexPage = function () {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [listMode, setListMode] = useState<boolean>(true);
  const [eventDetailMode, setEventDetailMode] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
    console.log('listMode', listMode);
    console.log('eventDetailMode', eventDetailMode);
  }, [listMode, eventDetailMode]);

  return (
    mounted && (
      <Layout
        header={
          <>
            <AppHeader onPrev={() => router.push('/main')} onPrevText={'이벤트'} />
          </>
        }
        content={
          <Box
            sx={{
              pt: 7,
              px: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              wordBreak: 'keep-all'
            }}
          >
            <Box sx={{ height: '100%', px: 1 }}>
              {listMode && (
                <>
                  <Box sx={{ my: 2 }}>
                    <Typography variant="h2">골드문 이벤트</Typography>
                    <Typography variant="h6">
                      관심있는 이벤트를 클릭하면 세부내용이 나와요
                    </Typography>
                  </Box>
                  <Box>
                    {eventLists?.map(
                      (item, index) =>
                        item.id !== 0 && (
                          <>
                            <Box key={index}>
                              <Stack
                                key={index}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                onClick={() => {
                                  setListMode(false);
                                  setEventDetailMode(item.id);
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 400,
                                    maxWidth: 200,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap'
                                  }}
                                  textOverflow="ellipsis"
                                >
                                  {item.state === 'y' ? '(진행예정)' : '(종료)'}
                                </Typography>
                                <Typography
                                  variant="h4"
                                  //@ts-ignore
                                  sx={{
                                    fontWeight: item.state === 'y' ? 600 : 400,
                                    color:
                                      item.state === 'y' ? COLORS.secondary700 : COLORS.text900,
                                    textDecoration: item.state === 'n' && 'line-through'
                                  }}
                                >
                                  {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: COLORS.text600 }}>
                                  {item.year}년 {item.month}월 {item.day}일
                                </Typography>
                              </Stack>
                              <Divider sx={{ my: 2 }} />
                            </Box>
                          </>
                        )
                    )}
                  </Box>
                </>
              )}
              {eventLists[eventDetailMode].component}

              {eventDetailMode !== 0 && (
                <>
                  <Box sx={{ mb: 2.5 }}>
                    <StyledButton
                      sx={{ fontWeight: 600 }}
                      onClick={() => {
                        setEventDetailMode(0);
                        setListMode(true);
                      }}
                    >
                      확인했습니다 👍 이벤트 목록으로 이동
                    </StyledButton>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        }
      />
    )
  );
};

export default IndexPage;

const eventLists = [
  {
    id: 0,
    title: '',
    year: '',
    month: '',
    day: '',
    state: '',
    component: <Box></Box>
  },
  {
    id: 1,
    title: '새대전',
    year: '23',
    month: '03',
    day: '11',
    state: 'y',
    component: (
      <Box>
        <Event001 />
      </Box>
    )
  }
];
