import { ComponentFixture, TestBed } from '@angular/core/testing';
//karma test runner
//jasmine
//ng test
//test bed
//runs in an isolated environment
import { AgentComponent } from './agent.component';

describe('AgentComponent', () => {
  let component: AgentComponent;
  let fixture: ComponentFixture<AgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
