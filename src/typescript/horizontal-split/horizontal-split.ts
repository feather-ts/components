import {Widget} from '@feather-ts/feather-ts/dist/decorators/construct'
import {Construct, LocalStorage} from '@feather-ts/feather-ts'
import './horizontal-split.pcss'
import {PanX, Phase} from '@feather-ts/ui-common'
import {PanXEventInit} from '@feather-ts/ui-common/dist/pan-x'

@Construct({selector: 'horizontal-split'})
export class HorizontalSplit implements Widget {

    firstElement: HTMLElement
    @LocalStorage() width = 200

    init = (el: Element) => {
        this.firstElement = el.firstElementChild as HTMLElement
        const dragger = document.createElement('div')
        dragger.classList.add('handle')
        this.firstElement.insertAdjacentElement('afterend', dragger)
        this.applyWidth()
    }

    @PanX()
    onDrag(ev) {
        const {phase, x} = {...ev.detail as PanXEventInit}
        if (phase === Phase.move) {
            this.width = x
            this.applyWidth()
        }
    }

    applyWidth() {
        this.firstElement.style.width = `${this.width}px`
    }
}
