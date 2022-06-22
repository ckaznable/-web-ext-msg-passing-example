import { installListener } from "web-ext-msg-passing"
import { listenCustomGroup } from "./messenger"

installListener()

listenCustomGroup({
  // data type is {id: number}
  callApi(data, reply) {
    // do something...
    reply({result: ""})
  },
  openTab() {
    chrome.tabs.create({}, tabs => {
      chrome.storage.local.set({
        tabid: tabs.id
      })
    })
  },
  closeTab() {
    chrome.storage.local.get(["tabid"], res => {
      res.tabid && chrome.tabs.remove(res.tabid)
    })
  }
})