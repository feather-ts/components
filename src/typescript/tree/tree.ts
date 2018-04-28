import {ArrayWidget} from '@feather-ts/feather-ts/dist/decorators/construct'
import {On, Scope} from '@feather-ts/feather-ts/dist/decorators/event'
import {TemplateNode} from '@feather-ts/feather-ts/dist/decorators/template-node'
import {LocalStorage} from '@feather-ts/feather-ts/dist/decorators/local-storage'
import {Template} from '@feather-ts/feather-ts/dist/decorators/template'
import {Computed} from '@feather-ts/feather-ts/dist/decorators/computed'
import {isKey, Key} from '@feather-ts/ui-common/dist/keys'
import {NodeListener} from './tree-listener'

export enum TreeNodeIcon {
    folderOpen = 'fa-folder-open-o',
    folderClosed = 'fa-folder-o',
    openIcon = 'fa-caret-right'
}

export class TreeNode<T> implements ArrayWidget {

    value: T

    parent: TreeNode<T>
    children: TreeNode<T>[]
    nodeListener: NodeListener<T>

    selected = false
    icon: string
    text: string
    editing = false

    @LocalStorage() open = false
    @TemplateNode('input') input: HTMLInputElement

    id = () => `${this.nodeListener.getName()}.${this.text}`

    constructor(parent: TreeNode<T>, children: TreeNode<T>[], nodeListener: NodeListener<T>) {
        this.parent = parent
        this.children = children
        this.nodeListener = nodeListener
    }

    @On({event: 'click', selector: '.node-handle'})
    private nodeHandleClicked() {
        this.open = !this.open
        if (this.open) {
            this.nodeListener.nodeOpened(this)
        } else {
            this.nodeListener.nodeClosed(this)
        }
    }

    public addTreeNodes(...nodes: TreeNode<T>[]) {
        this.children.push(...nodes)
    }

    @On({event: 'click', selector: '.clickable'})
    private selectNode(ev, el) {
        if (!ev.target.matches('i.node-handle')) {
            if (this.selected && el.parentNode !== document.activeElement) {
                this.selected = false
                this.nodeListener.nodeDefocused(this)
            } else {
                this.selected = true
                this.nodeListener.nodeFocused(this)
            }
        }
    }

    @On({event: 'dblclick', selector: '.clickable'})
    private startEditing(ev) {
        if (!ev.target.matches('.icon')) {
            this.focusAndEdit()
        }
    }

    focusAndEdit() {
        this.input.value = this.text
        this.nodeListener.nodeFocused(this)
        this.editing = true
        this.selected = true
        this.input.focus()
        this.input.select()
    }

    @On({event: 'keydown', selector: 'input', scope: Scope.Direct})
    private stopEditing(ev: KeyboardEvent) {
        if (this.editing) {
            if (isKey(ev, Key.ENTER)) {
                this.text = this.input.value
                this.editing = false
                this.nodeListener.nodeEdited(this)
            } else if (isKey(ev, Key.Escape)) {
                this.editing = false
            }
        }
    }

    @On({event: 'blur', selector: 'input', scope: Scope.Direct})
    private cancelEditing(ev: KeyboardEvent) {
        if (this.editing) {
            this.editing = false
        }
    }

    @Template()
    markup() {
        return (`<li class="tree-node">
          <div class="{{selected:selectedClass}} {{openClass}} clickable" {{editing}}>
            <i class="icon fa node-handle {{children:hasChildrenClass}} {{open:openIconClass}}"></i>
            <i class="icon fa node-icon {{iconClass}}"></i>
            <span class="node-text">{{text}}</span>
            <input class="node-editor">
          </div>
          <ul {{children}}></ul>
        </li>`)
    }

    @Computed('icon', 'open')
    iconClass = () => this.children.length === 0 ? this.icon : this.open ? TreeNodeIcon.folderOpen : TreeNodeIcon.folderClosed

    @Computed('open')
    openClass = () =>  this.children.length === 0 ? undefined : this.open ? 'open' : undefined

    hasChildrenClass = (children: TreeNode<T>[]) => children.length > 0 ? TreeNodeIcon.openIcon : undefined
    openIconClass = (open: boolean) => open ? 'down' : undefined
    selectedClass = (selected: boolean) => selected ? 'selected' : undefined

}
