# Algorithm exercises: Binary search

## Introduction

In the previous task, you wrote a linear search algorithm that mimics the behavior of the `indexOf()` method. In this task, you will do the same thing, only by using a different algorithm: binary search.

## Linear search

In a linear search, you go through one item at a time. The larger the array, the more comparisons your program needs to make when looking for the element it needs. In other words, the relationship between the size of the array and the number of operations that the program must perform is linear, since they increase during the blocking phase.

Linear search is very useful and very simple, but imagine an array with a million items. In the worst case, you can search for an element at the end of this long array. Linear search will have to do 999,999 checks before it finally gets to that last element!

Is there a more efficient way?

## More efficient search

Let's look at searching through a large list of items that are already sorted. Dictionaries are a great example of a sorted dataset. We have thousands of words in one dictionary, sorted alphabetically. If you had to look up a word in a dictionary, how would you do it?

If you searched for a word using linear search, you would start on page 1 at “A” and work your way up until you find your result. In practice, however, we never do this.

A more general approach is to open the dictionary somewhere in the middle and figure out whether to continue searching left or right. If we are looking for the word "Golden", and the page we open has the word "Salad", we know that we need to go to the left, because "G" comes before "S".

If we search to the left, we will ignore the right half of the dictionary and split the left half somewhere in the middle. This time we can land at "D", which means we need to look at the right side this time. If we continue, we will eventually find our word or find that it is not in the dictionary at all.

Think about what's going on here. How does this approach compare to linear search? Which will be faster? If the ratio of linear search to array size is linear, then is it the same for our new approach?


## Binary search

The strategy for finding a word in the dictionary, which we talked about above, is really called a binary search. It is called "binary" because every time you open a dictionary and decide to go left or right, you are making a binary choice. This binary choice means that your "search space" is reduced by half with each step. This is a totally different approach from the one-by-one approach that linear search offers us.

If you describe binary search method in pseudocode, it will look like this:

 1. Pick a point in the middle.
 2. Compare what is in the middle with what needs to be found.
 3. If you found what you were looking for - your search is over!
 4. If you did not find what you were looking for, select the left or right half to continue your search.
 5. Apply the same process to the selected half.

Here's an animation that does this in a sorted list:

![binary search animation](readme-assets/binary-search.gif)

*Figure 1*. Searching an ordered dataset using a binary search algorithm


## Hidden complexity

At first glance, writing a binary search algorithm may seem like a simple task, but very often you can find errors in its algorithm. In his book Programming Pearls, John Bentley wrote that in two hours, 90% of professional programmers were unable to write a correct binary search implementation. True, they wrote in C and were not allowed to test their code. Donald Knuth wrote in The Art of Programming that although the first binary search was published in 1946, the first error-free search was not published until 1962. Using a TDD approach to development can help you avoid mistakes in your algorithm. When you do detail oriented work, it is imperative to be methodical and consistent in your approach.


## Limitations

Your solution must be recursive. Binary search is a classic recursive algorithm and offers good practice.

You also need to accomplish this task without relying on JS's built-in `map/reduce/flter` array methods.

### Release 0. Implementing Binary Search

Now let's implement our binary search method `binarySearch`. This method should search for an element in the array and return its index or `-1` if the element is not found in the array.

For example, if you are looking for G in the array [A, B, C, D, E, F, G, H], your method should return 6. If you are looking for X, it should return -1. Your method may assume that any given array is already sorted.

Don't dive right into the implementation though - do some pre-planning and pseudo-coding.

Remember the original plan:

 1. Pick a point in the middle.
 2. Compare what is in the middle with what needs to be found.
 3. If you found what you were looking for - your search is over!
 4. If you did not find what you were looking for, select the left or right half to continue your search.
 5. Apply the same process to the selected half.

Of course, it is not enough to find an element, since you need to figure out how to return the index of that element. Take it step by step.

#### Testing is important

No tests have been written for this exercise. You will need to write them yourself in order to determine if your method works as expected. You can try to minimize the chances of introducing bugs in your binary search algorithm by using a test-driven approach. You can start simple and gradually increase the complexity. Does your method work when the array you are looking for is empty? What if the array has one element, two elements, etc.? Are there other edge cases that you need to check?

### Release 1. Refactoring

Before completing this task, re-read your code again to see if you can improve it in any way. Are you following the JavaScript Style Guide (eg spacing and indentation)? Could your variable names be more meaningful? Are there any problems in the code that you can fix? For example, are there any other functions that you could take out from the binarySearch `binarySearch` method? 

Having a solid set of tests will go a long way in refactoring. You need to refactor only when your tests are working as expected. As long as you're refactoring, your tests should be fine. Also, thanks to tests, you can find out when your refactoring will break the valid code.

## Conclusion

Similar to linear search, binary search is another general search algorithm and one that we should be familiar with. Assuming we are looking for an ordered dataset, binary search will be more efficient than linear search, especially as the dataset grows in size.
