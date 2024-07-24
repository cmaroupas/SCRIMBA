const quotes = [
    "&ldquo;A wizard is never late, nor is he early, he arrives precisely when he means to.&rdquo; - Gandalf",
    "&ldquo;All we have to decide is what to do with the time that is given to us.&rdquo; - Gandalf",
    "&ldquo;Even the smallest person can change the course of the future.&rdquo; - Gandalf",
    "&ldquo;The world is not in your books and maps. It’s out there.&rdquo; - Gandalf",
    "&ldquo;I will not say, do not weep, for not all tears are an evil.&rdquo; - Gandalf",
    "&ldquo;There is some good in this world, and it’s worth fighting for.&rdquo; - Gandalf",
    "&ldquo;Courage is found in unlikely places.&rdquo; - Gandalf",
    "&ldquo;It’s the job that’s never started that takes the longest to finish.&rdquo; - Gandalf",
    "&ldquo;Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgment.&rdquo; - Gandalf",
    "&ldquo;The burned hand teaches best. After that, advice about fire goes to the heart.&rdquo; - Gandalf",
    "&ldquo;It is not our part to master all the tides of the world, but to do what is in us for the succour of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till.&rdquo; - Gandalf",
    "&ldquo;The greatest adventure is what lies ahead.&rdquo; - Gandalf",
    "&ldquo;I wish it need not have happened in my time,&rdquo; said Frodo. &ldquo;So do I,&rdquo; said Gandalf, &ldquo;and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.&rdquo; - Gandalf",
    "&ldquo;Even darkness must pass. A new day will come. And when the sun shines, it will shine out the clearer.&rdquo; - Gandalf",
    "&ldquo;End? No, the journey doesn’t end here. Death is just another path, one that we all must take.&rdquo; - Gandalf",
    "&ldquo;There are far, far better things ahead than any we leave behind.&rdquo; - Gandalf",
    "&ldquo;Home is behind, the world ahead.&rdquo; - Gandalf",
    "&ldquo;Faithless is he that says farewell when the road darkens.&rdquo; - Gandalf",
    "&ldquo;Fly, you fools!&rdquo; - Gandalf",
    "&ldquo;You shall not pass!&rdquo; - Gandalf",
    "&ldquo;There is only one Lord of the Ring, only one who can bend it to his will. And he does not share power.&rdquo; - Gandalf",
    "&ldquo;The Ring has awoken, it’s heard its master’s call.&rdquo; - Gandalf",
    "&ldquo;It is not despair, for despair is only for those who see the end beyond all doubt. We do not.&rdquo; - Gandalf",
    "&ldquo;Do not be too eager to deal out death in judgment. Even the very wise cannot see all ends.&rdquo; - Gandalf",
    "&ldquo;The wise speak only of what they know.&rdquo; - Gandalf",
    "&ldquo;I am Gandalf the White. And I come back to you now at the turn of the tide.&rdquo; - Gandalf",
    "&ldquo;You cannot pass! I am a servant of the Secret Fire, wielder of the flame of Anor. You cannot pass! The dark fire will not avail you, flame of Udûn. Go back to the Shadow! You cannot pass!&rdquo; - Gandalf",
    "&ldquo;There’s some good in this world, Mr. Frodo, and it’s worth fighting for.&rdquo; - Gandalf",
    "&ldquo;The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.&rdquo; - Gandalf",
    "&ldquo;I would have gone with you to the end, into the very fires of Mordor.&rdquo; - Gandalf",
    "&ldquo;The world changes, and all that was once great and beautiful will be lost.&rdquo; - Gandalf",
    "&ldquo;It is not our part to master all the tides of the world, but to do what we can.&rdquo; - Gandalf",
    "&ldquo;The world is full of danger, and in it, there are many dark places. But still, there is much that is fair, and though in all lands, love is now mingled with grief, it grows perhaps the greater.&rdquo; - Gandalf",
    "&ldquo;I am not alone. You are not alone.&rdquo; - Gandalf",
    "&ldquo;The past is gone, and the future is unknown.&rdquo; - Gandalf",
    "&ldquo;The battle for Middle-Earth will be fought and won in the heart.&rdquo; - Gandalf"
];

const quoteText = document.getElementById('quote-box'); // Ensure 'quote-box' is used here
const newQuoteButton = document.getElementById('new-quote');

newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[randomIndex]; // Use innerHTML to support HTML entities
});

// Display an initial quote
quoteText.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
