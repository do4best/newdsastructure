class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null
    }
}
let a = new TreeNode('a')
let b = new TreeNode('b')
let c = new TreeNode('c')
let d = new TreeNode('d')
let e = new TreeNode('e')
let f = new TreeNode('f')

a.left = b
a.right = c
b.left = e
b.right =d
a.right = c
c.right = f
console.log(a)