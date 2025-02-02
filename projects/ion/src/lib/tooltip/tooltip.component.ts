import { Component } from '@angular/core';
import { TooltipColorScheme, TooltipPosition } from '../core/types';

@Component({
  selector: 'ion-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class IonTooltipComponent {
  ionTooltipTitle: string;
  ionTooltipColorScheme: TooltipColorScheme = 'dark';
  ionTooltipPosition: TooltipPosition = TooltipPosition.DEFAULT;
  ionTooltipVisible = false;
  left = 0;
  top = 0;
}
