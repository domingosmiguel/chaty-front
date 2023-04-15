import useAsync from '../useAsync';

import * as messagesApi from '@/services/messagesApi';

export default function useConversations(token: string | undefined) {
  const {
    data: conversations,
    loading: conversationsLoading,
    error: conversationsError,
    act: getConversations,
  } = useAsync(() => messagesApi.getLastFromEachChat(token));

  return {
    conversations,
    conversationsLoading,
    conversationsError,
    getConversations,
  };
}
