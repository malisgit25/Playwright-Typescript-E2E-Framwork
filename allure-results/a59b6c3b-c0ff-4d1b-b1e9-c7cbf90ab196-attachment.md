# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> Enterprise Login Suite >> Login flow zaliva2010@hotmail.com
- Location: tests\LoginTest.spec.ts:14:9

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('//a[contains(@href,\'/careers/job\') and contains(@href,\'engineer\')]') resolved to 4 elements:
    1) <a href="/careers/job/6e9266fe8/windows-systems-engineer-tssci-wpolygraph/?">…</a> aka getByRole('link', { name: 'Windows Systems Engineer - TS' })
    2) <a class="button grow-primary-dark" href="/careers/job/6e9266fe8/windows-systems-engineer-tssci-wpolygraph/?">Learn More</a> aka getByRole('link', { name: 'Learn More' }).nth(4)
    3) <a href="/careers/job/ddb4d8258/windows-os-engineer-tssci-with-polygraph/?">…</a> aka getByRole('link', { name: 'Windows OS Engineer - TS/SCI' })
    4) <a class="button grow-primary-dark" href="/careers/job/ddb4d8258/windows-os-engineer-tssci-with-polygraph/?">Learn More</a> aka getByRole('link', { name: 'Learn More' }).nth(5)

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
                - textbox "try “Cyber” or “Engineer”" [ref=e45]
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
          - generic [ref=e59]: 1058 results
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
              - paragraph [ref=e94]: "REQ#: RQ215851 | Honolulu, Hawaii | On-Site"
              - heading "Zero Trust Architect SME" [level=3] [ref=e95]:
                - link "Zero Trust Architect SME" [ref=e96] [cursor=pointer]:
                  - /url: /careers/job/ccd4f4009/zero-trust-architect-sme/?
              - generic [ref=e97]: Advance your career while impacting our national security in cyber as a Zero Trust Architect Subject Matter Expert (SME) at GDIT. Here, technologists have many paths to grow a meaningful career supporting cyber missions and operations across the federal government. We are seeking a Zero Trust Archit…
              - link "Learn More" [ref=e98] [cursor=pointer]:
                - /url: /careers/job/ccd4f4009/zero-trust-architect-sme/?
            - generic [ref=e100]:
              - paragraph [ref=e101]: "REQ#: RQ220144 | Offutt AFB, Nebraska | On-Site"
              - heading "Wyse/Windows Administrator Senior" [level=3] [ref=e102]:
                - link "Wyse/Windows Administrator Senior" [ref=e103] [cursor=pointer]:
                  - /url: /careers/job/59c9c627b/wysewindows-administrator-senior/?
              - generic [ref=e104]: USSTRATCOM is a Command is responsible for strategic deterrence, nuclear operations, and enterprise IT services essential to national security. It supports Nuclear Command, Control, and Communications (NC3), Joint Electromagnetic Spectrum Operations (JEMSO), Global Strike, and Missile Threat Assessm…
              - link "Learn More" [ref=e105] [cursor=pointer]:
                - /url: /careers/job/59c9c627b/wysewindows-administrator-senior/?
            - generic [ref=e107]:
              - paragraph [ref=e108]: "REQ#: RQ219670 | Tampa, Florida | On-Site"
              - heading "Wireless Technician" [level=3] [ref=e109]:
                - link "Wireless Technician" [ref=e110] [cursor=pointer]:
                  - /url: /careers/job/fa3cdeaf0/wireless-technician/?
              - generic [ref=e111]: Own your career as a Wireless Technician at GDIT. Here, you’ll have the opportunity to build strong lines of cellular communications using cutting-edge technologies. Your work in Wireless Communications at GDIT will have an impact on our clients’ missions and ensuring personnel on travel are always …
              - link "Learn More" [ref=e112] [cursor=pointer]:
                - /url: /careers/job/fa3cdeaf0/wireless-technician/?
            - generic [ref=e114]:
              - paragraph [ref=e115]: "REQ#: RQ219381 | Germantown, Maryland | On-Site"
              - heading "Wireless Business Team (Logistics)" [level=3] [ref=e116]:
                - link "Wireless Business Team (Logistics)" [ref=e117] [cursor=pointer]:
                  - /url: /careers/job/735c2b9d2/wireless-business-team-logistics/?
              - generic [ref=e118]: Provide onsite support to upgrade approximately 5,800 cellular devices. Tasks include processing orders, receiving shipments, updating inventory, labeling packages, transporting devices for tagging and activation, and delivering to customer’s Service Desk Tier 2 teams . Requires ability to utilize e…
              - link "Learn More" [ref=e119] [cursor=pointer]:
                - /url: /careers/job/735c2b9d2/wireless-business-team-logistics/?
            - generic [ref=e121]:
              - paragraph [ref=e122]: "REQ#: RQ218815 | Chantilly, Virginia | On-Site"
              - heading "Windows Systems Engineer - TS/SCI w/Polygraph" [level=3] [ref=e123]:
                - link "Windows Systems Engineer - TS/SCI w/Polygraph" [ref=e124] [cursor=pointer]:
                  - /url: /careers/job/6e9266fe8/windows-systems-engineer-tssci-wpolygraph/?
              - generic [ref=e125]: At GDIT, people are our differentiator. As a Windows Systems Engineer, you will help ensure today is safe and tomorrow is smarter. Our work depends on a strong Windows Systems Engineer joining our team to make a positive impact on the client’s mission. HOW THE WINDOWS SYSTEMS ENGINEER WILL MAKE A…
              - link "Learn More" [ref=e126] [cursor=pointer]:
                - /url: /careers/job/6e9266fe8/windows-systems-engineer-tssci-wpolygraph/?
            - generic [ref=e128]:
              - paragraph [ref=e129]: "REQ#: RQ219425 | Annapolis Junction, Maryland | On-Site"
              - heading "Windows OS Engineer - TS/SCI with Polygraph" [level=3] [ref=e130]:
                - link "Windows OS Engineer - TS/SCI with Polygraph" [ref=e131] [cursor=pointer]:
                  - /url: /careers/job/ddb4d8258/windows-os-engineer-tssci-with-polygraph/?
              - generic [ref=e132]: WINDOWS OS ENGINEER YOUR IMPACT Own your opportunity to support national defense. Your work will help keep critical operations secure and connected across the global enterprise directly, contributing to a mission that protects our nation every day. CIS is growing, and we invite both our experienced …
              - link "Learn More" [ref=e133] [cursor=pointer]:
                - /url: /careers/job/ddb4d8258/windows-os-engineer-tssci-with-polygraph/?
            - generic [ref=e135]:
              - paragraph [ref=e136]: "REQ#: RQ212333 | Norfolk, Virginia | On-Site"
              - heading "Welder" [level=3] [ref=e137]:
                - link "Welder" [ref=e138] [cursor=pointer]:
                  - /url: /careers/job/4dc5cae6b/welder/?
              - generic [ref=e139]: Welder, Combination, Maintenance This is a waterfront shipboard construction and re-modernization position, working within shipyards and drydocks onboard U.S. Naval ships. The incumbent will be working in varying temperatures of high heat in the summer and cold in the winter preforming the following…
              - link "Learn More" [ref=e140] [cursor=pointer]:
                - /url: /careers/job/4dc5cae6b/welder/?
            - generic [ref=e142]:
              - paragraph [ref=e143]: "REQ#: RQ218066 | Pawcatuck, Connecticut | On-Site"
              - heading "Welder" [level=3] [ref=e144]:
                - link "Welder" [ref=e145] [cursor=pointer]:
                  - /url: /careers/job/c6ec7c4c4/welder/?
              - generic [ref=e146]: "Welder Position Summary: A Welder is responsible for joining metal parts using welding techniques and equipment, fabricating and maintaining structures, and ensuring adherence to specifications and safety standards. Key Responsibilities: Fabrication and Assembly:Interpret and execute blueprints, tec…"
              - link "Learn More" [ref=e147] [cursor=pointer]:
                - /url: /careers/job/c6ec7c4c4/welder/?
            - generic [ref=e149]:
              - paragraph [ref=e150]: "REQ#: RQ218059 | Pawcatuck, Connecticut | On-Site"
              - heading "Welder" [level=3] [ref=e151]:
                - link "Welder" [ref=e152] [cursor=pointer]:
                  - /url: /careers/job/07b82d50a/welder/?
              - generic [ref=e153]: "Welder Position Summary: A Welder is responsible for joining metal parts using welding techniques and equipment, fabricating and maintaining structures, and ensuring adherence to specifications and safety standards. Key Responsibilities: Fabrication and Assembly:Interpret and execute blueprints, tec…"
              - link "Learn More" [ref=e154] [cursor=pointer]:
                - /url: /careers/job/07b82d50a/welder/?
            - generic [ref=e156]:
              - paragraph [ref=e157]: "REQ#: RQ212303 | Seattle, Washington | On-Site"
              - heading "Welder" [level=3] [ref=e158]:
                - link "Welder" [ref=e159] [cursor=pointer]:
                  - /url: /careers/job/8abf6962e/welder/?
              - generic [ref=e160]: Welder, Combination, Maintenance This is a waterfront shipboard construction and re-modernization position, working within shipyards and drydocks onboard U.S. Naval ships. The incumbent will be working in varying temperatures of high heat in the summer and cold in the winter preforming the following…
              - link "Learn More" [ref=e161] [cursor=pointer]:
                - /url: /careers/job/8abf6962e/welder/?
          - list [ref=e164]:
            - listitem
            - listitem [ref=e165]:
              - generic [ref=e166]:
                - text: "1"
                - generic [ref=e167]: (current)
            - listitem [ref=e168]:
              - button "2" [ref=e169] [cursor=pointer]
            - listitem [ref=e170]:
              - button "3" [ref=e171] [cursor=pointer]
            - listitem [ref=e172]:
              - button "Next" [ref=e173] [cursor=pointer]:
                - text: ›
                - generic [ref=e174]: Next
      - contentinfo [ref=e175]:
        - generic [ref=e179]:
          - generic [ref=e180]:
            - link "General Dynamics Information Technology - Click to return to the homepage" [ref=e181] [cursor=pointer]:
              - /url: /
              - img [ref=e182]
            - paragraph [ref=e184]:
              - text: © 2026 General Dynamics Information Technology, Inc., a
              - link "General Dynamics" [ref=e185] [cursor=pointer]:
                - /url: https://www.gd.com/
              - text: Company.
          - menu [ref=e187]:
            - menuitem "Capabilities" [ref=e188] [cursor=pointer]
            - menuitem "Industries" [ref=e189] [cursor=pointer]
            - menuitem "Perspectives" [ref=e190] [cursor=pointer]
          - menu [ref=e192]:
            - menuitem "Careers" [ref=e193] [cursor=pointer]
            - menuitem "About GDIT" [ref=e194] [cursor=pointer]
            - menuitem "Contact Us" [ref=e195] [cursor=pointer]
          - contentinfo [ref=e196]:
            - generic [ref=e197]:
              - link "Visit GDIT's Facebook" [ref=e198] [cursor=pointer]:
                - /url: https://www.facebook.com/GeneralDynamicsIT/
              - link "Visit GDIT's Instagram" [ref=e200] [cursor=pointer]:
                - /url: https://www.instagram.com/generaldynamicsit/
              - link "Visit GDIT's LinkedIn" [ref=e204] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/general-dynamics-information-technology
              - link "Visit GDIT's Twitter" [ref=e206] [cursor=pointer]:
                - /url: https://twitter.com/GDIT
                - img [ref=e207]
              - link "Visit GDIT's YouTube" [ref=e209] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCaB-uSlpjnUQzNzXajf2L_w
              - link "Visit GDIT's Glassdoor" [ref=e211] [cursor=pointer]:
                - /url: https://www.glassdoor.com/Overview/Working-at-General-Dynamics-Information-Technology-EI_IE18661.11,50.htm
                - img [ref=e212]
            - paragraph [ref=e216]: Equal Opportunity Employer / Individuals with Disabilities / Protected Veterans
        - menu [ref=e223]:
          - menuitem "Privacy Policy" [ref=e224] [cursor=pointer]
          - menuitem "Legal Terms" [ref=e225] [cursor=pointer]
          - menuitem "CA Consumer Privacy" [ref=e226] [cursor=pointer]
          - menuitem "EU-US Data Privacy Framework Privacy Statement" [ref=e227] [cursor=pointer]
          - menuitem "EU General Data Protection Regulation" [ref=e228] [cursor=pointer]
          - menuitem "Accessibility, Accommodations and E-Verify" [ref=e229] [cursor=pointer]
          - menuitem "Site Map" [ref=e230] [cursor=pointer]
      - generic [ref=e231]:
        - paragraph [ref=e232]:
          - text: We use cookies to enhance your website experience. By continuing to visit this site, you agree to our use of cookies.
          - link "Learn More." [ref=e233] [cursor=pointer]:
            - /url: https://www.gdit.com/privacy-policy/
        - button "Accept" [ref=e234] [cursor=pointer]
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
     |                   ^ Error: locator.waitFor: Error: strict mode violation: locator('//a[contains(@href,\'/careers/job\') and contains(@href,\'engineer\')]') resolved to 4 elements:
  21 |   }
  22 | 
  23 |   async getTitle() {
  24 |     return await this.page.title();
  25 |   }
  26 | }
```