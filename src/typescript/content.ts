import { send } from "./messenger"

// response will be Promise<{result: string}>
send("callApi", {id: 123})
