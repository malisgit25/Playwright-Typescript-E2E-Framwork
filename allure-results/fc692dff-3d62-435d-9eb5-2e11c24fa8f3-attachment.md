# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> Enterprise Login Suite >> Login flow zaliva2010@hotmail.com
- Location: tests\LoginTest.spec.ts:14:9

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('//a[contains(@href,\'/careers/job\') and contains(@href,\'engineer\')]') resolved to 14 elements:
    1) <a href="/careers/job/fe4b3655b/test-engineer-senior-manual/?q=Test%20Engineer">…</a> aka getByRole('link', { name: 'Test Engineer Senior (Manual)' })
    2) <a class="button grow-primary-dark" href="/careers/job/fe4b3655b/test-engineer-senior-manual/?q=Test%20Engineer">Learn More</a> aka getByRole('link', { name: 'Learn More' }).first()
    3) <a href="/careers/job/49fe34f8b/test-engineer-principal/?q=Test%20Engineer">…</a> aka getByRole('link', { name: 'Test Engineer Principal' })
    4) <a class="button grow-primary-dark" href="/careers/job/49fe34f8b/test-engineer-principal/?q=Test%20Engineer">Learn More</a> aka getByRole('link', { name: 'Learn More' }).nth(1)
    5) <a href="/careers/job/bba094b1d/mcco-test-engineer-active-tssci-ci-poly/?q=Test%20Engineer">…</a> aka getByRole('link', { name: 'MCCO Test Engineer | Active' })
    6) <a class="button grow-primary-dark" href="/careers/job/bba094b1d/mcco-test-engineer-active-tssci-ci-poly/?q=Test%20Engineer">Learn More</a> aka getByRole('link', { name: 'Learn More' }).nth(2)
    7) <a href="/careers/job/fbb0bfb86/cno-test-engineer/?q=Test%20Engineer">…</a> aka getByRole('link', { name: 'CNO Test Engineer' })
    8) <a class="button grow-primary-dark" href="/careers/job/fbb0bfb86/cno-test-engineer/?q=Test%20Engineer">Learn More</a> aka getByRole('link', { name: 'Learn More' }).nth(3)
    9) <a href="/careers/job/8ec7f2862/mcco-senior-test-engineer-active-tssci-ci-poly/?q=Test%20Engineer">…</a> aka getByRole('link', { name: 'MCCO Senior Test Engineer |' })
    10) <a class="button grow-primary-dark" href="/careers/job/8ec7f2862/mcco-senior-test-engineer-active-tssci-ci-poly/?q=Test%20Engineer">Learn More</a> aka getByRole('link', { name: 'Learn More' }).nth(4)
    ...

