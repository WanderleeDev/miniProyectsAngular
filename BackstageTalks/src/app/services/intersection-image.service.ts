import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionImageService {
  private intersectionObserver!: IntersectionObserver;

  constructor() {
    const options = {
      root: document.querySelector('#slider'),
      rootMargin: "0px",
      threshold: .5,
    }
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const color = entry.target.getAttribute('data-color');
          console.log(color);
          !!color &&
            (document.body.style.backgroundColor = color)
          }
      })
    },options)
  }

  public initIntersection(element: HTMLElement) {
    this.intersectionObserver.observe(element);
  }

  public disconnectIntersection (): void {
    this.intersectionObserver.disconnect();
  }
}
