import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloWorld } from './app.component';

describe('HelloWorld', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HelloWorld
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HelloWorld);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'miPrimeraApp'`, () => {
    const fixture = TestBed.createComponent(HelloWorld);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('miPrimeraApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HelloWorld);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('miPrimeraApp app is running!');
  });
});
