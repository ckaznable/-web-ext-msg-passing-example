import { sendWithResponse, installListener, listen } from "web-ext-msg-passing"

(async () => {
  // listen content event
  installListener()
  listen("getContentHtml", (_, reply) => {
    console.log("getContentHtml")
    reply(document.documentElement.innerHTML)
  })

  // get data from bg
  console.log(await sendWithResponse("get google html"))
})()
