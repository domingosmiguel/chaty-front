import api from './api';

export async function getLastFromEachChat(
  token: string | undefined
): Promise<ChatSample[]> {
  const response = await api.get('/messages', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getAllFromOneChat(
  token: string | undefined,
  recipientId: number | undefined
): Promise<FullChatData> {
  const response = await api.get(`/messages/${recipientId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postMessage(
  token: string | undefined,
  text: string,
  recipientId: number
): Promise<void> {
  const body = { text };

  await api.post(`/messages/${recipientId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export type ChatSample = {
  entityId: number;
  entityImg: string;
  entityUsername: string;
  message: Message & { createdAt: Date };
};

export type FullChatData = {
  entityId: number;
  entityImg: string;
  entityUsername: string;
  messages: Message[];
};

export type Message = {
  id: number;
  text: string;
  from: number;
};
