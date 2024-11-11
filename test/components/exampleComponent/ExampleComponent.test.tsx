import { cleanup, render, screen } from '@testing-library/react';
import { ExampleComponent } from 'src/components/ExampleComponent';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mockDataUsers } from './ExampleMockData';
import { IResult } from 'src/models/exampleInterface';

describe('move test suite', () => {
    const mockData: IResult[] = mockDataUsers;
    beforeEach(() => {
        render(<ExampleComponent data={mockData} />);
    });
    afterEach(() => {
        cleanup();
    });

    it('Number of users rendered', () => {
        const userElements = screen.getAllByTestId('user-view');
        expect(userElements.length).toBe(mockData.length);
    });

    it('Must render the logo', () => {
        render(<ExampleComponent data={undefined} />);
        const logo = screen.getAllByTestId('cmt-logo');
        expect(logo).toBeTruthy();
    });

    it('Should display user data if passed as props', () => {
        mockData.forEach((user) => {
            expect(screen.getByText(user.email)).toBeTruthy();
            expect(screen.getByText(user.name.first)).toBeTruthy();
        });
    });

    it('Should render the main text', () => {
        expect(screen.getByText('banks.accountInformation')).toBeTruthy();
    });
});
