
import React from "react";
import { getMessagesFromRepo } from "../service/ChatService";
import { chatRepo } from "../repo/chatRepo";
import ChatPresenter from "../ui/ChatPresenter";

export default function ChatContainer() {
  const messages = getMessagesFromRepo(chatRepo);
  return <ChatPresenter messages={messages} />;
}
