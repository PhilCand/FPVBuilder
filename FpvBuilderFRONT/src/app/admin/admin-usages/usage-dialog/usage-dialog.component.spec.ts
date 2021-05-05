import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageDialogComponent } from './usage-dialog.component';

describe('UsageDialogComponent', () => {
  let component: UsageDialogComponent;
  let fixture: ComponentFixture<UsageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
