import BaseRenderer from './BaseRenderer.js';
export default class ClosingTagRenderer extends BaseRenderer {
    constructor() {
        super('Closing');
    }
    build() {
        var _a;
        this.innerHTML = `
      <h4 class="closing">
        ${((_a = this.props) === null || _a === void 0 ? void 0 : _a.text) || 'Default Closing text'}
      </h4>
    `;
        return this;
    }
    attachEvent() {
        return this;
    }
}
