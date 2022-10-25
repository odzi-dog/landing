/// <reference types="astro/client" />

import { Application } from './Application.interface';

declare global {
  interface Window {
    application: Application
  }
}
