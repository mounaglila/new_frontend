import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have sales data', () => {
    expect(component.sales).toBeDefined();
    expect(component.sales.length).toBeGreaterThan(0);
  });

  it('should have card data', () => {
    expect(component.card).toBeDefined();
    expect(component.card.length).toBeGreaterThan(0);
  });

  it('should have social card data', () => {
    expect(component.social_card).toBeDefined();
    expect(component.social_card.length).toBeGreaterThan(0);
  });

  it('should have progressing data', () => {
    expect(component.progressing).toBeDefined();
    expect(component.progressing.length).toBeGreaterThan(0);
  });

  it('should have tables data', () => {
    expect(component.tables).toBeDefined();
    expect(component.tables.length).toBeGreaterThan(0);
  });
});
