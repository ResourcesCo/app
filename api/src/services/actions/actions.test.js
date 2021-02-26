import { actions } from './actions'

describe('actions', () => {
  scenario('returns all actions', async (scenario) => {
    mockCurrentUser({})
    const result = await actions()

    expect(result.length).toEqual(Object.keys(scenario.action).length)
  })
})
