import { sendWithResponse } from "web-ext-msg-passing"

(async () => {
  console.log(await sendWithResponse("get google html"))
})()