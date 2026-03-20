import { v4 as uuidv4 } from 'uuid';

export function generateId() {
  return uuidv4();
}

export function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function truncate(str, maxLen = 40) {
  if (!str) return '';
  return str.length > maxLen ? str.substring(0, maxLen) + '...' : str;
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
