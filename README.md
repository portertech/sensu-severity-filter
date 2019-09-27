# Sensu Go Severity Filter
TravisCI: [![TravisCI Build Status](https://travis-ci.org/portertech/sensu-severity-filter.svg?branch=master)](https://travis-ci.org/portertech/sensu-severity-filter)

The Sensu Go Severity Filter is a [Sensu Event Filter][1] that
filters Sensu Go Events by Check status severity (ok, warning,
critical, unknown).

This Filter Asset implements the [Sensu 1.x built-in Handler
severities filter logic][2].

## Configuration

### Configure filter definitions

Define one or more filters with `sensu-severity-filter` as a [runtime
asset][3] and using the `has_severity` function in a filter expression.
The following example shows a filter which will allow events with a
`critical` check severity:

``` yaml
---
type: EventFilter
api_version: core/v2
metadata:
  name: only_critical
  namespace: default
spec:
  action: allow
  runtime_assets:
    - sensu-severity-filter
  expressions:
    - has_severity(event, "critical")
```

[1]: https://docs.sensu.io/sensu-go/5.13/reference/filters/#how-do-sensu-filters-work
[2]: https://github.com/sensu/sensu/blob/468698124bcbadebea6e7d89c3e88a048c1b85f9/lib/sensu/server/filter.rb#L36-L65
[3]: https://docs.sensu.io/sensu-go/5.13/reference/assets/#what-is-an-asset
