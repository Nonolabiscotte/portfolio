import { Component } from '@angular/core';
import { Education } from 'src/objects/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educationList: Education[] = [
    {
      degree: "Master Degree of Engineering ",
      fieldOfStudy: "Major : Industrial IT systems",
      school: "ECAM Strasbourg-Europe/Lyon",
      startDate: new Date(),
      endDate: new Date(),
      location: "Strasbourg - France",
      description: "Description test"
    },
    {
      degree: "Bachelor of Engineering - BE, Engineering Science",
      fieldOfStudy: "Mechanics and Material Science",
      school: "Lodz University of Technology",
      startDate: new Date(),
      endDate: new Date(),
      location: "Lodz - Poland",
      description: "Desription Test"
    },
    {
      degree: "Classe préparatoire aux grandes écoles",
      fieldOfStudy: "MPSI",
      school: "ECAM Strasbourg-Europe/Lyon",
      startDate: new Date(),
      endDate: new Date(),
      location: "Strasbourg - France",
      description: "Description test"
    }
  ]

}
