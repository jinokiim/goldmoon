// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, Paper, Stack, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';
import { StyledButton } from '@/src/components/common/Styled';
import { useRouter } from 'next/router';
import GoldmoonLogo from '@/src/assets/icons/\bgoldmoon_logo';
import RateUpIcon from '@/src/assets/icons/rate_up_dashboard';
import RateDownIcon from '@/src/assets/icons/rate_down_dashboard';

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
              <Box sx={{ my: 2.5 }}>
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
                    <Typography variant="badgeLabelSmall" sx={{ ml: 12 }}>
                      00년 00월 00일 00시 기준
                    </Typography>
                  </Box>
                  <Box sx={{ py: 2, textAlign: 'center' }}>
                    <Typography variant="h4">20,000,000원</Typography>
                  </Box>
                  <Box sx={{ pb: 2, px: 2.5 }}>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                      <UpDownPrice state="UP" text={230000} />
                      <Box sx={{ mx: 8 }} />
                      <UpDownPrice state="DOWN" text={140000} />
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
            </Box>
          </Box>
        }
      />
    )
  );
};

interface upDownPriceProps {
  state: string;
  text: number;
}

export const UpDownPrice = (props: upDownPriceProps) => {
  const { state, text } = props;
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
        {text} 원
      </Typography>
    </>
  );
};

export default IndexPage;
