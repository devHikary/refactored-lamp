import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from 'src/app/photos/photo/photo';
import { PhotoService } from 'src/app/photos/photo/photo.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'ap-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<string>;
  userName: string;
  photos: Photo

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private loadingService: LoadingService
    ) { }

  ngOnInit(): void {
    this.loadingService.start();
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data['photos'];
    });
  }
}