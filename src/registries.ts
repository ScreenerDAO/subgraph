import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
    CompanyAdded as CompanyAddedEvent,
    CompanyDataEdited as CompanyDataEditedEvent,
    CompanyEdited as CompanyEditedEvent,
    CompanyNameEdited as CompanyNameEditedEvent,
    CompanyTickerEdited as CompanyTickerEditedEvent,
    Initialized as InitializedEvent
} from "../generated/Registries/Registries"
import { Company, Event } from "../generated/schema"

export function handleCompanyAdded(event: CompanyAddedEvent): void {
    //   let entity = new CompanyAdded(
    //     event.transaction.hash.concatI32(event.logIndex.toI32())
    //   )
    //   entity.id = event.params.id
    //   entity.name = event.params.name
    //   entity.ticker = event.params.ticker
    //   entity.dataHash = event.params.dataHash

    //   entity.blockNumber = event.block.number
    //   entity.blockTimestamp = event.block.timestamp
    //   entity.transactionHash = event.transaction.hash

    let entity = new Company(event.params.id.toString())

    entity.iId = event.params.id
    entity.name = event.params.name
    entity.ticker = event.params.ticker
    entity.dataHash = event.params.dataHash

    entity.save()

    let eventLog = new Event(event.transaction.hash.toString())

    eventLog.blockTimestamp = event.block.timestamp
    eventLog.companyId = event.params.id
    eventLog.eventType = "AddComapny"

    eventLog.save()
}

export function handleCompanyDataEdited(event: CompanyDataEditedEvent): void {
    let entity = Company.load(event.params.id.toString())
    entity!.dataHash = event.params.dataHash

    entity!.save()

    let eventLog = new Event(event.block.hash.toString())

    eventLog.blockTimestamp = event.block.timestamp
    eventLog.companyId = event.params.id
    eventLog.eventType = "EditCompany"

    eventLog.save()
}

export function handleCompanyEdited(event: CompanyEditedEvent): void {
    let entity = Company.load(event.params.id.toString())

    entity!.name = event.params.name
    entity!.ticker = event.params.ticker
    entity!.dataHash = event.params.dataHash

    entity!.save()

    let eventLog = new Event(event.block.hash.toString())

    eventLog.blockTimestamp = event.block.timestamp
    eventLog.companyId = event.params.id
    eventLog.eventType = "EditCompany"

    eventLog.save()
}

export function handleCompanyNameEdited(event: CompanyNameEditedEvent): void {
    let entity = Company.load(event.params.id.toString())

    entity!.name = event.params.name

    entity!.save()

    let eventLog = new Event(event.block.hash.toString())

    eventLog.blockTimestamp = event.block.timestamp
    eventLog.companyId = event.params.id
    eventLog.eventType = "EditCompany"

    eventLog.save()
}

export function handleCompanyTickerEdited(event: CompanyTickerEditedEvent): void {
    let entity = Company.load(event.params.id.toString())

    entity!.ticker = event.params.ticker

    entity!.save()

    let eventLog = new Event(event.block.hash.toString())

    eventLog.blockTimestamp = event.block.timestamp
    eventLog.companyId = event.params.id
    eventLog.eventType = "EditCompany"

    eventLog.save()
}

