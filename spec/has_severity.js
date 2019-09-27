describe("has_severity", function() {
    it("returns false", function() {
        var event = {}
        expect(has_severity(event, "critical")).toBe(false);
    });

    it("returns false when the current severity is warning", function() {
        var event = {
            check: {
                status: 1
            }
        }
        expect(has_severity(event, "critical")).toBe(false);
    });

    it("returns true when the current severity is warning", function() {
        var event = {
            check: {
                status: 1
            }
        }
        expect(has_severity(event, "warning")).toBe(true);
    });

    it("returns true when the current severity is critical", function() {
        var event = {
            check: {
                status: 2
            }
        }
        expect(has_severity(event, "critical")).toBe(true);
    });

    it("returns true when the current severity is unknown", function() {
        var event = {
            check: {
                status: 3
            }
        }
        expect(has_severity(event, "unknown")).toBe(true);
    });

    it("returns true when the current severity is unknown", function() {
        var event = {
            check: {
                status: 256
            }
        }
        expect(has_severity(event, "unknown")).toBe(true);
    });

    it("returns true when the current severity is ok", function() {
        var event = {
            check: {
                status: 0,
                history: [
                    {
                        status: 0
                    }
                ]
            }
        }
        expect(has_severity(event, "ok")).toBe(true);
    });

    it("returns true when the current severity is ok with a past critical", function() {
        var event = {
            check: {
                status: 0,
                history: [
                    {
                        status: 0
                    },
                    {
                        status: 2
                    },
                    {
                        status: 1
                    },
                    {
                        status: 0
                    }
                ]
            }
        }
        expect(has_severity(event, "critical")).toBe(true);
    });
});
