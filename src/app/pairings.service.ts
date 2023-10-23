import { Injectable } from '@angular/core';
import * as Munkres from 'munkres-js';

@Injectable({
  providedIn: 'root',
})
export class PairingsService {
  private predictedOutcomes: number[][] = [];
  private currentPairings: number[][] = [];

  // Constructor can be used to inject any necessary dependencies

  // Method to set the predicted outcomes based on user input
  setPredictedOutcomes(outcomes: number[][]): void {
    this.predictedOutcomes = outcomes;
  }

  // Method to optimize pairings using the Hungarian algorithm
  optimizePairings(): number[][] {
    // Create a cost matrix from predicted outcomes
    const costMatrix = this.predictedOutcomes.map((row) =>
      row.map((winPercentage) => 1 - winPercentage)
    );
  
    // Use the Munkres (Hungarian) algorithm to optimize pairings
    const optimizedPairings = new Munkres(costMatrix);

    this.currentPairings = optimizedPairings;
  
    return optimizedPairings;
  }

  // Method to get the current pairings
  getCurrentPairings(): number[][] {
    return this.currentPairings;
  }

  // Method to update pairings with new information
  updatePairings(newPairings: number[][]): void {
    this.currentPairings = newPairings;
  }
}