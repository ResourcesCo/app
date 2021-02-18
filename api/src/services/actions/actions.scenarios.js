export const standard = defineScenario({
  action: {
    one: {
      name: 'String',
      path: 'String',
      type: 'String',
      body: 'String',
      metadata: { foo: 'bar' },
      computed: { foo: 'bar' },
      user: { create: { name: 'String', email: 'String4409120', bot: false } },
      page: {
        create: {
          name: 'String',
          path: 'String401450',
          body: 'String',
          metadata: { foo: 'bar' },
          computed: { foo: 'bar' },
        },
      },
    },

    two: {
      name: 'String',
      path: 'String',
      type: 'String',
      body: 'String',
      metadata: { foo: 'bar' },
      computed: { foo: 'bar' },
      user: { create: { name: 'String', email: 'String640660', bot: false } },
      page: {
        create: {
          name: 'String',
          path: 'String292288',
          body: 'String',
          metadata: { foo: 'bar' },
          computed: { foo: 'bar' },
        },
      },
    },
  },
})
