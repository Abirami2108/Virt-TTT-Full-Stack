// How do you find the middle element of a linked list?

class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    return slow;
}


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middle = findMiddle(head);
console.log("Middle Element:", middle?.value); 
