/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  HubFacet,
  FoundryFacet,
  FeesFacet,
  MeTokenRegistryFacet,
  HubFacet_CancelUpdate,
  HubFacet_Deactivate,
  HubFacet_FinishUpdate,
  HubFacet_InitUpdate,
  HubFacet_Register,
  HubFacet_TransferHubOwnership,
  FoundryFacet_Burn,
  FoundryFacet_Donate,
  FoundryFacet_Mint,
  FeesFacet_SetBurnBuyerFee,
  FeesFacet_SetBurnOwnerFee,
  FeesFacet_SetMintFee,
  MeTokenRegistryFacet_CancelResubscribe,
  MeTokenRegistryFacet_CancelTransferMeTokenOwnership,
  MeTokenRegistryFacet_ClaimMeTokenOwnership,
  MeTokenRegistryFacet_FinishResubscribe,
  MeTokenRegistryFacet_InitResubscribe,
  MeTokenRegistryFacet_Subscribe,
  MeTokenRegistryFacet_TransferMeTokenOwnership,
  MeTokenRegistryFacet_UpdateBalanceLocked,
  MeTokenRegistryFacet_UpdateBalances,
} from "generated";

// HubFacet Handlers
HubFacet.CancelUpdate.handler(async ({ event, context }) => {
  const entity: HubFacet_CancelUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.HubFacet_CancelUpdate.set(entity);
});

HubFacet.Deactivate.handler(async ({ event, context }) => {
  const entity: HubFacet_Deactivate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.HubFacet_Deactivate.set(entity);
});

HubFacet.FinishUpdate.handler(async ({ event, context }) => {
  const entity: HubFacet_FinishUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.HubFacet_FinishUpdate.set(entity);
});

HubFacet.InitUpdate.handler(async ({ event, context }) => {
  const entity: HubFacet_InitUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    targetRefundRatio: event.params.targetRefundRatio,
    targetReserveWeight: event.params.targetReserveWeight,
    reconfigure: event.params.reconfigure,
    startTime: event.params.startTime,
    endTime: event.params.endTime,
    endCooldown: event.params.endCooldown,
  };

  context.HubFacet_InitUpdate.set(entity);
});

HubFacet.Register.handler(async ({ event, context }) => {
  const entity: HubFacet_Register = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    owner: event.params.owner,
    asset: event.params.asset,
    vault: event.params.vault,
    refundRatio: event.params.refundRatio,
    baseY: event.params.baseY,
    reserveWeight: event.params.reserveWeight,
    encodedVaultArgs: event.params.encodedVaultArgs,
  };

  context.HubFacet_Register.set(entity);
});

HubFacet.TransferHubOwnership.handler(async ({ event, context }) => {
  const entity: HubFacet_TransferHubOwnership = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    newOwner: event.params.newOwner,
  };

  context.HubFacet_TransferHubOwnership.set(entity);
});

// FoundryFacet Handlers
FoundryFacet.Burn.handler(async ({ event, context }) => {
  const entity: FoundryFacet_Burn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    asset: event.params.asset,
    burner: event.params.burner,
    recipient: event.params.recipient,
    meTokensBurned: event.params.meTokensBurned,
    assetsReturned: event.params.assetsReturned,
  };

  context.FoundryFacet_Burn.set(entity);
});

FoundryFacet.Donate.handler(async ({ event, context }) => {
  const entity: FoundryFacet_Donate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    asset: event.params.asset,
    donor: event.params.donor,
    assetsDeposited: event.params.assetsDeposited,
  };

  context.FoundryFacet_Donate.set(entity);
});

FoundryFacet.Mint.handler(async ({ event, context }) => {
  const entity: FoundryFacet_Mint = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    asset: event.params.asset,
    depositor: event.params.depositor,
    recipient: event.params.recipient,
    assetsDeposited: event.params.assetsDeposited,
    meTokensMinted: event.params.meTokensMinted,
  };

  context.FoundryFacet_Mint.set(entity);
});

