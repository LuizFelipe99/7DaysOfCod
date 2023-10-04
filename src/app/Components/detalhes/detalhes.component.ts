import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}

  cancelar(): void {
    this.dialogRef.close();
  }
}
