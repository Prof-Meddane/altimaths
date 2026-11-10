/* ==========================================================================
   CONTENU DE L'APPLICATION — c'est le SEUL fichier à modifier pour ajouter
   du cours, des fiches ou des QCM.

   Rappels de syntaxe :
   - Chaque texte est écrit entre R`  ...  ` : on y tape le LaTeX normalement
     ($...$ pour les formules en ligne, $$...$$ pour les formules centrées).
   - Dans le cours, [[ ... ]] crée un « trou » que l'élève touche pour révéler.
   - QCM : "bonne" est le numéro de la bonne réponse dans "choix"
     (0 = la première). L'ordre des choix est mélangé automatiquement.
   - "niveau" : 0 = classique, 1 = un peu de recherche, 2 = difficile,
     3 = très difficile (comme sur vos feuilles d'exercices).
   - Après une modification, augmentez VERSION (1re ligne de sw.js) pour que
     les téléphones des élèves récupèrent la mise à jour.
   ========================================================================== */
const R = String.raw;

window.CONTENU = {
  appli: "Maths ECG1",
  lycee: "Lycée Olympe de Gouges",
  chapitres: [
    {
      id: "ch0",
      numero: 0,
      titre: "Calculs",
      objectif: R`Maîtriser l'ensemble des opérations élémentaires sans la moindre hésitation. Rappel du lycée sur le calcul littéral, les équations et les inégalités.`,

      /* ------------------------------------------------------------------ */
      themes: [
        { id: "id",   titre: "Identités remarquables", icone: "a²" },
        { id: "frac", titre: "Fractions & puissances", icone: "÷" },
        { id: "rac",  titre: "Racines & conjugué",     icone: "√" },
        { id: "eq",   titre: "Équations",              icone: "=" },
        { id: "ineg", titre: "Inégalités & inéquations", icone: "≤" },
        { id: "ln",   titre: "Logarithme & exponentielle", icone: "e" },
        { id: "abs",  titre: "Valeurs absolues",       icone: "|x|" },
        { id: "olym", titre: "Défis Olympiades",       icone: "★" }
      ],

      /* ------------------------------ COURS ------------------------------ */
      cours: [
        { type: "section", titre: "1. Règles de calcul" },
        { type: "sous", titre: "Identités remarquables" },
        { type: "prop", titre: "Proposition (Identités remarquables)", texte: R`
          Soient $a,b \in \mathbb{R}$. On a
          <div class="ligne">$(a+b)^2 =$ [[$a^2+2ab+b^2$]]</div>
          <div class="ligne">$(a-b)^2 =$ [[$a^2-2ab+b^2$]]</div>
          <div class="ligne">$(a-b)(a+b) =$ [[$a^2-b^2$]]</div>` },
        { type: "exemple", texte: R`
          $$\begin{aligned}(3+x)^2 &= 3^2 + 2\times 3x + x^2 = 9+6x+x^2\\(3-x)^2 &= 3^2 - 2\times 3x + x^2 = 9-6x+x^2\\(3-x)(3+x) &= 3^2-x^2 = 9-x^2\end{aligned}$$` },

        { type: "sous", titre: "Fractions" },
        { type: "prop", titre: "Propriétés (Opérations sur les fractions)", texte: R`
          Soient $a,b,c,d$ des réels non nuls.
          <div class="ligne">$\dfrac{a}{b}\times\dfrac{c}{d} =$ [[$\dfrac{ac}{bd}$]]</div>
          <div class="ligne">$\dfrac{a}{b}+\dfrac{c}{d} =$ [[$\dfrac{ad+bc}{bd}$]]</div>
          <div class="ligne">$\dfrac{\;\frac{a}{b}\;}{\frac{c}{d}} =$ [[$\dfrac{a}{b}\times\dfrac{d}{c}=\dfrac{ad}{bc}$]]</div>` },
        { type: "exemple", texte: R`
          $$\begin{aligned}\frac{3}{2}\times\frac{5}{7} &= \frac{15}{14}\\ \frac{3}{2}+\frac{5}{7} &= \frac{3\times 7}{2\times 7}+\frac{2\times 5}{2\times 7} = \frac{21+10}{14} = \frac{31}{14}\\ \frac{\frac{3}{2}}{\frac{5}{7}} &= \frac{3}{2}\times\frac{7}{5} = \frac{21}{10}\end{aligned}$$
          Comme le dit l'adage : <em>« Diviser par un nombre revient à multiplier par l'inverse de ce nombre. »</em>` },

        { type: "sous", titre: "Puissances" },
        { type: "prop", titre: "Proposition (Opérations sur les puissances)", texte: R`
          Soient $a$ un réel non nul et $m,n$ des entiers.
          <div class="ligne">$a^m\times a^n =$ [[$a^{m+n}$]]</div>
          <div class="ligne">$\dfrac{a^m}{a^n} =$ [[$a^{m-n}$]]</div>
          <div class="ligne">$(a^n)^m =$ [[$a^{nm}$]]</div>` },
        { type: "exemple", texte: R`$$2^3\times 2^4 = 2^7 \qquad \frac{3^5}{3^3} = 3^2 \qquad \left(3^2\right)^4 = 3^8$$` },
        { type: "attention", texte: R`Erreur classique : $2\times 3^4 \neq 6^4$. La puissance est prioritaire sur la multiplication : $2\times 3^4 = 2\times 81 = 162$, alors que $6^4 = 1296$.` },

        { type: "section", titre: "2. Équations" },
        { type: "sous", titre: "Équations du 1er degré" },
        { type: "prop", titre: "Proposition (Méthode générale)", texte: R`
          Soient $a$ un réel non nul et $b$ un réel. L'ensemble des solutions de l'équation $ax+b=0$ est le singleton
          <div class="ligne">[[$\left\{-\dfrac{b}{a}\right\}$]]</div>` },

        { type: "sous", titre: "Systèmes d'équations" },
        { type: "prop", titre: "Proposition (Résolution par substitution)", texte: R`
          On cherche les réels $x,y$ solutions de
          $$(S):\ \begin{cases} ax+by = e\\ cx+dy = f\end{cases}$$
          Supposons $d\neq 0$. On exprime $y$ en fonction de $x$ dans la deuxième équation, puis on injecte cette valeur dans la première pour trouver $x$ :
          <div class="ligne">$y =$ [[$\dfrac{f-cx}{d}$]]</div>
          puis $ax+\dfrac{b}{d}(f-cx) = e$, que l'on résout en $x$, avant de revenir à $y$.` },
        { type: "exemple", texte: R`$\begin{cases}x+y=5\\2x-y=1\end{cases}\iff\begin{cases}y=5-x\\2x-(5-x)=1\end{cases}\iff\begin{cases}y=5-x\\3x=6\end{cases}\iff\begin{cases}x=2\\y=3\end{cases}$` },

        { type: "sous", titre: "Équations du 2nd degré" },
        { type: "prop", titre: "Proposition (Méthode générale)", texte: R`
          Soient $a\neq 0$, $b$, $c$ des réels. Pour résoudre $ax^2+bx+c=0$, on introduit le <strong>discriminant</strong>
          <div class="ligne">$\Delta =$ [[$b^2-4ac$]]</div>
          Si $\Delta\geq 0$, les solutions réelles sont
          <div class="ligne">$x_1 =$ [[$\dfrac{-b-\sqrt{\Delta}}{2a}$]] $\qquad x_2 =$ [[$\dfrac{-b+\sqrt{\Delta}}{2a}$]]</div>
          En particulier, si $\Delta = 0$, l'équation admet une racine double égale à [[$-\dfrac{b}{2a}$]].` },
        { type: "remarque", texte: R`Le cas $\Delta<0$ est hors programme. Pour la culture, l'équation admet alors deux solutions, mais elles ne sont pas réelles. On se contentera de dire que <strong>l'équation n'admet pas de solution réelle</strong>.` },
        { type: "attention", texte: R`Équations avec des quotients ou des racines : on commence <strong>toujours</strong> par déterminer le domaine de validité (dénominateurs non nuls, quantités sous la racine positives, arguments du $\ln$ strictement positifs), et on vérifie à la fin que les solutions trouvées y appartiennent.` },

        { type: "section", titre: "3. Inégalités et inéquations" },
        { type: "sous", titre: "Règles de manipulation des inégalités" },
        { type: "prop", titre: "Proposition (Opérations sur les inégalités)", texte: R`
          Soient $a,b,c$ des réels.
          <ol>
          <li><strong>Addition :</strong> si $a\leq b$, alors $a+c$ [[$\leq$]] $b+c$.</li>
          <li><strong>Multiplication par un nombre positif :</strong> si $a\leq b$ et $c\geq 0$, alors $ac$ [[$\leq$]] $bc$.</li>
          <li><strong>Multiplication par un nombre négatif :</strong> si $a\leq b$ et $c\leq 0$, alors $ac$ [[$\geq$ (le sens change !)]] $bc$.</li>
          <li><strong>Inversion :</strong> si $0<a<b$, alors $0<\dfrac1b$ [[$<$]] $\dfrac1a$.</li>
          </ol>` },
        { type: "prop", titre: "Proposition (Carrés et racines)", texte: R`
          <ol>
          <li>Si $0\leq a<b$, alors $a^2$ [[$<$]] $b^2$.</li>
          <li>Si $0\leq a<b$, alors $\sqrt a$ [[$<$]] $\sqrt b$.</li>
          <li>Si $a\geq 0$ et $b\geq 0$, alors $a<b$ si et seulement si $a^2$ [[$<$]] $b^2$.</li>
          </ol>` },

        { type: "sous", titre: "Résoudre une inéquation" },
        { type: "prop", titre: "Proposition (Méthode générale)", texte: R`
          <ol>
          <li><strong>1er degré :</strong> pour résoudre $2x+1\leq 0$, on isole $x$ : $2x\leq -1$ puis $x\leq -\frac12$. L'ensemble des solutions est
          $$\left]-\infty,-\tfrac12\right] = \left\{x\in\mathbb R,\ x\leq -\tfrac12\right\}.$$</li>
          <li><strong>Produits et quotients :</strong> $(x-a)(x-b)\geq 0$ (ou $\frac{x-a}{x-b}\geq 0$) si et seulement si $x-a$ et $x-b$ sont [[de même signe]]. Autrement dit
          $$(x-a)(x-b)\geq 0 \iff \big(x-a\geq 0 \text{ et } x-b\geq 0\big) \text{ ou } \big(x-a\leq 0 \text{ et } x-b\leq 0\big).$$
          En pratique, on dresse un <strong>tableau de signes</strong>.</li>
          </ol>` },
        { type: "attention", texte: R`On raisonne toujours <strong>par équivalence</strong>. Le résultat se présente sous la forme d'un intervalle ou d'une union d'intervalles. Ne jamais multiplier les deux membres par une quantité dont on ne connaît pas le signe : on passe tout du même côté et on étudie le signe.` }
      ],

      /* ------------------------------ FICHES ----------------------------- */
      fiches: [
        { recto: R`$(a+b)^2$`, verso: R`$a^2+2ab+b^2$` },
        { recto: R`$(a-b)^2$`, verso: R`$a^2-2ab+b^2$` },
        { recto: R`$a^2-b^2$ (factoriser)`, verso: R`$(a-b)(a+b)$` },
        { recto: R`$(a+b+c)^2$`, verso: R`$a^2+b^2+c^2+2(ab+ac+bc)$` },
        { recto: R`$a^3-b^3$ (factoriser)`, verso: R`$(a-b)(a^2+ab+b^2)$` },
        { recto: R`$a^3+b^3$ (factoriser)`, verso: R`$(a+b)(a^2-ab+b^2)$` },
        { recto: R`$\dfrac{a}{b}+\dfrac{c}{d}$`, verso: R`$\dfrac{ad+bc}{bd}$` },
        { recto: R`$\dfrac{\frac{a}{b}}{\frac{c}{d}}$`, verso: R`$\dfrac{a}{b}\times\dfrac{d}{c}=\dfrac{ad}{bc}$` },
        { recto: R`$a^m\times a^n$, $\ \dfrac{a^m}{a^n}$, $\ (a^n)^m$`, verso: R`$a^{m+n}$, $\ a^{m-n}$, $\ a^{nm}$` },
        { recto: R`Solution de $ax+b=0$ ($a\neq0$)`, verso: R`$x=-\dfrac{b}{a}$` },
        { recto: R`Discriminant de $ax^2+bx+c$`, verso: R`$\Delta=b^2-4ac$` },
        { recto: R`Racines de $ax^2+bx+c$ si $\Delta>0$`, verso: R`$x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$` },
        { recto: R`Racine double si $\Delta=0$`, verso: R`$x_0=-\dfrac{b}{2a}$` },
        { recto: R`Factorisation si $\Delta>0$`, verso: R`$ax^2+bx+c=a(x-x_1)(x-x_2)$` },
        { recto: R`Si $a\leq b$ et $c<0$, alors…`, verso: R`$ac\geq bc$ : le sens de l'inégalité change.` },
        { recto: R`Si $0<a<b$, comparer $\frac1a$ et $\frac1b$`, verso: R`$\dfrac1b<\dfrac1a$ : la fonction inverse est décroissante sur $]0,+\infty[$.` },
        { recto: R`Quantité conjuguée de $\sqrt a+\sqrt b$`, verso: R`$\sqrt a-\sqrt b$, car $(\sqrt a+\sqrt b)(\sqrt a-\sqrt b)=a-b$` },
        { recto: R`$\ln(ab)$, $\ \ln\left(\frac ab\right)$, $\ \ln(a^n)$`, verso: R`$\ln a+\ln b$, $\ \ln a-\ln b$, $\ n\ln a$ $\quad(a,b>0)$` },
        { recto: R`$e^{a+b}$, $\ e^{-a}$, $\ (e^a)^n$`, verso: R`$e^ae^b$, $\ \dfrac{1}{e^a}$, $\ e^{na}$` },
        { recto: R`$|x-a|\leq r$ équivaut à…`, verso: R`$a-r\leq x\leq a+r$` },
        { recto: R`$\sqrt{a^2}$ pour $a\in\mathbb R$`, verso: R`$|a|$ (et non $a$ !)` }
      ],

      /* ------------------------------- QCM ------------------------------- */
      questions: [
        /* ---------- Identités remarquables ---------- */
        { theme: "id", niveau: 0, q: R`Développer $(2x-3)^2$.`,
          choix: [R`$4x^2-12x+9$`, R`$4x^2-9$`, R`$4x^2-6x+9$`, R`$2x^2-12x+9$`], bonne: 0,
          expl: R`$(a-b)^2=a^2-2ab+b^2$ avec $a=2x$, $b=3$ : $(2x)^2-2\times 2x\times 3+3^2=4x^2-12x+9$.` },
        { theme: "id", niveau: 0, q: R`Factoriser $9x^2-25$.`,
          choix: [R`$(3x-5)(3x+5)$`, R`$(3x-5)^2$`, R`$(9x-5)(9x+5)$`, R`$(3x+5)^2$`], bonne: 0,
          expl: R`$9x^2-25=(3x)^2-5^2$, puis $a^2-b^2=(a-b)(a+b)$.` },
        { theme: "id", niveau: 0, q: R`Factoriser $x^2+6x+9$.`,
          choix: [R`$(x+3)^2$`, R`$(x-3)^2$`, R`$(x+3)(x-3)$`, R`$(x+9)^2$`], bonne: 0,
          expl: R`On reconnaît $a^2+2ab+b^2$ avec $a=x$ et $b=3$ ($2ab=6x$).` },
        { theme: "id", niveau: 0, q: R`Calculer mentalement $101^2$.`,
          choix: [R`$10\,201$`, R`$10\,101$`, R`$10\,001$`, R`$1\,201$`], bonne: 0,
          expl: R`$(100+1)^2=100^2+2\times100+1=10\,000+200+1=10\,201$.` },
        { theme: "id", niveau: 0, q: R`Laquelle de ces égalités est vraie pour tous réels $a,b$ ?`,
          choix: [R`$a^3-b^3=(a-b)(a^2+ab+b^2)$`, R`$a^3-b^3=(a-b)^3$`, R`$a^3-b^3=(a-b)(a^2-ab+b^2)$`, R`$a^3-b^3=(a-b)(a+b)^2$`], bonne: 0,
          expl: R`On peut le vérifier en développant : $(a-b)(a^2+ab+b^2)=a^3+a^2b+ab^2-a^2b-ab^2-b^3=a^3-b^3$.` },
        { theme: "id", niveau: 0, q: R`Soient $a,b,c$ tels que $a+b+c=70$ et $a^2+b^2+c^2=850$. Que vaut $ab+ac+bc$ ?`,
          choix: [R`$2025$`, R`$4050$`, R`$4900$`, R`$1012{,}5$`], bonne: 0,
          expl: R`$(a+b+c)^2=a^2+b^2+c^2+2(ab+ac+bc)$, donc $4900=850+2(ab+ac+bc)$, d'où $ab+ac+bc=\frac{4050}{2}=2025$.` },
        { theme: "id", niveau: 0, q: R`Développer $(x+2)(x-2)-(x-1)^2$.`,
          choix: [R`$2x-5$`, R`$-2x-3$`, R`$2x-3$`, R`$-5$`], bonne: 0,
          expl: R`$(x^2-4)-(x^2-2x+1)=x^2-4-x^2+2x-1=2x-5$. Attention au signe moins devant la parenthèse !` },
        { theme: "id", niveau: 1, q: R`Calculer sans calculatrice $\sqrt{17\times18\times19\times20+1}$.`,
          choix: [R`$341$`, R`$340$`, R`$342$`, R`$361$`], bonne: 0,
          expl: R`Avec $x=17$ : $x(x+3)\cdot(x+1)(x+2)+1=X(X+2)+1=(X+1)^2$ où $X=x^2+3x=340$. Le résultat est donc $X+1=341$.` },
        { theme: "id", niveau: 1, q: R`Calculer $\sqrt{9999^2+19999}$.`,
          choix: [R`$10\,000$`, R`$9\,999$`, R`$10\,001$`, R`$9\,999\sqrt2$`], bonne: 0,
          expl: R`$19999=2\times9999+1$, donc $9999^2+2\times9999+1=(9999+1)^2=10000^2$.` },
        { theme: "id", niveau: 1, q: R`Soit $x>0$ tel que $x^4+\dfrac{1}{x^4}=7$. Que vaut $x^6+\dfrac1{x^6}$ ?`,
          choix: [R`$18$`, R`$21$`, R`$27$`, R`$343$`], bonne: 0,
          expl: R`Avec $X=x^2>0$ : $\left(X+\frac1X\right)^2=X^2+\frac1{X^2}+2=9$, donc $X+\frac1X=3$. Puis $X^3+\frac1{X^3}=\left(X+\frac1X\right)^3-3\left(X+\frac1X\right)=27-9=18$.` },
        { theme: "id", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $x^3+x=130$.`,
          choix: [R`$\{5\}$`, R`$\{-5;5\}$`, R`$\{\sqrt[3]{130}\}$`, R`$\{2;5\}$`], bonne: 0,
          expl: R`$130=5^3+5$, donc $x^3-5^3+x-5=0$, soit $(x-5)(x^2+5x+25+1)=0$. Le second facteur a un discriminant $25-104<0$ : seule solution $x=5$.` },

        /* ---------- Fractions & puissances ---------- */
        { theme: "frac", niveau: 0, q: R`Calculer $\dfrac32+\dfrac57$.`,
          choix: [R`$\dfrac{31}{14}$`, R`$\dfrac{8}{9}$`, R`$\dfrac{15}{14}$`, R`$\dfrac{8}{14}$`], bonne: 0,
          expl: R`Même dénominateur : $\frac{21}{14}+\frac{10}{14}=\frac{31}{14}$. On n'additionne jamais numérateurs et dénominateurs entre eux !` },
        { theme: "frac", niveau: 0, q: R`Simplifier $\dfrac{\frac32}{\frac57}$.`,
          choix: [R`$\dfrac{21}{10}$`, R`$\dfrac{15}{14}$`, R`$\dfrac{10}{21}$`, R`$\dfrac{35}{6}$`], bonne: 0,
          expl: R`Diviser par $\frac57$, c'est multiplier par $\frac75$ : $\frac32\times\frac75=\frac{21}{10}$.` },
        { theme: "frac", niveau: 0, q: R`Simplifier $\dfrac{1}{\frac12+\frac13}$.`,
          choix: [R`$\dfrac65$`, R`$5$`, R`$\dfrac56$`, R`$\dfrac15$`], bonne: 0,
          expl: R`$\frac12+\frac13=\frac56$, et l'inverse de $\frac56$ est $\frac65$.` },
        { theme: "frac", niveau: 0, q: R`Que vaut $2\times3^4$ ?`,
          choix: [R`$162$`, R`$1296$`, R`$24$`, R`$54$`], bonne: 0,
          expl: R`La puissance est prioritaire : $2\times 81=162$. Le piège $6^4=1296$ est l'erreur classique.` },
        { theme: "frac", niveau: 0, q: R`Simplifier $\dfrac{a^7}{a^3}\times a^{-2}$ ($a\neq0$).`,
          choix: [R`$a^2$`, R`$a^{6}$`, R`$a^{-\frac{14}{3}}$`, R`$a^{8}$`], bonne: 0,
          expl: R`$a^{7-3}\times a^{-2}=a^{4-2}=a^2$.` },
        { theme: "frac", niveau: 0, q: R`Calculer $\dfrac{2^5\times4^3}{8^2}$.`,
          choix: [R`$32$`, R`$16$`, R`$64$`, R`$2$`], bonne: 0,
          expl: R`Tout en base $2$ : $\frac{2^5\times2^6}{2^6}=2^5=32$.` },
        { theme: "frac", niveau: 0, q: R`$(3^2)^4$ est égal à :`,
          choix: [R`$3^8$`, R`$3^6$`, R`$3^{16}$`, R`$9^8$`], bonne: 0,
          expl: R`$(a^n)^m=a^{nm}$ : $3^{2\times4}=3^8$.` },
        { theme: "frac", niveau: 1, q: R`Résoudre dans $\mathbb Z$ : $3^{n+7}+3^{n+13}=730$.`,
          choix: [R`$n=-7$`, R`$n=0$`, R`$n=-6$`, R`Pas de solution`], bonne: 0,
          expl: R`On factorise : $3^{n+7}(1+3^6)=3^{n+7}\times730$. Donc $3^{n+7}=1=3^0$, d'où $n=-7$.` },
        { theme: "frac", niveau: 1, q: R`Résoudre dans $\mathbb R^*$ : $\dfrac{27^x-3^x}{9^x-3^x}=82$.`,
          choix: [R`$x=4$`, R`$x=3$`, R`$x=81$`, R`$x=\ln 82$`], bonne: 0,
          expl: R`Avec $t=3^x$ : $\frac{t^3-t}{t^2-t}=\frac{t(t-1)(t+1)}{t(t-1)}=t+1=82$. Donc $3^x=81=3^4$ et $x=4$.` },

        /* ---------- Racines & conjugué ---------- */
        { theme: "rac", niveau: 0, q: R`Simplifier $\dfrac{1}{\sqrt{11}+\sqrt7}$.`,
          choix: [R`$\dfrac{\sqrt{11}-\sqrt7}{4}$`, R`$\dfrac{\sqrt{11}-\sqrt7}{18}$`, R`$\sqrt{11}-\sqrt7$`, R`$\dfrac{1}{\sqrt{18}}$`], bonne: 0,
          expl: R`On multiplie par la quantité conjuguée : $\frac{\sqrt{11}-\sqrt7}{(\sqrt{11})^2-(\sqrt7)^2}=\frac{\sqrt{11}-\sqrt7}{4}$.` },
        { theme: "rac", niveau: 0, q: R`Simplifier $\dfrac{6}{1+\sqrt7}$.`,
          choix: [R`$\sqrt7-1$`, R`$1-\sqrt7$`, R`$\dfrac{6}{\sqrt8}$`, R`$\dfrac{\sqrt7-1}{6}$`], bonne: 0,
          expl: R`$\frac{6(\sqrt7-1)}{7-1}=\frac{6(\sqrt7-1)}{6}=\sqrt7-1$.` },
        { theme: "rac", niveau: 0, q: R`Simplifier $\dfrac{1-\sqrt3}{1+\sqrt3}$.`,
          choix: [R`$\sqrt3-2$`, R`$2-\sqrt3$`, R`$-1$`, R`$\dfrac{4-2\sqrt3}{4}$`], bonne: 0,
          expl: R`$\frac{(1-\sqrt3)^2}{1-3}=\frac{4-2\sqrt3}{-2}=-2+\sqrt3$.` },
        { theme: "rac", niveau: 0, q: R`Simplifier $\dfrac{1}{\sqrt{n+2}-\sqrt n}$ ($n\geq0$).`,
          choix: [R`$\dfrac{\sqrt{n+2}+\sqrt n}{2}$`, R`$\sqrt{n+2}+\sqrt n$`, R`$\dfrac{1}{\sqrt2}$`, R`$\dfrac{\sqrt{n+2}-\sqrt n}{2}$`], bonne: 0,
          expl: R`$\frac{\sqrt{n+2}+\sqrt n}{(n+2)-n}=\frac{\sqrt{n+2}+\sqrt n}{2}$.` },
        { theme: "rac", niveau: 0, q: R`Pour $a\in\mathbb R$, $\sqrt{a^2}$ est égal à :`,
          choix: [R`$|a|$`, R`$a$`, R`$-a$`, R`$\pm a$`], bonne: 0,
          expl: R`Une racine carrée est toujours positive : $\sqrt{(-3)^2}=\sqrt9=3=|-3|$.` },
        { theme: "rac", niveau: 1, q: R`Simplifier $\dfrac{3+\sqrt2}{1-\sqrt2}-\dfrac{1-\sqrt2}{3+\sqrt2}$.`,
          choix: [R`$-\dfrac{40+24\sqrt2}{7}$`, R`$-\dfrac{40-24\sqrt2}{7}$`, R`$-10-8\sqrt2$`, R`$\dfrac{24\sqrt2}{7}$`], bonne: 0,
          expl: R`$\frac{3+\sqrt2}{1-\sqrt2}=-(3+\sqrt2)(1+\sqrt2)=-(5+4\sqrt2)$ et $\frac{1-\sqrt2}{3+\sqrt2}=\frac{(1-\sqrt2)(3-\sqrt2)}{7}=\frac{5-4\sqrt2}{7}$. Différence : $\frac{-35-28\sqrt2-5+4\sqrt2}{7}=-\frac{40+24\sqrt2}{7}$.` },
        { theme: "rac", niveau: 1, q: R`Simplifier $\dfrac{1-\sqrt5}{\sqrt5+1}-\dfrac{3-2\sqrt5}{\sqrt5-1}$.`,
          choix: [R`$\dfrac{1+\sqrt5}{4}$`, R`$\dfrac{1-\sqrt5}{4}$`, R`$\dfrac{\sqrt5}{2}$`, R`$-1$`], bonne: 0,
          expl: R`Dénominateur commun $(\sqrt5+1)(\sqrt5-1)=4$ : $\frac{(1-\sqrt5)(\sqrt5-1)-(3-2\sqrt5)(\sqrt5+1)}{4}=\frac{(2\sqrt5-6)-(\sqrt5-7)}{4}=\frac{1+\sqrt5}{4}$.` },
        { theme: "rac", niveau: 1, q: R`Simplifier $\sqrt{13-\sqrt{105}}$.`,
          choix: [R`$\dfrac{\sqrt{42}-\sqrt{10}}{2}$`, R`$\sqrt{13}-\sqrt[4]{105}$`, R`$\sqrt{21}-\sqrt5$`, R`$\sqrt7-\sqrt6$`], bonne: 0,
          expl: R`$13-\sqrt{105}=\frac{26-2\sqrt{105}}{2}=\frac{(\sqrt{21}-\sqrt5)^2}{2}$ (car $21+5=26$, $21\times5=105$). Donc la racine vaut $\frac{\sqrt{21}-\sqrt5}{\sqrt2}=\frac{\sqrt{42}-\sqrt{10}}{2}$.` },
        { theme: "rac", niveau: 1, q: R`Simplifier $\sqrt{5+\frac{\sqrt{99}}{2}}+\sqrt{5-\frac{\sqrt{99}}{2}}$.`,
          choix: [R`$\sqrt{11}$`, R`$\sqrt{10}$`, R`$11$`, R`$2\sqrt5$`], bonne: 0,
          expl: R`Notons $S$ cette somme ($S>0$). $S^2=10+2\sqrt{25-\frac{99}{4}}=10+2\times\frac12=11$, donc $S=\sqrt{11}$.` },
        { theme: "rac", niveau: 1, q: R`Simplifier $\sqrt{5+\sqrt{96+16\sqrt{20}}}$.`,
          choix: [R`$2+\sqrt5$`, R`$3+\sqrt5$`, R`$1+2\sqrt5$`, R`$\sqrt{5+4\sqrt6}$`], bonne: 0,
          expl: R`$96+16\sqrt{20}=96+32\sqrt5=(4+4\sqrt5)^2$. Puis $5+4+4\sqrt5=9+4\sqrt5=(2+\sqrt5)^2$.` },

        /* ---------- Équations ---------- */
        { theme: "eq", niveau: 0, q: R`Le discriminant de $ax^2+bx+c$ est :`,
          choix: [R`$b^2-4ac$`, R`$b^2+4ac$`, R`$4ac-b^2$`, R`$b-4ac$`], bonne: 0,
          expl: R`$\Delta=b^2-4ac$. Son signe donne le nombre de solutions réelles.` },
        { theme: "eq", niveau: 0, q: R`Résoudre $x^2-5x+6=0$.`,
          choix: [R`$\{2;3\}$`, R`$\{-2;-3\}$`, R`$\{1;6\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`$\Delta=25-24=1$, donc $x=\frac{5\pm1}{2}$ : $2$ et $3$. (Ou : somme $5$, produit $6$.)` },
        { theme: "eq", niveau: 0, q: R`Résoudre dans $\mathbb R$ : $x^2+x+1=0$.`,
          choix: [R`Pas de solution réelle`, R`$\{-1\}$`, R`$\left\{-\frac12\right\}$`, R`$\{-1;1\}$`], bonne: 0,
          expl: R`$\Delta=1-4=-3<0$ : l'équation n'admet pas de solution réelle.` },
        { theme: "eq", niveau: 0, q: R`Résoudre $\begin{cases}x+y=5\\2x-y=1\end{cases}$`,
          choix: [R`$(2;3)$`, R`$(3;2)$`, R`$(1;4)$`, R`$(2;-3)$`], bonne: 0,
          expl: R`$y=5-x$, donc $2x-(5-x)=1$, soit $3x=6$ : $x=2$, puis $y=3$.` },
        { theme: "eq", niveau: 0, q: R`Résoudre dans $\mathbb R$ : $\dfrac{x-4}{x+4}=0$.`,
          choix: [R`$\{4\}$`, R`$\{-4;4\}$`, R`$\{-4\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`Domaine : $x\neq-4$. Un quotient est nul si et seulement si son numérateur est nul : $x=4$.` },
        { theme: "eq", niveau: 0, q: R`Résoudre dans $\mathbb R$ : $\dfrac{1}{x}=\dfrac{1}{x^2}$.`,
          choix: [R`$\{1\}$`, R`$\{0;1\}$`, R`$\{-1;1\}$`, R`$\mathbb R^*$`], bonne: 0,
          expl: R`Domaine : $x\neq0$. On multiplie par $x^2\neq0$ : $x=1$. La valeur $0$ est exclue du domaine.` },
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $\dfrac{x^2-x}{x-1}=2x+3$.`,
          choix: [R`$\{-3\}$`, R`$\{-3;1\}$`, R`$\{1\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`Domaine : $x\neq1$. Pour $x\neq1$, $\frac{x(x-1)}{x-1}=x$, donc $x=2x+3$, soit $x=-3$. Piège : $1$ n'est pas dans le domaine.` },
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $\dfrac{x-2}{x-3}=x-1$.`,
          choix: [R`$\left\{\frac{5-\sqrt5}{2};\frac{5+\sqrt5}{2}\right\}$`, R`$\{1;5\}$`, R`$\left\{\frac{5+\sqrt5}{2}\right\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`Domaine $x\neq3$. $x-2=(x-1)(x-3)=x^2-4x+3$, d'où $x^2-5x+5=0$, $\Delta=5$, $x=\frac{5\pm\sqrt5}{2}$. Aucune ne vaut $3$.` },
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $\dfrac{7x-5}{x^2+2x+1}=1$.`,
          choix: [R`$\{2;3\}$`, R`$\{-1;2;3\}$`, R`$\{-2;-3\}$`, R`$\{1;6\}$`], bonne: 0,
          expl: R`Domaine : $x\neq-1$ (car $x^2+2x+1=(x+1)^2$). $7x-5=x^2+2x+1\iff x^2-5x+6=0\iff x\in\{2;3\}$.` },
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $\dfrac{1}{1-\frac{x}{x+1}}-x=2$.`,
          choix: [R`$\varnothing$`, R`$\{-1\}$`, R`$\{1\}$`, R`$\mathbb R\setminus\{-1\}$`], bonne: 0,
          expl: R`Pour $x\neq-1$ : $1-\frac{x}{x+1}=\frac{1}{x+1}$, donc $\frac{1}{1-\frac{x}{x+1}}=x+1$. L'équation devient $x+1-x=2$, soit $1=2$ : impossible.` },
        { theme: "eq", niveau: 0, q: R`Résoudre dans $\mathbb R$ : $\sqrt{x-3}+2=9$.`,
          choix: [R`$\{52\}$`, R`$\{10\}$`, R`$\{46\}$`, R`$\{84\}$`], bonne: 0,
          expl: R`Domaine $x\geq3$. $\sqrt{x-3}=7\iff x-3=49\iff x=52$.` },
        { theme: "eq", niveau: 2, q: R`Résoudre dans $\mathbb R$ : $3\sqrt{x+3}-6=x-2$.`,
          choix: [R`$\left\{\frac{1-3\sqrt5}{2};\frac{1+3\sqrt5}{2}\right\}$`, R`$\left\{\frac{1+3\sqrt5}{2}\right\}$`, R`$\{-3;1\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`Domaine $x\geq-3$. L'équation équivaut à $3\sqrt{x+3}=x+4$ : il faut $x+4\geq0$, puis $9(x+3)=(x+4)^2\iff x^2-x-11=0$, $x=\frac{1\pm3\sqrt5}{2}$. Les deux valeurs ($\approx-2{,}85$ et $\approx3{,}85$) vérifient $x\geq-3$ : on garde les deux.` },
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $\ln(x+1)-\ln(x)=1$.`,
          choix: [R`$\left\{\frac{1}{e-1}\right\}$`, R`$\{e-1\}$`, R`$\left\{\frac{e}{e-1}\right\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`Domaine $x>0$. $\ln\frac{x+1}{x}=1\iff\frac{x+1}{x}=e\iff x+1=ex\iff x=\frac{1}{e-1}>0$.` },
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $\ln\left(x+\frac1x\right)=\ln 3$.`,
          choix: [R`$\left\{\frac{3-\sqrt5}{2};\frac{3+\sqrt5}{2}\right\}$`, R`$\left\{\frac{3+\sqrt5}{2}\right\}$`, R`$\{3\}$`, R`$\left\{\frac{-3\pm\sqrt5}{2}\right\}$`], bonne: 0,
          expl: R`Il faut $x+\frac1x>0$, soit $x>0$. Alors $x+\frac1x=3\iff x^2-3x+1=0\iff x=\frac{3\pm\sqrt5}{2}$, deux valeurs strictement positives.` },
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $e^{3x^2-2}=\dfrac{1}{e^{2x}}$.`,
          choix: [R`$\left\{\frac{-1-\sqrt7}{3};\frac{-1+\sqrt7}{3}\right\}$`, R`$\left\{\frac{1\pm\sqrt7}{3}\right\}$`, R`$\left\{\frac23\right\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`$\frac{1}{e^{2x}}=e^{-2x}$, et $\exp$ est injective : $3x^2-2=-2x\iff3x^2+2x-2=0$. $\Delta=28$, $x=\frac{-2\pm2\sqrt7}{6}=\frac{-1\pm\sqrt7}{3}$.` },

        /* ---------- Inégalités & inéquations ---------- */
        { theme: "ineg", niveau: 0, q: R`Si $a\leq b$ et $c<0$, alors :`,
          choix: [R`$ac\geq bc$`, R`$ac\leq bc$`, R`$ac=bc$`, R`On ne peut rien dire`], bonne: 0,
          expl: R`Multiplier par un nombre négatif change le sens de l'inégalité.` },
        { theme: "ineg", niveau: 0, q: R`Si $0<a<b$, alors :`,
          choix: [R`$\dfrac1b<\dfrac1a$`, R`$\dfrac1a<\dfrac1b$`, R`$\dfrac1a=\dfrac1b$`, R`On ne peut rien dire`], bonne: 0,
          expl: R`La fonction inverse est décroissante sur $]0,+\infty[$ : elle change l'ordre.` },
        { theme: "ineg", niveau: 0, q: R`Si $-3\leq a<1$, que peut-on dire de $a^2$ ?`,
          choix: [R`$0\leq a^2\leq 9$`, R`$1<a^2\leq9$`, R`$9\leq a^2<1$`, R`$-9\leq a^2<1$`], bonne: 0,
          expl: R`Piège : on ne peut pas élever au carré une inégalité dont les membres changent de signe. Ici $a$ peut valoir $0$, donc $a^2$ peut valoir $0$ ; et $|a|\leq3$ donc $a^2\leq9$.` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $-6x+3<0$.`,
          choix: [R`$\left]\frac12,+\infty\right[$`, R`$\left]-\infty,\frac12\right[$`, R`$\left]-\frac12,+\infty\right[$`, R`$\left]2,+\infty\right[$`], bonne: 0,
          expl: R`$-6x<-3$, puis en divisant par $-6<0$ (le sens change) : $x>\frac12$.` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $\dfrac13x-2\leq\dfrac12x-1$.`,
          choix: [R`$[-6,+\infty[$`, R`$]-\infty,-6]$`, R`$[6,+\infty[$`, R`$]-\infty,6]$`], bonne: 0,
          expl: R`$-1\leq\frac12x-\frac13x=\frac16x$, donc $x\geq-6$.` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $x^2-2x+1>0$.`,
          choix: [R`$\mathbb R\setminus\{1\}$`, R`$\mathbb R$`, R`$]1,+\infty[$`, R`$\varnothing$`], bonne: 0,
          expl: R`$x^2-2x+1=(x-1)^2$, strictement positif sauf en $x=1$.` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $x^2-3x<10$.`,
          choix: [R`$]-2,5[$`, R`$]-5,2[$`, R`$]-\infty,-2[\,\cup\,]5,+\infty[$`, R`$]-\infty,5[$`], bonne: 0,
          expl: R`$x^2-3x-10=(x-5)(x+2)<0$ : un trinôme est du signe opposé à $a$ entre ses racines.` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $x^2\leq-2x$.`,
          choix: [R`$[-2,0]$`, R`$]-\infty,-2]$`, R`$[0,2]$`, R`$\varnothing$`], bonne: 0,
          expl: R`$x^2+2x\leq0\iff x(x+2)\leq0\iff x\in[-2,0]$. Ne surtout pas diviser par $x$ !` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $\dfrac{x^2}{3}>12$.`,
          choix: [R`$]-\infty,-6[\,\cup\,]6,+\infty[$`, R`$]6,+\infty[$`, R`$]-6,6[$`, R`$]36,+\infty[$`], bonne: 0,
          expl: R`$x^2>36\iff|x|>6$. Ne pas oublier les valeurs négatives !` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $(x-3)^2\leq9$.`,
          choix: [R`$[0,6]$`, R`$[-3,3]$`, R`$]-\infty,6]$`, R`$[0,3]$`], bonne: 0,
          expl: R`$(x-3)^2\leq9\iff|x-3|\leq3\iff-3\leq x-3\leq3\iff0\leq x\leq6$.` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $-3x^2+5x-2\leq0$.`,
          choix: [R`$\left]-\infty,\frac23\right]\cup[1,+\infty[$`, R`$\left[\frac23,1\right]$`, R`$\left]-\infty,-1\right]\cup\left[-\frac23,+\infty\right[$`, R`$\mathbb R$`], bonne: 0,
          expl: R`Racines : $\Delta=25-24=1$, $x=\frac{-5\pm1}{-6}$, soit $\frac23$ et $1$. Avec $a=-3<0$, le trinôme est négatif à l'extérieur des racines.` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $-2x^2-9x-4\geq0$.`,
          choix: [R`$\left[-4,-\frac12\right]$`, R`$\left]-\infty,-4\right]\cup\left[-\frac12,+\infty\right[$`, R`$\left[\frac12,4\right]$`, R`$\varnothing$`], bonne: 0,
          expl: R`$\Delta=81-32=49$, racines $\frac{9\pm7}{-4}$ : $-4$ et $-\frac12$. Avec $a<0$, le trinôme est positif entre les racines.` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $x^2-4x-4\geq0$.`,
          choix: [R`$]-\infty,2-2\sqrt2]\cup[2+2\sqrt2,+\infty[$`, R`$[2-2\sqrt2,2+2\sqrt2]$`, R`$]-\infty,-2]\cup[2,+\infty[$`, R`$\mathbb R$`], bonne: 0,
          expl: R`$\Delta=16+16=32$, racines $\frac{4\pm4\sqrt2}{2}=2\pm2\sqrt2$. Avec $a>0$, positif à l'extérieur.` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $\dfrac{x-4}{x+4}>0$.`,
          choix: [R`$]-\infty,-4[\,\cup\,]4,+\infty[$`, R`$]-4,4[$`, R`$]4,+\infty[$`, R`$]-\infty,-4]\cup[4,+\infty[$`], bonne: 0,
          expl: R`Tableau de signes : le quotient est positif lorsque $x-4$ et $x+4$ sont de même signe, et $-4$ est une valeur interdite.` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $\dfrac{x}{x+2}<1$.`,
          choix: [R`$]-2,+\infty[$`, R`$\mathbb R\setminus\{-2\}$`, R`$]-\infty,-2[$`, R`$\mathbb R$`], bonne: 0,
          expl: R`On ne multiplie pas par $x+2$ (signe inconnu) ! $\frac{x}{x+2}-1=\frac{-2}{x+2}<0\iff x+2>0$.` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $\dfrac{3x-1}{2x+3}\geq-1$.`,
          choix: [R`$\left]-\infty,-\frac32\right[\cup\left[-\frac25,+\infty\right[$`, R`$\left[-\frac25,+\infty\right[$`, R`$\left]-\frac32,-\frac25\right]$`, R`$\left]-\infty,-\frac32\right]\cup\left[-\frac25,+\infty\right[$`], bonne: 0,
          expl: R`$\frac{3x-1}{2x+3}+1=\frac{5x+2}{2x+3}\geq0$. Tableau de signes avec $-\frac25$ (racine du numérateur, incluse) et $-\frac32$ (valeur interdite, exclue).` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $(x-1)(3x-9)(x-3)\leq0$.`,
          choix: [R`$]-\infty,1]\cup\{3\}$`, R`$]-\infty,1]$`, R`$[1,3]$`, R`$]-\infty,1]\cup[3,+\infty[$`], bonne: 0,
          expl: R`$(x-1)(3x-9)(x-3)=3(x-1)(x-3)^2$. Comme $(x-3)^2\geq0$, c'est négatif ou nul si $x\leq1$, ou si $x=3$ (où le produit est nul).` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $\sqrt{2x-5}\leq5$.`,
          choix: [R`$\left[\frac52,15\right]$`, R`$]-\infty,15]$`, R`$\left[\frac52,5\right]$`, R`$[0,15]$`], bonne: 0,
          expl: R`Domaine : $x\geq\frac52$. Les deux membres sont positifs, donc on élève au carré : $2x-5\leq25\iff x\leq15$.` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $\sqrt{2+x}\leq-1$.`,
          choix: [R`$\varnothing$`, R`$[-2,-1]$`, R`$]-\infty,-1]$`, R`$\{-1\}$`], bonne: 0,
          expl: R`Une racine carrée est toujours positive : elle ne peut pas être $\leq-1$.` },
        { theme: "ineg", niveau: 2, q: R`Résoudre $\dfrac{1}{x-2}\geq\dfrac{2}{x+4}$.`,
          choix: [R`$]-\infty,-4[\,\cup\,]2,8]$`, R`$]2,8]$`, R`$]-\infty,8]$`, R`$]-4,2[\,\cup\,[8,+\infty[$`], bonne: 0,
          expl: R`$\frac{1}{x-2}-\frac{2}{x+4}=\frac{(x+4)-2(x-2)}{(x-2)(x+4)}=\frac{8-x}{(x-2)(x+4)}\geq0$. Tableau de signes avec $-4$, $2$ (exclus) et $8$ (inclus).` },

        /* ---------- Logarithme & exponentielle ---------- */
        { theme: "ln", niveau: 0, q: R`Simplifier $\ln3+\ln4+\ln5$.`,
          choix: [R`$\ln60$`, R`$\ln12$`, R`$3\ln12$`, R`$\ln3\times\ln4\times\ln5$`], bonne: 0,
          expl: R`$\ln a+\ln b=\ln(ab)$ : $\ln(3\times4\times5)=\ln60$.` },
        { theme: "ln", niveau: 0, q: R`Simplifier $3\ln3-2\ln2$.`,
          choix: [R`$\ln\dfrac{27}{4}$`, R`$\ln\dfrac{9}{4}$`, R`$\ln5$`, R`$\dfrac{3\ln3}{2\ln2}$`], bonne: 0,
          expl: R`$3\ln3=\ln27$ et $2\ln2=\ln4$, donc $\ln27-\ln4=\ln\frac{27}{4}$.` },
        { theme: "ln", niveau: 0, q: R`Simplifier $\dfrac52\ln3+\dfrac12\ln\left(\dfrac13\right)$.`,
          choix: [R`$\ln9$`, R`$3\ln3$`, R`$\ln\dfrac{5}{6}$`, R`$0$`], bonne: 0,
          expl: R`$\ln\frac13=-\ln3$, donc $\frac52\ln3-\frac12\ln3=2\ln3=\ln9$.` },
        { theme: "ln", niveau: 1, q: R`Simplifier $2\ln\left(1+\frac13\right)+\ln4-2\ln2$.`,
          choix: [R`$\ln\dfrac{16}{9}$`, R`$\ln\dfrac{64}{9}$`, R`$\ln\dfrac{4}{3}$`, R`$0$`], bonne: 0,
          expl: R`$\ln4=2\ln2$, donc il reste $2\ln\frac43=\ln\frac{16}{9}$.` },
        { theme: "ln", niveau: 1, q: R`Simplifier $\ln\frac23+\ln\frac34+\dots+\ln\frac{n}{n+1}$.`,
          choix: [R`$\ln\dfrac{2}{n+1}$`, R`$\ln\dfrac{1}{n+1}$`, R`$\ln\dfrac{n}{n+1}$`, R`$-\ln n$`], bonne: 0,
          expl: R`Somme télescopique : $\ln\left(\frac23\times\frac34\times\dots\times\frac{n}{n+1}\right)=\ln\frac{2}{n+1}$ (tout se simplifie sauf le premier numérateur et le dernier dénominateur).` },
        { theme: "ln", niveau: 1, q: R`Simplifier $\ln\left((3+2\sqrt2)^2\right)+\ln\left((3-2\sqrt2)^2\right)$.`,
          choix: [R`$0$`, R`$\ln 36$`, R`$2\ln 17$`, R`$\ln 2$`], bonne: 0,
          expl: R`$=2\ln\big((3+2\sqrt2)(3-2\sqrt2)\big)=2\ln(9-8)=2\ln1=0$.` },
        { theme: "ln", niveau: 1, q: R`Résoudre $\ln(\ln x)>0$.`,
          choix: [R`$]e,+\infty[$`, R`$]1,+\infty[$`, R`$]0,+\infty[$`, R`$]e^e,+\infty[$`], bonne: 0,
          expl: R`Domaine : $x>0$ et $\ln x>0$, soit $x>1$. Puis $\ln(\ln x)>0=\ln 1\iff\ln x>1\iff x>e$.` },
        { theme: "ln", niveau: 1, q: R`Résoudre $(\ln x)^2<4$.`,
          choix: [R`$]e^{-2},e^2[$`, R`$]0,e^2[$`, R`$]-2,2[$`, R`$]e^{-4},e^4[$`], bonne: 0,
          expl: R`$(\ln x)^2<4\iff-2<\ln x<2\iff e^{-2}<x<e^2$, par stricte croissance de $\exp$.` },
        { theme: "ln", niveau: 1, q: R`Résoudre $e^{-x^2}<e^{-(x+2)^2}$.`,
          choix: [R`$]-\infty,-1[$`, R`$]-1,+\infty[$`, R`$]-2,0[$`, R`$\varnothing$`], bonne: 0,
          expl: R`$\exp$ strictement croissante : $-x^2<-(x+2)^2\iff x^2>x^2+4x+4\iff x<-1$.` },
        { theme: "ln", niveau: 2, q: R`Résoudre $\dfrac{e^x-e^{-x}}{e^x+e^{-x}}<\dfrac13$.`,
          choix: [R`$\left]-\infty,\frac{\ln2}{2}\right[$`, R`$]-\infty,\ln2[$`, R`$\left]\frac{\ln2}{2},+\infty\right[$`, R`$]-\infty,\ln 3[$`], bonne: 0,
          expl: R`Le dénominateur est $>0$ : $3e^x-3e^{-x}<e^x+e^{-x}\iff2e^x<4e^{-x}\iff e^{2x}<2\iff x<\frac{\ln2}{2}$.` },
        { theme: "ln", niveau: 2, q: R`Résoudre $3e^{-9x^2}\geq e^{-x^2}$.`,
          choix: [R`$\left[-\sqrt{\frac{\ln3}{8}},\sqrt{\frac{\ln3}{8}}\right]$`, R`$\left[0,\sqrt{\frac{\ln3}{8}}\right]$`, R`$\left]-\infty,\frac{\ln3}{8}\right]$`, R`$\left[-\frac{\ln3}{8},\frac{\ln3}{8}\right]$`], bonne: 0,
          expl: R`On applique $\ln$ (croissante) : $\ln3-9x^2\geq-x^2\iff8x^2\leq\ln3\iff|x|\leq\sqrt{\frac{\ln3}{8}}$.` },

        /* ---------- Valeurs absolues ---------- */
        { theme: "abs", niveau: 0, q: R`Pour tout réel $x$, $|x^2+4|$ est égal à :`,
          choix: [R`$x^2+4$`, R`$|x|^2-4$`, R`$x^2-4$`, R`$\pm(x^2+4)$`], bonne: 0,
          expl: R`$x^2+4>0$ pour tout $x$, donc la valeur absolue disparaît sans changer le signe.` },
        { theme: "abs", niveau: 0, q: R`Pour $x<5$, $|x-5|$ est égal à :`,
          choix: [R`$5-x$`, R`$x-5$`, R`$x+5$`, R`$-x-5$`], bonne: 0,
          expl: R`Si $x<5$, alors $x-5<0$ et $|x-5|=-(x-5)=5-x$.` },
        { theme: "abs", niveau: 0, q: R`Résoudre $|x-2|\geq4$.`,
          choix: [R`$]-\infty,-2]\cup[6,+\infty[$`, R`$[-2,6]$`, R`$[6,+\infty[$`, R`$]-\infty,-6]\cup[2,+\infty[$`], bonne: 0,
          expl: R`$|x-2|$ est la distance de $x$ à $2$ : elle est $\geq4$ si $x\leq-2$ ou $x\geq6$.` },
        { theme: "abs", niveau: 1, q: R`Résoudre $|1-x|<|x+3|$.`,
          choix: [R`$]-1,+\infty[$`, R`$]-\infty,-1[$`, R`$]-3,1[$`, R`$\mathbb R$`], bonne: 0,
          expl: R`Les deux membres sont positifs, on peut élever au carré : $(1-x)^2<(x+3)^2\iff1-2x<6x+9\iff x>-1$. (Ou : $x$ est plus proche de $1$ que de $-3$.)` },
        { theme: "abs", niveau: 1, q: R`Pour $x\geq2$, l'expression $3|x-2|+|x+2|$ vaut :`,
          choix: [R`$4x-4$`, R`$-2x+8$`, R`$-4x+4$`, R`$4x+4$`], bonne: 0,
          expl: R`Pour $x\geq2$ : $x-2\geq0$ et $x+2>0$, donc $3(x-2)+(x+2)=4x-4$.` },

        /* ---------- Défis Olympiades ---------- */
        { theme: "olym", niveau: 1, q: R`Soient $a,b,c>0$ tels que $ab=100$, $bc=200$, $ac=300$. Que vaut $a+b+c$ ?`,
          choix: [R`$\dfrac{55\sqrt6}{3}$`, R`$600$`, R`$30\sqrt6$`, R`$60$`], bonne: 0,
          expl: R`$(abc)^2=6\times10^6$, donc $abc=1000\sqrt6$. Puis $a=\frac{abc}{bc}=5\sqrt6$, $b=\frac{abc}{ac}=\frac{10\sqrt6}{3}$, $c=\frac{abc}{ab}=10\sqrt6$. Somme : $\frac{55\sqrt6}{3}$.` },
        { theme: "olym", niveau: 1, q: R`Résoudre $\dfrac{(x+2)(x+3)(x+4)(x+5)}{(x-2)(x-3)(x-4)(x-5)}=1$.`,
          choix: [R`$\{0\}$`, R`$\varnothing$`, R`$\{0;-7\}$`, R`$\{2;3;4;5\}$`], bonne: 0,
          expl: R`On regroupe : $(x+2)(x+5)(x+3)(x+4)=(A+7x-1)(A+7x+1)=(A+7x)^2-1$ avec $A=x^2+11$, et de même à droite avec $A-7x$. L'égalité donne $(A+7x)^2=(A-7x)^2$, soit $28xA=0$. Comme $A>0$ : $x=0$.` },
        { theme: "olym", niveau: 1, q: R`Résoudre $a^2+\dfrac{1}{a^2}+b^2+\dfrac{1}{b^2}=4$ (avec $a,b\neq0$). Combien de couples $(a,b)$ de solutions ?`,
          choix: [R`$4$`, R`$1$`, R`$2$`, R`Une infinité`], bonne: 0,
          expl: R`$a^2+\frac1{a^2}-2=\left(a-\frac1a\right)^2$. L'équation devient $\left(a-\frac1a\right)^2+\left(b-\frac1b\right)^2=0$, donc $a=\pm1$ et $b=\pm1$ : $4$ couples.` },
        { theme: "olym", niveau: 1, q: R`Résoudre dans $\mathbb R^+$ : $\sqrt x+\sqrt{x^2}=\sqrt{x^3}+\sqrt{x^4}$.`,
          choix: [R`$\{0;1\}$`, R`$\{1\}$`, R`$\{0\}$`, R`$\mathbb R^+$`], bonne: 0,
          expl: R`Le membre de droite vaut $x(\sqrt x+x)$. On a donc $(\sqrt x+x)(1-x)=0$ : $x=0$ ou $x=1$.` },
        { theme: "olym", niveau: 2, q: R`Calculer $\sqrt{2^{18}+6^{10}+3^{20}}$.`,
          choix: [R`$59\,561$`, R`$59\,049$`, R`$2^9\times3^{10}$`, R`$6^5$`], bonne: 0,
          expl: R`$2^{18}=(2^9)^2$, $3^{20}=(3^{10})^2$ et $6^{10}=2\times2^9\times3^{10}$ : c'est $(2^9+3^{10})^2$. Résultat : $512+59\,049=59\,561$.` },
        { theme: "olym", niveau: 2, q: R`Résoudre $\begin{cases}a-b=11\\\sqrt a+\sqrt b=11\end{cases}$`,
          choix: [R`$(36;25)$`, R`$(25;36)$`, R`$(11;0)$`, R`$(121;110)$`], bonne: 0,
          expl: R`$a-b=(\sqrt a-\sqrt b)(\sqrt a+\sqrt b)$, donc $\sqrt a-\sqrt b=1$. Avec $\sqrt a+\sqrt b=11$ : $\sqrt a=6$, $\sqrt b=5$.` },
        { theme: "olym", niveau: 2, q: R`Résoudre dans $\mathbb R^*_+$ : $x^{\sqrt x}=\sqrt{x}^{\,x}$.`,
          choix: [R`$\{1;4\}$`, R`$\{4\}$`, R`$\{1\}$`, R`$\{2;4\}$`], bonne: 0,
          expl: R`En passant au $\ln$ : $\sqrt x\ln x=\frac x2\ln x$, soit $\ln x\left(\sqrt x-\frac x2\right)=0$. Donc $x=1$ ou $\sqrt x=\frac x2$, c'est-à-dire $x=4$.` }
      ]
    }
  ]
};
