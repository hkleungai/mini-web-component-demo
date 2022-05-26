var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _BaseRenderer_isRendererInitialized, _BaseRenderer__props, _BaseRenderer_innerHTML, _BaseRenderer_fragment;
export default class BaseRenderer {
    constructor(name) {
        _BaseRenderer__props.set(this, {});
        _BaseRenderer_innerHTML.set(this, void 0);
        _BaseRenderer_fragment.set(this, void 0);
        if (__classPrivateFieldGet(BaseRenderer, _a, "f", _BaseRenderer_isRendererInitialized)[name]) {
            throw new Error('[ERROR]: Renderer is not supposed to be initialized more than once!');
        }
        __classPrivateFieldGet(BaseRenderer, _a, "f", _BaseRenderer_isRendererInitialized)[name] = true;
    }
    render(props) {
        this.props = props;
        Object.freeze(this.props);
        const component = this.build().makeFragment().attachEvent();
        if (component.props !== props) {
            throw new Error('[ERROR]: `props` is not supposed to be mutated!');
        }
        return component;
    }
    makeFragment() {
        if (!__classPrivateFieldGet(this, _BaseRenderer_innerHTML, "f") || !__classPrivateFieldGet(this, _BaseRenderer_innerHTML, "f").length) {
            throw new Error('[ERROR]: Nullish `_innerHTML` is detected! Please implement `build()` properly.');
        }
        const template = document.createElement('template');
        template.innerHTML = __classPrivateFieldGet(this, _BaseRenderer_innerHTML, "f");
        this.fragment = template.content;
        return this;
    }
    get props() {
        return __classPrivateFieldGet(this, _BaseRenderer__props, "f");
    }
    set props(val) {
        __classPrivateFieldSet(this, _BaseRenderer__props, val, "f");
    }
    get innerHTML() {
        return __classPrivateFieldGet(this, _BaseRenderer_innerHTML, "f");
    }
    set innerHTML(val) {
        if (!val || !val.length) {
            throw new Error('[ERROR]: Nullish `_innerHTML` is detected! Please implement `build()` properly.');
        }
        __classPrivateFieldSet(this, _BaseRenderer_innerHTML, val, "f");
    }
    get fragment() {
        return __classPrivateFieldGet(this, _BaseRenderer_fragment, "f");
    }
    set fragment(val) {
        if (!val || !val.childElementCount) {
            throw new Error('[ERROR]: Empty fragment is detected! Please implement makeFragment() properly.');
        }
        __classPrivateFieldSet(this, _BaseRenderer_fragment, val, "f");
    }
}
_a = BaseRenderer, _BaseRenderer__props = new WeakMap(), _BaseRenderer_innerHTML = new WeakMap(), _BaseRenderer_fragment = new WeakMap();
_BaseRenderer_isRendererInitialized = { value: {} };
