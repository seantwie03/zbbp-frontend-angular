class DateUtils {
  public static getYearMonthIsoString(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}`;
  }
}
