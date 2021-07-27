import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  apiData: any = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.http
        .get(
          `https://gank.io/api/random/data/%E7%A6%8F%E5%88%A9/${params.page}`
        )
        .subscribe((post: any) => {
          console.log(post);
          this.apiData = post.results;
        });
    });
  }
  setDefaultPic(item: any) {
    let datas = [...this.apiData];
    let b = datas.filter((x) => x._id !== item._id);
    this.apiData = b;
  }
}
