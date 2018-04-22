import {TreeNode} from './tree'

export interface NodeListener<T> {
    nodeDefocused: (node: TreeNode<T>) => void
    nodeFocused: (node: TreeNode<T>) => void
    nodeEdited: (node: TreeNode<T>) => void
    nodeOpened: (node: TreeNode<T>) => void
    nodeClosed: (node: TreeNode<T>) => void
    getName(): string
}
