// import { NextPage } from 'next';

// import Button from '@mui/material/Button';

import { Box, ListItem, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect } from 'react';

import _ from 'lodash';

import { COLORS } from '@/src/theme/palette';

// ----------------------------------------------------------------------

const Event001 = () => {
  useEffect(() => {}, []);

  return (
    <>
      {/* 1 */}
      <Box sx={{ mt: 2, mb: 5.5 }}>
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="h4" fontWeight="700">
            <Box component="span" sx={{ color: COLORS.secondary700, fontWeight: 900 }}>
              새대전
            </Box>
          </Typography>
        </Box>
        <Box sx={{ color: '#4E5968' }}>
          <Box sx={{ textAlign: 'center' }}>
            <img
              src="/static/img/eventImg/001/event001_main.jpeg"
              alt="bird-fighting"
              width={300}
            />
          </Box>

          <Typography variant="h7" fontWeight="350" color="#4E5968">
            안녕하세요.
          </Typography>
          <br />
          <Typography variant="h7" fontWeight="350" color="#4E5968">
            따듯한 3월의 봄을 맞아 회원님들을 위해 준비한 이벤트가 3/11(토) 진행됩니다~
            <br />
            많은 관심과 참여를 부탁드립니다!
          </Typography>

          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              시간 : 23년 3월 11일(토) 14시
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              장소 : 미정 / 골프존
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              대상 : 3월 회비를 낸 회원
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              참여방법 : 참여 희망 회원은, golfzon 어플에 나온 자신의 새 등급을 골드문 단체 카톡방에
              투표
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/static/img/eventImg/001/how-to-join.jpeg" alt="how-to-join" width={300} />
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0, my: 1 }}>
            <Typography variant="h7" fontWeight="350" color="#4E5968">
              상품 <br />
              각 새 등급의
              <br />
              1등 : <br />
              2등 : <br />
              3등 : <br />
              4등 : <br />
            </Typography>
            <Typography variant="body2" fontWeight="350" color="#4E5968">
              * 같은 등급의 참여인원이 많을경우 상품이 추가될 수 있음
            </Typography>
          </ListItem>
        </Box>
      </Box>
    </>
  );
};

export default Event001;
