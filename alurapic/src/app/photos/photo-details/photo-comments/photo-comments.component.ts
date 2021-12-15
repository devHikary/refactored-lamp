import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  commentForm: FormGroup

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);

    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    })
  }

  save() {
    const comment = this.commentForm.get('comment').value as string;
    console.log(comment)
    this.photoService
    .addComments(this.photoId, comment)
    .subscribe(() => {
      this.commentForm.reset();
      alert('Comentário adicionado com sucesso');
    })
  }
} 