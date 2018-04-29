import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
import 'bulma/css/bulma.css'

import {Construct, start, Widget} from '@feather-ts/feather-ts/dist/decorators/construct'
import {render} from '@feather-ts/feather-ts/dist/core/bind'
import {Template} from '@feather-ts/feather-ts/dist/decorators/template'
import './horizontal-split/horizontal-split'
import './scrollpane/scrollpane'
import './start.pcss'
import './common.pcss'

@Construct({selector: 'body'})
export class Showcase implements Widget {

    init = (el: Element) => render(this, el)

    @Template()
    markup() {
        return `
        <div class="application">
            <div class="navbar has-shadow">
                <div class="navbar-brand">
                    <div class="navbar-item">Components</div>
                </div>
            </div>
            <horizontal-split class="full-height">
                <scrollpane><div>bla</div></scrollpane>
                <div>blub</div>
            </horizontal-split>
            <footer></footer>
        </div>
        `
    }
}

start()
