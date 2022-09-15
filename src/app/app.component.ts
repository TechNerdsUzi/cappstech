import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'cappstech';
  drawer: boolean = false;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<img src="assets/images/left-circle.svg" alt="left-circle">', '<img src="assets/images/right-circle.svg" alt="right-circle">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    autoplay: true
  }

  happyClient: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
        margin: 15
      },
      400: {
        items: 3,
        margin: 15
      },
      740: {
        items: 4,
        margin: 15
      },
      940: {
        items: 6,
        margin: 15
      }
    },
  }

  constructor(private http: HttpClient) { }

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    companyName: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    location: new FormControl(null),
    requirements: new FormControl(null, Validators.required)
  });

  toggleDrawer() {
    this.drawer = this.drawer ? false : true;
  }

  submit(form) {
    const alert = document.getElementById('myalert');
    alert.className += 'show'
    this.contactForm.disable();
    this.http.post(`http://localhost:8888/contactForm`, form).subscribe(() => {
      this.contactForm.enable();
    });
  }

  scrollTo(container) {
    this.drawer = false;
    document.getElementById(container).scrollIntoView({ behavior: "smooth", block: "start" });
  }

}
