---
title: "周易筆記"
date: 2020-10-16T18:34:07+08:00
weight: 120
draft: false
brewing: true
toc: false
---

<button class="btn btn-outline-success btn-block sticky-top" id="toggleBtn" onclick="toggleDetail()">閱讀白文</button>

<script>
    function toggleDetail() {
        const details = Array.from(document.getElementsByTagName('blockquote'));
        const smalls = Array.from(document.getElementsByTagName('small'));
        const btn = document.getElementById('toggleBtn');
        if (btn.textContent == '閱讀白文') {
            details.forEach(d => d.style.display = 'none');
            smalls.forEach(d => d.style.display = 'none');
            btn.innerText = '閱讀注釋';
        } else {
            details.forEach(d => d.style.display = '');
            smalls.forEach(d => d.style.display = '');
            btn.innerText = '閱讀白文';
        }
    }
</script>

<ul class="list-inline">
    <li class="list-inline-item"><a href="#1">乾</a></li>
    <li class="list-inline-item"><a href="#2">坤</a></li>
    <li class="list-inline-item"><a href="#3">屯</a></li>
    <li class="list-inline-item"><a href="#4">蒙</a></li>
    <li class="list-inline-item"><a href="#5">需</a></li>
    <li class="list-inline-item"><a href="#6">訟</a></li>
    <li class="list-inline-item"><a href="#7">師</a></li>
    <li class="list-inline-item"><a href="#8">比</a></li>
    <li class="list-inline-item"><a href="#9">小畜</a></li>
    <li class="list-inline-item"><a href="#10">履</a></li>
    <li class="list-inline-item"><a href="#11">泰</a></li>
    <li class="list-inline-item"><a href="#12">否</a></li>
    <li class="list-inline-item"><a href="#13">同人</a></li>
    <li class="list-inline-item"><a href="#14">大有</a></li>
    <li class="list-inline-item"><a href="#15">謙</a></li>
    <li class="list-inline-item"><a href="#16">豫</a></li>
    <li class="list-inline-item"><a href="#17">隨</a></li>
    <li class="list-inline-item"><a href="#18">蠱</a></li>
    <li class="list-inline-item"><a href="#19">臨</a></li>
    <li class="list-inline-item"><a href="#20">觀</a></li>
    <li class="list-inline-item"><a href="#21">噬嗑</a></li>
    <li class="list-inline-item"><a href="#22">賁</a></li>
    <li class="list-inline-item"><a href="#23">剝</a></li>
    <li class="list-inline-item"><a href="#24">復</a></li>
    <li class="list-inline-item"><a href="#25">无妄</a></li>
    <li class="list-inline-item"><a href="#26">大畜</a></li>
    <li class="list-inline-item"><a href="#27">頤</a></li>
    <li class="list-inline-item"><a href="#28">大過</a></li>
    <li class="list-inline-item"><a href="#29">坎</a></li>
    <li class="list-inline-item"><a href="#30">離</a></li>
    <li class="list-inline-item"><a href="#31">咸</a></li>
    <li class="list-inline-item"><a href="#32">恆</a></li>
    <li class="list-inline-item"><a href="#33">遯</a></li>
    <li class="list-inline-item"><a href="#34">大壯</a></li>
    <li class="list-inline-item"><a href="#35">晉</a></li>
    <li class="list-inline-item"><a href="#36">明夷</a></li>
    <li class="list-inline-item"><a href="#37">家人</a></li>
    <li class="list-inline-item"><a href="#38">睽</a></li>
    <li class="list-inline-item"><a href="#39">蹇</a></li>
    <li class="list-inline-item"><a href="#40">解</a></li>
    <li class="list-inline-item"><a href="#41">損</a></li>
    <li class="list-inline-item"><a href="#42">益</a></li>
    <li class="list-inline-item"><a href="#43">夬</a></li>
    <li class="list-inline-item"><a href="#44">姤</a></li>
    <li class="list-inline-item"><a href="#45">萃</a></li>
    <li class="list-inline-item"><a href="#46">升</a></li>
    <li class="list-inline-item"><a href="#47">困</a></li>
    <li class="list-inline-item"><a href="#48">井</a></li>
    <li class="list-inline-item"><a href="#49">革</a></li>
    <li class="list-inline-item"><a href="#50">鼎</a></li>
    <li class="list-inline-item"><a href="#51">震</a></li>
    <li class="list-inline-item"><a href="#52">艮</a></li>
    <li class="list-inline-item"><a href="#53">漸</a></li>
    <li class="list-inline-item"><a href="#54">歸妹</a></li>
    <li class="list-inline-item"><a href="#55">豐</a></li>
    <li class="list-inline-item"><a href="#56">旅</a></li>
    <li class="list-inline-item"><a href="#57">巽</a></li>
    <li class="list-inline-item"><a href="#58">兌</a></li>
    <li class="list-inline-item"><a href="#59">渙</a></li>
    <li class="list-inline-item"><a href="#60">節</a></li>
    <li class="list-inline-item"><a href="#61">中孚</a></li>
    <li class="list-inline-item"><a href="#62">小過</a></li>
    <li class="list-inline-item"><a href="#63">既濟</a></li>
    <li class="list-inline-item"><a href="#64">未濟</a></li>
</ul>

---

#### 彖象體例

- 大象唯釋卦象而不及卦德，唯釋卦名而不及卦爻辭，故成書應較早。
- 大象唯言「君子、先王、后」，所謂「易為君子謀，不為小人謀」是也。
- 彖傳取材於大象，以卦象、卦德而釋卦體，以聲訓、義訓而釋卦名，凡彖象釋卦象皆由上卦而及下卦，而彖釋卦德則自下而上。
- 彖傳貴中，且尤貴剛中。中，即二爻或五爻，剛中，即陽爻居中位。
- 應，即內外卦之爻位相對應，反之稱敵。乘，即陰爻在陽爻上，反之稱順、志行。
- 往來、上下、進返，皆從其「非覆即變」之耦卦而言，自下而上者稱往、上、進，反之稱來、下、返。

---

#### 乾，元亨，利貞。{#1}

> <span class="text-info">天行，健，君子以自強不息◎大哉乾元，萬物資始，乃統天，雲行雨施，品物流形，大明終始，六位時成，時乘六龍以御天，乾道變化，各正性命，保合大和，乃利貞，首出庶物，萬國咸寧</span><span class="text-danger">◎乾剛坤柔</span>◎乾，馬王堆帛書作鍵。元，善也。貞，甲骨金文與鼎同，正也、定也、固也、靜也。

初九，潛龍，勿用。<small class="text-info">潛龍勿用，陽在下也。</small>

九二，見龍在田，利見大人。<small class="text-info">見龍在田，德施普也。</small>

九三，君子終日乾乾，夕惕若，厲无咎。<small class="text-info">終日乾乾，反復道也。</small>

> 惕，帛書經傳作沂，讀為析，引申為安閒休息。淮南子人間篇「終日乾乾，以陽動也，夕惕若厲，以陰息也」，與帛書衷篇說同。厲，危也。朱震「无咎者，本實有咎，善補過而至於无咎」。

九四，或躍在淵，无咎。<small class="text-info">或躍在淵，進无咎也。</small>

> 或躍在淵，即或躍、或在淵。

九五，飛龍在天，利見大人。<small class="text-info">飛龍在天，大人造也。</small>

上九，亢龍，有悔。<small class="text-info">亢龍有悔，盈不可久也。</small>

用九，見群龍无首，吉。<small class="text-info">用九，天德不可為首也。</small>

> 用九，帛書作迵九，迵即帛書內通字。无首即不爭，剛而能柔，強而不爭，故吉。

#### 坤，元亨，利牝馬之貞，君子有攸往，先迷後得主，利，西南得朋，東北喪朋，安貞吉。{#2}

> <span class="text-info">地勢，坤，君子以厚德載物◎至哉坤元，萬物資生，乃順承天，坤厚載物，德合无疆，含弘光大，品物咸亨，牝馬地類，行地无疆，柔順利貞，君子攸行，先迷失道，後順得常，西南得朋，乃與類行，東北喪朋，乃終有慶，安貞之吉，應地无疆</span>◎坤，順也。利牝馬之貞，意謂跟隨而不爭先。先迷者，東北喪朋也，後得主者，西南得朋也，帛書衷篇「歲之義，始於東北，成於西南」，蓋卦氣說也。

初六，履霜，堅冰至。<small class="text-info">履霜堅冰，陰始凝也，馴致其道，至堅冰也。</small>

> 坤在申位，當秋，故初六言履霜也。

六二，直方，大，不習，无不利。<small class="text-info">六二之動，直以方也，不習无不利，地道光也。</small>

> 即直方而大、而不習、而无不利。習，摺也，帛書衷篇即以折釋習。

六三，含章，可貞，或從王事，无成有終。<small class="text-info">含章可貞，以時發也，或從王事，知光大也。</small>

> 无成亦能有終，以含章也。

六四，括囊，无咎，无譽。<small class="text-info">括囊无咎，慎不害也。</small>

> 括囊，慎言也。

六五，黃裳，元吉。<small class="text-info">黃裳元吉，文在中也。</small>

> 惠棟「陰爻居中稱黃」。

上六，龍戰于野，其血玄黃。<small class="text-info">龍戰于野，其道窮也。</small>

> 血，疑讀為率，帥也。玄黃，病也。

用六，利永貞。<small class="text-info">用六永貞，以大終也。</small>

#### 屯，元亨，利貞，勿用有攸往，利建侯。{#3}

> <span class="text-info">雲雷，屯，君子以經綸◎屯，剛柔始交而難生，動乎險中，大亨貞，雷雨之動滿盈，天造草昧，宜建侯而不寧◎有天地然後萬物生焉，盈天地之間者唯萬物，故受之以屯，屯者盈也，屯者物之始生也</span><span class="text-danger">◎屯見而不失其居，蒙雜而著</span>◎說文「屯，難也，象艸木之初生，屯然而難，从屮貫一，一，地也」。貞與往相對，當訓為定。

初九，磐桓，利居貞，利建侯。<small class="text-info">雖磐桓，志行正也，以貴下賤，大得民也。</small>

六二，屯如邅如，乘馬班如，匪寇婚媾，女子貞不字，十年乃字。<small class="text-info">六二之難，乘剛也，十年乃字，反常也。</small>

> 屯如邅如，即屯而邅如，行止艱難之意。

六三，即鹿无虞，惟入于林中，君子幾不如舍，往吝。<small class="text-info">即鹿无虞，以從禽也，君子舍之，往吝窮也。</small>

> 鹿，當讀為麓。幾，危也、殆也。往吝，往則吝也。朱熹「悔自凶而趨吉，吝自吉而趨凶」。

六四，乘馬班如，求婚媾，往吉，无不利。<small class="text-info">求而往，明也。</small>

九五，屯其膏，小貞吉，大貞凶。<small class="text-info">屯其膏，施未光也。</small>

> 屯，積聚。膏，資財。小而貞則吉，大而貞則凶。

上六，乘馬班如，泣血漣如。<small class="text-info">泣血漣如，何可長也。</small>

#### 蒙，亨，匪我求童蒙，童蒙求我，初筮告，再三瀆，瀆則不告，利貞。{#4}

> <span class="text-info">山下出泉，蒙，君子以果行育德◎蒙，山下有險，險而止，蒙，蒙亨，以亨行，時中也，匪我求童蒙童蒙求我，志應也，初筮告，以剛中也，再三瀆瀆則不告，瀆蒙也，蒙以養正，聖功也◎物生必蒙，故受之以蒙，蒙者蒙也，物之稺也</span>◎蒙，蔽也、昧也。童，脫也，釋名「山無草木亦曰童」，管子「童山竭澤」屢見。吿，吉之訛也，帛書石經均作吉。

初六，發蒙，利用刑人，用說桎梏，以往吝。<small class="text-info">利用刑人，以正法也。</small>

> 發，啟發。刑，同型，與桎梏意近，法式、規矩也。說，讀為脫。

九二，包蒙吉，納婦吉，子克家。<small class="text-info">子克家，剛柔接也。</small>

