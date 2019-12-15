import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-edit-details",
    templateUrl: "./edit-details.component.html",
    styleUrls: ["./edit-details.component.scss"]
})
export class EditDetailsComponent implements OnInit {
    @Input() selectedSRNumber;
    @Input() selectedTaskType;
    @Input() selectedDeliveryType;
    @Input() time;
    @Input() note;
    @Input() sRNumbers
    @Input() taskTypes
    @Input() deliveryTypes
    constructor() {}

    ngOnInit() {}
}
