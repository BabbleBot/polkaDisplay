This project has been created and developped in association with [cryptoleszto](https://github.com/cryptoleszto/polkasort)
Its development [has been approve](https://twitter.com/CLeszto/status/1378754544071499781) by Lennart Brandt, then Co-Founder & Chief Marketing Officer of the Polkamon project

# polkaDisplay
A simple tool to rapidly identify polkamons having low-probability properties

For those like me who are lazy and want to get rapidly a (very) rough idea of the rarity of their Polkamons I've made a tiny bit of javascript the replaces the "Detail" text by a number generated by multiplying the probability of each properties of the polkamon together.
To be clear:
 - A blue(25% Chance), non-glittery (99% chance), Unifary (15% Chance) with a Golden Horn (20% Chance) would have a 'value' of 0.25*0.99*0.15*0.20 = 0.007425
 - The value is then inverted to highlight the rarest polkamons by having the highest value, so 0.007425 => 1/0.007425 = 135 (rounded)

![Image d'exemple](https://i.ibb.co/4VF3Vng/polkamon-script.png "Exemple")

---

To make it simple to use I have created a bookmarklet containing exactly the code once compressed. You can save this link as a bookmarks and click on it when you're on the page of your collection. You can also execute the code directly from the developper console (F12) if you wish.

Due to Github's markdown I cannot post the bookmarklet directly here. You can find it [THERE](https://bookmarkify.it/43747)

Of Course this is just something i've made to help me rapidly identify which polkamon is more likely to have some value due to his combination of rare properties. IT IS NOT A TRUE DISPLAY OF A POLKAMON'S VALUE (No one know their real value at the time of writing, anyway...)

---

I obviously invite anybody and everybody to review the code to make sure i didn't put anything suspicious in it. The code doesn't collect any data, doesn't modify anything EXCEPT the text of the 'Details' element.

I may, or may not, make a V2 later to:
 - Try to identify more precisely some key properties (glittery, for exemple) and give them more weight in the formula
 - Highlight the 'rare' polkamons with custom colors based on their 'value'
