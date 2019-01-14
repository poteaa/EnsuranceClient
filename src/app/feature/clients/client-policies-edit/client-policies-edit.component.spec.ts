import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPoliciesEditComponent } from './client-policies-edit.component';

describe('ClientPoliciesEditComponent', () => {
  let component: ClientPoliciesEditComponent;
  let fixture: ComponentFixture<ClientPoliciesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPoliciesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPoliciesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
