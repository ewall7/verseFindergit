const happy_mood = new Array("أُوْلَـئِكَ عَلَى هُدًى مِّن رَّبِّهِمْ وَأُوْلَـئِكَ هُمُ الْمُفْلِحُونَ",
    " It is they who follow the guidance [which comes] from their Sustainer; and it is they, they who shall attain to a happy state!",
    "Al-Baqara (The Cow) 2:5",
    "وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ وَأُوْلَـئِكَ هُمُ الْمُفْلِحُونَ",
    "and that there might grow out of you a community [of people] who invite unto all that is good, and enjoin the doing of what is right and forbid the doing of what is wrong: and it is they, they who shall attain to a happy state!",
    "Al-Imran (The Family of Imran) 3:104",
    "يَا أَيُّهَا الَّذِينَ آمَنُواْ اصْبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَاتَّقُواْ اللّهَ لَعَلَّكُمْ تُفْلِحُونَ",
    "O you who have attained to faith! Be patient in adversity, and vie in patience with one another, and be ever ready [to do what is right], and remain conscious of God, so that you might attain to a happy state!",
    "Al-Imran (The Family of Imran) 3:200",
    "يَا أَيُّهَا الَّذِينَ آمَنُواْ لاَ تَأْكُلُواْ الرِّبَا أَضْعَافًا مُّضَاعَفَةً وَاتَّقُواْ اللّهَ لَعَلَّكُمْ تُفْلِحُونَ",
    "O YOU who have attained to faith! Do not gorge yourselves on usury, doubling and re-doubling it [97] - but remain conscious of God, so that you might attain to a happy state;",
    "Al-Imran (The Family of Imran) 3:130",
    "يَا أَيُّهَا الَّذِينَ آمَنُواْ اتَّقُواْ اللّهَ وَابْتَغُواْ إِلَيهِ الْوَسِيلَةَ وَجَاهِدُواْ فِي سَبِيلِهِ لَعَلَّكُمْ تُفْلِحُونَ",
    "O YOU who have attained to faith! Remain conscious of God, and seek to come closer unto Him, and strive hard in His cause, so that you might attain to a happy state.",
    "Al-Ma'idah (The Table Spread) 5:35"
);
const love_mood = new Array("يَمْحَقُ اللّهُ الْرِّبَا وَيُرْبِي الصَّدَقَاتِ وَاللّهُ لاَ يُحِبُّ كُلَّ كَفَّارٍ أَثِيمٍ",
    " God deprives usurious gains of all blessing, whereas He blesses charitable deeds with manifold increase. [265] And God does not love anyone who is stubbornly ingrate and persists in sinful ways.",
    "Al-Baqara (The Cow) 2:276",
    "وَقَاتِلُواْ فِي سَبِيلِ اللّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلاَ تَعْتَدُواْ إِنَّ اللّهَ لاَ يُحِبُّ الْمُعْتَدِينَ",
    "AND FIGHT in God's cause against those who wage war against you, but do not commit aggression-for, verily, God does not love aggressors. [167]",
    "Al-Baqara (The Cow) 2:190",
    "وَإِذَا تَوَلَّى سَعَى فِي الأَرْضِ لِيُفْسِدَ فِيِهَا وَيُهْلِكَ الْحَرْثَ وَالنَّسْلَ وَاللّهُ لاَ يُحِبُّ الفَسَادَ",
    "But whenever he prevails, he goes about the earth spreading corruption and destroying [man's] tilth and progeny: [189] and God does not love corruption",
    "Al-Baqara (The Cow) 2:205",
    "قُلْ أَطِيعُواْ اللّهَ وَالرَّسُولَ فإِن تَوَلَّوْاْ فَإِنَّ اللّهَ لاَ يُحِبُّ الْكَافِرِينَ",
    " Say: �Pay heed unto God and the Apostle.� And if they turn away - verely, God does not love those who deny the truth.",
    "Al-Imran (The Family of Imran) 3:32",
    "بَلَى مَنْ أَوْفَى بِعَهْدِهِ وَاتَّقَى فَإِنَّ اللّهَ يُحِبُّ الْمُتَّقِينَ",
    "Nay, but [God is aware of] those who keep their bond with Him, [59] and are conscious of Him: and, verily, God loves those who are conscious of Him.",
    "Al-Imran (The Family of Imran) 3:76"
);
// ============================================================================================
const angry_mood = new Array(" اَلَّذِیۡنَ  یُنۡفِقُوۡنَ  فِی  السَّرَّآءِ  وَالضَّرَّآءِ  وَالۡکٰظِمِیۡنَ  الۡغَیۡظَ  وَالۡعَافِیۡنَ  عَنِ  النَّاسِ  ۗ  وَاللّٰہُ  یُحِبُّ  الۡمُحۡسِنِیۡنَ ",
    "Those who spend in prosperity and adversity, and those who suppress anger and pardon men; and Allah loves those who do good;",
    "(Al-Imran) 3:135",
    "فَلَمَّاۤ اٰسَفُوۡنَا انۡتَقَمۡنَا مِنۡہُمۡ فَاَغۡرَقۡنٰہُمۡ اَجۡمَعِیۡنَ",
    "So, when they excited Our anger, We exacted retribution from them, and drowned them all.",
    "Surah Az-Zukhruf 43:56",
    "تَکَادُ تَمَیَّزُ مِنَ الۡغَیۡظِ ۖ کُلَّمَاۤ اُلۡقِیَ فِیۡہَا فَوۡجٌ سَاَلَہُمۡ خَزَنَتُہَاۤ اَلَمۡ یَاۡتِکُمۡ نَذِیۡرٌ",
    "It would almost burst with fury. Whenever a host of disbelievers is cast into it the wardens thereof will ask them, ‘Did no Warner come to you?’",
    "Surah Al-Mulk 67:9",
    "وَالَّذِیۡنَ یَجۡتَنِبُوۡنَ کَبٰٓئِرَ الۡاِثۡمِ وَالۡفَوٰحِشَ وَاِذَا مَا غَضِبُوۡا ہُمۡ یَغۡفِرُوۡنَ",
    "And who eschew the more grievous sins and indecencies, and, when they are wroth, they forgive,",
    "Surah Ash-Shuraa 42:38",
    "وَمَنۡ یُّوَلِّہِمۡ یَوۡمَئِذٍ دُبُرَہٗۤ اِلَّا مُتَحَرِّفًا لِّقِتَالٍ اَوۡ مُتَحَیِّزًا اِلٰی فِئَۃٍ فَقَدۡ بَآءَ بِغَضَبٍ مِّنَ اللّٰہِ وَمَاۡوٰٮہُ جَہَنَّمُ ۖ وَبِئۡسَ الۡمَصِیۡرُ",
    "And whoso turns his back to them on such a day, unless manoeuvring for battle or turning to join another company, he indeed draws upon himself the wrath of Allah, and Hell shall be his abode. And an evil resort it is.",
    "Surat Al-'Anfal"
);
// =============================================================================================
const anxious_mood = new Array("وَلۡیَخۡشَ الَّذِیۡنَ لَوۡ تَرَکُوۡا مِنۡ خَلۡفِہِمۡ ذُرِّیَّۃً ضِعٰفًا خَافُوۡا عَلَیۡہِمۡ فَلۡیَتَّقُوا اللّٰہَ وَلۡیَقُوۡلُوۡا قَوۡلًا سَدِیۡدًا",
    "And let those fear God who, if they should leave behind them their own weak offspring, would be anxious for them. Let them, therefore, fear Allah and let them say the right word.",
    "Surah An-Nisa",

)
const peace_mood = new Array("وَلاَ تَجْعَلُواْ اللّهَ عُرْضَةً لِّأَيْمَانِكُمْ أَن تَبَرُّواْ وَتَتَّقُواْ وَتُصْلِحُواْ بَيْنَ النَّاسِ وَاللّهُ سَمِيعٌ عَلِيمٌ",
    "AND DO NOT allow your oaths in the name of God to become an obstacle to virtue and God-consciousness and the promotion of peace between men: [212] for God is all-hearing, all-knowing.",
    "Al-Baqara (The Cow) 2:224",
    "فِيهِ آيَاتٌ بَيِّـنَاتٌ مَّقَامُ إِبْرَاهِيمَ وَمَن دَخَلَهُ كَانَ آمِنًا وَلِلّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلاً وَمَن كَفَرَ فَإِنَّ الله غَنِيٌّ عَنِ الْعَالَمِينَ",
    "full of clear messages. [76] [It is] the place whereon Abraham once stood; and whoever enters it finds inner peace. [77] Hence, pilgrimage unto the Temple is a duty owed to God by all people who are able to undertake it. And as for those who deny the truth - verily, God does not stand in need of anything in all the worlds.",
    "Al-Imran (The Family of Imran) 3:97",
    "وَإِذَا حُيِّيْتُم بِتَحِيَّةٍ فَحَيُّواْ بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا إِنَّ اللّهَ كَانَ عَلَى كُلِّ شَيْءٍ حَسِيبًا",
    "But when you are greeted with a greeting [of peace], answer with an even better greeting, or [at least] with the like thereof. [105] Verily, God keeps count indeed of all things.",
    "An-Nisa (The Women) 4:86",
    "لَهُمْ دَارُ السَّلاَمِ عِندَ رَبِّهِمْ وَهُوَ وَلِيُّهُمْ بِمَا كَانُواْ يَعْمَلُونَ",
    "Theirs shall be an abode of peace with their Sustainer; and He shall be near unto them in result of what they have been doing.",
    "Al-An'am (The Cattle) 6:127"
)


