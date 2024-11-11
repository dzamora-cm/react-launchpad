import { BookStack } from 'iconoir-react';
import { IResult } from 'src/models/exampleInterface';
import { User } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

export interface Props {
    data: IResult[] | undefined;
}

export const ExampleComponent = ({ data }: Props) => {
    const [t] = useTranslation('banks');
    return (
        <div className="flex items-center justify-center h-screen flex-wrap p-14">
            <div className="flex items-center justify-center flex-wrap">
                <img
                    src="https://cdn.capmotion.io/react-launchpad/images/capmotion-364x120.webp"
                    alt="CMT Logo"
                    data-testid="cmt-logo"
                />
                <div className="w-full text-center mt-24">
                    <h1 className="text-4xl text-primary-500 flex justify-center font-primary font-thin">
                        {t('bankAccount.greeting')}
                    </h1>
                    <p className="text-lg text-slate-500 mt-3">
                        This is a starter template for React applications. It
                        uses Vite as the build tool and React as the frontend
                        framework.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-10">
                    <h2 className="w-full font-secondary text-2xl flex text-secondary-500">
                        Example get data from API
                        <span className="ml-5">
                            <BookStack className="text-secondary-500" />
                        </span>
                    </h2>
                    <div className="flex flex-wrap gap-4 mt-10">
                        {data?.map((item, index) => (
                            <User
                                data-testid={`user-view`}
                                key={index}
                                className="w-[250px] h-[80px] border "
                                name={item.name.first}
                                description={item.email}
                                avatarProps={{
                                    src: item.picture.thumbnail
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
