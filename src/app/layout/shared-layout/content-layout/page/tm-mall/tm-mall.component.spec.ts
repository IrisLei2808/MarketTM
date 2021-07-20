import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmMallComponent } from './tm-mall.component';

describe('TmMallComponent', () => {
  let component: TmMallComponent;
  let fixture: ComponentFixture<TmMallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmMallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
