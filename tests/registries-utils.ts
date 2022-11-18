import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  CompanyAdded,
  CompanyDataEdited,
  CompanyEdited,
  CompanyNameEdited,
  CompanyTickerEdited,
  Initialized
} from "../generated/Registries/Registries"

export function createCompanyAddedEvent(
  id: BigInt,
  name: string,
  ticker: string,
  dataHash: string
): CompanyAdded {
  let companyAddedEvent = changetype<CompanyAdded>(newMockEvent())

  companyAddedEvent.parameters = new Array()

  companyAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  companyAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  companyAddedEvent.parameters.push(
    new ethereum.EventParam("ticker", ethereum.Value.fromString(ticker))
  )
  companyAddedEvent.parameters.push(
    new ethereum.EventParam("dataHash", ethereum.Value.fromString(dataHash))
  )

  return companyAddedEvent
}

export function createCompanyDataEditedEvent(
  id: BigInt,
  dataHash: string
): CompanyDataEdited {
  let companyDataEditedEvent = changetype<CompanyDataEdited>(newMockEvent())

  companyDataEditedEvent.parameters = new Array()

  companyDataEditedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  companyDataEditedEvent.parameters.push(
    new ethereum.EventParam("dataHash", ethereum.Value.fromString(dataHash))
  )

  return companyDataEditedEvent
}

export function createCompanyEditedEvent(
  id: BigInt,
  name: string,
  ticker: string,
  dataHash: string
): CompanyEdited {
  let companyEditedEvent = changetype<CompanyEdited>(newMockEvent())

  companyEditedEvent.parameters = new Array()

  companyEditedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  companyEditedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  companyEditedEvent.parameters.push(
    new ethereum.EventParam("ticker", ethereum.Value.fromString(ticker))
  )
  companyEditedEvent.parameters.push(
    new ethereum.EventParam("dataHash", ethereum.Value.fromString(dataHash))
  )

  return companyEditedEvent
}

export function createCompanyNameEditedEvent(
  id: BigInt,
  name: string
): CompanyNameEdited {
  let companyNameEditedEvent = changetype<CompanyNameEdited>(newMockEvent())

  companyNameEditedEvent.parameters = new Array()

  companyNameEditedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  companyNameEditedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return companyNameEditedEvent
}

export function createCompanyTickerEditedEvent(
  id: BigInt,
  ticker: string
): CompanyTickerEdited {
  let companyTickerEditedEvent = changetype<CompanyTickerEdited>(newMockEvent())

  companyTickerEditedEvent.parameters = new Array()

  companyTickerEditedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  companyTickerEditedEvent.parameters.push(
    new ethereum.EventParam("ticker", ethereum.Value.fromString(ticker))
  )

  return companyTickerEditedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}
