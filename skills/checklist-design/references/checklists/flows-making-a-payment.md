# Making a card payment — Flows

When paying for something online, two thoughts will come to mind for the user: is this safe, and is this clear? A well-designed payment experience covers these by communicating what's happening with a user's money, and that it's all happening securely. Below are the steps a user will take to submit a card payment, and what factors you'll need to consider.

Source: https://www.checklist.design/flows/making-a-payment

## Items

### Offer payment methods
Other methods can be shown, but for this flow we'll focus on the user selecting 'credit or debit card'. This is because it's the one with the most internal effort on designing and building, compared to other services which are often third-party integrations.

### Request card details
Show all relevant text fields to complete. Consider the size of these fields relative to the details entered. Note: in a product where the user is revisiting and saved payment methods are available, consider a flow that allows the user to add/remove payment methods.

### Submit payment with card details entered
It's also important to consider validation before a user submits their details. Numbers can be mistyped, the card may have expired - so make sure these numerous error states are addressed.

### Show payment processing
A payment may not be triggered instantly, taking a few seconds (or minutes). A loading page is crucial to calm the user’s nerves in regards to what’s happening to their money.

### Confirmation payment processed successfully
It’s a success! Clearly indicate to the user that their payment was processed, and the funds was received.

### Outline next steps
What now? Does the payment trigger something? If so, let the user know. Example 1: a physical product has been purchased. Once the payment has processed, tell the user the order is in motion. Example 2: a user signed up for a subscription. Offer a link to continue to the product to start using it.