> 包，鄭玄曰當作彪，文也。虞翻「在中稱包」，屈萬里「包亦中也」。

六三，勿用取女，見金夫，不有躬，无攸利。<small class="text-info">勿用取女，行不順也。</small>

>  躬，信也，楚簡作躳，戰國古璽習見「中躳」即讀為忠信。

六四，困蒙，吝。<small class="text-info">困蒙之吝，獨遠實也。</small>

六五，童蒙，吉。<small class="text-info">童蒙之吉，順以巽也。</small>

> 童，脫也。

上九，擊蒙，不利為寇，利禦寇。<small class="text-info">利用禦寇，上下順也。</small>

> 擊，治也。

#### 需，有孚，光亨，貞吉，利涉大川。{#5}

> <span class="text-info">雲上於天，需，君子以飲食宴樂◎需，須也，險在前也，剛健而不陷，其義不困窮矣，需有孚光亨貞吉，位乎天位，以正中也，利涉大川，往有功也◎物稺不可不養也，故受之以需，需者飲食之道也</span><span class="text-danger">◎需不進也，訟不親也</span>◎需，須也、待也。孚，信也。光，大也。

初九，需于郊，利用恆，无咎。<small class="text-info">需于郊，不犯難行也，利用恆无咎，未失常也。</small>

> 爾雅「邑外謂之郊」。

九二，需于沙，小有言，終吉。<small class="text-info">需于沙，衍在中也，雖小有言，以吉終也。</small>

> 言，讀為愆，過失也，聞一多「易凡言有言，讀為有愆」。

九三，需于泥，致寇至。<small class="text-info">需于泥，災在外也，自我致寇，敬慎不敗也。</small>

六四，需于血，出自穴。<small class="text-info">需于血，順以聽也。</small>

> 血，讀為洫，溝洫也。

九五，需于酒食，貞吉。<small class="text-info">酒食貞吉，以中正也。</small>

上六，入于穴，有不速之客三人來，敬之，終吉。<small class="text-info">不速之客來敬之終吉，雖不當位，未大失也。</small>

#### 訟，有孚窒惕，中吉，終凶，利見大人，不利涉大川。{#6}

> <span class="text-info">天與水違行，訟，君子以作事謀始◎訟，上剛下險，險而健，訟，訟有孚窒惕中吉，剛來而得中也，終凶，訟不可成也，利見大人，尚中正也，不利涉大川，入于淵也◎飲食必有訟，故受之以訟</span>◎言止訟也。窒，制也、止也。惕，當訓為止息，帛書作寧。

初六，不永所事，小有言，終吉。<small class="text-info">不永所事，訟不可長也，雖小有言，其辯明也。</small>

> 所，依楚簡讀為迕，迕事即逆事，訟事也。

九二，不克訟，歸而逋，其邑人三百戶，无眚。<small class="text-info">不克訟，歸逋竄也，自下訟上，患至掇也。</small>

> 逋，疑讀為捕，獲也。眚，災也。

六三，食舊德，貞厲，終吉，或從王事，无成。<small class="text-info">食舊德，從上吉也。</small>

> 食舊德，虧耗舊日之德也。

九四，不克訟，復即命渝，安貞吉。<small class="text-info">復即命渝，安貞不失也。</small>

> 復即命渝，意謂歸來從命而改。

九五，訟，元吉。<small class="text-info">訟元吉，以中正也。</small>

> 凡訟事，善則能吉也。

上九，或錫之鞶帶，終朝三褫之。<small class="text-info">以訟受服，亦不足敬也。</small>

> 雖勝猶敗也。

#### 師，貞丈人吉，无咎。{#7}

> <span class="text-info">地中有水，師，君子以容民畜眾◎師，眾也，貞，正也，能以眾正，可以王矣，剛中而應，行險而順，以此毒天下而民從之，吉又何咎矣◎訟必有眾起，故受之以師，師者眾也</span><span class="text-danger">◎比樂師憂</span>◎言軍旅之事也。貞丈人吉，貞於丈人則吉。

初六，師出以律，否臧凶。<small class="text-info">師出以律，失律凶也。</small>

九二，在師，中吉，无咎，王三錫命。<small class="text-info">在師中吉，承天寵也，王三錫命，懷萬邦也。</small>

> 中吉，中則能吉，清成蓉鏡「凡二五爻稱中」。錫，同賜。

六三，師或，輿尸，凶。<small class="text-info">師或輿尸，大无功也。</small>

> 或，惑也。

六四，師左次，无咎。<small class="text-info">左次无咎，未失常也。</small>

> 帛書昭力篇「師也者，人之聚也，次也者，君之位也，見事而能左其主，何咎之有」，讀左為佐。

六五，田有禽，利執言，无咎，長子帥師，弟子輿尸，貞凶。<small class="text-info">長子帥師，以中行也，弟子輿尸，使不當也。</small>

> 禽，獲也。

上六，大君有命，開國承家，小人勿用。<small class="text-info">大君有命，以正功也，小人勿用，必亂邦也。</small>

#### 比，吉，原筮，元永貞，无咎，不寧方來，後夫凶。{#8}

> <span class="text-info">地上有水，比，先王以建萬國、親諸侯◎比，吉也，比，輔也，下順從也，原筮元永貞无咎，以剛中也，不寧方來，上下應也，後夫凶，其道窮也◎眾必有所比，故受之以比，比者比也</span>◎筮，疑讀為折，敗也，老子「大曰逝」帛書甲乙本作筮。帛書衷篇「比者，得之鮮也」，鮮，善也。

初六，有孚比之，无咎，有孚盈缶，終來有它，吉。<small class="text-info">比之初六，有它吉也。</small>

> 缶，疑讀為飽，从缶之字與从保之字通用，从保之字又與从包之字通用，莊子「此之謂葆光」，淮南子作珤。

六二，比之自內，貞吉。<small class="text-info">比之自內，不自失也。</small>

> 貞，楚簡無，可從。

六三，比之匪人。<small class="text-info">比之匪人，不亦傷乎。</small>

> 匪人，不善之人。

六四，外比之，貞吉。<small class="text-info">外比於賢，以從上也。</small>

> 貞吉，楚簡作「亡不利」。

九五，顯比，王用三驅，失前禽，邑人不誡，吉。<small class="text-info">顯比之吉，位正中也，舍逆取順，失前禽也，邑人不誡，上使中也。</small>

> 誡，讀為戒，不加守戒，謂示好生之德以親比。

上六，比之无首，凶。<small class="text-info">比之无首，无所終也。</small>

> 楚簡帛書石經均無「之」字，當為衍文。

#### 小畜，亨，密雲不雨，自我西郊。{#9}

> <span class="text-info">風行天上，小畜，君子以懿文德◎小畜，柔得位而上下應之，曰小畜，健而巽，剛中而志行，乃亨，密雲不雨，尚往也，自我西郊，施未行也◎比必有所畜，故受之以小畜</span><span class="text-danger">◎小畜寡<q>通顧，待也</q>也，履不處也</span>◎自，於也，詩伐木「出自幽谷」，孟子作「出於幽谷」。

初九，復自道，何其咎，吉。<small class="text-info">復自道，其義吉也。</small>

> 復，返也。

九二，牽復，吉。<small class="text-info">牽復在中，亦不自失也。</small>

> 牽，馬王堆作堅，堅決。

九三，輿說輻，夫妻反目。<small class="text-info">夫妻反目，不能正室也。</small>

> 輻，大畜九二作輹，當是，經典釋文又作輹，帛書作緮，輻屬之部，輹屬幽部，訓為車軸縛。

六四，有孚血去惕出，无咎。<small class="text-info">有孚惕出，上合志也。</small>

> 血，當讀為窒。惕，止也。

九五，有孚攣如，富以其鄰。<small class="text-info">有孚攣如，不獨富也。</small>

> 攣如，牽繫貌。

上九，既雨既處，尚德載，婦貞厲，月幾望，君子征凶。<small class="text-info">既雨既處，德積載也，君子征凶，有所疑也。</small>

> 德，帛書漢簡均作得。載，蓄積。

#### 履虎尾，不咥人，亨。{#10}

> <span class="text-info">上天下澤，履，君子以辯上下、定民志◎履，柔履剛也，說而應乎乾，是以履虎尾不咥人亨，剛中正履帝位，而不疚光明也◎物畜然後有禮，故受之以履</span>◎履，行也。尾，後也。

初九，素履，往无咎。<small class="text-info">素履之往，獨行願也。</small>

