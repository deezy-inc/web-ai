import axios from "axios";
import { getPayoutLightningAddress } from "./payouts";

const DEEZY_API = "https://api.deezy.io/v1/webai";

export type DeezyAIRequest<T> = {
  request_id?: string;
  provider: string;
  api_path: string;
  payout_lightning_address?: string;
  data: T;
};

export async function sendAndPayRequest<TRequest, TResponse>(
  request: DeezyAIRequest<TRequest>
) {
  request.request_id = window.crypto.randomUUID();
  const payoutLightningAddress = getPayoutLightningAddress();
  if (payoutLightningAddress) {
    request.payout_lightning_address = payoutLightningAddress;
  }
  
  try {
    const { data } = await axios.post<TResponse>(DEEZY_API, request);
    return data;
  } catch (err) {
    if (
      axios.isAxiosError(err) &&
      err &&
      err.response &&
      err.response.headers &&
      err.response.headers
    ) {
      // console.log(err)
      console.log(err.response.headers);
      console.log(`Expecting 402 here`);
      const bolt11Invoice = err.response.headers["bolt11-auth"];
      console.log(bolt11Invoice);
      console.log("Sending payment");

      await window.webln.enable();
      await window.webln.sendPayment(bolt11Invoice);
      const { data } = await axios.post<TResponse>(DEEZY_API, request, {
        headers: { "bolt11-auth": bolt11Invoice },
      });
      console.log(data);
      return data;
    }
    throw err;
  }
}
