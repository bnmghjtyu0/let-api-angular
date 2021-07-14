import { Component, OnInit, Inject } from '@angular/core';
import { MovieService } from '../movie.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss'],
})
export class MovieDialogComponent implements OnInit {
  embedUrl = '';
  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    private movieService: MovieService
  ) {}

  youtubeVideoInfo = {
    etag: '2IcVyEBbkekc9beLvZeA31VZlQI',
    id: { kind: 'youtube#video', videoId: 'QPzy8Ckza08' },
    kind: 'youtube#searchResult',
    snippet: {
      channelId: 'UCY26xU0-avwTJ6F6TzUZVEw',
      channelTitle: 'Peacock Kids',
      description:
        "In the sequel to DreamWorks Animation's Oscar®-nominated blockbuster comedy, the Templeton brothers—Tim (James Marsden, X-Men franchise) and his ...",
      liveBroadcastContent: 'none',
      publishTime: '2020-11-24T15:59:53Z',
      publishedAt: '2020-11-24T15:59:53Z',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/QPzy8Ckza08/default.jpg',
          width: 120,
          height: 90,
        },
        high: {
          url: 'https://i.ytimg.com/vi/QPzy8Ckza08/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        medium: {
          height: 180,
          url: 'https://i.ytimg.com/vi/QPzy8Ckza08/mqdefault.jpg',
          width: 320,
        },
      },
      title: 'THE BOSS BABY: FAMILY BUSINESS | Official Trailer',
    },
  };
  ngOnInit(): void {
    this.getYoutubeSearch(this.data.title);
  }
  getYoutubeSearch(title: string) {
    this.movieService.getYoutubeSearch(title).subscribe((value) => {
      console.log(value.items[0]);
      this.embedUrl = `https://www.youtube.com/embed/${value.items[0].id.videoId}`;
      return (this.youtubeVideoInfo = value.items[0]);
    });
  }
}
