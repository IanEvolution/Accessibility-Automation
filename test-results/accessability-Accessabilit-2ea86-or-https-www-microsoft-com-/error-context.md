# Test info

- Name: Accessibility checks >> Accessibility check for https://www.microsoft.com/
- Location: C:\Users\ianho\OneDrive\Desktop\playwright-test\accessability\Accessability-Test.spec.js:14:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 2
    at C:\Users\ianho\OneDrive\Desktop\playwright-test\accessability\Accessability-Test.spec.js:28:41
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: javascript:void(0)
- banner:
  - link "Microsoft":
    - /url: https://www.microsoft.com
  - navigation "Contextual menu":
    - list:
      - listitem:
        - link "Microsoft 365":
          - /url: https://www.microsoft.com/microsoft-365
      - listitem:
        - link "Teams":
          - /url: https://www.microsoft.com/en-us/microsoft-teams/group-chat-software
      - listitem:
        - link "Copilot":
          - /url: https://copilot.microsoft.com/
      - listitem:
        - link "Windows":
          - /url: https://www.microsoft.com/en-us/windows/
      - listitem:
        - link "Surface":
          - /url: https://www.microsoft.com/surface
      - listitem:
        - link "Xbox":
          - /url: https://www.xbox.com/
      - listitem:
        - link "Deals":
          - /url: https://www.microsoft.com/en-us/store/b/sale?icid=gm_nav_L0_salepage
      - listitem:
        - link "Small Business":
          - /url: https://www.microsoft.com/en-us/store/b/business
      - listitem:
        - link "Support":
          - /url: https://support.microsoft.com/en-us
  - navigation "All Microsoft menu":
    - list:
      - listitem:
        - button "All Microsoft "
  - search:
    - button "Search or ask a question": 
  - link "0 items in shopping cart":
    - /url: https://www.microsoft.com/en-us/store/cart
    - text: 
  - link "Sign in to your account":
    - /url: https://www.microsoft.com/cascadeauth/store/account/signin?ru=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2F
