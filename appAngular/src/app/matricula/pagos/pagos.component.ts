import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreditCardDirectivesModule, CreditCardFormatDirective, CreditCardValidators } from 'angular-cc-library';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CreditCardDirectivesModule, CreditCardFormatDirective],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent implements OnInit{
  creditCardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.creditCardForm = this.fb.group({
      cardNumber: ['4214109714776229', [Validators.required,CreditCardValidators.validateCCNumber]],
      expiryDate: ['09/2029', [Validators.required,CreditCardValidators.validateExpDate]],
      cvc: ['320', [Validators.required,Validators.minLength(3), Validators.maxLength(4)]]          
    });
  }

  ngOnInit() {

  }

  pagar() {
    Swal.fire({
      title: "Pago exitoso",
      text: "Pago realizado exitosamente",
      icon: "success"
    });
  }
}
