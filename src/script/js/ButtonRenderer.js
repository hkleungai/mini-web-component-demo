import BaseRenderer from 'https:/hkleungai.github.io/mini-web-component/BaseRenderer.js';
export default class ButtonRenderer extends BaseRenderer {
    constructor() {
        super('Button');
    }
    build() {
        var _a;
        this.innerHTML = `
      <button type="button" style="cursor: pointer;">
        ${((_a = this.props) === null || _a === void 0 ? void 0 : _a.text) || 'For sure we can have default button text'}
      </button>
    `;
        return this;
    }
    attachEvent() {
        const buttonElement = this.fragment.querySelector('button');
        if (!buttonElement || !(buttonElement instanceof HTMLButtonElement)) {
            throw new Error('[ERROR]: No buttons can be found!');
        }
        const { onClickText = "For sure we can have default onClick text" } = this.props;
        buttonElement.onclick = () => alert(onClickText);
        return this;
    }
}
