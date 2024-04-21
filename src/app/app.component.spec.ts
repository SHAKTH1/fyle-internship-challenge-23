// app.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule for NgModel
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for ApiService
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule, HttpClientModule], // Import FormsModule and HttpClientModule
    declarations: [AppComponent],
    providers: [ApiService] // Provide ApiService
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Fyle Internship Challenge'`, () => { // Adjust title expectation
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Fyle Internship Challenge');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.font-bold')?.textContent).toContain('Fyle Internship Challenge');
  });
});
