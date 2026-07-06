import { useState } from 'react';

/**
 * Slices a card list down to `initialVisible` entries until the user expands
 * it. Omitting `initialVisible` (or setting it >= items.length) disables the
 * "View more" button entirely.
 */
export function useViewMore<T>(items: T[], initialVisible?: number) {
  const [expanded, setExpanded] = useState(false);
  const limit = initialVisible ?? items.length;
  const visible = expanded ? items : items.slice(0, limit);
  const hiddenCount = Math.max(0, items.length - limit);
  return {
    visible,
    hasMore: !expanded && hiddenCount > 0,
    hiddenCount,
    showAll: () => setExpanded(true),
  };
}
