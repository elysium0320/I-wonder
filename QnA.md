# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?

* Time and scope. Being this is an MVP we need to balance the deadline with performance. Step 1: Get the search operational. Optimize after that.

> What changes/additions would you make to the design?

* I'm a sucker for minimalist design. Really feeling the black and white. Perhaps some color on the labels to emphasize priority. Could get cute with some drop shadows on the issue boxes.

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

* Autocomplete on the search. Once we have the org, listing the most popular or most recent repos would make for a better UX.
* Sort issues by priority. Or allow the the user the ability to sort based on priority or chronological order.

---

### Looking Back

> Describe the major design/build decisions and why you made them.

* Next JS framework - In my opinion the premiere React framework on the market currently. Comes with a lot of handy tools built in that I was able to take advantage of on this project. The Next router for example.
* React Redux - Probably overkill for this project, but I wanted to simulate a production app environment. Redux is my go to state management tool. The Context API could have worked as well.
* SASS - SASS has been my CSS preprocessor of choice for a long time. Makes writing CSS a little quicker.

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

I accepted the repo invite at around 1:45pm and looking at my Git commit history, I started the project at around 2:15pm. Now I'm answering this question at around 9:30pm. I took a couple of breaks to eat dinner and watch the end of the Yankee game. In total I'd say I spent about 5 hours coding. Once I hit the 5 hour mark I cut myself off, knowing the deadline of 4 hours. I tried my best to respect that mark, but leaked over a little bit finishing up some styling and a few small features.

It's not perfect, and I missed a few features (icons and error state specifically), but it gets the job done for an MVP.

> If you could go back and give yourself advice at the beginning of the project, what would it be?

I feel like I managed my time and effort pretty well. I got the MVP working, and while it's missing a few small features, I don't think there is anything I would change in my process. Maybe eat before hand. Getting back into the code after taking a break is never easy.

> Did you learn anything new?

I have never worked with the Github API. So that's new. Pretty much everything else is directly out of my playbook.

> Do you feel that this assignment allowed you to showcase your abilities effectively?

I think so- Sure. I might have rushed a little towards the end just to get the app working and looking OK. But given the time constraints I think I was able to demonstrate my abilities pretty effectively.

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

There is certainly a lot I would do to optimize this app. A progressive loader, better loading and error state management, cleaner SASS... Tests. But nothing significant on the front-end outside of tests.

Given more time, I would probably spin up a serverless function on GCP and hit the Github API from there to demonstrate my skills with Node and Apollo.
