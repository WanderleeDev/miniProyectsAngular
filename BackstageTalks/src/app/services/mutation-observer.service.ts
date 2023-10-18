import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MutationObserverService {
  private newObserver = new MutationObserver((mutation) => {
    mutation.forEach((mutation) => console.log('entry' + mutation))
  })

  constructor (
    private elementRef: ElementRef
  ) { }

  public observerTarget ():void {
    const node = this.elementRef.nativeElement

    this.newObserver.observe(node, {
      attributes: true,
      childList: true,
      characterData: true
    })
  }

  public destroyObserver (): void {
    this.newObserver.disconnect()
  }
}
