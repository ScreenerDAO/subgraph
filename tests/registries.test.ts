import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { CompanyAdded } from "../generated/schema"
import { CompanyAdded as CompanyAddedEvent } from "../generated/Registries/Registries"
import { handleCompanyAdded } from "../src/registries"
import { createCompanyAddedEvent } from "./registries-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let name = "Example string value"
    let ticker = "Example string value"
    let dataHash = "Example string value"
    let newCompanyAddedEvent = createCompanyAddedEvent(
      id,
      name,
      ticker,
      dataHash
    )
    handleCompanyAdded(newCompanyAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CompanyAdded created and stored", () => {
    assert.entityCount("CompanyAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CompanyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "CompanyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ticker",
      "Example string value"
    )
    assert.fieldEquals(
      "CompanyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dataHash",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