- main:
  - region "Announcement banner":
    - paragraph:
      - link "Trade in and you could get cash back. Learn more":
        - /url: https://www.microsoft.com/en-us/store/b/why-microsoft-store?icid=mscom_marcom_TS1a_WhyBuy
  - 'region "featured products and announcements slideshow: navigate using the previous and next: navigate using the slide tabs"':
    - text: "Slide 1 of 2. DOOM: The Dark Ages"
    - 'link "Skip featured products and announcements slideshow: navigate using the previous and next: navigate using the slide tabs"':
      - /url: "#c90ae51e-4901-41a1-b1a6-9552b9c8cd68"
    - button "Pause": Pause 
    - button "Previous "
    - button "Next "
    - region "1 of 2":
      - img "The DOOM Slayer."
      - 'heading "DOOM: The Dark Ages" [level=1]'
      - text: Stand and fight in a dark and sinister medieval war.
      - 'link "Shop DOOM: The Dark Ages or play now with Game Pass."':
        - /url: https://www.xbox.com/en-us/games/doom-the-dark-ages?icid=mscom_marcom_H1a_DOOMTheDarkAges
        - text: Shop now or play with Game Pass
      - 'button "Watch the trailer for DOOM: The Dark Ages."': Watch the trailer
  - text: "End of featured products and announcements slideshow: navigate using the previous and next: navigate using the slide tabs section"
  - navigation "product categories":
    - list:
      - listitem:
        - link "Shop Surface devices":
          - /url: https://www.microsoft.com/en-us/store/b/shop-all-microsoft-surface?icid=MSCOM_QL_Surface
      - listitem:
        - link "Shop Xbox games and consoles":
          - /url: https://www.microsoft.com/en-us/store/b/xbox?icid=MSCOM_QL_Xbox
      - listitem:
        - link "Shop for accessories":
          - /url: https://www.microsoft.com/en-us/store/b/accessories?icid=MSCOM_QL_Accessories
      - listitem:
        - link "Shop business products":
          - /url: https://www.microsoft.com/en-us/store/b/business?icid=MSCOM_QL_Business
          - text: Shop for your business
      - listitem:
        - link "Find your next PC":
          - /url: https://www.microsoft.com/en-us/windows/help-me-choose?icid=MSCOM_QL_FindPC
      - listitem:
        - link "Choose your Microsoft 365":
          - /url: https://www.microsoft.com/EN-US/microsoft-365/compare-all-microsoft-365-products?icid=MSCOM_QL_M365
  - img "A side view of Surface Pro for Business in the color Platinum."
  - text: New
  - heading "Surface Pro for Business, Copilot+ PC | Intel" [level=2]
  - text: Ultra-versatile and built with Intel® Core™ Ultra processors (Series 2) that power AI experiences to amplify your team’s productivity.
  - link "Shop Surface Pro for Business.":
    - /url: https://www.microsoft.com/en-us/d/surface-pro-for-business-copilot-pc-intel/8qfmn9xp1rl9?icid=mscom_marcom_CPH1a_SurfaceProForBusinessCopilotPCIntel
    - text: Shop now
  - img "Microsoft 365 suite of apps such as Teams, Word, Outlook, and more."
  - heading "Achieve the extraordinary" [level=2]
  - text: Microsoft 365 delivers cloud storage, security, and Microsoft Copilot in your favorite apps—all in one plan.
  - link "Shop Microsoft 365":
    - /url: https://www.microsoft.com/en-us/microsoft-365/buy/compare-all-microsoft-365-products?icid=mscom_marcom_CPH2a_Microsoft365AI
  - img "An Xbox Series X console and an Xbox controller"
  - heading "Xbox Series X" [level=2]
  - text: The fastest, most powerful Xbox ever.
  - link "Shop Xbox Series X":
    - /url: https://www.microsoft.com/en-us/p/xbox-series-x/8wj714n3rbtl?icid=mscom_marcom_CPH3a_XboxSeriesX
  - img "Red, white, blue, and black Xbox Wireless Controllers"
  - heading "Xbox controllers" [level=2]
  - text: Elite, wireless, adaptive—find the controller that fits your style of play.
  - link "Shop Xbox controllers":
    - /url: https://www.microsoft.com/en-us/store/collections/XboxControllers?icid=mscom_marcom_CPH4a_XboxControllers
    - text: Shop now
  - img "Three screenshots from the Copilot App"
  - heading "Copilot is your AI companion" [level=2]
  - text: Always by your side, ready to support you whenever and wherever you need it.
  - link "Download the Copilot app":
    - /url: https://app.adjust.com/1h6cavf8?fallback=https%3A%2F%2Fwww.microsoft.com%2Fmicrosoft-copilot%2Ffor-individuals%2Fcopilot-app%3Fform%3DMY02G2%26OCID%3DMY02G2&redirect_macos=https%3A%2F%2Fwww.microsoft.com%2Fmicrosoft-copilot%2Ffor-individuals%2Fcopilot-app%3Fform%3DMY02G2%26OCID%3DMY02G2
  - heading "For business" [level=2]
  - img "A side view of Surface Laptop for Business in the color Platinum."
  - text: New
  - heading "Surface Laptop for Business, Copilot+ PC | Intel" [level=3]
  - text: Uncompromising power, all-day battery life,* and unique AI experiences—featuring Intel® Core™ Ultra processors (Series 2).
  - link "Shop Surface Laptop for Business.":
    - /url: https://www.microsoft.com/en-us/d/surface-laptop-for-business-copilot-pc-intel/93dzmw6q4w2b?icid=mscom_marcom_CPW1a_SurfaceLaptopForBusinessCopilotPCIntel
    - text: Shop now
  - heading "Microsoft 365 Copilot" [level=3]
  - text: Save time and focus on the things that matter most with AI in Microsoft 365 for business.
  - link "Learn more about Microsoft 365 Copilot":
    - /url: https://www.microsoft.com/en-us/microsoft-365/business/copilot-for-microsoft-365?icid=mscom_marcom_CPW2a_M365forBusiness_Copilot
    - text: Learn more
  - img "Visual Studio Icon."
  - heading "Visual Studio 2022" [level=3]
  - text: Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services, and games.
  - link "Download Visual Studio 2022":
    - /url: https://visualstudio.microsoft.com/downloads/?icid=mscom_marcom_CPW3a_VisualStudio22
  - img "Glowing translucent hexagons with orange highlights on a dark purple background."
  - heading "Register now for Microsoft Build" [level=3]
  - text: Join us May 19-22 in Seattle or online to discover the latest tech, connect with world-class experts, and immerse yourself in code.
  - link "Register for Microsoft Build today.":
    - /url: https://build.microsoft.com/en-US/home?wt.mc_ID=Build2025_marx_corp_bn_oo_bn_MSHP_Reg_MSCOM
    - text: Register today
  - heading "Explore more about AI and Copilot" [level=2]
  - img "collaged illustration of a woman running up an escalator surrounded by stylized charts."
  - heading "How AI makes hard work easier" [level=3]
  - text: Dive into the surprising ways that Copilot reduces the mental effort of complex tasks and enhances quality of work.
  - link "Uncover the details of how AI makes hard work easier.":
    - /url: https://www.microsoft.com/en-us/worklab/ai-data-drop-the-surprising-way-ai-makes-hard-work-easier?icid=mscom_marcom_CPAI1a_AIHardWorkEasier
    - text: Uncover the details
  - img "Azeem Azhar."
  - heading "How AI agents are transforming work" [level=3]
  - text: On the WorkLab podcast, Azeem Azhar—a global thought leader—shares insights on the power of deep research AI and building a "brain trust" of agents.
  - link "Learn more about how AI agents are transforming work.":
    - /url: https://www.microsoft.com/en-us/worklab/podcast/azeem-azhar-on-how-ai-agents-are-transforming-work?icid=mscom_marcom_CPAI2a_WorkLabAIAgents
    - text: Learn more
  - img "Musician Cuco looks up at an animated version of himself skateboarding down a street in LA."
  - heading "When art meets AI" [level=3]
  - text: Yaeji, Cuco, and Bladee explore art’s next frontier in Artifacts—bringing their visionary works to life with Microsoft AI.
  - link "Explore Yaeji, Cuco, and Bladee’s projects.":
    - /url: https://unlocked.microsoft.com/artifacts/?icid=mscom_marcom_CPAI3a_AIArtifacts
    - text: Explore their projects
  - 'region "human-interest articles and stories slideshow: navigate using the slide tabs"':
    - text: Slide 1 of 2. AI helps revolutionize farming in Malawi
    - 'link "Skip human-interest articles and stories slideshow: navigate using the slide tabs"':
      - /url: "#15946796-6922-4fb2-9e8d-642847f19623"
    - button "Pause": Pause 
    - button "Previous "
    - button "Next "
    - region "1 of 2":
      - img "An Opportunity International Farmer Support Agent and two Malawian farmers use the Ulangizi AI chatbot to answer questions from a mobile phone."
      - heading "AI helps revolutionize farming in Malawi" [level=2]
      - text: From analyzing crops to forecasting severe weather, Opportunity International is using Microsoft AI to help smallholder farmers improve their harvests.
      - link "Find out how AI is helping revolutionize farming in Malawi.":
        - /url: https://unlocked.microsoft.com/opportunity-international?icid=mscom_marcom_SAM1a_OpportunityInternational
        - text: Find out more
  - text: "End of human-interest articles and stories slideshow: navigate using the slide tabs section"
  - region "follow us on social media":
    - heading "Follow Microsoft" [level=2]
    - list:
      - listitem:
        - link "Follow Microsoft on Facebook, opens in a new tab":
          - /url: https://www.facebook.com/Microsoft
          - img "Facebook"
      - listitem:
        - link "Follow Microsoft on X, opens in a new tab":
          - /url: https://twitter.com/microsoft
          - img "X"
      - listitem:
        - link "Follow Microsoft on Linkedin, opens in a new tab":
          - /url: https://www.linkedin.com/company/microsoft
          - img "LinkedIn"
  - link "Back to top":
    - /url: "#page-top"
    - text:  Back to top
