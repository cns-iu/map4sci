import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil, tap } from 'rxjs/operators';
import { FeatureCollection } from 'geojson';

@Component({
  selector: 'm4s-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly http: HttpClient) { }

  testFiles: any = {
    boundary: {},
    cluster: {},
    edges: {},
    nodes: {}
  };

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    console.log('getData()');
    const files: string[] = [
      'boundary',
      'cluster',
      'edges',
      'nodes'
    ];

    files.forEach(file => {
      // tslint:disable-next-line: deprecation
      this.http.get(`assets/datasets/test/${file}.geojson`).subscribe(data => {
        console.log('Adding ', file);
        this.testFiles[file] = data;
      });
    });
  }

  showFiles(): void {
    console.log('testFiles: ', this.testFiles);
  }
}

