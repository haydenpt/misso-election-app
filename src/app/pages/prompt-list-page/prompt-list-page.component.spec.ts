import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptListPageComponent } from './prompt-list-page.component';

describe('PromptListPageComponent', () => {
  let component: PromptListPageComponent;
  let fixture: ComponentFixture<PromptListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
