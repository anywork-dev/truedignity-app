import { SDKBuilder } from 'typed-sdk-builder';
import { endpointsConfig } from './api-config';

const PUBLIC_API_URL = "https://example.com/api"; // Placeholder URL

export const api = new SDKBuilder({
  base: PUBLIC_API_URL,
  endpoints: endpointsConfig,
  onInvalidCredential: () => {
    console.warn("Invalid credentials detected. Redirecting to login page...");
    api.clearAllPersistentData();
    if (typeof window !== 'undefined') {
      window.location.href = '/login?session_expired=true';
    }
  },
});
