import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
import 'bulma/css/bulma.css'

import {Construct, render, start, Template, Widget} from '@feather-ts/feather-ts'
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
            <div class="navbar">
                <div class="navbar-brand">
                    <div class="navbar-item">Components</div>
                </div>
            </div>
            <scrollpane>
                <horizontal-split class="full-height">
                    <div>
                        Canidae<br>Felidae<br>Cat<br>Cattle<br>Dog<br>Donkey<br>Goat<br>Guineapig<br>Horse<br>Pig<br>Rabbit<br>
                        Fancyratvarieties<br>laboratoryratstrains<br>Sheepbreeds<br>Waterbuffalobreeds<br>Chickenbreeds<br>
                        Duckbreeds<br>Goosebreeds<br>Pigeonbreeds<br>Turkeybreeds<br>Aardvark<br>Aardwolf<br>Africanbuffalo<br>
                        Africanelephant<br>Africanleopard<br>Albatross<br>Alligator<br>Alpaca<br>Americanbuffalo(bison)<br>
                        Americanrobin<br>Amphibian<br>list<br>Anaconda<br>Angelfish<br>Anglerfish<br>Ant<br>Anteater<br>Antelope<br>
                        Antlion<br>Ape<br>Aphid<br>Arabianleopard<br>ArcticFox<br>ArcticWolf<br>Armadillo<br>Arrowcrab<br>
                        Asp<br>Ass(donkey)<br>Baboon<br>Badger<br>Baldeagle<br>Bandicoot<br>Barnacle<br>Barracuda<br>Basilisk<br>
                        Bass<br>Bat<br>Beakedwhale<br>Bear<br>list<br>Beaver<br>Bedbug<br>Bee<br>Beetle<br>Bird<br>list<br>Bison<br>
                        Blackbird<br>Blackpanther<br>Blackwidowspider<br>Bluebird<br>Bluejay<br>Bluewhale<br>Boa<br>Boar<br>Bobcat<br>
                        Bobolink<br>Bonobo<br>Booby<br>Boxjellyfish<br>Bovid<br>Buffalo,African<br>Buffalo,American(bison)<br>
                        Bug<br>Butterfly<br>Buzzard<br>Camel<br>Canid<br>Capebuffalo<br>Capybara<br>Cardinal<br>Caribou<br>Carp<br>
                        Cat<br>list<br>Catshark<br>Caterpillar<br>Catfish<br>Cattle<br>list<br>Centipede<br>Cephalopod<br>
                        Chameleon<br>Cheetah<br>Chickadee<br>Chicken<br>list<br>Chimpanzee<br>Chinchilla<br>Chipmunk<br>Clam<br>
                        Clownfish<br>Cobra<br>Cockroach<br>Cod<br>Condor<br>Constrictor<br>Coral<br>Cougar<br>Cow<br>Coyote<br>
                        Crab<br>Crane<br>Cranefly<br>Crawdad<br>Crayfish<br>Cricket<br>Crocodile<br>Crow<br>Cuckoo<br>Cicada<br>
                        Damselfly<br>Deer<br>Dingo<br>Dinosaur<br>list<br>Dog<br>list<br>Dolphin<br>Donkey<br>list<br>Dormouse<br>
                        Dove<br>Dragonfly<br>Dragon<br>Duck<br>list<br>Dungbeetle<br>Eagle<br>Earthworm<br>Earwig<br>Echidna<br>
                        Eel<br>Egret<br>Elephant<br>Elephantseal<br>Elk<br>Emu<br>Englishpointer<br>Ermine<br>Falcon<br>Ferret<br>
                        Finch<br>Firefly<br>Fish<br>Flamingo<br>
                    </div>
                    <div>
                        Canidae<br>Felidae<br>Cat<br>Cattle<br>Dog<br>Donkey<br>Goat<br>Guineapig<br>Horse<br>Pig<br>Rabbit<br>
                        Fancyratvarieties<br>laboratoryratstrains<br>Sheepbreeds<br>Waterbuffalobreeds<br>Chickenbreeds<br>
                        Duckbreeds<br>Goosebreeds<br>Pigeonbreeds<br>Turkeybreeds<br>Aardvark<br>Aardwolf<br>Africanbuffalo<br>
                        Africanelephant<br>Africanleopard<br>Albatross<br>Alligator<br>Alpaca<br>Americanbuffalo(bison)<br>
                        Americanrobin<br>Amphibian<br>list<br>Anaconda<br>Angelfish<br>Anglerfish<br>Ant<br>Anteater<br>Antelope<br>
                        Antlion<br>Ape<br>Aphid<br>Arabianleopard<br>ArcticFox<br>ArcticWolf<br>Armadillo<br>Arrowcrab<br>
                        Asp<br>Ass(donkey)<br>Baboon<br>Badger<br>Baldeagle<br>Bandicoot<br>Barnacle<br>Barracuda<br>Basilisk<br>
                        Bass<br>Bat<br>Beakedwhale<br>Bear<br>list<br>Beaver<br>Bedbug<br>Bee<br>Beetle<br>Bird<br>list<br>Bison<br>
                        Blackbird<br>Blackpanther<br>Blackwidowspider<br>Bluebird<br>Bluejay<br>Bluewhale<br>Boa<br>Boar<br>Bobcat<br>
                        Bobolink<br>Bonobo<br>Booby<br>Boxjellyfish<br>Bovid<br>Buffalo,African<br>Buffalo,American(bison)<br>
                        Bug<br>Butterfly<br>Buzzard<br>Camel<br>Canid<br>Capebuffalo<br>Capybara<br>Cardinal<br>Caribou<br>Carp<br>
                        Cat<br>list<br>Catshark<br>Caterpillar<br>Catfish<br>Cattle<br>list<br>Centipede<br>Cephalopod<br>
                        Chameleon<br>Cheetah<br>Chickadee<br>Chicken<br>list<br>Chimpanzee<br>Chinchilla<br>Chipmunk<br>Clam<br>
                        Clownfish<br>Cobra<br>Cockroach<br>Cod<br>Condor<br>Constrictor<br>Coral<br>Cougar<br>Cow<br>Coyote<br>
                        Crab<br>Crane<br>Cranefly<br>Crawdad<br>Crayfish<br>Cricket<br>Crocodile<br>Crow<br>Cuckoo<br>Cicada<br>
                        Damselfly<br>Deer<br>Dingo<br>Dinosaur<br>list<br>Dog<br>list<br>Dolphin<br>Donkey<br>list<br>Dormouse<br>
                        Dove<br>Dragonfly<br>Dragon<br>Duck<br>list<br>Dungbeetle<br>Eagle<br>Earthworm<br>Earwig<br>Echidna<br>
                        Eel<br>Egret<br>Elephant<br>Elephantseal<br>Elk<br>Emu<br>Englishpointer<br>Ermine<br>Falcon<br>Ferret<br>
                        Finch<br>Firefly<br>Fish<br>Flamingo<br>
                    </div>
                </horizontal-split>
            </scrollpane>
            <footer></footer>
        </div>
        `
    }
}

start()
