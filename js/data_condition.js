data_condition = [
    {
        title: "Blinded",
        icon: "sight-disabled",
        subtitle: "You can't see",
        description: "You can't see",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ]
    },
    {
        title: "Charmed",
        icon: "smitten",
        subtitle: "You are charmed",
        description: "You are charmed by another creature",
        reference: "PHB, pg. 290.",
        bullets: [
            "You can't attack your charmer or target them with harmful abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ]
    },
    {
        title: "Deafened",
        icon: "hearing-disabled",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
    {
        title: "Exhaustion",
        icon: "despair",
        subtitle: "You are exhausted",
        description: "Exhaustion is measured in six levels",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on ability checks</td></tr><tr><td>2</td><td></td><td></td><td>Speed halved</td></tr><tr><td>3</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws</td></tr><tr><td>4</td><td></td><td></td><td>Hit point maximum halved</td></tr><tr><td>5</td><td></td><td></td><td>Speed reduced to 0</td></tr><tr><td>6</td><td></td><td></td><td>Death</td></tr></table>",
            "You suffer the effect of your current level of exhaustion as well as all lower levels.",
            "Finishing a long rest reduces your exhaustion level by 1, provided that you have also had some food and drink.",
            "Also, being raised from the dead reduces a creature’s exhaustion level by 1."
        ]
    },
    {
        title: "Frightened",
        icon: "screaming",
        subtitle: "You are frightened",
        description: "You are frightened",
        reference: "PHB, pg. 290.",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly move closer to the source of your fear."
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "You are grappled",
        description: "You are grappled",
        reference: "PHB, pg. 290.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "The condition ends if your grappler is incapacitated or you are removed from the reach.",
            "Use your Action to attempt to escape a grapple rolling a Strength (Athletics) check or a Dexterity (Acrobatics) check against your opponent’s Strength (Athletics) check. If you succeed, the condition ends."
        ]
    },
    {
        title: "Incapacitated",
        icon: "cut-palm",
        subtitle: "You can't take actions or reactions",
        description: "You can't take actions or reactions",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "PHB, pg. 291.",
        bullets: [
            "For the purpose of hiding, you are heavily obscured.",
            "You can still be detected by any noise you make or tracks you leave.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ]
    },
    {
        title: "Paralyzed",
        icon: "thunder-struck",
        subtitle: "You are paralyzed",
        description: "You can't do anything",
        bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Petrified",
        icon: "stone-pile",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Drunk",
        icon: "beer-stein",
        subtitle: "You are drunk",
        description: "List of penalties suffered for excessive drinking",
        reference: "Drinking & Intoxication - GM Binder",
        bullets: [
            "This status is gained after a player reaches their drunk threshold (Constitution ability score + 1).",
            "Drinking while Drunk, the player must make a Constitution Saving Throw of DC 8 + drink strength + exhaustion level. Failure results in falling unconscious for 1d4 hours, and failing by 5 or more gains a Level of Exhaustion.",
            "<table><tr><th>Over threshold</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>0 points</td><td></td><td></td><td>+3 Charisma; -2 Intelligence</td></tr><tr><td>2 points</td><td></td><td></td><td>+5 Charisma; -3 Intelligence; -3 Wisdom; -1 on attack rolls</td></tr><tr><td>5 points</td><td></td><td></td><td>+5 Charisma; Disadvantage on Intelligence; Disadvantage on Wisdom; -3 on attack rolls</td></tr><tr><td>2 times</td><td></td><td></td><td>+5 Charisma; Disadvantage on Intelligence; Disadvantage on Wisdom; -3 on attack rolls; +3 Strength; Advantage on saving throws made against fear; 5 temporary hit points</td></tr><tr><td>2 times + 10 points</td><td></td><td></td><td>For each drink consumed, the player must make a DC 16 Constitution Saving Throw. Failure inflicts the player with Alcohol Poisoning, taking 1d6 Poison Damage every half hour</td></tr></table>",
            "Any action that heals a player, take the amount of health restored and lose half as many Intoxication Points. After a short rest, a player loses five Intoxication points. After a long rest, Intoxication Points are reset completely.",
            "If a player had at least one level of exhaustion gained from Intoxication, and no remaining Intoxication Points (for instance after a long rest) they become Hungover (-3 on all Constitution checks, and -2 on all Intelligence checks. After a long rest or being healed, the player no longer has a hangover.)",
            "Alcohol poisoning can be cured using activated charcoal or cured until your intoxication points are reduced to below twice your Threshold."
            ]
    },
    {
        title: "Poisoned",
        icon: "poison-bottle",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "crawl",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Stunned",
        icon: "knockout",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    },
    {
        title: "Dying",
        icon: "dead-head",
        subtitle: "You are dying",
        description: "You have been dropped to zero hit points and are dying",
        reference: "PHB, pg. 197.",
        bullets: [
            "If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious, prone and are dying.",
            "If you receive any healing you immediately regain consciousness again and no longer dying.",
            "When dying, at the start of each of your turns you make a death saving throw. Roll a d20 and do not add any modifiers.",
            "A 10 or higher is a success, 9 or lower is a failure.",
            "On your third success, you become stable.",
            "On your third failure, you die.",
            "Rolling a 1 counts as two failures.",
            "Rolling a 20 immediately causes you to regain 1 hit point.",
            "You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you regain 1 hit point."
        ]
    },
    {
        title: "Losing Concentration",
        icon: "frontal-lobe",
        subtitle: "You stopped concentrating",
        description: "Some spells require you to maintain concentration in order to keep their magic active",
        reference: "",
        bullets: [
            "You lose concentration on a spell if you cast another spell that requires concentration.",
            "Whenever you take damage while you are concentrating on a spell, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher.",
            "You lose concentration on a spell if you are incapacitated or if you die."
        ]
    },
]
