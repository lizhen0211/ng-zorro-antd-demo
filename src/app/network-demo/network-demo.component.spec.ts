import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDemoComponent } from './network-demo.component';

describe('NetworkDemoComponent', () => {
  let component: NetworkDemoComponent;
  let fixture: ComponentFixture<NetworkDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
