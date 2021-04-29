import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsagesComponent } from './admin-usages.component';

describe('AdminUsagesComponent', () => {
  let component: AdminUsagesComponent;
  let fixture: ComponentFixture<AdminUsagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