Call log:
  - waiting for locator('//a[contains(@href,\'/careers/job\') and contains(@href,\'engineer\')]') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e2]: Careers Search | GDIT
  - generic [ref=e3]:
    - banner [ref=e4]:
      - navigation [ref=e5]:
        - generic [ref=e6]:
          - link "General Dynamics Information Technology - Click to return to the homepage" [ref=e8] [cursor=pointer]:
            - /url: /
            - img [ref=e9]
          - menubar [ref=e13]:
            - menuitem "Capabilities" [ref=e14]:
              - menuitem "Capabilities" [ref=e15] [cursor=pointer]
            - menuitem "Industries" [ref=e16]:
              - menuitem "Industries" [ref=e17] [cursor=pointer]
            - menuitem "Perspectives" [ref=e18]:
              - menuitem "Perspectives" [ref=e19] [cursor=pointer]
            - menuitem "Careers" [ref=e20]:
              - menuitem "Careers" [ref=e21] [cursor=pointer]
            - menuitem "About GDIT" [ref=e22]:
              - menuitem "About GDIT" [ref=e23] [cursor=pointer]
            - button "Search (Press enter to open search)" [ref=e24] [cursor=pointer]:
              - img [ref=e25]
    - generic [ref=e27]:
      - generic [ref=e28]:
        - generic [ref=e34]:
          - generic [ref=e35]:
            - heading "Find your place." [level=3] [ref=e36]
            - heading "What impact do you want to have on the world? Search current jobs at GDIT." [level=4] [ref=e37]:
              - paragraph [ref=e38]:
                - text: What impact do you want to have on the world?
                - text: Search current jobs at GDIT.
          - generic [ref=e40]:
            - generic [ref=e42]:
              - generic [ref=e43]: try “Cyber” or “Engineer”
              - generic [ref=e44]:
                - generic:
                  - img
                - textbox "try “Cyber” or “Engineer”" [ref=e45]: Test Engineer
                - button "Search" [ref=e46] [cursor=pointer]:
                  - generic [ref=e47]: Search
            - generic [ref=e48]:
              - generic [ref=e49]:
                - link "Join Talent Community |" [ref=e50] [cursor=pointer]:
                  - /url: /careers/talent-community/
                - link "View Application Status" [ref=e51] [cursor=pointer]:
                  - /url: https://gdit.wd5.myworkdayjobs.com/en-US/External_Career_Site/login
              - paragraph [ref=e53]:
                - text: We are aware of job posting scams targeting candidates. Please visit our
                - link "FAQs" [ref=e54] [cursor=pointer]:
                  - /url: /careers/employment-application-faqs/
                - text: for tips to keep yourself safe.
              - link "Accessibility, Accommodations and E-Verify" [ref=e56] [cursor=pointer]:
                - /url: /careers/accessibility-and-accommodations/
        - generic [ref=e57]:
          - generic [ref=e59]: 358 results found for ‘Test Engineer’
          - generic [ref=e60]:
            - generic [ref=e62]:
              - log [ref=e64]
              - generic [ref=e65]:
                - generic [ref=e66]:
                  - generic [ref=e67]: Clearances
                  - combobox "Security Clearances" [ref=e69]
                - generic [ref=e70]:
                  - generic:
                    - img
            - generic [ref=e72]:
              - log [ref=e74]
              - generic [ref=e75]:
                - generic [ref=e76]:
                  - generic [ref=e77]: Categories
                  - combobox "Job Categories" [ref=e79]
                - generic [ref=e80]:
                  - generic:
                    - img
            - generic [ref=e82]:
              - log [ref=e84]
              - generic [ref=e85]:
                - generic [ref=e86]:
                  - generic [ref=e87]: Locations
                  - combobox "Job Locations" [ref=e89]
                - generic [ref=e90]:
                  - generic:
                    - img
          - generic [ref=e91]:
            - generic [ref=e93]:
              - paragraph [ref=e94]: "REQ#: RQ219281 | Albany, New York | Hybrid"
              - heading "Test Engineer Senior (Manual)" [level=3] [ref=e95]:
                - link "Test Engineer Senior (Manual)" [ref=e96] [cursor=pointer]:
                  - /url: /careers/job/fe4b3655b/test-engineer-senior-manual/?q=Test%20Engineer
                  - mark [ref=e97]: Test
                  - mark [ref=e98]: Engineer
                  - text: Senior (Manual)
              - generic [ref=e99]:
                - mark [ref=e100]: Test
                - mark [ref=e101]: Engineer
                - text: Senior (Manual) Transform technology into opportunity as a
                - mark [ref=e102]: Test
                - mark [ref=e103]: Engineer
                - text: Senior at GDIT. Shape what’s next for mission-critical government projects while shaping what’s next for your engineering career. MEANINGFUL WORK AND PERSONAL IMPACT As a
                - mark [ref=e104]: Test
                - mark [ref=e105]: Engineer
                - text: Senior, the work you’ll do a…
              - link "Learn More" [ref=e106] [cursor=pointer]:
                - /url: /careers/job/fe4b3655b/test-engineer-senior-manual/?q=Test%20Engineer
            - generic [ref=e108]:
              - paragraph [ref=e109]: "REQ#: RQ219409 | Indianapolis, Indiana | Hybrid"
              - heading "Test Engineer Principal" [level=3] [ref=e110]:
                - link "Test Engineer Principal" [ref=e111] [cursor=pointer]:
                  - /url: /careers/job/49fe34f8b/test-engineer-principal/?q=Test%20Engineer
                  - mark [ref=e112]: Test
                  - mark [ref=e113]: Engineer
                  - text: Principal
              - generic [ref=e114]:
                - mark [ref=e115]: TEST
                - mark [ref=e116]: ENGINEER
                - text: PRINCIPALTransform technology into opportunity as a
                - mark [ref=e117]: Test
                - mark [ref=e118]: Engineer
                - text: Principal at GDIT. Shape what’s next for mission-critical government projects while shaping what’s next for your engineering career.MEANINGFUL WORK AND PERSONAL IMPACTAs a
                - mark [ref=e119]: Test
                - mark [ref=e120]: Engineer
                - text: Principal, the work you’ll do at G…
              - link "Learn More" [ref=e121] [cursor=pointer]:
                - /url: /careers/job/49fe34f8b/test-engineer-principal/?q=Test%20Engineer
            - generic [ref=e123]:
              - paragraph [ref=e124]: "REQ#: RQ218406 | Fort Meade, Maryland | On-Site"
              - heading "MCCO Test Engineer | Active TS/SCI CI Poly" [level=3] [ref=e125]:
                - link "MCCO Test Engineer | Active TS/SCI CI Poly" [ref=e126] [cursor=pointer]:
                  - /url: /careers/job/bba094b1d/mcco-test-engineer-active-tssci-ci-poly/?q=Test%20Engineer
                  - text: MCCO
                  - mark [ref=e127]: Test
                  - mark [ref=e128]: Engineer
                  - text: "| Active TS/SCI CI Poly"
              - generic [ref=e129]:
                - text: Transform technology into opportunity as a
                - mark [ref=e130]: Test
                - mark [ref=e131]: Engineer
                - text: at GDIT. Shape what’s next for mission-critical government projects while shaping what’s next for your engineering career. The Marine Corps Cyberspace Operations (MCCO) Tool Developer program builds custom software that supports real-world cyb…
              - link "Learn More" [ref=e132] [cursor=pointer]:
                - /url: /careers/job/bba094b1d/mcco-test-engineer-active-tssci-ci-poly/?q=Test%20Engineer
            - generic [ref=e134]:
              - paragraph [ref=e135]: "REQ#: RQ208307 | Hanover, Maryland | On-Site"
              - heading "CNO Test Engineer" [level=3] [ref=e136]:
                - link "CNO Test Engineer" [ref=e137] [cursor=pointer]:
                  - /url: /careers/job/fbb0bfb86/cno-test-engineer/?q=Test%20Engineer
                  - text: CNO
                  - mark [ref=e138]: Test
                  - mark [ref=e139]: Engineer
              - generic [ref=e140]: The responsibility is career-defining. So is the opportunity. At General Dynamics Information Technology, we invent the technologies, products and services, that help our nation's heroes keep our nation safe. The work is so advanced, our teams regularly redefine innovation and excellence for the wor…
              - link "Learn More" [ref=e141] [cursor=pointer]:
                - /url: /careers/job/fbb0bfb86/cno-test-engineer/?q=Test%20Engineer
            - generic [ref=e143]:
              - paragraph [ref=e144]: "REQ#: RQ218409 | Fort Meade, Maryland | On-Site"
              - heading "MCCO Senior Test Engineer | Active TS/SCI CI Poly" [level=3] [ref=e145]:
                - link "MCCO Senior Test Engineer | Active TS/SCI CI Poly" [ref=e146] [cursor=pointer]:
                  - /url: /careers/job/8ec7f2862/mcco-senior-test-engineer-active-tssci-ci-poly/?q=Test%20Engineer
                  - text: MCCO Senior
                  - mark [ref=e147]: Test
                  - mark [ref=e148]: Engineer
                  - text: "| Active TS/SCI CI Poly"
              - generic [ref=e149]:
                - text: Transform technology into opportunity as a Senior
                - mark [ref=e150]: Test
                - mark [ref=e151]: Engineer
                - text: at GDIT. Shape what’s next for mission-critical government projects while shaping what’s next for your engineering career. The Marine Corps Cyberspace Operations (MCCO) Tool Developer program builds custom software that supports real-wo…
              - link "Learn More" [ref=e152] [cursor=pointer]:
                - /url: /careers/job/8ec7f2862/mcco-senior-test-engineer-active-tssci-ci-poly/?q=Test%20Engineer
            - generic [ref=e154]:
              - paragraph [ref=e155]: "REQ#: RQ214037 | Hanover, Maryland | On-Site"
              - heading "CNO Automated Test Engineer (Active TS/SCI with Poly/NEW HIRE SIGN-ON BONUS UP TO $30,000) (Open))" [level=3] [ref=e156]:
                - link "CNO Automated Test Engineer (Active TS/SCI with Poly/NEW HIRE SIGN-ON BONUS UP TO $30,000) (Open))" [ref=e157] [cursor=pointer]:
                  - /url: /careers/job/624fc1f2f/cno-automated-test-engineer-active-tssci-with-polynew-hire-sign-on-bonus-up-to-30000-open/?q=Test%20Engineer
                  - text: CNO Automated
                  - mark [ref=e158]: Test
                  - mark [ref=e159]: Engineer
                  - text: (Active TS/SCI with Poly/NEW HIRE SIGN-ON BONUS UP TO $30,000) (Open))
              - generic [ref=e160]:
                - text: PERKS:This position is eligible for a sign-on bonus up to $30,000 for New HiresYou receive an additional 5 days of PTO for TS/SCI with Poly CNO
                - mark [ref=e161]: Test
                - mark [ref=e162]: Engineer
                - text: Expert Seize your opportunity to make a personal impact as a
                - mark [ref=e163]: Test
                - mark [ref=e164]: Engineer
                - text: Expert supporting the intelligence community. GDIT is your place to…
              - link "Learn More" [ref=e165] [cursor=pointer]:
                - /url: /careers/job/624fc1f2f/cno-automated-test-engineer-active-tssci-with-polynew-hire-sign-on-bonus-up-to-30000-open/?q=Test%20Engineer
            - generic [ref=e167]:
              - paragraph [ref=e168]: "REQ#: RQ219501 | Remote, Indiana | On-Site"
              - heading "Modeling & Simulation Specialist Associate" [level=3] [ref=e169]:
                - link "Modeling & Simulation Specialist Associate" [ref=e170] [cursor=pointer]:
                  - /url: /careers/job/81291eb8d/modeling-simulation-specialist-associate/?q=Test%20Engineer
              - generic [ref=e171]:
                - mark [ref=e172]: TEST
                - mark [ref=e173]: ENGINEER
                - text: ASSOCIATETransform technology into opportunity as a
                - mark [ref=e174]: Test
                - mark [ref=e175]: Engineer
                - text: Associate at GDIT. Shape what’s next for mission-critical government projects while shaping what’s next for your engineering career.MEANINGFUL WORK AND PERSONAL IMPACTAs a
                - mark [ref=e176]: Test
                - mark [ref=e177]: Engineer
                - text: Associate, the work you’ll do at G…
              - link "Learn More" [ref=e178] [cursor=pointer]:
                - /url: /careers/job/81291eb8d/modeling-simulation-specialist-associate/?q=Test%20Engineer
            - generic [ref=e180]:
              - paragraph [ref=e181]: "REQ#: RQ219118 | Remote, Indiana | On-Site"
              - heading "Modeling & Simulation Specialist Associate" [level=3] [ref=e182]:
                - link "Modeling & Simulation Specialist Associate" [ref=e183] [cursor=pointer]:
                  - /url: /careers/job/2cddda60f/modeling-simulation-specialist-associate/?q=Test%20Engineer
              - generic [ref=e184]:
                - mark [ref=e185]: TEST
                - mark [ref=e186]: ENGINEER
                - text: ASSOCIATETransform technology into opportunity as a
                - mark [ref=e187]: Test
                - mark [ref=e188]: Engineer
                - text: Associate at GDIT. Shape what’s next for mission-critical government projects while shaping what’s next for your engineering career.MEANINGFUL WORK AND PERSONAL IMPACTAs a
                - mark [ref=e189]: Test
                - mark [ref=e190]: Engineer
                - text: Associate, the work you’ll do at G…
              - link "Learn More" [ref=e191] [cursor=pointer]:
                - /url: /careers/job/2cddda60f/modeling-simulation-specialist-associate/?q=Test%20Engineer
            - generic [ref=e193]:
              - paragraph [ref=e194]: "REQ#: RQ219137 | Huntsville, Alabama | On-Site"
              - heading "Systems Engineer – Sustainment Engineering" [level=3] [ref=e195]:
                - link "Systems Engineer – Sustainment Engineering" [ref=e196] [cursor=pointer]:
                  - /url: /careers/job/4685dcbd4/systems-engineer-sustainment-engineering/?q=Test%20Engineer
                  - text: Systems
                  - mark [ref=e197]: Engineer
                  - text: – Sustainment Engineering
              - generic [ref=e198]:
                - text: Advance how our customers operate while you advance your career. Join GDIT as a Systems
                - mark [ref=e199]: Engineer
                - text: Senior and build an impactful career in enterprise IT, collaborating with people who are driven and resourceful like you. Meaningful work and Personal ImpactGDIT is seeking a Systems Integration
                - mark [ref=e200]: Engineer
              - link "Learn More" [ref=e201] [cursor=pointer]:
                - /url: /careers/job/4685dcbd4/systems-engineer-sustainment-engineering/?q=Test%20Engineer
            - generic [ref=e203]:
              - paragraph [ref=e204]: "REQ#: RQ217755 | Remote, The United States of America"
              - heading "Oracle Health - IT Quality Assurance Tester Principal" [level=3] [ref=e205]:
                - link "Oracle Health - IT Quality Assurance Tester Principal" [ref=e206] [cursor=pointer]:
                  - /url: /careers/job/522153a3a/oracle-health-it-quality-assurance-tester-principal/?q=Test%20Engineer
              - generic [ref=e207]: GDIT is looking to fill an IT Quality Assurance Tester Principal position to join our team supporting the Indian Health Service (IHS) Electronic Health Record Modernization Program known as Patients at the Heart (PATH) EHR. Your efforts will serve to improve the patient experience and quality of car…
              - link "Learn More" [ref=e208] [cursor=pointer]:
                - /url: /careers/job/522153a3a/oracle-health-it-quality-assurance-tester-principal/?q=Test%20Engineer
          - list [ref=e211]:
            - listitem
            - listitem [ref=e212]:
              - generic [ref=e213]:
                - text: "1"
                - generic [ref=e214]: (current)
            - listitem [ref=e215]:
              - button "2" [ref=e216] [cursor=pointer]
            - listitem [ref=e217]:
              - button "3" [ref=e218] [cursor=pointer]
            - listitem [ref=e219]:
              - button "Next" [ref=e220] [cursor=pointer]:
                - text: ›
                - generic [ref=e221]: Next
      - contentinfo [ref=e222]:
        - generic [ref=e226]:
          - generic [ref=e227]:
            - link "General Dynamics Information Technology - Click to return to the homepage" [ref=e228] [cursor=pointer]:
              - /url: /
              - img [ref=e229]
            - paragraph [ref=e231]:
              - text: © 2026 General Dynamics Information Technology, Inc., a
              - link "General Dynamics" [ref=e232] [cursor=pointer]:
                - /url: https://www.gd.com/
              - text: Company.
          - menu [ref=e234]:
            - menuitem "Capabilities" [ref=e235] [cursor=pointer]
            - menuitem "Industries" [ref=e236] [cursor=pointer]
            - menuitem "Perspectives" [ref=e237] [cursor=pointer]
          - menu [ref=e239]:
            - menuitem "Careers" [ref=e240] [cursor=pointer]
            - menuitem "About GDIT" [ref=e241] [cursor=pointer]
            - menuitem "Contact Us" [ref=e242] [cursor=pointer]
          - contentinfo [ref=e243]:
            - generic [ref=e244]:
              - link "Visit GDIT's Facebook" [ref=e245] [cursor=pointer]:
                - /url: https://www.facebook.com/GeneralDynamicsIT/
              - link "Visit GDIT's Instagram" [ref=e247] [cursor=pointer]:
                - /url: https://www.instagram.com/generaldynamicsit/
              - link "Visit GDIT's LinkedIn" [ref=e251] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/general-dynamics-information-technology
              - link "Visit GDIT's Twitter" [ref=e253] [cursor=pointer]:
                - /url: https://twitter.com/GDIT
                - img [ref=e254]
              - link "Visit GDIT's YouTube" [ref=e256] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCaB-uSlpjnUQzNzXajf2L_w
              - link "Visit GDIT's Glassdoor" [ref=e258] [cursor=pointer]:
                - /url: https://www.glassdoor.com/Overview/Working-at-General-Dynamics-Information-Technology-EI_IE18661.11,50.htm
                - img [ref=e259]
            - paragraph [ref=e263]: Equal Opportunity Employer / Individuals with Disabilities / Protected Veterans
        - menu [ref=e270]:
          - menuitem "Privacy Policy" [ref=e271] [cursor=pointer]
          - menuitem "Legal Terms" [ref=e272] [cursor=pointer]
          - menuitem "CA Consumer Privacy" [ref=e273] [cursor=pointer]
          - menuitem "EU-US Data Privacy Framework Privacy Statement" [ref=e274] [cursor=pointer]
          - menuitem "EU General Data Protection Regulation" [ref=e275] [cursor=pointer]
          - menuitem "Accessibility, Accommodations and E-Verify" [ref=e276] [cursor=pointer]
          - menuitem "Site Map" [ref=e277] [cursor=pointer]
      - generic [ref=e278]:
        - paragraph [ref=e279]:
          - text: We use cookies to enhance your website experience. By continuing to visit this site, you agree to our use of cookies.
          - link "Learn More." [ref=e280] [cursor=pointer]:
            - /url: https://www.gdit.com/privacy-policy/
        - button "Accept" [ref=e281] [cursor=pointer]
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  | 
  5  |   constructor(protected page: Page) {}
  6  | 
  7  |   async click(locator: Locator) {
  8  |     await locator.click();
  9  |   }
  10 | 
  11 |   async fill(locator: Locator, value: string) {
  12 |     await locator.fill(value);
  13 |   }
  14 | 
  15 |   async type(locator: Locator, value: string) {
  16 |     await locator.pressSequentially(value);
  17 |   }
  18 | 
  19 |   async waitForVisible(locator: Locator) {
> 20 |     await locator.waitFor({ state: 'visible' });
     |                   ^ Error: locator.waitFor: Error: strict mode violation: locator('//a[contains(@href,\'/careers/job\') and contains(@href,\'engineer\')]') resolved to 14 elements:
  21 |   }
  22 | 
  23 |   async getTitle() {
  24 |     return await this.page.title();
  25 |   }
  26 | }
```