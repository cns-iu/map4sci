import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeatureCollection } from 'geojson';

const EMPTY_FEATURES: FeatureCollection = {
  type: 'FeatureCollection',
  features: []
};

@Component({
  selector: 'm4s-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly http: HttpClient) { }

  testFiles: any = {
    boundary: EMPTY_FEATURES,
    cluster: EMPTY_FEATURES,
    edges: EMPTY_FEATURES,
    nodes: EMPTY_FEATURES
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

