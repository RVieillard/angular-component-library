import {items} from "./with-basic-config.stories";

const Trex = require('../../assets/trex.png');

export const withNonTextAvatar = (): any => ({
    styles: [
        `
        .non-text-avatar-container {
            display: flex; 
            width: 120px; 
            justify-content: space-around;
        }
    `,
    ],
    template: `
        <div class="non-text-avatar-container">
            <pxb-user-menu [avatarImage]="trex">
                <mat-nav-list pxb-body [style.paddingTop.px]="0">
                    <pxb-info-list-item *ngFor="let item of items" [dense]="true">
                        <mat-icon pxb-icon>{{item.icon}}</mat-icon>
                        <div pxb-title>{{item.title}}</div>
                    </pxb-info-list-item>
                </mat-nav-list>
            </pxb-user-menu> 
            
            <pxb-user-menu>
                <mat-icon pxb-avatar>pets</mat-icon>
                <mat-nav-list pxb-body [style.paddingTop.px]="0">
                    <pxb-info-list-item *ngFor="let item of items" [dense]="true">
                        <mat-icon pxb-icon>{{item.icon}}</mat-icon>
                        <div pxb-title>{{item.title}}</div>
                    </pxb-info-list-item>
                </mat-nav-list>
            </pxb-user-menu> 
        </div>
    `,
    props: {
        items: items,
        trex: Trex,
    },
});
