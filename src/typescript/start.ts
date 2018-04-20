import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
import 'bulma/css/bulma.css'

import {Construct, start, Widget} from '@feather-ts/feather-ts/dist/decorators/construct'
import {render} from '@feather-ts/feather-ts/dist/core/bind'
import {Template} from '@feather-ts/feather-ts/dist/decorators/template'
import './start.pcss'

@Construct({selector: 'body'})
export class Showcase implements Widget {

    init = (el: Element) => render(this, el)

    @Template()
    markup() {
        return `<span>coming soon</span>`
    }
}

start()
