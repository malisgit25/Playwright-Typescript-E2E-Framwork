import { BasePage } from './BasePage';

export class MyInformationPage extends BasePage {

  firstName =
    this.page.locator('#name--legalName--firstName');

  lastName =
    this.page.locator('#name--legalName--lastName');

  addressLine1 =
    this.page.locator('#address--addressLine1');

  city =
    this.page.locator('#address--city');

  saveAndContinueBtn =
    this.page.locator("button[data-automation-id='pageFooterNextButton01']");

  async enterFirstName(value: string = 'Md') {
    await this.fill(this.firstName, value);
  }

  async enterLastName(value: string = 'Ali') {
    await this.fill(this.lastName, value);
  }

  async enterAddressLine1(value: string = '1234 test') {
    await this.fill(this.addressLine1, value);
  }

  async enterCity(value: string = 'Reston') {
    await this.fill(this.city, value);
  }

  async clickSaveAndContinue() {
    await this.click(this.saveAndContinueBtn);
  }
}