Use Cases - TechCorp Solutions / Instance Method Samples
=========================================================

Company Overview
----------------

**TechCorp Solutions** is a B2B SaaS company using **Freshdesk** to manage enterprise customer success. Each account has a rolling **customer health score** derived from product usage, support volume, and renewal risk. CSMs need that score visible in the ticket sidebar without leaving Freshdesk.

* * * * *

Use Case Scenarios
------------------

### 1\. Real-Time Health Score in the Ticket Sidebar

**Scenario**: During QBR season, CSMs open hundreds of tickets daily. They need an at-a-glance health badge (Healthy / At Risk / Critical) without opening a separate BI tool.

**Use Case**: The parent instance uses **instance APIs** (`resize`, `context`, `receive`) so the compact sidebar shows the current tier. When a CSM opens **Open health review**, a modal child instance collects an updated assessment and **sends** the new tier back via `instance.send`, which refreshes the badge instantly.

* * * * *

### 2\. Cross-Instance Coordination on the Full-Page Dashboard

**Scenario**: Customer success leadership runs a **full-page app** listing portfolio accounts while agents work tickets in sidebars.

**Use Case**: Multiple app instances (sidebar + full page) on the same session communicate through `instance.receive`. A score change saved in one placement propagates to others, keeping portfolio and ticket views aligned without a full reload.

* * * * *

### 3\. Escalation Notes Without Navigation Churn

**Scenario**: An account drops to **Critical** after a P1 outage; the CSM must log an escalation note before involving leadership.

**Use Case**: `client.interface.trigger('showDialog')` opens a lightweight child surface for structured notes. The parent ticket context stays open; the dialog closes after submit, preserving agent focus.

* * * * *

### 4\. Multi-Product Placement Consistency

**Scenario**: TechCorp uses Freshdesk for support, Freshservice for internal IT, Freshsales for account records, and chat for live conversations.

**Use Case**: The same health UI is hosted in `support_ticket`, `service_ticket`, `sales_account`, and `chat_conversation` placements so every team sees consistent health language across products.

* * * * *

### 5\. Renewal-Window Bulk Reviews

**Scenario**: Before renewal, 200 accounts need health reclassification within 48 hours.

**Use Case**: Agents batch-open tickets, use the modal workflow per account, and rely on `instance.send` / `instance.receive` so each save updates the sidebar badge without page reloads — reducing context switching during high-volume review windows.
