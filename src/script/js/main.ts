import HeaderRender from './HeaderRenderer';
import ClosingTagRenderer from './ClosingTagRenderer';
import ButtonRenderer from './ButtonRenderer';

main();

function main(): void {
  try {
    _main();
  }
  catch (error: unknown) {
    alert((error as Error).message);
    throw error;
  }
}

function _main(): void {
  const mainDiv = document.querySelector('div.main');
  if (!mainDiv) {
    throw new Error('No closing div can be found!!');
  }

  const headerRenderer = new HeaderRender();
  const closingTagRenderer = new ClosingTagRenderer();
  const buttonTagRenderer = new ButtonRenderer();
  reInitializeRenderer();

  const fragments = [
    headerRenderer.render({ text: 'Cool Component Demo 🤤' }).fragment,
    buttonTagRenderer.render({ text: 'A button', onClickText: 'Custom Text emitted upon onClick' }).fragment,
    buttonTagRenderer.render({ text: 'Another button', onClickText: 'Works well when render is triggered multiple times' }).fragment,
    buttonTagRenderer.render({}).fragment,
    closingTagRenderer.render({ text: 'To Be Continued...' }).fragment
  ];
  fragments.forEach(fragment => mainDiv.appendChild(fragment));
}

function reInitializeRenderer() {
  try {
    const anotherHeaderRenderer = new HeaderRender();
  }
  catch (error) {
    console.error('Re-initializing Renderer is not the right way to do things');
  }
}
