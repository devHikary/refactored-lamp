import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoService } from '../../photo/photo.service';
import { PhotoComment } from './photo-comment';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: 'photo-comments.component.html',
})
export class PhotoCommentsComponent implements OnInit { 

  @Input() photoId: number;
  comments$: Observable<PhotoComment[]>

  constructor( private photoService: PhotoService) {
    
  }
  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);
  }
} 