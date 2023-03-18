import {Component} from '@angular/core';

@Component({
  selector: 'app-monthly-budget',
  template: `
    <div class="monthly-budget">
      <mat-tab-group>
        <mat-tab label="Planned">
<!--          <ng-container *ngFor="let plannedSection of plannedSections$ | async">-->
<!--            <tazb-budget-item [section]="plannedSection"></tazb-budget-item>-->
<!--          </ng-container>-->
        </mat-tab>
        <mat-tab label="Spent">
<!--          <ng-container *ngFor="let spentSection of spentSections$ | async">-->
<!--            <tazb-budget-item [section]="spentSection"></tazb-budget-item>-->
<!--          </ng-container>-->
        </mat-tab>
        <mat-tab label="Remaining">
<!--          <ng-container *ngFor="let remainingSection of remainingSections$ | async">-->
<!--            <tazb-budget-item [section]="remainingSection"></tazb-budget-item>-->
<!--          </ng-container>-->
        </mat-tab>
      </mat-tab-group>
      <button
        routerLink="/transaction/add"
        class="fab"
        mat-fab
        color="primary"
        aria-label="Add transaction"
      >
        <mat-icon>add</mat-icon>
      </button>
    </div>  `,
  styles: [
    `
      .fab {
        z-index: 5;
        position: fixed;
        left: 42%;
        bottom: 2%;
      }
    `
  ]
})
export class MonthlyBudgetComponent {

}
