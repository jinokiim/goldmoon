// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';
import { SxProps, Theme } from '@mui/system';

import { useEffect, useState } from 'react';

import _ from 'lodash';

import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const errMsgStyles = {
  mb: 7,
  px: 2,
  textAlign: 'center',
  wordBreak: 'keep-all'
} as SxProps<Theme>;

const IndexPage = function () {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Layout
        header={<></>}
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
              <Typography>
                📢[ 공지 ] 골드문 필독 공지사항 --------⛳️골드문 규칙⛳️ --------
                {/* 
1. 정모는 매달 2주차 토요일 14시, 4주차 금요일 19시에 스크린골프 후 뒷풀이로 진행합니다.

2. 월 회비는 1만원이며 총무 김진호가 카카오뱅크 골드문 통장으로 투명하게 관리할 예정입니다. 

3. 회비는 정모 스크린비용에 사용하여 정모 참석자들에게 혜택이 돌아가도록 할 예정입니다. 정모 스크린 참가시 1회당 5000원 지원.
예시) 1달에 1번 참여시 5,000원, 2번 참여시 회비에서 10,000원 지원

4. 모임을 나가거나, 강퇴 당하더라도 회비 환불 없습니다.

5. 총무는 회비 면제입니다.

6. 정모 정산은 무조건 N빵 입니다. 인원수가 많은 만큼 누가 늦참인지, 누가 안주랑 술을 안먹었는지 파악하긴 어렵습니다. 늦으실것 같다면 다음 차(2, 3차 등)에 맞춰 오시면 되고 괜찮으시다면 늦더라도 오셔서 참석하신 자리 N빵하시면 됩니다.

7. 정모 외의 벙은 계산 하는 벙주의 재량에 따라 맡기겠습니다.

8. 신규 회원은 가입일로부터 되도록이면 2주 내에  모임에 참석해주세요.

9. 신규 회원은 4주차 정모부터 해당 달 말일까지 모집합니다.

10. 신규회원은 가입달 다음달부터 회비를 납부합니다.
예시) 11월 말 가입 -> 12월 회비부터 납부.

11. 정모 외의 모든 모임은 자유롭게 모집/참석 하셔도 됩니다.

12. 공지사항 및 일정 잘 확인해주세요🙏🏻

-------🌙골드문 강퇴 기준🌙-------

1. 기존 회원 중 2달간 모임에 참여하지 않는 회원 (정모 외 기타 벙들도 가능)
2. 정모 참석여부 투표에 참여하지 않는 회원
3. ⭐️⭐️매달 7일까지 회비를 납부하지 않는 회원(공지가 늦어져 12월부터 시행)
4. 타인에게 불쾌한 언행을 하여 피해를 끼치는 회원

모두에게 본업이 있고 자기 생활이 있다보니 바쁜시기에는 모임에 자주 참여하기 힘들 수 있다고 생각합니다. 개인사정, 건강 문제, 여행, 출장 등등 2달 이상 참여 못하실것 같은분들은 미리 말씀해주시면 참고하겠습니다. 

신규 회원분들 골프 잘 못치셔도 됩니다:) 
부담스러우시다면 식사, 술자리와 같은 친목 목적의 자리도 괜찮고 정모 뒷풀이만 오셔도 됩니다.

-----------⭐️회비 안내⭐️ ---------

월 회비 1만원
💜매달 7일 23:59이전까지
79796168435 카카오뱅크 */}
              </Typography>
            </Box>
          </Box>
        }
      />
    )
  );
};

export default IndexPage;
