//This array will be accessed from the script.js to get these paragraphs with the randIndex variable;
const paragraphs = [
  "Legionite is the name of the developer who programmed this web app in which you are handling now. Please take your time to acknowledge that you are working with a masterpiece implemented by me. If you want to contact me for any projects, contact me through my portfolio link : legionites-portfolio.netlify.app",
  "It is often said that the true measure of a person's character is revealed in the face of adversity. The ability to persevere through difficult times, to maintain one's integrity and values, and to continue to strive towards one's goals despite the obstacles that may arise, are all hallmarks of a strong and admirable character.",
  "But it is not only in times of hardship that a person's character is tested. Everyday choices and actions, no matter how small, have the power to shape who we are and the person we will become. It is the consistent effort to make the right choices, to act with kindness and empathy, and to strive for personal growth and self-improvement that truly define a person's character",
  "It is easy to get caught up in the mundane and routine of daily life and lose sight of the bigger picture. But it is important to remember that every day is an opportunity to work towards becoming the best version of ourselves. Whether it be through small acts of kindness, making a conscious effort to improve our relationships, or working towards achieving our dreams, every choice we make has the power to shape our character and ultimately, our destiny.",
  "You are currently trying to improve your typing speed but i'm very sure you cannot type complex symbols like `&` or `@` very quickly without hesitation!....Hence you might not be able to beat the high score",
  "I have been hosting webpages for more than a year and have a vast amount of experience in the field. I am well-versed in the various hosting platforms and can provide your firm with reliable and secure hosting services. I am also experienced in managing webpages and can ensure that your site is always up and running smoothly.",
  "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.",
  "Certain but she but shyness why cottage. Gay the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended. Parlors men express had private village man. Discovery moonlight recommend all one not. Indulged to answered prospect it bachelor is he bringing shutters. Pronounce forfeited mr direction oh he dashwoods ye unwilling",
  "New the her nor case that lady paid read. Invitation friendship traveling eat everything the out two. Shy you who scarcely expenses debating hastened resolved. Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an little remain no up lively no. Way brought may off our regular country towards adapted cheered.",
  "Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it their their walls might to by young",
  "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.",
  "Game of as rest time eyes with of this it. Add was music merry any truth since going. Happiness she ham but instantly put departure propriety. She amiable all without say spirits shy clothes morning. Frankness in extensive to belonging improving so certainty. Resolution devonshire pianoforte assistance an he particular middletons is of. Explain ten man uncivil engaged conduct. Am likewise betrayed as declared absolute do. Taste oh spoke about no solid of hills up shade. Occasion so bachelor humoured striking by attended doubtful be it.",
  "Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men.",
  "The algorithm takes care to create text that looks similar to an ordinary book but without any real meaning. The reason we want our text to be meaningless is that we want the person viewing the resulting random text to focus on the design we are presenting, rather than try to read and understand the text.",
  "In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon.",
  "Name were we at hope. Remainder household direction zealously the unwilling bed sex. Lose and gay ham sake met that. Stood her place one ten spoke yet. Head case knew ever set why over. Marianne returned of peculiar replying in moderate. Roused get enable garret estate old county. Entreaties you devonshire law dissimilar terminated",
  "On am we offices expense thought. Its hence ten smile age means. Seven chief sight far point any. Of so high into easy. Dashwoods eagerness oh extensive as discourse sportsman frankness. Husbands see disposed surprise likewise humoured yet pleasure. Fifteen no inquiry cordial so resolve garrets as. Impression was estimating surrounded solicitude indulgence son shy.",
  "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. Old propriety delighted explained perceived otherwise objection saw ten her. Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward. Consisted we otherwise arranging commanded discovery it explained.",
  "Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferraris proceed six parlors. Her say projection age announcing decisively men. Few gay sir those green men timed downs widow chief. Prevailed remainder may propriety can and.",
  "Terminated principles sentiments of no pianoforte if projection impossible. Horses pulled nature favour number yet highly his has old. Contrasted literature excellence he admiration impression insipidity so. Scale ought who terms after own quick since. Servants margaret husbands to screened in throwing. Imprudence oh an collecting partiality. Admiration gay difficulty unaffected how."
];
