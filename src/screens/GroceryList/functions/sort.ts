import { Entry } from '../../../@types/entry';

/**
 * Sort alpabetically and by priority
 */
export function sortEntries(entries: Entry[]) {
  entries.sort((a, b) => a.name.localeCompare(b.name));
  entries.sort((a, b) => a.priority - b.priority);
}

/**
 * @param value 0 - Ran Out; 1 - Have; 2 - All;
 */
export function filterEntries(entries: Entry[], value: number) {
  if (value === 2) {
    return entries;
  }
  return entries.filter((entry) => entry.status === value);
}
