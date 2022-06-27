import { sendWithResponse, installListener, listen, UnionSender } from "web-ext-msg-passing"

/** @type {UnionSender} */
const unionSender = new UnionSender(["browser", "api"])

;(async () => {
  // listen content event
  installListener()
  listen("getContentHtml", (_, reply) => {
    reply(document.documentElement.innerHTML)
  })

  // get data from bg
  console.log("google html:", await sendWithResponse("get google html"))
  // get data from bg with namespace
  console.log("github html:", await unionSender.sendWithResponse("api", "getGithubHtml"))
  console.log("current tab id:", await unionSender.sendWithResponse("browser", "getCurrentTabId"))
  console.log("current window id:", await unionSender.sendWithResponse("browser", "getCurrentWindowId"))
})()
