import loginData from '../test-data/loginData.json';
import { test, expect } from '../fixtures/baseTest';
import { LoginPage } from '../pages/LoginPage';
import { SearchAndApplyPage } from '../pages/SearchAndApplyPage';
import { ApplyPage } from '../pages/ApplyPage';
import { ApplyManuallyPage } from '../pages/ApplyManuallyPage';
import { MyInformationPage } from '../pages/MyInformationPage';


test.describe.parallel('Enterprise Login Suite', () => {

  for (const data of loginData) {

    test(`Login ${data.email}`, async ({ page }) => {

        const login = new LoginPage(page);
        const search = new SearchAndApplyPage(page);
        const apply = new ApplyPage(page);
        const manual = new ApplyManuallyPage(page);
        const info =  new MyInformationPage(page);

        await login.login(
          data.email,
          data.password
        );

        await search.clickSearchAndApplyButton();
        await search.searchForJob('Test Engineer');
        await search.clickOnJobTitle();
        await apply.clickApplyButton();
        await manual.clickApplyManually();
        await info.enterFirstName();
        await info.enterLastName();
        await info.enterAddressLine1();
        await info.enterCity();
        await info.clickSaveAndContinue();

        await expect(page)
          .toHaveURL(
            /careers|apply|search/
          );
      });
  }
});