## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

0. **Think about your data model**
1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## Data model

- board_games
    - name
        - i.e. 'Carcasonne'
        - string
    - designer
        - 'Klaus-Jürgen Wrede'
        - string
    - category
        - 'tile-laying'
        - string
    - player_min
        - 2
        - int2
    - player_max
        - 6
        - int2
    - rating
        - 7.4
        - decimal (float)

## HTML Setup

### list page
- empty div to inject list of games

### detail page
- empty div to inject details about this particular game

## State
- gamesData
    - fetch all games
- gameData
    - fetch 1 game

## Events
- page load on the list page
    - window.addEventListener('load',() => {})
    - talk to supabase to get all games data
    - dump the data into state (good habit)
    - loop through our games in state
        - for each game, render a game div
        - then append that div to our HTML skeleton
    - refactor into a render function
    - refactor into a display function (good habit)

- page load on the detail page
- user should be able to see a list of games on load in the home page
    - when user clicks on list page, they are taken to the detail page (with the href)
    - window.addEventListener('load',() => {})
    - talk to supabase to get THIS PARTICULAR GAME'S data
        - this is new: let's check the docs

```js
let { data: tabletop_games, error } = await supabase
  .from('tabletop_games')
  .eq('id', 2)
  .select('*');
```
    - how do i find ONE item from supabase?
    - dump the data into state (good habit)
    - wait, how do i find the id?
    - let's pull it from the URL
    - const data = new URLSearchParams(window.location.search)
    - const id = data.get('id') // we need to add id to the URL in our Anchor tag on the list page <a href=`../detail/?id=${idInSupabase}`>
- use fetched data to display text on detail page