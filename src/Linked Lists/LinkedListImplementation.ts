export class ListNode<T> {
	val: T;  // The value can be of any type (T)
	next: ListNode<T> | null; //// Either points to the next Node or is null

	constructor(val: T) {
		this.val = val;
		this.next = null;
	}
};

export class SinglyLinkedList<T> {
	head: ListNode<T> | null;
	tail: ListNode<T> | null;
	length: number;
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val: T): this {
		let newNode = new ListNode(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail!.next = newNode;  //Use '!' to assert this.tail is not null
		}
		this.length++;
		return this;
	};

	// traverse() {
	// 	let current = this.head;
	// 	while (current) {
	// 		console.log(current.val);
	// 		current = current.next;
	// 	}
	// };

	pop(): ListNode<T> | undefined{
    if(!this.head) {
			return undefined;
		} else {
			let current = this.head;
			let newTail = current;
			while(current.next) {
				newTail = current;
				current = current.next;
			};

			this.tail = newTail;
			this.tail.next = null; // Severs connection with previous tail
			this.length--;
			if(this.length === 0) {  // Edge case for if list only has one item
				this.head = null;
				this.tail = null;
			}
			return current;
		}
	};

	shift(): ListNode<T> | undefined {
		if(!this.head) return undefined;

		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if(this.length === 0) this.tail = null;
		return currentHead; // Head that was removed
	}

	unshift(val:T): this {
		let newNode = new ListNode(val);
		if(!this.head) { // This code only runs if it's empty
			this.head = newNode;
			this.tail = newNode;
		} else { // This code only runs if there is at least one item in list
			newNode.next = this.head; 
			this.head = newNode;
		}

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	get(index: number): ListNode<T> | null | undefined{
    if(index < 0 || index >= this.length) return null;

		let count = 0;
		let current = this.head;
		while(count !== index) {
		 if(current) { //Ensuring that 'current' is not null
			current = current.next;
			count++;
		 }
		 return current;
		};
	};

	set(index: number, val: T): boolean | null {
		let foundNode = this.get(index);
		if(foundNode) {
			foundNode.val = val;
			return true;
		}
		return false
	};

	insert(index: number, val: T): boolean {
    if(index < 0 || index > this.length) return false;
		if(index === this.length) return !!this.push(val);


		if(index === 0) {
			this.unshift(val);
			return true;
		}

		let newNode = new ListNode(val);
		let prev = this.get(index - 1);

		if(!prev) return false; //If 'get' returns null, insertion is not possible
		let temp = prev?.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	};

	remove(index: number): ListNode<T> | undefined{
		if(index < 0 || index > this.length) return undefined;
		if(index === this.length - 1) this.pop();
		if(index === 0) this.shift();
    
		let prev = this.get(index - 1);
		if (!prev || !prev.next) return undefined; // If prev is null or doesn't have a next node
		let removed = prev?.next;
		prev.next = removed?.next;
		this.length--;
		return removed;
 	}

    print(): void {
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

        /**REVERSE
     * 1. Swap the head and tail
     * 2. Create a variable called next
     * 3. Create a variable called prev
     * 4. Create a variable called node and initialize it to the head property
     * 5. Loop through the list
     * 5. Set next to be the next property on whatever node is
     * 6. Set the node variable to be the value of the 
     */
    reverse() : this {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let prev = null; // Ensure that end of the list is null
      let next; 

      for(let i = 0; i < this.length; i++) {
       next = node?.next; // next is gonna be re-assigned to whatever we're currently looking at
       node.next = prev;
       prev = node; 
       node = next; 
      };
      return this;
    }
};


let list = new SinglyLinkedList();
list.push('IV');
list.push('III');
list.push('II');
list.push('I');
//list.print();

//list.pop();
//list.shift();
//list.unshift('*')
//list.set(3, '!!');
// list.get(0);
//console.log('get', list.get(3));
list.reverse();


console.log(list);