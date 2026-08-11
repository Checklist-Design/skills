# Checklist Design — checklist index

112 checklists, from https://www.checklist.design.

Find the checklist(s) matching the screen under review, then read the matching
file in `references/checklists/` for its full items. The file name is given in
backticks after each name.

## Design system

- **Tokens** `design-system-tokens.md` — The layer of a design system where defined variables are outlined across the platform to enable consistency, theming and alignment with code.
- **Drawer** `design-system-drawer.md` — A drawer is a panel that slides in from the edge, overlaying content. It provides access to detailed information without completely navigating away from the current page.
- **Typography** `design-system-typography.md` — The type layer of a design system that defines a scale, hierarchy, and set of text styles that is consistent, accessible, and expressive across the full range of product contexts
- **Accessibility** `design-system-accessibility.md` — The accessibility foundation of a design system including the standards, tooling, and shared conventions that ensure every component and pattern is built inclusively from the start.
- **Date Picker** `design-system-date-picker.md`
- **Spacing / Grid** `design-system-spacing-and-grid.md` — The spatial layer of a design system, defining a consistent scale for spacing, a grid for layout, and the rules that make both feel deliberate and coherent across all surfaces.
- **Color System** `design-system-color-system.md` — The color layer of a design system — defining a palette that is purposeful, accessible, themeable, and expressed as tokens rather than raw values.
- **Accordion** `design-system-accordion.md` — An accordion is a vertically stacked list of items that reveal or hide associated content sections when clicked. They help organize information hierarchically and saves screen space by showing only relevant content.
- **Skeleton** `design-system-skeleton.md` — A skeleton is a placeholder that mimics the structure of content while it loads. It provides visual feedback that content is coming and reduces perceived wait time.
- **Carousel** `design-system-carousel.md` — A carousel is a slideshow component that displays content one slide at a time. Users can alternate content through manual navigation or waiting for automatic transition.
- **Banner** `design-system-banner.md` — A banner is a prominent notification item that displays important messages to users. It communicates things like errors, success confirmations, warnings, or general information using distinct colors and placement to stand out from regular page content and grab attention.
- **Slider** `design-system-slider.md` — A slider is an interactive control that allows users to select a value from a continuous range by dragging a handle along a track. It often provides intuitive visual feedback as it is interacted with.
- **Toast** `design-system-toast.md` — A toast is a brief, non-disruptive message that appears temporarily at the edge of the screen to provide feedback about an action or system status.
- **Tabs** `design-system-tabs.md` — Tabs are navigation elements that organize and separate content into different sections within the same view. They allow users to switch between related content, maintaining context while reducing clutter.
- **Checkbox** `design-system-checkbox.md` — A checkbox is an interactive control that allows users to select or unselect items. They may be a single item to trigger other logic, or a list of multiple items to select amongst.
- **Radio** `design-system-radio.md` — A radio button is an interactive control that allows users to select exactly one option from a predefined set of mutually exclusive choices. Unlike checkboxes, when one radio button is selected, all others in the same group are automatically deselected.
- **Searchbar** `design-system-searchbar.md` — A search bar is an interactive input field that allows users to find specific content by entering keywords or phrases. It typically includes a text input area and a search icon/button, often enhanced with features like autocomplete suggestions to help users find information quickly.
- **Tooltip** `design-system-tooltip.md` — A tooltip is a small informational popup that appears when users hover over or focus on an element, providing additional context or explanations. It disappears when the user moves away, making it ideal for offering brief, helpful hints without cluttering the interface.
- **Modal** `design-system-modal.md` — A modal is a dialog box or popup window that appears on top of the main content, requiring user attention or interaction before returning to the main interface. It creates a focused experience by temporarily disabling the underlying page and dimming the background.
- **Loading** `design-system-loading.md` — A loading indicator is a visual element that communicates to users that content or an action is being processed. It provides feedback through animations like spinning wheels, progress bars, or skeleton screens to maintain user engagement during wait times.
- **Toggle** `design-system-toggle.md` — A toggle is a switch-like control that allows users to quickly alternate between two opposing states (on/off) with a single click or tap.
- **Input Field** `design-system-input-field.md` — An input field is an interactive area where users can enter and edit text or data. It provides a clear visual container for user input, often accompanied by labels and validation feedback, making it essential for forms and data collection interfaces.
- **Icon** `design-system-icon.md` — An icon is a small, symbolic visual element that represents an action, feature, or concept. It's purpose is to communicate meaning quickly, save space, and enhance visual navigation across an interface.
- **Table** `design-system-table.md`
- **Card** `design-system-card.md` — A card is a contained, modular component that groups related information and actions. It displays content like text, images, and interactive elements within a distinct container, often with shadows or borders to create visual hierarchy and organization in layouts.
- **Button** `design-system-button.md` — A button is an interactive element that triggers an action when clicked or tapped. It clearly communicates its clickability through visual styling and provides feedback on user interaction, making it a fundamental component for enabling user actions in interfaces.
- **Badge** `design-system-badge.md` — A badge is a small visual indicator that displays short, dynamic information like counts or status. It typically appears as a colored circle or pill shape, often overlaid on other elements.
- **Avatar** `design-system-avatar.md` — An avatar is a visual representation of a user. It helps identify individuals across a digital interface, commonly used in user profiles, comment sections, and chat applications.
- **Dropdown Menu** `design-system-dropdown-menu.md` — A dropdown triggered from a button or right-click target to reveal a menu of actions the user can proceed with

