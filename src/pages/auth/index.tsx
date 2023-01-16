import { NextPage } from 'next';
import Button from '@mui/material/Button';

import LayoutMain from '@/src/layouts/main';
import { Box } from '@mui/material';
import useSettings from '@/src/hooks/useSettings';
// import { firestore } from '@/src/firebase/clientApp';
import { useEffect } from 'react';
// firebase
import { getDatabase, ref, child, get } from 'firebase/database';
import { getApps, initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/src/firebase/clientApp';

// -----------------------------------------------------------

const IndexPage: NextPage = function () {
  const { headerHeight } = useSettings();

  // const fetchPost = async () => {
  //   await getDocs(collection(db, 'votes')).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //   });
  // };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const dbRef = ref(database);
  get(child(dbRef, `members/0`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // const testFunc = async () => {
  //   const querySnapshot = await getDocs(collection(db, 'users'));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  // };

  useEffect(() => {
    console.log(database);

    // testFunc();
  }, []);

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
              // console.log(firestore);
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