// FeesFacet Handlers
FeesFacet.SetBurnBuyerFee.handler(async ({ event, context }) => {
  const entity: FeesFacet_SetBurnBuyerFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rate: event.params.rate,
  };

  context.FeesFacet_SetBurnBuyerFee.set(entity);
});

FeesFacet.SetBurnOwnerFee.handler(async ({ event, context }) => {
  const entity: FeesFacet_SetBurnOwnerFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rate: event.params.rate,
  };

  context.FeesFacet_SetBurnOwnerFee.set(entity);
});

FeesFacet.SetMintFee.handler(async ({ event, context }) => {
  const entity: FeesFacet_SetMintFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rate: event.params.rate,
  };

  context.FeesFacet_SetMintFee.set(entity);
});

// MeTokenRegistryFacet Handlers
MeTokenRegistryFacet.Subscribe.handler(async ({ event, context }) => {
  const entity: MeTokenRegistryFacet_Subscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    owner: event.params.owner,
    minted: event.params.minted,
    asset: event.params.asset,
    assetsDeposited: event.params.assetsDeposited,
    name: event.params.name,
    symbol: event.params.symbol,
    hubId: event.params.hubId,
  };

  context.MeTokenRegistryFacet_Subscribe.set(entity);
});

MeTokenRegistryFacet.CancelResubscribe.handler(async ({ event, context }) => {
  const entity: MeTokenRegistryFacet_CancelResubscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
  };

  context.MeTokenRegistryFacet_CancelResubscribe.set(entity);
});

MeTokenRegistryFacet.CancelTransferMeTokenOwnership.handler(
  async ({ event, context }) => {
    const entity: MeTokenRegistryFacet_CancelTransferMeTokenOwnership = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      from: event.params.from,
      meToken: event.params.meToken,
    };

    context.MeTokenRegistryFacet_CancelTransferMeTokenOwnership.set(entity);
  }
);

MeTokenRegistryFacet.ClaimMeTokenOwnership.handler(
  async ({ event, context }) => {
    const entity: MeTokenRegistryFacet_ClaimMeTokenOwnership = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      from: event.params.from,
      to: event.params.to,
      meToken: event.params.meToken,
    };

    context.MeTokenRegistryFacet_ClaimMeTokenOwnership.set(entity);
  }
);

MeTokenRegistryFacet.FinishResubscribe.handler(async ({ event, context }) => {
  const entity: MeTokenRegistryFacet_FinishResubscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
  };

  context.MeTokenRegistryFacet_FinishResubscribe.set(entity);
});

MeTokenRegistryFacet.InitResubscribe.handler(async ({ event, context }) => {
  const entity: MeTokenRegistryFacet_InitResubscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    metoken: event.params.metoken,
    targetHubId: event.params.targetHubId,
    migration: event.params.migration,
    encodedMigrationArgs: event.params.encodedMigrationArgs,
  };

  context.MeTokenRegistryFacet_InitResubscribe.set(entity);
});

MeTokenRegistryFacet.TransferMeTokenOwnership.handler(
  async ({ event, context }) => {
    const entity: MeTokenRegistryFacet_TransferMeTokenOwnership = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      from: event.params.from,
      to: event.params.to,
      meToken: event.params.meToken,
    };

    context.MeTokenRegistryFacet_TransferMeTokenOwnership.set(entity);
  }
);

MeTokenRegistryFacet.UpdateBalanceLocked.handler(async ({ event, context }) => {
  const entity: MeTokenRegistryFacet_UpdateBalanceLocked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    add: event.params.add,
    meToken: event.params.meToken,
    amount: event.params.amount,
  };

  context.MeTokenRegistryFacet_UpdateBalanceLocked.set(entity);
});

MeTokenRegistryFacet.UpdateBalances.handler(async ({ event, context }) => {
  const entity: MeTokenRegistryFacet_UpdateBalances = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    newBalance: event.params.newBalance,
  };

  context.MeTokenRegistryFacet_UpdateBalances.set(entity);
});
