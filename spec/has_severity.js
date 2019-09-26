describe("has_severity", function() {
    it("returns false", function() {
        var event = {}
        expect(has_severity(event, "critical")).toBe(false);
    });
});
