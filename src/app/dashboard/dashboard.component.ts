import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true, // Add this if using standalone components
  imports: [MatIconModule,CommonModule,MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule] // Add this line
})
export class DashboardComponent {
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  openScanner() {
    if (!this.isMobile) {
      alert('Please use a mobile device to scan.');
      return;
    }
  
    const scanner = new Html5QrcodeScanner(
      'scanner', 
      { fps: 10, qrbox: 250 },
      true // Add verbose parameter (3rd argument)
    );
  
    scanner.render(
      (text) => {
        if (/^\d{13}$/.test(text)) { // Better EAN-13 validation using regex
          alert(`Scanned EAN-13: ${text}`);
        } else {
          alert('Invalid EAN-13 barcode!');
        }
        scanner.clear();
      },
      (error) => { // Add error callback
        console.error('Scanner error:', error);
      }
    );
  }
}