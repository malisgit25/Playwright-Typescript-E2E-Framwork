import { BasePage } from './BasePage';

export class ApplyManuallyPage extends BasePage {

  applyManuallyBtn =
    this.page.locator("a[data-automation-id='applyManually']");

  async clickApplyManually() {
    await this.click(this.applyManuallyBtn);
  }
}