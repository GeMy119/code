import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'منصة العمل الحر | الرئيسية';
  isLoading: boolean = true;

  ngOnInit() {
    // هنا يمكنك محاكاة تحميل البيانات باستخدام setTimeout
    setTimeout(() => {
      this.isLoading = false;  // تغيير حالة التحميل بعد 3 ثواني كمثال
    }, 3000);
  }
}
