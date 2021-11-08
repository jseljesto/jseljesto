import { Component } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _orderService: OrderService) { }

  order = new Order(0, 0, false, "");
  title = 'Order';
  public deliveryTime: number = 0;
  public deliveryDate: string = "";
  public correctInkValue = true;
  public correctAdhesiveValue = true;

  /**
   * Updates delivery date for order
   * @param adhesiveNum amount of adhesive requested by user
   * @param inkNum amount of ink requested by user
   * @param checked checks if express delivery is requested
   */
  checkDelivery(adhesiveNum: number, inkNum: number, checked: boolean) {
    this.order.adhesiveValue = adhesiveNum;
    this.order.inkValue = inkNum;
    this.deliveryTime = this.deliveryTimeAdhesive(adhesiveNum);
    this.deliveryTime += this.deliveryTimeInk(inkNum);
    if (this.deliveryTime != 0) {
      if (checked === true) {
        this.deliveryTime--;
        this.order.expressDelivery = true;
      }
      else {
        this.order.expressDelivery = false;
      }
      this.deliveryDate = this.findDeliveryDate(this.deliveryTime);
      this.order.deliveryDate = this.deliveryDate;
    }
    else {
      this.deliveryDate = "";
      this.order.deliveryDate = this.deliveryDate;
    }
  }

  /**
   * Finds correct delivery times of adhesive units
   * @param adhesive amount of adhesive requested by user
   * @returns delivery time in days
   */
  deliveryTimeAdhesive(adhesive: number) {
    if (adhesive > 0 && adhesive < 10) {
      return 1;
    }
    else if (adhesive >= 10 && adhesive < 20) {
      return 2;
    }
    else if (adhesive >= 20 && adhesive <= 100) {
      return 3;
    }
    else {
      return 0;
    }
  }

  /**
   * Finds correct delivery times of ink units
   * @param ink amount of ink requested by user
   * @returns delivery time in days
   */
  deliveryTimeInk(ink: number) {
    if (ink > 0 && ink < 50) {
      return 1;
    }
    else if (ink >= 50 && ink < 200) {
      return 3;
    }
    else if (ink >= 200 && ink <= 1000) {
      return 10;
    }
    else {
      return 0;
    }
  }

  /**
   * Finds the correct delivery date of order
   * @param time delivery times for units
   * @returns the correct delivery date in string form
   */
  findDeliveryDate(time: number) {
    const date = new Date();
    let i: number = 0;
    let workDays: number = 0;
    while (workDays < time) {
      let weekday: number = i % 7;
      if (weekday != 5 && weekday != 6) {
        i++;
        workDays++;
      }
      else {
        time++;
        i++;
      }
    }
    date.setDate(date.getDate() + time);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  /**
   * Sends data to server side
   */
  onSubmit() {
    this._orderService.createOrder(this.order)
      .subscribe(
        data => console.log("Success", data),
        error => console.error('Error!', error)
      )
  }
}
