import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

function render() {
  const container = document.getElementById('react-body');
  const root = createRoot(container);
  root.render(<App />);
}

render();