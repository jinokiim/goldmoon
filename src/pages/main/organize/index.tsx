// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';

import { useRouter } from 'next/router';
import AppHeader from '@/src/components/Header';
import { FirstStep } from '@/src/components/organize/FirstStep';
import { SecondStep } from '@/src/components/organize/SecondStep';
import { memberType } from '../members';
import { members } from '@/src/data/membersData';
import { ThirdStep } from '@/src/components/organize/ThirdStep';
import { FinalStep } from '@/src/components/organize/FinalStep';
import { authState } from '@/src/recoil/atom';
import { useRecoilState } from 'recoil';
import MoveToInit from '../../MoveToInit';
// import Lottie from 'react-lottie';
// import { defaultLoadingOptions } from '@/src/pages';

// ----------------------------------------------------------------------

export interface StepProps {
  value: MyTeamProps;
  onPrev?: () => void;
  onNext: () => void;
  onChange: (data: Partial<MyTeamProps>) => void;
}
export interface MyTeamProps {
  category?: string;
  members: memberType[];
  selectedMembers: string[];
  rooms: number;
}

const IndexPage = function () {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [authCheck] = useRecoilState(authState);

  const [step, setStep] = useState<number>(1);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const [sortedMembers, setSortedMembers] = useState<memberType[]>([]);
  const [myTeam, setMyTeam] = useState<MyTeamProps>({
    category: '',
    members: [],
    selectedMembers: [],
    rooms: 0
  });

  const handleMyTeam = (data: Partial<MyTeamProps>) => {
    setMyTeam((prevState) => ({
      ...prevState,
      ...data
    }));
  };

  const sortMemberDataFunc = (memberData: memberType[]) => {
    const filterByStatus = memberData.filter((member) => member.is_status === 'y');
    const newMembers = filterByStatus.sort((firstObject: memberType, secondObject: memberType) =>
      firstObject.name > secondObject.name ? 1 : -1
    );

    setSortedMembers(newMembers);
    setMounted(true);
  };

  const handlePrevStep = () => {
    setStep((prevState) => --prevState);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSelectedMembers = (member: string) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== member));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  useEffect(() => {
    sortMemberDataFunc(members as memberType[]);
  }, []);

  return mounted && authCheck === true ? (
    <Layout
      header={
        <>
          <AppHeader onPrev={() => router.push('/main')} onPrevText={'그룹 나누기'} />
        </>
      }
      content={
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          {/*  */}
          {step === 1 && (
            <FirstStep value={myTeam} onChange={handleMyTeam} onNext={handleNextStep} />
          )}
          {step === 2 && (
            <SecondStep
              members={sortedMembers}
              value={myTeam}
              selectedMembers={selectedMembers}
              onChange={handleMyTeam}
              handleSelectedMembers={handleSelectedMembers}
              onPrev={handlePrevStep}
              onNext={handleNextStep}
            />
          )}
          {step === 3 && (
            <ThirdStep
              value={myTeam}
              selectedMembers={selectedMembers}
              onChange={handleMyTeam}
              onPrev={handlePrevStep}
              onNext={handleNextStep}
            />
          )}
          {step === 4 && (
            <FinalStep
              value={myTeam}
              selectedMembers={selectedMembers}
              onChange={handleMyTeam}
              onPrev={handlePrevStep}
              onNext={handleNextStep}
            />
          )}
          {/*  */}
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
