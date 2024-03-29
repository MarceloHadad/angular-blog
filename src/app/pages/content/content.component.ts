import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesOnComponent(this.id);
  }

  setValuesOnComponent(id: string | null) {
    const result = fakeData.filter((article) => article.id === id)[0];

    this.contentTitle = result.contentTitle;
    this.contentDescription = result.contentDescription;
    this.photoCover = result.photoCover;
  }
}
