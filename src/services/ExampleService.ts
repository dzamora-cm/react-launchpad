import { HttpService, HttpResponse } from 'nucleus-commons-ui';
import { IResult } from 'src/models/exampleInterface';

export const fetchUser = async (): Promise<HttpResponse<IResult[]>> => {
    const httpService = new HttpService();
    const url =
        'https://cdn.capmotion.io/react-launchpad/files/users-response.json';

    const data = await httpService.get<IResult[]>(url);
    return data;
};
