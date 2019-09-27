function has_severity(event, severity) {
    var severities = ["ok", "warning", "critical", "unknown"];

    if (event.hasOwnProperty("check") && event.check.hasOwnProperty("status")) {
        var eventSeverity = severities[event.check.status] || "unknown";

        if (eventSeverity != "ok") {
            return severity == eventSeverity;
        }

        // Ignoring the fact that it may not be the first ok
        // occurrence. This filter may be used in combination with
        // the built-in is_incident and the community fatigue filters.

        if (event.check.hasOwnProperty("history")) {
            var history = event.check.history;

            var hLen = history.length;

            for (i = 0; i < hLen; i++) {
                var execution = history[i];

                if (execution.hasOwnProperty("status")) {
                    var execSeverity = severities[execution.status] || "unknown";

                    if (execSeverity == severity) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}
