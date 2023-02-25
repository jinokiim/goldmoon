// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, InputBase, InputProps, Paper, Stack, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import _ from 'lodash';
import { isFunction } from 'lodash';

import { useRouter } from 'next/router';
import AppHeader from '@/src/components/Header';
import InfoIcon from '@/src/assets/icons/info_icon';
import { styled, alpha } from '@mui/material/styles';
import { COLORS } from '@/src/theme/palette';
import EmptySearchIcon from '@/src/assets/icons/empty_search_icon';

import { members, membersLastUpdated } from '@/src/data/membersData';
import CheckGreenIcon from '@/src/assets/icons/check_green';
import XIcon from '@/src/assets/icons/x_icon';
import InjuryIcon from '@/src/assets/icons/injury_icon';
import { authState } from '@/src/recoil/atom';
import { useRecoilState } from 'recoil';
import MoveToInit from '@/src/pages/MoveToInit';
import Lottie from 'react-lottie';
import { defaultLoadingOptions } from '@/src/pages';

// ----------------------------------------------------------------------

const getIconByStatus = (status: string) => {
  console.log(status);
  switch (status) {
    case '1':
      return <CheckGreenIcon />;
    case '0':
      return <XIcon />;
    case '부상':
      return <InjuryIcon />;
    default:
      return 'status';
  }
};

