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
        const bolt11Invoice = err.response.headers['bolt11-auth']
        console.log('Sending payment')
        
        await window.webln.sendPayment(bolt11Invoice)
        const resp = await axios.post(DEEZY_API, request, { headers: { 'bolt11-auth': bolt11Invoice }})
        console.log(resp.data)
        return resp.data
    })
    return data
}