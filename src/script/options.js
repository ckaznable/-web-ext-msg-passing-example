import { send } from "web-ext-msg-passing"

document.getElementById("open").addEventListener("click", async (e) => {
  send("openTab")
})

document.getElementById("close").addEventListener("click", e => {
  send("closeTab")
})