> 素，帛書作錯，[離](#30)初九「履錯然」，當作踖，何晏「踧踖，恭敬之貌」。

九二，履道坦坦，幽人貞吉。<small class="text-info">幽人貞吉，中不自亂也。</small>

六三，眇能視，跛能履，履虎尾，咥人凶，武人為于大君。<small class="text-info">眇能視，不足以有明也，跛能履，不足以與行也，咥人之凶，位不當也，武人為于大君，志剛也。</small>

> 為，帛書作迵，讀為用。

九四，履虎尾，愬愬，終吉。<small class="text-info">愬愬終吉，志行也。</small>

> 愬愬，恐懼謹慎貌。

九五，夬履，貞厲。<small class="text-info">夬履貞厲，位正當也。</small>

> 夬，讀為快，肆意、縱逸。

上九，視履考祥，其旋元吉。<small class="text-info">元吉在上，大有慶也。</small>

> 祥，徵兆。旋，轉也。

#### 泰，小往大來，吉，亨。{#11}

> <span class="text-info">天地交，泰，后以財成天地之道，輔相天地之宜，以左右民◎泰小往大來吉亨，則是天地交而萬物通也，上下交而其志同也，內陽而外陰，內健而外順，內君子而外小人，君子道長，小人道消也◎履而泰然後安，故受之以泰，泰者通也</span><span class="text-danger">◎否泰反其類也</span>◎泰，通而泰，交而泰，非不變之泰。

初九，拔茅茹，以其彙，征吉。<small class="text-info">拔茅征吉，志在外也。</small>

> 拔茅而連及其類。

九二，包荒，用馮河，不遐遺，朋亡，得尚于中行。<small class="text-info">包荒得尚于中行，以光大也。</small>

> 遐，讀為假，大也。遺，漏失。尚，助也。中行，中道。

九三，无平不陂，无往不復，艱貞无咎，勿恤其孚，于食有福。<small class="text-info">无往不復，天地際也。</small>

> 艱，讀為限，止也。恤，讀為窒，止息、終止。

六四，翩翩，不富以其鄰，不戒以孚。<small class="text-info">翩翩不富，皆失實也，不戒以孚，中心願也。</small>

> 翩翩，往來貌。戒，革也、改也，[小過](#62)九四「往厲必戒」，帛書作革，古音均為職部見母。

六五，帝乙歸妹以祉，元吉。<small class="text-info">以祉元吉，中以行願也。</small>

> 祉，福也。

上六，城復于隍，勿用師，自邑告命，貞吝。<small class="text-info">城復于隍，其命亂也。</small>

> 復，傾覆。

#### 否之匪人，不利君子貞，大往小來。{#12}

> <span class="text-info">天地不交，否，君子以儉德辟難、不可榮以祿◎否之匪人不利君子貞大往小來，則是天地不交而萬物不通也，上下不交而天下无邦也，內陰而外陽，內柔而外剛，內小人而外君子，小人道長，君子道消也◎物不可以終通，故受之以否</span>◎言治否之理也。

初六，拔茅茹，以其彙，貞吉，亨。<small class="text-info">拔茅貞吉，志在君也。</small>

六二，包承，小人吉，大人否亨。<small class="text-info">大人否亨，不亂群也。</small>

六三，包羞。<small class="text-info">包羞，位不當也。</small>

九四，有命，无咎，疇離祉。<small class="text-info">有命无咎，志行也。</small>

> 疇，讀為儔，眾也。離，依附。

九五，休否，大人吉，其亡其亡，繫于苞桑。<small class="text-info">大人之吉，位正當也。</small>

上九，傾否，先否後喜。<small class="text-info">否終則傾，何可長也。</small>

#### 同人于野，亨，利涉大川，利君子貞。{#13}

> <span class="text-info">天與火，同人，君子以類族辨物◎同人，柔得位得中而應乎乾，曰同人，同人曰「同人于野亨利涉大川」，乾行也，文明以健，中正而應，君子正也，唯君子為能通天下之志◎物不可以終否，故受之以同人</span><span class="text-danger">◎大有眾也，同人親也</span>◎同人，和同於人也。野，野人也。

初九，同人于門，无咎。<small class="text-info">出門同人，又誰咎也。</small>

六二，同人于宗，吝。<small class="text-info">同人于宗，吝道也。</small>

> 宗，同宗之人。

九三，伏戎于莽，升其高陵，三歲不興。<small class="text-info">伏戎于莽，敵剛也，三歲不興，安行也。</small>

> 此不能和同之敗也。

九四，乘其墉，弗克，攻吉。<small class="text-info">乘其墉，義弗克也，其吉，則困而反則也。</small>

> 墉，城垣也。克，勝也。

九五，同人，先號咷而後笑，大師克相遇。<small class="text-info">同人之先，以中直也，大師相遇，言相克也。</small>

> 此得勝會師也。

上九，同人于郊，无悔。<small class="text-info">同人于郊，志未得也。</small>

#### 大有，元亨。{#14}

> <span class="text-info">火在天上，大有，君子以遏惡揚善、順天休命◎大有，柔得尊位，大中而上下應之，曰大有，其德剛健而文明，應乎天而時行，是以元亨◎與人同者物必歸焉，故受之以大有。</span>

初九，无交害，匪咎，艱則无咎。<small class="text-info">大有初九，无交害也。</small>

> 艱，限也，意謂止其交害也。

九二，大車以載，有攸往，无咎。<small class="text-info">大車以載，積中不敗也。</small>

九三，公用亨于天子，小人弗克。<small class="text-info">公用亨于天子，小人害也。</small>

> 用亨，經內均讀為「用享」。

九四，匪其彭，无咎。<small class="text-info">匪其彭无咎，明辯晢也。</small>

> 彭，鼓聲也，匪其彭，不事聲張也。

六五，厥孚交如威如，吉。<small class="text-info">厥孚交如，信以發志也，威如之吉，易而无備也。</small>

> 厥孚，即有孚，見[家人](#37)上九。交，讀為皎，昭然貌。

上九，自天祐之，吉，无不利。<small class="text-info">大有上吉，自天祐也。</small>

#### 謙，亨，君子有終。{#15}

> <span class="text-info">地中有山，謙，君子以裒多益寡、稱物平施◎謙亨，天道下濟而光明，地道卑而上行，天道虧盈而益謙，地道變盈而流謙，鬼神害盈而福謙，人道惡盈而好謙，謙尊而光，卑而不可踰，君子之終也◎有大者不可以盈，故受之以謙</span><span class="text-danger">◎謙輕而豫怠也。</span>

初六，謙謙君子，用涉大川，吉。<small class="text-info">謙謙君子，卑以自牧也。</small>

六二，鳴謙，貞吉。<small class="text-info">鳴謙貞吉，中心得也。</small>

> 鳴，言辭也。

九三，勞謙，君子有終，吉。<small class="text-info">勞謙君子，萬民服也。</small>

六四，无不利，撝謙。<small class="text-info">无不利撝謙，不違則也。</small>

> 撝，揮散也，溥散其謙，無所而不用謙。

六五，不富以其鄰，利用侵伐，无不利。<small class="text-info">利用侵伐，征不服也。</small>

上六，鳴謙，利用行師，征邑國。<small class="text-info">鳴謙，志未得也，可用行師，征邑國也。</small>

#### 豫，利建侯行師。{#16}

> <span class="text-info">雷出地奮，豫，先王以作樂崇德，殷薦之上帝，以配祖考◎豫，剛應而志行，順以動，豫，豫順以動故天地如之，而況建侯行師乎，天地以順動故日月不過而四時不忒，聖人以順動則刑罰清而民服，豫之時義大矣哉◎有大而能謙必豫，故受之以豫</span>◎豫，象之大者，引伸之凡大皆稱豫。

初六，鳴豫，凶。<small class="text-info">初六鳴豫，志窮凶也。</small>

六二，介于石，不終日，貞吉。<small class="text-info">不終日貞吉，以中正也。</small>

> 介，介特也。于，如也。貞，改正。

六三，盱豫悔，遲有悔。<small class="text-info">盱豫有悔，位不當也。</small>

> 盱，楚簡作可，漢簡作歌，本字當作謌。有，楚簡作又，是。

九四，由豫，大有得，勿疑朋盍簪。<small class="text-info">由豫大有得，志大行也。</small>

> 由，讀為尤，責罪。盍簪，讀為嗑譖，多言而譖己。

六五，貞疾，恆不死。<small class="text-info">六五貞疾，乘剛也，恆不死，中未亡也。</small>

> 貞疾，正其疾。

上六，冥豫，成，有渝无咎。<small class="text-info">冥豫在上，何可長也。</small>

> 冥，引申為消除。成，即有成，與无成相反。

#### 隨，元亨，利貞，无咎。{#17}

> <span class="text-info">澤中有雷，隨，君子以嚮晦入宴息◎隨，剛來而下柔，動而說，隨，大亨貞无咎，而天下隨時，隨時之義大矣哉◎豫必有隨，故受之以隨</span><span class="text-danger">◎隨无故<q>事也，无故即宴息</q>也，蠱則飭也。</span>

初九，官有渝，貞吉，出門交有功。<small class="text-info">官有渝，從正吉也，出門交有功，不失也。</small>

六二，係小子，失丈夫。<small class="text-info">係小子，弗兼與也。</small>

> 係，係屬、隨從。

六三，係丈夫，失小子，隨有求得，利居貞。<small class="text-info">係丈夫，志舍下也。</small>

> 隨有求得，楚簡作「隨，求有得」。

九四，隨有獲，貞凶，有孚，在道以明，何咎。<small class="text-info">隨有獲，其義凶也，有孚在道，明功也。</small>

九五，孚于嘉，吉。<small class="text-info">孚于嘉吉，位正中也。</small>

上六，拘係之，乃從維之，王用亨于西山。<small class="text-info">拘係之，上窮也。</small>

> 楚簡作「係而拘之，縱乃攜之，王用享于西山」，指文王遭拘禁，被釋而有離心，於西山興師反商。

#### 蠱，元亨，利涉大川，先甲三日，後甲三日。{#18}

> <span class="text-info">山下有風，蠱，君子以振民育德◎蠱，剛上而柔下，巽而止，蠱，蠱元亨而天下治也，利涉大川，往有事也，先甲三日後甲三日，終則有始，天行也◎以喜隨人者必有事，故受之以蠱，蠱者事也</span>◎言拯弊救亂也。甲，疑讀為狎，習也。

初六，幹父之蠱，有子考，无咎，厲終吉。<small class="text-info">幹父之蠱，意承考也。</small>

> 幹，匡正。考，當讀為巧。

九二，幹母之蠱，不可貞。<small class="text-info">幹母之蠱，得中道也。</small>

九三，幹父之蠱，小有悔，无大咎。<small class="text-info">幹父之蠱，終无咎也。</small>

六四，裕父之蠱，往見吝。<small class="text-info">裕父之蠱，往未得也。</small>

六五，幹父之蠱，用譽。<small class="text-info">幹父用譽，承以德也。</small>

上九，不事王侯，高尚其事。<small class="text-info">不事王侯，志可則也。</small>

#### 臨，元亨，利貞，至于八月有凶。{#19}

> <span class="text-info">澤上有地，臨，君子以教思无窮、容保民无疆◎臨，剛浸而長，說而順，剛中而應，大亨以正，天之道也，至于八月有凶，消不久也◎有事而後可大，故受之以臨，臨者大也</span><span class="text-danger">◎臨觀之義，或與或求</span>◎臨，監臨，居上治民也。八月，仲秋之月，禮記「是月也，殺氣浸盛，陽氣日衰」。

初九，咸臨，貞吉。<small class="text-info">咸臨貞吉，志行正也。</small>

> 咸，帛書作禁，法也、則也。

九二，咸臨，吉，无不利。<small class="text-info">咸臨吉无不利，未順命也。</small>

六三，甘臨，无攸利，既憂之，无咎。<small class="text-info">甘臨，位不當也，既憂之，咎不長也。</small>

六四，至臨，无咎。<small class="text-info">至臨无咎，位當也。</small>

> 至，猶善也，見小雅節南山。

六五，知臨，大君之宜，吉。<small class="text-info">大君之宜，行中之謂也。</small>

上六，敦臨，吉，无咎。<small class="text-info">敦臨之吉，志在內也。</small>

#### 觀盥而不薦，有孚顒若。{#20}

> <span class="text-info">風行地上，觀，先王以省方觀民設教◎大觀在上，順而巽，中正以觀天下，觀盥而不薦有孚顒若，下觀而化也，觀天之神道而四時不忒，聖人以神道設教而天下服矣◎物大然後可觀，故受之以觀</span>◎言觀仰之事也，帛書衷篇「觀之卦，盈而能乎」。盥，灌也，以鬱鬯灌地降神，論語八佾「禘自既灌而往者，吾不欲觀之矣」，馬融「祭祀之盛，莫過初盥降神」。薦，獻饗。

初六，童觀，小人无咎，君子吝。<small class="text-info">初六童觀，小人道也。</small>

六二，闚觀，利女貞。<small class="text-info">闚觀女貞，亦可醜也。</small>

六三，觀我生，進退。<small class="text-info">觀我生進退，未失道也。</small>

六四，觀國之光，利用賓于王。<small class="text-info">觀國之光，尚賓也。</small>

九五，觀我生，君子无咎。<small class="text-info">觀我生，觀民也。</small>

上九，觀其生，君子无咎。<small class="text-info">觀其生，志未平也。</small>

#### 噬嗑，亨，利用獄。{#21}

> <span class="text-info">雷電，噬嗑，先王以明罰勑法◎頤中有物，曰噬嗑，噬嗑而亨，剛柔分動而明，雷電合而章，柔得中而上行，雖不當位，利用獄也◎可觀而後有所合，故受之以噬嗑，嗑者合也</span><span class="text-danger">◎噬嗑食也，賁无色也<q>无通橆，豐也</q></span>◎卦畫象形，頤中有物，言施用刑法也。

初九，屨校滅趾，无咎。<small class="text-info">屨校滅趾，不行也。</small>

> 屨，足。校，刑具。滅，傷。

六二，噬膚，滅鼻，无咎。<small class="text-info">噬膚滅鼻，乘剛也。</small>

六三，噬腊肉，遇毒，小吝，无咎。<small class="text-info">遇毒，位不當也。</small>

九四，噬乾胏，得金矢，利艱貞，吉。<small class="text-info">利艱貞吉，未光也。</small>

> 馬融「有骨之謂胏」。艱，讀為限。

六五，噬乾肉，得黃金，貞厲无咎。<small class="text-info">貞厲无咎，得當也。</small>

上九，何校滅耳，凶。<small class="text-info">何校滅耳，聦不明也。</small>

> 何，荷也。

#### 賁，亨，小利有攸往。{#22}

> <span class="text-info">山下有火，賁，君子以明庶政、无敢折獄◎賁亨，柔來而文剛，故亨，分剛上而文柔，故小利有攸往，天文也，文明以止，人文也，觀乎天文以察時變，觀乎人文以化成天下◎物不可以苟合而已，故受之以賁，賁者飾也</span>◎言文飾修美也。

初九，賁其趾，舍車而徒。<small class="text-info">舍車而徒，義弗乘也。</small>

> 趾，喻行走。舍車而徒，以示敬也。

六二，賁其須。<small class="text-info">賁其須，與上興也。</small>

九三，賁如濡如，永貞吉。<small class="text-info">永貞之吉，終莫之陵也。</small>

> 濡如，澤及他人也。

六四，賁如皤如，白馬翰如，匪寇婚媾。<small class="text-info">六四當位，疑也，匪寇婚媾，終无尤也。</small>

> 皤，白也。翰，高也。

六五，賁于丘園，束帛戔戔，吝，終吉。<small class="text-info">六五之吉，有喜也。</small>

> 賁，於此有耕作意，帛書作蘩，繁殖也。戔戔，少貌。

上九，白賁，无咎。<small class="text-info">白賁无咎，上得志也。</small>

#### 剝，不利有攸往。{#23}

> <span class="text-info">山附於地，剝，上以厚下安宅◎剝，剝也，柔變剛也，不利有攸往，小人長也，順而止之，觀象也，君子尚消息盈虛，天行也◎致飾然後亨則盡矣，故受之以剝，剝者剝也</span><span class="text-danger">◎剝爛<q>落也</q>也，復反也</span>◎不利有攸往，往則陽窮也。

初六，剝牀以足，蔑貞，凶。<small class="text-info">剝牀以足，以滅下也。</small>

> 卦內牀字疑讀為壯，壯即陽也，古籍中牀壯通用，如大壯，帛書衷篇即作牀。蔑，通滅。貞亦陽也。

六二，剝牀以辨，蔑貞，凶。<small class="text-info">剝牀以辨，未有與也。</small>

> 辨，通半，中也，下卦之中也，莊子大宗師「夜半有力者負之而走」，即夜中也。

六三，剝之，无咎。<small class="text-info">剝之无咎，失上下也。</small>

> 之，釋文無，馬王堆本亦無，當為衍文。

六四，剝牀以膚，凶。<small class="text-info">剝牀以膚，切近災也。</small>

> 上卦亦外卦，膚，表也。

六五，貫魚，以宮人寵，无不利。<small class="text-info">以宮人寵，終无尤也。</small>

> 貫魚，五陰形似也。宮人，女性。

上九，碩果不食，君子得輿，小人剝廬。<small class="text-info">君子得輿，民所載也，小人剝廬，終不可用也。</small>

> 食，蝕也，不食即僅存也。

#### 復，亨，出入无疾，朋來无咎，反復其道，七日來復，利有攸往。{#24}

> <span class="text-info">雷在地中，復，先王以至日閉關，商旅不行，后不省方◎復亨，剛反動而以順行，是以出入无疾朋來无咎，反復其道七日來復，天行也，利有攸往，剛長也，復，其見天地之心乎◎物不可以終盡，剝窮上反下，故受之以復。</span>

初九，不遠復，无祇悔，元吉。<small class="text-info">不遠之復，以脩身也。</small>

> 祇，病也。

六二，休復，吉。<small class="text-info">休復之吉，以下仁也。</small>

六三，頻復，厲无咎。<small class="text-info">頻復之厲，義无咎也。</small>

> 頻，讀為擯，棄也。

六四，中行，獨復。<small class="text-info">中行獨復，以從道也。</small>

六五，敦復，无悔。<small class="text-info">敦復无悔，中以自考也。</small>

上六，迷復，凶，有災眚，用行師，終有大敗，以其國，君凶，至于十年不克征。<small class="text-info">迷復之凶，反君道也。</small>

> 以，治也，治其國則君凶也。

#### 无妄，元亨，利貞，其匪正有眚，不利有攸往。{#25}

> <span class="text-info">天下雷行，物與无妄，先王以茂對時育萬物◎无妄，剛自外來而為主於內，動而健，剛中而應，大亨以正，天之命也，其匪正有眚不利有攸往，无妄之往，何之矣，天命不祐，行矣哉◎復則不妄矣，故受之以无妄</span><span class="text-danger">◎大畜時也，无妄災也</span>◎其，若也。

初九，无妄，往吉。<small class="text-info">无妄之往，得志也。</small>

六二，不耕穫，不菑畬，則利有攸往。<small class="text-info">不耕穫，未富也。</small>

> 菑，發新田。畬，熟地。

六三，无妄之災，或繫之牛，行人之得，邑人之災。<small class="text-info">行人得牛，邑人災也。</small>

九四，可貞，无咎。<small class="text-info">可貞无咎，固有之也。</small>

九五，无妄之疾，勿藥有喜。<small class="text-info">无妄之藥，不可試也。</small>

> 喜，楚簡作菜，疑喜讀為譆，菜讀為㥒，皆痛、恨義，即有勿藥之痛。

上九，无妄，行有眚，无攸利。<small class="text-info">无妄之行，窮之災也。</small>

#### 大畜，利貞，不家食，吉，利涉大川。{#26}

> <span class="text-info">天在山中，大畜，君子以多識前言往行以畜其德◎大畜，剛健篤實，煇光日新其德，剛上而尚賢，能止健，大正也，不家食吉，養賢也，利涉大川，應乎天也◎有无妄然後可畜，故受之以大畜</span>◎家，同稼。

初九，有厲，利己。<small class="text-info">有厲利己，不犯災也。</small>

九二，輿說輹。<small class="text-info">輿說輹，中无尤也。</small>

九三，良馬逐，利艱貞，曰閑輿衛，利有攸往。<small class="text-info">利有攸往，上合志也。</small>

> 曰閑輿衛，帛書昭力篇作「闌輿之衛」，意謂偃武修文也。

六四，童牛之牿，元吉。<small class="text-info">六四元吉，有喜也。</small>

> 童，脫也。牿，牛馬牢也。

六五，豶豕之牙，吉。<small class="text-info">六五之吉，有慶也。</small>

> 豶，帛書作哭，帛書昭力篇「夫豕之牙，成而不用者也，又笑而後見，言國修兵不戰而威之謂也」，哭、笑皆「文」字之訛。

上九，何天之衢，亨。<small class="text-info">何天之衢，道大行也。</small>

> 何，荷也。衢，依楚簡讀為休，訓為慶，吉慶、福祿、福佑也。

#### 頤，貞吉，觀頤，自求口實。{#27}

> <span class="text-info">山下有雷，頤，君子以慎言語、節飲食◎頤貞吉，養正則吉也，觀頤，觀其所養也，自求口實，觀其自養也，天地養萬物，聖人養賢以及萬民，頤之時大矣哉◎物畜然後可養，故受之以頤，頤者養也</span><span class="text-danger">◎大過顛<q>殞也</q>也，頤養正也。</span>

初九，舍爾靈龜，觀我朵頤，凶。<small class="text-info">觀我朵頤，亦不足貴也。</small>

六二，顛頤，拂經，于丘頤，征凶。<small class="text-info">六二征凶，行失類也。</small>

> 顛，可讀為慎。拂，當讀為弗。丘，楚簡帛書均作北，讀為背。

六三，拂頤，貞凶，十年勿用，无攸利。<small class="text-info">十年勿用，道大悖也。</small>

六四，顛頤，吉，虎視眈眈，其欲逐逐，无咎。<small class="text-info">顛頤之吉，上施光也。</small>

六五，拂經，居貞，吉，不可涉大川。<small class="text-info">居貞之吉，順以從上也。</small>

上九，由頤，厲吉，利涉大川。<small class="text-info">由頤厲吉，大有慶也。</small>

#### 大過，棟橈，利有攸往，亨。{#28}

> <span class="text-info">澤滅木，大過，君子以獨立不懼、遯世无悶◎大過，大者過也，棟橈，本末弱也，剛過而中，巽而說行，利有攸往乃亨，大過之時大矣哉◎不養則不可動，故受之以大過</span>◎大過，埋葬之象也，上兑為澤，墓穴也，下巽為木，棺椁也。

初六，藉用白茅，无咎。<small class="text-info">藉用白茅，柔在下也。</small>

九二，枯楊生稊，老夫得其女妻，无不利。<small class="text-info">老夫女妻，過以相與也。</small>

九三，棟橈，凶。<small class="text-info">棟橈之凶，不可以有輔也。</small>

九四，棟隆，吉，有它吝。<small class="text-info">棟隆之吉，不橈乎下也。</small>

> 它，蛇本字，引申為邪、不正，玉篇「它，非也」，法言「君子正而不它」。

九五，枯楊生華，老婦得其士夫，无咎无譽。<small class="text-info">枯楊生華，何可久也，老婦士夫，亦可醜也。</small>

上六，過涉滅頂，凶，无咎。<small class="text-info">過涉之凶，不可咎也。</small>

#### 習坎，有孚，維心亨，行有尚。{#29}

> <span class="text-info">水洊至，習坎，君子以常德行、習教事◎習坎，重險也，水流而不盈，行險而不失其信，維心亨，乃以剛中也，行有尚，往有功也，天險不可升也，地險山川丘陵也，王公設險以守其國，險之時用大矣哉◎物不可以終過，故受之以坎，坎者陷也</span><span class="text-danger">◎離上而坎下也</span>◎坎，陷也，引申為險，帛書作贛，可通。

初六，習坎，入于坎窞，凶。<small class="text-info">習坎入坎，失道凶也。</small>

九二，坎有險，求小得。<small class="text-info">求小得，未出中也。</small>

六三，來之坎坎，險且枕，入于坎窞，勿用。<small class="text-info">來之坎坎，終无功也。</small>

> 九二「坎有險」，帛書險作訦，此枕亦作訦，即險也。

六四，樽酒，簋貳，用缶，納約自牖，終无咎。<small class="text-info">樽酒簋貳，剛柔際也。</small>

> 此文王拘於羑里之事也。樽酒簋貳用缶，陋也。自，於。牖，即羑里。

九五，坎不盈，祇既平，无咎。<small class="text-info">坎不盈，中未大也。</small>

> 祇，帛書作堤，滯也。

上六，係用徽纆，寘于叢棘，三歲不得，凶。<small class="text-info">上六失道，凶三歲也。</small>

> 此亦文王之事也。叢棘，鄭眾、鄭玄以為周禮秋官朝士之左右「九棘」，禮記王制稱為棘木，即王之外朝，司寇審理獄訟之處，而文王「拘之於牖里之庫」，庫亦獄也，同為外朝九棘。又文王七年而後免，故曰三歲不得。

#### 離，利貞，亨，畜牝牛，吉。{#30}

> <span class="text-info">明兩作，離，大人以繼明照于四方◎離，麗也，日月麗乎天，百穀草木麗乎土，重明以麗乎正，乃化成天下，柔麗乎中正故亨，是以畜牝牛吉也◎陷必有所麗，故受之以離，離者麗也</span>◎離，明也、麗也。畜，順從、馴服貌。

初九，履錯然，敬之，无咎。<small class="text-info">履錯之敬，以辟咎也。</small>

> 錯，帛書作昔，當讀為踖，謹慎貌，見[履](#10)初九。

六二，黃離，元吉。<small class="text-info">黃離元吉，得中道也。</small>

九三，日昃之離，不鼓缶而歌則大耊之嗟，凶。<small class="text-info">日昃之離，何可久也。</small>

九四，突如其來如，焚如，死如，棄如。<small class="text-info">突如其來如，无所容也。</small>

六五，出涕沱若，戚嗟若，吉。<small class="text-info">六五之吉，離王公也。</small>

上九，王用出征，有嘉折首，獲匪其醜，无咎。<small class="text-info">王用出征，以正邦也。</small>

#### 咸，亨，利貞，取女吉。{#31}

> <span class="text-info">山上有澤，咸，君子以虛受人◎咸，感也，柔上而剛下，二氣感應以相與，止而說，男下女，是以亨利貞取女吉也，天地感而萬物化生，聖人感人心而天下和平，觀其所感而天地萬物之情可見矣◎有天地然後有萬物，有萬物然後有男女，有男女然後有夫婦，有夫婦然後有父子，有父子然後有君臣，有君臣然後有上下，有上下然後禮義有所錯</span><span class="text-danger">◎咸速也，恆久也</span>◎言男女交感也。

初六，咸其拇。<small class="text-info">咸其拇，志在外也。</small>

六二，咸其腓，凶，居吉。<small class="text-info">雖凶居吉，順不害也。</small>

九三，咸其股，執其隨，往吝。<small class="text-info">咸其股，亦不處也，志在隨人，所執下也。</small>

> 股，楚簡帛書作腓。隨，依俞樾作骽，即腿。往，楚簡帛書均無。

九四，貞吉，悔亡，憧憧往來，朋從爾思。<small class="text-info">貞吉悔亡，未感害也，憧憧往來，未光大也。</small>

九五，咸其脢，无悔。<small class="text-info">咸其脢，志末也。</small>

> 脢，帛書作股，實為脰，王弼注「脢者，心之上，口之下」。

上六，咸其輔、頰、舌。<small class="text-info">咸其輔頰舌，滕口說也。</small>

#### 恆，亨，无咎，利貞，利有攸往。{#32}

> <span class="text-info">雷風，恆，君子以立不易方◎恆，久也，剛上而柔下，雷風相與，巽而動，剛柔皆應，恆，恆亨无咎利貞，久於其道也，天地之道恆久而不已也，利有攸往，終則有始也，日月得天而能久照，四時變化而能久成，聖人久於其道而天下化成，觀其所恆而天地萬物之情可見矣◎夫婦之道不可以不久也，故受之以恆，恆者久也</span>◎言恆久之道，帛書衷篇「恆言不已」。利有攸往，楚簡無。

初六，浚恆，貞凶，无攸利。<small class="text-info">浚恆之凶，始求深也。</small>

> 浚，楚簡作㪫，即濬，帛書作敻，遠也，均有背離意。

九二，悔亡。<small class="text-info">九二悔亡，能久中也。</small>

九三，不恆其德，或承之羞，貞吝。<small class="text-info">不恆其德，无所容也。</small>

九四，田无禽。<small class="text-info">久非其位，安得禽也。</small>

六五，恆其德，貞，婦人吉，夫子凶。<small class="text-info">婦人貞吉，從一而終也，夫子制義，從婦凶也。</small>

上六，振恆，凶。<small class="text-info">振恆在上，大无功也。</small>

> 振，動也、搖也。

#### 遯，亨，小利貞。{#33}

> <span class="text-info">天下有山，遯，君子以遠小人、不惡而嚴◎遯亨，遯而亨也，剛當位而應，與時行也，小利貞，浸而長也，遯之時義大矣哉◎物不可以久居其所，故受之以遯，遯者退也</span><span class="text-danger">◎大壯則止，遯則退也。</span>

初六，遯尾，厲，勿用有攸往。<small class="text-info">遯尾之厲，不往何災也。</small>

> 尾，後也。

六二，執之用黃牛之革，莫之勝說。<small class="text-info">執用黃牛，固志也。</small>

> 說，讀為脫，即遯也，楚簡讀為遂，訓為亡，義同。

九三，係遯，有疾厲，畜臣妾吉。<small class="text-info">係遯之厲，有疾憊也，畜臣妾吉，不可大事也。</small>

> 係遯，即六二「用黃牛之革執之」也。

九四，好遯，君子吉，小人否。<small class="text-info">君子好遯，小人否也。</small>

九五，嘉遯，貞吉。<small class="text-info">嘉遯貞吉，以正志也。</small>

上九，肥遯，无不利。<small class="text-info">肥遯无不利，无所疑也。</small>

> 肥，同飛。

#### 大壯，利貞。{#34}

> <span class="text-info">雷在天上，大壯，君子以非禮弗履◎大壯，大者壯也，剛以動，故壯，大壯利貞，大者正也，正大而天地之情可見矣◎物不可以終遯，故受之以大壯。</span>

初九，壯于趾，征凶，有孚。<small class="text-info">壯于趾，其孚窮也。</small>

> 孚，帛書、阜陽竹簡作復，遏也。

九二，貞吉。<small class="text-info">九二貞吉，以中也。</small>

九三，小人用壯，君子用罔，貞厲，羝羊觸藩，羸其角。<small class="text-info">小人用壯，君子罔也。</small>

> 罔，帛書作亡，此處意為逃亡。觸藩，帛書衷篇「剛之失也，動而不能靜者也」，見[姤](#44)上九。

九四，貞吉，悔亡，藩決不羸，壯于大輿之輹。<small class="text-info">藩決不羸，尚往也。</small>

六五，喪羊于易，无悔。<small class="text-info">喪羊于易，位不當也。</small>

> 无悔，疑應為有悔。[旅](#56)上九「喪牛于易，凶」，顧頡剛以為商祖王亥喪牛羊於有易後被殺之事。

上六，羝羊觸藩，不能退，不能遂，无攸利，艱則吉。<small class="text-info">不能退不能遂，不詳也，艱則吉，咎不長也。</small>

> 艱，帛書作根，疑讀為限。

#### 晉，康侯用錫馬蕃庶，晝日三接。{#35}

> <span class="text-info">明出地上，晉，君子以自昭明德◎晉，進也，明出地上，順而麗乎大明，柔進而上行，是以康侯用錫馬蕃庶晝日三接也◎物不可以終壯，故受之以晉，晉者進也</span><span class="text-danger">◎晉晝也，明夷誅也</span>◎康侯，顧頡剛以為衛康叔。錫，同惕，訓為止息。帛書二三子篇「此言聖王之安世者也」。

初六，晉如摧如，貞吉，罔孚，裕无咎。<small class="text-info">晉如摧如，獨行正也，裕无咎，未受命也。</small>

> 摧，廣雅「折也」，帛書作浚，屈伏也。

六二，晉如愁如，貞吉，受茲介福，于其王母。<small class="text-info">受茲介福，以中正也。</small>

> 愁，當讀為愀，恭謹貌，帛書衷篇「所以辟怒也」。母，疑讀為謀或誨。

六三，眾允，悔亡。<small class="text-info">眾允之志，上行也。</small>

九四，晉如鼫鼠，貞厲。<small class="text-info">鼫鼠貞厲，位不當也。</small>

六五，悔亡，失得，勿恤，往吉，无不利。<small class="text-info">失得勿恤，往有慶也。</small>

> 恤，停止。

上九，晉其角，維用伐邑，厲吉，无咎，貞吝。<small class="text-info">維用伐邑，道未光也。</small>

#### 明夷，利艱貞。{#36}

> <span class="text-info">明入地中，明夷，君子以蒞眾、用晦而明◎明入地中，明夷，內文明而外柔順，以蒙大難，文王以之，利艱貞，晦其明也，內難而能正其志，箕子以之◎進必有所傷，故受之以明夷，夷者傷也</span>◎初二言文王蒙難，三四言文王謀商，五言箕子，六言紂王。艱，當讀為限。

初九，明夷于飛，垂其翼，君子于行，三日不食，有攸往，主人有言。<small class="text-info">君子于行，義不食也。</small>

六二，明夷，夷于左股，用拯馬壯，吉。<small class="text-info">六二之吉，順以則也。</small>

九三，明夷于南狩，得其大首，不可疾，貞。<small class="text-info">南狩之志，乃大得也。</small>

六四，入于左腹，獲明夷之心，于出門庭。<small class="text-info">入于左腹，獲心意也。</small>

六五，箕子之明夷，利貞。<small class="text-info">箕子之貞，明不可息也。</small>

上六，不明，晦，初登于天，後入于地。<small class="text-info">初登于天，照四國也，後入于地，失則也。</small>

#### 家人，利女貞。{#37}

> <span class="text-info">風自火出，家人，君子以言有物而行有恆◎家人，女正位乎內，男正位乎外，男女正，天地之大義也，家人有嚴君焉，父母之謂也，父父子子、兄兄弟弟、夫夫婦婦而家道正，正家而天下定矣◎傷於外者必反於家，故受之以家人</span><span class="text-danger">◎睽外也，家人內也。</span>

初九，閑有家，悔亡。<small class="text-info">閑有家，志未變也。</small>

> 閑，闌也、防也。有，讀為於。

六二，无攸遂，在中饋，貞吉。<small class="text-info">六二之吉，順以巽也。</small>

九三，家人嗃嗃，悔厲，吉，婦子嘻嘻，終吝。<small class="text-info">家人嗃嗃，未失也，婦子嘻嘻，失家節也。</small>

> 嗃嗃，馬融「悦樂自得貌」。婦子嘻嘻，婦與子亂也。

六四，富家，大吉。<small class="text-info">富家大吉，順在位也。</small>

九五，王假有家，勿恤，吉。<small class="text-info">王假有家，交相愛也。</small>

> 假，至也。有，讀為於。

上九，有孚威如，終吉。<small class="text-info">威如之吉，反身之謂也。</small>

#### 睽，小事吉。{#38}

> <span class="text-info">上火下澤，睽，君子以同而異◎睽，火動而上，澤動而下，二女同居，其志不同行，說而麗乎明，柔進而上行，得中而應乎剛，是以小事吉，天地睽而其事同也，男女睽而其志通也，萬物睽而其事類也，睽之時用大矣哉◎家道窮必乖，故受之以睽，睽者乖也。</span>

初九，悔亡，喪馬，勿逐，自復，見惡人，无咎。<small class="text-info">見惡人，以辟咎也。</small>

九二，遇主于巷，无咎。<small class="text-info">遇主于巷，未失道也。</small>

六三，見輿曳，其牛掣，其人天且劓，无初有終。<small class="text-info">見輿曳，位不當也，无初有終，遇剛也。</small>

> 掣，牽也。剠額為天，截鼻為劓。

九四，睽孤，遇元夫，交孚，厲无咎。<small class="text-info">交孚无咎，志行也。</small>

六五，悔亡，厥宗噬膚，往何咎。<small class="text-info">厥宗噬膚，往有慶也。</small>

> 厥，帛書作登，楚簡作陞，本字當作升，與厥之古文「氒」形近而訛，高亨謂「登其祖廟吃肉」。

上九，睽孤，見豕負塗，載鬼一車，先張之弧，後說之弧，匪寇婚媾，往遇雨則吉。<small class="text-info">遇雨之吉，群疑亡也。</small>

> 鬼，屈萬里以為鬼方之人。後說之弧，釋文作壺，帛書作「挩之壺」，則作壺是。見豕負塗、載鬼一車則張之弧，所謂睽也，匪寇婚媾則說之壺，所謂合也。

#### 蹇，利西南，不利東北，利見大人，貞吉。{#39}

> <span class="text-info">山上有水，蹇，君子以反身脩德◎蹇，難也，險在前也，見險而能止，知矣哉，蹇利西南，往得中也，不利東北，其道窮也，利見大人，往有功也，當位貞吉，以正邦也，蹇之時用大矣哉◎乖必有難，故受之以蹇，蹇者難也</span><span class="text-danger">◎解緩也，蹇難也</span>◎據後天八卦卦氣說，西南陽氣衰退而陰氣漸長，東北則反之，易扶陽抑陰，故以為蹇難。

初六，往蹇，來譽。<small class="text-info">往蹇來譽，宜待也。</small>

> 譽，帛書作輿，是。

六二，王臣蹇蹇，匪躬之故。<small class="text-info">王臣蹇蹇，終无尤也。</small>

九三，往蹇，來反。<small class="text-info">往蹇來反，內喜之也。</small>

> 反，變也。

六四，往蹇，來連。<small class="text-info">往蹇來連，當位實也。</small>

> 連，輦也。

九五，大蹇，朋來。<small class="text-info">大蹇朋來，以中節也。</small>

> 帛書二三子篇「此言聖君也，飭行以後民者，謂大蹇，遠人能至，謂朋來」。

上六，往蹇，來碩，吉，利見大人。<small class="text-info">往蹇來碩，志在內也，利見大人，以從貴也。</small>

#### 解，利西南，无所往，其來復吉，有攸往，夙吉。{#40}

> <span class="text-info">雷雨作，解，君子以赦過宥罪◎解，險以動，動而免乎險，解，解利西南，往得眾也，其來復吉，乃得中也，有攸往夙吉，往有功也，天地解而雷雨作，雷雨作而百果草木皆甲坼，解之時大矣哉◎物不可以終難，故受之以解，解者緩也</span>◎夙，楚簡帛書作宿，停留也。

初六，无咎。<small class="text-info">剛柔之際，義无咎也。</small>

九二，田獲三狐，得黃矢，貞吉。<small class="text-info">九二貞吉，得中道也。</small>

六三，負且乘，致寇至，貞吝。<small class="text-info">負且乘，亦可醜也，自我致戎，又誰咎也。</small>

> 繫辭「負也者，小人之事也，乘也者，君子之器也」。且，若、如。

九四，解而拇，朋至斯孚。<small class="text-info">解而拇，未當位也。</small>

> 而，楚簡帛書作其，可通。拇，讀為侮。斯，帛書作此。

六五，君子維有解，吉，有孚于小人。<small class="text-info">君子有解，小人退也。</small>

上六，公用射隼于高墉之上，獲之，无不利。<small class="text-info">公用射隼，以解悖也。</small>

#### 損，有孚，元吉，无咎，可貞，利有攸往，曷之用，二簋可用享。{#41}

> <span class="text-info">山下有澤，損，君子以懲忿窒欲◎損，損下益上，其道上行，損而有孚，元吉无咎可貞利有攸往，曷之用，二簋可用享，二簋應有時，損剛益柔有時，損益盈虛與時偕行◎緩必有所失，故受之以損</span><span class="text-danger">◎損益盛衰之始也</span>◎曷之用，即用曷。二簋，即[坎](#29)六四之簋二，喻微薄也。享，獻也。

初九，已事遄，往无咎，酌損之。<small class="text-info">已事遄往，尚合志也。</small>

> 已，虞翻讀為祀，祀事於毛詩中屢見。遄，帛書作端，正也。酌，飲酒。

九二，利貞，征凶，弗損益之。<small class="text-info">九二利貞，中以為志也。</small>

六三，三人行則損一人，一人行則得其友。<small class="text-info">一人行，三則疑也。</small>

六四，損其疾，使遄有喜，无咎。<small class="text-info">損其疾，亦可喜也。</small>

> 使，帛書作事，祭祀之事也。

六五，或益之十朋之龜，弗克違，元吉。<small class="text-info">六五元吉，自上祐也。</small>

上九，弗損益之，无咎，貞吉，利有攸往，得臣无家。<small class="text-info">弗損益之，大得志也。</small>

> 利，帛書無。臣，帛書作僕，義同。无家，即失家，古者大夫有家。

#### 益，利有攸往，利涉大川。{#42}

> <span class="text-info">風雷，益，君子以見善則遷、有過則改◎益，損上益下，民說无疆，自上下下，其道大光，利有攸往，中正有慶，利涉大川，木道乃行，益動而巽，日進无疆，天施地生，其益无方，凡益之道，與時偕行◎損而不已必益，故受之以益。</span>

初九，利用為大作，元吉，无咎。<small class="text-info">元吉无咎，下不厚事也。</small>

六二，或益之十朋之龜，弗克違，永貞吉，王用享于帝，吉。<small class="text-info">或益之，自外來也。</small>

> 用，以也，即以龜也。享，享祭。

六三，益之用凶事，无咎，有孚，中行，告公用圭。<small class="text-info">益用凶事，固有之也。</small>

> 禮記郊特牲「大夫執圭而使，所以示信也」。

六四，中行，告公從，利用為依遷國。<small class="text-info">告公從，以益志也。</small>

> 依，讀為哀，即凶事也，帛書作家，讀為假，病也。國，原當為邦，避高祖諱也。

九五，有孚惠心，勿問，元吉，有孚，惠我德。<small class="text-info">有孚惠心，勿問之矣，惠我德，大得志也。</small>

> 惠心，即惠於心，惠者仁愛也。問，讀為聞。

上九，莫益之，或擊之，立心勿恆，凶。<small class="text-info">莫益之，偏辭也，或擊之，自外來也。</small>

> 立心，即位與心。

#### 夬，揚于王庭，孚號有厲，告自邑，不利即戎，利有攸往。{#43}

> <span class="text-info">澤上於天，夬，君子以施祿及下、居德則忌◎夬，決也，剛決柔也，健而說，決而和，揚于王庭，柔乘五剛也，孚號有厲，其危乃光也，告自邑不利即戎，所尚乃窮也，利有攸往，剛長乃終也◎益而不已必決，故受之以夬，夬者決也</span><span class="text-danger">◎姤遇也，柔遇剛也，夬決也，剛決柔也，君子道長，小人道憂也</span>◎夬，即「缺」本字，殘也。號，遞之訛，說文「遞，更易也」，孚遞即失信也。即，帛書作節，即戎即止戰也。

初九，壯于前趾，往不勝，為咎。<small class="text-info">不勝而往，咎也。</small>

九二，惕號，莫夜，有戎，勿恤。<small class="text-info">有戎勿恤，得中道也。</small>

> 惕，楚簡作啼，是。夜，楚簡作譽，當是。恤，止息。

九三，壯于頄，有凶，君子夬夬，獨行，遇雨若濡，有慍，无咎。<small class="text-info">君子夬夬，終无咎也。</small>

> 頄，顴骨。夬夬，受傷貌。獨，疑讀為躅，謹慎貌。若，而。濡，遲滯、停留。慍，楚簡作礪，當讀為厲。

九四，臀无膚，其行次且，牽羊悔亡，聞言不信。<small class="text-info">其行次且，位不當也，聞言不信，聦不明也。</small>

> 无膚亦傷也。次且，即趑趄。牽，楚簡作喪，義同。聞，讀為昏。

九五，莧陸夬夬，中行，无咎。<small class="text-info">中行无咎，中未光也。</small>

上六，无號，終有凶。<small class="text-info">无號之凶，終不可長也。</small>

> 无號，不改也。

#### 姤，女壯，勿用取女。{#44}

> <span class="text-info">天下有風，姤，后以施命誥四方◎姤，遇也，柔遇剛也，勿用取女，不可與長也，天地相遇，品物咸章也，剛遇中正，天下大行也，姤之時義大矣哉◎決必有遇，故受之以姤，姤者遇也。</span>

初六，繫于金柅，貞吉，有攸往，見凶，羸豕孚蹢躅。<small class="text-info">繫于金柅，柔道牽也。</small>

> 柅，止車木。羸，縲也。孚，誠也。蹢躅，不進貌。

九二，包有魚，无咎，不利賓。<small class="text-info">包有魚，義不及賓也。</small>

> 包，讀為䍖或罦，網也。賓，疑讀為擯。

九三，臀无膚，其行次且，厲，无大咎。<small class="text-info">其行次且，行未牽也。</small>

九四，包无魚，起凶。<small class="text-info">无魚之凶，遠民也。</small>

> 起，帛書作正，楚簡作已，征也。

九五，以杞包瓜，含章，有隕自天。<small class="text-info">九五含章，中正也，有隕自天，志不舍命也。</small>

> 杞，杞柳之筐也。隕，當讀為愪，楚簡作憂，義同。

上九，姤其角，吝，无咎。<small class="text-info">姤其角，上窮吝也。</small>

> 姤，讀為遘，遇也，帛書衷篇「是故鍵之炕龍，壯之觸蕃，句之離角，鼎之折足，酆之虛盈，五繇者，剛之失也，動而不能靜者也」，離即遇也，角，剛之象也。

#### 萃，亨，王假有廟，利見大人，亨，利貞，用大牲，吉，利有攸往。{#45}

> <span class="text-info">澤上於地，萃，君子以除戎器、戒不虞◎萃，聚也，順以說，剛中而應，故聚也，王假有廟，致孝享也，利見大人亨，聚以正也，用大牲吉利有攸往，順天命也，觀其所聚而天地萬物之情可見矣◎物相遇而後聚，故受之以萃，萃者聚也</span><span class="text-danger">◎萃聚而升不來也</span>◎亨，楚簡帛書及釋文別本均無，當為衍文。假，格也，格，至也。有，楚簡帛書作于。

初六，有孚不終，乃亂乃萃，若號，一握為笑，勿恤，往无咎。<small class="text-info">乃亂乃萃，其志亂也。</small>

> 乃，攸之訛也。號，遞也。握，當讀為屋。

六二，引吉，无咎，孚乃利用禴。<small class="text-info">引吉无咎，中未變也。</small>

> 引，長也。禴，殷之春祭也。

六三，萃如嗟如，无攸利，往无咎，小吝。<small class="text-info">往无咎，上巽也。</small>

九四，大吉，无咎。<small class="text-info">大吉无咎，位不當也。</small>

> 小吝，小則吝也，大吉，大則吉也。

九五，萃有位，无咎，匪孚，元永貞，悔亡。<small class="text-info">萃有位，志未光也。</small>

> 有位，有位之人。无咎，疑作為咎，見[夬](#43)初九。

上六，齎咨涕洟，无咎。<small class="text-info">齎咨涕洟，未安上也。</small>

> 齎咨，嗟嘆貌。自目曰涕，自鼻曰洟。

#### 升，元亨，用見大人，勿恤，南征吉。{#46}

> <span class="text-info">地中生木，升，君子以順德、積小以高大◎柔以時升，巽而順，剛中而應，是以大亨，用見大人勿恤，有慶也，南征吉，志行也◎聚而上者謂之升，故受之以升</span>◎用，釋文或作利，帛書即作利。

初六，允升，大吉。<small class="text-info">允升大吉，上合志也。</small>

> 允，信也、誠也。

九二，孚乃利用禴，无咎。<small class="text-info">九二之孚，有喜也。</small>

九三，升虛邑。<small class="text-info">升虛邑，无所疑也。</small>

六四，王用亨于岐山，吉，无咎。<small class="text-info">王用亨于岐山，順事也。</small>

> 亨，讀為享，獻享、祭祀。

六五，貞吉，升階。<small class="text-info">貞吉升階，大得志也。</small>

上六，冥升，利于不息之貞。<small class="text-info">冥升在上，消不富也。</small>

> 冥，暗也，引申為消除、結束，見[豫](#16)上六。不息之貞，即永貞也。

#### 困，亨，貞大人吉，无咎，有言不信。{#47}

> <span class="text-info">澤无水，困，君子以致命遂志◎困，剛揜也，險以說，困而不失其所亨，其唯君子乎？貞大人吉，以剛中也，有言不信，尚口乃窮也◎升而不已必困，故受之以困</span><span class="text-danger">◎井通而困相<q>通喪</q>遇也。</span>

初六，臀困于株木，入于幽谷，三歲不覿。<small class="text-info">入于幽谷，幽不明也。</small>

> 臀，帛書作辰，疑讀為身。覿，讀為遂，訓為通達。帛書後有「凶」字。

九二，困于酒食，朱紱方來，利用享祀，征凶，无咎。<small class="text-info">困于酒食，中有慶也。</small>

> 朱紱，借指高官。无咎，疑當作為咎。

六三，困于石，據于蒺蔾，入于其宮，不見其妻，凶。<small class="text-info">據于蒺蔾，乘剛也，入于其宮不見其妻，不祥也。</small>

九四，來徐徐，困于金車，吝，有終。<small class="text-info">來徐徐，志在下也，雖不當位，有與也。</small>

九五，劓刖，困于赤紱，乃徐有說，利用祭祀。<small class="text-info">劓刖，志未得也，乃徐有說，以中直也，利用祭祀，受福也。</small>

> 劓刖，釋文或作臲卼，不安貌，帛書作貳椽，即首鼠兩端之「兩端」。乃，猶若也。說，脫也。

上六，困于葛藟，于臲卼，曰動悔，有悔，征吉。<small class="text-info">困于葛藟，未當也，動悔有悔，吉行也。</small>

> 于，以、而。有，楚簡作又，是。

#### 井，改邑不改井，无喪无得，往來井井，汔至，亦未繘井，羸其瓶，凶。{#48}

> <span class="text-info">木上有水，井，君子以勞民勸相◎巽乎水而上水，井，井養而不窮也，改邑不改井，乃以剛中也，汔至亦未繘井，未有功也，羸其瓶，是以凶也◎困乎上者必反下，故受之以井</span>◎汔，幾、近也。繘，讀為矞，穿也、出也。羸，帛書及蜀才本作累，拘系、纏繞。

初六，井泥，不食，舊井无禽。<small class="text-info">井泥不食，下也，舊井无禽，時舍也。</small>

> 泥，楚簡作替，堙塞。

九二，井谷射，鮒甕敝漏。<small class="text-info">井谷射鮒，无與也。</small>

> 射，釋文「音亦，厭也」，谷射即射谷。鮒，帛書作付，本字當作柎，即井蓋。甕，帛書作唯。漏，楚簡作縷，阜陽簡作屢，帛書作句，疑本字作簍。

九三，井渫，不食，為我心惻，可用汲，王明，並受其福。<small class="text-info">井渫不食，行惻也，求王明，受福也。</small>

> 渫，狎也、汙也。為，使。王，大也。

六四，井甃，无咎。<small class="text-info">井甃无咎，脩井也。</small>

> 甃，以磚修井。

九五，井冽，寒泉食。<small class="text-info">寒泉之食，中正也。</small>

> 寒，讀為㩃，即搴，取也。

上九，井收，勿幕，有孚，元吉。<small class="text-info">元吉在上，大成也。</small>

> 收，楚簡作朻，當讀為糾。

#### 革，己日乃孚，元亨，利貞，悔亡。{#49}

> <span class="text-info">澤中有火，革，君子以治歷明時◎革，水火相息，二女同居，其志不相得，曰革，己日乃孚，革而信之，文明以說，大亨以正，革而當，其悔乃亡，天地革而四時成，湯武革命，順乎天而應乎人，革之時大矣哉◎井道不可不革，故受之以革</span><span class="text-danger">◎革去故也，鼎取新也</span>◎己，當從楚簡作改，改日，修曆也。

初九，鞏用黃牛之革。<small class="text-info">鞏用黃牛，不可以有為也。</small>

> 鞏，固也。

六二，己日乃革之，征吉，无咎。<small class="text-info">己日革之，行有嘉也。</small>

九三，征凶，貞厲，革言三就，有孚。<small class="text-info">革言三就，又何之矣。</small>

> 貞厲，楚簡無。言，語助也。就，成也。

九四，悔亡，有孚，改命，吉。<small class="text-info">改命之吉，信志也。</small>

> 命，令也。

九五，大人虎變，未占，有孚。<small class="text-info">大人虎變，其文炳也。</small>

> 變，革也。占，口授文辭。

上六，君子豹變，小人革面，征凶，居貞吉。<small class="text-info">君子豹變，其文蔚也，小人革面，順以從君也。</small>

> 居貞則吉，征則凶也。

#### 鼎，元吉，亨。{#50}

> <span class="text-info">木上有火，鼎，君子以正位凝命◎鼎，象也，以木巽火，亨飪也，聖人亨以享上帝，而大亨以養聖賢，巽而耳目聦明，柔進而上行，得中而應乎剛，是以元亨◎革物者莫若鼎，故受之以鼎</span>◎卦畫象形，初六似足，二三四為腹，六五似耳，上九為蓋。

初六，鼎顛趾，利出否，得妾以其子，无咎。<small class="text-info">鼎顛趾，未悖也，利出否，以從貴也。</small>

九二，鼎有實，我仇有疾，不我能即，吉。<small class="text-info">鼎有實，慎所之也，我仇有疾，終无尤也。</small>

> 即，通節，制約。

九三，鼎耳革，其行塞，雉膏不食，方雨虧悔，終吉。<small class="text-info">鼎耳革，失其義也。</small>

> 革，脫落。雉膏，美食。虧，少也。悔，讀為晦，陰霾。

九四，鼎折足，覆公餗，其形渥，凶。<small class="text-info">覆公餗，信如何也。</small>

> 餗，亦食也。渥，讀為齷，迫也、瘦也，

六五，鼎黃耳金鉉，利貞。<small class="text-info">鼎黃耳，中以為實也。</small>

> 鉉，所以舉鼎也。

上九，鼎玉鉉，大吉，无不利。<small class="text-info">玉鉉在上，剛柔節也。</small>

> 帛書二三子篇作「玉鼏」，即玉蓋，喻賢輔也。

#### 震，亨，震來虩虩，笑言啞啞，震驚百里，不喪匕鬯。{#51}

> <span class="text-info">洊雷，震，君子以恐懼脩省◎震亨，震來虩虩，恐致福也，笑言啞啞，後有則也，震驚百里，驚遠而懼邇也，出可以守宗廟社稷，以為祭主也◎主器者莫若長子，故受之以震，震者動也</span><span class="text-danger">◎震起也，艮止也</span>◎震，動也，帛書作辰。虩虩，恐懼貌。啞啞，笑聲。匕鬯，祭祀之具也。

初九，震來虩虩，後笑言啞啞，吉。<small class="text-info">震來虩虩，恐致福也，笑言啞啞，後有則也。</small>

六二，震來，厲，億喪貝，躋于九陵，勿逐，七日得。<small class="text-info">震來厲，乘剛也。</small>

> 億，度也。

六三，震蘇蘇，震行，无眚。<small class="text-info">震蘇蘇，位不當也。</small>

> 蘇蘇，驚惶貌。震行，似震而行也。眚，災也。

九四，震遂，泥。<small class="text-info">震遂泥，未光也。</small>

> 遂，成也。泥，滯也、止也。

六五，震往來，厲，億无喪，有事。<small class="text-info">震往來厲，危行也，其事在中，大无喪也。</small>

> 往來，不止之謂也。億无喪有事，欲无失則須有為也。

上六，震索索，視矍矍，征凶，震不于其躬，于其鄰，无咎，婚媾有言。<small class="text-info">震索索，中未得也，雖凶无咎，畏鄰戒也。</small>

> 索索，畏縮不前。矍矍，驚惶貌。婚媾有言，與鄰之婚媾有過失也。

#### 艮其背，不獲其身，行其庭，不見其人，无咎。{#52}

> <span class="text-info">兼山，艮，君子以思不出其位◎艮，止也，時止則止，時行則行，動靜不失其時，其道光明，艮其止，止其所也，上下敵應，不相與也，是以不獲其身行其庭不見其人无咎也◎物不可以終動，止之故受之以艮，艮者止也</span>◎艮，限也、止也。

初六，艮其趾，无咎，利永貞。<small class="text-info">艮其趾，未失正也。</small>

六二，艮其腓，不拯其隨，其心不快。<small class="text-info">不拯其隨，未退聽也。</small>

> 拯，讀作升。隨，腿也，見[咸](#31)九三。快，楚簡作悸，放肆、縱情。

九三，艮其限，列其夤，厲薰心。<small class="text-info">艮其限，危薰心也。</small>

> 限，界也，此處當指腰。列，同裂。夤，夾脊肉。薰，疑讀為昏，迷亂也。

六四，艮其身，无咎。<small class="text-info">艮其身，止諸躬也。</small>

> 身，楚簡作躳，帛書作躬，通肱，臂也。

六五，艮其輔，言有序，悔亡。<small class="text-info">艮其輔，以中正也。</small>

上九，敦艮，吉。<small class="text-info">敦艮之吉，以厚終也。</small>

> 敦，崇尚、注重。

#### 漸，女歸，吉，利貞。{#53}

> <span class="text-info">山上有木，漸，君子以居賢德善俗◎漸，之進也，女歸吉也，進得位，往有功也，進以正，可以正邦也，其位，剛得中也，止而巽，動不窮也◎物不可以終止，故受之以漸，漸者進也</span><span class="text-danger">◎歸妹女之終也，漸女歸待男行也。</span>

初六，鴻漸于干，小子厲，有言，无咎。<small class="text-info">小子之厲，義无咎也。</small>

> 干，讀為澗。无咎，各本及帛書皆同，唯楚簡作「不冬」，當是。

六二，鴻漸于磐，飲食衎衎，吉。<small class="text-info">飲食衎衎，不素飽也。</small>

> 磐，當讀為阪，堤垻。衎衎，和樂貌。

九三，鴻漸于陸，夫征不復，婦孕不育，凶，利禦寇。<small class="text-info">夫征不復，離群醜也，婦孕不育，失其道也，利用禦寇，順相保也。</small>

> 夫征不復，動而不止，婦孕不育，靜而不動，皆非漸之道。

六四，鴻漸于木，或得其桷，无咎。<small class="text-info">或得其桷，順以巽也。</small>

> 桷无咎，帛書作「寇愨无咎」，寇，亂也，愨无咎，敬則无咎也。

九五，鴻漸于陵，婦三歲不孕，終莫之勝，吉。<small class="text-info">終莫之勝吉，得所願也。</small>

上九，鴻漸于陸，其羽可用為儀，吉。<small class="text-info">其羽可用為儀吉，不可亂也。</small>

> 羽，引申為飛翔，可用為儀者，乃其翔之漸也。

#### 歸妹，征凶，无攸利。{#54}

> <span class="text-info">澤上有雷，歸妹，君子以永終知敝◎歸妹，天地之大義也，天地不交而萬物不興，歸妹，人之終始也，說以動，所歸妹也，征凶，位不當也，无攸利，柔乘剛也◎進必有所歸，故受之以歸妹</span>◎帛書衷篇「歸妹以正女也」。

初九，歸妹以娣，跛能履，征吉。<small class="text-info">歸妹以娣，以恆也，跛能履，吉相承也。</small>

> 娣，女弟也。能，而。

九二，眇能視，利幽人之貞。<small class="text-info">利幽人之貞，未變常也。</small>

六三，歸妹以須，反歸以娣。<small class="text-info">歸妹以須，未當也。</small>

> 須，荀爽陸績作嬬，帛書同，廣雅「妻謂之嬬」，正室也。

九四，歸妹愆期，遲歸有時。<small class="text-info">愆期之志，有待而行也。</small>

> 時，通伺，候也。

六五，帝乙歸妹，其君之袂不如其娣之袂良，月幾望，吉。<small class="text-info">帝乙歸妹，不如其娣之袂良也，其位在中，以貴行也。</small>

> 幾，帛書荀爽本作既，既望，月十六至廿二、三日。

上六，女承筐无實，士刲羊无血，无攸利。<small class="text-info">上六无實，承虛筐也。</small>

#### 豐，亨，王假之，勿憂，宜日中。{#55}

> <span class="text-info">雷電皆至，豐，君子以折獄致刑◎豐，大也，明以動，故豐，王假之，尚大也，勿憂宜日中，宜照天下也，日中則昃，月盈則食，天地盈虛，與時消息，而況於人乎，況於鬼神乎◎得其所歸者必大，故受之以豐，豐者大也</span><span class="text-danger">◎豐多故也，親寡旅也</span>◎假，大也。帛書二三子篇「此言盛也勿憂，用賢弗害也，日中而盛，用賢弗害，其亨亦宜矣」。

初九，遇其配主，雖旬无咎，往有尚。<small class="text-info">雖旬无咎，過旬災也。</small>

> 配，讀作媺，同美，帛書作肥，鄭玄虞翻作妃，三字旁紐迭韻，配主，仁君也。旬，讀為均。尚，助也。

六二，豐其蔀，日中見斗，往得，疑疾，有孚發若，吉。<small class="text-info">有孚發若，信以發志也。</small>

> 蔀，覆曖也。往則得，疑則疾也。

九三，豐其沛，日中見沬，折其右肱，无咎。<small class="text-info">豐其沛，不可大事也，折其右肱，終不可用也。</small>

> 沛，讀為旆，幡幔。沬，九家易「斗杓後小星」。肱，臂也。

九四，豐其蔀，日中見斗，遇其夷主，吉。<small class="text-info">豐其蔀，位不當也，日中見斗，幽不明也，遇其夷主，吉行也。</small>

> 夷，楚簡隸定作仁，是，說文「古文仁，或从尸」。帛書缪和篇「見夷主者，其始夢兆而亟見之者也，其秦缪公、荊莊、晉文、齊桓是也」。

六五，來章，有慶譽，吉。<small class="text-info">六五之吉，有慶也。</small>

> 章，彰也。

上六，豐其屋，蔀其家，闚其戶，闃其无人，三歲不覿，凶。<small class="text-info">豐其屋，天際翔也，闚其戶闃其无人，自藏也。</small>

> 屋，讀為幄。闃，靜也。覿，讀為遂，訓為通達。

#### 旅，小亨，旅貞吉。{#56}

> <span class="text-info">山上有火，旅，君子以明慎用刑而不留獄◎旅小亨，柔得中乎外而順乎剛，止而麗乎明，是以小亨旅貞吉也，旅之時義大矣哉◎窮大者必失其居，故受之以旅</span>◎小亨，暫則亨也。

初六，旅瑣瑣，斯其所取災。<small class="text-info">旅瑣瑣，志窮災也。</small>

> 瑣瑣，奸詐貌。斯，楚簡帛書作此。

六二，旅即次，懷其資，得童僕貞。<small class="text-info">得童僕貞，終无尤也。</small>

> 即，楚簡帛書作既，是，訓失。次，舍也，留宿之所。懷，通饋。童僕貞，楚簡作「得童僕之貞」，九三同。

九三，旅焚其次，喪其童僕貞，厲。<small class="text-info">旅焚其次，亦以傷矣，以旅與下，其義喪也。</small>

九四，旅于處，得其資斧，我心不快。<small class="text-info">旅于處，未得位也，得其資斧，心未快也。</small>

> 處，與人相交也。得其資斧，投契者唯資財也，帛書昭力篇「旅之資斧，商夫之義也」。

六五，射雉一矢，亡，終以譽命。<small class="text-info">終以譽命，上逮也。</small>

> 亡，失而未中也。命，名也。

上九，鳥焚其巢，旅人先笑，後號咷，喪牛于易，凶。<small class="text-info">以旅在上，其義焚也，喪牛于易，終莫之聞也。</small>

> 喪牛于易，見[大壯](#34)六五。

#### 巽，小亨，利有攸往，利見大人。{#57}

> <span class="text-info">隨風，巽，君子以申命行事◎重巽以申命，剛巽乎中正而志行，柔皆順乎剛，是以小亨利有攸往利見大人◎旅而无所容，故受之以巽，巽者入也</span><span class="text-danger">◎兌見而巽伏也</span>◎巽，即選，入也、伏也、順也。

初六，進退，利武人之貞。<small class="text-info">進退，志疑也，利武人之貞，志治也。</small>

> 進退，進或退也。

九二，巽在牀下，用史巫紛若，吉，无咎。<small class="text-info">紛若之吉，得中也。</small>

> 在，於。

九三，頻巽，吝。<small class="text-info">頻巽之吝，志窮也。</small>

> 頻，當讀為擯。

六四，悔亡，田獲三品。<small class="text-info">田獲三品，有功也。</small>

九五，貞吉，悔亡，无不利，无初有終，先庚三日，後庚三日，吉。<small class="text-info">九五之吉，位正中也。</small>

> 庚，疑讀為賡，廣雅「賡，經也」，量度、籌畫。

上九，巽在牀下，喪其資斧，貞凶。<small class="text-info">巽在牀下，上窮也，喪其資斧，正乎凶也。</small>

#### 兌，亨，利貞。{#58}

> <span class="text-info">麗澤，兌，君子以朋友講習◎兌，說也，剛中而柔外，說以利貞，是以順乎天而應乎人，說以先民，民忘其勞，說以犯難，民忘其死，說之大，民勸矣哉◎入而後說之，故受之以兌，兌者說也</span>◎兌，現也，引申為悅。

初九，和兌，吉。<small class="text-info">和兌之吉，行未疑也。</small>

> 和，帛書作休，義近通用。

九二，孚兌，吉，悔亡。<small class="text-info">孚兌之吉，信志也。</small>

六三，來兌，凶。<small class="text-info">來兌之凶，位不當也。</small>

九四，商兌未寧，介疾有喜。<small class="text-info">九四之喜，有慶也。</small>

> 商，度也。介，舍也、止也。

九五，孚于剝，有厲。<small class="text-info">孚于剝，位正當也。</small>

上六，引兌。<small class="text-info">上六引兌，未光也。</small>

> 引，帛書作景，大也。

#### 渙，亨，王假有廟，利涉大川，利貞。{#59}

> <span class="text-info">風行水上，渙，先王以享于帝立廟◎渙亨，剛來而不窮，柔得位乎外而上同，王假有廟，王乃在中也，利涉大川，乘木有功也◎說而後散之，故受之以渙，渙者離也</span><span class="text-danger">◎渙離也，節止也</span>◎渙，本字作奐，指文采奐美。

初六，用拯馬壯，吉。<small class="text-info">初六之吉，順也。</small>

> 楚簡帛書無「用」，後多「悔亡」。

九二，渙奔其机，悔亡。<small class="text-info">渙奔其机，得願也。</small>

> 帛書缪和篇「渙者，散也，賁階，幾也，時也，古之君子時福至則進取，時亡則以讓」。

六三，渙其躬，无悔。<small class="text-info">渙其躬，志在外也。</small>

六四，渙其群，元吉，渙有丘，匪夷所思。<small class="text-info">渙其群元吉，光大也。</small>

> 丘，居也、邑也。

九五，渙汗，其大號，渙王居，无咎。<small class="text-info">王居无咎，正位也。</small>

> 渙汗其大號，帛書作「渙其肝，大號」，二三子篇「奐，大美也，肝，言其內，其內大美，其外必有大聲問」。王居，王宮。

上九，渙其血去逖出，无咎。<small class="text-info">渙其血，遠害也。</small>

> 血，讀為窒。逖，讀為惕。

#### 節，亨，苦節，不可貞。{#60}

> <span class="text-info">澤上有水，節，君子以制數度、議德行◎節亨，剛柔分而剛得中，苦節不可貞，其道窮也，說以行險，當位以節，中正以通，天地節而四時成，節以制度，不傷財，不害民◎物不可以終離，故受之以節。</span>

初九，不出戶庭，无咎。<small class="text-info">不出戶庭，知通塞也。</small>

> 不出戶庭，帛書作「不出戶牖」，繫辭「亂之所生也，則言語以為階」，則此處之戶牖指口。

九二，不出門庭，凶。<small class="text-info">不出門庭凶，失時極也。</small>

六三，不節若，則嗟若，无咎。<small class="text-info">不節之嗟，又誰咎也。</small>

六四，安節，亨。<small class="text-info">安節之亨，承上道也。</small>

九五，甘節，吉，往有尚。<small class="text-info">甘節之吉，居位中也。</small>

上六，苦節，貞凶，悔亡。<small class="text-info">苦節貞凶，其道窮也。</small>

> 悔亡，高亨疑為衍文。

#### 中孚，豚魚吉，利涉大川，利貞。{#61}

> <span class="text-info">澤上有風，中孚，君子以議獄緩死◎中孚，柔在內而剛得中，說而巽，孚，乃化邦也，豚魚吉，信及豚魚也，利涉大川，乘木舟虛也，中孚以利貞，乃應乎天也◎節而信之，故受之以中孚</span><span class="text-danger">◎小過過也，中孚信也</span>◎豚魚，王引之以為禮之薄者，疑豚讀為遯，古魚吾同音，而吾為圄之省，圄，守也。

初九，虞吉，有它不燕。<small class="text-info">初九虞吉，志未變也。</small>

> 虞，安也。燕，帛書作寧，義同。意謂安則吉，有它則不寧也。

九二，鶴鳴在陰，其子和之，我有好爵，吾與爾靡之。<small class="text-info">其子和之，中心願也。</small>

> 陰，通蔭。爵，指代酒。靡，讀為分。

六三，得敵，或鼓或罷，或泣或歌。<small class="text-info">或鼓或罷，位不當也。</small>

六四，月幾望，馬匹亡，无咎。<small class="text-info">馬匹亡，絕類上也。</small>

> 月幾望，見[歸妹](#54)六五。

九五，有孚攣如，无咎。<small class="text-info">有孚攣如，位正當也。</small>

> 攣如，帛書攣作論，即綸，見[小畜](#9)九五。

上九，翰音登于天，貞凶。<small class="text-info">翰音登于天，何可長也。</small>

> 翰，高飛也。

#### 小過，亨，利貞，可小事，不可大事，飛鳥遺之音，不宜上，宜下，大吉。{#62}

> <span class="text-info">山上有雷，小過，君子以行過乎恭、喪過乎哀、用過乎儉◎小過，小者過而亨也，過以利貞，與時行也，柔得中，是以小事吉也，剛失位而不中，是以不可大事也，有飛鳥之象焉，飛鳥遺之音不宜上宜下大吉，上逆而下順也◎有其信者必行之，故受之以小過</span>◎遺，留也、止也。之，猶於也。音，通蔭，左傳文十七年「鹿死不擇音」。

初六，飛鳥，以凶。<small class="text-info">飛鳥以凶，不可如何也。</small>

> 以，讀為有，古書多相通。

六二，過其祖，遇其妣，不及其君，遇其臣，无咎。<small class="text-info">不及其君，臣不可過也。</small>

> 過與不及，皆小過也。

九三，弗過，防之，從或戕之，凶。<small class="text-info">從或戕之，凶如何也。</small>

> 從，讀為縱。

九四，无咎，弗過，遇之，往厲，必戒，勿用，永貞。<small class="text-info">弗過遇之，位不當也，往厲必戒，終不可長也。</small>

> 戒，當讀為革，改也。

六五，密雲不雨，自我西郊，公弋，取彼在穴。<small class="text-info">密雲不雨，已上也。</small>

> 帛書二三子篇「孔子曰，此言聖君之下舉乎山林畎畝之中也」。

上六，弗遇，過之，飛鳥離之，凶，是謂災眚。<small class="text-info">弗遇過之，已亢也。</small>

> 離，讀為罹。

#### 既濟，亨，小利貞，初吉，終亂。{#63}

> <span class="text-info">水在火上，既濟，君子以思患而豫防之◎既濟亨小者，亨也，利貞，剛柔正而位當也，初吉，柔得中也，終止則亂，其道窮也◎有過物者必濟，故受之以既濟</span><span class="text-danger">◎既濟定也，未濟男之窮也。</span>

初九，曳其輪，濡其尾，无咎。<small class="text-info">曳其輪，義无咎也。</small>

> 言小狐也。輪，讀為淪，落河也。

六二，婦喪其茀，勿逐，七日得。<small class="text-info">七日得，以中道也。</small>

> 茀，首飾也。王引之「蓋日之數十，五日而得其半，不及半則稱三日，過半則稱七日，欲明失而復得，多不至十日，則云七日得」。

九三，高宗伐鬼方，三年克之，小人勿用。<small class="text-info">三年克之，憊也。</small>

> 三年方克，以用小人也。

六四，繻有衣袽，終日戒。<small class="text-info">終日戒，有所疑也。</small>

> 繻，繒采色。袽，敝衣也。終日，猶良久也。戒，舊訓戒慎，疑通革，訓為改。

九五，東鄰殺牛，不如西鄰之禴祭，實受其福。<small class="text-info">東鄰殺牛，不如西鄰之時也，實受其福，吉大來也。</small>

上六，濡其首，厲。<small class="text-info">濡其首厲，何可久也。</small>

#### 未濟，亨，小狐汔濟，濡其尾，无攸利。{#64}

> <span class="text-info">火在水上，未濟，君子以慎辨物居方◎未濟亨，柔得中也，小狐汔濟，未出中也，濡其尾无攸利，不續終也，雖不當位，剛柔應也◎物不可窮也，故受之以未濟終焉</span>◎帛書二三子篇引小狐汔濟作「小狐涉川，幾濟」，又「此言始易而終難也，小人之貞也」。

初六，濡其尾，吝。<small class="text-info">濡其尾，亦不知極也。</small>

九二，曳其輪，貞吉。<small class="text-info">九二貞吉，中以行正也。</small>

六三，未濟，征凶，利涉大川。<small class="text-info">未濟征凶，位不當也。</small>

九四，貞吉，悔亡，震用伐鬼方，三年，有賞于大國。<small class="text-info">貞吉悔亡，志行也。</small>

> 震用，岐周之訛也。大國，大邑商也。

六五，貞吉，无悔，君子之光，有孚，吉。<small class="text-info">君子之光，其暉吉也。</small>

上九，有孚于飲酒，无咎，濡其首，有孚，失是。<small class="text-info">飲酒濡首，亦不知節也。</small>

> 濡其首，醉酒也。是，則也。