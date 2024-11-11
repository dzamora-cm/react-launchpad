import { ExampleComponent } from '@components/ExampleComponent';
import { useExample } from '@hooks/useExample';

export const ExampleView = () => {
    const { data, isLoading } = useExample();

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <>
            <ExampleComponent data={data?.data} />
        </>
    );
};
