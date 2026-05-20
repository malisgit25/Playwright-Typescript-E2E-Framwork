import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  email = this.page.getByRole('textbox', { name: /email/i });
  password = this.page.locator('input[type="password"]');
  signInBtn = this.page.getByRole('button', { name: 'Sign In' });

  async login(user: string, pass: string) {
    await this.fill(this.email, user);
    await this.fill(this.password, pass);
    await this.click(this.signInBtn);
  }
}