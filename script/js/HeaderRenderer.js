import BaseRenderer from 'https:/hkleungai.github.io/mini-web-component/BaseRenderer.js';
export default class HeaderRenderer extends BaseRenderer {
    constructor() {
        super('Header');
    }
    build() {
        var _a;
        this.innerHTML = `
      <h2 class="header">
        ${((_a = this.props) === null || _a === void 0 ? void 0 : _a.text) || 'Default header text'}
      </h2>
    `;
        return this;
    }
    attachEvent() {
        return this;
    }
}
