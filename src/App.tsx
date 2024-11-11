import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18nInstance from '@locales/i18next.init';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@routes/routes';
import { I18nextProvider } from 'react-i18next';

function App() {
    const queryClient = new QueryClient();
    return (
        <I18nextProvider i18n={i18nInstance}>
            <NextUIProvider>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </QueryClientProvider>
            </NextUIProvider>
        </I18nextProvider>
    );
}

export default App;
