// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, ListItem, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';

import { COLORS } from '@/src/theme/palette';
import { useRouter } from 'next/router';
import { StyledButton } from '@/src/components/common/Styled';
import AppHeader from '@/src/components/Header';

// ----------------------------------------------------------------------

const IndexPage = function () {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Layout
        header={
          <>
            <AppHeader onPrev={() => router.push('/main')} onPrevText={'공지사항'} />
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
              <Box sx={{ my: 2 }}>
                <Typography variant="h2">골드문 공지사항</Typography>
              </Box>
              <Box>
                <MainNotice />
              </Box>

              <Box sx={{ mb: 2.5 }}>
                <StyledButton sx={{ fontWeight: 600 }} onClick={() => router.push('/main')}>
                  확인했습니다 👍 메인으로 이동
                </StyledButton>
              </Box>
            </Box>
          </Box>
        }
      />
    )
  );
};

export default IndexPage;

const MainNotice = () => {
  return (
    <>
      {/* 1 */}
      <Box sx={{ mt: 2, mb: 5.5 }}>
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="h6" fontWeight="700">
            <Box component="span" sx={{ color: COLORS.secondary500, fontWeight: 900 }}>
              규칙
            </Box>
            에 대해 알려드려요
          </Typography>
        </Box>
        <Box sx={{ color: '#4E5968' }}>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              신규 회원은 가입일로부터 되도록이면 2주 내에 모임에 참석해주세요
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              신규 회원분들 골프 잘 못치셔도 됩니다 😄 비슷한 사람들 많아요! 부담스러우시다면 식사,
              술자리와 같은 친목 목적의 자리도 괜찮고 정모 뒷풀이만 오셔도 되어요
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              월 회비는 1만원이며 총무 김진호가 카카오뱅크 골드문 통장으로 투명하게 관리하고 있어요
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              정모 외의 벙은 벙주의 재량으로 정산해 주세요
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              신규 회원은 4주차 정모부터 해당 달 말일까지 모집합니다
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              이벤트 관련해서 자유롭게 의견 주시면 반영할게요! 기다리고 있습니다.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              공지사항 및 일정 잘 확인해주세요🙏🏻
            </Typography>
          </ListItem>
        </Box>
      </Box>
      {/* 2 */}
      <Box sx={{ mt: 2, mb: 5.5 }}>
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="h6">
            <Box component="span" sx={{ color: COLORS.secondary500, fontWeight: 900 }}>
              정모에
            </Box>{' '}
            관한 내용이에요
          </Typography>
        </Box>
        <Box sx={{ color: '#4E5968' }}>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              매달 2주차 토요일 14시, 4주차 금요일 19시에 스크린골프를 진행해요
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              끝나고 뒤풀이도 있으니 많은 참석 바랍니다
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              정모에 참여하면 스크린 가격에서 5천원을 지원해드려요(한달 최대 만원)
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              뒤풀이 정산은 무조건 1/n 으로 나눌게요. 인원이 많은 만큼 늦게 온사람, 누가 안주랑 술을
              안먹었는지 파악하기 어려워요.
            </Typography>
          </ListItem>
        </Box>
      </Box>
      {/* 3 */}
      <Box sx={{ mt: 2, mb: 5.5 }}>
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="h6">
            <Box component="span" sx={{ color: COLORS.secondary500, fontWeight: 900 }}>
              회비
            </Box>
            에 관한 내용이에요
          </Typography>
        </Box>
        <Box sx={{ color: '#4E5968' }}>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              월 회비는 만원이고 매달 7일 23:59이전까지 보내주세요
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              79796168435 카카오뱅크 김진호 로 입급해주세요
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              모임을 나가거나, 강퇴 당하더라도 회비 환불해주지 않아요
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              총무는 회비 면제에요
            </Typography>
          </ListItem>
        </Box>
      </Box>
      {/* 4 */}
      <Box sx={{ mt: 2, mb: 5.5 }}>
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="h6">
            다음은{' '}
            <Box component="span" sx={{ color: COLORS.secondary500, fontWeight: 900 }}>
              강퇴
            </Box>{' '}
            기준이에요
          </Typography>
        </Box>
        <Box sx={{ color: '#4E5968' }}>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              기존 회원 중 두 달 연속 모임에 참여하지 않는 회원 (정모 이외에 다른 벙에 참여해도
              괜찮아요!)
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              정모 참석 투표에 참석하지 않은 회원
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              매달 7일까지 회비를 납부하지 않는 회원
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              타인에게 불쾌한 언행을 하여 피해를 끼치는 회원
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              개인사정, 건강 문제, 여행, 출장 등 두 달 이상 참여 못 하실것 같은 분 들은 미리
              말씀해주세요
            </Typography>
          </ListItem>
        </Box>
      </Box>
    </>
  );
};