var happy_mode_verse_no = new Array();
const btn = document.querySelector(".search-btn");
const userList = document.querySelector("#users");
const container = document.querySelector(".display-container");

btn.addEventListener('click', onsubmit);
function onsubmit(e) {
    var mood = document.getElementById("mood");
    var moodValue = mood.options[mood.selectedIndex].text;
    $(".display-container").empty();
    e.preventDefault();
    console.log(moodValue);
    var mood_array = new Array();
    if (moodValue === "Happy") {
        mood_array = happy_mood;
    }
    else if (moodValue === "Angry") {
        mood_array = angry_mood;

    }
    else if (moodValue === "Anxoius") {
        mood_array = anxious_mood;
    }
    else if (moodValue === "Love") {
        mood_array = love_mood;
    }
    else if (moodValue = "Peace") {
        mood_array = peace_mood;
    }
    for (var i = 0; i < mood_array.length; i += 3) {
        let ayyah = document.createElement("h2");
        let verseno = document.createElement("h4");
        let translation = document.createElement("p");
        let line = document.createElement("hr");
        line.style.color = "black";
        line.style.border = "1px solid red";

        ayyah.innerText = mood_array[i];
        verseno.innerText = mood_array[i + 1];
        translation.innerText = mood_array[i + 2];
        container.appendChild(ayyah);
        container.appendChild(verseno);
        container.appendChild(translation);
        container.appendChild(line);
        container.style.background = "white";
    }

}