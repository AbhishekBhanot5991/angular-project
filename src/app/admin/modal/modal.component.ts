import { Component } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  display: boolean = false;

    showDialog() {
        this.display = true;
    }

}
