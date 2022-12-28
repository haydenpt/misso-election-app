import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptDetailPageComponent } from './prompt-detail-page.component';

describe('PromptDetailPageComponent', () => {
  let component: PromptDetailPageComponent;
  let fixture: ComponentFixture<PromptDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