## Flows

- **Adding to cart** `flows-adding-to-cart.md` — Shopping online means users need to easily add products they want to their cart. This fundamental action can make or break a sale, so getting it right is crucial.
- **Uploading media** `flows-uploading-media.md`
- **Verifying account** `flows-verifying-account.md` — Verification is a critical role to promise security for a user in the early phases of onboarding, which means it must be a smooth experience that feels helps rather than burdensome.
- **Canceling subscription** `flows-canceling-subscription.md` — Similar to closing an account, a user can decide to end their experience and stop paying for your product. Just because they're leaving doesn't mean we can't give them a graceful exit. It's important to make a cancelation obvious to find and easy to travel through.
- **Filtering items** `flows-filtering-items.md` — Filtering helps users find what they need in large collections by specifying specific values of properties the items contain.
- **Saving changes** `flows-saving-changes.md` — Users are constantly updating their details. They might be changing an email address, fixing a typo in their name, or updating their payment details. That's why it's important to confirm that a change has been saved, in the clearest way. Here's a breakdown of how changes being saved should look and feel like.
- **Entering promo code** `flows-entering-promo-code.md` — A reward for a user to earn a discount on their purchase, promo codes are a pre-requisite in any e-commerce website. ‍ To avoid a confused customer, make sure they understand what is happening with their code - whether it works, expired or isn't applicable.
- **Showing input error** `flows-showing-input-error.md` — Users mistype all the time - whether it's a finger slipping or rushing through letters, errors happen. So for an everyday occurrence, solving an error should be obvious and seamless. The key parts of making that happen are strong visuals, clear communication, and state changes — which are all featured below.
- **Resetting password** `flows-resetting-password.md` — Every now and then, a user can't remember their password to log back in. Luckily, it's a straightforward process to change it. It's important to make the experience feel straightforward, so the user feels like they've gotten back into their account as smooth as possible.
- **Deleting account** `flows-deleting-account.md` — Sometimes it's just not meant to be, and that's okay. Users come and go, so it's important to recognise your solution is only for some and not for all. For those who want to leave, make it as simple as possible. You can try to understand why they're leaving, but don't get too in the way. ‍ There's no need to be passive aggressive or guilt tripping. They'll remember it, and likely share the experience with others who will reconsider your product.
- **Contacting support** `flows-contacting-support.md` — If there's ever a problem, a user should know how to get help. Then when they try to get that help, they should know exactly what kind of communication they're receiving. Making support not only available but suitable to how users tackle a problem is important on being on the right track together. If you're explaining to a user in text where the interface elements are when a screenshot would tell a much clearer story, then that's the first problem to solve before you even get to theirs.
- **Making a card payment** `flows-making-a-payment.md` — When paying for something online, two thoughts will come to mind for the user: is this safe, and is this clear? A well-designed payment experience covers these by communicating what's happening with a user's money, and that it's all happening securely. Below are the steps a user will take to submit a card payment, and what factors you'll need to consider.
- **Submitting a form** `flows-submitting-a-form.md` — A form can help a user achieve anything from creating an account to subscribing to a newsletter. They are often the last step of a user's journey, so should be quick and easy to complete.

## Mobile app

