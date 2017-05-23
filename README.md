# TriviaGame
git@github.com:deffractedmind/TriviaGame.git

Pseudocode
1. define start button, disappear after click (before game starts)
2. define initialize game function, set variables back to initial state
3. define object containing:
	3.1 question
	3.2 answers 1 thru 4
		3.3 array of four answers
	3.3 correct answer
	3.4 correct answer visual
	3.5 wrong answer visual
	3.5 interval to show correct answer
	3.6 interval to show wrong answer
4. define loop to check for correct answer; this is necesary if the questions randomly changes display order --- will implement fixed order first and add random on the fly display order later
5. define timer function to run every second and count down from 30
	5.1 show correct answer when:
		5.1.1 when time is up without answer -> increment unanswered question variable
		5.1.2 when within 30s time, wrong answer chosen -> increment wrong answer
	5.2 show celebratory visual when the correct answer chosen before the 30s countdown reaches 0
6.	after responding to the last question, display game results (statistics)
7.	define startover button/link which should restart the game with refreshing the page