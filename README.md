# AdminLTE 2.4.2 — Shadcn Custom Registry

A complete [Shadcn UI custom registry](https://ui.shadcn.com/docs/registry) that faithfully reproduces every AdminLTE 2.4.2 component, widget, page template, and layout pattern as modern **React + TypeScript + Tailwind CSS** — zero jQuery, zero Bootstrap CSS.

## Quick Start

Add any component to your Next.js / Shadcn project:

```bash
npx shadcn add https://raw.githubusercontent.com/dnachavez/adminlte-next/master/public/r/admin-layout.json
```

Or add individual pieces:

```bash
npx shadcn add https://raw.githubusercontent.com/dnachavez/adminlte-next/master/public/r/box.json \
  https://raw.githubusercontent.com/dnachavez/adminlte-next/master/public/r/small-box.json \
  https://raw.githubusercontent.com/dnachavez/adminlte-next/master/public/r/info-box.json
```

## What's Inside

**77 registry items** across 5 categories:

### Theme & Skins (13 items)

| Name | Description |
|------|-------------|
| `adminlte-theme` | Base color system — 16 named colors, CSS custom properties, layout constants |
| `skin-blue` | Blue navbar (`#3c8dbc`) + dark sidebar |
| `skin-blue-light` | Blue navbar + light sidebar |
| `skin-green` | Green navbar (`#00a65a`) + dark sidebar |
| `skin-green-light` | Green navbar + light sidebar |
| `skin-red` | Red navbar (`#dd4b39`) + dark sidebar |
| `skin-red-light` | Red navbar + light sidebar |
| `skin-yellow` | Yellow navbar (`#f39c12`) + dark sidebar |
| `skin-yellow-light` | Yellow navbar + light sidebar |
| `skin-purple` | Purple navbar (`#605ca8`) + dark sidebar |
| `skin-purple-light` | Purple navbar + light sidebar |
| `skin-black` | White navbar with dark text + dark sidebar |
| `skin-black-light` | White navbar with dark text + light sidebar |

### Hooks (9 items)

| Name | Description |
|------|-------------|
| `use-collapsible` | Collapsible box widget with CSS max-height animation |
| `use-removable` | Removable box widget with slide-up animation |
| `use-box-loading` | Box loading overlay state with spinner |
| `use-push-menu` | Sidebar push menu toggle with 767px breakpoint |
| `use-treeview` | Accordion treeview menu expand/collapse |
| `use-control-sidebar` | Right control sidebar slide toggle |
| `use-layout` | Content wrapper min-height calculation |
| `use-direct-chat` | Direct chat contacts panel toggle |
| `use-todo-list` | Todo list item management with check/uncheck |

### UI Components (19 items)

| Name | Description |
|------|-------------|
| `adminlte-button` | 6 color variants, flat style, social media variants, 4 sizes |
| `adminlte-badge` | Inline badge with 6 color variants |
| `adminlte-label` | Inline label with 6 color variants |
| `adminlte-alert` | Alert with success/info/warning/danger + dismissible |
| `adminlte-callout` | Callout box with colored left border |
| `adminlte-progress` | Progress bar — 6 colors, 4 sizes, striped, animated, vertical |
| `adminlte-modal` | Modal dialog with colored header variants, 3 sizes |
| `adminlte-tabs` | Tab navigation with custom box styling |
| `adminlte-carousel` | Image carousel with autoplay and controls |
| `adminlte-dropdown` | Dropdown menu with items, headers, footers, dividers |
| `adminlte-description-block` | Statistics display with trend indicator |
| `adminlte-users-list` | Grid of user avatars with names and dates |
| `adminlte-products-list` | Product list with image, name, description, label |
| `adminlte-form-control` | Input, textarea, select with validation states |
| `adminlte-input-group` | Input group with addon text, icons, or buttons |
| `adminlte-checkbox-radio` | Styled checkboxes and radios with 5 color accents |
| `adminlte-table` | Table with striped, bordered, hover, condensed variants |
| `adminlte-pagination` | Pagination with flat variant, 3 sizes, ellipsis |
| `adminlte-chart-placeholder` | Chart container for line, area, bar, pie, donut |

### Composed Components (23 items)

| Name | Description |
|------|-------------|
| `box` | Box/card widget — 6 color variants, solid fill, collapsible, removable, loading overlay |
| `small-box` | Compact stat widget with large number, icon, and footer link |
| `info-box` | Info display with colored icon area, number, and optional progress bar |
| `sidebar-menu` | Sidebar nav with treeview, section headers, icons, badges |
| `sidebar-user-panel` | User info panel with avatar, name, online status |
| `sidebar-search-form` | Themed search input for the sidebar |
| `header-logo` | Logo with full/mini (collapsed) variants |
| `header-navbar` | Top nav bar with sidebar toggle and menu slots |
| `messages-dropdown` | Navbar dropdown for recent messages |
| `notifications-dropdown` | Navbar dropdown for notifications |
| `tasks-dropdown` | Navbar dropdown for task progress |
| `user-menu-dropdown` | Navbar dropdown for user account |
| `main-header` | Full header bar (logo + navbar) |
| `main-sidebar` | Left sidebar (230px, collapse/expand, mobile responsive) |
| `main-footer` | Page footer with left/right content slots |
| `content-wrapper` | Main content area with #ecf0f5 background |
| `content-header` | Page title with h1, subtitle, breadcrumbs |
| `control-sidebar` | Right sidebar panel with dark/light variants |
| `timeline` | Vertical timeline with colored markers and labels |
| `direct-chat` | Chat with message bubbles, contacts panel, input |
| `chat-widget` | Simple chat display with avatars and timestamps |
| `todo-list` | Interactive todo with checkbox, strikethrough, delete |
| `profile-card` | User profile card in 2 layout styles |

### Page Blocks (13 items)

| Name | Description |
|------|-------------|
| `admin-layout` | Complete layout wrapper with sidebar, header, content, footer, context provider |
| `dashboard-stat-row` | Responsive grid row for stat widgets |
| `dashboard-overview` | Full dashboard page with stats, charts, timeline, widgets |
| `login-page` | Login form with social auth buttons |
| `register-page` | Registration form with terms agreement |
| `lockscreen-page` | Lock screen with avatar and password input |
| `error-404-page` | 404 error page with search form |
| `error-500-page` | 500 error page with search form |
| `invoice-page` | Invoice with addresses, line items, totals, print button |
| `invoice-print-page` | Print-optimized invoice without navigation |
| `profile-page` | User profile with cover image, stats, tabbed content |
| `blank-page` | Starter template with content header and empty box |
| `mailbox-layout` | Email mailbox with folders, email list, read/compose views |

## Dependency Chains

Dependencies are resolved automatically. For example, adding `admin-layout` pulls in:

```
admin-layout
├── adminlte-theme (colors, CSS vars, utilities)
├── main-header
│   ├── header-logo
│   ├── header-navbar
│   └── use-push-menu
├── main-sidebar
│   ├── sidebar-menu
│   │   ├── adminlte-badge
│   │   ├── adminlte-label
│   │   └── use-treeview
│   ├── sidebar-user-panel
│   └── sidebar-search-form
├── content-wrapper
├── content-header
├── main-footer
├── control-sidebar
│   ├── adminlte-tabs
│   └── use-control-sidebar
├── use-layout
└── use-push-menu
```

## Architecture

```
registry/
└── new-york/
    ├── adminlte-theme/          # Base theme: CSS vars, color map, cn() utility
    │   ├── adminlte-theme.css
    │   └── lib/
    │       ├── colors.ts
    │       └── cn.ts
    ├── skin-*/                  # 12 skin CSS files (6 dark + 6 light sidebar)
    ├── use-*/                   # 9 React hooks
    ├── adminlte-*/              # 19 atomic UI components
    ├── box/                     # 23 composed components
    ├── sidebar-menu/
    ├── main-header/
    ├── ...
    ├── admin-layout/            # 13 page blocks
    ├── dashboard-overview/
    ├── login-page/
    └── ...
registry.json                    # Shadcn registry manifest (77 items)
```

## Color Palette

All 16 AdminLTE named colors are available as CSS custom properties and Tailwind utilities:

| Color | Hex | CSS Variable |
|-------|-----|-------------|
| Aqua | `#00c0ef` | `--adminlte-aqua` |
| Red | `#dd4b39` | `--adminlte-red` |
| Green | `#00a65a` | `--adminlte-green` |
| Yellow | `#f39c12` | `--adminlte-yellow` |
| Blue | `#0073b7` | `--adminlte-blue` |
| Light Blue | `#3c8dbc` | `--adminlte-light-blue` |
| Navy | `#001f3f` | `--adminlte-navy` |
| Teal | `#39cccc` | `--adminlte-teal` |
| Olive | `#3d9970` | `--adminlte-olive` |
| Lime | `#01ff70` | `--adminlte-lime` |
| Orange | `#ff851b` | `--adminlte-orange` |
| Fuchsia | `#f012be` | `--adminlte-fuchsia` |
| Purple | `#605ca8` | `--adminlte-purple` |
| Maroon | `#d81b60` | `--adminlte-maroon` |
| Black | `#111111` | `--adminlte-black` |
| Gray | `#d2d6de` | `--adminlte-gray` |

## Requirements

- React 18+
- TypeScript
- Tailwind CSS 3+
- [Shadcn UI](https://ui.shadcn.com) project setup

npm dependencies pulled automatically: `clsx`, `tailwind-merge`, `lucide-react`

## License

AdminLTE is an open source project by [AdminLTE.IO](https://adminlte.io) licensed under [MIT](http://opensource.org/licenses/MIT).

This Shadcn registry adaptation is also MIT licensed.
