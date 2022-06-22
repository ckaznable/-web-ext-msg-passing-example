import { send } from "./messenger"

document.getElementById("open").addEventListener("click", async (e) => {
  send("openTab")
})

document.getElementById("close").addEventListener("click", e => {
  send("closeTab")
})