export interface SubmitWaitlistParams {
  email: string;
  address: string;
}

export interface UpdateWalletParams {
  address: string;
}

export interface WaitlistStatusResponse {
  isOnWaitlist: boolean;
  position?: number;
}