- **In-App Notifications** `mobile-in-app-notifications.md` — The in-app feed of alerts, updates, and messages the user has received — distinct from system push notifications.
- **Search** `mobile-search.md` — The search experience on mobile where keyboard handling and filtering results are unique to web.
- **Billing** `mobile-billing.md` — Payment history, receipts, and everything related to how the user is charged.
- **Camera** `mobile-camera-media-capture.md` — Capturing photos, video, or documents as well as reviewing and customising the capture experience for accessing the phone camera within an app.
- **Map View** `mobile-map-view.md` — The native map screen showing location-based content, user position, and contextual overlays
- **Onboarding Checklist** `mobile-onboarding-checklist.md` — The in-app progress checklist that guides a new user through key setup steps to learn how the product works by completing actions.
- **Paywall** `mobile-paywall.md` — A hard gate that blocks access to locked content and offers a path to subscribe.
- **Onboarding** `mobile-onboarding.md` — The first-run experience that orients a new user, collects necessary setup information, and delivers an early sense of the app value
- **Chat** `mobile-chat.md` — The one-to-one or group messaging screen, handling keyboard behaviour, message input, media sharing, and real-time updates in the constraints of a mobile screen.
- **Settings** `mobile-settings.md` — The screen where users manage their account, preferences, notifications, and app behaviour.
- **In-App Browser** `mobile-in-app-browser.md` — A browser experience inside a mobile app, which is handy for opening web links or accessing web data via API.
- **Gesture navigation** `mobile-gesture-navigation.md` — The touch-based interaction patterns that let users navigate and act without tapping buttons.
- **Splash Screen** `mobile-splash-screen.md` — The first screen a user sees when launching the mobile app and it initialises before transitioning to the home screen.
- **Checkout** `mobile-checkout.md` — The payment flow on mobile optimised for native payment methods and the constraints of a small screen.
- **Action Sheet** `mobile-action-sheet.md` — The sheet that slides up from the bottom of the screen to present options or confirmations — the mobile equivalent of a dropdown menu or modal dialog.
- **Tab Bar Navigation** `mobile-tab-bar-navigation.md` — The persistent bottom navigation bar that gives users access to the top-level sections of the app
- **Cart** `mobile-cart.md`
- **Login** `mobile-login.md` — Everything a returning user needs to authenticate quickly and securely.
- **Account** `mobile-account.md` — Private account settings like credentials, linked accounts, notifications, and destructive actions.
- **Invite** `mobile-invite.md` — The flow for adding collaborators or members to a shared space with role assignment and pending invite management.

## Web app

- **Notification Settings** `web-app-notification-settings.md` — Where users configure exactly which notifications they receive, through which channels, and how frequently.
- **Help Center** `web-app-help-center.md` — A self-serve documentation hub where users can find answers without contacting support.
- **Billing** `web-app-billing.md` — Payment methods, invoices, and everything related to the financial side of the account
- **Settings** `web-app-settings.md` — A screen that gives users control over their account, preferences, and application behaviour
- **User Management** `web-app-user-management.md` — A screen that allows admins to view, invite, and manage the users who have access to a product or workspace.
- **Single Item Detail** `web-app-single-item-detail.md` — A screen that displays the full details of a single record — a user, order, document, or any other entity — after selecting it from a list.
- **Admin Panel** `web-app-admin-panel.md` — Where administrators manage users, configure the product, and oversee activity across the organisation
- **Analytics** `web-app-analytics.md` — A live dashboard that surfaces key metrics and trends, helping users understand what is happening right now.
- **Empty State** `web-app-empty-state.md` — The state of a screen or component when there is no data to display, whether it's because a user is new, has cleared their content, or a search returned no results.
- **Notifications** `web-app-notifications.md` — An area that surfaces alerts, updates, and activity relevant to the user to help them stay informed
- **Onboarding** `web-app-onboarding.md` — A guided experience that introduces new users to the product and gets them to their first moment of value as quickly as possible
- **Public Profile** `web-app-public-profile.md` — The view of a user that other people in the product see, distinct from the account settings profile, which is private and editable.
- **Timeline / Gantt View** `web-app-timeline-gantt-view.md` — A screen that displays tasks, milestones, or events along a horizontal time axis, commonly used in project management products to show schedules and dependencies.
- **Feed** `web-app-feed.md` — A stream of content, activity, or updates that users scroll through to stay informed.
- **API Keys** `web-app-api-keys.md` — A screen where users generate and manage API keys and other developer-facing credentials needed to integrate the product programmatically.
- **Search Results** `web-app-search-results.md` — Displaying and navigating results matching a user's query from within the product.
- **Integrations** `web-app-integrations.md` — A screen that shows the third-party tools and services a product can connect with, allowing users to link their existing workflows.
- **Version History** `web-app-version-history.md` — A screen outlining different versions of an item or experience that you can navigate between.
- **Comments** `web-app-comments.md`
- **Multi-step form** `web-app-multi-step-form.md` — A form split across multiple steps or screens to reduce cognitive load when collecting a large amount of information from the user.
- **Kanban board** `web-app-kanban-board-view.md` — A visual board that organises items into columns representing stages or statuses, allowing users to track and move work through a workflow.
- **Chat** `web-app-chat.md` — A screen for real-time or asynchronous messaging between users, either one-on-one or in a group context.
- **Maintenance** `web-app-maintenance.md` — A screen shown when the application is temporarily unavailable due to scheduled maintenance or an unexpected outage.
- **2FA** `web-app-2-factor-authentication.md` — A screen that guides users through setting up or completing two-factor authentication to add a second layer of security to their account
- **Account** `web-app-account.md` — Where users view and manage their personal information, preferences, and account-level details
- **Pricing** `web-app-pricing.md` — A pricing page breaks down costs, features and options for paying to access the product itself or a version of it.
- **Login** `web-app-login.md` — A login page is a critical component of many web applications, serving as the gateway for users to access personalized features, secure content, and their own data

