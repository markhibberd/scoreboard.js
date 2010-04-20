module("roughly");

test("whole numbers. ", function() {
  equals("just happened",   roughly(0 * SECONDS));
  equals("1 second",   roughly(1 * SECONDS));
});


