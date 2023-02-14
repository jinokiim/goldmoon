// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, Paper, Stack, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';
import { StyledButton } from '@/src/components/common/Styled';
import { useRouter } from 'next/router';
import GoldmoonLogo from '@/src/assets/icons/goldmoon_logo';
import RateUpIcon from '@/src/assets/icons/rate_up_dashboard';
import RateDownIcon from '@/src/assets/icons/rate_down_dashboard';
import { COLORS } from '@/src/theme/palette';
import GoldMoonMemberIcon from '@/src/assets/icons/gold_moon_member_icon';
import { financialLastUpdated, financialNow } from '@/src/data/financialData';
// import { formatter } from '../api/function';

// ----------------------------------------------------------------------

const IndexPage = function () {
  const router = useRouter();
  // const date = new Date();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
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
              px: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ height: '100%' }}>
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
              <Box sx={{ mb: 2.5 }}>
                <StyledButton
                  sx={{ fontWeight: 600 }}
                  onClick={() => router.push('/main/attendance')}
                >
                  출석 & 회비납부 확인
                </StyledButton>
              </Box>

              {/* 리스트 메뉴 */}
              <Box
                sx={{
                  backgroundColor: COLORS.backgroundDefault,
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{ display: 'flex', alignItems: 'center' }}
                  onClick={() => {
                    router.push('/main/members');
                  }}
                >
                  <GoldMoonMemberIcon />
                  <Typography variant="h6">골드문 멤버 보기</Typography>
                </Box>
              </Box>

              {/*  */}
            </Box>
          </Box>
        }
      />
    )
  );
};

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
