import { Route, Routes } from 'react-router-dom';
import { ExamplePage } from '@pages/ExamplePage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ExamplePage />}></Route>
        </Routes>
    );
};
