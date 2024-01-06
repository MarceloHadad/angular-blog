import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa0%2Fa9%2F3e%2Fa0a93e6577bb210b51918a09793b7ddd.jpg&f=1&nofb=1&ipt=829054e63bfbab8a2f53aa203fef19bda4645be926792eced67daa1af88343e4&ipo=images"
  contentTitle:string = "Fofoca quentinha"
  contentDescription:string = "Aceitas?"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
