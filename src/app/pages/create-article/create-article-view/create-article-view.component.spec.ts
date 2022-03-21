import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleViewComponent } from './create-article-view.component';

describe('CreateArticleViewComponent', () => {
  let component: CreateArticleViewComponent;
  let fixture: ComponentFixture<CreateArticleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArticleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
