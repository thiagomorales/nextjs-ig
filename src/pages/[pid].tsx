import React from 'react';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import Layout from '../components/layout.js';

const ProfilePage = observer(() => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout user={pid}>
      <div>{pid}</div>
    </Layout>
  );
});

export default ProfilePage;
