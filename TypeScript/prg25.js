// How do you find the middle element of a linked list?
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
function findMiddle(head) {
    var slow = head;
    var fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
var middle = findMiddle(head);
console.log("Middle Element:", middle === null || middle === void 0 ? void 0 : middle.value);
