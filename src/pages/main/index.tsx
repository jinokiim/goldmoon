// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, ButtonBase, Paper, Stack, SxProps, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';
import { StyledButton } from '@/src/components/common/Styled';
import router, { useRouter } from 'next/router';
import GoldmoonLogo from '@/src/assets/icons/goldmoon_logo';
import RateUpIcon from '@/src/assets/icons/rate_up_dashboard';
import RateDownIcon from '@/src/assets/icons/rate_down_dashboard';
import { COLORS } from '@/src/theme/palette';
import GoldMoonMemberIcon from '@/src/assets/menu/gold_moon_member_icon';
import { financialLastUpdated, financialNow } from '@/src/data/financialData';
import EmptyMenu from '@/src/assets/menu/empty_menu_icon';
import MakeTeam from '@/src/assets/menu/make_team_icon';
// import { formatter } from '../api/function';

import { useRecoilState } from 'recoil';
import { authState } from '@/src/recoil/atom';
import MoveToInit from '../MoveToInit';
import InformationIcon from '@/src/assets/menu/information_icon';

// ----------------------------------------------------------------------

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
const detailMenuStyle: SxProps = {
  width: '33%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: '32px',
  marginTop: '8px'
};

const menuLists = [
  {
    title: '멤버',
    url: 'members',
    icon: (
      <Box className="GoldmoonIcon" sx={{ ...menuIcon }}>
        <GoldMoonMemberIcon />
      </Box>
    )
  },
  {
    title: '팀짜기',
    url: 'organize',
    icon: (
      <Box className="GoldmoonIcon" sx={{ ...menuIcon }}>
        <MakeTeam />
      </Box>
    )
  },
  {
    title: '정산하기',
    url: 'empty',
    icon: (
      <Box className="GoldmoonIcon" sx={{ ...menuIcon }}>
        <EmptyMenu />
      </Box>
    )
  },
  {
    title: '정보',
    url: 'info',
    icon: (
      <Box className="GoldmoonIcon" sx={{ ...menuIcon }}>
        <InformationIcon />
      </Box>
    )
  }
];

const IndexPage = function () {
  const router = useRouter();
  // const date = new Date();

  const [authCheck] = useRecoilState(authState);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && authCheck === true ? (
    <Layout
      header={
        <>
          <Box sx={{ textAlign: 'center', mt: 2.5 }}>
            <GoldmoonLogo
              width={201}
              height={20}
              onClick={() => {
                router.push('/main');
              }}
            />
          </Box>
        </>
      }
      content={
        <Box
          sx={{
            pt: 7,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ height: '100%' }}>
            <Box sx={{ px: 2.5 }}>
              <Box sx={{ mb: 2.5 }}>
                <StyledButton sx={{ fontWeight: 600 }} onClick={() => router.push('/main/notice')}>
                  공 지 사 항
                </StyledButton>
              </Box>

              {/* 자산 */}
              <Box sx={{ mb: 2.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 0.5, px: 0.5 }}>
                  <Typography variant="badgeLabelSmall">{financialLastUpdated} 기준</Typography>
                  <Typography
                    variant="badgeLabelSmall"
                    onClick={() => {
                      router.push('/main/financial/history');
                    }}
                  >
                    어디에 썼을까요? &gt;
                  </Typography>
                </Box>
                <Paper
                  sx={{
                    background: '#FFFFFF',
                    border: '1px solid #DDE4EE',
                    boxSizing: 'border-box',
                    borderRadius: '12px'
                  }}
                >
                  <Box sx={{ px: 2.5, pt: 2, display: 'flex' }}>
                    <Typography variant="h6">골드문 자산</Typography>
                  </Box>
                  <Box sx={{ py: 2, textAlign: 'center' }}>
                    <Typography variant="h4">
                      {Number(financialNow.total).toLocaleString()}원
                    </Typography>
                  </Box>
                  <Box sx={{ pb: 2, px: 2.5 }}>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                      <UpDownPrice state="UP" amount={financialNow.income} />
                      <Box sx={{ mx: 8 }} />
                      <UpDownPrice state="DOWN" amount={financialNow.spending} />
                    </Stack>
                  </Box>
                </Paper>
              </Box>
              {/* 출석 & 회비납부 확인 */}
              <Box sx={{ mb: 4.5 }}>
                <StyledButton
                  sx={{ fontWeight: 600 }}
                  onClick={() => router.push('/main/attendance')}
                >
                  출석 & 회비납부 확인
                </StyledButton>
              </Box>
            </Box>

            <Box
              sx={{
                height: 12,
                backgroundColor: '#F5F6F9',
                mb: 2.5
              }}
            />
            {/* 리스트 메뉴 */}

            <Typography
              variant="h2"
              color={COLORS.secondary700}
              sx={{
                background: COLORS.white,
                height: '38px',
                px: 2.5,
                marginTop: '-1px', //safari issue
                marginBottom: '-1.5px' //safari issue
              }}
            >
              메뉴
            </Typography>
            <Box
              sx={{
                mx: '20px',
                py: 4,
                paddingTop: '24px',
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              {menuBox}
            </Box>
          </Box>
        </Box>
      }
    />
  ) : (
    <>
      <MoveToInit />
    </>
  );
};

const menuBox = menuLists.map((menu, index) => (
  <ButtonBase
    disableRipple
    key={index}
    sx={{
      ...detailMenuStyle,
      '&:hover .MarketIcon': {
        width: 52,
        height: 52,
        backgroundSize: '110%'
      }
    }}
    onClick={() => {
      router.push(`/main/${menu.url}`);
    }}
  >
    <Box
      sx={{
        width: 48,
        height: 48
      }}
    >
      {menu.icon}
    </Box>
    <Typography sx={{ mt: '8px' }} variant="body2" color={COLORS.text600}>
      {menu.title}
    </Typography>
  </ButtonBase>
));

interface upDownPriceProps {
  state: string;
  amount: string;
}

export const UpDownPrice = (props: upDownPriceProps) => {
  const { state, amount } = props;
  return (
    <>
      {state === 'UP' ? <RateUpIcon sx={{ mt: -0.4 }} /> : <RateDownIcon sx={{ mt: -0.4 }} />}
      <Typography
        textAlign="right"
        variant="caption2"
        sx={{
          color: state === 'UP' ? '#FE6D4D' : '#2E9BFF',
          pb: 0.3
        }}
      >
        {Number(amount).toLocaleString()}원
      </Typography>
    </>
  );
};

export default IndexPage;
