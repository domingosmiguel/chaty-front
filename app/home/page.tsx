'use client'; // this is a client component

import Conversation from '@/components/Home/Conversation';
import NoConversationSelected from '@/components/Home/NoConversationSelected';
import Sidebar from '@/components/Home/Sidebar';
import { Page } from '@/components/styledComponent';
import userContext from '@/context/userContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
  const { userData } = useContext(userContext);
  const [noData, setNoData] = useState(
    !userData || Object.keys(userData).length === 0
  );
  const [entityId, setEntityId] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setNoData(!userData || Object.keys(userData).length === 0);
  }, [userData]);

  if (noData) {
    router.push('/');
  }

  return (
    <Page>
      <Sidebar setEntityId={setEntityId} />
      {entityId ? (
        <Conversation recipientId={entityId} />
      ) : (
        <NoConversationSelected />
      )}
    </Page>
  );
}
