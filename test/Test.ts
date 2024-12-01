import assert from "assert";
import { 
  TestHelpers,
  DiamondMetoken_Burn
} from "generated";
const { MockDb, DiamondMetoken } = TestHelpers;

describe("DiamondMetoken contract Burn event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for DiamondMetoken contract Burn event
  const event = DiamondMetoken.Burn.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("DiamondMetoken_Burn is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await DiamondMetoken.Burn.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualDiamondMetokenBurn = mockDbUpdated.entities.DiamondMetoken_Burn.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedDiamondMetokenBurn: DiamondMetoken_Burn = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      meToken: event.params.meToken,
      asset: event.params.asset,
      burner: event.params.burner,
      recipient: event.params.recipient,
      meTokensBurned: event.params.meTokensBurned,
      assetsReturned: event.params.assetsReturned,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualDiamondMetokenBurn, expectedDiamondMetokenBurn, "Actual DiamondMetokenBurn should be the same as the expectedDiamondMetokenBurn");
  });
});
