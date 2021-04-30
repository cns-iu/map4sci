import { IControl, Map as MapboxMap } from 'mapbox-gl';


export class ZoomLevelControl implements IControl {
  container?: HTMLElement;
  map?: MapboxMap;
  zoomCallback?: () => void;

  onAdd(map: MapboxMap): HTMLElement {
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = 'mapboxgl-zoom-level-display';
    this.updateText();
    this.zoomCallback = () => this.updateText();
    map.on('zoom', this.zoomCallback);
    return this.container;
  }

  updateText(): void {
    if (this.map && this.container) {
      this.container.textContent = this.map.getZoom().toFixed(2) + 'x';
    }
  }

  onRemove(map: MapboxMap): void {
    // tslint:disable-next-line: no-non-null-assertion
    map.off('zoom', this.zoomCallback!);
    this.container?.parentNode?.removeChild(this.container);
  }
}
