import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenComponent } from './hostlisten.component';

describe('HostlistenComponent', () => {
  let component: HostlistenComponent;
  let fixture: ComponentFixture<HostlistenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostlistenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostlistenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
