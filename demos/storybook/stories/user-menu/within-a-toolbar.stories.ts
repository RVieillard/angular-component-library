import {items} from "./with-basic-config.stories";

export const withinToolbar = (): any => ({
    template: `
        <div>
        <mat-toolbar style="padding: 0px 16px">
                    <h2>Toolbar Title</h2>
                    <pxb-spacer></pxb-spacer>
                    <pxb-user-menu menuTitle="Jane Doe" menuSubtitle="Account Manager">
                        <mat-icon pxb-avatar>person</mat-icon>
                        <mat-icon pxb-menu-avatar>person</mat-icon>
                        <div pxb-body>
                             <mat-nav-list [style.paddingTop.px]="0">
                                <pxb-info-list-item *ngFor="let item of items" [dense]="true">
                                    <mat-icon pxb-icon>{{item.icon}}</mat-icon>
                                    <div pxb-title>{{item.title}}</div>
                                </pxb-info-list-item>
                            </mat-nav-list>
                            <div style="text-align: right">
                                <mat-divider></mat-divider>
                                <div [style.padding.px]="16" [style.fontSize.px]="12">
                                    v1.03.54
                                </div>
                            </div>
                        </div>
                    </pxb-user-menu> 
                </mat-toolbar>
                <div style="font-size: 16px; padding: 16px; height: 100px;">Body Content Goes Here</div>
            </div>
    `,
    props: {
        items: items,
    },
});
