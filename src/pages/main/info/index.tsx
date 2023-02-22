// import { NextPage } from 'next';

import Layout from '@/src/layouts/main';
import { Box, Divider, Typography } from '@mui/material';

import { useEffect, useState } from 'react';

import _ from 'lodash';
import { useRouter } from 'next/router';
import AppHeader from '@/src/components/Header';
import { COLORS } from '@/src/theme/palette';

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
            <AppHeader onPrev={() => router.push('/main')} onPrevText={'정보'} />
          </>
        }
        content={
          <Box sx={{ pt: 3 }}>
            <Box sx={{ p: 2.5, backgroundColor: COLORS.neutral2 }}>
              <Box sx={{ pt: 3 }}>
                <Typography sx={{ fontSize: '17px', fontWeight: 600 }}>
                  골드문 홈페이지에 관한 정보
                </Typography>

                <Typography sx={{ fontSize: '13px', color: COLORS.error }}>
                  본 사이트는 모바일 화면에 최적화 되어있습니다.
                </Typography>
                <Divider sx={{ my: 1, mx: -2 }} />
                <Box sx={{ mb: 2 }}>
                  <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                    본인이 이용하는 웹사이트는 아래 정보들을 수집하고 있습니다.
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: COLORS.neutral6 }}>
                    이름, 성별, 생년, 출석정보, 회비입금 정보, 가입일, 탈퇴일.
                  </Typography>
                  <Typography sx={{ mb: 0.5, fontSize: '13px', color: COLORS.neutral6 }}>
                    휴대 전화번호는 수집 및 저장하고 있지 않습니다.
                  </Typography>

                  <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                    이용목적
                  </Typography>
                  <Box sx={{ pl: 2 }}>
                    <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                      1. 서비스 이용현황 통계분석 및 활용
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                      2. 서비스 품질 개선을 위한 연구 분석 등
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                      3. 서비스 제공
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                      4. 서비스 개선 및 신규서비스 개발
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                      5. 서비스 관련 공지사항 전달
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                    개인정보의 보유 및 이용기간
                  </Typography>
                  <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                    1. 서비스가 종료되는 시점까지 회원의 개인정보를 처리 및 보유합니다.
                  </Typography>
                  <Typography sx={{ fontSize: '14px', color: COLORS.neutral6 }}>
                    2. 본인은 개인정보의 수집 및 이용에 동의하지 아니할 수 있습니다. 다만 본인이
                    개인정보 수집 및 이용에 동의하지 않는 경우 서비스 이용에 제한이 있을 수
                    있습니다.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        }
      />
    )
  );
};

export default IndexPage;
