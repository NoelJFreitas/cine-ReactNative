import {CountryCode} from 'libphonenumber-js';

export interface Country {
  iso: CountryCode;
  name: string;
}
