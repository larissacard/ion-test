import { EventEmitter } from '@angular/core';

export enum CheckBoxEvent {
  checked = 'checked',
  enabled = 'unchecked',
  indeterminate = 'indeterminate',
}

export const StateChange = {
  enabled: 'checked',
  checked: 'enabled',
  indeterminate: 'enabled',
};

export interface CheckBoxProps {
  label?: string;
  disabled?: boolean;
  state?: CheckBoxStates;
  ionClick?: EventEmitter<CheckBoxEvent>;
}

export type CheckBoxStates = keyof typeof CheckBoxEvent;
