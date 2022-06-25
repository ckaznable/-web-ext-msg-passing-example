import { send, sendToContent } from "web-ext-msg-passing"

document.getElementById("open").addEventListener("click", () => {
  send("openTab")
})

document.getElementById("close").addEventListener("click", () => {
  send("closeTab")
})

document.getElementById("tstc").addEventListener("click", async () => {
  console.log(await sendToContent("getContentHtml"))
})