## Website

- **Security** `website-security.md`
- **About** `website-about.md` — A page that tells the story of the company — who built it, why, and what they believe.
- **Privacy** `website-legal-privacy.md` — Page covering the legal terms of using the product (privacy policy, terms of service, and cookie policy) written clearly and kept current.
- **Features** `website-features.md` — A page that walks through the full capabilities of the product, helping prospects understand what it does in depth.
- **Testimonials** `website-testimonials.md` — A page dedicated to social proof, collecting customer quotes, reviews, and success stories in one place.
- **Affiliate** `website-affiliate.md` — A page that invites potential affiliates or partners to join a programme, explaining how it works and what they stand to earn.
- **Compare** `website-compare-page.md` — A page that positions the product directly against a specific competitor, helping prospects who are evaluating alternatives to make a decision.
- **Status** `website-status.md`
- **Press / Media** `website-press-media.md` — A page providing journalists, analysts, and content creators with the resources they need to cover the company accurately.
- **Billing** `website-billing.md` — A screen where users manage information regarding payment, subscription and billing.
- **Waitlist** `website-waitlist.md`
- **Team** `website-team.md` — A team page introduces an organization's staff members, leadership, or key personnel. It typically helps visitors understand the people behind the company while adding a human element to the brand's identity.
- **Cart** `website-cart.md`
- **Search** `website-search.md` — A search results page displays organized findings based on a user's search query. It presents relevant matches in a scannable view to help users quickly find and navigate to their desired destination.
- **Careers** `website-careers.md` — A careers page typically displays job openings, company culture, and employment opportunities. It allows potential candidates to explore available positions, learn about the organization's values, and typically includes functionality to submit job applications or contact recruiters.
- **Blog Post** `website-blog-post.md` — A blog post page displays a single article's content, including its title, author, publication date, and body text. It often includes related media (images, videos), social sharing options, and commenting functionality, allowing readers to engage with the content and navigate to other posts.
- **Contact Us** `website-contact-us.md` — A contact us page provides visitors with methods to communicate with an organization. It typically includes a contact form, business address, phone numbers, email addresses, and sometimes a location.
- **Pricing** `website-pricing.md` — A pricing page presents product or service costs, features, and plan comparisons in a clear, organized format. It helps users understand different pricing tiers, included features, and subscription options, enabling them to make informed purchasing decisions.
- **FAQ** `website-faq.md` — A FAQ (frequently asked questions) page provides answers to common user queries in a structured, easy-to-scan format. It serves as a self-service resource to address typical customer concerns, reduce support inquiries, and help users find solutions quickly.
- **404** `website-404.md` — A 404 page appears when users attempt to access a non-existent or moved webpage. It communicates the error in a friendly way and helps users navigate back to working pages through suggested links, search functionality, or a return to homepage option.
- **Login** `website-login.md` — A login page is a critical component of many web applications and websites, serving as the gateway for users to access personalized features, secure content, and their own data.
- **Blog** `website-blog.md` — A blog page aggregates and displays multiple articles or posts in a chronological order, typically showing previews, titles, publication dates, and categories. It provides easy navigation through pagination or infinite scroll, allowing users to browse and discover content.
- **Sign up** `website-sign-up.md` — A sign up page enables new users to create an account by providing required information through a form. It guides users through the registration process, validates input data, and establishes their credentials for accessing restricted features or personalized content.

_Bundled content: v3.1.0, 2026-08-11._
