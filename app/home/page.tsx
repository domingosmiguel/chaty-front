'use client'; // this is a client component

import Conversation from '@/components/Home/Conversation';
import NoConversationSelected from '@/components/Home/NoConversationSelected';
import Sidebar from '@/components/Home/Sidebar';
import { Page } from '@/components/styledComponent';
import userContext from '@/context/userContext';
import { UsersSearch } from '@/services/userApi';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
  const { userData } = useContext(userContext);
  const [recipient, setRecipient] = useState<UsersSearch>();
  const router = useRouter();

  useEffect(() => {
    if (!userData) {
      router.push('/');
    }
  }, [router, userData]);

  return (
    <Page>
      <Sidebar setRecipient={setRecipient} />
      {recipient ? (
        <Conversation recipient={recipient} setRecipient={setRecipient} />
      ) : (
        <NoConversationSelected />
      )}
    </Page>
  );
}
