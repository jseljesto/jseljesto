import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'order'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Order');
  });

  it('should find the correct delivery time for adhesive example', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let app: number = fixture.componentInstance.deliveryTimeAdhesive(5);
    expect(app).toBe(1);
    app = fixture.componentInstance.deliveryTimeAdhesive(10);
    expect(app).toBe(2);
    app = fixture.componentInstance.deliveryTimeAdhesive(50);
    expect(app).toBe(3);

  });

  it('should find the correct delivery time for ink example', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let app: number = fixture.componentInstance.deliveryTimeInk(25);
    expect(app).toBe(1);
    app = fixture.componentInstance.deliveryTimeInk(50);
    expect(app).toBe(3);
    app = fixture.componentInstance.deliveryTimeInk(500);
    expect(app).toBe(10);
  });
});
