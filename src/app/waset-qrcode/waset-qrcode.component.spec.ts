import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasetQrcodeComponent } from './waset-qrcode.component';

describe('WasetQrcodeComponent', () => {
  let component: WasetQrcodeComponent;
  let fixture: ComponentFixture<WasetQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasetQrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasetQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
