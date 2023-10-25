import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  TeamErrorMessage = '';
  numberOfTeams = 0;

  onInput(member: string) {
    this.newMemberName = member;
  }
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = `Name can't be empty `;
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage = '';
  }
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  onGenerate() {
    this.numberOfTeams = this.members.length / this.numberOfTeams;
    if (this.numberOfTeams < 1) {
      this.TeamErrorMessage = `The number of people is less than the number of the Teams`;
      return;
    } else {
      console.log(this.numberOfTeams);
    }
  }
}
