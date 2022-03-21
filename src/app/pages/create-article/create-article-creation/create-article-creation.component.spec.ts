import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleCreationComponent } from './create-article-creation.component';

describe('CreateArticleCreationComponent', () => {
  let component: CreateArticleCreationComponent;
  let fixture: ComponentFixture<CreateArticleCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArticleCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticleCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
