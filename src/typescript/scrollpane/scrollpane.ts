import {Widget, Construct} from '@feather-ts/feather-ts'
import './scrollpane.pcss'

@Construct({selector: 'scrollpane'})
export class ScrollPane implements Widget {

    init = (el: Element) => {
        const wrapper = document.createElement('div')
        wrapper.classList.add('inner-scroll-pane')
        Array.from(el.childNodes).forEach((c) => wrapper.appendChild(c))
        el.appendChild(wrapper)
    }

}
