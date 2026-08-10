# Saving changes — Flows

Users are constantly updating their details. They might be changing an email address, fixing a typo in their name, or updating their payment details. That's why it's important to confirm that a change has been saved, in the clearest way. Here's a breakdown of how changes being saved should look and feel like.

Source: https://www.checklist.design/flows/saving-changes

## Items

### Show action that enables change
There should be an action to enable information to be updated. It may be automatically editable, but that can be riskier for some software. If it is read-only by default, then a button can trigger the editable version to then update and save.

### Disable save action until changes are made
An action should be visible as a source of confirming changes to be saved - this is usually a button. Initially, the action can be disabled. It indicates no changes have been made, and there is nothing to save. A common location for this action is in the navigation above the fold, so it's always visible over the content. Another option is after all the content that's editable.

### State changes to active once a change is made
In the example, we've changed the email address, which means a change is waiting to be saved. Changing the button state to active brings the user's attention to the action.

### Action changes to loading state when pressed
Now that the changes are being saved, you want to show that action is in progress. You can do so with a loading spinner in the action, as the user's view will be on that element.

### Notify changes have been saved
The page will reload or update, and this is the critical part. The user should now be informed that their changes have been saved. They can now safely leave the page, knowing the details are locked in until they choose to change them again.
