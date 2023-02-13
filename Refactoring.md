# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Default value for the event argument: By providing a default value of {} to the event argument, I eliminated the need to check if event is undefined and made the code more concise.

Simplification of the partition key calculation: By creating a variable partitionKey to store the partition key, I reduced the amount of indentation and made the code easier to follow. The calculation of the partition key was also simplified by eliminating redundant checks and combining multiple lines of code into one.

Consistency in the data type of partition key: By making sure that the partition key is always a string, I eliminated the need to check its data type at different stages of the code, making the code more predictable and easier to understand.