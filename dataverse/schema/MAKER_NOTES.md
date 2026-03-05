
# Trend Commerce Dataverse Setup

Create the following tables in Dataverse using the JSON blueprints here:
- **Product (pp_product)**
- **Order (pp_order)**
- **Order Line (pp_orderline)**

## Views (suggested)
- **Products: Active Products** — columns: Name, SKU, Price, Category
- **Orders: My Orders** — filter: pp_customer = Current Contact

## Forms
- **Product (Read)** — used on product details page (Record Source: Query String `id`)
- **Order (Insert)** — multistep optional; required fields: Customer (auto = current contact), Order Date (default = now)
- **Order Line (Insert/Edit)** — used as child form or subgrid on Order page

## Lists
- **Products List** — table: Product; view: Active Products; enable Search; enable actions: View

## Table Permissions
- Product: Global Read (Anonymous optional) for catalog browsing
- Order: Contact scope (pp_customer) Read/Create
- Order Line: Parent scope via Order

