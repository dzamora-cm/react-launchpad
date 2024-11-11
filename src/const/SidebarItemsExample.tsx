import { Chip } from '@nextui-org/react';
import { Icon } from '@iconify/react';

import { type SidebarItem } from 'nucleus-commons-ui';
import { LanguageSelector } from '../components/LanguageSelectorComponent';

export const sectionItems: SidebarItem[] = [
    {
        key: 'overview',
        title: 'Overview',
        items: [
            {
                key: 'home',
                href: '#',
                icon: 'solar:home-2-linear',
                title: 'Home'
            },
            {
                key: 'projects',
                href: '#',
                icon: 'solar:widget-2-outline',
                title: 'Projects',
                endContent: (
                    <Icon
                        className="text-default-400"
                        icon="solar:add-circle-line-duotone"
                        width={24}
                    />
                )
            },
            {
                key: 'tasks',
                href: '#',
                icon: 'solar:checklist-minimalistic-outline',
                title: 'Tasks',
                endContent: (
                    <Icon
                        className="text-default-400"
                        icon="solar:add-circle-line-duotone"
                        width={24}
                    />
                )
            },
            {
                key: 'team',
                href: '#',
                icon: 'solar:users-group-two-rounded-outline',
                title: 'Team'
            },
            {
                key: 'tracker',
                href: '#',
                icon: 'solar:sort-by-time-linear',
                title: 'Tracker',
                endContent: (
                    <Chip size="sm" variant="flat">
                        New
                    </Chip>
                )
            }
        ]
    },
    {
        key: 'organization',
        title: 'Organization',
        items: [
            {
                key: 'cap_table',
                href: '#',
                title: 'Cap Table',
                icon: 'solar:pie-chart-2-outline',
                type: 'nest',
                className:
                    'text-small font-medium text-default-500 group-data-[selected=true]:text-foreground',
                items: [
                    {
                        key: 'shareholders',
                        href: '#',
                        title: 'Shareholders',

                        items: [
                            {
                                key: 'shareholders',
                                icon: 'solar:users-group-rounded-linear',
                                href: '#',
                                title: 'Shareholders'
                            },
                            {
                                key: 'note_holders',
                                icon: 'solar:notes-outline',
                                href: '#',
                                title: 'Note Holders'
                            },
                            {
                                key: 'transactions_log',
                                icon: 'solar:clipboard-list-linear',
                                href: '#',
                                title: 'Transactions Log'
                            }
                        ]
                    },
                    {
                        key: 'note_holders',
                        href: '#',
                        title: 'Note Holders'
                    },
                    {
                        key: 'transactions_log',
                        href: '#',
                        title: 'Transactions Log'
                    }
                ]
            },
            {
                key: 'analytics',
                href: '#',
                icon: 'solar:chart-outline',
                title: 'Analytics'
            },
            {
                key: 'perks',
                href: '/perks',
                icon: 'solar:gift-linear',
                title: 'Perks',
                endContent: (
                    <Chip size="sm" variant="flat">
                        3
                    </Chip>
                )
            },
            {
                key: 'expenses',
                href: '#',
                icon: 'solar:bill-list-outline',
                title: 'Expenses'
            },
            {
                key: 'settings',
                href: '/settings',
                icon: 'solar:settings-outline',
                title: 'Settings'
            },
            {
                key: 'lang',
                href: '/settings',
                title: '',
                className: 'pl-1',
                endContent: <LanguageSelector />
            }
        ]
    }
];

export const sectionLongList: SidebarItem[] = [
    ...sectionItems,
    {
        key: 'payments',
        title: 'Payments',
        items: [
            {
                key: 'payroll',
                href: '#',
                title: 'Payroll',
                icon: 'solar:dollar-minimalistic-linear'
            },
            {
                key: 'invoices',
                href: '#',
                title: 'Invoices',
                icon: 'solar:file-text-linear'
            },
            {
                key: 'billing',
                href: '#',
                title: 'Billing',
                icon: 'solar:card-outline'
            },
            {
                key: 'payment-methods',
                href: '#',
                title: 'Payment Methods',
                icon: 'solar:wallet-money-outline'
            },
            {
                key: 'payouts',
                href: '#',
                title: 'Payouts',
                icon: 'solar:card-transfer-outline'
            }
        ]
    }
];