import useAsync from '../useAsync';

import * as messagesApi from '@/services/messagesApi';

export default function useNewMessage() {
  const {
    loading: postNewMessageLoading,
    error: postNewMessageError,
    act: postNewMessage,
  } = useAsync(messagesApi.postMessage, { immediate: false });

  return {
    postNewMessageLoading,
    postNewMessageError,
    postNewMessage,
  };
}
