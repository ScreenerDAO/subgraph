import {
  CompanyAdded as CompanyAddedEvent,
  CompanyDataEdited as CompanyDataEditedEvent,
  CompanyEdited as CompanyEditedEvent,
  CompanyNameEdited as CompanyNameEditedEvent,
  CompanyTickerEdited as CompanyTickerEditedEvent,
  Initialized as InitializedEvent
} from "../generated/Registries/Registries"
import {
  CompanyAdded,
  CompanyDataEdited,
  CompanyEdited,
  CompanyNameEdited,
  CompanyTickerEdited,
  Initialized
} from "../generated/schema"

export function handleCompanyAdded(event: CompanyAddedEvent): void {
  let entity = new CompanyAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.name = event.params.name
  entity.ticker = event.params.ticker
  entity.dataHash = event.params.dataHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCompanyDataEdited(event: CompanyDataEditedEvent): void {
  let entity = new CompanyDataEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.dataHash = event.params.dataHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCompanyEdited(event: CompanyEditedEvent): void {
  let entity = new CompanyEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.name = event.params.name
  entity.ticker = event.params.ticker
  entity.dataHash = event.params.dataHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCompanyNameEdited(event: CompanyNameEditedEvent): void {
  let entity = new CompanyNameEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCompanyTickerEdited(
  event: CompanyTickerEditedEvent
): void {
  let entity = new CompanyTickerEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.ticker = event.params.ticker

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
