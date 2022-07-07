import { send, installListener, listen, UnionSender } from "web-ext-msg-passing"

/** @type {UnionSender} */
const unionSender = new UnionSender(["browser", "api"])

;(async () => {
  // listen content event
  installListener()
  listen("getContentHtml", (_, reply) => {
    console.log("get request get content html")
    reply(document.documentElement.innerHTML)
  })

  // get data from bg
  console.log("google html:", await send("get google html"))
  // get data from bg with namespace
  console.log("github html:", await unionSender.send("api", "getGithubHtml"))
  console.log("current tab id:", await unionSender.send("browser", "getCurrentTabId"))
  console.log("current window id:", await unionSender.send("browser", "getCurrentWindowId"))
})()
