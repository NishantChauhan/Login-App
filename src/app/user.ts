export class User {
  public fullname: string;
  public password: string;
  public address: Address;
  public type: UserType;
  public gender: string;
}

export class Address {
  public streetName: string;
  public postalCode: string;
  public city: string;
  public country: string;
  public unit?: string;
}
export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

export enum UserType {
  FREE = 'Free',
  STANDARD = 'Standard',
  PREMIUM = 'Premium',
}
