# Storybook Audit Report

**Date:** 2026-07-26
**Site:** https://ui-kit-lime-tau.vercel.app
**Entries:** 49
**Manager shell:** PASS

## Summary

| Metric | Count |
|---|---|
| Pass | 48 |
| Fail | 1 |
| Console errors | 0 |
| Failed requests | 0 |
| a11y critical | 0 |
| a11y serious | 7 |
| a11y moderate | 403 |
| a11y minor | 0 |

## Entry Results

| Entry | Type | Result | Reason | a11y (C/S/M/m) |
|---|---|---|---|---|
| introduction--docs | docs | PASS |  | 0/0/2/0 |
| primitives-alert--docs | docs | PASS |  | 0/1/30/0 |
| primitives-alert--info | story | PASS |  | 0/0/2/0 |
| primitives-alert--success | story | PASS |  | 0/0/2/0 |
| primitives-alert--warning | story | PASS |  | 0/0/2/0 |
| primitives-alert--error | story | PASS |  | 0/0/2/0 |
| primitives-alert--dismissible | story | PASS |  | 0/0/2/0 |
| primitives-alert--message-only | story | PASS |  | 0/0/2/0 |
| primitives-badge--docs | docs | PASS |  | 0/1/32/0 |
| primitives-badge--default | story | PASS |  | 0/0/3/0 |
| primitives-badge--success | story | PASS |  | 0/0/3/0 |
| primitives-badge--warning | story | PASS |  | 0/0/3/0 |
| primitives-badge--error | story | PASS |  | 0/0/3/0 |
| primitives-badge--info | story | PASS |  | 0/0/3/0 |
| primitives-button--docs | docs | PASS |  | 0/0/38/0 |
| primitives-button--primary | story | PASS |  | 0/0/2/0 |
| primitives-button--secondary | story | PASS |  | 0/0/2/0 |
| primitives-button--danger | story | PASS |  | 0/0/2/0 |
| primitives-button--small | story | PASS |  | 0/0/2/0 |
| primitives-button--large | story | PASS |  | 0/0/2/0 |
| primitives-button--loading | story | PASS |  | 0/0/2/0 |
| primitives-button--disabled | story | PASS |  | 0/0/2/0 |
| primitives-input--docs | docs | PASS |  | 0/0/32/0 |
| primitives-input--default | story | PASS |  | 0/0/3/0 |
| primitives-input--with-value | story | PASS |  | 0/0/3/0 |
| primitives-input--with-error | story | PASS |  | 0/0/4/0 |
| primitives-input--disabled | story | PASS |  | 0/0/3/0 |
| primitives-input--no-label | story | **FAIL** | Body text too short (0 chars) | 0/0/3/0 |
| components-recordcard--docs | docs | PASS |  | 0/0/38/0 |
| components-recordcard--confirmed | story | PASS |  | 0/0/7/0 |
| components-recordcard--pending | story | PASS |  | 0/0/4/0 |
| components-recordcard--failed | story | PASS |  | 0/0/5/0 |
| components-sessioncard--docs | docs | PASS |  | 0/1/48/0 |
| components-sessioncard--available | story | PASS |  | 0/0/3/0 |
| components-sessioncard--completed | story | PASS |  | 0/0/3/0 |
| components-sessioncard--locked | story | PASS |  | 0/0/3/0 |
| components-statusticker--docs | docs | PASS |  | 0/1/23/0 |
| components-statusticker--default | story | PASS |  | 0/0/3/0 |
| components-statusticker--single-item | story | PASS |  | 0/0/3/0 |
| components-statusticker--all-negative | story | PASS |  | 0/0/3/0 |
| components-teachingcard--docs | docs | PASS |  | 0/1/37/0 |
| components-teachingcard--full-content | story | PASS |  | 0/0/3/0 |
| components-teachingcard--minimal-card | story | PASS |  | 0/0/3/0 |
| components-teachingcard--with-warning | story | PASS |  | 0/0/3/0 |
| components-walletpicker--docs | docs | PASS |  | 0/2/21/0 |
| components-walletpicker--with-wallets | story | PASS |  | 0/0/0/0 |
| components-walletpicker--no-wallets-detected | story | PASS |  | 0/0/0/0 |
| components-walletpicker--connecting | story | PASS |  | 0/0/0/0 |
| tokens--docs | docs | PASS |  | 0/0/2/0 |

## a11y Violations by Entry

| Entry | Critical | Serious | Moderate | Minor |
|---|---|---|---|---|
| introduction--docs | 0 | 0 | 2 | 0 |
| primitives-alert--docs | 0 | 1 | 30 | 0 |
| primitives-alert--info | 0 | 0 | 2 | 0 |
| primitives-alert--success | 0 | 0 | 2 | 0 |
| primitives-alert--warning | 0 | 0 | 2 | 0 |
| primitives-alert--error | 0 | 0 | 2 | 0 |
| primitives-alert--dismissible | 0 | 0 | 2 | 0 |
| primitives-alert--message-only | 0 | 0 | 2 | 0 |
| primitives-badge--docs | 0 | 1 | 32 | 0 |
| primitives-badge--default | 0 | 0 | 3 | 0 |
| primitives-badge--success | 0 | 0 | 3 | 0 |
| primitives-badge--warning | 0 | 0 | 3 | 0 |
| primitives-badge--error | 0 | 0 | 3 | 0 |
| primitives-badge--info | 0 | 0 | 3 | 0 |
| primitives-button--docs | 0 | 0 | 38 | 0 |
| primitives-button--primary | 0 | 0 | 2 | 0 |
| primitives-button--secondary | 0 | 0 | 2 | 0 |
| primitives-button--danger | 0 | 0 | 2 | 0 |
| primitives-button--small | 0 | 0 | 2 | 0 |
| primitives-button--large | 0 | 0 | 2 | 0 |
| primitives-button--loading | 0 | 0 | 2 | 0 |
| primitives-button--disabled | 0 | 0 | 2 | 0 |
| primitives-input--docs | 0 | 0 | 32 | 0 |
| primitives-input--default | 0 | 0 | 3 | 0 |
| primitives-input--with-value | 0 | 0 | 3 | 0 |
| primitives-input--with-error | 0 | 0 | 4 | 0 |
| primitives-input--disabled | 0 | 0 | 3 | 0 |
| primitives-input--no-label | 0 | 0 | 3 | 0 |
| components-recordcard--docs | 0 | 0 | 38 | 0 |
| components-recordcard--confirmed | 0 | 0 | 7 | 0 |
| components-recordcard--pending | 0 | 0 | 4 | 0 |
| components-recordcard--failed | 0 | 0 | 5 | 0 |
| components-sessioncard--docs | 0 | 1 | 48 | 0 |
| components-sessioncard--available | 0 | 0 | 3 | 0 |
| components-sessioncard--completed | 0 | 0 | 3 | 0 |
| components-sessioncard--locked | 0 | 0 | 3 | 0 |
| components-statusticker--docs | 0 | 1 | 23 | 0 |
| components-statusticker--default | 0 | 0 | 3 | 0 |
| components-statusticker--single-item | 0 | 0 | 3 | 0 |
| components-statusticker--all-negative | 0 | 0 | 3 | 0 |
| components-teachingcard--docs | 0 | 1 | 37 | 0 |
| components-teachingcard--full-content | 0 | 0 | 3 | 0 |
| components-teachingcard--minimal-card | 0 | 0 | 3 | 0 |
| components-teachingcard--with-warning | 0 | 0 | 3 | 0 |
| components-walletpicker--docs | 0 | 2 | 21 | 0 |
| tokens--docs | 0 | 0 | 2 | 0 |
