import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <button mat-button (click)="opened = !opened">
          <mat-icon>menu</mat-icon>
        </button>
        <div [ngClass]="'app-title'">
          ZBBP
        </div>
      </mat-toolbar-row>
    </mat-toolbar>

    <mat-sidenav-container>
      <mat-sidenav [(opened)]="opened">
        <mat-list>
          <a routerLink="/">
            <mat-list-item>Home</mat-list-item>
          </a>
        </mat-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-monthly-budget></app-monthly-budget>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .mat-sidenav-container {
        height: calc(108vh - 115px);
      }
      .mat-sidenav {
        width: 200px;
      }
      .app-title {
        padding-right: 15px;
      }
      .mat-toolbar-row {
        display: flex;
        justify-content: space-between;
      }

    `,
  ],
})
export class AppComponent {
  title = 'Zero-Based Budget Planner';
  opened = false;
}
