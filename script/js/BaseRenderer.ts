// Placeholder for anything I want to add later, e.g. id, children, etc
export interface BaseProps {
}

export default abstract class BaseRenderer<Props extends BaseProps> {
  /* INTERFACE */
  protected abstract build(): this;
  protected abstract attachEvent(): this;

  /* DEFAULT IMPLEMENTATION */
  static #isRendererInitialized: { [name: string]: boolean } = {};
  protected constructor(name: string) {
    if (BaseRenderer.#isRendererInitialized[name]) {
      throw new Error('[ERROR]: Renderer is not supposed to be initialized more than once!');
    }
    BaseRenderer.#isRendererInitialized[name] = true;
  }

  public render(props: Props): this {
    this.props = props;
    Object.freeze(this.props);
    const component = this.build().makeFragment().attachEvent();
    if (component.props !== props) {
      throw new Error('[ERROR]: `props` is not supposed to be mutated!');
    }
    return component;
  }
  // Default approach to obtain Document Fragment by innerHTML
  protected makeFragment() {
    if (!this.#innerHTML || !this.#innerHTML.length) {
      throw new Error('[ERROR]: Nullish `_innerHTML` is detected! Please implement `build()` properly.');
    }
    const template = document.createElement('template');
    template.innerHTML = this.#innerHTML;
    this.fragment = template.content;
    return this;
  }

  #_props: Props = {} as Props;
  protected get props() {
    return this.#_props;
  }
  private set props(val: Props) {
    this.#_props = val;
  }

  #innerHTML: string;
  public get innerHTML(): string {
    return this.#innerHTML;
  }
  protected set innerHTML(val: string) {
    if (!val || !val.length) {
      throw new Error('[ERROR]: Nullish `_innerHTML` is detected! Please implement `build()` properly.');
    }
    this.#innerHTML = val;
  }

  #fragment: DocumentFragment;
  public get fragment(): DocumentFragment {
    return this.#fragment;
  }
  protected set fragment(val: DocumentFragment) {
    if (!val || !val.childElementCount) {
      throw new Error('[ERROR]: Empty fragment is detected! Please implement makeFragment() properly.')
    }
    this.#fragment = val;
  }
}
