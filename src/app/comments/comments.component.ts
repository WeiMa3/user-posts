import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  post$: Object;
  comments$: Object;

  constructor(private data: DataService private route: ActivatedRoute) {
  	this.route.params.subscribe(params => this.post$ = params.id
  }

  ngOnInit() {
  	this.data.getComments(this.post$).subscribe(
  	  data => this.comments$ = data
  	)
  }

}
