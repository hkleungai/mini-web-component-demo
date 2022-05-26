import BaseRenderer, { BaseProps } from './BaseRenderer';

interface HeaderRendererProps extends BaseProps {
  text?: string;
}

export default class HeaderRenderer extends BaseRenderer<HeaderRendererProps> {
  public constructor() {
    super('Header');
  }

  protected build(): this {
    this.innerHTML = /* html */`
      <h2 class="header">
        ${this.props?.text || 'Default header text'}
      </h2>
    `;
    return this;
  }
  protected attachEvent(): this {
    return this;
  }
}
