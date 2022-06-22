import { sendWithResponse } from "./messenger"

// response will be Promise<{result: string}>
sendWithResponse("callApi", {id: 123})
