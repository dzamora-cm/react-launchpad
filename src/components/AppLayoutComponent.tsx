import { sectionLongList } from '@const/SidebarItemsExample';
import { Sidebar } from 'nucleus-commons-ui';

interface IAppLayoutComponent {
    children?: React.ReactNode;
}

export const AppLayoutComponent = ({ children }: IAppLayoutComponent) => {
    return (
        <Sidebar
            isCollapsedAll={false}
            items={sectionLongList}
            srcAvatar="https://i.pravatar.cc/150?u=a04258114e29026708c"
            titleAvatar="John Doe"
            subTitleAvatar="Product Designer"
        >
            {children}
        </Sidebar>
    );
};
