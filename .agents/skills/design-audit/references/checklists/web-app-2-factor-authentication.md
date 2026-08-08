# 2FA — Web app

A screen that guides users through setting up or completing two-factor authentication to add a second layer of security to their account

Source: https://www.checklist.design/web-app/2-factor-authentication

## Items

### Method selection
Authenticator app, SMS, or email code

_Tip: Offer at least 2 methods as some users potentially don't have access to one or the other_

### Setup instructions
Clear step-by-step guidance for completing setup, particularly for authenticator flows that require scanning a QR code

### QR code or setup key
A scannable QR code or copyable key for linking an authenticator app to the account

_Tip: Ensure QR code size large enough to be easy to scan_

### Verification step
A code entry step confirming the setup was successful before 2FA is enabled on the account

_Tip: Enabling 2FA without this step risks a silent setup failure that locks the user out — a serious support burden_

### Recovery codes
A set of one-time backup codes the user can use if they lose access to their 2FA method

_Tip: Make download or copying the code a required step before completing setup for the sake of the user_

### Setup confirmation
A clear success state confirming that 2FA is now active on the account

### Disable or reset option
A way for users to turn off or reconfigure 2FA, accessible from account security settings

_Tip: Re-authentication should be required before disabling 2FA_
