var quiz = [
    {
        "question": "How often do you comment your code?",
        "answers": [
            {
                "answer": "Nearly every line.",
                "comment": "That's how the pros do it, right?"
            },
            {
                "answer": "Only in the following scenario: <code>int i = 0; // set i to 0</code>",
                "comment": "You took AP Comp Sci."
            },
            {
                "answer": "Using descriptive variable names should eliminate the need for commenting in general",
                "comment": "You've only ever used Python."
            },
            {
                "answer": "I didn't know C supported comments.",
                "comment": "You are a lost cause."
            }
        ]
    },
    {
        "question": "You are writing a function to compute the least common multiple of two values.  What do you name it?",
        "answers": [
            {
                "answer": "<code>computeTheLeastCommonMultipleOfTwoValuesAndThenReturnIt(firstValue, secondValue)</code>",
                "comment": "You were trained in Java."
            },
            {
                "answer": "<code>computeLeast_commonmultiple(v1, v_two)</code>",
                "comment": "You were trained in PHP."
            },
            {
                "answer": "<code>clcmotvari(x, y)</code>",
                "comment": "You were trained in FORTRAN; it's time to welcome death with open arms."
            },
            {
                "answer": "<code>my_cool_function(foo, bar)</code>",
                "comment": "You were trained by Yahoo Answers."
            }
        ]
    },
    {
        "question": "You're reading someone else's code, and it's awful. What do you do?",
        "answers": [
            {
                "answer": "Rewrite it myself, from scratch.",
                "comment": "It'll be much better this time around!"
            },
            {
                "answer": "Email the original author with questions.",
                "comment": "And death threats. Mostly death threats."
            },
            {
                "answer": "Spend hours learning to understand its function, and then comment it properly.",
                "comment": "You're the type of person who would raise someone else's child."
            },
            {
                "answer": "Ignore it, and press on. That's the way things work in a large company, right? ",
                "comment": "You're the reason Kitty Genovese died. You monster."
            }
        ]
    },
    {
        "question": "You want to style an HTML element and the appropriate CSS is non-standard.  What is your solution?",
        "answers": [
            {
                "answer": "<code>&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;table&gt;&lt;tr&gt;&lt;td colspan=&rdquo;7&rdquo;&gt;</code>",
                "comment": "You are a pragmatist and you're okay with it."
            },
            {
                "answer": "Use the non-standard CSS.  Fuck other browsers.",
                "comment": "You are on the IE dev team."
            },
            {
                "answer": "Use every individual browser's implementation.",
                "comment": "You are literally making the world a better place, aren't you. *tips fedora*"
            },
            {
                "answer": "It's a trick question.  There is a jQuery solution that is cross-browser and well documented.",
                "comment": "You know, CSS isn't actually needed.  It could all be done with Javascript if only users didn't bitch about 30 second load times."
            }
        ]
    },
    {
        "question": "Git or SVN?",
        "answers": [
            {
                "answer": "Git",
                "comment": "You're an edgy netkid who enjoys typing commands he doesn't fully understand."
            },
            {
                "answer": "SVN",
                "comment": "Your entire project is four files and you're doing this for course credit."
            },
            {
                "answer": "Mercurial",
                "comment": "You own an RFID-resistant wallet."
            },
            {
                "answer": "Whichever is best for the project, of course!",
                "comment": "Jesus christ, dude."
            }
        ]
    },
    {
        "question": "What's your preferred text editor??",
        "answers": [
            {
                "answer": "Vim",
                "comment": "Nothing's funny about Vim. Vim is fucking serious business. Don't disrespect my dojo."
            },
            {
                "answer": "Emacs",
                "comment": "You own a bunker with 300 cans of beans, just in case."
            },
            {
                "answer": "Ed",
                "comment": "Fuck you, buddy."
            },
            {
                "answer": "Nano",
                "comment": "It's the closest thing to Sublime Text in the terminal."
            }
        ]
    },
    {
        "question": "What does your terminal look like?",
        "answers": [
            {
                "answer": "White text on a blurred, translucent background.",
                "comment": "Don't lie, this is the only reason you got Ubuntu."
            },
            {
                "answer": "White text on a black background.  Default font.",
                "comment": "Style is for designers.  You're an engineer!"
            },
            {
                "answer": "Green text on a black background. 'HackerzzzRewl' font.",
                "comment": "Your favorite movie is The Matrix.  You have never programmed before."
            },
            {
                "answer": "I've never opened the terminal.",
                "comment": "Why would you have?  You don't need it for HTML."
            }
        ]
    },
    {
        "question": "Which is your programming language of choice?",
        "answers": [
            {
                "answer": "C#",
                "comment": "Well look who's an artsy motherfucker."
            },
            {
                "answer": "Haskell",
                "comment": "Your Ph.D. in category theory entitles you to feel superior to people who are actually employable."
            },
            {
                "answer": "Java",
                "comment": "Conformist piece of shit."
            },
            {
                "answer": "JavaScript",
                "comment": "TypeError: undefined is not a function"
            }
        ]
    },
    {
        "question": "Which is your ALL-CAPS programming language of choice?",
        "answers": [
            {
                "answer": "PHP",
                "comment": "Your wallpaper is a random assortment of posters from different decades that don't all agree with each other politically."
            },
            {
                "answer": "APL",
                "comment": "&#x261C;&#x2707;&#x2328;&#x2639;&#x2620;&#x2690;&#x2721;&#x2721;&#x2721;&#x2318;&#x2756;&#x2327;"
            },
            {
                "answer": "COBOL",
                "comment": "You enjoy 1970s-brand masochism."
            },
            {
                "answer": "MATLAB",
                "comment": "This is a quiz for programmers."
            }
        ]
    },
    {
        "question": "What is your single-letter programming language of choice?",
        "answers": [
            {
                "answer": "C",
                "comment": "The only option of the four that you've heard of."
            },
            {
                "answer": "D",
                "comment": "You started learning C in school, but your grades dropped, so you switched programming languages to match them."
            },
            {
                "answer": "R",
                "comment": "This is a quiz for programmers."
            },
            {
                "answer": "V",
                "comment": "That's not even a real language, dipshit."
            }
        ]
    },
    {
        "question": "What is your preferred indentation style?",
        "answers": [
            {
                "answer": "One tab, however your editor would like to interpret it.",
                "comment": "You're the sort of person who goes to the bar and orders 'a beer.'"
            },
            {
                "answer": "Two spaces.",
                "comment": "You live in a one room studio apartment and enjoy crowded subway rides."
            },
            {
                "answer": "Some god-forsaken mix of tabs and spaces.",
                "comment": "Because fuck you and fuck anyone who ever wasted time arguing about whitespace."
            },
            {
                "answer": "Indentation?  That's what semicolons are for!",
                "comment": "Maybe if the code is really hard to read, people will just assume it was very difficult to implement."
            }
        ]
    },
    {
        "question": "How would you describe your StackOverflow usage?",
        "answers": [
            {
                "answer": "I answer questions regularly but never post anything.",
                "comment": "You have an inferiority complex."
            },
            {
                "answer": "I occasionally post very specific issues in a clear concise manner, but only after searching thoroughly to make sure a similar question has not already been posted.",
                "comment": "Bullshit."
            },
            {
                "answer": "Every time I get an error, I post 500 lines of code, 800 lines of logs, and a picture of myself shrugging my shoulders.",
                "comment": "Programming is hard, okay?"
            },
            {
                "answer": "I only post to point out grammatical mistakes in other people's posts or to repost their solutions with better practices.",
                "comment": "And somehow, your low reputation still comes as a surprise."
            }
        ]
    },
    {
        "question": "What is your favorite sorting algorithm?",
        "answers": [
            {
                "answer": "Quicksort",
                "comment": "You don't actually know how it works, but that's okay, because it's in the C standard library."
            },
            {
                "answer": "Bubble sort",
                "comment": "You're a simple person who doesn't like to think too hard about things."
            },
            {
                "answer": "Insertion sort.  Or wait, is it selection sort?",
                "comment": "So like, you start with the first element.  No wait, okay, so for each element, if it's greater, then you move it to...oh fuck it."
            },
            {
                "answer": "Bogosort",
                "comment": "You have a gambling addiction."
            }
        ]
    }
];
$( document ).ready(function () {
    $.each(quiz, function(i, e){
        var cat = "";
        cat += "<h3>" + e.question + "</h3>";
        cat += "<div class='form-group'>";
        $.each(e.answers, function (j, sec) {
            var id = "q" + i + "-" + j;
            cat += "<div class='radio'><input type='radio' name='q" + i + "' id='"+ id + "' />";
            cat += "<label for='" + id + "'>" + sec.answer + "</label>";
            cat += "<div class='help-block' id='" + id + "h" + "'>";
            cat += sec.comment;
            cat += "</div></div>";
        });
        cat += "</div>";
       
        $( "#questions" ).append(cat); 
    });
    $(':input').click(function () {
        $('[name="' + $(this).attr('name') + '"]').parent().find('.help-block').hide();
        $('#' + $(this).attr('id') + 'h').show(250);
    });
    $('#showresult').click(function () {
        $('#yourresult').show(250);
        $('html, body').animate({
            scrollTop: $("#yourresult").offset().top
        }, 2000);
    });   
});