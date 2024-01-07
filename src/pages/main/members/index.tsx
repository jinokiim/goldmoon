// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Badge, Box, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';
import { useRouter } from 'next/router';

import { COLORS } from '@/src/theme/palette';
import dynamic from 'next/dynamic';
import AppHeader from '@/src/components/Header';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from 'apexcharts';
import { members, totalMembers } from '@/src/data/membersData';
import { authState } from '@/src/recoil/atom';
import { useRecoilState } from 'recoil';

import MoveToInit from '../../MoveToInit';
// import Lottie from 'react-lottie';
// import { defaultLoadingOptions } from '@/src/pages';

// ----------------------------------------------------------------------

export interface memberType {
  bird: number;
  id: string;
  name: string;
  gender: string;
  attendance: {
    [key: string]: string[];
  };
  membership_fee: {
    [key: string]: string[];
  };
  reg_date: string;
  withdrawal_date: string;
  birth: string;
  is_status: string;
}

const IndexPage = function () {
  const router = useRouter();

  const date = new Date();

  const [authCheck] = useRecoilState(authState);

  const [mounted, setMounted] = useState(false);
  const [sortedMembers, setSortedMembers] = useState<memberType[] | undefined>(
    members as memberType[] | undefined
  );

  const sortMemberDataFunc = (memberData: memberType[]) => {
    const filterByStatus = memberData?.filter((member) => member.is_status === 'y');
    const newMembers = filterByStatus?.sort((firstObject: memberType, secondObject: memberType) =>
      firstObject.name > secondObject.name ? 1 : -1
    );

    setSortedMembers(newMembers);
    setMounted(true);
  };

  useEffect(() => {
    members !== undefined && sortMemberDataFunc(members as memberType[]);
  }, [members]);

  return mounted && authCheck === true ? (
    <Layout
      header={
        <>
          <AppHeader onPrev={() => router.push('/main')} onPrevText={'골드문 멤버'} />
        </>
      }
      content={
        <Box
          sx={{
            pt: 7,
            px: 2,
            // height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ height: '100%' }}>
            <Box sx={{ px: 2 }}>
              <Typography variant="h5">
                오늘 {date.getFullYear()}년 {date.getMonth() + 1}월 기준
              </Typography>
              <Typography variant="h5">
                골드문 멤버는{' '}
                <Box component="span" color={COLORS.secondary700}>
                  {sortedMembers?.length}
                </Box>
                명 이에요
              </Typography>
            </Box>
            <Box>
              <Chart
                options={options}
                series={state.series}
                type="line"
                width="100%"
                height="150"
              />
            </Box>
            <Box sx={{ p: 2, backgroundColor: COLORS.backgroundDefault, textAlign: 'center' }}>
              {sortedMembers?.map((item, index) => {
                return (
                  <>
                    <Badge
                      key={index}
                      badgeContent={
                        <Typography
                          variant="badgeLabelLarge"
                          color={item.gender === 'm' ? COLORS.text600 : COLORS.white}
                        >
                          {item.name} {item.birth}
                        </Typography>
                      }
                      sx={{
                        mx: 1,
                        my: 0.5,
                        '& .MuiBadge-badge': {
                          height: 'unset',
                          padding: '6px 8px !important',
                          borderRadius: '14px',
                          background: item.gender === 'm' ? COLORS.primary300 : '#F5BCE9'
                        }
                      }}
                    />
                  </>
                );
              })}
            </Box>
          </Box>
        </Box>
      }
    />
  ) : mounted === false && authCheck === true ? (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* <Lottie options={defaultLoadingOptions} height={200} width={200} /> */}
      </Box>
    </>
  ) : (
    <>
      <MoveToInit />
    </>
  );
};

export default IndexPage;

const options: ApexOptions = {
  legend: { show: false, horizontalAlign: 'center', position: 'bottom' },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  chart: {
    id: 'basic-bar',
    toolbar: {
      show: false
    }
  },
  xaxis: {
    tickPlacement: 'between',
    categories: ['23.09', '23.10', '23.11', '23.12', '24.01']
  }
};
const state = {
  series: [
    {
      name: '회원 수',
      data: totalMembers
    }
  ]
};
