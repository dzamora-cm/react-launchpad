import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { SvgEs } from '@assets/svg/svg-es.lang';
import { SvgEn } from '@assets/svg/svg-en.lang';
import { Icon } from '@iconify/react/dist/iconify.js';

export const LanguageSelector = () => {
    const [t, i18n] = useTranslation('');
    const languages = [
        { key: 'es', label: 'spanish', component: <SvgEs></SvgEs> },
        { key: 'en', label: 'english', component: <SvgEn></SvgEn> }
    ];

    const DropdownItemLang = languages.map((item) =>
        item.key !== i18n.language ? (
            <DropdownItem key={item.key} className="">
                <span className=" text-boston-blue-500 flex justify-between items-center">
                    {t(item.label)} {item.component}
                </span>
            </DropdownItem>
        ) : (
            <DropdownItem key={item.key} className=" hidden"></DropdownItem>
        )
    );

    return (
        <Dropdown backdrop="blur">
            <DropdownTrigger>
                <Button
                    fullWidth
                    className="justify-start text-default-500 px-0 data-[hover=true]:bg-default/0"
                    startContent={
                        <Icon
                            className="text-default-500"
                            icon="solar:global-linear"
                            width={24}
                        />
                    }
                    variant="light"
                >
                    {t('changeLanguage')}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                variant="faded"
                aria-label="Static Actions"
                selectionMode="single"
                onAction={(e: React.Key) => {
                    i18n.changeLanguage(e.toString());
                }}
            >
                {DropdownItemLang}
            </DropdownMenu>
        </Dropdown>
    );
};
