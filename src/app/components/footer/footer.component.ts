import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  a: number;
  constructor() {
    this.a = new Date().getFullYear();
  }

  ngOnInit(): void {}
}
