/* Imports PubNub JavaScript and React SDKs to create and access PubNub instance accross your app. */
/* Imports the required PubNub Chat Components to easily create chat apps with PubNub. */
import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput } from "@pubnub/react-chat-components";

/* Creates and configures your PubNub instance. Be sure to replace "myPublishKey" and "mySubscribeKey"
  with your own keyset. If you wish, modify the default "myFirstUser" uuid value for the chat user. */
const pubnub = new PubNub({
  publishKey: "pub-c-0b794a37-2312-4fd2-b559-3aab4c101c7d",
  subscribeKey: "sub-c-80d9ad54-9ec1-11ec-879a-86a1e6519840",
  uuid: "Iurie Tarlev",
});
const currentChannel = "Default";
const theme = "light";

function App(): JSX.Element {
  return (
    <PubNubProvider client={pubnub}>
      {/* PubNubProvider is a part of the PubNub React SDK and allows you to access PubNub instance
        in components down the tree. */}
      <Chat {...{ currentChannel, theme }}>
        {/* Chat is an obligatory state provider. It allows you to configure some common component
          options, like the current channel and the general theme for the app. */}
        <MessageList />
        <MessageInput />
      </Chat>
    </PubNubProvider>
  );
}

export default App;
