export interface EmailTheme {
  id: string;
  name: string;
  color: string;
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  template: string;
}

export interface EmailFormData {
  senderName: string;
  subject: string;
  message: string;
  url: string;
  date: string;
  footer: string;
}