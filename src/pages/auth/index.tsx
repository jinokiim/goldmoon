import { NextPage } from 'next';
import Button from '@mui/material/Button';

import LayoutMain from '@/src/layouts/main';
import { Box } from '@mui/material';
import useSettings from '@/src/hooks/useSettings';
import { firestore } from '@/src/firebase/clientApp';
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { useEffect } from 'react';

// -----------------------------------------------------------

const IndexPage: NextPage = function () {
  const { headerHeight } = useSettings();

  //   const [votes, votesLoading, votesError] = useCollection(
  // firebase.
  //     );

  // const test = async () => {
  //   const query = await getDocs(collection(firestore, 'members'));
  //   console.log('query@@@@@@', query);
  // };

  // const test1 = async () => {
  //   const entries = await firestore.collection('entries').get();
  // };
  useEffect(() => {
    console.log(firestore);
    // test();
    // test1();
  }, []);
  // useEffect(() => {
  //   // 읽기좋은형식으로 뺴보자 forEach
  //   query.forEach((doc) => {
  //     console.log(doc.id, doc.data());
  //   });
  // }, []);

  return (
    <LayoutMain
      hasNav
      styles={{
        header: {
          height: 56,
          justifyContent: 'center'
        }
      }}
      header={<h1>auth check</h1>}
      content={
        <Box sx={{ px: 2.5, pb: 3, pt: headerHeight === 0 ? 7 : 2.5 }}>
          <h1>하이</h1>
          <Button
            onClick={() => {
              console.log(firestore);
            }}
          >
            @@@
          </Button>
        </Box>
      }
    />
  );
};

export default IndexPage;
