import { BasePage } from './BasePage';

export class SearchAndApplyPage extends BasePage {

  searchAndApplyBtn = this.page.locator("button[data-automation-id='navigationItem-Search and Apply']");
  searchInput = this.page.locator('input.search-input');
  submitButton = this.page.locator('#submit-button');
  jobTitle =   this.page.locator("a[href*='/careers/job/']").first();

  async clickSearchAndApplyButton() {
    await this.click(this.searchAndApplyBtn);
  }

  async searchForJob(job: string) {
    await this.fill(this.searchInput, job);
    await this.click(this.submitButton);
  }

  async clickOnJobTitle() {
    await this.click(this.jobTitle);
  }
}