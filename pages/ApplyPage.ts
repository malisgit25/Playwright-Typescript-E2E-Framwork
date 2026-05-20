import { BasePage } from './BasePage';

export class ApplyPage extends BasePage {

  applyBtn = this.page.locator("a[href*='/apply']").filter({
  hasText: 'Apply Now',
  visible: true
});


  async clickApplyButton() {
    //await this.applyBtn.waitFor({ state: 'visible' });
    await this.click(this.applyBtn);
  }
}