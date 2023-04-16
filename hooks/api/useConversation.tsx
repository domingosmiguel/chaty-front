import useAsync from '../useAsync';

import * as messagesApi from '@/services/messagesApi';

export default function useConversation(
  token: string | undefined,
  recipientId: number | undefined
) {
  const {
    data: conversation,
    loading: conversationLoading,
    error: conversationError,
    act: getConversation,
  } = useAsync(() => messagesApi.getAllFromOneChat(token, recipientId));

  return {
    conversation,
    conversationLoading,
    conversationError,
    getConversation,
  };
}
