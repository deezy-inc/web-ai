import axios from 'axios'

const DEEZY_API = 'https://api.deezy.io/v1/webai'

export type DeezyAIRequest = {
    requestId?: string;
    provider: string;
    api_path: string;
    data: any;
}

export async function sendAndPayRequest(request: DeezyAIRequest) {
    // request.requestId = crypto.randomUUID()
    const data = await axios.post(DEEZY_API, request).catch(async (err) => {
        //console.log(err)
        console.log(err.response.headers)
        console.log(`Expecting 402 here`)

        // TODO: get invoice from header and pay it
        const resp = await axios.post(DEEZY_API, request, { headers: { 'www-authenticate': 'TODO' }})
        console.log(resp.data)
        return resp.data
    })
    return data
}