- contentinfo:
  - navigation "Footer Resource links":
    - heading "What's new" [level=2]
    - list:
      - listitem:
        - link "Surface Pro What's new":
          - /url: https://www.microsoft.com/surface/devices/surface-pro
          - text: Surface Pro
      - listitem:
        - link "Surface Laptop What's new":
          - /url: https://www.microsoft.com/surface/devices/surface-laptop
          - text: Surface Laptop
      - listitem:
        - link "Surface Laptop Studio 2 What's new":
          - /url: https://www.microsoft.com/en-us/d/Surface-Laptop-Studio-2/8rqr54krf1dz
          - text: Surface Laptop Studio 2
      - listitem:
        - link "Surface Laptop Go 3 What's new":
          - /url: https://www.microsoft.com/en-us/d/Surface-Laptop-Go-3/8p0wwgj6c6l2
          - text: Surface Laptop Go 3
      - listitem:
        - link "Microsoft Copilot What's new":
          - /url: https://www.microsoft.com/en-us/microsoft-copilot
          - text: Microsoft Copilot
      - listitem:
        - link "AI in Windows What's new":
          - /url: https://www.microsoft.com/en-us/windows/copilot-ai-features
          - text: AI in Windows
      - listitem:
        - link "Explore Microsoft products What's new":
          - /url: https://www.microsoft.com/en-us/microsoft-products-and-apps
          - text: Explore Microsoft products
      - listitem:
        - link "Windows 11 apps What's new":
          - /url: https://www.microsoft.com/windows/windows-11-apps
          - text: Windows 11 apps
    - heading "Microsoft Store" [level=2]
    - list:
      - listitem:
        - link "Account profile Microsoft Store":
          - /url: https://account.microsoft.com/
          - text: Account profile
      - listitem:
        - link "Download Center Microsoft Store":
          - /url: https://www.microsoft.com/en-us/download
          - text: Download Center
      - listitem:
        - link "Microsoft Store support Microsoft Store":
          - /url: https://go.microsoft.com/fwlink/?linkid=2139749
          - text: Microsoft Store support
      - listitem:
        - link "Returns Microsoft Store":
          - /url: https://www.microsoft.com/en-us/store/b/returns
          - text: Returns
      - listitem:
        - link "Order tracking Microsoft Store":
          - /url: https://www.microsoft.com/en-us/store/b/order-tracking
          - text: Order tracking
      - listitem:
        - link "Certified Refurbished Microsoft Store":
          - /url: https://www.microsoft.com/en-us/store/b/certified-refurbished-products
          - text: Certified Refurbished
      - listitem:
        - link "Microsoft Store Promise Microsoft Store":
          - /url: https://www.microsoft.com/en-us/store/b/why-microsoft-store?icid=footer_why-msft-store_7102020
          - text: Microsoft Store Promise
      - listitem:
        - link "Flexible Payments Microsoft Store":
          - /url: https://www.microsoft.com/en-us/store/b/payment-financing-options?icid=footer_financing_vcc
          - text: Flexible Payments
    - heading "Education" [level=2]
    - list:
      - listitem:
        - link "Microsoft in education Education":
          - /url: https://www.microsoft.com/en-us/education
          - text: Microsoft in education
      - listitem:
        - link "Devices for education Education":
          - /url: https://www.microsoft.com/en-us/education/devices/overview
          - text: Devices for education
      - listitem:
        - link "Microsoft Teams for Education Education":
          - /url: https://www.microsoft.com/en-us/education/products/teams
          - text: Microsoft Teams for Education
      - listitem:
        - link "Microsoft 365 Education Education":
          - /url: https://www.microsoft.com/en-us/education/products/microsoft-365
          - text: Microsoft 365 Education
      - listitem:
        - link "How to buy for your school Education":
          - /url: https://www.microsoft.com/education/how-to-buy
          - text: How to buy for your school
      - listitem:
        - link "Educator training and development Education":
          - /url: https://education.microsoft.com/
          - text: Educator training and development
      - listitem:
        - link "Deals for students and parents Education":
          - /url: https://www.microsoft.com/en-us/store/b/education
          - text: Deals for students and parents
      - listitem:
        - link "AI for education Education":
          - /url: https://www.microsoft.com/en-us/education/ai-in-education
          - text: AI for education
    - heading "Business" [level=2]
    - list:
      - listitem:
        - link "Microsoft Cloud Business":
          - /url: https://www.microsoft.com/en-us/microsoft-cloud
          - text: Microsoft Cloud
      - listitem:
        - link "Microsoft Security Business":
          - /url: https://www.microsoft.com/en-us/security
          - text: Microsoft Security
      - listitem:
        - link "Dynamics 365 Business":
          - /url: https://www.microsoft.com/en-us/dynamics-365
          - text: Dynamics 365
      - listitem:
        - link "Microsoft 365 Business":
          - /url: https://www.microsoft.com/en-us/microsoft-365/business
          - text: Microsoft 365
      - listitem:
        - link "Microsoft Power Platform Business":
          - /url: https://www.microsoft.com/en-us/power-platform
          - text: Microsoft Power Platform
      - listitem:
        - link "Microsoft Teams Business":
          - /url: https://www.microsoft.com/en-us/microsoft-teams/group-chat-software
          - text: Microsoft Teams
      - listitem:
        - link "Microsoft 365 Copilot Business":
          - /url: https://www.microsoft.com/en-us/microsoft-365/copilot/copilot-for-work
          - text: Microsoft 365 Copilot
      - listitem:
        - link "Small Business Business":
          - /url: https://www.microsoft.com/en-us/store/b/business?icid=CNavBusinessStore
          - text: Small Business
    - heading "Developer & IT" [level=2]
    - list:
      - listitem:
        - link "Azure Developer & IT":
          - /url: https://azure.microsoft.com/en-us/
          - text: Azure
      - listitem:
        - link "Microsoft Developer Developer & IT":
          - /url: https://developer.microsoft.com/en-us/
          - text: Microsoft Developer
      - listitem:
        - link "Microsoft Learn Developer & IT":
          - /url: https://learn.microsoft.com/
          - text: Microsoft Learn
      - listitem:
        - link "Support for AI marketplace apps Developer & IT":
          - /url: https://www.microsoft.com/isv/isv-success?ocid=cmm3atxvn98
          - text: Support for AI marketplace apps
      - listitem:
        - link "Microsoft Tech Community Developer & IT":
          - /url: https://techcommunity.microsoft.com/
          - text: Microsoft Tech Community
      - listitem:
        - link "Azure Marketplace Developer & IT":
          - /url: https://azuremarketplace.microsoft.com/en-us/
          - text: Azure Marketplace
      - listitem:
        - link "AppSource Developer & IT":
          - /url: https://appsource.microsoft.com/en-us/
          - text: AppSource
      - listitem:
        - link "Visual Studio Developer & IT":
          - /url: https://visualstudio.microsoft.com/
          - text: Visual Studio
    - heading "Company" [level=2]
    - list:
      - listitem:
        - link "Careers Company":
          - /url: https://careers.microsoft.com/
          - text: Careers
      - listitem:
        - link "About Microsoft Company":
          - /url: https://www.microsoft.com/about
          - text: About Microsoft
      - listitem:
        - link "Company news Company":
          - /url: https://news.microsoft.com/
          - text: Company news
      - listitem:
        - link "Privacy at Microsoft Company":
          - /url: https://privacy.microsoft.com/en-us
          - text: Privacy at Microsoft
      - listitem:
        - link "Investors Company":
          - /url: https://www.microsoft.com/investor/default.aspx
          - text: Investors
      - listitem:
        - link "Diversity and inclusion Company":
          - /url: https://www.microsoft.com/en-us/diversity/
          - text: Diversity and inclusion
      - listitem:
        - link "Accessibility Company":
          - /url: https://www.microsoft.com/en-us/accessibility
          - text: Accessibility
      - listitem:
        - link "Sustainability Company":
          - /url: https://www.microsoft.com/en-us/sustainability/
          - text: Sustainability
  - link "Content Language Selector. Currently set to English (United States)":
    - /url: https://www.microsoft.com/en-us/locale
    - text:  English (United States)
  - link "Your Privacy Choices Opt-Out Icon Your Privacy Choices":
    - /url: https://aka.ms/yourcaliforniaprivacychoices
    - img "Your Privacy Choices Opt-Out Icon"
    - text: Your Privacy Choices
  - link "Consumer Health Privacy":
    - /url: https://go.microsoft.com/fwlink/?linkid=2259814
  - navigation "Microsoft corporate links":
    - list:
      - listitem:
        - link "Sitemap":
          - /url: https://www.microsoft.com/en-us/sitemap1.aspx
      - listitem:
        - link "Contact Microsoft":
          - /url: https://support.microsoft.com/contactus
      - listitem:
        - link "Privacy":
          - /url: https://go.microsoft.com/fwlink/?LinkId=521839
      - listitem:
        - link "Terms of use":
          - /url: https://go.microsoft.com/fwlink/?LinkID=206977
      - listitem:
        - link "Trademarks":
          - /url: https://go.microsoft.com/fwlink/?linkid=2196228
      - listitem:
        - link "Safety & eco":
          - /url: https://go.microsoft.com/fwlink/?linkid=2196227
      - listitem:
        - link "Recycling":
          - /url: https://www.microsoft.com/en-us/legal/compliance/recycling
      - listitem:
        - link "About our ads":
          - /url: https://choice.microsoft.com
      - listitem: © Microsoft 2025
