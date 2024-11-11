import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { AppLayoutComponent } from './components/AppLayoutComponent.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppLayoutComponent>
            <App />
        </AppLayoutComponent>
    </StrictMode>
);
