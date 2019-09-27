# Sensu Go Severity Filter
TravisCI: [![TravisCI Build Status](https://travis-ci.org/portertech/sensu-severity-filter.svg?branch=master)](https://travis-ci.org/portertech/sensu-severity-filter)

The Sensu Go Severity Filter is a [Sensu Event Filter][1] that
filters Sensu Go Events by Check status severity (ok, warning,
critical, unknown).

## Configuration

### Configure filter definitions

Define one or more filters with `sensu-severity-filter` as a [runtime
asset] and using the `has_severity` function in a filter expression.
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
