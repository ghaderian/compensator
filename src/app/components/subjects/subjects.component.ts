import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  goals = [
    {
      title: `Javascript`,
      desc: `JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.<br/>
      Unlike most javascript classes, In our class, we go through an stream of interactive javascript challenges from easy to hard, so that you can earn confidence writing code.  `,
    },
    {
      title: `HTML/CSS`,
      desc: ``,
    },
    {
      title: `GIT`,
      desc: ``,
    },
    {
      title: `Angular`,
      desc: ``,
    },
    {
      title: `Agile`,
      desc: ``,
    },
  ];

  selectedGoals: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }


  toggleGoalView(index: number): void {

    if (this.selectedGoals.some(i => i === index)) {
      this.selectedGoals = this.selectedGoals.filter(i => i !== index);
    } else {
      this.selectedGoals.push(index);
    }
  }

  isGoalVisible(index: number): boolean {
    return this.selectedGoals.find(i => i === index) === undefined ? false : true;
  }

}