- region "Chat with an Expert":
  - paragraph: Need help? Let's chat
  - img "Need Help? Lets Chat"
  - button "Need help? Let's chat"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import fs from 'fs';
   3 | import axe from 'axe-core';
   4 |
   5 | const urls = fs.readFileSync('accessability/urls.txt', 'utf-8')
   6 |   .split('\n')
   7 |   .map(line => line.trim())
   8 |   .filter(line => line && !line.startsWith('#'));
   9 |
  10 | test.describe('Accessibility checks', () => {
  11 |   let allViolations = [];
  12 |
  13 |   for (const url of urls) {
  14 |     test(`Accessibility check for ${url}`, async ({ page }) => {
  15 |       await page.goto(url);
  16 |       await page.addScriptTag({ path: require.resolve('axe-core') });
  17 |       const results = await page.evaluate(async () => await window.axe.run());
  18 |       // Save report
  19 |       const reportPath = `accessability/reports/${encodeURIComponent(url)}.json`;
  20 |       fs.mkdirSync('accessability/reports', { recursive: true });
  21 |       fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  22 |       // Log violations
  23 |       console.log(`\nAccessibility Violations for ${url}:`, results.violations.length);
  24 |       results.violations.forEach(v => {
  25 |         console.log(`- [${v.id}] ${v.help}: ${v.nodes.length} occurrence(s)`);
  26 |       });
  27 |       allViolations.push(...results.violations.map(v => v.id));
> 28 |       expect(results.violations.length).toBe(0);
     |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  29 |     });
  30 |   }
  31 |
  32 |   test.afterAll(async () => {
  33 |     // Output summary of most common issues
  34 |     const summary = {};
  35 |     allViolations.forEach(id => { summary[id] = (summary[id] || 0) + 1; });
  36 |     console.log('\n=== Accessibility Issue Summary Across All URLs ===');
  37 |     Object.entries(summary)
  38 |       .sort((a, b) => b[1] - a[1])
  39 |       .forEach(([id, count]) => {
  40 |         console.log(`${id}: ${count} occurrence(s)`);
  41 |       });
  42 |   });
  43 | });
```