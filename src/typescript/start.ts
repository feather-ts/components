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
                        Canidae Felidae Cat Cattle Dog Donkey Goat Guineapig Horse Pig Rabbit
                        Fancyratvarieties laboratoryratstrains Sheepbreeds Waterbuffalobreeds Chickenbreeds
                        Duckbreeds Goosebreeds Pigeonbreeds Turkeybreeds Aardvark Aardwolf Africanbuffalo
                        Africanelephant Africanleopard Albatross Alligator Alpaca Americanbuffalo(bison)
                        Americanrobin Amphibian list Anaconda Angelfish Anglerfish Ant Anteater Antelope
                        Antlion Ape Aphid Arabianleopard ArcticFox ArcticWolf Armadillo Arrowcrab
                        Asp Ass(donkey) Baboon Badger Baldeagle Bandicoot arnacle Barracuda Basilisk
                        Bass Bat Beakedwhale Bear list Beaver Bedbug Bee Beetle Bird list Bison
                        Blackbird Blackpanther Blackwidowspider Bluebird Bluejay Bluewhale Boa Boar Bobcat
                        Bobolink Bonobo Booby Boxjellyfish Bovid Buffalo,African Buffalo,American(bison)
                        Bug Butterfly Buzzard Camel Canid Capebuffalo Capybara Cardinal Caribou Carp
                        Cat list Catshark Caterpillar Catfish Cattle list Centipede Cephalopod
                        Chameleon Cheetah Chickadee Chicken list Chimpanzee Chinchilla Chipmunk Clam
                        Clownfish Cobra Cockroach Cod Condor Constrictor Coral Cougar Cow Coyote
                        Crab Crane Cranefly Crawdad Crayfish Cricket Crocodile Crow Cuckoo Cicada
                        Damselfly Deer Dingo Dinosaur list Dog list Dolphin Donkey list Dormouse
                        Dove Dragonfly Dragon Duck list Dungbeetle Eagle Earthworm Earwig Echidna
                        Eel Egret Elephant Elephantseal Elk Emu Englishpointer Ermine Falcon Ferret
                        Finch Firefly Fish Flamingo
                    </div>
                    <div>
                        Canidae Felidae Cat Cattle Dog Donkey Goat Guineapig Horse Pig Rabbit
                        Fancyratvarieties laboratoryratstrains Sheepbreeds Waterbuffalobreeds Chickenbreeds
                        Duckbreeds Goosebreeds Pigeonbreeds Turkeybreeds Aardvark Aardwolf Africanbuffalo
                        Africanelephant Africanleopard Albatross Alligator Alpaca Americanbuffalo(bison)
                        Americanrobin Amphibian list Anaconda Angelfish Anglerfish Ant Anteater Antelope
                        Antlion Ape Aphid Arabianleopard ArcticFox ArcticWolf Armadillo Arrowcrab
                        Asp Ass(donkey) Baboon Badger Baldeagle Bandicoot Barnacle Barracuda Basilisk
                        Bass Bat Beakedwhale Bear list Beaver Bedbug Bee Beetle Bird list Bison
                        Blackbird Blackpanther Blackwidowspider Bluebird Bluejay Bluewhale Boa Boar Bobcat
                        Bobolink Bonobo Booby Boxjellyfish Bovid Buffalo,African Buffalo,American(bison)
                        Bug Butterfly Buzzard Camel Canid Capebuffalo Capybara Cardinal Caribou Carp
                        Cat list Catshark Caterpillar Catfish Cattle list Centipede Cephalopod
                        Chameleon Cheetah Chickadee Chicken list Chimpanzee Chinchilla Chipmunk Clam
                        Clownfish Cobra Cockroach Cod Condor Constrictor Coral Cougar Cow Coyote
                        Crab Crane Cranefly Crawdad Crayfish Cricket Crocodile Crow Cuckoo Cicada
                        Damselfly Deer Dingo Dinosaur list Dog list Dolphin Donkey list Dormouse
                        Dove Dragonfly Dragon Duck list Dungbeetle Eagle Earthworm Earwig Echidna
                        Eel Egret Elephant Elephantseal Elk Emu Englishpointer Ermine Falcon Ferret
                        Finch Firefly Fish Flamingo
                    </div>
                </horizontal-split>
            </scrollpane>
            <footer></footer>
        </div>
        `
    }
}

start()
