import { Component } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent {
  frase: any = {
    mensaje: "Hola",
    author: "DevPianist"
  };
  mostrar: boolean = true;
  change() {
    this.mostrar = !this.mostrar;
  }

  team: string[] = ["Oscar", "Juber", "Luis", "Carlos"];
}
