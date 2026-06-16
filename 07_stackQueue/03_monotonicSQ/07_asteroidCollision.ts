// leetcode - 735

const asteroids = [3, 5, -6, 2, -1, 4];

const asteroidCollision = function  (asteroids: number[]): number[] {
    const stack: number[] = [];

    for (let i = 0; i < asteroids.length; i++) {
        const asteroid = Math.abs(asteroids[i]!)
        let survived = true;

        // loop while stack is not empty , top is not an negative element
        // and loop only when there is a negative element
        while (stack.length > 0 && stack[stack.length - 1]! > 0 && asteroids[i]! < 0) {
            const top = stack[stack.length - 1]!;

            if (asteroid === top) {
                stack.pop();      // Both destroyed each other
                survived = false;
                break;
            } else if (asteroid < top) {
                survived = false;  // Asteroid destroyed by top
                break;
            } else {
                stack.pop();  // Top is destroyed, asteroid keeps moving
            }
        }

        // Only push if it did'nt crash and blow up
        if (survived) stack.push(asteroids[i]!);
    }
    
    // Array is being used as a stack. You can use doubly linked list
    // if the stack conversion to array is hard in you language
    return stack;
}
// n - length of asteroids
// For loop - O(n)
// While loop - O(n) - linked to total stack operations (push and pop), and stack
// operation deal with asteroids array 
// Time complexity - O(n) 
//
// Stack - O(n)
// Space complexity - O(n)

console.log(asteroidCollision(asteroids));
