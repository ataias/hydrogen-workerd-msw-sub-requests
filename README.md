# Hydrogen template: Skeleton

This repo tries to use MSW to intercept sub-requests, but it does not work. It tries to do the same as done in <https://github.com/rmiller61/hydrogen-oxygen-msw>, but using more recent package versions. It was also mentioned in <https://github.com/Shopify/hydrogen/issues/1604#issuecomment-2610481592> .

## Getting started

**Requirements:**

- Node.js version 18.0.0 or higher

```bash
npm create @shopify/hydrogen@latest
```

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```

## Setup for using Customer Account API (`/account` section)

Follow step 1 and 2 of <https://shopify.dev/docs/custom-storefronts/building-with-the-customer-account-api/hydrogen#step-1-set-up-a-public-domain-for-local-development>
