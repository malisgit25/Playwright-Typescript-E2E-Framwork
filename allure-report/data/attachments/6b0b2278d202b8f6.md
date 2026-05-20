# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> Enterprise Login Suite >> Login zaliva2010@hotmail.com
- Location: tests\LoginTest.spec.ts:14:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Apply Now' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e2]: Test Engineer Senior (Manual) | GDIT
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
      - generic [ref=e30]:
        - heading "Test Engineer Senior (Manual)" [level=1] [ref=e33]
        - generic [ref=e34]:
          - generic [ref=e35]:
            - generic "Clearance Level icon" [ref=e36]:
              - img [ref=e37]
            - text: Clearance Level
            - generic [ref=e39]: None
          - generic [ref=e40]:
            - generic "Category icon" [ref=e41]:
              - img [ref=e42]
            - text: Category
            - generic [ref=e44]: Professional Engineering
          - generic [ref=e45]:
            - generic "Location icon" [ref=e46]:
              - img [ref=e47]
            - text: Location
            - generic [ref=e49]: Albany, New York
            - generic [ref=e50]: (Hybrid Workplace)
          - button "Apply Now" [ref=e52] [cursor=pointer]
        - generic [ref=e53]:
          - generic [ref=e54]: Key Skills For Success
          - paragraph [ref=e56]: Mainframe Automation
          - paragraph [ref=e58]: Manual Testing
          - paragraph [ref=e60]: Relational Database Management System (RDBMS)
          - paragraph [ref=e62]: Structured Query Language (SQL)
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e68]:
              - generic [ref=e69]: Share
              - link "Share via Facebook" [ref=e70] [cursor=pointer]:
                - /url: https://www.facebook.com/sharer/sharer.php?u=/careers/job/fe4b3655b/test-engineer-senior-manual/
                - img [ref=e71]
              - link "Share via LinkedIn" [ref=e73] [cursor=pointer]:
                - /url: https://www.linkedin.com/shareArticle?mini=true&url=/careers/job/fe4b3655b/test-engineer-senior-manual/
                - img [ref=e74]
              - link "Share via Twitter" [ref=e76] [cursor=pointer]:
                - /url: "https://twitter.com/intent/tweet?text=Explore this opportunity @GDIT: /careers/job/fe4b3655b/test-engineer-senior-manual/"
                - img [ref=e77]
              - link "Share via Email" [ref=e79] [cursor=pointer]:
                - /url: mailto:?subject=Test Engineer Senior (Manual)&body= Test Engineer Senior (Manual)Transform technology into opportunity as a Test Engineer Senior at GDIT. Shape what’s next for mission-critical government projects while shaping what’s next for your engineering career.MEANINGFUL WORK AND PERSONAL IMPACTAs a Test Engineer Senior, the work you’ll do at …%0D%0A%0D%0A/careers/job/fe4b3655b/test-engineer-senior-manual/
                - img [ref=e80]
            - generic [ref=e82]:
              - 'heading "REQ#: RQ219281" [level=5] [ref=e83]':
                - strong [ref=e84]: "REQ#:"
                - text: RQ219281
              - 'heading "Public Trust: None" [level=5] [ref=e85]':
                - strong [ref=e86]: "Public Trust:"
                - text: None
              - 'heading "Requisition Type: Regular" [level=5] [ref=e87]':
                - strong [ref=e88]: "Requisition Type:"
                - text: Regular
              - heading "Your Impact" [level=5] [ref=e89]
              - paragraph [ref=e90]: Own your opportunity to work alongside federal civilian agencies. Make an impact by providing services that help the government ensure the well being and support of U.S. citizens.
              - heading "Job Description" [level=5] [ref=e91]
              - generic [ref=e92]:
                - paragraph [ref=e93]: Test Engineer Senior (Manual)
                - paragraph
                - paragraph [ref=e94]: Transform technology into opportunity as a Test Engineer Senior at GDIT. Shape what’s next for mission-critical government projects while shaping what’s next for your engineering career.
                - paragraph
                - paragraph [ref=e95]: MEANINGFUL WORK AND PERSONAL IMPACT
                - paragraph [ref=e96]: As a Test Engineer Senior, the work you’ll do at GDIT will be impactful to the mission of the New York State Department of Heath Medicaid Management Information System. You will play a crucial role in supporting the eMedNY Systems Integration Team, you will be trusted to have an excellent understanding of software integration testing best practices, experience with manual testing tools and have knowledge of health care claims processing.
                - paragraph
                - paragraph [ref=e97]: We are looking for a qualified candidate who has a passion for quality to help ensure the systemic integrity of NYS MMIS. Experience with a MMIS, mainframe technologies such as the COBOL programming language and CICS, testing web-based user interface applications, and APIs/Web services are highly desired. Our offices are located at Corporate Woods in Albany, NY.
                - paragraph
                - paragraph [ref=e98]: "HOW A TEST ENGINEER SENIOR WILL MAKE AN IMPACT:"
                - list [ref=e99]:
                  - listitem [ref=e100]: Attend functional requirements definition and project design meetings as requested
                  - listitem [ref=e101]: Provide effort and duration estimates associated with the testing phase of the SDLC
                  - listitem [ref=e102]: Design and develop integration test plans and identify regression test scenarios
                  - listitem [ref=e103]: Execute test cases and scenarios associated with integrating test plans for complex applications and processes
                  - listitem [ref=e104]: Capture integration test results and generate test results documentation
                  - listitem [ref=e105]: Provide and review test results documentation with the customer and other stakeholders
                  - listitem [ref=e106]: Work collaboratively with Test Automation Engineers and other Integration Test team members
                  - listitem [ref=e107]: Actively participate in project and team meetings
                  - listitem [ref=e108]: Adhere to program testing standards associated with the creation and publication of testing artifacts and related documentation
                  - listitem [ref=e109]: Stay abreast of industry testing trends, and remain current with industry standards and best practices
                  - listitem [ref=e110]: Assist in production and other support activities, and ad hoc testing activities that may arise
                  - listitem [ref=e111]: Perform research activities as assigned
                - paragraph
                - paragraph [ref=e112]:
                  - text: WHAT YOU’LL NEED TO SUCCEED
                  - text: "Bring your engineering expertise along with a drive for innovation to GDIT. The Test Engineer Senior must have:"
                - list [ref=e113]:
                  - listitem [ref=e114]: "Education: Bachelor’s degree or equivalent in Computer Science or a related discipline"
                  - listitem [ref=e115]: "Required Experience: The position requires 5+ years of testing experience in a distributed environment; Mainframe and Open Systems are required."
                - list [ref=e116]:
                  - listitem [ref=e117]:
                    - text: "Required Technical Skills:"
                    - list [ref=e118]:
                      - listitem [ref=e119]: SQL Tools - SPUFI, QMF, Redash, MongoDB Compass etc.
                      - listitem [ref=e120]: Mainframe Tools – TSO/ISPF
                  - listitem [ref=e121]:
                    - text: "Required Skills and Abilities:"
                    - list [ref=e122]:
                      - listitem [ref=e123]: Experience in writing queries in RDBMS and Document-oriented databases.
                      - listitem [ref=e124]: Strong knowledge of healthcare
                      - listitem [ref=e125]: Proficient in Waterfall and Agile SDLC methodologies.
                      - listitem [ref=e126]: Strong interpersonal and communication skills to communicate with customers, support personnel, application development personnel and management
                      - listitem [ref=e127]: Ability to work in a team environment with multiple team members, as well as productively as an individual.
                  - listitem [ref=e128]:
                    - text: "Preferred Skills:"
                    - list [ref=e129]:
                      - listitem [ref=e130]: MMIS related claims and ancillary transaction processing
                      - listitem [ref=e131]: Knowledge of Electronic Data Interchange (EDI) - HIPAA X12 5010 and NCPDP D.0
                      - listitem [ref=e132]: COBOL Programming Language
                      - listitem [ref=e133]: IBM Customer Information Control System (CICS)
                      - listitem [ref=e134]: IBM Rational Team Concert (RTC) Mainframe Source Code Management
                      - listitem [ref=e135]: IBM Rational Quality Manager (RQM) Test Management
                      - listitem [ref=e136]: Proficient with applications developed in Java and Angular technologies, browser compatibility testing
                      - listitem [ref=e137]: Knowledgeable in ETL testing using DataStage, Testing Spring Batch Applications, Web services / API Testing using POSTMAN
                      - listitem [ref=e138]: Experience in working with databases – DB2 – Z/OS and LUW, PostgreSQL, MongoDB
                      - listitem [ref=e139]: Familiar with application security testing
                - list [ref=e140]:
                  - listitem [ref=e141]: "Location: Hybrid"
                - paragraph
                - paragraph [ref=e142]: "WHAT GDIT CAN OFFER YOU:"
                - list [ref=e143]:
                  - listitem [ref=e144]: 50% work week to own your priorities at work and at home
                  - listitem [ref=e145]: 401K with company match
                  - listitem [ref=e146]: Comprehensive health and wellness packages
                  - listitem [ref=e147]: Internal mobility team dedicated to helping you own your career
                  - listitem [ref=e148]: Professional growth opportunities including paid education and certifications
                  - listitem [ref=e149]: Cutting-edge technology you can learn from
                  - listitem [ref=e150]: Rest and recharge with paid vacation and holidays
                - paragraph
                - paragraph [ref=e151]:
                  - text: OWN YOUR OPPORTUNITY
                  - text: Explore a career at GDIT and you’ll find endless opportunities to grow alongside colleagues who share your ambition to deliver your best work.
            - generic [ref=e152]:
              - heading "Work Requirements" [level=5] [ref=e155]
              - generic [ref=e156]:
                - generic [ref=e157]:
                  - generic "Experience icon" [ref=e158]:
                    - img [ref=e159]
                  - text: Years of Experience
                  - paragraph [ref=e162]: 5 + years of related experience
                  - paragraph [ref=e163]:
                    - text: "* may vary based on technical training, certification(s),"
                    - strong [ref=e165]: or
                    - text: degree
                - generic [ref=e166]:
                  - generic "Certification icon" [ref=e167]:
                    - img [ref=e168]
                  - text: Certification
                  - paragraph
                - generic [ref=e171]:
                  - generic "Travel Requirement icon" [ref=e172]:
                    - img [ref=e173]
                  - text: Travel Required
                  - paragraph [ref=e175]: None
          - generic [ref=e176]:
            - heading "Salary and Benefit Information" [level=5] [ref=e177]
            - paragraph [ref=e178]:
              - text: The likely salary range for this position is $85,093 - $115,000. This is not, however, a guarantee of compensation or salary. Rather, salary will be set based on experience, geographic location and possibly contractual requirements and could fall outside of this range.
              - link "View information about benefits and our total rewards program." [ref=e179] [cursor=pointer]:
                - /url: /careers/total-rewards-at-gdit/
            - heading "About Our Work" [level=5] [ref=e180]
            - paragraph [ref=e181]: We are GDIT. A global technology and professional services company that delivers technology and mission services to every major agency across the U.S. government, defense and intelligence community. Our 26,000 experts extract the power of technology to create immediate value and deliver solutions at the edge of innovation. We operate across over 50 countries worldwide, offering leading capabilities in digital modernization, AI/ML, cloud, cyber and application development. Together with our customers, we strive to create a safer, smarter world by harnessing the power of deep expertise and advanced technology.
            - paragraph [ref=e182]:
              - text: Join our Talent Community to stay up to date on our career opportunities and events at
              - link "gdit.com/tc" [ref=e183] [cursor=pointer]:
                - /url: https://www.gdit.com/tc
              - text: .
            - paragraph [ref=e184]: Equal Opportunity Employer / Individuals with Disabilities / Protected Veterans
      - contentinfo [ref=e185]:
        - generic [ref=e189]:
          - generic [ref=e190]:
            - link "General Dynamics Information Technology - Click to return to the homepage" [ref=e191] [cursor=pointer]:
              - /url: /
              - img [ref=e192]
            - paragraph [ref=e194]:
              - text: © 2026 General Dynamics Information Technology, Inc., a
              - link "General Dynamics" [ref=e195] [cursor=pointer]:
                - /url: https://www.gd.com/
              - text: Company.
          - menu [ref=e197]:
            - menuitem "Capabilities" [ref=e198] [cursor=pointer]
            - menuitem "Industries" [ref=e199] [cursor=pointer]
            - menuitem "Perspectives" [ref=e200] [cursor=pointer]
          - menu [ref=e202]:
            - menuitem "Careers" [ref=e203] [cursor=pointer]
            - menuitem "About GDIT" [ref=e204] [cursor=pointer]
            - menuitem "Contact Us" [ref=e205] [cursor=pointer]
          - contentinfo [ref=e206]:
            - generic [ref=e207]:
              - link "Visit GDIT's Facebook" [ref=e208] [cursor=pointer]:
                - /url: https://www.facebook.com/GeneralDynamicsIT/
              - link "Visit GDIT's Instagram" [ref=e210] [cursor=pointer]:
                - /url: https://www.instagram.com/generaldynamicsit/
              - link "Visit GDIT's LinkedIn" [ref=e214] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/general-dynamics-information-technology
              - link "Visit GDIT's Twitter" [ref=e216] [cursor=pointer]:
                - /url: https://twitter.com/GDIT
                - img [ref=e217]
              - link "Visit GDIT's YouTube" [ref=e219] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCaB-uSlpjnUQzNzXajf2L_w
              - link "Visit GDIT's Glassdoor" [ref=e221] [cursor=pointer]:
                - /url: https://www.glassdoor.com/Overview/Working-at-General-Dynamics-Information-Technology-EI_IE18661.11,50.htm
                - img [ref=e222]
            - paragraph [ref=e226]: Equal Opportunity Employer / Individuals with Disabilities / Protected Veterans
        - menu [ref=e233]:
          - menuitem "Privacy Policy" [ref=e234] [cursor=pointer]
          - menuitem "Legal Terms" [ref=e235] [cursor=pointer]
          - menuitem "CA Consumer Privacy" [ref=e236] [cursor=pointer]
          - menuitem "EU-US Data Privacy Framework Privacy Statement" [ref=e237] [cursor=pointer]
          - menuitem "EU General Data Protection Regulation" [ref=e238] [cursor=pointer]
          - menuitem "Accessibility, Accommodations and E-Verify" [ref=e239] [cursor=pointer]
          - menuitem "Site Map" [ref=e240] [cursor=pointer]
      - generic [ref=e241]:
        - paragraph [ref=e242]:
          - text: We use cookies to enhance your website experience. By continuing to visit this site, you agree to our use of cookies.
          - link "Learn More." [ref=e243] [cursor=pointer]:
            - /url: https://www.gdit.com/privacy-policy/
        - button "Accept" [ref=e244] [cursor=pointer]
  - iframe [ref=e245]:
    - generic [active] [ref=f11e1]:
      - region "Chat Widget" [ref=f11e3]:
        - text:    Enter your message... 
        - complementary "Chat widget launcher" [ref=f11e4]:
          - button "Open chat" [ref=f11e5] [cursor=pointer]:
            - button "Minimize widget" [ref=f11e8]:
              - generic [ref=f11e9]: 
            - generic [ref=f11e11]:
              - paragraph [ref=f11e13]: Questions before you apply?
              - button "Start chat" [ref=f11e14]:
                - paragraph [ref=f11e15]: Browse FAQs here
      - iframe
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   constructor(protected page: Page) {}
  5  | 
  6  |   get(locator: string): Locator {
  7  |     return this.page.locator(locator);
  8  |   }
  9  | 
  10 |   async waitForVisible(locator: Locator) {
  11 |     await locator.waitFor({ state: 'visible' });
  12 |   }
  13 | 
  14 |   async click(locator: Locator) {
> 15 |     await locator.waitFor({ state: 'visible' });
     |                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  16 |     await locator.click();
  17 |   }
  18 | 
  19 |  async fill(locator: Locator, value: string) {
  20 |   await locator.waitFor({ state: 'attached' });
  21 |   await locator.scrollIntoViewIfNeeded();
  22 |   await locator.click(); // force focus
  23 |   await locator.fill(value);
  24 | }
  25 | 
  26 |   async getTitle() {
  27 |     return this.page.title();
  28 |   }
  29 | }
```