export {};

interface SendPaymentResponse {
  preimage: string;
}

declare global {
  interface Window {
    webln: {
      sendPayment: (paymentRequest: string) => Promise<SendPaymentResponse>;
      enable: () => Promise<void>;
    };
  }
}
