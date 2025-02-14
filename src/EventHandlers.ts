/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Metoken,
  Metoken_Transfer,
  Metokens,
  Metokens_Burn,
  Metokens_CancelResubscribe,
  Metokens_CancelTransferMeTokenOwnership,
  Metokens_CancelUpdate,
  Metokens_ClaimMeTokenOwnership,
  Metokens_Deactivate,
  Metokens_Donate,
  Metokens_FinishResubscribe,
  Metokens_FinishUpdate,
  Metokens_InitResubscribe,
  Metokens_InitUpdate,
  Metokens_Mint,
  Metokens_Register,
  Metokens_SetBurnBuyerFee,
  Metokens_SetBurnOwnerFee,
  Metokens_SetMintFee,
  Metokens_Subscribe,
  Metokens_TransferHubOwnership,
  Metokens_TransferMeTokenOwnership,
  Metokens_UpdateBalanceLocked,
  Metokens_UpdateBalancePooled,
  Metokens_UpdateBalances,
} from "generated";

Metoken.Transfer.handler(async ({ event, context }) => {
  const entity: Metoken_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Metoken_Transfer.set(entity);
});

Metokens.Burn.handler(async ({ event, context }) => {
  const entity: Metokens_Burn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    asset: event.params.asset,
    burner: event.params.burner,
    recipient: event.params.recipient,
    meTokensBurned: event.params.meTokensBurned,
    assetsReturned: event.params.assetsReturned,
  };

  context.Metokens_Burn.set(entity);
});

Metokens.CancelResubscribe.handler(async ({ event, context }) => {
  const entity: Metokens_CancelResubscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
  };

  context.Metokens_CancelResubscribe.set(entity);
});

Metokens.CancelTransferMeTokenOwnership.handler(async ({ event, context }) => {
  const entity: Metokens_CancelTransferMeTokenOwnership = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    meToken: event.params.meToken,
  };

  context.Metokens_CancelTransferMeTokenOwnership.set(entity);
});

Metokens.CancelUpdate.handler(async ({ event, context }) => {
  const entity: Metokens_CancelUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
  };

  context.Metokens_CancelUpdate.set(entity);
});

Metokens.ClaimMeTokenOwnership.handler(async ({ event, context }) => {
  const entity: Metokens_ClaimMeTokenOwnership = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    meToken: event.params.meToken,
  };

  context.Metokens_ClaimMeTokenOwnership.set(entity);
});

Metokens.Deactivate.handler(async ({ event, context }) => {
  const entity: Metokens_Deactivate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
  };

  context.Metokens_Deactivate.set(entity);
});

Metokens.Donate.handler(async ({ event, context }) => {
  const entity: Metokens_Donate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    asset: event.params.asset,
    donor: event.params.donor,
    assetsDeposited: event.params.assetsDeposited,
  };

  context.Metokens_Donate.set(entity);
});

Metokens.FinishResubscribe.handler(async ({ event, context }) => {
  const entity: Metokens_FinishResubscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
  };

  context.Metokens_FinishResubscribe.set(entity);
});

Metokens.FinishUpdate.handler(async ({ event, context }) => {
  const entity: Metokens_FinishUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
  };

  context.Metokens_FinishUpdate.set(entity);
});

Metokens.InitResubscribe.handler(async ({ event, context }) => {
  const entity: Metokens_InitResubscribe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    targetHubId: event.params.targetHubId,
    migration: event.params.migration,
    encodedMigrationArgs: event.params.encodedMigrationArgs,
  };

  context.Metokens_InitResubscribe.set(entity);
});

Metokens.InitUpdate.handler(async ({ event, context }) => {
  const entity: Metokens_InitUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    targetRefundRatio: event.params.targetRefundRatio,
    targetReserveWeight: event.params.targetReserveWeight,
    reconfigure: event.params.reconfigure,
    startTime: event.params.startTime,
    endTime: event.params.endTime,
    endCooldown: event.params.endCooldown,
  };

  context.Metokens_InitUpdate.set(entity);
});

Metokens.Mint.handler(async ({ event, context }) => {
  const entity: Metokens_Mint = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    asset: event.params.asset,
    depositor: event.params.depositor,
    recipient: event.params.recipient,
    assetsDeposited: event.params.assetsDeposited,
    meTokensMinted: event.params.meTokensMinted,
  };

  context.Metokens_Mint.set(entity);
});

Metokens.Register.handler(async ({ event, context }) => {
  const entity: Metokens_Register = {
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

  context.Metokens_Register.set(entity);
});

Metokens.SetBurnBuyerFee.handler(async ({ event, context }) => {
  const entity: Metokens_SetBurnBuyerFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rate: event.params.rate,
  };

  context.Metokens_SetBurnBuyerFee.set(entity);
});

Metokens.SetBurnOwnerFee.handler(async ({ event, context }) => {
  const entity: Metokens_SetBurnOwnerFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rate: event.params.rate,
  };

  context.Metokens_SetBurnOwnerFee.set(entity);
});

Metokens.SetMintFee.handler(async ({ event, context }) => {
  const entity: Metokens_SetMintFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rate: event.params.rate,
  };

  context.Metokens_SetMintFee.set(entity);
});

Metokens.Subscribe.handler(async ({ event, context }) => {
  const entity: Metokens_Subscribe = {
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

  context.Metokens_Subscribe.set(entity);
});

Metokens.TransferHubOwnership.handler(async ({ event, context }) => {
  const entity: Metokens_TransferHubOwnership = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    newOwner: event.params.newOwner,
  };

  context.Metokens_TransferHubOwnership.set(entity);
});

Metokens.TransferMeTokenOwnership.handler(async ({ event, context }) => {
  const entity: Metokens_TransferMeTokenOwnership = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    meToken: event.params.meToken,
  };

  context.Metokens_TransferMeTokenOwnership.set(entity);
});

Metokens.UpdateBalanceLocked.handler(async ({ event, context }) => {
  const entity: Metokens_UpdateBalanceLocked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    add: event.params.add,
    meToken: event.params.meToken,
    amount: event.params.amount,
  };

  context.Metokens_UpdateBalanceLocked.set(entity);
});

Metokens.UpdateBalancePooled.handler(async ({ event, context }) => {
  const entity: Metokens_UpdateBalancePooled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    add: event.params.add,
    meToken: event.params.meToken,
    amount: event.params.amount,
  };

  context.Metokens_UpdateBalancePooled.set(entity);
});

Metokens.UpdateBalances.handler(async ({ event, context }) => {
  const entity: Metokens_UpdateBalances = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    meToken: event.params.meToken,
    newBalance: event.params.newBalance,
  };

  context.Metokens_UpdateBalances.set(entity);
});
