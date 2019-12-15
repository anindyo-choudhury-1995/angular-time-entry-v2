import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-day-tracker",
  templateUrl: "./day-tracker.component.html",
  styleUrls: ["./day-tracker.component.scss"]
})
export class DayTrackerComponent implements OnInit, OnChanges {
  @Input() selectedDay;
  @Output() selectedDate = new EventEmitter<number>();

  dayTrackers = [
    {
      time: "0.00",
      day: "S",
      id: new Date("14 Dec 2019"),
      selected: false
    },
    {
      time: "0.00",
      day: "S",
      id: new Date("15 Dec 2019"),
      selected: false
    },
    {
      time: "2.00",
      day: "M",
      id: new Date("16 Dec 2019"),
      selected: false
    },
    {
      time: "2.00",
      day: "T",
      id: new Date("17 Dec 2019"),
      selected: false
    },
    {
      time: "2.0",
      day: "W",
      id: new Date("18 Dec 2019"),
      selected: false
    },
    {
      time: "2.0",
      day: "T",
      id: new Date("19 Dec 2019"),
      selected: false
    },
    {
      time: "6.0",
      day: "F",
      id: new Date("20 Dec 2019"),
      selected: true
    }
  ];

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.selectDayById(this.selectedDay);
  }

  selectDayById(dayId) {
    this.dayTrackers.forEach(dayObj => {
      dayObj.selected = Number(dayObj.id) - Number(dayId) === 0 ? true : false;
    });
    this.selectedDate.emit(dayId);
  }
}
