import React from 'react';
import type { Props } from '@theme/LastUpdated';

export default function LastUpdated({ lastUpdatedAt }: Props): React.ReactElement | null {
  if (!lastUpdatedAt) return null;
  const date = new Date(lastUpdatedAt * 1000).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
  });
  return (
    <div style={{ fontSize: '0.85rem', color: 'var(--ifm-color-content-secondary)' }}>
      Last updated by <strong>W3-Energy.org</strong> on {date}
    </div>
  );
}
