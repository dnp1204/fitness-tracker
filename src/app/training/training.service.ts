import { Exercise } from './exercice.model';
export class TrainingService {
  private availableExercise: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8, state: null },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15, state: null },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18, state: null },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8, state: null }
  ];

  getAvailableExercises() {
    return this.availableExercise.slice();
  }
}
