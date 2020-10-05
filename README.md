# Sensu Go Severity Filter
TravisCI: [![TravisCI Build Status](https://travis-ci.org/portertech/sensu-severity-filter.svg?branch=master)](https://travis-ci.org/portertech/sensu-severity-filter)

The Sensu Go Severity Filter is a [Sensu Event Filter][1] that
filters Sensu Go Events by Check status severity (ok, warning,
critical, unknown).

This Filter Asset implements the [Sensu 1.x built-in Handler
severities filter logic][2].

The logic excludes events unless their check exit status matches
the specified severity, excepting of certain "ok" severity events. 

OK events are allowed when the available check history includes
a match for the specified severity.

## Usage

### Installation

Assets are the best way to make use of this plugin. If you're using sensuctl 
5.13 or later, you can use the following command to add the asset:

```
sensuctl asset add portertech/sensu-severity-filter --rename severity-filter
```

### Configuration

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
    - severity-filter
  expressions:
    - has_severity(event, "critical")
```

[1]: https://docs.sensu.io/sensu-go/latest/observability-pipeline/observe-filter/filters/
[2]: https://github.com/sensu/sensu/blob/468698124bcbadebea6e7d89c3e88a048c1b85f9/lib/sensu/server/filter.rb#L36-L65
[3]: https://docs.sensu.io/sensu-go/latest/operations/deploy-sensu/assets/
