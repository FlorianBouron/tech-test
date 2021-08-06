# Technical assignment: Javascript Developer
# Intro
Welcome to your technical assignment! This is a 3 hours technical test where you will need to complete as many steps as possible dealing with a wide range of challenges! We're really excited to jump on a follow-up call right after the test! Good luck!

## Background:
You need to help our customers to keep track of their customers, to make sure that they are happy and renew their subscription to our product.

This minimal project starts with a list of customers and your task is to turn it into something better and more interesting, by following the steps below.

**Note:** You should focus the vast majority of your time on the steps below. If you come across something else you want to add or improve, feel free to do so as long as you also add a clear comment/explanation.

### Step 1: No Duplicates
Currently, if you refresh the page a few times, the list of companies just grows by adding duplicates to the list.

As a first step, prevent any duplicate items (by id) from being saved.

### Step 2: More properties
Companies have an id, a name and a health status.
The health status is a number between 1-10 indicating how happy the customer is, where 10 is very happy.

Add three new properties to the company object.

- value: this is how much the customer is paying ($100-$1000).
- user count: this is the number of users at the company (values in the range 1-15)
- industry: options are ['retail', 'pharma', 'logistics', 'manufacturing', hospitality].

Update the generator to include these values (randomly), though not all companies should have an industry specified, only around **80%**. For the ones that don't have a value for some property, we should show a dash in the table.

### Step 3: Simulator
Create a simulation. Every "tick" in the simulation is 3 seconds and corresponds to 1 month in real life.

Every month the sales team may bring in 5-10 new customers with randomly assigned values for health, value, user count, etc. 
(random but the ranges listed earlier should be respected).
There is also some risk of losing existing customers every month (in which case they should be removed).

Any existing customers can be lost, except for the ones added that same month.
- For customers with a health score at or below 5, the risk of losing them is 30%. 
- For customers with health above 5, the risk is only 5%.

### Step 4: Column preferences
Update the app to let the user select which columns should be visible in the table.

### Step 5: Users I
Up until now, the only model we had was the `company` model. Create another model for `users` following a similar structure to how the Company object was implemented. Each user should be associated with one of the companies.

You don't need to visually show the users in-app, so you can keep the company table as is.

Users have the following properties apart from the id:
- `companyId:` reference to the company they belong to.
- `createdDate`: date createdDate.
- `lastActive`: random time between when they were created and "now".


### Step 6: Users II
Update the generator and simulation with logic to manage the `Users` similar to how `Companies` works.

The actual users can all be generated once the company is created. The number of users per company should be random between 1 and 15.

The time when the users were `lastActive` may change as is simulated as:
Every month (including when they are created), there is a 50% chance that any given user was active.


### Step 7: Computed Fields
Instead of setting the "user count" property directly on the companies, base it on the actual number of related users.

Also, update the health scores to dynamically change based on the number of related users that were active last month.
- If fewer than 50% of related users were active last month, the health score drops by 2 points.
- If more than 50% of related users were active last month, the health score climbs by 1 point.

(The health score must always be within 1-10).

### Bonus:
The following requirements are not needed, but counted as bonus.
- Unit test your code using jest
- Improve the webpack configuration.
- Improve the UI
- Write a README.md file.