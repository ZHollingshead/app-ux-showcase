export class Datepicker {
  public today = Date.now();

  public disabledDaysConfig = {calendarSettings: {
    disableDays: [
      { weekday: 0 },
      { weekday: 6 },
      { day: 1 },
      { day: 2 },
      { day: 3 },
      { month: 12, day: 25 },
      { month: 1, day: 14, year: 2019 }
    ]
  }};

  public alert(input: string) {
    alert(input);
  }
}
