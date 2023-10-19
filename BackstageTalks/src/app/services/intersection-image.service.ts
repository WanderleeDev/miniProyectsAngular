import { Injectable } from '@angular/core';
import { IObserverOptions } from '../interface/IObserverOptions.interface';

@Injectable({
  providedIn: 'root'
})
export class IntersectionImageService {
  private intersectionObserver!: IntersectionObserver;
  optionsObserver: IObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: .7,
  }

  constructor() {
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const color = entry.target.getAttribute('data-color');
          color && (
            document.body.style.backgroundColor = color,
            this.activeRoute(entry.target.getAttribute("data-for")))
          }
      })
    }, this.optionsObserver)
  }

  private updateOptions (newRoot: Element | null):IObserverOptions {
    if (newRoot) {
      this.optionsObserver.root = newRoot;
    }
    
    return this.optionsObserver
  }

  public initIntersection(element: Element, root: Element | null) {
    this.updateOptions(root)
    this.intersectionObserver.observe(element);
  }

  public disconnectIntersection (): void {
    this.intersectionObserver.disconnect();
  }

  public activeRoute (dataElement: string | null) {
    if (!dataElement) {
      throw new Error(`El identificador data-id : ${dataElement} no existe`);
    }

    const routesSlider = document.querySelectorAll('.slideLink')
    routesSlider.forEach(route => {
      route.classList.remove('font-bold');

      !!(dataElement === route.getAttribute("data-id"))
        &&  route.classList.add('font-bold')
    })
  }
}