const IndexPage = function () {
  const router = useRouter();
  const date = new Date();
  const nowYear = date.getFullYear();
  const nowMonth = date.getMonth() + 1;

  const [authCheck] = useRecoilState(authState);
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState<string>('');
  const [period] = useState({
    attendance: {
      a: {
        year: nowMonth === 1 || nowMonth === 2 ? nowYear - 1 : nowYear,
        month: nowMonth === 1 ? 11 : nowMonth === 2 ? 12 : nowMonth - 2
      },
      b: {
        year: nowMonth === 1 ? nowYear - 1 : nowYear,
        month: nowMonth === 1 ? 12 : nowMonth - 1
      },
      c: { year: nowYear, month: nowMonth }
    },
    membershipFee: {
      a: {
        year: nowMonth === 1 ? nowYear - 1 : nowYear,
        month: nowMonth === 1 ? 12 : nowMonth - 1
      },
      b: { year: nowYear, month: nowMonth },
      c: {
        year: nowMonth === 12 ? nowYear + 1 : nowYear,
        month: nowMonth === 12 ? 1 : nowMonth + 1
      }
    }
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const renderContent = useMemo(() => {
    if (members && members.length > 0) {
      return (
        <>
          {members
            .filter((item) => {
              if (search === null || search === '') {
                return false;
              }
              return item.name === search;
            })
            ?.map((item, index) => (
              <Box key={index} sx={{ px: 2.5 }}>
                <Typography variant="badgeLabelLarge">{membersLastUpdated}를 기준으로</Typography>
                <Typography variant="h4">
                  <Box component="span" sx={{ color: COLORS.secondary700 }}>
                    {item.name}
                  </Box>
                  님의 출석 & 회비 납부 현황이에요
                </Typography>
                <Box sx={{ px: 2, pt: 2 }}>
                  <Box sx={{ pb: 1.5 }}>
                    <Typography variant="h6">출석 현황이에요</Typography>
                    <Paper
                      sx={{
                        background: '#FFFFFF',
                        border: '1px solid #DDE4EE',
                        boxSizing: 'border-box',
                        borderRadius: '12px'
                      }}
                    >
                      <Box sx={{ pt: 1.5, pb: 1.5, px: 2.5 }}>
                        <Stack justifyContent="space-between" alignItems="center" direction="row">
                          <Stack direction="column" alignItems="center">
                            <Typography variant="body1" sx={{ mb: 1 }}>
                              {period.attendance.a.year.toString().slice(2, 4)}년{' '}
                              {period.attendance.a.month}월
                            </Typography>
                            {getIconByStatus(
                              /* @ts-ignore */
                              item.attendance[period.attendance.a.year][
                                period.attendance.a.month - 1
                              ]
                            )}
                          </Stack>
                          <Stack direction="column" alignItems="center">
                            <Typography variant="body1" sx={{ mb: 1 }}>
                              {period.attendance.b.year.toString().slice(2, 4)}년{' '}
                              {period.attendance.b.month}월
                            </Typography>
                            {getIconByStatus(
                              /* @ts-ignore */
                              item.attendance[period.attendance.b.year][
                                period.attendance.b.month - 1
                              ]
                            )}
                          </Stack>
                          <Stack direction="column" alignItems="center">
                            <Typography variant="body1" sx={{ mb: 1 }}>
                              {period.attendance.c.year.toString().slice(2, 4)}년{' '}
                              {period.attendance.c.month}월
                            </Typography>
                            {getIconByStatus(
                              /* @ts-ignore */
                              item.attendance[period.attendance.c.year][
                                period.attendance.c.month - 1
                              ]
                            )}
                          </Stack>
                        </Stack>
                        {
                          /* @ts-ignore */
                          item.attendance[period.attendance.b.year][
                            period.attendance.b.month - 1
                          ] === '0' &&
                            /* @ts-ignore */
                            item.attendance[period.attendance.c.year][
                              period.attendance.c.month - 1
                            ] === '0' && (
                              <>
                                <Box sx={{ textAlign: 'center' }}>
                                  <Typography variant="body2">
                                    저번달에 출석을 하지 않았어요!
                                  </Typography>
                                  <Typography variant="body2">이번달은 꼭 참여해주세요</Typography>
                                </Box>
                              </>
                            )
                        }
                      </Box>
                    </Paper>
                  </Box>
                  <Box>
                    <Typography variant="h6">회비 현황이에요</Typography>
                    <Paper
                      sx={{
                        background: '#FFFFFF',
                        border: '1px solid #DDE4EE',
                        boxSizing: 'border-box',
                        borderRadius: '12px'
                      }}
                    >
                      <Box sx={{ pt: 1.5, pb: 1.5, px: 2.5 }}>
                        <Stack justifyContent="space-between" alignItems="center" direction="row">
                          <Stack direction="column" alignItems="center">
                            <Typography variant="body1" sx={{ mb: 1 }}>
                              {period.membershipFee.a.year.toString().slice(2, 4)}년{' '}
                              {period.membershipFee.a.month}월
                            </Typography>
                            {getIconByStatus(
                              /* @ts-ignore */
                              item.membership_fee[period.membershipFee.a.year][
                                period.membershipFee.a.month - 1
                              ]
                            )}
                          </Stack>
                          <Stack direction="column" alignItems="center">
                            <Typography variant="body1" sx={{ mb: 1 }}>
                              {period.membershipFee.b.year.toString().slice(2, 4)}년{' '}
                              {period.membershipFee.b.month}월
                            </Typography>
                            {getIconByStatus(
                              /* @ts-ignore */
                              item.membership_fee[period.membershipFee.b.year][
                                period.membershipFee.b.month - 1
                              ]
                            )}
                          </Stack>
                          <Stack direction="column" alignItems="center">
                            <Typography variant="body1" sx={{ mb: 1 }}>
                              {period.membershipFee.c.year.toString().slice(2, 4)}년{' '}
                              {period.membershipFee.c.month}월
                            </Typography>
                            {getIconByStatus(
                              /* @ts-ignore */
                              item.membership_fee[period.membershipFee.c.year][
                                period.membershipFee.c.month - 1
                              ]
                            )}
                          </Stack>
                        </Stack>
                        {
                          /* @ts-ignore */
                          item.membership_fee[period.membershipFee.b.year][
                            period.membershipFee.b.month - 1
                          ] === '0' && (
                            <>
                              <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body2">
                                  아직 회비를 납부하지 않았어요!
                                </Typography>
                                <Typography variant="body2">
                                  7일 이전까지 꼭 납부해주세요
                                </Typography>
                              </Box>
                            </>
                          )
                        }
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </Box>
            ))}
        </>
      );
    }
    if (members.length === 0) {
      return (
        <Box sx={{ mt: 15 }}>
          <Typography>회원 데이터가 없어요</Typography>
        </Box>
      );
    }
    return <Box sx={{ mt: 15 }}></Box>;
  }, [search, members]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && authCheck === true ? (
    <Layout
      header={
        <>
          <AppHeader onPrev={() => router.push('/main')} />
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
            <Box sx={{ pb: 2 }}>
              <CommonSearch
                value={search}
                handleChange={handleSearchChange}
                placeholder="이름을 입력해보세요"
                onEmptySearchIconClick={() => setSearch('')}
              />
            </Box>
            <Box sx={{ px: 2.5, mb: 2 }}>
              <Typography variant="h6">
                오늘은 {date.getFullYear()}년 {date.getMonth() + 1}월이에요
              </Typography>
            </Box>
            {renderContent}
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
        <Lottie options={defaultLoadingOptions} height={200} width={200} />
      </Box>
    </>
  ) : (
    <>
      <MoveToInit />
    </>
  );
};

export default IndexPage;

export interface SearchBarProps extends InputProps {
  placeholder: string;
  onIconClick?: () => void;
  onEmptySearchIconClick?: () => void;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: () => void;
  // toSearch?: boolean;
  // from?: 'advisor' | 'investment' | 'payment';
  // searchStyle?: string;
}

function CommonSearch(props: SearchBarProps) {
  const {
    placeholder,
    onIconClick = () => {},
    onEmptySearchIconClick = () => {},
    value,
    handleChange,
    onPressEnter = () => {},
    sx
  } = props;

  return (
    <Box sx={{ mx: 3, ...sx }}>
      <Search>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            width: '100%'
          }}
        >
          <InfoIcon onClick={onIconClick} sx={{ lineHeight: '0' }} />
          <InputBase
            placeholder={placeholder}
            onChange={handleChange}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                onPressEnter();
                ev.preventDefault();
              }
            }}
            value={value}
            sx={{ ml: 1, width: '100%', fontSize: '15px' }}
          />
          {isFunction(onEmptySearchIconClick) && value !== '' && (
            <EmptySearchIcon onClick={onEmptySearchIconClick} sx={{ lineHeight: '0' }} />
          )}
        </Box>
      </Search>
    </Box>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: '#F3F3F5',
  marginLeft: 0,
  padding: '10px 20px',
  height: '48px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  },
  borderColor: `${alpha('#919EAB', 0.24)} !important`
}));
