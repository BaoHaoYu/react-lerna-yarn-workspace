import { withTests } from '@storybook/addon-jest'
import { addDecorator, configure } from '@storybook/react'

addDecorator(
  withTests({
    results: require('../.jest-test-results.json'),
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.tsx)?$',
  }) as any
)
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
