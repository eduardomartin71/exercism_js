class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prior = null;
  }
}

class DLinkedList{
  #first = null;
  #last = null;
  #numberOfElements = 0;
  
  constructor(head = null){
    this.head = head;
  }
  
  count(){
    if(this.head == null) return 0;
    let nodo = new Node();
    let counter = 0;
    nodo = this.head;
    while (nodo.next != null){
      counter +=1;
      nodo = nodo.next;
    }
    //since the last node is not counted.... +1 then.
    return counter + 1 ;
    
  }
  
  showList(){
    let nodo = new Node();
    let counter = 1;
    nodo = this.head;
    let lista = "[head";
    if (this.head == null){
      lista += ":null]->[null]";
    }else {
      while (nodo.next != null){
        lista += ":" + nodo.data + "]->[" + counter;
        nodo = nodo.next;
        counter += 1;
      }
      //close the lista
      lista += ":" + nodo.data + "]->[null]";
    }
    return lista;
    
  }
  
  pop(){
    let nodo = new Node();
    //check if there are any nodes
    if (this.head != null){
     if (this.head.data && this.head.sig == null){
       this.head.value=null;
     }else{
      nodo = this.head;
      //go to last node
      while (nodo.next != null){
        nodo=nodo.next;
      }
      //remove last node
      nodo = node.prior;
      nodo.next = null;
     }
    }
  
  }
  
  push(element){
    let nodo = new Node(element);
    let nod2 = new Node();
    if(this.head == null){
      this.head = nodo;
    }else{
      nod2 = this.head;
      while (nod2.next != null){
        nod2=nod2.next;
      }
      nod2.next = nodo;
    
    }
    
  }
  
  shift(element){
    const nodo = new Node(element);
    nodo.next = this.head;
    nodo.prior = null;
    this.head = nodo
  }
  
  unShift(){
    if (this.head){
      this.head = this.head.next;
      this.head.prior = null;
    }
  }
  
  delete(value){
    if (this.head){
      while (nodo.next != null){
        if (nodo.data == value){
          //check if we are in the last node
          if(nodo.next == null){
            this.pop();
          }else{
            const nodPrior = nodo.prior;
            nodo = nodo.next
            nodPrior.next = nodo;
            nodo.prior = nodPrior
          }
          
        }
      }
    }
  }
  
}


const list = new DLinkedList();

console.log(list.count());
console.log(list.showList());
list.push(1);
console.log(list.count());
console.log(list.showList());

list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.count());
console.log(list.showList())
list.unShift();
console.log(list.count());
console.log(list.showList());
list.shift(1);
console.log(list.count());
console.log(list.showList());






