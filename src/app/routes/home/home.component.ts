import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    newDate = [
        new Date("14 Dec 2019"),
        new Date("15 Dec 2019"),
        new Date("16 Dec 2019"),
        new Date("17 Dec 2019"),
        new Date("18 Dec 2019"),
        new Date("19 Dec 2019"),
        new Date("20 Dec 2019")
    ];

    listItems = [
        {
            srNumber: "Customer Workshop or Cloud Day",
            taskType: "Training/Personal Development - Taken",
            deliveryType: "Face To Face",
            time: 1,
            note:
                "Customer Workshop or Cloud Day Training/Personal Development - Taken Face To Face"
        },
        {
            srNumber:
                "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
            taskType: "Corporate Citizenship",
            deliveryType: "Remote",
            time: 2,
            note: ""
        },
        {
            srNumber:
                "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)",
            taskType: "Follow-up",
            deliveryType: "Face to Face",
            time: 1,
            note: ""
        },
        {
            srNumber: "Non Service",
            taskType: "Time Off",
            deliveryType: "",
            time: 1,
            note: ""
        }
    ];

        sRNumbers = [
        { value: "Customer Workshop or Cloud Day" },
        {
            value:
                "Cloud Coach-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)"
        },
        {
            value:
                "Discovery-sanela.hodzic@oracle.com-Oracle University (CHICAGO, US) - 225(REDWOOD CITY, US)"
        },
        { value: "Non Service" }
    ];
    taskTypes = [
        { value: "Training/Personal Development - Taken" },
        { value: "Corporate Citizenship" },
        { value: "Follow-up" }
    ];
    deliveryTypes = [{ value: "Remote" }, { value: "Face To Face" }];


    selectedDay = new Date("16 Dec 2019");

    constructor() {}

    ngOnInit() {}
    selectedDateInputTracker($event) {
        this.selectedDay = $event;
    }
    selectedDateDayTracker($event) {
        this.selectedDay = $event;
    }
    addItem($event) {
      console.log($event);
      this.listItems.push({
            srNumber: "",
            taskType: "",
            deliveryType: "",
            time: 0,
            note: ""
        })
    }

}
