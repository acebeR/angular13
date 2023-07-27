import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';

describe('AppComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [CalculadoraModule]
    })
  });

  it('Teste',async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
});
