let obj = ["Yo momma so dumb, she tried to surf the microwave",

"Me: Would you like to be the sun in my life  Her : Awww...Yes!!!Me: Good then stay 92.96 million miles away from me",

"Teacher: How much is a gram ?Tyronne : Uhmm, depends on what you need",

"Why are frogs always so happy ? They eat what ever bugs them",

"Some guy called me a tool.So I got hammered and nailed his girlfriend.Guess he was right.",

"I went down the street to a 24 - hour grocery store.When I got there, the guy was locking the front door.I said, Hey! The sign says you're open 24 hours.  He Said, Yes, but not in a row!",

"Yo mama is so ugly she made my happy meal cry",

"I couldn't figure out why the baseball kept getting larger. Then it hit me.",

"Boy: The principal is so dumb! Girl: Do you know who I am ? Boy : No...Girl: I am the principal's daughter!Boy: Do you know who I am ?Girl : No...Boy: Good! * Walks away",

"A blonde drops off her dress to the dry cleaners The lady says, Come Again!The blonde says, No, it's toothpaste this time.",

"Beer Bottle: You break me, you get 1 year of bad luck Mirror: You kiddin' me? You break me, then y'all get 7 years bad luck!Condom: Hahaha... (Condom walks off laughing)",

 

"Yo mama so fat, she doesn't need internet, she's already worldwide."]
let btn = document.getElementById('btn');
btn.addEventListener("click",()=>{
    let idx = Math.floor(Math.random()*12); // yahi hai jo ki value dega.
    document.getElementById("joke").innerHTML = obj[idx];
    
})
