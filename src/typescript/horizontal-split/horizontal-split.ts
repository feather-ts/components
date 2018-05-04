import {Construct, LocalStorage, Widget} from '@feather-ts/feather-ts'
import {PanX, PanXEventInit, Phase} from '@feather-ts/ui-common'
import './horizontal-split.pcss'

@Construct({selector: 'horizontal-split'})
export class HorizontalSplit implements Widget {

    element: HTMLElement
    firstElement: HTMLElement
    dragging = false
    @LocalStorage() width = 200

    init(el: HTMLElement) {
        this.element = el
        this.firstElement = el.firstElementChild as HTMLElement
        const dragger = document.createElement('div')
        dragger.classList.add('handle')
        this.firstElement.insertAdjacentElement('afterend', dragger)
        this.applyWidth()
        console.log('init split')
    }

    @PanX()
    onDrag(ev: CustomEvent<PanXEventInit>) {
        const {phase, x, target} = {...ev.detail}
        if (phase === Phase.start && (target as HTMLElement).matches('.handle')) {
            this.dragging = true
        }
        else if (this.dragging && phase === Phase.move) {
            this.width = x
            this.applyWidth()
        }
        else {
            this.dragging = false
        }
    }

    applyWidth() {
        this.firstElement.style.width = `${this.width}px`
    }
}
