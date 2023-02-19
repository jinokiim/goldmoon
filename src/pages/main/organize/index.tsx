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

// ----------------------------------------------------------------------

export interface StepProps {
  value: MyTeamProps;
  onPrev?: () => void;
  onNext?: () => void;
  onChange?: (data: Partial<MyTeamProps>) => void;
}
export interface MyTeamProps {
  category?: string;
  members: string;
  rooms?: number;
}

const IndexPage = function () {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const [step, setStep] = useState(1);

  const [sortedMembers, setSortedMembers] = useState<memberType[]>([]);
  const [myTeam, setMyTeam] = useState<MyTeamProps>({
    category: '',
    members: '',
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
    setStep((prevState) => ++prevState);
  };

  useEffect(() => {
    sortMemberDataFunc(members);
  }, []);

  return (
    mounted && (
      <Layout
        header={
          <>
            <AppHeader onPrev={() => router.push('/main')} onPrevText={'방 나누기'} />
          </>
        }
        content={
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            {/*  */}
            {step === 1 && (
              <FirstStep value={myTeam} onChange={handleMyTeam} onNext={handleNextStep} />
            )}
            {step === 2 && <SecondStep members={sortedMembers} />}
            {step === 3 && <ThirdStep />}
            {step === 4 && <FinalStep />}
            {/*  */}
          </Box>
        }
      />
    )
  );
};

export default IndexPage;
