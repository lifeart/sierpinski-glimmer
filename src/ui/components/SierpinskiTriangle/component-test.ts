import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: SierpinskiTriangle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<SierpinskiTriangle />`);
    assert.ok(this.containerElement.querySelector('div'));
  });
});
