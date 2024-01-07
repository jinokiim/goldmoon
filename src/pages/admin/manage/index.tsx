import { NextPage } from 'next';

import LayoutMain from '@/src/layouts/main';
import { Box, Divider, Typography } from '@mui/material';
import useSettings from '@/src/hooks/useSettings';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';
import animationData from '../../../assets/lotties/loading.json';
import { useEffect, useState } from 'react';
import AppHeader from '@/src/components/Header';
import { memberType } from '../../main/members';
import { members } from '@/src/data/membersData';

export const defaultLoadingOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const IndexPage: NextPage = function () {
  const { headerHeight } = useSettings();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  const date = new Date();
  const thisYear = date.getFullYear().toString();
  const thisMonth = date.getMonth() + 1;
  const fullDate =
    String(thisMonth).length === 2 ? `${thisYear}-${thisMonth}` : `${thisYear}-0${thisMonth}`;

  const [filteredAttendanceThisMonth, setFilteredAttendanceThisMonth] = useState<memberType[]>([]);
  const [filteredAttendanceLastMonth, setFilteredAttendanceLastMonth] = useState<memberType[]>([]);
  const [filteredFeeThisMonth, setFilteredFeeThisMonth] = useState<memberType[]>([]);
  const [filteredFeeLastMonth, setFilteredFeeLastMonth] = useState<memberType[]>([]);

  const filterByMonth = (memberData: memberType[]) => {
    const filterAttendanceByThisMonth = memberData.filter(
      (member) =>
        member.is_status === 'y' &&
        /* @ts-ignore */
        member.attendance[thisYear][thisMonth - 2] === '0' &&
        /* @ts-ignore */
        member.attendance[thisYear][thisMonth - 1] === '0' &&
        member.reg_date !== fullDate
    );
    const filterAttendanceByLastMonth = memberData.filter(
      (member) =>
        member.is_status === 'y' &&
        /* @ts-ignore */
        member.attendance[thisYear][thisMonth - 3] === '0' &&
        /* @ts-ignore */
        member.attendance[thisYear][thisMonth - 2] === '0' &&
        member.reg_date !== fullDate
    );
    const filterFeeByThisMonth = memberData.filter(
      (member) =>
        member.is_status === 'y' &&
        /* @ts-ignore */
        member.membership_fee[thisYear][thisMonth - 1] === '0'
      /* @ts-ignore */
    );
    const filterFeeByLastMonth = memberData.filter(
      (member) =>
        member.is_status === 'y' &&
        /* @ts-ignore */
        member.membership_fee[thisYear][thisMonth - 2] === '0'
      /* @ts-ignore */
    );

    setFilteredAttendanceThisMonth(filterAttendanceByThisMonth);
    setFilteredAttendanceLastMonth(filterAttendanceByLastMonth);
    setFilteredFeeThisMonth(filterFeeByThisMonth);
    setFilteredFeeLastMonth(filterFeeByLastMonth);
    setMounted(true);
  };

  useEffect(() => {
    filterByMonth(members as memberType[]);
  }, []);

  return mounted === true ? (
    <LayoutMain
      hasNav
      styles={{
        header: {
          height: 56,
          justifyContent: 'center'
        }
      }}
      header={
        <>
          <AppHeader onPrev={() => router.push('/main')} onPrevText={'회원 출석 납부 현황'} />
        </>
      }
      content={
        <>
          <Box sx={{ px: 2.5, pb: 3, pt: headerHeight === 0 ? 7 : 2.5 }}>
            <Box>
              <Typography variant="h6">{thisMonth}월 기준</Typography>
              <Typography variant="h6">출석 관련 강퇴 명단</Typography>
              {filteredAttendanceThisMonth.map((item, index) => (
                <>
                  <Box key={index} component="span">
                    {item.name}{' '}
                  </Box>
                </>
              ))}
            </Box>
            <Box>
              <Typography variant="h6">회비 관련 강퇴 명단</Typography>
              {filteredFeeThisMonth.map((item, index) => (
                <>
                  <Box key={index} component="span">
                    {item.name}{' '}
                  </Box>
                </>
              ))}
            </Box>
            <Divider />
            <Box>
              <Typography variant="h6">{thisMonth - 1}월 기준</Typography>
              <Typography variant="h6">출석 관련 강퇴 명단</Typography>
              {filteredAttendanceLastMonth.map((item, index) => (
                <>
                  <Box key={index} component="span">
                    {item.name}{' '}
                  </Box>
                </>
              ))}
            </Box>
            <Box>
              <Typography variant="h6">회비 관련 강퇴 명단</Typography>
              {filteredFeeLastMonth.map((item, index) => (
                <>
                  <Box key={index} component="span">
                    {item.name}{' '}
                  </Box>
                </>
              ))}
            </Box>
          </Box>
        </>
      }
    />
  ) : (
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
  );
};

export default IndexPage;
