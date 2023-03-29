
import { 
    CreateChatCompletionRequest,
    CreateChatCompletionResponse,
 } from 'openai';

import { sendAndPayRequest } from '../deezy/api';

export type ChatCompletion = {
    model: string;
    prompt: string;
}

export async function createChatCompletion(data: CreateChatCompletionRequest): Promise<any> {
    const resp = await sendAndPayRequest({
        provider: 'openai',
        api_path: 'v1/chat/completions',
        data
    })
    return resp
}
