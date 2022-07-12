import { listen, listenGroup, MessageHandle, Sender } from "web-ext-msg-passing"

type CustomMessengerHandle = {
  callApi: MessageHandle<{id: number}, {result: string}>;
  openTab: MessageHandle<undefined, undefined>;
  closeTab: MessageHandle<undefined, undefined>;
}

const customSender = new Sender<CustomMessengerHandle>

export const listenCustom = listen<CustomMessengerHandle>
export const listenCustomGroup = listenGroup<CustomMessengerHandle>
export const send = customSender.send
