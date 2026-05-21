interface PaystackHandler {
  openIframe(): void;
}

interface PaystackSetupOptions {
  key: string;
  email: string;
  plan?: string;
  amount?: number;
  currency?: string;
  ref?: string;
  callback?: (response: { reference: string; status: string }) => void;
  onClose?: () => void;
}

interface PaystackPopInterface {
  setup(options: PaystackSetupOptions): PaystackHandler;
}

declare global {
  interface Window {
    PaystackPop: PaystackPopInterface;
  }
}

export {};
