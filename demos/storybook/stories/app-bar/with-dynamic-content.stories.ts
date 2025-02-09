import { number, text } from '@storybook/addon-knobs';

export const withDynamicContent = (): any => ({
    template: `
        <blui-app-bar
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId"
         (collapsedChange)="isCollapsed = $event"
         variant="snap">
             <blui-three-liner
                [title]="title"
                [subtitle]="subtitle"
                [info]="info"
                [style.top.px]="isCollapsed ? 0 : expandedYOffset">
            </blui-three-liner>
        </blui-app-bar>
    `,
    props: {
        collapsedHeight: number('collapsedHeight', 64),
        expandedHeight: number('expandedHeight', 200),
        scrollThreshold: number('scrollThreshold', 100),
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', 'info'),
        isCollapsed: undefined,
        expandedYOffset: number('Expanded Y Offset', 80),
    },
});
