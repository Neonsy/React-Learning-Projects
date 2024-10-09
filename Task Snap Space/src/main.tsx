import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// Import the generated route tree, containing the routes
import { routeTree } from './routeTree.gen';

// Create a new router instance
import { RouterProvider, createRouter } from '@tanstack/react-router';
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

// Apply global styles

import './main.css';

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
}
