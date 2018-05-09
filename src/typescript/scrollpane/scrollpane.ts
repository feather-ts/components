import {Widget, Construct, render, Template, getTemplate, AfterMount} from '@feather-ts/feather-ts'
import './scrollpane.pcss'
import {ElementQuery} from '@feather-ts/feather-ts'
import {registerCleanUp} from '@feather-ts/feather-ts/dist/core/cleanup'
import {On, Scope} from '@feather-ts/feather-ts/dist/decorators/event'

@Construct({selector: 'scrollpane'})
export class ScrollPane implements Widget {

    element: HTMLElement

    init = (el: HTMLElement) => {
        this.element = el
        const wrapper = document.createElement('div')
        wrapper.classList.add('inner-scroll-pane')
        Array.from(el.childNodes).forEach((c) => wrapper.appendChild(c))
        el.appendChild(wrapper)
        const template = getTemplate(this)
        el.appendChild(template.doc)
        const calculateThumb = this.calculateThumb.bind(this)
        const passive = {passive: true}
        window.addEventListener('resize', calculateThumb, passive)
        wrapper.addEventListener('scroll', calculateThumb, passive)
        registerCleanUp(el, () => {
            window.removeEventListener('resize', calculateThumb)
            wrapper.removeEventListener('scroll', calculateThumb)
        })
        const observer = new MutationObserver((mr: MutationRecord[]) => this.calculateThumb())
        observer.observe(wrapper, {childList: true, subtree: true})
    }

    @AfterMount()
    calculateThumb() {
        const el = this.element
        const inner = el.firstElementChild
        const thumbHeight = (inner.clientHeight/ inner.scrollHeight * 100)
        const thumbTop = inner.scrollTop * (inner.clientHeight / inner.scrollHeight)
        el.style.setProperty('--thumb-top', `${thumbTop.toFixed(2)}px`)
        el.style.setProperty('--thumb-height', `${thumbHeight.toFixed(2)}%`)
    }

    @Template()
    scrollTrack() {
        return `<div class="track"><div class="thumb"></div></div>`
    }
}
