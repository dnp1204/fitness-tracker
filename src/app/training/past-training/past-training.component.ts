import { TrainingService } from './../training.service';
import { Exercise } from './../exercice.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelExercises();
  }
}
