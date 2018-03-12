import { Exercise } from './exercice.model';
import { Subject } from 'rxjs/Subject';
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private availableExercise: Exercise[] = [
    {
      id: 'crunches',
      name: 'Crunches',
      duration: 30,
      calories: 8,
      state: null
    },
    {
      id: 'touch-toes',
      name: 'Touch Toes',
      duration: 180,
      calories: 15,
      state: null
    },
    {
      id: 'side-lunges',
      name: 'Side Lunges',
      duration: 120,
      calories: 18,
      state: null
    },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8, state: null }
  ];
  private runningExercise: Exercise;
  private exercises: Exercise[] = [];

  getAvailableExercises() {
    return this.availableExercise.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercise.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  completeExercise() {
    this.exercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress) {
    this.exercises.push({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getCompletedOrCancelExercises() {
    return this.exercises.slice();
  }
}
