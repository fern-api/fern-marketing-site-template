# Results

## How to log results

Export weekly from LinkedIn Campaign Manager and Google Ads. Append rows to `performance.csv`, one row per variant per day (or per week, as long as the cadence is consistent across rows).

### Schema

```
date,platform,campaign,variant_id,impressions,clicks,ctr,spend,landing_page_views,demo_bookings,cost_per_booking,notes
```

- `date` is the period end date (`YYYY-MM-DD`).
- `platform` is `linkedin` or `google`.
- `variant_id` matches the IDs in `../copy/`.
- `notes` is free-form (creative refresh, targeting tweak, pause, etc.).

## How to use the data

Every two weeks:

1. Sort by `cost_per_booking` ascending. Top three are working — keep running them.
2. Sort by `ctr` ascending. Bottom three are bleeding spend — pause or refresh.
3. Update `learnings.md` with the keep/cut/test-next call.
4. When testing a new hypothesis, increment the variant ID and add a new row to copy + creative. Never edit a live variant in place.
