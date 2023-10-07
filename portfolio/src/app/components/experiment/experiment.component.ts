import { Component } from '@angular/core';
import { Experiment } from 'src/model/class/Experiment';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent {

  public getExperimentList() {
    return this.experimentList;
  }

  experimentList: Experiment[] = [
    {
      title: "Software Engineer",
      description: "Description Test",
      company: "Air-France/KLM",
      skills: ["Java", "Maven", "Angular"],
      startDate: new Date(),
      endDate: new Date(),
      location: "Toulouse - France",
      abv: "AF"
    },
    {
      title: "Software Engineer",
      description: "Description Test",
      company: "BPCE",
      skills: ["Java", "Maven", "Spring-boot"],
      startDate: new Date(),
      endDate: new Date(),
      location: "Toulouse - France",
      abv: "BPCE"
    },
    {
      title: "Junior Software Engineer",
      description: "Description Test",
      company: "Astek",
      skills: ["Java", "Angular"],
      startDate: new Date(),
      endDate: new Date(),
      location: "Toulouse - France",
      abv: "Astek"
    }
  ]

}
