import {Component, OnInit, Injectable} from '@angular/core';
import {OombaDataService} from "./upload.oombadataservice";
import {ActivatedRoute} from "@angular/router";




@Component({
  selector: 'upload',
  template: `
    <h1>Select Master Data Component</h1>
    <!--<select>-->
            <!--<option>Select Name</option>-->
                 <!--<option *ngFor = "let result of results" value="{{result.name}}" [selected]="result === selectedResult">{{result.name}}</option>-->
            <!--</select>-->
      <select (change)="changeParams($event)">
        <option value="">--Select--</option>
        <option value="country">Country</option>
        <option value="code">Code</option>
        <option value="city">City</option>
    </select>      
            <hr>
   <table border="1">
        <thead>
            <th>Name</th>
            <th>ID</th>
            <!--<th>Films</th>-->
        </thead>
        <tr *ngFor = "let result of results">
            <td>{{result.name}}</td>
            <td>{{result.height}}</td>
            <!--<td >-->
            <!--<table>-->
                <!--<tr *ngFor="let film of result.films">-->
                    <!--<td>{{film}}</td>-->
<!--</tr>-->
<!--</table>-->
<!--</td>-->
            
        </tr>
        
        
    </table>
`,
  providers: [OombaDataService]
})
export class UploadComponent implements OnInit {

  results: string[];

  // results: [{
  //   name: string,
  //   birth_year: string
  // }];

  constructor(public route: ActivatedRoute, public oombaDataService: OombaDataService) {}

  public ngOnInit(){
    console.log('Hello Upload Component');

  }

  private changeParams($event ){
    let selectedParam = $event.target.value;
    console.log("You clicked"+selectedParam);

    if(selectedParam == 'country'){
      this.oombaDataService.getData().subscribe(
        x => {
          console.log("VALUE RECEIVED: ", x);
          console.log("Count: ", x.count);
          this.results = x.results;
        },
        x => {
          console.log("ERROR: ", x);
        },
        () => {
          console.log("Completed");
        }
      );
    }else if(selectedParam == "city"){
      console.log("You selected--====> "+selectedParam);
    }
  }
}
