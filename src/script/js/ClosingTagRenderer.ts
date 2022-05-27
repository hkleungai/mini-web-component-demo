import BaseRenderer, { BaseProps } from 'https://hkleungai.github.io/mini-web-component/BaseRenderer.js';

interface ClosingRendererProps extends BaseProps {
  text?: string;
}

export default class ClosingTagRenderer extends BaseRenderer<ClosingRendererProps> {
  public constructor() {
    super('Closing');
  }
  protected build(): this {
    this.innerHTML = /* html */`
      <h4 class="closing">
        ${this.props?.text || 'Default Closing text'}
      </h4>
    `;
    return this;
  }
  protected attachEvent(): this {
    return this;
  }
}
