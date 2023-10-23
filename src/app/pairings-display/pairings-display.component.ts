import { Component } from '@angular/core';
import { PairingsService } from '../pairings.service';

@Component({
  selector: 'app-pairings-display',
  templateUrl: './pairings-display.component.html',
  styleUrls: ['./pairings-display.component.css']
})
export class PairingsDisplayComponent {
  currentPairings: number[][] = [];

  constructor(private pairingsService: PairingsService) {
    this.currentPairings = pairingsService.getCurrentPairings();
  }
}