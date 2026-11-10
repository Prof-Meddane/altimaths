/* ==========================================================================
   CONTENU DE L'APPLICATION — c'est le SEUL fichier à modifier pour ajouter
   du cours, des fiches ou des QCM.

   Rappels de syntaxe :
   - Chaque texte est écrit entre R`  ...  ` : on y tape le LaTeX normalement
     ($...$ pour les formules en ligne, $$...$$ pour les formules centrées).
   - Dans le cours, [[ ... ]] crée un « trou » que l'élève touche pour révéler.
   - QCM : "bonne" est le numéro de la bonne réponse dans "choix"
     (0 = la première). L'ordre des choix est mélangé automatiquement.
   - "niveau" : 0 = piste verte (application directe du cours),
     1 = piste bleue (un petit pas de réflexion, faisable de tête),
     2 = piste rouge (il faut écrire un peu, résultat pas évident de tête),
     3 = piste noire (astuce ou raisonnement long).
     La marche normale tire des pistes vertes et bleues ; le passage
     technique, des pistes rouges et noires.
   - Après une modification, augmentez VERSION (1re ligne de sw.js) pour que
     les téléphones des élèves récupèrent la mise à jour.
   ========================================================================== */
const R = String.raw;

window.CONTENU = {
  appli: "AltiMaths",
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
        { theme: "id", niveau: 1, q: R`Calculer mentalement $101^2$.`,
          choix: [R`$10\,201$`, R`$10\,101$`, R`$10\,001$`, R`$1\,201$`], bonne: 0,
          expl: R`$(100+1)^2=100^2+2\times100+1=10\,000+200+1=10\,201$.` },
        { theme: "id", niveau: 0, q: R`Laquelle de ces égalités est vraie pour tous réels $a,b$ ?`,
          choix: [R`$a^3-b^3=(a-b)(a^2+ab+b^2)$`, R`$a^3-b^3=(a-b)^3$`, R`$a^3-b^3=(a-b)(a^2-ab+b^2)$`, R`$a^3-b^3=(a-b)(a+b)^2$`], bonne: 0,
          expl: R`On peut le vérifier en développant : $(a-b)(a^2+ab+b^2)=a^3+a^2b+ab^2-a^2b-ab^2-b^3=a^3-b^3$.` },
        { theme: "id", niveau: 1, q: R`Soient $a,b,c$ tels que $a+b+c=70$ et $a^2+b^2+c^2=850$. Que vaut $ab+ac+bc$ ?`,
          choix: [R`$2025$`, R`$4050$`, R`$4900$`, R`$1012{,}5$`], bonne: 0,
          expl: R`$(a+b+c)^2=a^2+b^2+c^2+2(ab+ac+bc)$, donc $4900=850+2(ab+ac+bc)$, d'où $ab+ac+bc=\frac{4050}{2}=2025$.` },
        { theme: "id", niveau: 1, q: R`Développer $(x+2)(x-2)-(x-1)^2$.`,
          choix: [R`$2x-5$`, R`$-2x-3$`, R`$2x-3$`, R`$-5$`], bonne: 0,
          expl: R`$(x^2-4)-(x^2-2x+1)=x^2-4-x^2+2x-1=2x-5$. Attention au signe moins devant la parenthèse !` },
        { theme: "id", niveau: 2, q: R`Calculer sans calculatrice $\sqrt{17\times18\times19\times20+1}$.`,
          choix: [R`$341$`, R`$340$`, R`$342$`, R`$361$`], bonne: 0,
          expl: R`Avec $x=17$ : $x(x+3)\cdot(x+1)(x+2)+1=X(X+2)+1=(X+1)^2$ où $X=x^2+3x=340$. Le résultat est donc $X+1=341$.` },
        { theme: "id", niveau: 1, q: R`Calculer $\sqrt{9999^2+19999}$.`,
          choix: [R`$10\,000$`, R`$9\,999$`, R`$10\,001$`, R`$9\,999\sqrt2$`], bonne: 0,
          expl: R`$19999=2\times9999+1$, donc $9999^2+2\times9999+1=(9999+1)^2=10000^2$.` },
        { theme: "id", niveau: 2, q: R`Soit $x>0$ tel que $x^4+\dfrac{1}{x^4}=7$. Que vaut $x^6+\dfrac1{x^6}$ ?`,
          choix: [R`$18$`, R`$21$`, R`$27$`, R`$343$`], bonne: 0,
          expl: R`Avec $X=x^2>0$ : $\left(X+\frac1X\right)^2=X^2+\frac1{X^2}+2=9$, donc $X+\frac1X=3$. Puis $X^3+\frac1{X^3}=\left(X+\frac1X\right)^3-3\left(X+\frac1X\right)=27-9=18$.` },
        { theme: "id", niveau: 2, q: R`Résoudre dans $\mathbb R$ : $x^3+x=130$.`,
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
        { theme: "frac", niveau: 1, q: R`Calculer $\dfrac{2^5\times4^3}{8^2}$.`,
          choix: [R`$32$`, R`$16$`, R`$64$`, R`$2$`], bonne: 0,
          expl: R`Tout en base $2$ : $\frac{2^5\times2^6}{2^6}=2^5=32$.` },
        { theme: "frac", niveau: 0, q: R`$(3^2)^4$ est égal à :`,
          choix: [R`$3^8$`, R`$3^6$`, R`$3^{16}$`, R`$9^8$`], bonne: 0,
          expl: R`$(a^n)^m=a^{nm}$ : $3^{2\times4}=3^8$.` },
        { theme: "frac", niveau: 2, q: R`Résoudre dans $\mathbb Z$ : $3^{n+7}+3^{n+13}=730$.`,
          choix: [R`$n=-7$`, R`$n=0$`, R`$n=-6$`, R`Pas de solution`], bonne: 0,
          expl: R`On factorise : $3^{n+7}(1+3^6)=3^{n+7}\times730$. Donc $3^{n+7}=1=3^0$, d'où $n=-7$.` },
        { theme: "frac", niveau: 2, q: R`Résoudre dans $\mathbb R^*$ : $\dfrac{27^x-3^x}{9^x-3^x}=82$.`,
          choix: [R`$x=4$`, R`$x=3$`, R`$x=81$`, R`$x=\ln 82$`], bonne: 0,
          expl: R`Avec $t=3^x$ : $\frac{t^3-t}{t^2-t}=\frac{t(t-1)(t+1)}{t(t-1)}=t+1=82$. Donc $3^x=81=3^4$ et $x=4$.` },

        /* ---------- Racines & conjugué ---------- */
        { theme: "rac", niveau: 1, q: R`Simplifier $\dfrac{1}{\sqrt{11}+\sqrt7}$.`,
          choix: [R`$\dfrac{\sqrt{11}-\sqrt7}{4}$`, R`$\dfrac{\sqrt{11}-\sqrt7}{18}$`, R`$\sqrt{11}-\sqrt7$`, R`$\dfrac{1}{\sqrt{18}}$`], bonne: 0,
          expl: R`On multiplie par la quantité conjuguée : $\frac{\sqrt{11}-\sqrt7}{(\sqrt{11})^2-(\sqrt7)^2}=\frac{\sqrt{11}-\sqrt7}{4}$.` },
        { theme: "rac", niveau: 1, q: R`Simplifier $\dfrac{6}{1+\sqrt7}$.`,
          choix: [R`$\sqrt7-1$`, R`$1-\sqrt7$`, R`$\dfrac{6}{\sqrt8}$`, R`$\dfrac{\sqrt7-1}{6}$`], bonne: 0,
          expl: R`$\frac{6(\sqrt7-1)}{7-1}=\frac{6(\sqrt7-1)}{6}=\sqrt7-1$.` },
        { theme: "rac", niveau: 1, q: R`Simplifier $\dfrac{1-\sqrt3}{1+\sqrt3}$.`,
          choix: [R`$\sqrt3-2$`, R`$2-\sqrt3$`, R`$-1$`, R`$\dfrac{4-2\sqrt3}{4}$`], bonne: 0,
          expl: R`$\frac{(1-\sqrt3)^2}{1-3}=\frac{4-2\sqrt3}{-2}=-2+\sqrt3$.` },
        { theme: "rac", niveau: 1, q: R`Simplifier $\dfrac{1}{\sqrt{n+2}-\sqrt n}$ ($n\geq0$).`,
          choix: [R`$\dfrac{\sqrt{n+2}+\sqrt n}{2}$`, R`$\sqrt{n+2}+\sqrt n$`, R`$\dfrac{1}{\sqrt2}$`, R`$\dfrac{\sqrt{n+2}-\sqrt n}{2}$`], bonne: 0,
          expl: R`$\frac{\sqrt{n+2}+\sqrt n}{(n+2)-n}=\frac{\sqrt{n+2}+\sqrt n}{2}$.` },
        { theme: "rac", niveau: 0, q: R`Pour $a\in\mathbb R$, $\sqrt{a^2}$ est égal à :`,
          choix: [R`$|a|$`, R`$a$`, R`$-a$`, R`$\pm a$`], bonne: 0,
          expl: R`Une racine carrée est toujours positive : $\sqrt{(-3)^2}=\sqrt9=3=|-3|$.` },
        { theme: "rac", niveau: 2, q: R`Simplifier $\dfrac{3+\sqrt2}{1-\sqrt2}-\dfrac{1-\sqrt2}{3+\sqrt2}$.`,
          choix: [R`$-\dfrac{40+24\sqrt2}{7}$`, R`$-\dfrac{40-24\sqrt2}{7}$`, R`$-10-8\sqrt2$`, R`$\dfrac{24\sqrt2}{7}$`], bonne: 0,
          expl: R`$\frac{3+\sqrt2}{1-\sqrt2}=-(3+\sqrt2)(1+\sqrt2)=-(5+4\sqrt2)$ et $\frac{1-\sqrt2}{3+\sqrt2}=\frac{(1-\sqrt2)(3-\sqrt2)}{7}=\frac{5-4\sqrt2}{7}$. Différence : $\frac{-35-28\sqrt2-5+4\sqrt2}{7}=-\frac{40+24\sqrt2}{7}$.` },
        { theme: "rac", niveau: 2, q: R`Simplifier $\dfrac{1-\sqrt5}{\sqrt5+1}-\dfrac{3-2\sqrt5}{\sqrt5-1}$.`,
          choix: [R`$\dfrac{1+\sqrt5}{4}$`, R`$\dfrac{1-\sqrt5}{4}$`, R`$\dfrac{\sqrt5}{2}$`, R`$-1$`], bonne: 0,
          expl: R`Dénominateur commun $(\sqrt5+1)(\sqrt5-1)=4$ : $\frac{(1-\sqrt5)(\sqrt5-1)-(3-2\sqrt5)(\sqrt5+1)}{4}=\frac{(2\sqrt5-6)-(\sqrt5-7)}{4}=\frac{1+\sqrt5}{4}$.` },
        { theme: "rac", niveau: 3, q: R`Simplifier $\sqrt{13-\sqrt{105}}$.`,
          choix: [R`$\dfrac{\sqrt{42}-\sqrt{10}}{2}$`, R`$\sqrt{13}-\sqrt[4]{105}$`, R`$\sqrt{21}-\sqrt5$`, R`$\sqrt7-\sqrt6$`], bonne: 0,
          expl: R`$13-\sqrt{105}=\frac{26-2\sqrt{105}}{2}=\frac{(\sqrt{21}-\sqrt5)^2}{2}$ (car $21+5=26$, $21\times5=105$). Donc la racine vaut $\frac{\sqrt{21}-\sqrt5}{\sqrt2}=\frac{\sqrt{42}-\sqrt{10}}{2}$.` },
        { theme: "rac", niveau: 2, q: R`Simplifier $\sqrt{5+\frac{\sqrt{99}}{2}}+\sqrt{5-\frac{\sqrt{99}}{2}}$.`,
          choix: [R`$\sqrt{11}$`, R`$\sqrt{10}$`, R`$11$`, R`$2\sqrt5$`], bonne: 0,
          expl: R`Notons $S$ cette somme ($S>0$). $S^2=10+2\sqrt{25-\frac{99}{4}}=10+2\times\frac12=11$, donc $S=\sqrt{11}$.` },
        { theme: "rac", niveau: 3, q: R`Simplifier $\sqrt{5+\sqrt{96+16\sqrt{20}}}$.`,
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
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $\dfrac{1}{x}=\dfrac{1}{x^2}$.`,
          choix: [R`$\{1\}$`, R`$\{0;1\}$`, R`$\{-1;1\}$`, R`$\mathbb R^*$`], bonne: 0,
          expl: R`Domaine : $x\neq0$. On multiplie par $x^2\neq0$ : $x=1$. La valeur $0$ est exclue du domaine.` },
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $\dfrac{x^2-x}{x-1}=2x+3$.`,
          choix: [R`$\{-3\}$`, R`$\{-3;1\}$`, R`$\{1\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`Domaine : $x\neq1$. Pour $x\neq1$, $\frac{x(x-1)}{x-1}=x$, donc $x=2x+3$, soit $x=-3$. Piège : $1$ n'est pas dans le domaine.` },
        { theme: "eq", niveau: 2, q: R`Résoudre dans $\mathbb R$ : $\dfrac{x-2}{x-3}=x-1$.`,
          choix: [R`$\left\{\frac{5-\sqrt5}{2};\frac{5+\sqrt5}{2}\right\}$`, R`$\{1;5\}$`, R`$\left\{\frac{5+\sqrt5}{2}\right\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`Domaine $x\neq3$. $x-2=(x-1)(x-3)=x^2-4x+3$, d'où $x^2-5x+5=0$, $\Delta=5$, $x=\frac{5\pm\sqrt5}{2}$. Aucune ne vaut $3$.` },
        { theme: "eq", niveau: 1, q: R`Résoudre dans $\mathbb R$ : $\dfrac{7x-5}{x^2+2x+1}=1$.`,
          choix: [R`$\{2;3\}$`, R`$\{-1;2;3\}$`, R`$\{-2;-3\}$`, R`$\{1;6\}$`], bonne: 0,
          expl: R`Domaine : $x\neq-1$ (car $x^2+2x+1=(x+1)^2$). $7x-5=x^2+2x+1\iff x^2-5x+6=0\iff x\in\{2;3\}$.` },
        { theme: "eq", niveau: 2, q: R`Résoudre dans $\mathbb R$ : $\dfrac{1}{1-\frac{x}{x+1}}-x=2$.`,
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
        { theme: "eq", niveau: 2, q: R`Résoudre dans $\mathbb R$ : $\ln\left(x+\frac1x\right)=\ln 3$.`,
          choix: [R`$\left\{\frac{3-\sqrt5}{2};\frac{3+\sqrt5}{2}\right\}$`, R`$\left\{\frac{3+\sqrt5}{2}\right\}$`, R`$\{3\}$`, R`$\left\{\frac{-3\pm\sqrt5}{2}\right\}$`], bonne: 0,
          expl: R`Il faut $x+\frac1x>0$, soit $x>0$. Alors $x+\frac1x=3\iff x^2-3x+1=0\iff x=\frac{3\pm\sqrt5}{2}$, deux valeurs strictement positives.` },
        { theme: "eq", niveau: 2, q: R`Résoudre dans $\mathbb R$ : $e^{3x^2-2}=\dfrac{1}{e^{2x}}$.`,
          choix: [R`$\left\{\frac{-1-\sqrt7}{3};\frac{-1+\sqrt7}{3}\right\}$`, R`$\left\{\frac{1\pm\sqrt7}{3}\right\}$`, R`$\left\{\frac23\right\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`$\frac{1}{e^{2x}}=e^{-2x}$, et $\exp$ est injective : $3x^2-2=-2x\iff3x^2+2x-2=0$. $\Delta=28$, $x=\frac{-2\pm2\sqrt7}{6}=\frac{-1\pm\sqrt7}{3}$.` },

        /* ---------- Inégalités & inéquations ---------- */
        { theme: "ineg", niveau: 0, q: R`Si $a\leq b$ et $c<0$, alors :`,
          choix: [R`$ac\geq bc$`, R`$ac\leq bc$`, R`$ac=bc$`, R`On ne peut rien dire`], bonne: 0,
          expl: R`Multiplier par un nombre négatif change le sens de l'inégalité.` },
        { theme: "ineg", niveau: 0, q: R`Si $0<a<b$, alors :`,
          choix: [R`$\dfrac1b<\dfrac1a$`, R`$\dfrac1a<\dfrac1b$`, R`$\dfrac1a=\dfrac1b$`, R`On ne peut rien dire`], bonne: 0,
          expl: R`La fonction inverse est décroissante sur $]0,+\infty[$ : elle change l'ordre.` },
        { theme: "ineg", niveau: 1, q: R`Si $-3\leq a<1$, que peut-on dire de $a^2$ ?`,
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
        { theme: "ineg", niveau: 1, q: R`Résoudre $x^2-3x<10$.`,
          choix: [R`$]-2,5[$`, R`$]-5,2[$`, R`$]-\infty,-2[\,\cup\,]5,+\infty[$`, R`$]-\infty,5[$`], bonne: 0,
          expl: R`$x^2-3x-10=(x-5)(x+2)<0$ : un trinôme est du signe opposé à $a$ entre ses racines.` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $x^2\leq-2x$.`,
          choix: [R`$[-2,0]$`, R`$]-\infty,-2]$`, R`$[0,2]$`, R`$\varnothing$`], bonne: 0,
          expl: R`$x^2+2x\leq0\iff x(x+2)\leq0\iff x\in[-2,0]$. Ne surtout pas diviser par $x$ !` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $\dfrac{x^2}{3}>12$.`,
          choix: [R`$]-\infty,-6[\,\cup\,]6,+\infty[$`, R`$]6,+\infty[$`, R`$]-6,6[$`, R`$]36,+\infty[$`], bonne: 0,
          expl: R`$x^2>36\iff|x|>6$. Ne pas oublier les valeurs négatives !` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $(x-3)^2\leq9$.`,
          choix: [R`$[0,6]$`, R`$[-3,3]$`, R`$]-\infty,6]$`, R`$[0,3]$`], bonne: 0,
          expl: R`$(x-3)^2\leq9\iff|x-3|\leq3\iff-3\leq x-3\leq3\iff0\leq x\leq6$.` },
        { theme: "ineg", niveau: 2, q: R`Résoudre $-3x^2+5x-2\leq0$.`,
          choix: [R`$\left]-\infty,\frac23\right]\cup[1,+\infty[$`, R`$\left[\frac23,1\right]$`, R`$\left]-\infty,-1\right]\cup\left[-\frac23,+\infty\right[$`, R`$\mathbb R$`], bonne: 0,
          expl: R`Racines : $\Delta=25-24=1$, $x=\frac{-5\pm1}{-6}$, soit $\frac23$ et $1$. Avec $a=-3<0$, le trinôme est négatif à l'extérieur des racines.` },
        { theme: "ineg", niveau: 2, q: R`Résoudre $-2x^2-9x-4\geq0$.`,
          choix: [R`$\left[-4,-\frac12\right]$`, R`$\left]-\infty,-4\right]\cup\left[-\frac12,+\infty\right[$`, R`$\left[\frac12,4\right]$`, R`$\varnothing$`], bonne: 0,
          expl: R`$\Delta=81-32=49$, racines $\frac{9\pm7}{-4}$ : $-4$ et $-\frac12$. Avec $a<0$, le trinôme est positif entre les racines.` },
        { theme: "ineg", niveau: 2, q: R`Résoudre $x^2-4x-4\geq0$.`,
          choix: [R`$]-\infty,2-2\sqrt2]\cup[2+2\sqrt2,+\infty[$`, R`$[2-2\sqrt2,2+2\sqrt2]$`, R`$]-\infty,-2]\cup[2,+\infty[$`, R`$\mathbb R$`], bonne: 0,
          expl: R`$\Delta=16+16=32$, racines $\frac{4\pm4\sqrt2}{2}=2\pm2\sqrt2$. Avec $a>0$, positif à l'extérieur.` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $\dfrac{x-4}{x+4}>0$.`,
          choix: [R`$]-\infty,-4[\,\cup\,]4,+\infty[$`, R`$]-4,4[$`, R`$]4,+\infty[$`, R`$]-\infty,-4]\cup[4,+\infty[$`], bonne: 0,
          expl: R`Tableau de signes : le quotient est positif lorsque $x-4$ et $x+4$ sont de même signe, et $-4$ est une valeur interdite.` },
        { theme: "ineg", niveau: 1, q: R`Résoudre $\dfrac{x}{x+2}<1$.`,
          choix: [R`$]-2,+\infty[$`, R`$\mathbb R\setminus\{-2\}$`, R`$]-\infty,-2[$`, R`$\mathbb R$`], bonne: 0,
          expl: R`On ne multiplie pas par $x+2$ (signe inconnu) ! $\frac{x}{x+2}-1=\frac{-2}{x+2}<0\iff x+2>0$.` },
        { theme: "ineg", niveau: 2, q: R`Résoudre $\dfrac{3x-1}{2x+3}\geq-1$.`,
          choix: [R`$\left]-\infty,-\frac32\right[\cup\left[-\frac25,+\infty\right[$`, R`$\left[-\frac25,+\infty\right[$`, R`$\left]-\frac32,-\frac25\right]$`, R`$\left]-\infty,-\frac32\right]\cup\left[-\frac25,+\infty\right[$`], bonne: 0,
          expl: R`$\frac{3x-1}{2x+3}+1=\frac{5x+2}{2x+3}\geq0$. Tableau de signes avec $-\frac25$ (racine du numérateur, incluse) et $-\frac32$ (valeur interdite, exclue).` },
        { theme: "ineg", niveau: 2, q: R`Résoudre $(x-1)(3x-9)(x-3)\leq0$.`,
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
        { theme: "ln", niveau: 1, q: R`Simplifier $\dfrac52\ln3+\dfrac12\ln\left(\dfrac13\right)$.`,
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
        { theme: "olym", niveau: 2, q: R`Soient $a,b,c>0$ tels que $ab=100$, $bc=200$, $ac=300$. Que vaut $a+b+c$ ?`,
          choix: [R`$\dfrac{55\sqrt6}{3}$`, R`$600$`, R`$30\sqrt6$`, R`$60$`], bonne: 0,
          expl: R`$(abc)^2=6\times10^6$, donc $abc=1000\sqrt6$. Puis $a=\frac{abc}{bc}=5\sqrt6$, $b=\frac{abc}{ac}=\frac{10\sqrt6}{3}$, $c=\frac{abc}{ab}=10\sqrt6$. Somme : $\frac{55\sqrt6}{3}$.` },
        { theme: "olym", niveau: 3, q: R`Résoudre $\dfrac{(x+2)(x+3)(x+4)(x+5)}{(x-2)(x-3)(x-4)(x-5)}=1$.`,
          choix: [R`$\{0\}$`, R`$\varnothing$`, R`$\{0;-7\}$`, R`$\{2;3;4;5\}$`], bonne: 0,
          expl: R`On regroupe : $(x+2)(x+5)(x+3)(x+4)=(A+7x-1)(A+7x+1)=(A+7x)^2-1$ avec $A=x^2+11$, et de même à droite avec $A-7x$. L'égalité donne $(A+7x)^2=(A-7x)^2$, soit $28xA=0$. Comme $A>0$ : $x=0$.` },
        { theme: "olym", niveau: 2, q: R`Résoudre $a^2+\dfrac{1}{a^2}+b^2+\dfrac{1}{b^2}=4$ (avec $a,b\neq0$). Combien de couples $(a,b)$ de solutions ?`,
          choix: [R`$4$`, R`$1$`, R`$2$`, R`Une infinité`], bonne: 0,
          expl: R`$a^2+\frac1{a^2}-2=\left(a-\frac1a\right)^2$. L'équation devient $\left(a-\frac1a\right)^2+\left(b-\frac1b\right)^2=0$, donc $a=\pm1$ et $b=\pm1$ : $4$ couples.` },
        { theme: "olym", niveau: 2, q: R`Résoudre dans $\mathbb R^+$ : $\sqrt x+\sqrt{x^2}=\sqrt{x^3}+\sqrt{x^4}$.`,
          choix: [R`$\{0;1\}$`, R`$\{1\}$`, R`$\{0\}$`, R`$\mathbb R^+$`], bonne: 0,
          expl: R`Le membre de droite vaut $x(\sqrt x+x)$. On a donc $(\sqrt x+x)(1-x)=0$ : $x=0$ ou $x=1$.` },
        { theme: "olym", niveau: 2, q: R`Calculer $\sqrt{2^{18}+6^{10}+3^{20}}$.`,
          choix: [R`$59\,561$`, R`$59\,049$`, R`$2^9\times3^{10}$`, R`$6^5$`], bonne: 0,
          expl: R`$2^{18}=(2^9)^2$, $3^{20}=(3^{10})^2$ et $6^{10}=2\times2^9\times3^{10}$ : c'est $(2^9+3^{10})^2$. Résultat : $512+59\,049=59\,561$.` },
        { theme: "olym", niveau: 2, q: R`Résoudre $\begin{cases}a-b=11\\\sqrt a+\sqrt b=11\end{cases}$`,
          choix: [R`$(36;25)$`, R`$(25;36)$`, R`$(11;0)$`, R`$(121;110)$`], bonne: 0,
          expl: R`$a-b=(\sqrt a-\sqrt b)(\sqrt a+\sqrt b)$, donc $\sqrt a-\sqrt b=1$. Avec $\sqrt a+\sqrt b=11$ : $\sqrt a=6$, $\sqrt b=5$.` },
        { theme: "olym", niveau: 3, q: R`Résoudre dans $\mathbb R^*_+$ : $x^{\sqrt x}=\sqrt{x}^{\,x}$.`,
          choix: [R`$\{1;4\}$`, R`$\{4\}$`, R`$\{1\}$`, R`$\{2;4\}$`], bonne: 0,
          expl: R`En passant au $\ln$ : $\sqrt x\ln x=\frac x2\ln x$, soit $\ln x\left(\sqrt x-\frac x2\right)=0$. Donc $x=1$ ou $\sqrt x=\frac x2$, c'est-à-dire $x=4$.` },
        /* ---------- Pistes vertes ajoutées ---------- */
        { theme: "id", niveau: 0, q: R`Développer $(x+1)^2$.`,
          choix: [R`$x^2+2x+1$`, R`$x^2+1$`, R`$x^2+x+1$`, R`$2x+2$`], bonne: 0,
          expl: R`$(a+b)^2=a^2+2ab+b^2$ avec $a=x$, $b=1$.` },
        { theme: "id", niveau: 0, q: R`Factoriser $x^2-9$.`,
          choix: [R`$(x-3)(x+3)$`, R`$(x-3)^2$`, R`$(x-9)(x+1)$`, R`$(x-9)(x+9)$`], bonne: 0,
          expl: R`$x^2-9=x^2-3^2=(x-3)(x+3)$.` },
        { theme: "id", niveau: 0, q: R`Développer $(x-5)(x+5)$.`,
          choix: [R`$x^2-25$`, R`$x^2+25$`, R`$x^2-10x-25$`, R`$x^2-5$`], bonne: 0,
          expl: R`$(a-b)(a+b)=a^2-b^2$ : $x^2-5^2=x^2-25$.` },
        { theme: "frac", niveau: 0, q: R`Calculer $\dfrac12+\dfrac13$.`,
          choix: [R`$\dfrac56$`, R`$\dfrac25$`, R`$\dfrac16$`, R`$\dfrac23$`], bonne: 0,
          expl: R`Dénominateur commun $6$ : $\frac36+\frac26=\frac56$.` },
        { theme: "frac", niveau: 0, q: R`Simplifier $\dfrac{6}{8}$.`,
          choix: [R`$\dfrac34$`, R`$\dfrac23$`, R`$\dfrac{3}{8}$`, R`$\dfrac{6}{4}$`], bonne: 0,
          expl: R`On divise numérateur et dénominateur par $2$.` },
        { theme: "frac", niveau: 0, q: R`Calculer $2^3\times2^2$.`,
          choix: [R`$2^5=32$`, R`$2^6=64$`, R`$4^5$`, R`$2^1$`], bonne: 0,
          expl: R`$a^m\times a^n=a^{m+n}$ : $2^{3+2}=2^5=32$.` },
        { theme: "frac", niveau: 0, q: R`Que vaut $10^{-2}$ ?`,
          choix: [R`$0{,}01$`, R`$-100$`, R`$-20$`, R`$0{,}1$`], bonne: 0,
          expl: R`$10^{-2}=\frac{1}{10^2}=\frac{1}{100}=0{,}01$.` },
        { theme: "rac", niveau: 0, q: R`Que vaut $\sqrt{4\times 9}$ ?`,
          choix: [R`$6$`, R`$13$`, R`$36$`, R`$\sqrt{13}$`], bonne: 0,
          expl: R`$\sqrt{ab}=\sqrt a\sqrt b$ pour $a,b\geq0$ : $2\times3=6$.` },
        { theme: "rac", niveau: 0, q: R`Simplifier $\sqrt{12}$.`,
          choix: [R`$2\sqrt3$`, R`$3\sqrt2$`, R`$4\sqrt3$`, R`$6$`], bonne: 0,
          expl: R`$\sqrt{12}=\sqrt{4\times3}=2\sqrt3$.` },
        { theme: "eq", niveau: 0, q: R`Résoudre $2x+6=0$.`,
          choix: [R`$\{-3\}$`, R`$\{3\}$`, R`$\{-6\}$`, R`$\{-\tfrac13\}$`], bonne: 0,
          expl: R`$2x=-6$ donc $x=-3$.` },
        { theme: "eq", niveau: 0, q: R`Résoudre dans $\mathbb R$ : $x^2=9$.`,
          choix: [R`$\{-3;3\}$`, R`$\{3\}$`, R`$\{9\}$`, R`$\{-9;9\}$`], bonne: 0,
          expl: R`$x^2=9\iff x=3$ ou $x=-3$. Ne pas oublier la solution négative !` },
        { theme: "eq", niveau: 0, q: R`Résoudre $3x-4=x+2$.`,
          choix: [R`$\{3\}$`, R`$\{-3\}$`, R`$\{\tfrac12\}$`, R`$\{1\}$`], bonne: 0,
          expl: R`$3x-x=2+4$, soit $2x=6$, donc $x=3$.` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $-2x>4$.`,
          choix: [R`$]-\infty,-2[$`, R`$]-2,+\infty[$`, R`$]2,+\infty[$`, R`$]-\infty,2[$`], bonne: 0,
          expl: R`On divise par $-2<0$ : le sens change, $x<-2$.` },
        { theme: "ineg", niveau: 0, q: R`Résoudre $3x\leq 6$.`,
          choix: [R`$]-\infty,2]$`, R`$[2,+\infty[$`, R`$]-\infty,3]$`, R`$]-\infty,2[$`], bonne: 0,
          expl: R`On divise par $3>0$ : $x\leq2$.` },
        { theme: "ln", niveau: 0, q: R`Que vaut $\ln 1$ ?`,
          choix: [R`$0$`, R`$1$`, R`$e$`, R`Il n'est pas défini`], bonne: 0,
          expl: R`$\ln 1=0$ car $e^0=1$.` },
        { theme: "ln", niveau: 0, q: R`Simplifier $e^{\ln 5}$.`,
          choix: [R`$5$`, R`$\ln 5$`, R`$e^5$`, R`$1$`], bonne: 0,
          expl: R`$\exp$ et $\ln$ sont réciproques : $e^{\ln a}=a$ pour $a>0$.` },
        { theme: "abs", niveau: 0, q: R`Que vaut $|-5|+|2|$ ?`,
          choix: [R`$7$`, R`$-3$`, R`$3$`, R`$-7$`], bonne: 0,
          expl: R`$|-5|=5$ et $|2|=2$, donc $7$.` }
      ]
    },
    {
      id: "ch1",
      numero: 1,
      titre: "Logique",
      objectif: R`Maîtriser le langage mathématique : ensembles de nombres, valeur absolue, connecteurs, quantificateurs, négations, implications et les grands types de raisonnement, dont la récurrence.`,

      themes: [
        { id: "ens",  titre: "Réels et valeur absolue", icone: "ℝ" },
        { id: "pe",   titre: "Partie entière",          icone: "⌊x⌋" },
        { id: "quant",titre: "Connecteurs et quantificateurs", icone: "∀" },
        { id: "neg",  titre: "Négation et implication", icone: "⇒" },
        { id: "rais", titre: "Types de raisonnement",   icone: "∴" },
        { id: "rec",  titre: "Récurrence",              icone: "n+1" }
      ],

      cours: [
        { type: "section", titre: "1. Les ensembles numériques" },
        { type: "sous", titre: "Rappels du lycée" },
        { type: "prop", titre: "Les ensembles usuels", texte: R`
          <ul style="padding-left:20px;margin:6px 0">
          <li>$\mathbb N$ : les entiers naturels $0,1,2,\dots$</li>
          <li>$\mathbb Z$ : les entiers relatifs $\dots,-2,-1,0,1,2,\dots$</li>
          <li>$\mathbb Q$ : les rationnels, de la forme $\dfrac pq$ avec $p\in$ [[$\mathbb Z$]] et $q\in$ [[$\mathbb N^*$]]</li>
          <li>$\mathbb R$ : tous les nombres réels, par exemple $1$, $\sqrt2$, $\pi$</li>
          </ul>
          L'appartenance se note $\in$ : « $n$ est un entier naturel » s'écrit $n\in\mathbb N$.` },
        { type: "sous", titre: "Valeur absolue et distance" },
        { type: "prop", titre: "Définition (Valeur absolue)", texte: R`
          Pour $x\in\mathbb R$ :
          <div class="ligne">$|x| =$ [[$\begin{cases}x & \text{si } x\geq0\\ -x & \text{si } x<0\end{cases}$]]</div>` },
        { type: "prop", titre: "Proposition (Quelques identités)", texte: R`
          <ol>
          <li>Pour tout $x\in\mathbb R$, $|x|\geq0$.</li>
          <li>Pour tout $x\in\mathbb R$, $\sqrt{x^2}=$ [[$|x|$]].</li>
          <li>Pour tout $x\in\mathbb R$, $|x|^2=$ [[$x^2$]].</li>
          <li>Pour tous $x,y$, $|xy|=$ [[$|x|\,|y|$]] et, si $y\neq0$, $\left|\frac xy\right|=\frac{|x|}{|y|}$.</li>
          </ol>` },
        { type: "prop", titre: "Proposition (Inégalité de la valeur absolue)", texte: R`
          Pour tout $x\in\mathbb R$ : <div class="ligne">[[$-|x|\leq x\leq|x|$]]</div>
          Application : $|x|=0\iff x=0$.` },
        { type: "prop", titre: "Proposition (Inégalités triangulaires)", texte: R`
          Pour tous $a,b\in\mathbb R$ :
          <div class="ligne">[[$|a|-|b|\leq|a+b|\leq|a|+|b|$]]</div>
          L'inégalité de droite est l'<strong>inégalité triangulaire</strong>, celle de gauche la <strong>seconde inégalité triangulaire</strong>. Preuve : comparer $|a+b|^2$ et $(|a|+|b|)^2$.` },
        { type: "prop", titre: "Définition (Distance sur les réels)", texte: R`
          Pour $x,y\in\mathbb R$, la distance de $x$ à $y$ est
          <div class="ligne">$d(x,y)=$ [[$|x-y|$]]</div>
          Ainsi $|x-y|\leq r\iff y-r\leq x\leq y+r\iff x\in[y-r\,;\,y+r]$.` },
        { type: "exemple", texte: R`$|x-2|\leq4\iff d(x,2)\leq4\iff-2\leq x\leq6\iff x\in[-2\,;\,6]$.` },
        { type: "sous", titre: "Maximum et borne supérieure" },
        { type: "prop", titre: "Définition (Maximum, minimum)", texte: R`
          $\max(a,b)=b$ si $a\leq b$, $\max(a,b)=a$ sinon ; $\min(a,b)=a$ si $a\leq b$, $\min(a,b)=b$ sinon.
          Pour un ensemble fini $E=\{x_1\leq x_2\leq\dots\leq x_n\}$ : $\min E=x_1$ et $\max E=x_n$.` },
        { type: "remarque", texte: R`Pour un ensemble infini, le plus grand élément peut ne pas exister : $E=[0,1[$ a un plus petit élément, $0$, mais pas de plus grand élément, car $1\notin E$.` },
        { type: "prop", titre: "Définition (Majorant, minorant)", texte: R`
          $M$ <strong>majore</strong> $E$ si pour tout $x\in E$, [[$x\leq M$]]. $m$ <strong>minore</strong> $E$ si pour tout $x\in E$, [[$m\leq x$]]. $E$ est <strong>borné</strong> s'il est majoré et minoré.` },
        { type: "prop", titre: "Définition (Borne supérieure)", texte: R`
          $M$ est la borne supérieure de $E$, notée $\sup E$, si $M$ est [[le plus petit des majorants de $E$]] :
          <ol><li>$M$ majore $E$ ;</li><li>si $M'$ est un autre majorant de $E$, alors $M\leq M'$.</li></ol>
          Caractérisation (hors programme) : pour tout $\varepsilon>0$, $\,]M-\varepsilon,M]\cap E\neq\varnothing$.` },
        { type: "prop", titre: "Théorème (Propriété de la borne supérieure, hors programme)", texte: R`
          Toute partie de $\mathbb R$ [[non vide et majorée]] admet une borne supérieure.` },

        { type: "section", titre: "2. Logique" },
        { type: "sous", titre: "Vocabulaire et connecteurs logiques" },
        { type: "prop", titre: "Vocabulaire", texte: R`
          <ul style="padding-left:20px;margin:6px 0">
          <li>Une <strong>définition</strong> nomme un objet ou une propriété : [[elle ne se démontre pas]].</li>
          <li>Une <strong>proposition</strong> est un énoncé auquel on peut attribuer [[une valeur de vérité (Vrai ou Faux)]].</li>
          <li>Un <strong>théorème</strong> est une proposition vraie importante ; sa <strong>démonstration</strong> enchaîne des déductions logiques.</li>
          <li>Un <strong>prédicat</strong> est un énoncé qui dépend d'une ou plusieurs variables.</li>
          </ul>` },
        { type: "prop", titre: "Définition (et, ou)", texte: R`
          « $\mathcal P$ et $\mathcal Q$ » est vraie lorsque [[$\mathcal P$ et $\mathcal Q$ sont toutes les deux vraies]].<br>
          « $\mathcal P$ ou $\mathcal Q$ » est vraie lorsque [[au moins l'une des deux est vraie]].
          <table class="verite"><tr><th>$\mathcal P$</th><th>$\mathcal Q$</th><th>$\mathcal P$ et $\mathcal Q$</th><th>$\mathcal P$ ou $\mathcal Q$</th></tr>
          <tr><td>V</td><td>V</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td><td>V</td></tr>
          <tr><td>F</td><td>V</td><td>F</td><td>V</td></tr><tr><td>F</td><td>F</td><td>F</td><td>F</td></tr></table>` },
        { type: "prop", titre: "Définition (Quantificateurs)", texte: R`
          $\forall$ se lit [[« pour tout »]] (quantificateur universel) ; $\exists$ se lit [[« il existe »]] (quantificateur existentiel).<br>
          « Pour tout $x\in E$, $\mathcal P(x)$ » s'écrit $\forall x\in E,\ \mathcal P(x)$.` },
        { type: "attention", texte: R`« Il existe » signifie « il existe <strong>au moins</strong> un ». Pour « il existe un unique », on écrit $\exists!$.` },
        { type: "prop", titre: "Définition (Égalité logique)", texte: R`$\mathcal P\equiv\mathcal Q$ signifie : $\mathcal P$ est vraie si et seulement si $\mathcal Q$ est vraie. Méthode : comparer les tables de vérité.` },

        { type: "sous", titre: "Négation et implication" },
        { type: "prop", titre: "Définition (Négation)", texte: R`$\text{non}\,\mathcal P$ est vraie si $\mathcal P$ est fausse, fausse si $\mathcal P$ est vraie. Exemple : pour $n\in\mathbb Z$, la négation de « $n\geq0$ » est « $n<0$ ».` },
        { type: "prop", titre: "Définition (Négation des quantificateurs)", texte: R`
          <div class="ligne">$\text{non}\left(\forall x\in E,\ \mathcal P(x)\right)\equiv$ [[$\exists x\in E,\ \text{non}\,\mathcal P(x)$]]</div>
          <div class="ligne">$\text{non}\left(\exists x\in E,\ \mathcal P(x)\right)\equiv$ [[$\forall x\in E,\ \text{non}\,\mathcal P(x)$]]</div>` },
        { type: "exemple", texte: R`La négation de « tous les élèves ont eu plus de 10 » est « il existe au moins un élève qui a eu une note inférieure ou égale à 10 ».` },
        { type: "prop", titre: "Proposition (Double négation)", texte: R`$\text{non}\left(\text{non}\,\mathcal P\right)\equiv$ [[$\mathcal P$]]` },
        { type: "prop", titre: "Définition (Implication, équivalence)", texte: R`
          <ol><li>$\mathcal P\Longrightarrow\mathcal Q$ a la même valeur logique que [[$\mathcal Q$ ou $\text{non}\,\mathcal P$]].</li>
          <li>$\mathcal P\Longleftrightarrow\mathcal Q$ signifie $\mathcal P\Rightarrow\mathcal Q$ et $\mathcal Q\Rightarrow\mathcal P$.</li></ol>
          <table class="verite"><tr><th>$\mathcal P$</th><th>$\mathcal Q$</th><th>$\mathcal P\Rightarrow\mathcal Q$</th></tr>
          <tr><td>V</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td></tr><tr><td>F</td><td>V</td><td>V</td></tr><tr><td>F</td><td>F</td><td>V</td></tr></table>` },
        { type: "attention", texte: R`Une implication peut être vraie alors que $\mathcal P$ et $\mathcal Q$ sont fausses : « $1\leq0\Rightarrow2\geq0$ » est vraie. Une proposition fausse implique n'importe quoi.` },
        { type: "prop", titre: "Propriétés (Règles de De Morgan)", texte: R`
          <div class="ligne">$\text{non}\left(\mathcal P\text{ ou }\mathcal Q\right)\equiv$ [[$\text{non}\,\mathcal P\text{ et }\text{non}\,\mathcal Q$]]</div>
          <div class="ligne">$\text{non}\left(\mathcal P\text{ et }\mathcal Q\right)\equiv$ [[$\text{non}\,\mathcal P\text{ ou }\text{non}\,\mathcal Q$]]</div>` },
        { type: "exemple", texte: R`La négation de « $n$ est un multiple de $2$ et de $3$ » est « $n$ n'est pas un multiple de $2$ ou $n$ n'est pas un multiple de $3$ ». La négation de « j'ai un chat ou un chien » est « je n'ai ni chat ni chien ».` },

        { type: "section", titre: "3. Différents types de raisonnements" },
        { type: "sous", titre: "Prouver une implication" },
        { type: "prop", titre: "Raisonnement direct", texte: R`Pour montrer $\mathcal P\Rightarrow\mathcal Q$, on [[suppose $\mathcal P$ vraie et on en déduit $\mathcal Q$]]. Exemple : si $x\geq1$, alors $x^2\geq1$ par croissance de la fonction carré sur $\mathbb R_+$.` },
        { type: "prop", titre: "Raisonnement par contraposée", texte: R`$\mathcal P\Rightarrow\mathcal Q$ a la même valeur logique que sa contraposée :
          <div class="ligne">[[$\text{non}\,\mathcal Q\Longrightarrow\text{non}\,\mathcal P$]]</div>
          Exemple : la contraposée du théorème de Pythagore est « si $AB^2+AC^2\neq BC^2$, alors $ABC$ n'est pas rectangle en $A$ ».` },
        { type: "attention", texte: R`La contraposée n'est pas la négation. La négation de $\mathcal P\Rightarrow\mathcal Q$ est [[$\mathcal P$ et $\text{non}\,\mathcal Q$]], qui ne s'écrit pas avec une implication.` },
        { type: "sous", titre: "Prouver ou infirmer une proposition" },
        { type: "prop", titre: "Axiomes (Tiers exclu, non-contradiction)", texte: R`Pour toute proposition $\mathcal P$ : « $\mathcal P$ ou $\text{non}\,\mathcal P$ » est vraie (tiers exclu) ; « $\mathcal P$ et $\text{non}\,\mathcal P$ » est fausse (non-contradiction).` },
        { type: "prop", titre: "Contre-exemple", texte: R`Pour prouver qu'une proposition « pour tout… » est fausse, il suffit de [[trouver un contre-exemple]], c'est-à-dire un exemple qui vérifie sa négation.` },
        { type: "exemple", texte: R`« Tout entier naturel est le carré d'un entier » est faux : $2$ n'est pas un carré, car $\sqrt2\approx1{,}414$ n'est pas entier.` },
        { type: "prop", titre: "Raisonnement par l'absurde", texte: R`Pour prouver $\mathcal P$, on [[suppose $\text{non}\,\mathcal P$ et on aboutit à une contradiction]]. Pour une implication $\mathcal P\Rightarrow\mathcal Q$, on suppose $\mathcal P$ et $\text{non}\,\mathcal Q$. Exemple typique : $\sqrt2$ est irrationnel.` },
        { type: "sous", titre: "Raisonnement par équivalence" },
        { type: "prop", titre: "Double implication", texte: R`Pour montrer $\mathcal P\Leftrightarrow\mathcal Q$, on peut montrer $\mathcal P\Rightarrow\mathcal Q$ puis $\mathcal Q\Rightarrow\mathcal P$. Exemple : $n$ est pair si et seulement si $n^2$ est pair (sens réciproque par contraposée : si $n=2k+1$, alors $n^2=2(2k^2+2k)+1$ est impair).` },
        { type: "prop", titre: "Équivalence circulaire", texte: R`Pour montrer que $\mathcal P_1$, $\mathcal P_2$, $\mathcal P_3$ sont équivalentes, il suffit de montrer [[$\mathcal P_1\Rightarrow\mathcal P_2\Rightarrow\mathcal P_3\Rightarrow\mathcal P_1$]]. Exemple : les trois formulations de l'indépendance de deux événements $A$ et $B$.` },
        { type: "sous", titre: "Raisonnement par récurrence" },
        { type: "prop", titre: "Axiome (Principe de récurrence)", texte: R`
          <div class="ligne">$\mathcal P(0)$ et $\left(\forall n\in\mathbb N,\ \mathcal P(n)\Rightarrow\mathcal P(n+1)\right)\ \equiv\ \forall n\in\mathbb N,\ \mathcal P(n)$</div>` },
        { type: "prop", titre: "Méthode (Rédiger une récurrence)", texte: R`
          <ol><li>Écrire précisément la propriété $\mathcal P(n)$.</li>
          <li><strong>Initialisation :</strong> [[vérifier $\mathcal P(0)$]].</li>
          <li><strong>Hérédité :</strong> « Soit $n\in\mathbb N$. Supposons $\mathcal P(n)$ et montrons [[$\mathcal P(n+1)$]]. »</li>
          <li><strong>Conclusion :</strong> par récurrence, $\mathcal P(n)$ est vraie pour tout $n\in\mathbb N$.</li></ol>` },
        { type: "exemple", texte: R`$1+2+\dots+n=\dfrac{n(n+1)}{2}$. Hérédité : $\dfrac{n(n+1)}{2}+(n+1)=\dfrac{(n+1)(n+2)}{2}$.` },
        { type: "prop", titre: "Récurrence double et récurrence forte", texte: R`
          <ul style="padding-left:20px;margin:6px 0">
          <li><strong>Double :</strong> on montre [[$\mathcal P(n_0)$ et $\mathcal P(n_0+1)$]], puis $\left(\mathcal P(n)\text{ et }\mathcal P(n+1)\right)\Rightarrow\mathcal P(n+2)$. Adaptée aux suites $u_{n+2}=f(u_{n+1},u_n)$.</li>
          <li><strong>Forte :</strong> on montre $\mathcal P(n_0)$, puis $\left(\mathcal P(n_0),\dots,\mathcal P(n)\right)\Rightarrow\mathcal P(n+1)$.</li>
          </ul>` },
        { type: "attention", texte: R`Le nombre d'initialisations doit correspondre au nombre de termes dont dépend la relation de récurrence.` },

        { type: "section", titre: "4. La fonction partie entière" },
        { type: "prop", titre: "Proposition", texte: R`Toute partie non vide de $\mathbb N$ admet [[un plus petit élément]]. Conséquence : toute partie de $\mathbb Z$ non vide et majorée admet un plus grand élément.` },
        { type: "prop", titre: "Proposition (Principe des tiroirs)", texte: R`Si l'on range $n+1$ objets dans $n$ tiroirs, alors [[un tiroir contient au moins deux objets]].` },
        { type: "prop", titre: "Définition (Partie entière)", texte: R`Pour $x\in\mathbb R$, la partie entière de $x$, notée $\lfloor x\rfloor$, est [[le plus grand entier relatif inférieur ou égal à $x$]]. Elle existe pour tout réel $x$.` },
        { type: "prop", titre: "Proposition (Caractérisation)", texte: R`Pour $n\in\mathbb Z$ :
          <div class="ligne">$n=\lfloor x\rfloor\iff$ [[$n\leq x<n+1$]]</div>` },
        { type: "exemple", texte: R`$\lfloor 4{,}2\rfloor=4$, $\lfloor -1{,}5\rfloor=-2$, $\lfloor\pi\rfloor=3$, $\lfloor-\pi\rfloor=-4$. Attention aux nombres négatifs !` },
        { type: "prop", titre: "Théorème (Approximation décimale)", texte: R`Pour tout $n\in\mathbb N$, $\dfrac{\lfloor 10^nx\rfloor}{10^n}$ est rationnel et $\displaystyle\lim_{n\to+\infty}\left|x-\frac{\lfloor10^nx\rfloor}{10^n}\right|=0$.` },

        { type: "section", titre: "5. Rédiger rigoureusement" },
        { type: "prop", titre: "Méthode", texte: R`
          <ol><li>Introduire les variables et leur ensemble d'appartenance (« Soit $n\in\mathbb N$ »).</li>
          <li>Citer les résultats utilisés (nommer le théorème ou la propriété).</li>
          <li>Mettre en évidence les résultats.</li></ol>
          Schéma à garder en tête : [[on sait que…, or d'après…, on en déduit que…]]` }
      ],

      fiches: [
        { recto: R`$\mathbb Q$ (définition)`, verso: R`$\left\{\dfrac pq,\ p\in\mathbb Z,\ q\in\mathbb N^*\right\}$` },
        { recto: R`$\sqrt{x^2}$`, verso: R`$|x|$` },
        { recto: R`Inégalités triangulaires`, verso: R`$|a|-|b|\leq|a+b|\leq|a|+|b|$` },
        { recto: R`$|x-a|\leq r$ équivaut à…`, verso: R`$a-r\leq x\leq a+r$, soit $x\in[a-r\,;\,a+r]$` },
        { recto: R`Borne supérieure de $E$`, verso: R`Le plus petit des majorants de $E$` },
        { recto: R`Négation de $\forall x\in E,\ \mathcal P(x)$`, verso: R`$\exists x\in E,\ \text{non}\,\mathcal P(x)$` },
        { recto: R`Négation de $\exists x\in E,\ \mathcal P(x)$`, verso: R`$\forall x\in E,\ \text{non}\,\mathcal P(x)$` },
        { recto: R`$\text{non}(\mathcal P\text{ et }\mathcal Q)$`, verso: R`$\text{non}\,\mathcal P\text{ ou }\text{non}\,\mathcal Q$` },
        { recto: R`$\text{non}(\mathcal P\text{ ou }\mathcal Q)$`, verso: R`$\text{non}\,\mathcal P\text{ et }\text{non}\,\mathcal Q$` },
        { recto: R`$\mathcal P\Rightarrow\mathcal Q$ a la même valeur que…`, verso: R`$\mathcal Q\text{ ou }\text{non}\,\mathcal P$` },
        { recto: R`Contraposée de $\mathcal P\Rightarrow\mathcal Q$`, verso: R`$\text{non}\,\mathcal Q\Rightarrow\text{non}\,\mathcal P$` },
        { recto: R`Négation de $\mathcal P\Rightarrow\mathcal Q$`, verso: R`$\mathcal P\text{ et }\text{non}\,\mathcal Q$` },
        { recto: R`Raisonnement par l'absurde`, verso: R`Supposer $\text{non}\,\mathcal P$ et aboutir à une contradiction` },
        { recto: R`Les trois étapes d'une récurrence`, verso: R`Initialisation, hérédité, conclusion` },
        { recto: R`Initialisation d'une récurrence double`, verso: R`Vérifier $\mathcal P(n_0)$ et $\mathcal P(n_0+1)$` },
        { recto: R`Caractérisation de $\lfloor x\rfloor$`, verso: R`$\lfloor x\rfloor\leq x<\lfloor x\rfloor+1$` },
        { recto: R`$1+2+\dots+n$`, verso: R`$\dfrac{n(n+1)}{2}$` },
        { recto: R`$1+q+\dots+q^n$ ($q\neq1$)`, verso: R`$\dfrac{1-q^{n+1}}{1-q}$` }
      ],

      questions: [
        /* ---------- Réels et valeur absolue ---------- */
        { theme: "ens", niveau: 0, q: R`Lequel de ces nombres n'est pas rationnel ?`,
          choix: [R`$\sqrt2$`, R`$0{,}75$`, R`$-\dfrac{7}{3}$`, R`$\sqrt{9}$`], bonne: 0,
          expl: R`$0{,}75=\frac34$, $-\frac73$ et $\sqrt9=3$ sont rationnels. $\sqrt2$ est irrationnel (démonstration par l'absurde).` },
        { theme: "ens", niveau: 0, q: R`Pour tout réel $x$, $\sqrt{x^2}$ est égal à :`,
          choix: [R`$|x|$`, R`$x$`, R`$-x$`, R`$x^2$`], bonne: 0,
          expl: R`Une racine carrée est positive : $\sqrt{(-2)^2}=2=|-2|$.` },
        { theme: "ens", niveau: 0, q: R`Écrire $|1-\sqrt3|$ sans valeur absolue.`,
          choix: [R`$\sqrt3-1$`, R`$1-\sqrt3$`, R`$1+\sqrt3$`, R`$-1-\sqrt3$`], bonne: 0,
          expl: R`$\sqrt3\approx1{,}73>1$, donc $1-\sqrt3<0$ et $|1-\sqrt3|=\sqrt3-1$.` },
        { theme: "ens", niveau: 1, q: R`Écrire $|3\sqrt2-5|$ sans valeur absolue.`,
          choix: [R`$5-3\sqrt2$`, R`$3\sqrt2-5$`, R`$5+3\sqrt2$`, R`$\sqrt{18}+5$`], bonne: 0,
          expl: R`$3\sqrt2=\sqrt{18}<\sqrt{25}=5$, donc $3\sqrt2-5<0$.` },
        { theme: "ens", niveau: 0, q: R`$|x-2|\leq4$ équivaut à :`,
          choix: [R`$x\in[-2\,;\,6]$`, R`$x\in[2\,;\,6]$`, R`$x\in[-4\,;\,4]$`, R`$x\in[-6\,;\,2]$`], bonne: 0,
          expl: R`$d(x,2)\leq4\iff2-4\leq x\leq2+4$.` },
        { theme: "ens", niveau: 0, q: R`Résoudre $|x|=6$.`,
          choix: [R`$\{-6;6\}$`, R`$\{6\}$`, R`$\varnothing$`, R`$[-6;6]$`], bonne: 0,
          expl: R`Les réels à distance $6$ de $0$ sont $6$ et $-6$.` },
        { theme: "ens", niveau: 0, q: R`Résoudre $|5x-2|=-2$.`,
          choix: [R`$\varnothing$`, R`$\{0\}$`, R`$\left\{\frac45\right\}$`, R`$\left\{0;\frac45\right\}$`], bonne: 0,
          expl: R`Une valeur absolue est toujours positive : elle ne peut pas valoir $-2$.` },
        { theme: "ens", niveau: 0, q: R`Quelle inégalité est l'inégalité triangulaire ?`,
          choix: [R`$|a+b|\leq|a|+|b|$`, R`$|a+b|\geq|a|+|b|$`, R`$|a+b|=|a|+|b|$`, R`$|a-b|\leq|a|-|b|$`], bonne: 0,
          expl: R`Pour tous réels $a,b$ : $|a+b|\leq|a|+|b|$. L'égalité est fausse en général : $|1+(-1)|=0\neq2$.` },
        { theme: "ens", niveau: 0, q: R`Que vaut $\min(3,-2)$ ?`,
          choix: [R`$-2$`, R`$3$`, R`$1$`, R`$-3$`], bonne: 0,
          expl: R`Le minimum est le plus petit des deux nombres.` },
        { theme: "ens", niveau: 1, q: R`$|x+4|\leq3$ équivaut à :`,
          choix: [R`$x\in[-7\,;\,-1]$`, R`$x\in[1\,;\,7]$`, R`$x\in[-1\,;\,7]$`, R`$x\in[-7\,;\,1]$`], bonne: 0,
          expl: R`$|x+4|=|x-(-4)|=d(x,-4)\leq3\iff-7\leq x\leq-1$.` },
        { theme: "ens", niveau: 1, q: R`L'intervalle $]1\,;\,6[$ s'écrit avec une valeur absolue :`,
          choix: [R`$\left|x-\frac72\right|<\frac52$`, R`$|x-1|<6$`, R`$\left|x-\frac52\right|<\frac72$`, R`$|x-6|<1$`], bonne: 0,
          expl: R`Centre $\frac{1+6}{2}=\frac72$, rayon $\frac{6-1}{2}=\frac52$.` },
        { theme: "ens", niveau: 1, q: R`Résoudre $\left|\frac53-x\right|=3$.`,
          choix: [R`$\left\{-\frac43\,;\,\frac{14}{3}\right\}$`, R`$\left\{\frac{14}{3}\right\}$`, R`$\left\{-\frac{14}{3}\,;\,\frac43\right\}$`, R`$\varnothing$`], bonne: 0,
          expl: R`$d\left(x,\frac53\right)=3\iff x=\frac53-3=-\frac43$ ou $x=\frac53+3=\frac{14}{3}$.` },
        { theme: "ens", niveau: 1, q: R`Résoudre $|x-4|=4-x$.`,
          choix: [R`$]-\infty\,;\,4]$`, R`$\{4\}$`, R`$\{0;4\}$`, R`$[4\,;+\infty[$`], bonne: 0,
          expl: R`$|a|=-a\iff a\leq0$. Ici $a=x-4$ : il faut $x-4\leq0$, soit $x\leq4$.` },
        { theme: "ens", niveau: 1, q: R`Résoudre $|3x-2|=|x+6|$.`,
          choix: [R`$\{-1\,;\,4\}$`, R`$\{4\}$`, R`$\{-4\,;\,1\}$`, R`$\{-1\}$`], bonne: 0,
          expl: R`$|A|=|B|\iff A=B$ ou $A=-B$ : $3x-2=x+6$ donne $x=4$ ; $3x-2=-x-6$ donne $x=-1$.` },
        { theme: "ens", niveau: 1, q: R`Résoudre $\sqrt{(x+3)^2}=4$.`,
          choix: [R`$\{-7\,;\,1\}$`, R`$\{1\}$`, R`$\{-1\,;\,7\}$`, R`$\{13\}$`], bonne: 0,
          expl: R`$\sqrt{(x+3)^2}=|x+3|=4\iff x+3=\pm4$.` },
        { theme: "ens", niveau: 1, q: R`Résoudre $|x-3|\geq\frac13$.`,
          choix: [R`$\left]-\infty\,;\frac83\right]\cup\left[\frac{10}3\,;+\infty\right[$`, R`$\left[\frac83\,;\frac{10}3\right]$`, R`$\left[\frac{10}3\,;+\infty\right[$`, R`$\mathbb R$`], bonne: 0,
          expl: R`La distance de $x$ à $3$ est au moins $\frac13$ : $x\leq3-\frac13$ ou $x\geq3+\frac13$.` },
        { theme: "ens", niveau: 1, q: R`Résoudre $2\leq|x|\leq4$.`,
          choix: [R`$[-4\,;-2]\cup[2\,;4]$`, R`$[2\,;4]$`, R`$[-4\,;4]$`, R`$[-2\,;2]$`], bonne: 0,
          expl: R`La distance de $x$ à $0$ est comprise entre $2$ et $4$ : deux intervalles symétriques.` },
        { theme: "ens", niveau: 1, q: R`Résoudre $|-x+4|\geq5$.`,
          choix: [R`$]-\infty\,;-1]\cup[9\,;+\infty[$`, R`$[-1\,;9]$`, R`$]-\infty\,;-9]\cup[1\,;+\infty[$`, R`$[9\,;+\infty[$`], bonne: 0,
          expl: R`$|-x+4|=|x-4|$ : $d(x,4)\geq5\iff x\leq-1$ ou $x\geq9$.` },
        { theme: "ens", niveau: 1, q: R`Soit $E=[0\,;1[$. Laquelle de ces affirmations est vraie ?`,
          choix: [R`$\sup E=1$ mais $E$ n'a pas de plus grand élément`, R`$\max E=1$`, R`$E$ n'est pas majoré`, R`$\sup E=0$`], bonne: 0,
          expl: R`$1$ est le plus petit des majorants de $E$, mais $1\notin E$ : ce n'est pas un maximum.` },
        { theme: "ens", niveau: 2, q: R`Résoudre $|2-3x|+|4-x|\geq2$.`,
          choix: [R`$\mathbb R$`, R`$\varnothing$`, R`$\left[\frac23\,;4\right]$`, R`$]-\infty\,;\frac23]\cup[4\,;+\infty[$`], bonne: 0,
          expl: R`La fonction $x\mapsto|3x-2|+|x-4|$ est affine par morceaux ; son minimum est atteint en $x=\frac23$ et vaut $\frac{10}{3}>2$. L'inégalité est donc toujours vraie.` },
        { theme: "ens", niveau: 1, q: R`$|x-\frac25|\geq\frac14$ équivaut à :`,
          choix: [R`$x\leq\frac{3}{20}$ ou $x\geq\frac{13}{20}$`, R`$\frac{3}{20}\leq x\leq\frac{13}{20}$`, R`$x\geq\frac{13}{20}$`, R`$x\leq-\frac{3}{20}$ ou $x\geq\frac{13}{20}$`], bonne: 0,
          expl: R`$\frac25-\frac14=\frac{8-5}{20}=\frac{3}{20}$ et $\frac25+\frac14=\frac{13}{20}$.` },

        /* ---------- Partie entière ---------- */
        { theme: "pe", niveau: 0, q: R`Que vaut $\lfloor 4{,}2\rfloor$ ?`,
          choix: [R`$4$`, R`$5$`, R`$4{,}2$`, R`$0{,}2$`], bonne: 0,
          expl: R`$4\leq4{,}2<5$.` },
        { theme: "pe", niveau: 0, q: R`Que vaut $\lfloor -1{,}5\rfloor$ ?`,
          choix: [R`$-2$`, R`$-1$`, R`$1$`, R`$-1{,}5$`], bonne: 0,
          expl: R`$-2\leq-1{,}5<-1$ : la partie entière d'un négatif non entier n'est pas sa troncature.` },
        { theme: "pe", niveau: 0, q: R`Que vaut $\lfloor -\pi\rfloor$ ?`,
          choix: [R`$-4$`, R`$-3$`, R`$3$`, R`$-3{,}14$`], bonne: 0,
          expl: R`$-4\leq-\pi\approx-3{,}14<-3$.` },
        { theme: "pe", niveau: 0, q: R`Pour $x\in\mathbb R$ et $n\in\mathbb Z$, $n=\lfloor x\rfloor$ équivaut à :`,
          choix: [R`$n\leq x<n+1$`, R`$n<x\leq n+1$`, R`$n-1<x\leq n$`, R`$x-1<n<x$`], bonne: 0,
          expl: R`C'est la caractérisation de la partie entière : le plus grand entier inférieur ou égal à $x$.` },
        { theme: "pe", niveau: 0, q: R`Que vaut $\lfloor 7\rfloor$ ?`,
          choix: [R`$7$`, R`$6$`, R`$8$`, R`$0$`], bonne: 0,
          expl: R`Un entier est sa propre partie entière.` },
        { theme: "pe", niveau: 1, q: R`Calculer $\displaystyle S=\sum_{k=1}^{10}\lfloor\sqrt k\rfloor$.`,
          choix: [R`$19$`, R`$22$`, R`$16$`, R`$25$`], bonne: 0,
          expl: R`$\lfloor\sqrt k\rfloor=1$ pour $k=1,2,3$ ; $2$ pour $k=4,\dots,8$ ; $3$ pour $k=9,10$. $S=3+10+6=19$.` },
        { theme: "pe", niveau: 1, q: R`Pour $x\in\mathbb R$ et $n\in\mathbb Z$, $\lfloor x+n\rfloor$ est égal à :`,
          choix: [R`$\lfloor x\rfloor+n$`, R`$\lfloor x\rfloor$`, R`$\lfloor x\rfloor+n+1$`, R`$x+n$`], bonne: 0,
          expl: R`$\lfloor x\rfloor\leq x<\lfloor x\rfloor+1$ donne $\lfloor x\rfloor+n\leq x+n<\lfloor x\rfloor+n+1$, avec $\lfloor x\rfloor+n\in\mathbb Z$.` },
        { theme: "pe", niveau: 1, q: R`Si $x\notin\mathbb Z$, que vaut $\lfloor x\rfloor+\lfloor -x\rfloor$ ?`,
          choix: [R`$-1$`, R`$0$`, R`$1$`, R`$2\lfloor x\rfloor$`], bonne: 0,
          expl: R`Exemple : $\lfloor1{,}5\rfloor+\lfloor-1{,}5\rfloor=1+(-2)=-1$. Si $x\in\mathbb Z$, la somme vaut $0$.` },
        { theme: "pe", niveau: 1, q: R`Pour tous réels $x,y$, on a :`,
          choix: [R`$\lfloor x\rfloor+\lfloor y\rfloor\leq\lfloor x+y\rfloor\leq\lfloor x\rfloor+\lfloor y\rfloor+1$`, R`$\lfloor x+y\rfloor=\lfloor x\rfloor+\lfloor y\rfloor$`, R`$\lfloor x+y\rfloor\leq\lfloor x\rfloor+\lfloor y\rfloor$`, R`$\lfloor x+y\rfloor\geq\lfloor x\rfloor+\lfloor y\rfloor+1$`], bonne: 0,
          expl: R`L'égalité est fausse : $\lfloor0{,}5+0{,}5\rfloor=1\neq0$. On a seulement l'encadrement.` },
        { theme: "pe", niveau: 2, q: R`Résoudre dans $\mathbb R$ : $\lfloor 2x+4\rfloor=\lfloor -x+6\rfloor$.`,
          choix: [R`$\left[\frac12\,;1\right[$`, R`$\left\{\frac23\right\}$`, R`$\left[\frac23\,;1\right]$`, R`$\varnothing$`], bonne: 0,
          expl: R`On note $k$ la valeur commune : $k\leq2x+4<k+1$ et $k\leq-x+6<k+1$. L'étude des cas montre que seul $k=5$ convient, ce qui donne $\frac12\leq x<1$.` },
        { theme: "pe", niveau: 2, q: R`Pour tout réel $x$, $\lfloor x\rfloor+\left\lfloor x+\frac12\right\rfloor$ est égal à :`,
          choix: [R`$\lfloor 2x\rfloor$`, R`$2\lfloor x\rfloor$`, R`$\lfloor 2x\rfloor+1$`, R`$2\lfloor x\rfloor+1$`], bonne: 0,
          expl: R`On distingue $x\in[\lfloor x\rfloor,\lfloor x\rfloor+\frac12[$ et $x\in[\lfloor x\rfloor+\frac12,\lfloor x\rfloor+1[$ : dans les deux cas on obtient $\lfloor2x\rfloor$.` },
        { theme: "pe", niveau: 3, q: R`Soit $x\in\mathbb R$ et $S_n=\sum_{k=1}^n\lfloor kx\rfloor$. Que vaut $\displaystyle\lim_{n\to+\infty}\frac{S_n}{n^2}$ ?`,
          choix: [R`$\dfrac x2$`, R`$x$`, R`$0$`, R`$\dfrac{x}{6}$`], bonne: 0,
          expl: R`$kx-1<\lfloor kx\rfloor\leq kx$ donne $x\frac{n(n+1)}2-n<S_n\leq x\frac{n(n+1)}2$. On divise par $n^2$ et on applique le théorème des gendarmes.` },

        /* ---------- Connecteurs et quantificateurs ---------- */
        { theme: "quant", niveau: 0, q: R`Le symbole $\exists$ signifie :`,
          choix: [R`il existe au moins un`, R`il existe un unique`, R`pour tout`, R`appartient à`], bonne: 0,
          expl: R`$\exists$ signifie « il existe au moins un ». L'unicité se note $\exists!$.` },
        { theme: "quant", niveau: 0, q: R`Si $\mathcal P$ est vraie et $\mathcal Q$ est fausse, « $\mathcal P$ ou $\mathcal Q$ » est :`,
          choix: [R`vraie`, R`fausse`, R`ni vraie ni fausse`, R`on ne peut pas savoir`], bonne: 0,
          expl: R`« ou » est vrai dès qu'au moins une des deux propositions est vraie.` },
        { theme: "quant", niveau: 0, q: R`Si $\mathcal P$ est vraie et $\mathcal Q$ est fausse, « $\mathcal P$ et $\mathcal Q$ » est :`,
          choix: [R`fausse`, R`vraie`, R`ni vraie ni fausse`, R`on ne peut pas savoir`], bonne: 0,
          expl: R`« et » n'est vrai que si les deux propositions sont vraies.` },
        { theme: "quant", niveau: 0, q: R`Une définition :`,
          choix: [R`ne se démontre pas`, R`se démontre par récurrence`, R`se démontre par l'absurde`, R`est toujours un théorème`], bonne: 0,
          expl: R`Une définition donne un nom à un objet ou une propriété : elle ne se démontre pas.` },
        { theme: "quant", niveau: 0, q: R`« $n$ est un entier pair » se traduit par :`,
          choix: [R`$\exists k\in\mathbb Z,\ n=2k$`, R`$\forall k\in\mathbb Z,\ n=2k$`, R`$\exists k\in\mathbb Z,\ n=2k+1$`, R`$n=2$`], bonne: 0,
          expl: R`Un entier est pair s'il s'écrit $2k$ pour au moins un entier $k$.` },
        { theme: "quant", niveau: 1, q: R`« Il existe un entier plus grand que tous les autres » se traduit par :`,
          choix: [R`$\exists n\in\mathbb Z,\ \forall m\in\mathbb Z,\ m\leq n$`, R`$\forall m\in\mathbb Z,\ \exists n\in\mathbb Z,\ m\leq n$`, R`$\exists n\in\mathbb Z,\ \exists m\in\mathbb Z,\ m\leq n$`, R`$\forall n\in\mathbb Z,\ \forall m\in\mathbb Z,\ m\leq n$`], bonne: 0,
          expl: R`Le même $n$ doit convenir pour tous les $m$ : $\exists$ vient avant $\forall$. (Cette proposition est d'ailleurs fausse.)` },
        { theme: "quant", niveau: 1, q: R`Laquelle de ces propositions est vraie ?`,
          choix: [R`$\forall x\in\mathbb R,\ \exists y\in\mathbb R,\ x\leq y$`, R`$\exists y\in\mathbb R,\ \forall x\in\mathbb R,\ x\leq y$`, R`$\forall x\in\mathbb R,\ x^2>0$`, R`$\exists n\in\mathbb N,\ n<0$`], bonne: 0,
          expl: R`Pour tout $x$, $y=x$ convient. En revanche, aucun réel ne majore tout $\mathbb R$ : l'ordre des quantificateurs compte.` },
        { theme: "quant", niveau: 1, q: R`« $(u_n)$ est majorée » se traduit par :`,
          choix: [R`$\exists M\in\mathbb R,\ \forall n\in\mathbb N,\ u_n\leq M$`, R`$\forall n\in\mathbb N,\ \exists M\in\mathbb R,\ u_n\leq M$`, R`$\forall M\in\mathbb R,\ \exists n\in\mathbb N,\ u_n\leq M$`, R`$\exists n\in\mathbb N,\ \forall M\in\mathbb R,\ u_n\leq M$`], bonne: 0,
          expl: R`Un même $M$ majore tous les termes. La deuxième proposition est vraie pour toute suite (prendre $M=u_n$).` },
        { theme: "quant", niveau: 1, q: R`$(u_n)$ est bornée si et seulement si :`,
          choix: [R`$\exists M\in\mathbb R_+,\ \forall n\in\mathbb N,\ |u_n|\leq M$`, R`$\forall n\in\mathbb N,\ \exists M\in\mathbb R_+,\ |u_n|\leq M$`, R`$\exists M\in\mathbb R,\ \forall n\in\mathbb N,\ u_n\leq M$`, R`$\forall M\in\mathbb R_+,\ \exists n\in\mathbb N,\ |u_n|\leq M$`], bonne: 0,
          expl: R`Si $m\leq u_n\leq M'$, on pose $M=\max(|m|,|M'|)$. Réciproquement, $-M\leq u_n\leq M$.` },
        { theme: "quant", niveau: 1, q: R`La définition « $(u_n)$ converge vers $\ell$ » est :`,
          choix: [R`$\forall\varepsilon>0,\ \exists n_0\in\mathbb N,\ \forall n\geq n_0,\ |u_n-\ell|\leq\varepsilon$`, R`$\exists n_0\in\mathbb N,\ \forall\varepsilon>0,\ \forall n\geq n_0,\ |u_n-\ell|\leq\varepsilon$`, R`$\forall\varepsilon>0,\ \forall n\in\mathbb N,\ |u_n-\ell|\leq\varepsilon$`, R`$\exists\varepsilon>0,\ \exists n_0\in\mathbb N,\ \forall n\geq n_0,\ |u_n-\ell|\leq\varepsilon$`], bonne: 0,
          expl: R`Aussi petit que soit $\varepsilon$, les termes finissent par rester à distance au plus $\varepsilon$ de $\ell$. Le rang $n_0$ dépend de $\varepsilon$.` },

        /* ---------- Négation et implication ---------- */
        { theme: "neg", niveau: 0, q: R`La négation de « $\forall x\in\mathbb R,\ x^2\geq0$ » est :`,
          choix: [R`$\exists x\in\mathbb R,\ x^2<0$`, R`$\forall x\in\mathbb R,\ x^2<0$`, R`$\exists x\in\mathbb R,\ x^2\leq0$`, R`$\forall x\in\mathbb R,\ x^2\leq0$`], bonne: 0,
          expl: R`$\forall$ devient $\exists$, et $\geq$ devient $<$.` },
        { theme: "neg", niveau: 0, q: R`La négation de « $\exists n\in\mathbb N,\ n=2n$ » est :`,
          choix: [R`$\forall n\in\mathbb N,\ n\neq2n$`, R`$\exists n\in\mathbb N,\ n\neq2n$`, R`$\forall n\in\mathbb N,\ n=2n$`, R`$\exists n\notin\mathbb N,\ n=2n$`], bonne: 0,
          expl: R`$\exists$ devient $\forall$ et l'égalité devient $\neq$. On ne change pas l'ensemble $\mathbb N$.` },
        { theme: "neg", niveau: 0, q: R`$\text{non}(\mathcal P\text{ et }\mathcal Q)$ équivaut à :`,
          choix: [R`$\text{non}\,\mathcal P$ ou $\text{non}\,\mathcal Q$`, R`$\text{non}\,\mathcal P$ et $\text{non}\,\mathcal Q$`, R`$\mathcal P$ ou $\mathcal Q$`, R`$\mathcal P\Rightarrow\mathcal Q$`], bonne: 0,
          expl: R`Règle de De Morgan : le « et » devient « ou ».` },
        { theme: "neg", niveau: 0, q: R`La négation de « j'ai un chat ou un chien » est :`,
          choix: [R`je n'ai ni chat ni chien`, R`je n'ai pas de chat ou pas de chien`, R`j'ai un chat et un chien`, R`j'ai un chat mais pas de chien`], bonne: 0,
          expl: R`$\text{non}(\mathcal P\text{ ou }\mathcal Q)\equiv\text{non}\,\mathcal P\text{ et }\text{non}\,\mathcal Q$.` },
        { theme: "neg", niveau: 0, q: R`$\mathcal P\Rightarrow\mathcal Q$ a la même valeur logique que :`,
          choix: [R`$\mathcal Q$ ou $\text{non}\,\mathcal P$`, R`$\mathcal P$ et $\mathcal Q$`, R`$\mathcal Q\Rightarrow\mathcal P$`, R`$\text{non}\,\mathcal P\Rightarrow\text{non}\,\mathcal Q$`], bonne: 0,
          expl: R`C'est la définition de l'implication. Attention : $\mathcal Q\Rightarrow\mathcal P$ (réciproque) n'a pas la même valeur en général.` },
        { theme: "neg", niveau: 0, q: R`Si $\mathcal P$ est fausse et $\mathcal Q$ est vraie, $\mathcal P\Rightarrow\mathcal Q$ est :`,
          choix: [R`vraie`, R`fausse`, R`ni vraie ni fausse`, R`on ne peut pas savoir`], bonne: 0,
          expl: R`Une implication n'est fausse que dans le cas « $\mathcal P$ vraie et $\mathcal Q$ fausse ».` },
        { theme: "neg", niveau: 0, q: R`La contraposée de $\mathcal P\Rightarrow\mathcal Q$ est :`,
          choix: [R`$\text{non}\,\mathcal Q\Rightarrow\text{non}\,\mathcal P$`, R`$\mathcal Q\Rightarrow\mathcal P$`, R`$\text{non}\,\mathcal P\Rightarrow\text{non}\,\mathcal Q$`, R`$\mathcal P$ et $\text{non}\,\mathcal Q$`], bonne: 0,
          expl: R`La contraposée a la même valeur logique que l'implication de départ.` },
        { theme: "neg", niveau: 1, q: R`La négation de $\mathcal P\Rightarrow\mathcal Q$ est :`,
          choix: [R`$\mathcal P$ et $\text{non}\,\mathcal Q$`, R`$\text{non}\,\mathcal P\Rightarrow\text{non}\,\mathcal Q$`, R`$\text{non}\,\mathcal Q\Rightarrow\text{non}\,\mathcal P$`, R`$\text{non}\,\mathcal P$ ou $\mathcal Q$`], bonne: 0,
          expl: R`$\text{non}(\mathcal Q\text{ ou }\text{non}\,\mathcal P)\equiv\text{non}\,\mathcal Q\text{ et }\mathcal P$. Ce n'est pas une implication.` },
        { theme: "neg", niveau: 1, q: R`La négation de « $\exists x\in\mathbb R,\ \forall y\in\mathbb R,\ \frac1x\leq1+y^2$ » est :`,
          choix: [R`$\forall x\in\mathbb R,\ \exists y\in\mathbb R,\ \frac1x>1+y^2$`, R`$\forall x\in\mathbb R,\ \forall y\in\mathbb R,\ \frac1x>1+y^2$`, R`$\exists x\in\mathbb R,\ \exists y\in\mathbb R,\ \frac1x>1+y^2$`, R`$\forall x\in\mathbb R,\ \exists y\in\mathbb R,\ \frac1x\geq1+y^2$`], bonne: 0,
          expl: R`On échange chaque quantificateur, dans le même ordre, puis on nie la conclusion : $\leq$ devient $>$.` },
        { theme: "neg", niveau: 1, q: R`La négation de « $\sqrt{x^2}=x\Rightarrow x\geq0$ » est :`,
          choix: [R`$\sqrt{x^2}=x$ et $x<0$`, R`$\sqrt{x^2}\neq x\Rightarrow x<0$`, R`$x<0\Rightarrow\sqrt{x^2}\neq x$`, R`$\sqrt{x^2}\neq x$ ou $x\geq0$`], bonne: 0,
          expl: R`$\text{non}(\mathcal P\Rightarrow\mathcal Q)\equiv\mathcal P\text{ et }\text{non}\,\mathcal Q$.` },
        { theme: "neg", niveau: 2, q: R`La négation de « $\forall\varepsilon\in[0,1],\ \exists n\in\mathbb N,\ n>\varepsilon$ ou $n>\frac1\varepsilon$ » est :`,
          choix: [R`$\exists\varepsilon\in[0,1],\ \forall n\in\mathbb N,\ n\leq\varepsilon$ et $n\leq\frac1\varepsilon$`, R`$\exists\varepsilon\in[0,1],\ \forall n\in\mathbb N,\ n\leq\varepsilon$ ou $n\leq\frac1\varepsilon$`, R`$\forall\varepsilon\in[0,1],\ \forall n\in\mathbb N,\ n\leq\varepsilon$ et $n\leq\frac1\varepsilon$`, R`$\exists\varepsilon\notin[0,1],\ \forall n\in\mathbb N,\ n\leq\varepsilon$ et $n\leq\frac1\varepsilon$`], bonne: 0,
          expl: R`Les quantificateurs s'échangent, puis De Morgan transforme le « ou » en « et » et chaque $>$ en $\leq$.` },
        { theme: "neg", niveau: 1, q: R`La contraposée de « $n^2$ pair $\Rightarrow n$ pair » est :`,
          choix: [R`$n$ impair $\Rightarrow n^2$ impair`, R`$n$ pair $\Rightarrow n^2$ pair`, R`$n^2$ impair $\Rightarrow n$ impair`, R`$n^2$ pair et $n$ impair`], bonne: 0,
          expl: R`$\text{non}\,\mathcal Q\Rightarrow\text{non}\,\mathcal P$, avec « non pair » = « impair ».` },
        { theme: "neg", niveau: 1, q: R`L'implication « $x\in\mathbb R$ et $x^2=-1\Rightarrow x=-1$ » est :`,
          choix: [R`vraie, car l'hypothèse est toujours fausse`, R`fausse, car $(-1)^2=1$`, R`fausse, car $x$ pourrait valoir $1$`, R`ni vraie ni fausse`], bonne: 0,
          expl: R`Aucun réel ne vérifie $x^2=-1$ : l'hypothèse est fausse, donc l'implication est vraie.` },
        { theme: "neg", niveau: 2, q: R`La négation de « $(u_n)$ converge vers $\ell$ » est :`,
          choix: [R`$\exists\varepsilon>0,\ \forall n_0\in\mathbb N,\ \exists n\geq n_0,\ |u_n-\ell|>\varepsilon$`, R`$\forall\varepsilon>0,\ \forall n_0\in\mathbb N,\ \exists n\geq n_0,\ |u_n-\ell|>\varepsilon$`, R`$\exists\varepsilon>0,\ \exists n_0\in\mathbb N,\ \forall n\geq n_0,\ |u_n-\ell|>\varepsilon$`, R`$\exists\varepsilon>0,\ \forall n_0\in\mathbb N,\ \forall n\geq n_0,\ |u_n-\ell|>\varepsilon$`], bonne: 0,
          expl: R`Trois quantificateurs à échanger : $\forall\varepsilon$ devient $\exists\varepsilon$, $\exists n_0$ devient $\forall n_0$, $\forall n\geq n_0$ devient $\exists n\geq n_0$.` },
        { theme: "neg", niveau: 1, q: R`« $(u_n)$ n'est pas majorée » s'écrit :`,
          choix: [R`$\forall M\in\mathbb R,\ \exists n\in\mathbb N,\ u_n>M$`, R`$\exists M\in\mathbb R,\ \forall n\in\mathbb N,\ u_n>M$`, R`$\forall M\in\mathbb R,\ \forall n\in\mathbb N,\ u_n>M$`, R`$\exists n\in\mathbb N,\ \forall M\in\mathbb R,\ u_n>M$`], bonne: 0,
          expl: R`Négation de $\exists M,\ \forall n,\ u_n\leq M$ : quel que soit $M$, un terme dépasse $M$.` },

        /* ---------- Types de raisonnement ---------- */
        { theme: "rais", niveau: 0, q: R`Pour prouver que « $\forall n\in\mathbb N,\ n^2>n$ » est fausse, il suffit :`,
          choix: [R`de donner un contre-exemple, comme $n=1$`, R`de faire une récurrence`, R`de vérifier pour $n=2$ et $n=3$`, R`de raisonner par contraposée`], bonne: 0,
          expl: R`$1^2=1$ n'est pas strictement supérieur à $1$ : un seul contre-exemple suffit.` },
        { theme: "rais", niveau: 0, q: R`Quel contre-exemple montre que « $x^2>16\Rightarrow x>4$ » est faux ?`,
          choix: [R`$x=-5$`, R`$x=5$`, R`$x=4$`, R`$x=0$`], bonne: 0,
          expl: R`$(-5)^2=25>16$ mais $-5<4$ : l'hypothèse est vraie et la conclusion fausse.` },
        { theme: "rais", niveau: 0, q: R`Pour montrer que $\sqrt2$ est irrationnel, on raisonne en général :`,
          choix: [R`par l'absurde`, R`par récurrence`, R`par contre-exemple`, R`par calcul direct`], bonne: 0,
          expl: R`On suppose $\sqrt2=\frac pq$ (fraction irréductible) et on aboutit à une contradiction.` },
        { theme: "rais", niveau: 0, q: R`Raisonner par contraposée pour montrer $\mathcal P\Rightarrow\mathcal Q$, c'est :`,
          choix: [R`supposer $\text{non}\,\mathcal Q$ et montrer $\text{non}\,\mathcal P$`, R`supposer $\mathcal Q$ et montrer $\mathcal P$`, R`supposer $\mathcal P$ et $\text{non}\,\mathcal Q$`, R`montrer $\mathcal P$ puis $\mathcal Q$`], bonne: 0,
          expl: R`On démontre l'implication $\text{non}\,\mathcal Q\Rightarrow\text{non}\,\mathcal P$, qui a la même valeur logique.` },
        { theme: "rais", niveau: 1, q: R`Pour montrer $\mathcal P_1\Leftrightarrow\mathcal P_2\Leftrightarrow\mathcal P_3$, il suffit de montrer :`,
          choix: [R`$\mathcal P_1\Rightarrow\mathcal P_2$, $\mathcal P_2\Rightarrow\mathcal P_3$ et $\mathcal P_3\Rightarrow\mathcal P_1$`, R`$\mathcal P_1\Rightarrow\mathcal P_2$ et $\mathcal P_2\Rightarrow\mathcal P_3$`, R`$\mathcal P_1\Rightarrow\mathcal P_3$ uniquement`, R`$\mathcal P_1$, $\mathcal P_2$ et $\mathcal P_3$`], bonne: 0,
          expl: R`C'est l'équivalence circulaire : la boucle permet d'aller de n'importe laquelle à n'importe quelle autre.` },
        { theme: "rais", niveau: 1, q: R`Quel contre-exemple montre que « la somme de deux multiples de $7$ est un multiple de $14$ » est faux ?`,
          choix: [R`$7+14=21$`, R`$7+7=14$`, R`$14+14=28$`, R`$0+14=14$`], bonne: 0,
          expl: R`$7$ et $14$ sont des multiples de $7$, mais $21$ n'est pas un multiple de $14$.` },
        { theme: "rais", niveau: 1, q: R`Soit $n\in\mathbb N$ non multiple de $3$. On montre que $n^2-1$ est multiple de $3$ en général :`,
          choix: [R`par disjonction de cas : $n=3k+1$ ou $n=3k+2$`, R`par récurrence simple`, R`par contre-exemple`, R`par l'absurde sur $n$`], bonne: 0,
          expl: R`$n=3k+1$ donne $n^2-1=3(3k^2+2k)$ ; $n=3k+2$ donne $n^2-1=3(3k^2+4k+1)$.` },
        { theme: "rais", niveau: 2, q: R`Pour montrer que $\frac{\ln5}{\ln2}$ est irrationnel, on suppose $\frac{\ln5}{\ln2}=\frac pq$. On obtient :`,
          choix: [R`$5^q=2^p$, impossible car $5^q$ est impair et $2^p$ pair`, R`$5^p=2^q$, impossible`, R`$\ln5=\ln2$, absurde`, R`$p=q$, absurde`], bonne: 0,
          expl: R`$q\ln5=p\ln2$ donne $5^q=2^p$ avec $p,q\geq1$ : un nombre impair égal à un nombre pair, contradiction.` },

        /* ---------- Récurrence ---------- */
        { theme: "rec", niveau: 0, q: R`Les étapes d'un raisonnement par récurrence sont :`,
          choix: [R`initialisation, hérédité, conclusion`, R`hypothèse, calcul, contre-exemple`, R`initialisation et conclusion seulement`, R`contraposée puis conclusion`], bonne: 0,
          expl: R`On écrit $\mathcal P(n)$, on vérifie $\mathcal P(n_0)$, on montre $\mathcal P(n)\Rightarrow\mathcal P(n+1)$, puis on conclut.` },
        { theme: "rec", niveau: 0, q: R`Dans l'hérédité, on écrit :`,
          choix: [R`« Soit $n\in\mathbb N$. Supposons $\mathcal P(n)$ et montrons $\mathcal P(n+1)$. »`, R`« Supposons $\mathcal P(n)$ pour tout $n$. »`, R`« Montrons $\mathcal P(0)$. »`, R`« Supposons $\mathcal P(n+1)$ et montrons $\mathcal P(n)$. »`], bonne: 0,
          expl: R`Supposer $\mathcal P(n)$ « pour tout $n$ » serait supposer ce qu'on veut démontrer.` },
        { theme: "rec", niveau: 0, q: R`$1+2+\dots+n$ est égal à :`,
          choix: [R`$\dfrac{n(n+1)}{2}$`, R`$\dfrac{n(n-1)}{2}$`, R`$n^2$`, R`$\dfrac{n(n+1)(2n+1)}{6}$`], bonne: 0,
          expl: R`Formule classique, démontrée par récurrence dans le cours. La dernière réponse est la somme des carrés.` },
        { theme: "rec", niveau: 0, q: R`Pour $q\neq1$, $1+q+\dots+q^n$ est égal à :`,
          choix: [R`$\dfrac{1-q^{n+1}}{1-q}$`, R`$\dfrac{1-q^{n}}{1-q}$`, R`$\dfrac{q^{n+1}}{q-1}$`, R`$(n+1)q^n$`], bonne: 0,
          expl: R`Exemple : $1+3+\dots+3^n=\frac{3^{n+1}-1}{2}$.` },
        { theme: "rec", niveau: 0, q: R`Dans une récurrence double, l'initialisation consiste à vérifier :`,
          choix: [R`$\mathcal P(n_0)$ et $\mathcal P(n_0+1)$`, R`$\mathcal P(n_0)$ seulement`, R`$\mathcal P(n_0+2)$`, R`$\mathcal P(n)$ pour tout $n$`], bonne: 0,
          expl: R`L'hérédité utilise deux rangs consécutifs, il faut donc deux initialisations.` },
        { theme: "rec", niveau: 1, q: R`Pour quelles valeurs de $n\in\mathbb N$ l'inégalité $2^n\geq n^2$ est-elle fausse ?`,
          choix: [R`seulement $n=3$`, R`$n=2$ et $n=3$`, R`tous les $n\leq3$`, R`aucune`], bonne: 0,
          expl: R`$2^2=4\geq4$ mais $2^3=8<9$. À partir de $n=4$, on montre $2^n\geq n^2$ par récurrence.` },
        { theme: "rec", niveau: 2, q: R`Conjecturer $\displaystyle\sum_{k=1}^n k\cdot k!$ :`,
          choix: [R`$(n+1)!-1$`, R`$n!\,n$`, R`$(n+1)!$`, R`$n!+n$`], bonne: 0,
          expl: R`$1$, $5$, $23$, $119$ pour $n=1,2,3,4$ : ce sont $2!-1$, $3!-1$, $4!-1$, $5!-1$.` },
        { theme: "rec", niveau: 1, q: R`Conjecturer $\displaystyle\sum_{k=1}^n\frac{1}{k(k+1)}$ :`,
          choix: [R`$\dfrac{n}{n+1}$`, R`$\dfrac{1}{n+1}$`, R`$\dfrac{n+1}{n}$`, R`$1$`], bonne: 0,
          expl: R`$\frac1{k(k+1)}=\frac1k-\frac1{k+1}$ : la somme télescopique vaut $1-\frac1{n+1}$.` },
        { theme: "rec", niveau: 2, q: R`$u_0=0$, $u_1=1$, $u_{n+2}=5u_{n+1}-6u_n$. Alors $u_n=$`,
          choix: [R`$3^n-2^n$`, R`$2^n+3^n$`, R`$3^n$`, R`$n\,2^{n-1}$`], bonne: 0,
          expl: R`$u_2=5$, $u_3=19$, $u_4=65$ : ce sont $9-4$, $27-8$, $81-16$. On le démontre par récurrence double.` },
        { theme: "rec", niveau: 1, q: R`$u_0=1$, $u_1=3$, $u_{n+2}=3u_{n+1}-2u_n$. Alors $u_n=$`,
          choix: [R`$2^{n+1}-1$`, R`$2^n$`, R`$3^n$`, R`$2n+1$`], bonne: 0,
          expl: R`$u_2=7$, $u_3=15$. Attention : $2^n$ vérifie la relation mais pas l'initialisation ($u_1=3\neq2$).` },
        { theme: "rec", niveau: 1, q: R`Pour tout $n\in\mathbb N$, $4^n+15n-1$ est divisible par :`,
          choix: [R`$9$`, R`$5$`, R`$4$`, R`$7$`], bonne: 0,
          expl: R`$n=1$ : $18$ ; $n=2$ : $45$. Hérédité : $4^{n+1}+15(n+1)-1=4(4^n+15n-1)-45n+18$.` },
        { theme: "rec", niveau: 0, q: R`$n$ droites en position générale découpent le plan en $\frac{n^2+n+2}{2}$ régions. Combien pour $3$ droites ?`,
          choix: [R`$7$`, R`$6$`, R`$8$`, R`$9$`], bonne: 0,
          expl: R`$\frac{9+3+2}{2}=7$ : la troisième droite coupe les deux autres et ajoute $3$ régions aux $4$ existantes.` },
        { theme: "rec", niveau: 2, q: R`« Par $n$ points distincts passe toujours une droite » : dans la fausse récurrence, quelle étape échoue ?`,
          choix: [R`le passage de $n=2$ à $n=3$ : $A_2$ et $A_n$ sont alors le même point`, R`l'initialisation $\mathcal P(2)$`, R`la conclusion`, R`le passage de $n=10$ à $n=11$`], bonne: 0,
          expl: R`Pour $n=2$, les points communs « $A_2$ et $A_n$ » sont un seul point : les droites $D_1$ et $D_2$ n'ont aucune raison d'être confondues.` },
        { theme: "rec", niveau: 1, q: R`Pour tout $n\in\mathbb N$, $3^{n+3}-4^{4n+2}$ est divisible par :`,
          choix: [R`$11$`, R`$7$`, R`$13$`, R`$5$`], bonne: 0,
          expl: R`$n=0$ : $27-16=11$. Hérédité : $3^{n+4}-4^{4n+6}=3(3^{n+3}-4^{4n+2})-253\cdot4^{4n+2}$ et $253=11\times23$.` },
        { theme: "rec", niveau: 2, q: R`Pour la suite de Fibonacci ($F_0=0$, $F_1=1$), que vaut $F_{n+1}F_{n-1}-F_n^2$ ?`,
          choix: [R`$(-1)^n$`, R`$0$`, R`$1$`, R`$(-1)^{n+1}$`], bonne: 0,
          expl: R`Identité de Cassini. Pour $n=1$ : $F_2F_0-F_1^2=-1$ ; pour $n=2$ : $F_3F_1-F_2^2=2-1=1$.` },
        { theme: "rec", niveau: 2, q: R`Que vaut $1-2+3-4+\dots+(-1)^{n-1}n$ pour $n=2026$ ?`,
          choix: [R`$-1013$`, R`$1013$`, R`$-2026$`, R`$0$`], bonne: 0,
          expl: R`Les termes se regroupent par paires $(1-2)+(3-4)+\dots$, soit $1013$ paires valant $-1$. La formule $\frac{(-1)^{n-1}(2n+1)+1}{4}$ donne aussi $-1013$.` },
        { theme: "rec", niveau: 3, q: R`Pour $n\in\mathbb N$, $(2+\sqrt3)^n+(2-\sqrt3)^n$ est :`,
          choix: [R`un entier pair`, R`un entier impair`, R`un irrationnel`, R`toujours égal à $4^n$`], bonne: 0,
          expl: R`Avec le binôme, les termes en $\sqrt3$ s'annulent et les autres sont doublés. On en déduit que $\lfloor(2+\sqrt3)^n\rfloor$ est impair pour $n\geq1$.` },
        { theme: "pe", niveau: 3, q: R`Soit $x\in\mathbb R$ et $T_n=\sum_{k=1}^n\lfloor k^2x\rfloor$. Que vaut $\displaystyle\lim_{n\to+\infty}\frac{T_n}{n^3}$ ?`,
          choix: [R`$\dfrac x3$`, R`$\dfrac x2$`, R`$x$`, R`$\dfrac x6$`], bonne: 0,
          expl: R`$k^2x-1<\lfloor k^2x\rfloor\leq k^2x$, et $\sum_{k=1}^nk^2=\frac{n(n+1)(2n+1)}6\sim\frac{n^3}3$. Le théorème des gendarmes donne $\frac x3$.` },
        { theme: "rec", niveau: 2, q: R`On admet que $2\sqrt{n+1}-2\leq\sum_{k=1}^n\frac{1}{\sqrt k}\leq2\sqrt n-1$. Pour $n=10\,000$, la somme est comprise entre :`,
          choix: [R`$198$ et $199$`, R`$99$ et $100$`, R`$199$ et $200$`, R`$100$ et $101$`], bonne: 0,
          expl: R`$2\sqrt{10\,001}-2\approx198{,}01$ et $2\sqrt{10\,000}-1=199$.` },
        { theme: "rec", niveau: 3, q: R`On pave un échiquier $2^{n+1}\times2^{n+1}$ privé d'une case avec des trominos en L, par récurrence. Où place-t-on le premier tromino ?`,
          choix: [R`Au centre, sur les trois quadrants qui ne contiennent pas la case retirée`, R`Dans le coin opposé à la case retirée`, R`Juste à côté de la case retirée`, R`N'importe où : la récurrence s'occupe du reste`], bonne: 0,
          expl: R`Ce tromino retire une case à chacun des trois autres quadrants : on obtient quatre échiquiers $2^n\times2^n$ privés d'une case, auxquels s'applique l'hypothèse de récurrence.` },
        { theme: "rec", niveau: 3, q: R`Pour la suite de Fibonacci, on montre que $F_{n+p}=F_pF_{n+1}+F_{p-1}F_n$. On en déduit que si $n$ divise $m$, alors :`,
          choix: [R`$F_n$ divise $F_m$`, R`$F_m$ divise $F_n$`, R`$F_n=F_m$`, R`$F_n+F_m$ est pair`], bonne: 0,
          expl: R`Par récurrence sur $k$ : $F_{n(k+1)}=F_nF_{nk+1}+F_{n-1}F_{nk}$, et $F_n$ divise les deux termes. Exemple : $F_5=5$ divise $F_{10}=55$.` },
        { theme: "rec", niveau: 2, q: R`$u_0=1$, $u_{n+1}=u_n+\frac1{u_n}$. On admet $2n+1\leq u_n^2\leq3n+1$. On peut affirmer que :`,
          choix: [R`$14<u_{100}<18$`, R`$u_{100}=\sqrt{201}$`, R`$u_{100}>20$`, R`$(u_n)$ converge`], bonne: 0,
          expl: R`$\sqrt{201}\approx14{,}2$ et $\sqrt{301}\approx17{,}3$. Comme $u_n\geq\sqrt{2n+1}$, la suite tend vers $+\infty$.` }
      ]
    }
  ]
};
