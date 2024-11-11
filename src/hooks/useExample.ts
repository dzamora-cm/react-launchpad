import { useQuery } from '@tanstack/react-query';
import { HttpResponse } from 'nucleus-commons-ui';
import { IResult } from 'src/models/exampleInterface';
import { fetchUser } from 'src/services/ExampleService';

export const useExample = () => {
    const queryUsers = useQuery<HttpResponse<IResult[]>>({
        queryKey: ['users'],
        queryFn: () => fetchUser()
    });
    return queryUsers;
};
