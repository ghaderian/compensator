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
      desc: `There are so many programming languages in the world. But no programming language has brighter future and wider use than JavaScript today. Investing your time in learning JavaScript is the most guaranteed way to ensure you will have a job as a programmer. <br/>
      Although JavaScript is very easy, many people struggle to start learning it. The main reason is learning to code is not a passive activity. You need to build confidence and capability, gradually and over time. You need to be patient in first steps. <br/>
      In our classes we focus on learning by doing and let you do it in your pace. Not everyone learns at the same pace. We want to maximize your chance of success by letting you spend as much as you need on each challenge. First steps are essential and we help you build confidence gradually.`,
    },
    {
      title: `HTML/CSS`,
      desc: `Learning HTML/CSS is essential for becoming a web developer and helps you immensely in your journey. But the whole concept is huge. No one can go through the whole spec. We focus on most essential parts you need to deliver value. No one actually uses all the spec of HTML/CSS. The trick is to know the most essential parts and learn how to dig deeper based on your challenge needs.`,
    },
    {
      title: `GIT`,
      desc: `GIT is one of the most essential tools for you if you want to be a web developer. Basically you won't be able to be a coder if you don't know GIT. The good news is it's quite easy. You just need the right guidance and everyone can easily master it. <br/>
      GIT is used to contribute to codes with all programmers. When you become a programmer, it's highly likely that you will work in one code with many teammate programmers. So you need a way to change part of code that your other teammates using. We as programmers need to be able to work in parallel and don't step in each others toes. We do this with Git. Luckily in our classes we have a team of newcomers. So we create a share project and start contributing to it as a team and we learn how to use Git in the process`,
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
