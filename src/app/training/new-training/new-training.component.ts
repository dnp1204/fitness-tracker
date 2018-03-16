import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { UIService } from '../../shared/ui.service';
import { TrainingService } from '../training.service';
import { Exercise } from './../exercice.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  exercisesSubscription: Subscription;
  isLoading = true;
  private loadingSubs: Subscription;

  constructor(
    private trainingService: TrainingService,
    private uiService: UIService
  ) {}

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(
      isLoading => (this.isLoading = isLoading)
    );
    this.exercisesSubscription = this.trainingService.exercisesChanged.subscribe(
      exercises => {
        this.exercises = exercises;
      }
    );
    this.fetchExercises();
  }

  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }

    if (this.exercisesSubscription) {
      this.exercisesSubscription.unsubscribe();
    }
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }
}
