import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LineItemServiceService {
  constructor(private http: HttpClient) {
  }

  private _currentBudgetDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  private getLineItemsBetween(): Observable<BudgetItemDto[]> {
    return this.http.get<BudgetItemDto[]>(
      `http://localhost:8080/line-items` +
      `?startingDate=${DateUtils.getYearMonthIsoString(this._currentBudgetDate)}` +
      `&endingDate=${DateUtils.getYearMonthIsoString(this._currentBudgetDate)}`
    );
  }
}
