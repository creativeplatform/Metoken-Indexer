import assert from "assert";
import { 
  TestHelpers,
  Metoken_Transfer
} from "generated";
const { MockDb, Metoken } = TestHelpers;

describe("Metoken contract Transfer event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Metoken contract Transfer event
  const event = Metoken.Transfer.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Metoken_Transfer is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Metoken.Transfer.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualMetokenTransfer = mockDbUpdated.entities.Metoken_Transfer.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedMetokenTransfer: Metoken_Transfer = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      from: event.params.from,
      to: event.params.to,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualMetokenTransfer, expectedMetokenTransfer, "Actual MetokenTransfer should be the same as the expectedMetokenTransfer");
  });
});
