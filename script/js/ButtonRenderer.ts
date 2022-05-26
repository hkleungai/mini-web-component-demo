import BaseRenderer, { BaseProps } from './BaseRenderer';

interface ButtonRendererProps extends BaseProps {
  text?: string;
  onClickText?: string;
}

export default class ButtonRenderer extends BaseRenderer<ButtonRendererProps> {
  public constructor() {
    super('Button');
  }

  protected build(): this {
    this.innerHTML = /* html */`
      <button type="button" style="cursor: pointer;">
        ${this.props?.text || 'For sure we can have default button text'}
      </button>
    `;
    return this;
  }

  protected attachEvent(): this {
    const buttonElement = this.fragment.querySelector('button');
    if (!buttonElement || !(buttonElement instanceof HTMLButtonElement)) {
      throw new Error('[ERROR]: No buttons can be found!');
    }
    const { onClickText = "For sure we can have default onClick text" } = this.props;
    buttonElement.onclick = () => alert(onClickText);
    return this;
  }
}
