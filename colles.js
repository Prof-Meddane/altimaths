/* Programmes de colle et démonstrations. Généré par colles/gen.py. */
(function(){ const R = String.raw;
window.COLLES = {
  demos: {
    "analyse-synthese": { titre: R`Une équation résolue par analyse-synthèse`, chapitre: R`Chapitre 1`, enonce: R`Trouver les réels $x$ solutions de l'équation $$\exp\big(\ln(x^2)-\ln(x^2+x)\big)=x-1.$$`, note: R``,
     etapes: [
      { t: R`Annoncer la méthode`, x: R`Raisonnons par <strong>analyse-synthèse</strong> : on résout en supposant qu'une solution existe (analyse), puis on vérifie que les valeurs trouvées donnent bien un sens à l'équation (synthèse).` },
      { t: R`Regrouper les logarithmes`, x: R`<em>Analyse.</em> Soit $x$ une solution. Comme $\ln a-\ln b=\ln\frac ab$, l'équation s'écrit $$\exp\left(\ln\frac{x^2}{x^2+x}\right)=x-1,$$ c'est-à-dire $$\ln\frac{x^2}{x^2+x}=\ln(x-1),$$ donc [[$\dfrac{x^2}{x^2+x}=x-1$]] ($\ln$ est injective).` },
      { t: R`Se ramener à un trinôme`, x: R`Comme $x\neq0$, $\dfrac{x^2}{x^2+x}=\dfrac{x}{x+1}$. L'équation devient $x=(x+1)(x-1)=x^2-1$, soit [[$x^2-x-1=0$]].` },
      { t: R`Résoudre le trinôme`, x: R`$\Delta=(-1)^2-4\times1\times(-1)=5>0$ : deux solutions [[$x_1=\dfrac{1-\sqrt5}{2}$ et $x_2=\dfrac{1+\sqrt5}{2}$]].` },
      { t: R`Synthèse : les conditions`, x: R`<em>Synthèse.</em> Pour que l'équation ait un sens, il faut (domaine de $\ln$) $x^2>0$ et $x^2+x>0$, c'est-à-dire [[$x\neq0$ et $x(x+1)>0$, soit $x<-1$ ou $x>0$]]. L'analyse a aussi utilisé $\ln(x-1)$, qui demande $x>1$.` },
      { t: R`Conclure`, x: R`Comme $-1<x_1<0$, $x_1$ ne convient pas ; $x_2>1$ convient. L'équation a une unique solution : [[$x_2=\dfrac{1+\sqrt5}{2}=\varphi$, le nombre d'or]].` }
     ] },
    "recurrence-carres": { titre: R`Somme des carrés par récurrence`, chapitre: R`Chapitre 2`, enonce: R`Démontrer par récurrence que pour tout $n\in\mathbb N^*$ : $$\mathcal P(n)\ :\ \sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6}.$$`, note: R``,
     etapes: [
      { t: R`Initialisation`, x: R`Pour $n=1$ : la somme vaut $1^2=1$, et $\dfrac{1\times2\times3}{6}=1$. Donc [[$\mathcal P(1)$ est vraie]].` },
      { t: R`Hypothèse et objectif`, x: R`<em>Hérédité.</em> Supposons $\mathcal P(n)$ vraie pour un $n\in\mathbb N^*$. Montrons $\mathcal P(n+1)$, c'est-à-dire que $\displaystyle\sum_{k=1}^{n+1}k^2$ vaut [[$\dfrac{(n+1)(n+2)(2n+3)}{6}$]]` },
      { t: R`Isoler le dernier terme`, x: R`On isole le terme $k=n+1$ et on applique l'hypothèse de récurrence : $$\begin{aligned}\sum_{k=1}^{n+1}k^2&=\sum_{k=1}^{n}k^2+(n+1)^2\\&=\frac{n(n+1)(2n+1)}{6}+(n+1)^2.\end{aligned}$$` },
      { t: R`Factoriser par $n+1$`, x: R`Au même dénominateur, puis en factorisant par $n+1$ : $$\begin{aligned}\sum_{k=1}^{n+1}k^2&=\frac{(n+1)\big[n(2n+1)+6(n+1)\big]}{6}\\&=\frac{(n+1)(2n^2+7n+6)}{6}.\end{aligned}$$` },
      { t: R`Factoriser le trinôme`, x: R`Or [[$2n^2+7n+6=(n+2)(2n+3)$]] (racines $-2$ et $-\frac32$), d'où $$\sum_{k=1}^{n+1}k^2=\frac{(n+1)(n+2)(2n+3)}{6}:$$ $\mathcal P(n+1)$ est vraie.` },
      { t: R`Conclure`, x: R`Par récurrence, [[$\mathcal P(n)$ est vraie pour tout $n\in\mathbb N^*$]].` }
     ] },
    "racines-degre-2": { titre: R`Les racines d'une équation du second degré`, chapitre: R`Chapitre 0`, enonce: R`Soient $a,b,c$ réels avec $a\neq0$. Retrouver les solutions de $ax^2+bx+c=0$ (on note $\Delta=b^2-4ac$ et on suppose $\Delta>0$).`, note: R`Si $\Delta<0$, le carré $\left(x+\frac{b}{2a}\right)^2$ ne peut pas valoir $\frac{\Delta}{4a^2}<0$ : pas de solution réelle.`,
     etapes: [
      { t: R`L'idée`, x: R`Trouver les racines, c'est factoriser : on met $ax^2+bx+c$ sous <strong>forme canonique</strong>.` },
      { t: R`Factoriser par a`, x: R`Comme $a\neq0$ : $$ax^2+bx+c=a\left(x^2+\frac bax+\frac ca\right).$$` },
      { t: R`Début de carré`, x: R`On reconnaît le début d'un carré : $x^2+\dfrac bax=$ [[$\left(x+\dfrac{b}{2a}\right)^2-\dfrac{b^2}{4a^2}$]]` },
      { t: R`Faire apparaître Δ`, x: R`Donc $$\begin{aligned}ax^2+bx+c&=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{b^2-4ac}{4a^2}\right]\\&=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right].\end{aligned}$$` },
      { t: R`Diviser par a`, x: R`En divisant par $a\neq0$, l'équation équivaut à $$\left(x+\frac{b}{2a}\right)^2=\frac{\Delta}{4a^2}.$$` },
      { t: R`Prendre la racine carrée`, x: R`Comme $\Delta>0$ : $x+\dfrac{b}{2a}=\pm\sqrt{\dfrac{\Delta}{4a^2}}=\pm\dfrac{\sqrt\Delta}{2a}$ (le signe $\pm$ absorbe celui de $a$).` },
      { t: R`Conclure`, x: R`Les deux solutions sont [[$x_1=\dfrac{-b+\sqrt\Delta}{2a}$ et $x_2=\dfrac{-b-\sqrt\Delta}{2a}$]].` }
     ] },
    "bernoulli": { titre: R`Formule de Bernoulli`, chapitre: R`Chapitre 2`, enonce: R`Soient $n\in\mathbb N$ et $a,b$ réels. Démontrer que $$a^n-b^n=(a-b)\sum_{k=0}^{n-1}a^kb^{n-1-k}.$$`, note: R``,
     etapes: [
      { t: R`Développer`, x: R`Notons $S$ le membre de droite et développons : $$S=a\sum_{k=0}^{n-1}a^kb^{n-1-k}-b\sum_{k=0}^{n-1}a^kb^{n-1-k}.$$` },
      { t: R`Rentrer $a$ et $b$ dans les sommes`, x: R`Par linéarité : $$\begin{aligned}S&=\sum_{k=0}^{n-1}a^{k+1}b^{n-1-k}-\sum_{k=0}^{n-1}a^kb^{n-k}\\&=\sum_{k=0}^{n-1}\left(a^{k+1}b^{n-1-k}-a^kb^{n-k}\right).\end{aligned}$$` },
      { t: R`Poser $u_k$`, x: R`Posons [[$u_k=a^kb^{n-k}$]]. Alors $u_{k+1}=a^{k+1}b^{n-(k+1)}=a^{k+1}b^{n-1-k}$, donc $$S=\sum_{k=0}^{n-1}(u_{k+1}-u_k).$$` },
      { t: R`Télescoper`, x: R`C'est une somme télescopique : [[$S=u_n-u_0=a^nb^0-a^0b^n=a^n-b^n$]].` }
     ] },
    "capitaine": { titre: R`Une somme avec des coefficients binomiaux`, chapitre: R`Chapitre 2`, enonce: R`Soit $n\geq2$. Démontrer que $$\sum_{k=0}^{n}k\binom nk(-1)^{k-1}=0.$$`, note: R``,
     etapes: [
      { t: R`Formule du capitaine`, x: R`Rappel : pour $1\leq k\leq n$, [[$k\dbinom nk=n\dbinom{n-1}{k-1}$]].` },
      { t: R`Retirer le terme nul`, x: R`Le terme $k=0$ est nul (facteur $k$), donc la somme commence à $k=1$ : $$\sum_{k=0}^{n}k\binom nk(-1)^{k-1}=\sum_{k=1}^{n}k\binom nk(-1)^{k-1}.$$` },
      { t: R`Appliquer le capitaine`, x: R`Avec la formule du capitaine et la linéarité : $$\sum_{k=1}^{n}k\binom nk(-1)^{k-1}=n\sum_{k=1}^{n}\binom{n-1}{k-1}(-1)^{k-1}.$$` },
      { t: R`Changer d'indice`, x: R`Avec $i=k-1$ ($1\leq k\leq n$ donne $0\leq i\leq n-1$) : $$\sum_{k=1}^{n}\binom{n-1}{k-1}(-1)^{k-1}=\sum_{i=0}^{n-1}\binom{n-1}{i}(-1)^{i}.$$` },
      { t: R`Binôme de Newton`, x: R`Par le binôme : $$\sum_{i=0}^{n-1}\binom{n-1}{i}(-1)^{i}1^{n-1-i}=(-1+1)^{n-1}=0,$$ car [[$n-1\geq1$]]. La somme de départ vaut donc $n\times0=0$.` }
     ] },
    "telescopage": { titre: R`Décomposition de $\frac1{k(k+1)}$ et somme télescopique`, chapitre: R`Chapitre 2`, enonce: R`1. Déterminer deux réels $a$ et $b$ tels que pour tout $k\in\mathbb N^*$, $\dfrac{1}{k(k+1)}=\dfrac ak+\dfrac b{k+1}$.<br>2. En déduire $S_n=\displaystyle\sum_{k=1}^{n}\frac{1}{k(k+1)}$.`, note: R``,
     etapes: [
      { t: R`Même dénominateur`, x: R`Pour tout $k\in\mathbb N^*$ : $$\frac ak+\frac b{k+1}=\frac{a(k+1)+bk}{k(k+1)}.$$` },
      { t: R`Identité polynomiale`, x: R`L'égalité voulue équivaut à $1=a(k+1)+bk$, c'est-à-dire, pour tout $k\in\mathbb N^*$, [[$(a+b)k+a-1=0$]].` },
      { t: R`Polynôme nul`, x: R`Le polynôme $P(X)=(a+b)X+a-1$ a une infinité de racines (tous les $k\in\mathbb N^*$) : c'est le polynôme nul, donc ses coefficients sont nuls : $a+b=0$ et $a-1=0$, d'où [[$a=1$ et $b=-1$]].` },
      { t: R`La décomposition`, x: R`Ainsi, pour tout $k\geq1$ : $$\frac{1}{k(k+1)}=\frac1k-\frac1{k+1}.$$` },
      { t: R`Télescoper`, x: R`$$S_n=\sum_{k=1}^{n}\left(\frac1k-\frac1{k+1}\right)$$ est télescopique : [[$S_n=1-\dfrac1{n+1}=\dfrac{n}{n+1}$]].` }
     ] },
    "somme-double": { titre: R`Une somme double triangulaire`, chapitre: R`Chapitre 2`, enonce: R`Pour $n\in\mathbb N^*$, calculer $$S_n=\sum_{1\leq i\leq j\leq n}i.$$`, note: R``,
     etapes: [
      { t: R`Écrire la somme triangulaire`, x: R`On somme d'abord sur $i$ (de $1$ à $j$), puis sur $j$ : $$S_n=\sum_{j=1}^{n}\sum_{i=1}^{j}i.$$` },
      { t: R`Somme intérieure`, x: R`On connaît la somme des $j$ premiers entiers : [[$\displaystyle\sum_{i=1}^{j}i=\frac{j(j+1)}{2}$]].` },
      { t: R`Linéarité`, x: R`Donc $$S_n=\sum_{j=1}^{n}\frac{j(j+1)}{2}=\frac12\sum_{j=1}^{n}\left(j^2+j\right).$$` },
      { t: R`Sommes usuelles`, x: R`Avec les formules usuelles : $$S_n=\frac12\left(\frac{n(n+1)(2n+1)}{6}+\frac{n(n+1)}{2}\right).$$` },
      { t: R`Factoriser`, x: R`En factorisant par $n(n+1)$ : $$S_n=\frac{n(n+1)}{12}(2n+1+3),$$ donc [[$S_n=\dfrac{n(n+1)(n+2)}{6}$]].` }
     ] },
    "racine-degre-3": { titre: R`Racine d'un polynôme de degré 3`, chapitre: R`Chapitre 3`, enonce: R`Montrer que $P(x)=x^3+2x+1$ admet une unique racine réelle, et qu'elle appartient à $]-1,0[$.`, note: R``,
     etapes: [
      { t: R`Dérivée`, x: R`$P'(x)=3x^2+2$. Comme $3x^2\geq0$, [[$P'(x)>0$ pour tout réel $x$]] : $P$ est strictement croissante sur $\mathbb R$.` },
      { t: R`Limites`, x: R`Pour $x\neq0$, $P(x)=x^3\left(1+\dfrac2{x^2}+\dfrac1{x^3}\right)$. La parenthèse tend vers $1$, donc [[$\displaystyle\lim_{x\to+\infty}P(x)=+\infty$ et $\displaystyle\lim_{x\to-\infty}P(x)=-\infty$]].` },
      { t: R`Tableau de variations`, x: R`<table class="tv"><tr><th>$x$</th><td>$-\infty$</td><td></td><td>$+\infty$</td></tr><tr><th>$P'(x)$</th><td></td><td>$+$</td><td></td></tr><tr><th>$P(x)$</th><td>$-\infty$</td><td>$\nearrow$</td><td>$+\infty$</td></tr></table>` },
      { t: R`Existence (TVI)`, x: R`$P$ est continue, $P(-1)=-1-2+1=-2<0$ et $P(0)=1>0$ : d'après le [[théorème des valeurs intermédiaires]], il existe $x_0\in]-1,0[$ tel que $P(x_0)=0$.` },
      { t: R`Unicité`, x: R`$P$ étant strictement croissante, elle s'annule [[au plus une fois]] : $x_0$ est l'unique racine réelle de $P$.` }
     ] }
  },
  semaines: [
    { debut: "2026-09-28", titre: R`Semaine du 28 septembre`, chapitres: [{ titre: R`Chapitre 0 : Calcul`, points: [R`Identités remarquables ; équations du premier et du second degré, systèmes $2\times2$.`, R`Inégalités et inéquations : quantité conjuguée, logarithme et exponentielle, fonctions croissantes, produits et quotients de trinômes, tableaux de signes.`] }, { titre: R`Chapitre 1 : Nombres réels et logique`, points: [R`Ensembles de nombres, quantificateurs, « et » et « ou », négation (règles de De Morgan), implication et équivalence.`, R`Raisonnements : direct, par l'absurde (irrationalité de $\sqrt2$), par contraposée, par équivalence, par récurrence, par analyse-synthèse.`] }], demos: ["analyse-synthese", "recurrence-carres", "racines-degre-2"] },
    { debut: "2026-10-05", titre: R`Semaine du 5 octobre`, chapitres: [{ titre: R`Chapitre 0 : Calcul`, points: [R`Identités remarquables ; équations du premier et du second degré, systèmes $2\times2$.`, R`Inégalités et inéquations : quantité conjuguée, logarithme et exponentielle, fonctions croissantes, produits et quotients de trinômes, tableaux de signes.`] }, { titre: R`Chapitre 1 : Nombres réels et logique`, points: [R`Ensembles de nombres, quantificateurs, « et » et « ou », négation (règles de De Morgan), implication et équivalence.`, R`Raisonnements : direct, par l'absurde (irrationalité de $\sqrt2$), par contraposée, par équivalence, par récurrence, par analyse-synthèse.`] }, { titre: R`Chapitre 2 : Symboles somme et produit`, points: [R`Chapitre commencé : exercices faciles ou moyens.`, R`Utiliser $\sum$ et $\prod$ dans une récurrence ; sommes usuelles $\sum k$, $\sum k^2$, $\sum k^3$, $\sum q^k$.`] }], demos: ["analyse-synthese", "recurrence-carres", "racines-degre-2"] },
    { debut: "2026-10-12", titre: R`Semaine du 12 octobre`, chapitres: [{ titre: R`Chapitre 1 : Nombres réels et logique`, points: [R`Ensembles de nombres, quantificateurs, « et » et « ou », négation (règles de De Morgan), implication et équivalence.`, R`Raisonnements : direct, par l'absurde (irrationalité de $\sqrt2$), par contraposée, par équivalence, par récurrence, par analyse-synthèse.`] }, { titre: R`Chapitre 2 : Sommes, produits et coefficients binomiaux`, points: [R`Propriétés de la somme : extraction d'un terme, changement d'indice, linéarité ; sommes usuelles.`, R`Produits, $n!$, sommes et produits télescopiques.`, R`Coefficients binomiaux, triangle et formule de Pascal, binôme de Newton, formule de Bernoulli.`] }], demos: ["bernoulli", "capitaine", "telescopage"] },
    { debut: "2026-11-09", titre: R`Semaine du 9 novembre`, chapitres: [{ titre: R`Chapitre 2 : Sommes et produits`, points: [R`Accent sur les sommes doubles : rectangulaires et triangulaires.`, R`Sommes usuelles, télescopage, coefficients binomiaux, binôme de Newton, formule de Bernoulli.`] }, { titre: R`Chapitre 3 : Fonctions usuelles`, points: [R`Domaine de définition, exponentielle, logarithme, racine carrée.`, R`Parité (preuve et lecture graphique), dérivées et tableaux de variations.`, R`Fonctions usuelles : $\ln$, $\exp$, racine carrée, carré, cube, inverse.`] }], demos: ["somme-double", "telescopage", "racine-degre-3"] }
  ]
};
})();
