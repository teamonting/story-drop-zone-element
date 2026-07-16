abstract class DropZoneDropEvent extends Event {
  constructor(type: 'dropzonedrop', eventInitDict?: EventInit | undefined) {
    super(type, eventInitDict);
  }
}

type DropZoneDropFilesEventInit = EventInit & { readonly files: FileList };

class DropZoneDropFilesEvent extends DropZoneDropEvent {
  constructor(type: 'dropzonedrop', init: DropZoneDropFilesEventInit) {
    super(type, init);

    this.#files = init.files;
  }

  #files: FileList;

  get files() {
    return this.#files;
  }
}

type DropZoneDropHTMLEventInit = EventInit & { readonly html: string };

class DropZoneDropHTMLEvent extends DropZoneDropEvent {
  constructor(type: 'dropzonedrop', init: DropZoneDropHTMLEventInit) {
    super(type, init);

    this.#html = init.html;
  }

  #html: string;

  get html() {
    return this.#html;
  }
}

type DropZoneDropURIEventInit = EventInit & { readonly uri: string };

class DropZoneDropURIEvent extends DropZoneDropEvent {
  constructor(type: 'dropzonedrop', init: DropZoneDropURIEventInit) {
    super(type, init);

    this.#uri = init.uri;
  }

  #uri: string;

  get uri() {
    return this.#uri;
  }
}

export { DropZoneDropFilesEvent, DropZoneDropHTMLEvent, DropZoneDropURIEvent };
export type { DropZoneDropFilesEventInit, DropZoneDropHTMLEventInit, DropZoneDropURIEventInit };
