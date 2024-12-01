/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  DiamondMetoken,
  DiamondMetoken_Burn,
  DiamondMetoken_CancelResubscribe,
  DiamondMetoken_CancelTransferMeTokenOwnership,
  DiamondMetoken_CancelUpdate,
  DiamondMetoken_ClaimMeTokenOwnership,
  DiamondMetoken_Deactivate,
  DiamondMetoken_Donate,
  DiamondMetoken_FinishResubscribe,
  DiamondMetoken_FinishUpdate,
  DiamondMetoken_InitResubscribe,
  DiamondMetoken_InitUpdate,
  DiamondMetoken_Mint,
  DiamondMetoken_Register,
  DiamondMetoken_SetBurnBuyerFee,
  DiamondMetoken_SetBurnOwnerFee,
  DiamondMetoken_SetMintFee,
  DiamondMetoken_Subscribe,
  DiamondMetoken_TransferHubOwnership,
  DiamondMetoken_TransferMeTokenOwnership,
  DiamondMetoken_UpdateBalanceLocked,
  DiamondMetoken_UpdateBalancePooled,
  DiamondMetoken_UpdateBalances,
} from "generated";

DiamondMetoken.Burn.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_Burn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    asset: event.params.asset,
    burner: event.params.burner,
    recipient: event.params.recipient,
    meTokensBurned: event.params.meTokensBurned,
    assetsReturned: event.params.assetsReturned,
  };

  context.DiamondMetoken_Burn.set(entity);
});

DiamondMetoken.CancelResubscribe.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_CancelResubscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
  };

  context.DiamondMetoken_CancelResubscribe.set(entity);
});

DiamondMetoken.CancelTransferMeTokenOwnership.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_CancelTransferMeTokenOwnership = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    meToken: event.params.meToken,
  };

  context.DiamondMetoken_CancelTransferMeTokenOwnership.set(entity);
});

DiamondMetoken.CancelUpdate.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_CancelUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
  };

  context.DiamondMetoken_CancelUpdate.set(entity);
});

DiamondMetoken.ClaimMeTokenOwnership.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_ClaimMeTokenOwnership = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    meToken: event.params.meToken,
  };

  context.DiamondMetoken_ClaimMeTokenOwnership.set(entity);
});

DiamondMetoken.Deactivate.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_Deactivate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
  };

  context.DiamondMetoken_Deactivate.set(entity);
});

DiamondMetoken.Donate.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_Donate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    asset: event.params.asset,
    donor: event.params.donor,
    assetsDeposited: event.params.assetsDeposited,
  };

  context.DiamondMetoken_Donate.set(entity);
});

DiamondMetoken.FinishResubscribe.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_FinishResubscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
  };

  context.DiamondMetoken_FinishResubscribe.set(entity);
});

DiamondMetoken.FinishUpdate.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_FinishUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
  };

  context.DiamondMetoken_FinishUpdate.set(entity);
});

DiamondMetoken.InitResubscribe.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_InitResubscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    targetHubId: event.params.targetHubId,
    migration: event.params.migration,
    encodedMigrationArgs: event.params.encodedMigrationArgs,
  };

  context.DiamondMetoken_InitResubscribe.set(entity);
});

DiamondMetoken.InitUpdate.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_InitUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    targetRefundRatio: event.params.targetRefundRatio,
    targetReserveWeight: event.params.targetReserveWeight,
    reconfigure: event.params.reconfigure,
    startTime: event.params.startTime,
    endTime: event.params.endTime,
    endCooldown: event.params.endCooldown,
  };

  context.DiamondMetoken_InitUpdate.set(entity);
});

DiamondMetoken.Mint.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_Mint = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    asset: event.params.asset,
    depositor: event.params.depositor,
    recipient: event.params.recipient,
    assetsDeposited: event.params.assetsDeposited,
    meTokensMinted: event.params.meTokensMinted,
  };

  context.DiamondMetoken_Mint.set(entity);
});

DiamondMetoken.Register.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_Register = {
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

  context.DiamondMetoken_Register.set(entity);
});

DiamondMetoken.SetBurnBuyerFee.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_SetBurnBuyerFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rate: event.params.rate,
  };

  context.DiamondMetoken_SetBurnBuyerFee.set(entity);
});

DiamondMetoken.SetBurnOwnerFee.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_SetBurnOwnerFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rate: event.params.rate,
  };

  context.DiamondMetoken_SetBurnOwnerFee.set(entity);
});

DiamondMetoken.SetMintFee.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_SetMintFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rate: event.params.rate,
  };

  context.DiamondMetoken_SetMintFee.set(entity);
});

DiamondMetoken.Subscribe.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_Subscribe = {
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

  context.DiamondMetoken_Subscribe.set(entity);
});

DiamondMetoken.TransferHubOwnership.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_TransferHubOwnership = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    newOwner: event.params.newOwner,
  };

  context.DiamondMetoken_TransferHubOwnership.set(entity);
});

DiamondMetoken.TransferMeTokenOwnership.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_TransferMeTokenOwnership = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    meToken: event.params.meToken,
  };

  context.DiamondMetoken_TransferMeTokenOwnership.set(entity);
});

DiamondMetoken.UpdateBalanceLocked.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_UpdateBalanceLocked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    add: event.params.add,
    meToken: event.params.meToken,
    amount: event.params.amount,
  };

  context.DiamondMetoken_UpdateBalanceLocked.set(entity);
});

DiamondMetoken.UpdateBalancePooled.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_UpdateBalancePooled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    add: event.params.add,
    meToken: event.params.meToken,
    amount: event.params.amount,
  };

  context.DiamondMetoken_UpdateBalancePooled.set(entity);
});

DiamondMetoken.UpdateBalances.handler(async ({ event, context }) => {
  const entity: DiamondMetoken_UpdateBalances = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    newBalance: event.params.newBalance,
  };

  context.DiamondMetoken_UpdateBalances.set(entity);
});
