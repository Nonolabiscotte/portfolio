import { Component } from '@angular/core';
import { Portfolio } from 'src/model/class/Portfolio';
import { ProjectStatus } from 'src/model/enum/ProjectStatus';
import { Skills } from 'src/model/enum/Skills';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  portfolioList: Portfolio[] = [
    {
      id: 1,
      projectName: "Hachiko",
      projectStatus: ProjectStatus.PROFESSIONAL,
      description: "AirFrance Project",
      skills : [Skills.Angular, Skills.JAVA],
      githubLink : "http://test.fr"
    },
    {
      id: 2,
      projectName: "Hachiko",
      projectStatus: ProjectStatus.PERSONAL,
      description: "AirFrance Project",
      skills : [Skills.Angular, Skills.JAVA],
      githubLink : "http://test.fr"
    },
    {
      id: 3,
      projectName: "Hachiko",
      projectStatus: ProjectStatus.PERSONAL,
      description: "AirFrance Project",
      skills : [Skills.Angular, Skills.JAVA],
      githubLink : "http://test.fr"
    }
  ]

}
