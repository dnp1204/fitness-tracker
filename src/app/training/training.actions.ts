import { Action } from '@ngrx/store';

import { Exercise } from './exercice.model';

export const SET_AVAILABLE_TRAININGS = '[UI] Set Available Trainings';
export const SET_FINISHED_TRAININGS = '[UI] Set Finished Trainings';
export const START_TRAINING = '[UI] Start Training';
export const STOP_TRAINING = '[UI] Stop Training';

export class SetAvailableTrainings implements Action {
  readonly type = SET_AVAILABLE_TRAININGS;

  constructor(public payload: Exercise[]) {}
}

export class SetFinishedTrainings implements Action {
  readonly type = SET_FINISHED_TRAININGS;

  constructor(public payload: Exercise[]) {}
}

export class StartTraining implements Action {
  readonly type = START_TRAINING;

  constructor(public payload: Exercise) {}
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;
}

export type TrainingActions =
  | SetAvailableTrainings
  | SetFinishedTrainings
  | StartTraining
  | StopTraining;
