import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoItemService } from 'src/app/core/services/video-item-service';
import { Item } from '../../components/search/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() res!: Item;

  videoItem:any;

  id:string = '';

  constructor(private route: ActivatedRoute, private httpService: VideoItemService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((p:Params) => {
      this.id = p['id'];
    });
    this.httpService.getInfoVideo(this.id).subscribe((data:any) => {
      this.videoItem = data.items;
    });
  }
}
