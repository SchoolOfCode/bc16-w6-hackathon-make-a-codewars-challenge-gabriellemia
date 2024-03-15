# Week 6 Hackathon - Build a Codewars Kata

## Planning

💡 Ideation

- Problem should be based around a story to capture user and make it easier to visualise the problem that needs to be solved.
- Look at different algorithms in programming and how each one works, what it does.

  - Sort (merge, bubble, quick, insertion...)
  - Search (linear, binary...)
  - Divide and Conquer
  - Hashing
  - Recursive

- Look at different katas in codewars and think about previous problems you have solved to get an idea of the type of problem you can create, and what you are capable of achieving in a few hours including tests.
- Search or sort may be easiest to facilitate and create tests for. Considering the time constraints and difficulty in many of these algorithms. Go with easier option and can expand if there is time.
- Could also do a sort - sorting an array of things into a particular order. Is this too easy? How can you add complexity? Could perhaps sort by last letter of each string, or maybe even for example third letter of every string etc.
- Could do a number sort - Think of ways to make this difficult.
- Search could be interesting - could have a list of things that you need to search through to find something in particular.
- Like the idea around pizza and making one using an array of ingredients perhaps.
- Search for pizza ingredients to make a specific pizza?
- Got to be hawaiian after todays mindset session, also pineapple on pizza is the best!
- Given an array of ingredients, how many hawaiian pizzas can you make? Specify amount of each ingredient needed to make a whole pizza.
- Get the dog involved if there is time! Throw a spanner in the works to make it slightly more difficult but not too much so, plant a little red herring.

## MVP

MVP 1

- Given input of different ingredients, how many Hawaiian pizzas can you make?
- Start simple with 3 ingredients
- To make one Hawaiian pizza you need 1 x dough, 1 x pineapple and 1 x ham
- Tests must check for certain amount of each ingredient and return how many whole pizzas can be made, eg. 2 x dough, 2 x pineapple, 2 x ham should return 2.

MVP 2

- Given input of different ingredients, how many Hawaiian pizzas can you make?
- Increase amount of ingredients needed to make one pizza.
- To make one Hawaiian pizza you need 1 x dough, 2 x pineapple and 2 x ham
- Tests must check for certain amount of each ingredient and return how many whole pizzas can be made, eg. 2 x dough, 4 x pineapple, 4 x ham should return 2.
- Check that extra ingredients return correct amount too if there are not enough to make a whole pizza, eg. 2 x dough, 6 x ham, 10 x pineapple will still only make 2 whole pizzas.
- Test for non-Hawaiian pizza ingredients - like mushrooms, pepperoni etc.

MVP 3

- Given input of different ingredients, how many Hawaiian pizzas can you make?
- To make one Hawaiian pizza you need 1 x dough, 2 x pineapple and 2 x ham
- Tests must check for certain amount of each ingredient and return how many whole pizzas can be made, eg. 3 x dough, 6 x pineapple, 6 x ham should return 2.
- Test for non-Hawaiian pizza ingredients - like mushrooms, pepperoni etc.
- Test for empty array.
- This time dog eats one part ham for every pizza made.
- Take into account the extra ham needed now to create one pizza.

MVP 4

- Same as above but if it's too easy to work out...
- Add an extra layer of complexity by throwing in another ingredient.
- This time flour can be used to make a pizza too.
- Each flour can make 2 x dough
- Test for flour expected output to equal 2 x dough.

## Edge cases

- Non-hawaiian ingredients not taken into account.
- Mix non-ingredients with the hawaiian ones in same test.
- Extra ingredients still return correct amount of whole pizzas that can be made.
- Test for if dog eats all the ham.
- Test for empty array.

## Remember

- Create tests first, they will fail as there is no code yet.
- Create the code to make the tests pass.
- Refactor without breaking code.

- Do not reveal the solution code in the plan! Ensure you delete before publishing!

## Reflections

- Difficulty in coming up with an idea at first as had a bit of analysis paralysis! So many options and directions this project could have taken, it was difficult to come to a set decision. The good thing here though is that we can keep creating these katas, it doesn't have to stop at the hackathon!

- So important to plan what I wanted out of the kata first, what do I want the challenger to be able to do. What story do I want to tell. How can I make it easier for the challenger to approach the kata and understand how to solve it. It would have been impossible to write the tests first without a solid plan and expected outcomes.

- I felt like I had made it too easy at first so I came back to my original plan to see if I could add a little more difficulty, not too much but something to make the challenger think a little more. I think I have managed this in the different versions of my MVP's. I added MVP 4 towards the end as I still felt it needed something extra.

- Even though this week's task was individual, our team still put in the time to help eachother. We checked in often and reviewed eachothers code. Helped to see errors that you can't always see in your own code, but takes a different perspective. Enjoyed hearing their different ideas too.

- I really enjoyed this hackathon! Though it's always a blast working with the team to create something, I feel like this week has made a nice change to see what we can come up with working on our own. A chance to see if we are capable of producing something without the reliance of others to push you through. I mean I could still fail completely from here (I don't think I have, the tests work!) but at least I know I tried and had a lot of fun doing it! Looking forward to sharing my kata with others and see what they come up with, and also seeing what everyone else has.
