import { DropZoneDropFilesEvent, DropZoneDropHTMLEvent, DropZoneDropURIEvent } from '../event';

class DropZoneElement extends HTMLElement {
  #shadowRoot: ShadowRoot;

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const element = document.createElement('div');

    element.style.border = 'solid 1px black';
    element.style.height = '100px';
    element.style.width = '100px';

    element.addEventListener('dragover', this.#handleDragOver);
    element.addEventListener('drop', this.#handleDrop);

    this.#shadowRoot.append(element);

    this.#dropZoneElement = element;
  }

  disconnectedCallback() {
    const element = this.#dropZoneElement;

    if (element) {
      element.removeEventListener('dragover', this.#handleDragOver);
      element.removeEventListener('drop', this.#handleDrop);

      element.remove();
    }
  }

  #dropZoneElement: HTMLElement | undefined;

  #handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  #handleDrop = (event: DragEvent): void => {
    event.preventDefault();

    const { dataTransfer } = event;

    if (!dataTransfer) {
      return;
    }

    if (dataTransfer.files.length) {
      this.dispatchEvent(new DropZoneDropFilesEvent('dropzonedrop', { files: dataTransfer.files }));

      return;
    }

    const uri = dataTransfer.getData('text/uri-list');

    if (uri) {
      this.dispatchEvent(new DropZoneDropURIEvent('dropzonedrop', { uri }));

      return;
    }

    const html = dataTransfer.getData('text/html');

    if (html) {
      this.dispatchEvent(new DropZoneDropHTMLEvent('dropzonedrop', { html }));

      return;
    }
  };
}

export default DropZoneElement;
