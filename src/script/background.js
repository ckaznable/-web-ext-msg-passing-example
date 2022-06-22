import { listen, listenGroup, installListener } from "web-ext-msg-passing"

installListener()

listen("get google html", async (_, reply) => {
  reply(await fetch("https://www.google.com/").then(res => res.text()))
})

listenGroup({
  openTab(_) {
    chrome.tabs.create({}, tabs => {
      chrome.storage.local.set({
        tabid: tabs.id
      })
    })
  },
  ["closeTab"](tabid) {
    chrome.storage.local.get(["tabid"], res => {
      res.tabid && chrome.tabs.remove(res.tabid)
    })
  }
})
