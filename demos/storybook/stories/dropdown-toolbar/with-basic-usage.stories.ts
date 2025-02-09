import { text } from '@storybook/addon-knobs';

export const withBasicUsage = (): any => ({
    template: `
       <blui-dropdown-toolbar [title]="title" [subtitle]="state.selected || subtitle">
        <ng-container blui-toolbar-menu>
            <button mat-menu-item (click)="updateSubtitle('Test Item 1', state)">Test Item 1</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 2', state)">Test Item 2</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 3', state)">Test Item 3</button>
        </ng-container>
       </blui-dropdown-toolbar>
    `,
    props: {
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        updateSubtitle: (str: string, state): void => {
            state.selected = str;
        },
        state: {
            selected: undefined,
        },
    },
});
