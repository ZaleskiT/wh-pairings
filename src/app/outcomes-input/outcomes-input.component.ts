import { Component } from '@angular/core';
import { PairingsService } from '../pairings.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-outcomes-input',
  templateUrl: './outcomes-input.component.html',
  styleUrls: ['./outcomes-input.component.css']
})
export class OutcomesInputComponent {
  teamSize: number = 8;
  predictedOutcomes: number[][] = [];
  message: string = '';
  userArmies: string[] = Array(this.teamSize).fill('');
  opposingArmies: string[] = Array(this.teamSize).fill('');
  optimizedMatrix: number[][] = [];
  battleplanNames: string[] = [
    "Geomantic Pulse",
    "Nexus Collapse",
    "Lines of Communication",
    "Every Step is Forward",
    "Limited Resources",
    "Spring the Trap",
    "Fountains of Frost",
    "The Icefields",
    "Power Flux",
    "The Frigid Zephyr",
    "No Reward Without Risk",
    "Towers in the Tundra",
  ];
  selectedBattleplans: string[][] = [];
  rowDisabled: boolean[] = [];
  colDisabled: boolean[] = [];

  constructor(private pairingsService: PairingsService) {
    this.initPredictedOutcomes();
    this.initSelectedBattleplans();
    this.initDisabledArrays();
  }

  initPredictedOutcomes(): void {
    this.predictedOutcomes = Array.from({ length: this.teamSize }, () =>
      Array(this.teamSize).fill(0)
    );
  }

  initSelectedBattleplans(): void {
    // Initialize the selectedBattleplans array based on team size
    this.selectedBattleplans = Array.from({ length: this.teamSize }, () =>
      Array(this.teamSize).fill(this.battleplanNames[0])
    );
  }

    // Initialize the arrays based on the team size
  initDisabledArrays() {
    this.rowDisabled = Array(this.teamSize).fill(false);
    this.colDisabled = Array(this.teamSize).fill(false);
  }

  onTeamSizeChange(): void {
    this.initPredictedOutcomes();
    this.initSelectedBattleplans();
    this.initDisabledArrays();
  }

  setPredictedOutcomes(): void {
    // Call the PairingsService or perform any other necessary actions
    // Validate input (e.g., check if all fields are filled)
    if (this.isValidInput()) {

      const enabledMatrix = this.predictedOutcomes.map((row, rowIndex) =>
            row.map((value, colIndex) => {
              if (this.rowDisabled[rowIndex] || this.colDisabled[colIndex]) {
                // If either row or column is disabled, set to a large value or 0 based on your optimization criteria
                return 0; // or a large value like Number.MAX_VALUE
              }
              return value;
            })
          );
      
      console.log('enabledMatrix')
      console.log(enabledMatrix);

      this.pairingsService.setPredictedOutcomes(enabledMatrix);
      const matrix = this.pairingsService.optimizePairings(); // Optimize pairings based on new input
    
      console.log('returned matrix')
      console.log(matrix);
      this.optimizedMatrix = matrix;

      this.message = 'Predicted outcomes set and pairings optimized.';
    } else {
      this.message = 'Please fill in all the fields with valid numbers.';
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  isOptimized(row: number, col: number): boolean {
    // Check if the current row and column indices are in the optimizedPairings array
    return this.optimizedMatrix.some(pairing => pairing[0] === row && pairing[1] === col);
  }

  isRowDisabled(row: number): boolean {
    return this.rowDisabled[row];
  }

  isColDisabled(col: number): boolean {
    return this.colDisabled[col];
  }

  getStyle(row: number, col: number) {

    let background = 'transparent'
    if (this.isOptimized(row, col)) {
      background = 'purple'
    }
    if (this.isRowDisabled(row) || this.isColDisabled(col)) {
      background = 'black'
    }
    return background;
  }

  getVisibilityStyle(row: number, col: number) {

    let visibility = 'visible';

    if (this.rowDisabled[row] || this.colDisabled[col]) {
      visibility = 'collapse';
    }
    return visibility;
  }

  // Method to check if input is valid
  isValidInput(): boolean {
    return this.predictedOutcomes.every((row) => row.every((value) => !isNaN(value)));
  }
}