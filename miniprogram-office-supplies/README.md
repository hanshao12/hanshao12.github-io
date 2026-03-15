# Office Supplies WeChat Mini Program (V1)

A standalone WeChat Mini Program implementation for office supplies requisition.

## Scope

- Employee flows: browse items, create requisition, submit, view status, confirm receipt.
- Admin flows: approval, picking, item management, stock alerts, replenishment, reports, system config.
- Cloud functions: `auth`, `item`, `requisition`, `approval`, `stock`, `alert`, `notify`.
- Data model collections:
  - `employees`
  - `items`
  - `inventory`
  - `requisitions`
  - `requisition_lines`
  - `stock_txns`
  - `notifications`
  - `replenishment_suggestions`
  - `system_configs`
  - `operation_logs`

## Directory

- `miniprogram/`: WeChat mini program frontend.
- `cloudfunctions/`: WeChat cloud function backend.
- `tests/`: Node tests for core business rules.

## Setup

1. Open `miniprogram-office-supplies` in WeChat DevTools.
2. Set your cloud env in `miniprogram/app.js` (`env` field).
3. Deploy cloud functions under `cloudfunctions/`.
4. Create DB collections listed above and add indexes by your traffic pattern.
5. Import templates from:
   - `miniprogram/templates/employees-import-template.csv`
   - `miniprogram/templates/items-import-template.csv`

## Notes

- Currency is CNY.
- Single company + single warehouse in V1.
- Approval is category + amount threshold based.
- Low stock blocks submission and generates replenishment suggestions.
