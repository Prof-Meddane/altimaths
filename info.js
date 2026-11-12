/* Informatique : QCM, fiches et défis code. Généré par info/gen.py, ne pas modifier à la main. */
(function(){ const R = String.raw;
window.INFO = {
  themes: [
    { id: "py_bases", titre: "Types et opérations", icone: "1+1" },
    { id: "py_cond", titre: "Conditions", icone: "if" },
    { id: "py_for", titre: "Boucle for", icone: "for" },
    { id: "py_while", titre: "Boucle while", icone: "⟳" },
    { id: "py_fonc", titre: "Fonctions", icone: "def" },
    { id: "py_listes", titre: "Listes", icone: "[ ]" },
    { id: "py_accu", titre: "Sommes et accumulateurs", icone: "Σ" },
    { id: "py_suites", titre: "Suites récurrentes", icone: "uₙ" },
    { id: "py_rec", titre: "Récursivité", icone: "↻" },
    { id: "py_np", titre: "numpy et matplotlib", icone: "np" },
    { id: "py_alea", titre: "Simulation", icone: "⚄" },
    { id: "py_tri", titre: "Tris et algorithmes", icone: "⇅" },
    { id: "py_dict", titre: "Dictionnaires", icone: "{ }" }
  ],
  questions: [
    { theme: "py_bases", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`print(7 // 2)`,
      choix: [R`<code class="cc">3</code>`, R`<code class="cc">3.5</code>`, R`<code class="cc">4</code>`, R`<code class="cc">1</code>`], bonne: 0, expl: R`<code>//</code> est la division entière (quotient).` },
    { theme: "py_bases", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`print(7 % 2)`,
      choix: [R`<code class="cc">1</code>`, R`<code class="cc">3</code>`, R`<code class="cc">3.5</code>`, R`<code class="cc">0</code>`], bonne: 0, expl: R`<code>%</code> donne le reste de la division euclidienne : $7=2\times3+1$.` },
    { theme: "py_bases", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`print(2 ** 5)`,
      choix: [R`<code class="cc">32</code>`, R`<code class="cc">10</code>`, R`<code class="cc">25</code>`, R`<code class="cc">7</code>`], bonne: 0, expl: R`<code>**</code> est la puissance : $2^5=32$.` },
    { theme: "py_bases", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`print(6 / 2)`,
      choix: [R`<code class="cc">3.0</code>`, R`<code class="cc">3</code>`, R`<code class="cc">3,0</code>`, R`Une erreur`], bonne: 0, expl: R`La division <code>/</code> renvoie toujours un flottant.` },
    { theme: "py_bases", niveau: 0, q: R`Quel est le type de <code>3.14</code> ?`, code: R``,
      choix: [R`<code class="cc">float</code>`, R`<code class="cc">int</code>`, R`<code class="cc">str</code>`, R`<code class="cc">bool</code>`], bonne: 0, expl: R`Un nombre à virgule (avec un point en Python) est un flottant.` },
    { theme: "py_bases", niveau: 0, q: R`Comment tester si l'entier <code>n</code> est pair ?`, code: R``,
      choix: [R`<code class="cc">n % 2 == 0</code>`, R`<code class="cc">n / 2 == 0</code>`, R`<code class="cc">n // 2 == 0</code>`, R`<code class="cc">n % 2 = 0</code>`], bonne: 0, expl: R`Le reste de la division par $2$ est nul. Attention : <code>=</code> affecte, <code>==</code> compare.` },
    { theme: "py_bases", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`x = 5
x = x + 3
print(x)`,
      choix: [R`<code class="cc">8</code>`, R`<code class="cc">5</code>`, R`<code class="cc">53</code>`, R`Une erreur : $x=x+3$ est impossible`], bonne: 0, expl: R`<code>=</code> est une affectation : on calcule <code>x + 3</code> avec l'ancienne valeur, puis on range le résultat dans <code>x</code>.` },
    { theme: "py_bases", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`print(type(7 / 7))`,
      choix: [R`<code class="cc">&lt;class 'float'&gt;</code>`, R`<code class="cc">&lt;class 'int'&gt;</code>`, R`<code class="cc">1</code>`, R`<code class="cc">1.0</code>`], bonne: 0, expl: R`<code>/</code> renvoie un flottant, même quand la division tombe juste.` },
    { theme: "py_bases", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`print("3" + "4")`,
      choix: [R`<code class="cc">34</code>`, R`<code class="cc">7</code>`, R`<code class="cc">"7"</code>`, R`Une erreur`], bonne: 0, expl: R`Sur des chaînes de caractères, <code>+</code> met bout à bout.` },
    { theme: "py_bases", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`print(int(3.9))`,
      choix: [R`<code class="cc">3</code>`, R`<code class="cc">4</code>`, R`<code class="cc">3.9</code>`, R`Une erreur`], bonne: 0, expl: R`<code>int</code> supprime la partie décimale (pour un nombre positif, c'est la partie entière).` },
    { theme: "py_bases", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`print(True and not False)`,
      choix: [R`<code class="cc">True</code>`, R`<code class="cc">False</code>`, R`<code class="cc">1</code>`, R`Une erreur`], bonne: 0, expl: R`<code>not False</code> vaut <code>True</code>, et <code>True and True</code> vaut <code>True</code>.` },
    { theme: "py_bases", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`print(3 < 5 < 4)`,
      choix: [R`<code class="cc">False</code>`, R`<code class="cc">True</code>`, R`Une erreur`, R`<code class="cc">None</code>`], bonne: 0, expl: R`Python lit <code>3 < 5 and 5 < 4</code> : la deuxième comparaison est fausse.` },
    { theme: "py_bases", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`x, y = 1, 2
x, y = y, x
print(x, y)`,
      choix: [R`<code class="cc">2 1</code>`, R`<code class="cc">1 2</code>`, R`<code class="cc">2 2</code>`, R`<code class="cc">1 1</code>`], bonne: 0, expl: R`L'affectation multiple échange les deux valeurs en une seule instruction.` },
    { theme: "py_bases", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`print(-7 // 2)`,
      choix: [R`<code class="cc">-4</code>`, R`<code class="cc">-3</code>`, R`<code class="cc">-3.5</code>`, R`<code class="cc">3</code>`], bonne: 0, expl: R`<code>//</code> arrondit vers le bas : $-3{,}5$ devient $-4$.` },
    { theme: "py_bases", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`print(0.1 + 0.2 == 0.3)`,
      choix: [R`<code class="cc">False</code>`, R`<code class="cc">True</code>`, R`Une erreur`, R`<code class="cc">0.3</code>`], bonne: 0, expl: R`Les flottants sont stockés en binaire de façon approchée : $0{,}1+0{,}2$ donne $0{,}30000000000000004$. On compare donc des flottants avec une tolérance.` },
    { theme: "py_bases", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`print("ab" * 3)`,
      choix: [R`<code class="cc">ababab</code>`, R`<code class="cc">ab3</code>`, R`Une erreur`, R`<code class="cc">aaabbb</code>`], bonne: 0, expl: R`Une chaîne multipliée par un entier est répétée.` },
    { theme: "py_bases", niveau: 3, q: R`Qu'affiche ce programme ?`, code: R`print(1 + True)`,
      choix: [R`<code class="cc">2</code>`, R`Une erreur`, R`<code class="cc">1True</code>`, R`<code class="cc">True</code>`], bonne: 0, expl: R`Un booléen se comporte comme un entier : <code>True</code> vaut $1$ et <code>False</code> vaut $0$.` },
    { theme: "py_cond", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`x = 4
if x > 3:
    print("grand")
else:
    print("petit")`,
      choix: [R`<code class="cc">grand</code>`, R`<code class="cc">petit</code>`, R`<code class="cc">grand
petit</code>`, R`Rien`], bonne: 0, expl: R`La condition <code>4 > 3</code> est vraie.` },
    { theme: "py_cond", niveau: 0, q: R`Quel symbole termine la ligne d'un <code>if</code> ?`, code: R``,
      choix: [R`<code class="cc">:</code>`, R`<code class="cc">;</code>`, R`Rien`, R`<code class="cc">{</code>`], bonne: 0, expl: R`Le deux-points annonce le bloc indenté qui suit.` },
    { theme: "py_cond", niveau: 0, q: R`Qu'est-ce qui indique à Python les instructions qui dépendent d'un <code>if</code> ?`, code: R``,
      choix: [R`Le décalage (indentation) des lignes`, R`Des accolades`, R`Le mot <code>end</code>`, R`Une ligne vide`], bonne: 0, expl: R`En Python, l'indentation fait partie de la syntaxe.` },
    { theme: "py_cond", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`n = 15
if n % 3 == 0:
    print("A")
elif n % 5 == 0:
    print("B")
else:
    print("C")`,
      choix: [R`<code class="cc">A</code>`, R`<code class="cc">B</code>`, R`<code class="cc">A
B</code>`, R`<code class="cc">C</code>`], bonne: 0, expl: R`Dès qu'une condition est vraie, les <code>elif</code> suivants ne sont pas examinés.` },
    { theme: "py_cond", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`n = 15
if n % 3 == 0:
    print("A")
if n % 5 == 0:
    print("B")`,
      choix: [R`<code class="cc">A
B</code>`, R`<code class="cc">A</code>`, R`<code class="cc">B</code>`, R`<code class="cc">AB</code>`], bonne: 0, expl: R`Deux <code>if</code> séparés sont testés tous les deux.` },
    { theme: "py_cond", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`x = -2
if x > 0:
    print("positif")
print("fin")`,
      choix: [R`<code class="cc">fin</code>`, R`<code class="cc">positif
fin</code>`, R`Rien`, R`<code class="cc">positif</code>`], bonne: 0, expl: R`La dernière ligne n'est pas indentée : elle s'exécute dans tous les cas.` },
    { theme: "py_cond", niveau: 1, q: R`Quelle fonction renvoie la valeur absolue de <code>x</code> ?`, code: R`def f(x):
    if x >= 0:
        return ...
    return ...`,
      choix: [R`<code>x</code> puis <code>-x</code>`, R`<code>-x</code> puis <code>x</code>`, R`<code>x</code> puis <code>x</code>`, R`<code>abs</code> puis <code>-abs</code>`], bonne: 0, expl: R`Si $x\geq0$, $|x|=x$ ; sinon $|x|=-x$.` },
    { theme: "py_cond", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`a = 2025
print(a % 4 == 0 and a % 100 != 0 or a % 400 == 0)`,
      choix: [R`<code class="cc">False</code>`, R`<code class="cc">True</code>`, R`Une erreur`, R`<code class="cc">2025</code>`], bonne: 0, expl: R`$2025$ n'est pas divisible par $4$ : la première partie est fausse, et $2025$ n'est pas divisible par $400$.` },
    { theme: "py_cond", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`note = 14
if note >= 10:
    m = "admis"
if note >= 12:
    m = "AB"
if note >= 14:
    m = "B"
print(m)`,
      choix: [R`<code class="cc">B</code>`, R`<code class="cc">admis</code>`, R`<code class="cc">AB</code>`, R`<code class="cc">admis
AB
B</code>`], bonne: 0, expl: R`Les trois conditions sont vraies : <code>m</code> est réaffectée trois fois, la dernière valeur reste.` },
    { theme: "py_cond", niveau: 3, q: R`Qu'affiche ce programme ?`, code: R`x = 0
if x:
    print("oui")
else:
    print("non")`,
      choix: [R`<code class="cc">non</code>`, R`<code class="cc">oui</code>`, R`Une erreur`, R`<code class="cc">0</code>`], bonne: 0, expl: R`Dans un test, le nombre $0$ est considéré comme faux.` },
    { theme: "py_for", niveau: 0, q: R`Quelles valeurs prend <code>k</code> dans <code>for k in range(5)</code> ?`, code: R``,
      choix: [R`<code class="cc">0, 1, 2, 3, 4</code>`, R`<code class="cc">1, 2, 3, 4, 5</code>`, R`<code class="cc">0, 1, 2, 3, 4, 5</code>`, R`<code class="cc">5</code>`], bonne: 0, expl: R`<code>range(n)</code> parcourt les entiers de $0$ à $n-1$.` },
    { theme: "py_for", niveau: 0, q: R`Quelles valeurs prend <code>k</code> dans <code>for k in range(2, 6)</code> ?`, code: R``,
      choix: [R`<code class="cc">2, 3, 4, 5</code>`, R`<code class="cc">2, 3, 4, 5, 6</code>`, R`<code class="cc">3, 4, 5</code>`, R`<code class="cc">2, 6</code>`], bonne: 0, expl: R`La borne de droite est exclue.` },
    { theme: "py_for", niveau: 0, q: R`Combien de fois le message est-il affiché ?`, code: R`for i in range(1, 11):
    print("Coucou")`,
      choix: [R`<code class="cc">10</code>`, R`<code class="cc">11</code>`, R`<code class="cc">9</code>`, R`<code class="cc">1</code>`], bonne: 0, expl: R`<code>range(1, 11)</code> contient $1,2,\dots,10$ : dix valeurs.` },
    { theme: "py_for", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`for k in range(3):
    print(k ** 2)`,
      choix: [R`<code class="cc">0
1
4</code>`, R`<code class="cc">1
4
9</code>`, R`<code class="cc">0
1
4
9</code>`, R`<code class="cc">4</code>`], bonne: 0, expl: R`$k$ prend les valeurs $0,1,2$.` },
    { theme: "py_for", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`for k in range(0, 10, 3):
    print(k)`,
      choix: [R`<code class="cc">0
3
6
9</code>`, R`<code class="cc">0
3
6</code>`, R`<code class="cc">3
6
9</code>`, R`<code class="cc">0
3
6
9
12</code>`], bonne: 0, expl: R`<code>range(a, b, pas)</code> avance de <code>pas</code> en <code>pas</code> tant qu'on reste strictement sous $b$.` },
    { theme: "py_for", niveau: 1, q: R`Quelle boucle affiche les entiers pairs de $0$ à $20$ inclus ?`, code: R``,
      choix: [R`<code class="cc">for k in range(0, 21, 2): print(k)</code>`, R`<code class="cc">for k in range(0, 20, 2): print(k)</code>`, R`<code class="cc">for k in range(2, 20): print(k)</code>`, R`<code class="cc">for k in range(20): print(2 * k)</code>`], bonne: 0, expl: R`Pour inclure $20$, la borne de droite doit dépasser $20$. La dernière proposition va jusqu'à $38$.` },
    { theme: "py_for", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`S = 0
for k in range(1, 5):
    S = S + k
    print(k, S)`,
      choix: [R`<code class="cc">1 1
2 3
3 6
4 10</code>`, R`<code class="cc">1 1
2 3
3 6
4 10
5 15</code>`, R`<code class="cc">4 10</code>`, R`<code class="cc">1 0
2 1
3 3
4 6</code>`], bonne: 0, expl: R`Le <code>print</code> est dans la boucle : il affiche la somme partielle à chaque tour.` },
    { theme: "py_for", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`for lettre in "ECG":
    print(lettre)`,
      choix: [R`<code class="cc">E
C
G</code>`, R`<code class="cc">ECG</code>`, R`<code class="cc">0
1
2</code>`, R`Une erreur`], bonne: 0, expl: R`Une boucle <code>for</code> peut parcourir les caractères d'une chaîne.` },
    { theme: "py_for", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`for i in range(3):
    for j in range(i):
        print(i, j)`,
      choix: [R`<code class="cc">1 0
2 0
2 1</code>`, R`<code class="cc">0 0
1 0
1 1
2 0
2 1
2 2</code>`, R`<code class="cc">1 0
2 1</code>`, R`<code class="cc">0 0
1 1
2 2</code>`], bonne: 0, expl: R`Pour <code>i = 0</code>, la boucle intérieure est vide ; puis <code>j</code> va de $0$ à $i-1$.` },
    { theme: "py_for", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`c = 0
for i in range(4):
    for j in range(5):
        c = c + 1
print(c)`,
      choix: [R`<code class="cc">20</code>`, R`<code class="cc">9</code>`, R`<code class="cc">5</code>`, R`<code class="cc">4</code>`], bonne: 0, expl: R`Boucles imbriquées : $4\times5$ tours.` },
    { theme: "py_for", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`for k in range(5, 0, -1):
    print(k, end=" ")`,
      choix: [R`<code class="cc">5 4 3 2 1 </code>`, R`<code class="cc">5 4 3 2 1 0 </code>`, R`<code class="cc">4 3 2 1 0 </code>`, R`Rien : $5>0$`], bonne: 0, expl: R`Avec un pas négatif, on descend en s'arrêtant avant la borne $0$. <code>end=" "</code> remplace le retour à la ligne par une espace.` },
    { theme: "py_for", niveau: 3, q: R`Qu'affiche ce programme ?`, code: R`for k in range(3):
    k = 10
    print(k, end=" ")`,
      choix: [R`<code class="cc">10 10 10 </code>`, R`<code class="cc">10 </code>`, R`<code class="cc">0 1 2 </code>`, R`Une boucle infinie`], bonne: 0, expl: R`À chaque tour, <code>for</code> redonne à <code>k</code> la valeur suivante de <code>range</code>, même si on l'a modifiée.` },
    { theme: "py_while", niveau: 0, q: R`Quand utilise-t-on plutôt une boucle <code>while</code> qu'une boucle <code>for</code> ?`, code: R``,
      choix: [R`Quand on ne connaît pas à l'avance le nombre de tours`, R`Quand on parcourt une liste`, R`Quand le nombre de tours est connu`, R`Jamais : elles sont équivalentes en tout`], bonne: 0, expl: R`Typiquement : « le premier entier $n$ tel que… ».` },
    { theme: "py_while", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`n = 0
while n ** 2 < 50:
    n = n + 1
print(n)`,
      choix: [R`<code class="cc">8</code>`, R`<code class="cc">7</code>`, R`<code class="cc">50</code>`, R`<code class="cc">49</code>`], bonne: 0, expl: R`$7^2=49<50$ et $8^2=64\geq50$ : la boucle s'arrête à $n=8$.` },
    { theme: "py_while", niveau: 0, q: R`Que se passe-t-il si la condition d'un <code>while</code> reste toujours vraie ?`, code: R``,
      choix: [R`Le programme ne s'arrête jamais (boucle infinie)`, R`Python s'arrête après 1000 tours`, R`La boucle est ignorée`, R`Python affiche une erreur dès le départ`], bonne: 0, expl: R`Il faut que les instructions de la boucle fassent évoluer la condition.` },
    { theme: "py_while", niveau: 1, q: R`On cherche le plus petit $n$ tel que $1+2+\dots+n\geq100$. Que mettre à la place des pointillés ?`, code: R`S = 0
n = 0
while ......:
    n = n + 1
    S = S + n
print(n)`,
      choix: [R`<code class="cc">S &lt; 100</code>`, R`<code class="cc">S &gt;= 100</code>`, R`<code class="cc">n &lt; 100</code>`, R`<code class="cc">S &lt;= 100</code>`], bonne: 0, expl: R`On continue tant que la somme est strictement inférieure à $100$.` },
    { theme: "py_while", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`u = 1
n = 0
while u < 100:
    u = 3 * u
    n = n + 1
print(n, u)`,
      choix: [R`<code class="cc">5 243</code>`, R`<code class="cc">4 81</code>`, R`<code class="cc">5 81</code>`, R`<code class="cc">100 243</code>`], bonne: 0, expl: R`$u$ prend les valeurs $1,3,9,27,81,243$ : cinq multiplications.` },
    { theme: "py_while", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`n = 10
while n > 0:
    n = n - 3
print(n)`,
      choix: [R`<code class="cc">-2</code>`, R`<code class="cc">1</code>`, R`<code class="cc">0</code>`, R`<code class="cc">-3</code>`], bonne: 0, expl: R`$n$ passe par $10,7,4,1,-2$.` },
    { theme: "py_while", niveau: 1, q: R`Quel est le rôle du compteur <code>n</code> ?`, code: R`def temps_de_vol(u):
    n = 0
    while u != 1:
        u = suivant(u)
        n = n + 1
    return n`,
      choix: [R`Compter le nombre de termes calculés avant d'atteindre $1$`, R`Stocker le plus grand terme`, R`Stocker le terme courant`, R`Arrêter la boucle`], bonne: 0, expl: R`C'est le temps de vol de la suite de Syracuse.` },
    { theme: "py_while", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`u = 27
n = 0
while u != 1:
    if u % 2 == 0:
        u = u // 2
    else:
        u = 3 * u + 1
    n = n + 1
print(n)`,
      choix: [R`<code class="cc">111</code>`, R`<code class="cc">27</code>`, R`<code class="cc">112</code>`, R`<code class="cc">110</code>`], bonne: 0, expl: R`Le temps de vol de $27$ est $111$ (la suite monte jusqu'à $9232$).` },
    { theme: "py_while", niveau: 2, q: R`Ce programme cherche le plus petit $n$ tel que $\left(\frac{1}{\sqrt e}\right)^n\leq10^{-4}$. Il affiche :`, code: R`import numpy as np
n = 0
while (1 / np.sqrt(np.e)) ** n > 10 ** (-4):
    n = n + 1
print(n)`,
      choix: [R`<code class="cc">19</code>`, R`<code class="cc">18</code>`, R`<code class="cc">9</code>`, R`<code class="cc">4</code>`], bonne: 0, expl: R`On veut $n\geq8\ln10\approx18{,}4$, donc $n=19$.` },
    { theme: "py_while", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`i = 0
while i < 3:
    print(i)
i = i + 1`,
      choix: [R`Des 0 à l'infini (boucle infinie)`, R`<code class="cc">0
1
2</code>`, R`<code class="cc">0</code>`, R`Rien`], bonne: 0, expl: R`La ligne <code>i = i + 1</code> n'est pas indentée : elle est hors de la boucle, <code>i</code> reste à $0$.` },
    { theme: "py_while", niveau: 3, q: R`Ce programme détermine le plus petit $n$ tel que $\frac1{n!}<10^{-10}$. Il affiche :`, code: R`t = 1
n = 0
while t >= 1e-10:
    n = n + 1
    t = t / n
print(n)`,
      choix: [R`<code class="cc">14</code>`, R`<code class="cc">13</code>`, R`<code class="cc">10</code>`, R`<code class="cc">15</code>`], bonne: 0, expl: R`$13!\approx6{,}2\times10^9<10^{10}$ et $14!\approx8{,}7\times10^{10}$. Le terme $t=\frac1{n!}$ est mis à jour sans recalculer la factorielle.` },
    { theme: "py_fonc", niveau: 0, q: R`Quel mot-clé définit une fonction ?`, code: R``,
      choix: [R`<code class="cc">def</code>`, R`<code class="cc">function</code>`, R`<code class="cc">return</code>`, R`<code class="cc">fun</code>`], bonne: 0, expl: R`<code>def nom(paramètres):</code> puis le corps indenté.` },
    { theme: "py_fonc", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`def f(x):
    return x ** 2 + 1

print(f(3))`,
      choix: [R`<code class="cc">10</code>`, R`<code class="cc">7</code>`, R`<code class="cc">9</code>`, R`<code class="cc">f(3)</code>`], bonne: 0, expl: R`$3^2+1=10$.` },
    { theme: "py_fonc", niveau: 0, q: R`Que fait l'instruction <code>return</code> ?`, code: R``,
      choix: [R`Elle renvoie un résultat et termine la fonction`, R`Elle affiche un résultat`, R`Elle recommence la fonction`, R`Elle passe à la ligne suivante`], bonne: 0, expl: R`Les lignes situées après un <code>return</code> exécuté ne sont pas lues.` },
    { theme: "py_fonc", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`def f(x):
    print(2 * x)

y = f(3)
print(y)`,
      choix: [R`<code class="cc">6
None</code>`, R`<code class="cc">6
6</code>`, R`<code class="cc">6</code>`, R`<code class="cc">None</code>`], bonne: 0, expl: R`<code>f</code> affiche mais ne renvoie rien : <code>y</code> vaut <code>None</code>.` },
    { theme: "py_fonc", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`def f(n):
    for k in range(n):
        return k

print(f(5))`,
      choix: [R`<code class="cc">0</code>`, R`<code class="cc">4</code>`, R`<code class="cc">0
1
2
3
4</code>`, R`<code class="cc">5</code>`], bonne: 0, expl: R`Le <code>return</code> termine la fonction dès le premier tour.` },
    { theme: "py_fonc", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`def g(a, b=10):
    return a + b

print(g(1), g(1, 2))`,
      choix: [R`<code class="cc">11 3</code>`, R`<code class="cc">11 11</code>`, R`<code class="cc">3 3</code>`, R`Une erreur`], bonne: 0, expl: R`Le paramètre <code>b</code> a une valeur par défaut, utilisée quand on ne le donne pas.` },
    { theme: "py_fonc", niveau: 1, q: R`Écrire une fonction ne calcule rien tant que :`, code: R``,
      choix: [R`on ne l'appelle pas, par exemple <code>f(3)</code>`, R`on n'a pas écrit <code>print</code>`, R`on n'a pas appuyé deux fois sur Entrée`, R`on n'a pas importé <code>math</code>`], bonne: 0, expl: R`La définition prépare la fonction ; l'appel l'exécute.` },
    { theme: "py_fonc", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`x = 5
def f():
    x = 1
    return x

print(f(), x)`,
      choix: [R`<code class="cc">1 5</code>`, R`<code class="cc">1 1</code>`, R`<code class="cc">5 5</code>`, R`<code class="cc">5 1</code>`], bonne: 0, expl: R`Le <code>x</code> de la fonction est une variable locale, distincte du <code>x</code> extérieur.` },
    { theme: "py_fonc", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`def h(x):
    if x > 0:
        return "positif"

print(h(-1))`,
      choix: [R`<code class="cc">None</code>`, R`<code class="cc">positif</code>`, R`Une erreur`, R`Rien`], bonne: 0, expl: R`Aucun <code>return</code> n'est atteint : la fonction renvoie <code>None</code>.` },
    { theme: "py_fonc", niveau: 3, q: R`Qu'affiche ce programme ?`, code: R`def compose(f, g):
    return lambda x: f(g(x))

h = compose(lambda x: x + 1, lambda x: 2 * x)
print(h(5))`,
      choix: [R`<code class="cc">11</code>`, R`<code class="cc">12</code>`, R`<code class="cc">13</code>`, R`<code class="cc">10</code>`], bonne: 0, expl: R`$h(5)=f(g(5))=f(10)=11$ : on applique d'abord $g$.` },
    { theme: "py_listes", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`L = [3, 8, 1, 6]
print(L[1])`,
      choix: [R`<code class="cc">8</code>`, R`<code class="cc">3</code>`, R`<code class="cc">1</code>`, R`<code class="cc">[3]</code>`], bonne: 0, expl: R`Les indices commencent à $0$ : <code>L[1]</code> est le deuxième élément.` },
    { theme: "py_listes", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`L = [3, 8, 1, 6]
print(L[-1])`,
      choix: [R`<code class="cc">6</code>`, R`<code class="cc">3</code>`, R`Une erreur`, R`<code class="cc">1</code>`], bonne: 0, expl: R`<code>L[-1]</code> est le dernier élément.` },
    { theme: "py_listes", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`L = [3, 8, 1]
L.append(5)
print(L)`,
      choix: [R`<code class="cc">[3, 8, 1, 5]</code>`, R`<code class="cc">[5, 3, 8, 1]</code>`, R`<code class="cc">[3, 8, 1]</code>`, R`<code class="cc">[3, 8, 6]</code>`], bonne: 0, expl: R`<code>append</code> ajoute un élément à la fin.` },
    { theme: "py_listes", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`L = [2, 4, 6]
print(len(L))`,
      choix: [R`<code class="cc">3</code>`, R`<code class="cc">2</code>`, R`<code class="cc">6</code>`, R`<code class="cc">12</code>`], bonne: 0, expl: R`<code>len</code> donne le nombre d'éléments.` },
    { theme: "py_listes", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`L = [3, 8, 1]
print(L[3])`,
      choix: [R`Une erreur (IndexError)`, R`<code class="cc">1</code>`, R`<code class="cc">None</code>`, R`<code class="cc">[3, 8, 1]</code>`], bonne: 0, expl: R`Les indices valides vont de $0$ à <code>len(L) - 1</code>, ici $2$.` },
    { theme: "py_listes", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`L = [k ** 2 for k in range(4)]
print(L)`,
      choix: [R`<code class="cc">[0, 1, 4, 9]</code>`, R`<code class="cc">[1, 4, 9, 16]</code>`, R`<code class="cc">[0, 1, 4, 9, 16]</code>`, R`<code class="cc">[0, 2, 4, 6]</code>`], bonne: 0, expl: R`Liste en compréhension : $k$ va de $0$ à $3$.` },
    { theme: "py_listes", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`L = [2, 3, 5]
print(3 * L)`,
      choix: [R`<code class="cc">[2, 3, 5, 2, 3, 5, 2, 3, 5]</code>`, R`<code class="cc">[6, 9, 15]</code>`, R`Une erreur`, R`<code class="cc">[2, 3, 5, 3]</code>`], bonne: 0, expl: R`Sur une liste, <code>*</code> répète. Pour multiplier terme à terme, il faut un tableau numpy.` },
    { theme: "py_listes", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`L = [1, 2, 3, 4, 5, 6]
print(L[1:4])`,
      choix: [R`<code class="cc">[2, 3, 4]</code>`, R`<code class="cc">[1, 2, 3, 4]</code>`, R`<code class="cc">[2, 3, 4, 5]</code>`, R`<code class="cc">[1, 2, 3]</code>`], bonne: 0, expl: R`La tranche <code>L[a:b]</code> va de l'indice $a$ inclus à $b$ exclu.` },
    { theme: "py_listes", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`fruits = ["pomme", "kiwi", "orange"]
print(fruits.index("orange"))`,
      choix: [R`<code class="cc">2</code>`, R`<code class="cc">3</code>`, R`<code class="cc">1</code>`, R`<code class="cc">orange</code>`], bonne: 0, expl: R`<code>index</code> renvoie la position de la première occurrence.` },
    { theme: "py_listes", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`L = [8, 15, 8.5, 14.5]
print(sum(L) / len(L))`,
      choix: [R`<code class="cc">11.5</code>`, R`<code class="cc">46</code>`, R`<code class="cc">11</code>`, R`Une erreur`], bonne: 0, expl: R`La moyenne vaut $\frac{46}{4}=11{,}5$.` },
    { theme: "py_listes", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`L = [3, 8, 1]
print(5 in L, 8 in L)`,
      choix: [R`<code class="cc">False True</code>`, R`<code class="cc">True True</code>`, R`<code class="cc">False False</code>`, R`Une erreur`], bonne: 0, expl: R`<code>in</code> teste l'appartenance.` },
    { theme: "py_listes", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`L = [1, 2, 3]
M = L
M.append(4)
print(L)`,
      choix: [R`<code class="cc">[1, 2, 3, 4]</code>`, R`<code class="cc">[1, 2, 3]</code>`, R`Une erreur`, R`<code class="cc">[4]</code>`], bonne: 0, expl: R`<code>M = L</code> ne copie pas la liste : <code>M</code> et <code>L</code> désignent la même liste. Pour copier : <code>M = L.copy()</code>.` },
    { theme: "py_listes", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`L = [5, 3, 7]
for i, x in enumerate(L):
    print(i, x)`,
      choix: [R`<code class="cc">0 5
1 3
2 7</code>`, R`<code class="cc">1 5
2 3
3 7</code>`, R`<code class="cc">5 0
3 1
7 2</code>`, R`<code class="cc">0
1
2</code>`], bonne: 0, expl: R`<code>enumerate</code> donne à la fois l'indice et l'élément.` },
    { theme: "py_listes", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`L = [4, 1, 3]
L.sort()
print(L[::-1])`,
      choix: [R`<code class="cc">[4, 3, 1]</code>`, R`<code class="cc">[1, 3, 4]</code>`, R`<code class="cc">[3, 1, 4]</code>`, R`Une erreur`], bonne: 0, expl: R`On trie dans l'ordre croissant, puis <code>[::-1]</code> parcourt à l'envers.` },
    { theme: "py_listes", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`L = [x for x in range(10) if x % 3 == 0]
print(L)`,
      choix: [R`<code class="cc">[0, 3, 6, 9]</code>`, R`<code class="cc">[3, 6, 9]</code>`, R`<code class="cc">[0, 3, 6]</code>`, R`<code class="cc">[1, 4, 7]</code>`], bonne: 0, expl: R`Le filtre <code>if</code> ne garde que les multiples de $3$.` },
    { theme: "py_listes", niveau: 3, q: R`Qu'affiche ce programme ?`, code: R`L = [1, 2, 3, 4]
for x in L:
    if x % 2 == 0:
        L.remove(x)
print(L)`,
      choix: [R`<code class="cc">[1, 3]</code>`, R`<code class="cc">[1, 2, 3, 4]</code>`, R`Une erreur`, R`<code class="cc">[2, 4]</code>`], bonne: 0, expl: R`Ici le résultat est juste, mais modifier une liste pendant qu'on la parcourt fait sauter des éléments : c'est une source de bugs à éviter.` },
    { theme: "py_listes", niveau: 3, q: R`Qu'affiche ce programme ?`, code: R`L = [[0] * 2] * 2
L[0][0] = 1
print(L)`,
      choix: [R`<code class="cc">[[1, 0], [1, 0]]</code>`, R`<code class="cc">[[1, 0], [0, 0]]</code>`, R`<code class="cc">[[1, 1], [0, 0]]</code>`, R`Une erreur`], bonne: 0, expl: R`<code>[...] * 2</code> recopie deux fois la même sous-liste : modifier l'une modifie l'autre.` },
    { theme: "py_accu", niveau: 0, q: R`Pour calculer une somme avec une boucle, on initialise l'accumulateur à :`, code: R``,
      choix: [R`<code class="cc">0</code>`, R`<code class="cc">1</code>`, R`<code class="cc">None</code>`, R`La première valeur de $k$`], bonne: 0, expl: R`On part de $0$ et on ajoute les termes un par un. Pour un produit, on part de $1$.` },
    { theme: "py_accu", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`P = 1
for k in range(1, 5):
    P = P * k
print(P)`,
      choix: [R`<code class="cc">24</code>`, R`<code class="cc">10</code>`, R`<code class="cc">120</code>`, R`<code class="cc">0</code>`], bonne: 0, expl: R`$1\times2\times3\times4=4!=24$.` },
    { theme: "py_accu", niveau: 0, q: R`Quelle somme ce programme calcule-t-il ?`, code: R`S = 0
for k in range(1, n + 1):
    S = S + k ** 2`,
      choix: [R`$\displaystyle\sum_{k=1}^{n}k^2$`, R`$\displaystyle\sum_{k=1}^{n+1}k^2$`, R`$\displaystyle\sum_{k=0}^{n-1}k^2$`, R`$\displaystyle\left(\sum_{k=1}^{n}k\right)^2$`], bonne: 0, expl: R`<code>range(1, n + 1)</code> parcourt $1,\dots,n$.` },
    { theme: "py_accu", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`n = 50
S = 0
for k in range(1, n + 1):
    S = S + k
print(S == n * (n + 1) // 2)`,
      choix: [R`<code class="cc">True</code>`, R`<code class="cc">False</code>`, R`<code class="cc">1275</code>`, R`Une erreur`], bonne: 0, expl: R`On retrouve la formule $\sum_{k=1}^{n}k=\frac{n(n+1)}2$.` },
    { theme: "py_accu", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`P = 0
for k in range(1, 5):
    P = P * k
print(P)`,
      choix: [R`<code class="cc">0</code>`, R`<code class="cc">24</code>`, R`<code class="cc">10</code>`, R`<code class="cc">1</code>`], bonne: 0, expl: R`Un produit initialisé à $0$ reste nul : il faut partir de <code>P = 1</code>.` },
    { theme: "py_accu", niveau: 1, q: R`Quelle ligne calcule $S_n=\displaystyle\sum_{k=0}^{n}\frac{k^2}{3^k}$ dans la boucle <code>for k in range(n + 1):</code> ?`, code: R``,
      choix: [R`<code class="cc">S = S + k ** 2 / 3 ** k</code>`, R`<code class="cc">S = k ** 2 / 3 ** k</code>`, R`<code class="cc">S = S + k ** 2 / 3 * k</code>`, R`<code class="cc">S = S * k ** 2 / 3 ** k</code>`], bonne: 0, expl: R`Attention aux priorités : <code>3 * k</code> n'est pas $3^k$.` },
    { theme: "py_accu", niveau: 1, q: R`Que calcule l'appel <code>sum([k for k in range(1, 6)])</code> ?`, code: R``,
      choix: [R`<code class="cc">15</code>`, R`<code class="cc">21</code>`, R`<code class="cc">10</code>`, R`<code class="cc">[1, 2, 3, 4, 5]</code>`], bonne: 0, expl: R`La liste vaut <code>[1, 2, 3, 4, 5]</code> et <code>sum</code> additionne ses éléments.` },
    { theme: "py_accu", niveau: 2, q: R`Cette somme de Riemann approche $\displaystyle\int_0^1x^2\,dx$. Que mettre à la place des pointillés ?`, code: R`n = 100
L = 0
for k in range(n):
    L = L + ......
print(L)`,
      choix: [R`<code class="cc">(k / n) ** 2 / n</code>`, R`<code class="cc">(k / n) ** 2</code>`, R`<code class="cc">k ** 2 / n</code>`, R`<code class="cc">(k / n) ** 2 * n</code>`], bonne: 0, expl: R`$L_n=\frac1n\sum_{k=0}^{n-1}\left(\frac kn\right)^2$ : chaque rectangle a pour largeur $\frac1n$.` },
    { theme: "py_accu", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`n = 4
L = 0
R = 0
for k in range(n):
    L = L + (k / n) ** 2 / n
for k in range(1, n + 1):
    R = R + (k / n) ** 2 / n
print(R - L)`,
      choix: [R`<code class="cc">0.25</code>`, R`<code class="cc">0</code>`, R`<code class="cc">0.0625</code>`, R`<code class="cc">1.0</code>`], bonne: 0, expl: R`Les deux sommes diffèrent du premier et du dernier rectangle : $R_n-L_n=\frac{f(1)-f(0)}{n}=\frac14$.` },
    { theme: "py_accu", niveau: 2, q: R`Ce programme approche $e$. Que vaut <code>t</code> à la fin du tour d'indice $k$ ?`, code: R`t = 1
S = 1
for k in range(1, 11):
    t = t / k
    S = S + t`,
      choix: [R`$\dfrac{1}{k!}$`, R`$\dfrac1k$`, R`$k!$`, R`$\dfrac{1}{2^k}$`], bonne: 0, expl: R`On met à jour le terme : $t_k=\frac{t_{k-1}}{k}$, ce qui évite de recalculer la factorielle.` },
    { theme: "py_accu", niveau: 3, q: R`Pour $f$ décroissante sur $[a,b]$, la somme de Riemann à gauche $L_n$ et l'intégrale $\ell$ vérifient :`, code: R``,
      choix: [R`$0\leq L_n-\ell\leq\dfrac{(b-a)\big(f(a)-f(b)\big)}{n}$`, R`$L_n\leq\ell$`, R`$L_n=\ell$ dès que $n\geq1$`, R`$0\leq\ell-L_n\leq\dfrac1n$`], bonne: 0, expl: R`Pour $f$ décroissante, chaque rectangle de gauche dépasse la courbe, et $L_n-R_n=\frac{(b-a)(f(a)-f(b))}{n}$.` },
    { theme: "py_suites", niveau: 0, q: R`Pour $u_0=10$ et $u_{n+1}=0{,}9\,u_n$, quelle fonction renvoie $u_n$ ?`, code: R``,
      choix: [R`<code class="cc">def u(n):
    v = 10
    for k in range(n):
        v = 0.9 * v
    return v</code>`, R`<code class="cc">def u(n):
    v = 10
    for k in range(n):
        v = 0.9 * k
    return v</code>`, R`<code class="cc">def u(n):
    for k in range(n):
        v = 10
        v = 0.9 * v
    return v</code>`, R`<code class="cc">def u(n):
    v = 10
    for k in range(n + 1):
        v = 0.9 * v
    return v</code>`], bonne: 0, expl: R`On initialise une seule fois, puis on applique $n$ fois la relation de récurrence.` },
    { theme: "py_suites", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`u = 1
for i in range(3):
    u = 2 * u + i + 1
print(u)`,
      choix: [R`<code class="cc">19</code>`, R`<code class="cc">8</code>`, R`<code class="cc">42</code>`, R`<code class="cc">3</code>`], bonne: 0, expl: R`$u_0=1$, $u_1=3$, $u_2=8$, $u_3=19$.` },
    { theme: "py_suites", niveau: 0, q: R`Pour calculer $u_n$ à partir de $u_0$, combien de fois applique-t-on la relation $u_{k+1}=f(u_k)$ ?`, code: R``,
      choix: [R`$n$ fois`, R`$n+1$ fois`, R`$n-1$ fois`, R`$2n$ fois`], bonne: 0, expl: R`$u_1=f(u_0)$, …, $u_n=f(u_{n-1})$.` },
    { theme: "py_suites", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`U = [1]
for i in range(4):
    U.append(2 * U[i] + i + 1)
print(U)`,
      choix: [R`<code class="cc">[1, 3, 8, 19, 42]</code>`, R`<code class="cc">[3, 8, 19, 42]</code>`, R`<code class="cc">[1, 3, 8, 19]</code>`, R`<code class="cc">[1, 2, 3, 4, 5]</code>`], bonne: 0, expl: R`La liste contient $u_0,\dots,u_4$ : cinq termes.` },
    { theme: "py_suites", niveau: 1, q: R`Pour $u_0=4$ et $u_{n+1}=\ln(u_n)+2$ (EML 2018), quelle ligne écrire dans la boucle ?`, code: R`import numpy as np
def suite(n):
    u = 4
    for k in range(n):
        ......
    return u`,
      choix: [R`<code class="cc">u = np.log(u) + 2</code>`, R`<code class="cc">u = np.log(k) + 2</code>`, R`<code class="cc">u = np.ln(u) + 2</code>`, R`<code class="cc">u = log(u + 2)</code>`], bonne: 0, expl: R`En numpy, le logarithme népérien s'appelle <code>np.log</code>.` },
    { theme: "py_suites", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`a, b = 0, 1
for k in range(6):
    a, b = b, a + b
print(a)`,
      choix: [R`<code class="cc">8</code>`, R`<code class="cc">5</code>`, R`<code class="cc">13</code>`, R`<code class="cc">6</code>`], bonne: 0, expl: R`Suite de Fibonacci : $0,1,1,2,3,5,8$ ; après $6$ tours, <code>a</code> vaut $F_6=8$.` },
    { theme: "py_suites", niveau: 2, q: R`Ce code pour Fibonacci est faux. Pourquoi ?`, code: R`a, b = 0, 1
for k in range(6):
    a = b
    b = a + b`,
      choix: [R`<code>a</code> est écrasé avant d'être utilisé pour calculer <code>b</code>`, R`<code>range(6)</code> devrait être <code>range(7)</code>`, R`Il faut initialiser <code>b = 0</code>`, R`Il n'y a pas d'erreur`], bonne: 0, expl: R`Après <code>a = b</code>, <code>a + b</code> vaut <code>2 * b</code>. L'affectation simultanée <code>a, b = b, a + b</code> règle le problème.` },
    { theme: "py_suites", niveau: 2, q: R`EML 2019 : $u_1=1$ et $u_{n+1}=u_n+\frac1{n^2u_n}$. Quelle boucle convient ?`, code: R`def suite(n):
    u = 1
    ......
    return u`,
      choix: [R`<code class="cc">for k in range(1, n):
        u = u + 1 / (k ** 2 * u)</code>`, R`<code class="cc">for k in range(n):
        u = u + 1 / (k ** 2 * u)</code>`, R`<code class="cc">for k in range(1, n):
        u = u + 1 / (n ** 2 * u)</code>`, R`<code class="cc">for k in range(1, n + 1):
        u = u + 1 / (k ** 2 * u)</code>`], bonne: 0, expl: R`On passe de $u_1$ à $u_n$ en $n-1$ étapes, avec l'indice courant $k$ (et non $n$). Avec <code>range(n)</code>, on diviserait par $0$.` },
    { theme: "py_suites", niveau: 3, q: R`Qu'affiche ce programme ?`, code: R`def terme(u0, n):
    u = u0
    for k in range(n):
        u = u // 2 if u % 2 == 0 else 3 * u + 1
    return u

print(terme(6, 4), terme(27, 10))`,
      choix: [R`<code class="cc">16 214</code>`, R`<code class="cc">8 214</code>`, R`<code class="cc">16 107</code>`, R`<code class="cc">5 82</code>`], bonne: 0, expl: R`Syracuse : $6,3,10,5,16$ ; et $u_{10}=214$ en partant de $27$.` },
    { theme: "py_rec", niveau: 0, q: R`Une fonction récursive est une fonction qui :`, code: R``,
      choix: [R`s'appelle elle-même`, R`contient une boucle`, R`renvoie une liste`, R`ne contient pas de <code>return</code>`], bonne: 0, expl: R`Elle ramène le calcul au même calcul sur un cas plus simple.` },
    { theme: "py_rec", niveau: 0, q: R`Quels sont les deux ingrédients d'une fonction récursive ?`, code: R``,
      choix: [R`Un cas de base et un appel récursif`, R`Une boucle et un compteur`, R`Un <code>print</code> et un <code>return</code>`, R`Une liste et un indice`], bonne: 0, expl: R`Comme une récurrence : initialisation, puis passage d'un rang au suivant.` },
    { theme: "py_rec", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`def fact(n):
    if n == 0:
        return 1
    return n * fact(n - 1)

print(fact(4))`,
      choix: [R`<code class="cc">24</code>`, R`<code class="cc">4</code>`, R`<code class="cc">10</code>`, R`Une erreur`], bonne: 0, expl: R`$4!=4\times3\times2\times1=24$.` },
    { theme: "py_rec", niveau: 1, q: R`Que se passe-t-il si l'on retire le cas de base de <code>fact</code> ?`, code: R``,
      choix: [R`Les appels ne s'arrêtent plus : <code>RecursionError</code>`, R`La fonction renvoie $0$`, R`La fonction renvoie <code>None</code>`, R`Python ajoute le cas de base tout seul`], bonne: 0, expl: R`<code>fact(3)</code> appelle <code>fact(2)</code>, …, <code>fact(-1)</code>, etc., jusqu'à la limite d'environ $1000$ appels.` },
    { theme: "py_rec", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`def s(n):
    if n == 1:
        return 1
    return n + s(n - 1)

print(s(5))`,
      choix: [R`<code class="cc">15</code>`, R`<code class="cc">5</code>`, R`<code class="cc">120</code>`, R`<code class="cc">10</code>`], bonne: 0, expl: R`$5+4+3+2+1$.` },
    { theme: "py_rec", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`def p(x, n):
    if n == 0:
        return 1
    return x * p(x, n - 1)

print(p(2, 10))`,
      choix: [R`<code class="cc">1024</code>`, R`<code class="cc">20</code>`, R`<code class="cc">512</code>`, R`<code class="cc">2048</code>`], bonne: 0, expl: R`Puissance récursive : $2^{10}$.` },
    { theme: "py_rec", niveau: 2, q: R`Combien d'appels à <code>fact</code> provoque <code>fact(3)</code> (en comptant le premier) ?`, code: R``,
      choix: [R`<code class="cc">4</code>`, R`<code class="cc">3</code>`, R`<code class="cc">6</code>`, R`<code class="cc">1</code>`], bonne: 0, expl: R`<code>fact(3)</code>, <code>fact(2)</code>, <code>fact(1)</code>, <code>fact(0)</code>.` },
    { theme: "py_rec", niveau: 2, q: R`Pourquoi <code>terme_rec(6, 5000)</code> échoue-t-il alors que la version avec une boucle fonctionne ?`, code: R``,
      choix: [R`Python limite à environ $1000$ le nombre d'appels imbriqués`, R`La suite de Syracuse diverge`, R`$5000$ n'est pas un entier valide`, R`La version récursive est fausse`], bonne: 0, expl: R`Il faudrait empiler $5000$ appels en attente.` },
    { theme: "py_rec", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`def f(n):
    if n <= 1:
        return n
    return f(n - 1) + f(n - 2)

print(f(7))`,
      choix: [R`<code class="cc">13</code>`, R`<code class="cc">8</code>`, R`<code class="cc">21</code>`, R`<code class="cc">7</code>`], bonne: 0, expl: R`Fibonacci récursif : $0,1,1,2,3,5,8,13$.` },
    { theme: "py_rec", niveau: 3, q: R`Qu'affiche ce programme ?`, code: R`def t(u):
    if u == 1:
        return [1]
    return [u] + t(u // 2 if u % 2 == 0 else 3 * u + 1)

print(t(6))`,
      choix: [R`<code class="cc">[6, 3, 10, 5, 16, 8, 4, 2, 1]</code>`, R`<code class="cc">[6, 3, 10, 5, 16, 8, 4, 2]</code>`, R`<code class="cc">[1, 2, 4, 8, 16, 5, 10, 3, 6]</code>`, R`<code class="cc">9</code>`], bonne: 0, expl: R`Trajectoire récursive : le premier terme, puis la trajectoire du suivant.` },
    { theme: "py_rec", niveau: 3, q: R`Avec <code>f(n)</code> = Fibonacci récursif naïf, pourquoi <code>f(40)</code> est-il très lent ?`, code: R``,
      choix: [R`Les mêmes valeurs sont recalculées un nombre exponentiel de fois`, R`Python ne gère pas les grands entiers`, R`La limite de récursion est atteinte`, R`Il manque un cas de base`], bonne: 0, expl: R`<code>f(38)</code> est calculé deux fois, <code>f(37)</code> trois fois, etc. : le nombre d'appels croît comme $\varphi^n$.` },
    { theme: "py_np", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`import numpy as np
print(np.linspace(0, 1, 5))`,
      choix: [R`<code class="cc">[0.   0.25 0.5  0.75 1.  ]</code>`, R`<code class="cc">[0.  0.2 0.4 0.6 0.8]</code>`, R`<code class="cc">[0 1 2 3 4]</code>`, R`<code class="cc">[0.   0.25 0.5  0.75]</code>`], bonne: 0, expl: R`<code>np.linspace(a, b, n)</code> donne $n$ réels régulièrement espacés de $a$ à $b$ inclus.` },
    { theme: "py_np", niveau: 0, q: R`Quelle ligne importe le sous-module de tracé ?`, code: R``,
      choix: [R`<code class="cc">import matplotlib.pyplot as plt</code>`, R`<code class="cc">import matplotlib as plt</code>`, R`<code class="cc">import plt</code>`, R`<code class="cc">from numpy import plt</code>`], bonne: 0, expl: R`Avec <code>import matplotlib as plt</code>, <code>plt.plot</code> n'existe pas.` },
    { theme: "py_np", niveau: 0, q: R`Que fait <code>plt.plot(X, Y)</code> ?`, code: R``,
      choix: [R`Il relie les points de coordonnées <code>(X[i], Y[i])</code>`, R`Il affiche immédiatement la figure`, R`Il trace l'histogramme de <code>Y</code>`, R`Il calcule <code>Y</code> en fonction de <code>X</code>`], bonne: 0, expl: R`La figure s'affiche avec <code>plt.show()</code>.` },
    { theme: "py_np", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`import numpy as np
x = np.array([2, 3, 5])
print(3 * x)`,
      choix: [R`<code class="cc">[ 6  9 15]</code>`, R`<code class="cc">[2, 3, 5, 2, 3, 5, 2, 3, 5]</code>`, R`<code class="cc">[6, 9, 15]</code>`, R`Une erreur`], bonne: 0, expl: R`Sur un tableau numpy, les opérations se font terme à terme.` },
    { theme: "py_np", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`import numpy as np
print(np.arange(1, 3, 0.5))`,
      choix: [R`<code class="cc">[1.  1.5 2.  2.5]</code>`, R`<code class="cc">[1.  1.5 2.  2.5 3. ]</code>`, R`<code class="cc">[1 2]</code>`, R`<code class="cc">[1.  1.5 2. ]</code>`], bonne: 0, expl: R`Comme <code>range</code>, <code>np.arange</code> exclut la borne de droite.` },
    { theme: "py_np", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`import numpy as np
x = np.array([1, 2, 3])
print(x ** 2)`,
      choix: [R`<code class="cc">[1 4 9]</code>`, R`<code class="cc">[1, 4, 9]</code>`, R`<code class="cc">14</code>`, R`Une erreur`], bonne: 0, expl: R`Puissance terme à terme.` },
    { theme: "py_np", niveau: 1, q: R`Comment tracer la courbe de $\exp$ sur $[-1,5]$ ?`, code: R``,
      choix: [R`<code class="cc">x = np.linspace(-1, 5, 200)
plt.plot(x, np.exp(x))</code>`, R`<code class="cc">x = np.linspace(-1, 5, 200)
plt.plot(np.exp(x))</code>`, R`<code class="cc">plt.plot(np.exp, -1, 5)</code>`, R`<code class="cc">x = range(-1, 5)
plt.plot(x, exp(x))</code>`], bonne: 0, expl: R`Les fonctions de numpy s'appliquent à tout un tableau d'un coup.` },
    { theme: "py_np", niveau: 1, q: R`Quel paramètre de <code>plt.plot</code> trace des points rouges non reliés ?`, code: R``,
      choix: [R`<code class="cc">'ro'</code>`, R`<code class="cc">'r-'</code>`, R`<code class="cc">'r--'</code>`, R`<code class="cc">color='o'</code>`], bonne: 0, expl: R`<code>r</code> pour rouge, <code>o</code> pour des points ronds.` },
    { theme: "py_np", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`import numpy as np
L = [2, 3, 5]
print(np.log(L)[0] == np.log(2))`,
      choix: [R`<code class="cc">True</code>`, R`<code class="cc">False</code>`, R`Une erreur : $L$ est une liste`, R`<code class="cc">[True]</code>`], bonne: 0, expl: R`Les fonctions numpy acceptent aussi les listes, qu'elles convertissent en tableaux.` },
    { theme: "py_np", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`import numpy as np
x = np.array([1, 2, 3])
print(x + [10, 20, 30])`,
      choix: [R`<code class="cc">[11 22 33]</code>`, R`<code class="cc">[1, 2, 3, 10, 20, 30]</code>`, R`Une erreur`, R`<code class="cc">[11, 22, 33]</code>`], bonne: 0, expl: R`Dès qu'un tableau numpy est en jeu, l'addition se fait terme à terme.` },
    { theme: "py_np", niveau: 3, q: R`Qu'affiche ce programme ?`, code: R`import numpy as np
print(np.linspace(0, 1, 10)[1])`,
      choix: [R`<code class="cc">0.1111111111111111</code>`, R`<code class="cc">0.1</code>`, R`<code class="cc">1</code>`, R`<code class="cc">0.0</code>`], bonne: 0, expl: R`Dix points de $0$ à $1$ font neuf intervalles de largeur $\frac19$. Pour un pas de $0{,}1$, il faut $11$ points.` },
    { theme: "py_alea", niveau: 0, q: R`Que renvoie <code>rd.random()</code> (avec <code>import numpy.random as rd</code>) ?`, code: R``,
      choix: [R`Un réel au hasard dans $[0,1[$`, R`Un entier au hasard entre $0$ et $1$`, R`Un réel au hasard dans $[0,10]$`, R`Toujours $0{,}5$`], bonne: 0, expl: R`C'est la loi uniforme sur $[0,1[$.` },
    { theme: "py_alea", niveau: 0, q: R`Quelle expression simule un lancer de dé à six faces ?`, code: R``,
      choix: [R`<code class="cc">int(6 * rd.random()) + 1</code>`, R`<code class="cc">int(6 * rd.random())</code>`, R`<code class="cc">6 * rd.random()</code>`, R`<code class="cc">int(rd.random()) + 6</code>`], bonne: 0, expl: R`<code>6 * rd.random()</code> est dans $[0,6[$ ; sa partie entière est dans $\{0,\dots,5\}$ ; on ajoute $1$.` },
    { theme: "py_alea", niveau: 0, q: R`Quelle expression vaut <code>True</code> avec probabilité $p$ ?`, code: R``,
      choix: [R`<code class="cc">rd.random() &lt; p</code>`, R`<code class="cc">rd.random() &gt; p</code>`, R`<code class="cc">rd.random() == p</code>`, R`<code class="cc">p * rd.random()</code>`], bonne: 0, expl: R`$P(U<p)=p$ pour $U$ uniforme sur $[0,1[$ : c'est une loi de Bernoulli.` },
    { theme: "py_alea", niveau: 1, q: R`Avec numpy, quelles valeurs peut renvoyer <code>rd.randint(1, 7)</code> ?`, code: R``,
      choix: [R`$1,2,3,4,5,6$`, R`$1,\dots,7$`, R`$0,\dots,6$`, R`Un réel entre $1$ et $7$`], bonne: 0, expl: R`Dans <code>numpy.random.randint(a, b)</code>, la borne $b$ est exclue (contrairement à <code>random.randint</code>).` },
    { theme: "py_alea", niveau: 1, q: R`Que compte la variable <code>c</code> ?`, code: R`c = 0
for k in range(n):
    if rd.random() < p:
        c = c + 1`,
      choix: [R`Le nombre de succès en $n$ épreuves de Bernoulli : $c$ suit $\mathcal B(n,p)$`, R`Le rang du premier succès`, R`La proportion de succès`, R`Le nombre d'échecs`], bonne: 0, expl: R`C'est la simulation classique d'une loi binomiale.` },
    { theme: "py_alea", niveau: 1, q: R`Que renvoie ce programme ?`, code: R`def premier_succes(p):
    n = 1
    while rd.random() >= p:
        n = n + 1
    return n`,
      choix: [R`Le rang du premier succès : une loi géométrique $\mathcal G(p)$`, R`Un nombre de succès binomial`, R`Toujours $1$`, R`Une loi de Poisson`], bonne: 0, expl: R`On répète jusqu'au premier succès.` },
    { theme: "py_alea", niveau: 2, q: R`Au jeu de dés du « côté obscur de la force », quelle est la probabilité d'un double autre que le double 6 ?`, code: R``,
      choix: [R`$\dfrac{5}{36}$`, R`$\dfrac16$`, R`$\dfrac1{36}$`, R`$\dfrac{6}{36}$`], bonne: 0, expl: R`Il y a $6$ doubles parmi $36$ issues équiprobables, dont un double 6.` },
    { theme: "py_alea", niveau: 2, q: R`Dans ce jeu : double 6 → $+10$ ; autre double → $+2$ ; deux impairs différents → $0$ ; sinon → $-1$. Le gain moyen vaut :`, code: R``,
      choix: [R`$-\dfrac{1}{9}$ euro`, R`$0$ euro`, R`$+\dfrac{1}{3}$ euro`, R`$-\dfrac{4}{9}$ euro`], bonne: 0, expl: R`Sur $36$ issues : $1$ double 6, $5$ autres doubles, $6$ couples d'impairs différents, $24$ autres. $E=\frac{10\times1+2\times5+0\times6-1\times24}{36}=-\frac{4}{36}=-\frac19$ : le jeu est perdant.` },
    { theme: "py_alea", niveau: 2, q: R`Pour estimer l'espérance d'une variable simulée par <code>X()</code>, on calcule :`, code: R``,
      choix: [R`<code class="cc">sum([X() for k in range(10000)]) / 10000</code>`, R`<code class="cc">X() / 10000</code>`, R`<code class="cc">max([X() for k in range(10000)])</code>`, R`<code class="cc">sum(X() for k in range(10000))</code>`], bonne: 0, expl: R`Loi des grands nombres : la moyenne empirique d'un grand échantillon approche l'espérance.` },
    { theme: "py_alea", niveau: 3, q: R`Que fait cette fonction ?`, code: R`def tirage(p):
    u = rd.random()
    s = 0
    for k in range(len(p)):
        s = s + p[k]
        if u < s:
            return k`,
      choix: [R`Elle simule une variable de loi $P(X=k)=p_k$`, R`Elle renvoie toujours le dernier indice`, R`Elle trie la liste <code>p</code>`, R`Elle renvoie le plus grand $p_k$`], bonne: 0, expl: R`On découpe $[0,1[$ en intervalles de longueurs $p_0,p_1,\dots$ et on regarde dans lequel tombe $u$.` },
    { theme: "py_tri", niveau: 0, q: R`Quel est le principe d'un algorithme glouton ?`, code: R``,
      choix: [R`Faire à chaque étape le meilleur choix local`, R`Essayer toutes les possibilités`, R`Couper le problème en deux`, R`Trier d'abord la liste`], bonne: 0, expl: R`Par exemple, rendre la monnaie en prenant toujours la plus grande pièce possible.` },
    { theme: "py_tri", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`L = [4, 9, 2, 7]
m = L[0]
for x in L:
    if x > m:
        m = x
print(m)`,
      choix: [R`<code class="cc">9</code>`, R`<code class="cc">4</code>`, R`<code class="cc">7</code>`, R`<code class="cc">2</code>`], bonne: 0, expl: R`Recherche du maximum : <code>m</code> garde la plus grande valeur rencontrée.` },
    { theme: "py_tri", niveau: 0, q: R`Le tri fusion repose sur la méthode :`, code: R``,
      choix: [R`diviser pour régner`, R`gloutonne`, R`par essais successifs`, R`par dichotomie sur les valeurs`], bonne: 0, expl: R`On coupe en deux, on trie chaque moitié (récursivement), puis on fusionne.` },
    { theme: "py_tri", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`def fusion(A, B):
    M = []
    i = j = 0
    while i < len(A) and j < len(B):
        if A[i] <= B[j]:
            M.append(A[i]); i += 1
        else:
            M.append(B[j]); j += 1
    return M + A[i:] + B[j:]

print(fusion([1, 4, 9], [2, 3, 10]))`,
      choix: [R`<code class="cc">[1, 2, 3, 4, 9, 10]</code>`, R`<code class="cc">[1, 4, 9, 2, 3, 10]</code>`, R`<code class="cc">[1, 2, 3, 4, 9]</code>`, R`<code class="cc">[10, 9, 4, 3, 2, 1]</code>`], bonne: 0, expl: R`On compare les têtes des deux listes triées, puis on ajoute ce qui reste.` },
    { theme: "py_tri", niveau: 1, q: R`Rendu de monnaie glouton avec les pièces $5$, $2$ et $1$ : combien de pièces pour $13$ ?`, code: R``,
      choix: [R`<code class="cc">4</code>`, R`<code class="cc">3</code>`, R`<code class="cc">5</code>`, R`<code class="cc">13</code>`], bonne: 0, expl: R`$13=5+5+2+1$.` },
    { theme: "py_tri", niveau: 1, q: R`Pour trier <code>[9, 8, 7, 6]</code> par fusion, on fusionne d'abord :`, code: R``,
      choix: [R`<code>[8, 9]</code> et <code>[6, 7]</code>`, R`<code>[9]</code> et <code>[6, 7, 8]</code>`, R`<code>[6, 9]</code> et <code>[7, 8]</code>`, R`<code>[9, 8]</code> et <code>[7, 6]</code>`], bonne: 0, expl: R`Chaque moitié <code>[9, 8]</code> et <code>[7, 6]</code> est d'abord triée.` },
    { theme: "py_tri", niveau: 2, q: R`Le tri par sélection d'une liste de longueur $n$ effectue environ :`, code: R``,
      choix: [R`$\dfrac{n^2}{2}$ comparaisons`, R`$n$ comparaisons`, R`$n\log_2n$ comparaisons`, R`$2^n$ comparaisons`], bonne: 0, expl: R`On cherche le minimum parmi $n$, puis $n-1$, … éléments. Le tri fusion n'en fait qu'environ $n\log_2n$.` },
    { theme: "py_tri", niveau: 2, q: R`Avec les pièces $1$, $3$ et $4$, l'algorithme glouton pour rendre $6$ donne :`, code: R``,
      choix: [R`$3$ pièces ($4+1+1$), alors que $2$ suffisent ($3+3$)`, R`$2$ pièces, ce qui est optimal`, R`$6$ pièces`, R`aucune solution`], bonne: 0, expl: R`Le glouton n'est pas toujours optimal : cela dépend du système de pièces.` },
    { theme: "py_tri", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`L = [5, 2, 8, 1]
for i in range(len(L)):
    k = i
    for j in range(i + 1, len(L)):
        if L[j] < L[k]:
            k = j
    L[i], L[k] = L[k], L[i]
print(L)`,
      choix: [R`<code class="cc">[1, 2, 5, 8]</code>`, R`<code class="cc">[8, 5, 2, 1]</code>`, R`<code class="cc">[5, 2, 8, 1]</code>`, R`<code class="cc">[1, 5, 2, 8]</code>`], bonne: 0, expl: R`Tri par sélection : on place le minimum restant en position $i$.` },
    { theme: "py_tri", niveau: 3, q: R`Dichotomie : dans une liste triée de $1000$ éléments, combien de comparaisons au plus pour trouver un élément ?`, code: R``,
      choix: [R`Environ $10$`, R`Environ $500$`, R`$1000$`, R`Environ $100$`], bonne: 0, expl: R`On divise la zone de recherche par $2$ à chaque étape, et $2^{10}=1024$.` },
    { theme: "py_dict", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`d = {"nom": "John", "age": 30}
print(d["age"])`,
      choix: [R`<code class="cc">30</code>`, R`<code class="cc">age</code>`, R`<code class="cc">John</code>`, R`Une erreur`], bonne: 0, expl: R`On accède à une valeur par sa clé.` },
    { theme: "py_dict", niveau: 0, q: R`Qu'affiche ce programme ?`, code: R`d = {"a": 1}
d["b"] = 2
print(len(d))`,
      choix: [R`<code class="cc">2</code>`, R`<code class="cc">1</code>`, R`<code class="cc">3</code>`, R`Une erreur`], bonne: 0, expl: R`Affecter une nouvelle clé ajoute un couple.` },
    { theme: "py_dict", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`d = {}
for c in "banane":
    d[c] = d.get(c, 0) + 1
print(d["a"], d["n"])`,
      choix: [R`<code class="cc">2 2</code>`, R`<code class="cc">1 1</code>`, R`<code class="cc">3 2</code>`, R`Une erreur`], bonne: 0, expl: R`<code>d.get(c, 0)</code> renvoie $0$ si la clé n'existe pas encore : on compte les lettres.` },
    { theme: "py_dict", niveau: 1, q: R`Qu'affiche ce programme ?`, code: R`d = {"x": 1, "y": 2}
print("y" in d, 2 in d)`,
      choix: [R`<code class="cc">True False</code>`, R`<code class="cc">True True</code>`, R`<code class="cc">False True</code>`, R`Une erreur`], bonne: 0, expl: R`<code>in</code> teste les clés, pas les valeurs.` },
    { theme: "py_dict", niveau: 2, q: R`Qu'affiche ce programme ?`, code: R`d = {"a": 1}
print(d["b"])`,
      choix: [R`Une erreur (KeyError)`, R`<code class="cc">None</code>`, R`<code class="cc">0</code>`, R`<code class="cc">b</code>`], bonne: 0, expl: R`La clé n'existe pas. <code>d.get("b")</code> renverrait <code>None</code> sans erreur.` }
  ],
  fiches: [
    { recto: R`Division entière et reste`, verso: R`<code>a // b</code> (quotient) et <code>a % b</code> (reste)` },
    { recto: R`<code>7 / 2</code> et <code>6 / 2</code>`, verso: R`<code>3.5</code> et <code>3.0</code> : <code>/</code> renvoie toujours un flottant` },
    { recto: R`Tester si <code>n</code> est pair`, verso: R`<code>n % 2 == 0</code>` },
    { recto: R`<code>=</code> et <code>==</code>`, verso: R`<code>=</code> affecte une valeur ; <code>==</code> compare deux valeurs` },
    { recto: R`Valeurs prises par <code>range(a, b)</code>`, verso: R`$a, a+1, \dots, b-1$ : la borne $b$ est exclue` },
    { recto: R`<code>range(a, b, p)</code>`, verso: R`de $a$ à $b$ exclu, en avançant de $p$ en $p$` },
    { recto: R`Boucle <code>for</code> ou <code>while</code> ?`, verso: R`<code>for</code> si le nombre de tours est connu ; <code>while</code> pour « le premier $n$ tel que… »` },
    { recto: R`Schéma de l'accumulateur pour $\sum_{k=1}^{n}u_k$`, verso: R`<code>S = 0</code>, puis <code>for k in range(1, n + 1): S = S + u_k</code>` },
    { recto: R`Initialiser un produit`, verso: R`<code>P = 1</code> (et non $0$)` },
    { recto: R`<code>print</code> ou <code>return</code> ?`, verso: R`<code>print</code> affiche ; <code>return</code> renvoie un résultat utilisable et termine la fonction` },
    { recto: R`Une fonction sans <code>return</code> renvoie`, verso: R`<code>None</code>` },
    { recto: R`Premier et dernier élément de <code>L</code>`, verso: R`<code>L[0]</code> et <code>L[-1]</code>` },
    { recto: R`Ajouter <code>x</code> à la fin de <code>L</code>`, verso: R`<code>L.append(x)</code>` },
    { recto: R`Tranche <code>L[a:b]</code>`, verso: R`les éléments d'indices $a$ à $b-1$` },
    { recto: R`Liste en compréhension`, verso: R`<code>[k ** 2 for k in range(n) if k % 2 == 0]</code>` },
    { recto: R`<code>3 * [2, 5]</code>`, verso: R`<code>[2, 5, 2, 5, 2, 5]</code> (répétition, pas multiplication)` },
    { recto: R`Copier une liste`, verso: R`<code>M = L.copy()</code> ; <code>M = L</code> ne copie pas` },
    { recto: R`Suite $u_{n+1}=f(u_n)$ : calculer $u_n$`, verso: R`<code>u = u0</code>, puis <code>for k in range(n): u = f(u)</code>` },
    { recto: R`Fibonacci sans écraser de valeur`, verso: R`<code>a, b = b, a + b</code>` },
    { recto: R`Deux ingrédients d'une fonction récursive`, verso: R`un cas de base et un appel récursif sur un cas plus simple` },
    { recto: R`<code>RecursionError</code>`, verso: R`trop d'appels imbriqués (environ $1000$) : cas de base oublié ou jamais atteint` },
    { recto: R`<code>np.linspace(a, b, n)</code>`, verso: R`$n$ réels régulièrement espacés de $a$ à $b$ inclus` },
    { recto: R`<code>np.arange(a, b, p)</code>`, verso: R`de $a$ à $b$ exclu, avec un pas $p$` },
    { recto: R`Tracer une courbe`, verso: R`<code>x = np.linspace(a, b, 200)</code>, <code>plt.plot(x, f(x))</code>, <code>plt.show()</code>` },
    { recto: R`Importer le module de tracé`, verso: R`<code>import matplotlib.pyplot as plt</code>` },
    { recto: R`Simuler un dé`, verso: R`<code>int(6 * rd.random()) + 1</code>` },
    { recto: R`Simuler une loi de Bernoulli $\mathcal B(p)$`, verso: R`<code>rd.random() < p</code>` },
    { recto: R`<code>rd.randint(a, b)</code> (numpy)`, verso: R`un entier de $a$ à $b-1$ : la borne $b$ est exclue` },
    { recto: R`Estimer une espérance par simulation`, verso: R`moyenne d'un grand nombre de tirages (loi des grands nombres)` },
    { recto: R`Principe glouton`, verso: R`faire à chaque étape le meilleur choix local` },
    { recto: R`Tri fusion`, verso: R`couper en deux, trier chaque moitié, fusionner (diviser pour régner)` },
    { recto: R`Compter avec un dictionnaire`, verso: R`<code>d[c] = d.get(c, 0) + 1</code>` }
  ],
  defis: [
    { id: "pair", theme: "py_bases", titre: R`Pair ou impair`, enonce: R`Écrire une fonction <code>est_pair(n)</code> qui renvoie <code>True</code> si l'entier <code>n</code> est pair et <code>False</code> sinon.`, source: R``,
      depart: R`def est_pair(n):
    ...
`, solution: R`def est_pair(n):
    return n % 2 == 0
`, indice: R`Le reste de la division par $2$ s'obtient avec <code>%</code>.`,
      tests: [{"e": "est_pair(4)", "a": "True", "s": false}, {"e": "est_pair(7)", "a": "False", "s": false}, {"e": "est_pair(0)", "a": "True", "s": false}, {"e": "est_pair(-3)", "a": "False", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('est_pair(4)', True), ('est_pair(7)', False), ('est_pair(0)', True), ('est_pair(-3)', False)])
` },
    { id: "aire", theme: "py_bases", titre: R`Aire d'un disque`, enonce: R`Écrire une fonction <code>aire(r)</code> qui renvoie l'aire d'un disque de rayon <code>r</code>. On utilisera <code>pi</code> du module <code>math</code>.`, source: R`le TP1 d'introduction`,
      depart: R`from math import pi

def aire(r):
    ...
`, solution: R`from math import pi

def aire(r):
    return pi * r ** 2
`, indice: R`L'aire vaut $\pi r^2$ ; la puissance s'écrit <code>**</code>.`,
      tests: [{"e": "aire(1)", "a": "3.141592653589793", "s": false}, {"e": "aire(5)", "a": "78.53981633974483", "s": false}, {"e": "aire(0)", "a": "0.0", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('aire(1)', 3.141592653589793), ('aire(5)', 78.53981633974483), ('aire(0)', 0.0)])
` },
    { id: "moy3", theme: "py_bases", titre: R`Moyenne pondérée`, enonce: R`Un élève a trois notes : un DS (coefficient $2$), un DM (coefficient $1$) et une colle (coefficient $1$). Écrire <code>moyenne(ds, dm, colle)</code> qui renvoie sa moyenne.`, source: R``,
      depart: R`def moyenne(ds, dm, colle):
    ...
`, solution: R`def moyenne(ds, dm, colle):
    return (2 * ds + dm + colle) / 4
`, indice: R`Somme des notes multipliées par leurs coefficients, divisée par la somme des coefficients.`,
      tests: [{"e": "moyenne(10, 10, 10)", "a": "10.0", "s": false}, {"e": "moyenne(12, 8, 16)", "a": "12.0", "s": false}, {"e": "moyenne(0, 20, 20)", "a": "10.0", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('moyenne(10, 10, 10)', 10.0), ('moyenne(12, 8, 16)', 12.0), ('moyenne(0, 20, 20)', 10.0)])
` },
    { id: "absolu", theme: "py_cond", titre: R`Valeur absolue`, enonce: R`Écrire une fonction <code>valeur_absolue(x)</code> qui renvoie $|x|$, <strong>sans</strong> utiliser <code>abs</code>.`, source: R``,
      depart: R`def valeur_absolue(x):
    ...
`, solution: R`def valeur_absolue(x):
    if x >= 0:
        return x
    return -x
`, indice: R`Si $x\geq0$, $|x|=x$ ; sinon $|x|=-x$.`,
      tests: [{"e": "valeur_absolue(3)", "a": "3", "s": false}, {"e": "valeur_absolue(-2.5)", "a": "2.5", "s": false}, {"e": "valeur_absolue(0)", "a": "0", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('valeur_absolue(3)', 3), ('valeur_absolue(-2.5)', 2.5), ('valeur_absolue(0)', 0)])
` },
    { id: "max2", theme: "py_cond", titre: R`Le plus grand de deux`, enonce: R`Écrire une fonction <code>maxi(a, b)</code> qui renvoie le plus grand des deux nombres, <strong>sans</strong> utiliser <code>max</code>.`, source: R``,
      depart: R`def maxi(a, b):
    ...
`, solution: R`def maxi(a, b):
    if a >= b:
        return a
    return b
`, indice: R`Un <code>if</code> / <code>else</code> suffit.`,
      tests: [{"e": "maxi(3, 7)", "a": "7", "s": false}, {"e": "maxi(7, 3)", "a": "7", "s": false}, {"e": "maxi(-1, -4)", "a": "-1", "s": false}, {"e": "maxi(2, 2)", "a": "2", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('maxi(3, 7)', 7), ('maxi(7, 3)', 7), ('maxi(-1, -4)', -1), ('maxi(2, 2)', 2)])
` },
    { id: "mention", theme: "py_cond", titre: R`Mention au bac`, enonce: R`Écrire <code>mention(note)</code> qui renvoie <code>"refusé"</code> si la note est $<10$, <code>"passable"</code> si elle est dans $[10,12[$, <code>"AB"</code> dans $[12,14[$, <code>"B"</code> dans $[14,16[$ et <code>"TB"</code> à partir de $16$.`, source: R``,
      depart: R`def mention(note):
    ...
`, solution: R`def mention(note):
    if note < 10:
        return "refusé"
    elif note < 12:
        return "passable"
    elif note < 14:
        return "AB"
    elif note < 16:
        return "B"
    return "TB"
`, indice: R`Utiliser <code>if</code>, puis des <code>elif</code> dans l'ordre croissant : le premier test vrai l'emporte.`,
      tests: [{"e": "mention(8)", "a": "'refusé'", "s": false}, {"e": "mention(10)", "a": "'passable'", "s": false}, {"e": "mention(13.5)", "a": "'AB'", "s": false}, {"e": "mention(14)", "a": "'B'", "s": false}, {"e": "mention(19)", "a": "'TB'", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('mention(8)', 'refusé'), ('mention(10)', 'passable'), ('mention(13.5)', 'AB'), ('mention(14)', 'B'), ('mention(19)', 'TB')])
` },
    { id: "bissextile", theme: "py_cond", titre: R`Année bissextile`, enonce: R`Une année est bissextile si elle est divisible par $4$ mais pas par $100$, ou si elle est divisible par $400$. Écrire <code>bissextile(a)</code> qui renvoie un booléen.`, source: R``,
      depart: R`def bissextile(a):
    ...
`, solution: R`def bissextile(a):
    return (a % 4 == 0 and a % 100 != 0) or a % 400 == 0
`, indice: R`Traduire la phrase avec <code>and</code>, <code>or</code> et <code>%</code>.`,
      tests: [{"e": "bissextile(2024)", "a": "True", "s": false}, {"e": "bissextile(2026)", "a": "False", "s": false}, {"e": "bissextile(1900)", "a": "False", "s": false}, {"e": "bissextile(2000)", "a": "True", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('bissextile(2024)', True), ('bissextile(2026)', False), ('bissextile(1900)', False), ('bissextile(2000)', True)])
` },
    { id: "coucou", theme: "py_for", titre: R`Coucou`, enonce: R`Écrire une fonction <code>msg_boucle(n)</code> qui affiche <code>n</code> fois le message <code>Coucou</code>, un par ligne.`, source: R`le TP1 d'introduction`,
      depart: R`def msg_boucle(n):
    ...
`, solution: R`def msg_boucle(n):
    for k in range(n):
        print("Coucou")
`, indice: R`Une boucle <code>for k in range(n):</code> contenant un <code>print</code>.`,
      tests: [{"e": "msg_boucle(3)", "a": "'Coucou\\nCoucou\\nCoucou\\n'", "s": true}, {"e": "msg_boucle(1)", "a": "'Coucou\\n'", "s": true}, {"e": "msg_boucle(0)", "a": "''", "s": true}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('sortie', 'msg_boucle(3)', 'Coucou\nCoucou\nCoucou\n'), ('sortie', 'msg_boucle(1)', 'Coucou\n'), ('sortie', 'msg_boucle(0)', '')])
` },
    { id: "carres", theme: "py_for", titre: R`Somme des carrés`, enonce: R`Écrire <code>somme_carres(n)</code> qui renvoie $\displaystyle\sum_{k=1}^{n}k^2$ à l'aide d'une boucle.`, source: R`le TP sur les sommes`,
      depart: R`def somme_carres(n):
    S = 0
    ...
    return S
`, solution: R`def somme_carres(n):
    S = 0
    for k in range(1, n + 1):
        S = S + k ** 2
    return S
`, indice: R`Attention à la borne : <code>range(1, n + 1)</code> va jusqu'à $n$.`,
      tests: [{"e": "somme_carres(1)", "a": "1", "s": false}, {"e": "somme_carres(3)", "a": "14", "s": false}, {"e": "somme_carres(50)", "a": "42925", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('somme_carres(1)', 1), ('somme_carres(3)', 14), ('somme_carres(50)', 42925)])
` },
    { id: "fact", theme: "py_for", titre: R`Factorielle`, enonce: R`Écrire <code>factorielle(n)</code> qui renvoie $n!$ par une boucle (avec $0!=1$).`, source: R`le TP1 d'introduction`,
      depart: R`def factorielle(n):
    ...
`, solution: R`def factorielle(n):
    P = 1
    for k in range(1, n + 1):
        P = P * k
    return P
`, indice: R`Un produit s'initialise à $1$.`,
      tests: [{"e": "factorielle(0)", "a": "1", "s": false}, {"e": "factorielle(1)", "a": "1", "s": false}, {"e": "factorielle(5)", "a": "120", "s": false}, {"e": "factorielle(10)", "a": "3628800", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('factorielle(0)', 1), ('factorielle(1)', 1), ('factorielle(5)', 120), ('factorielle(10)', 3628800)])
` },
    { id: "impairs", theme: "py_for", titre: R`Somme des impairs`, enonce: R`Écrire <code>somme_impairs(n)</code> qui renvoie la somme des $n$ premiers entiers impairs $1+3+\dots+(2n-1)$.`, source: R``,
      depart: R`def somme_impairs(n):
    ...
`, solution: R`def somme_impairs(n):
    S = 0
    for k in range(n):
        S = S + 2 * k + 1
    return S
`, indice: R`Le $k$-ième impair (en partant de $k=0$) vaut $2k+1$. Que remarquez-vous sur les résultats ?`,
      tests: [{"e": "somme_impairs(1)", "a": "1", "s": false}, {"e": "somme_impairs(4)", "a": "16", "s": false}, {"e": "somme_impairs(10)", "a": "100", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('somme_impairs(1)', 1), ('somme_impairs(4)', 16), ('somme_impairs(10)', 100)])
` },
    { id: "geom", theme: "py_accu", titre: R`Somme géométrique`, enonce: R`Écrire <code>S4(n)</code> qui renvoie $\displaystyle\sum_{k=0}^{n}\frac{1}{2^k}$.`, source: R`le TP sur les sommes`,
      depart: R`def S4(n):
    ...
`, solution: R`def S4(n):
    S = 0
    for k in range(n + 1):
        S = S + 1 / 2 ** k
    return S
`, indice: R`On doit retrouver $2-\frac1{2^n}$.`,
      tests: [{"e": "S4(0)", "a": "1.0", "s": false}, {"e": "S4(3)", "a": "1.875", "s": false}, {"e": "S4(10)", "a": "1.9990234375", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('S4(0)', 1.0), ('S4(3)', 1.875), ('S4(10)', 1.9990234375)])
` },
    { id: "carre1000", theme: "py_while", titre: R`Premier carré`, enonce: R`Écrire <code>premier_carre(M)</code> qui renvoie le plus petit entier naturel $n$ tel que $n^2\geq M$.`, source: R`le TP sur les sommes`,
      depart: R`def premier_carre(M):
    n = 0
    ...
    return n
`, solution: R`def premier_carre(M):
    n = 0
    while n ** 2 < M:
        n = n + 1
    return n
`, indice: R`On continue <em>tant que</em> la condition voulue n'est pas encore réalisée : <code>while n ** 2 < M:</code>.`,
      tests: [{"e": "premier_carre(1000)", "a": "32", "s": false}, {"e": "premier_carre(49)", "a": "7", "s": false}, {"e": "premier_carre(50)", "a": "8", "s": false}, {"e": "premier_carre(0)", "a": "0", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('premier_carre(1000)', 32), ('premier_carre(49)', 7), ('premier_carre(50)', 8), ('premier_carre(0)', 0)])
` },
    { id: "seuil", theme: "py_while", titre: R`Dépasser un seuil`, enonce: R`Écrire <code>seuil(A)</code> qui renvoie le plus petit $n$ tel que $1+2+\dots+n\geq A$.`, source: R`le TP sur les sommes`,
      depart: R`def seuil(A):
    ...
`, solution: R`def seuil(A):
    S = 0
    n = 0
    while S < A:
        n = n + 1
        S = S + n
    return n
`, indice: R`Deux variables : la somme <code>S</code> et le compteur <code>n</code>, mis à jour dans la boucle.`,
      tests: [{"e": "seuil(10000)", "a": "141", "s": false}, {"e": "seuil(10)", "a": "4", "s": false}, {"e": "seuil(1)", "a": "1", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('seuil(10000)', 141), ('seuil(10)', 4), ('seuil(1)', 1)])
` },
    { id: "harmo", theme: "py_while", titre: R`Série harmonique`, enonce: R`On pose $H_n=\displaystyle\sum_{k=1}^{n}\frac1k$. Écrire <code>rang_harmonique(A)</code> qui renvoie le plus petit $n$ tel que $H_n\geq A$.`, source: R`le TP sur les sommes`,
      depart: R`def rang_harmonique(A):
    ...
`, solution: R`def rang_harmonique(A):
    H = 0
    n = 0
    while H < A:
        n = n + 1
        H = H + 1 / n
    return n
`, indice: R`Même schéma que pour le seuil, en ajoutant $\frac1n$.`,
      tests: [{"e": "rang_harmonique(2)", "a": "4", "s": false}, {"e": "rang_harmonique(3)", "a": "11", "s": false}, {"e": "rang_harmonique(5)", "a": "83", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('rang_harmonique(2)', 4), ('rang_harmonique(3)', 11), ('rang_harmonique(5)', 83)])
` },
    { id: "vol", theme: "py_while", titre: R`Temps de vol`, enonce: R`Écrire <code>temps_de_vol(u0)</code> qui renvoie le plus petit $n$ tel que $u_n=1$ pour la suite de Syracuse de premier terme <code>u0</code> ($u_{n+1}=u_n/2$ si $u_n$ est pair, $3u_n+1$ sinon).`, source: R`le TP sur la suite de Syracuse`,
      depart: R`def temps_de_vol(u0):
    u = u0
    n = 0
    ...
    return n
`, solution: R`def temps_de_vol(u0):
    u = u0
    n = 0
    while u != 1:
        if u % 2 == 0:
            u = u // 2
        else:
            u = 3 * u + 1
        n = n + 1
    return n
`, indice: R`Tant que <code>u != 1</code> : calculer le terme suivant et augmenter le compteur.`,
      tests: [{"e": "temps_de_vol(1)", "a": "0", "s": false}, {"e": "temps_de_vol(6)", "a": "8", "s": false}, {"e": "temps_de_vol(27)", "a": "111", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('temps_de_vol(1)', 0), ('temps_de_vol(6)', 8), ('temps_de_vol(27)', 111)])
` },
    { id: "altmax", theme: "py_while", titre: R`Altitude maximale`, enonce: R`Écrire <code>altitude_max(u0)</code> qui renvoie la plus grande valeur atteinte par la suite de Syracuse de premier terme <code>u0</code> avant d'arriver à $1$.`, source: R`le TP sur la suite de Syracuse`,
      depart: R`def altitude_max(u0):
    ...
`, solution: R`def altitude_max(u0):
    u = u0
    M = u0
    while u != 1:
        if u % 2 == 0:
            u = u // 2
        else:
            u = 3 * u + 1
        if u > M:
            M = u
    return M
`, indice: R`Garder dans une variable <code>M</code> la plus grande valeur rencontrée jusqu'ici.`,
      tests: [{"e": "altitude_max(1)", "a": "1", "s": false}, {"e": "altitude_max(6)", "a": "16", "s": false}, {"e": "altitude_max(27)", "a": "9232", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('altitude_max(1)', 1), ('altitude_max(6)', 16), ('altitude_max(27)', 9232)])
` },
    { id: "suivant", theme: "py_suites", titre: R`Terme suivant de Syracuse`, enonce: R`Écrire <code>suivant(u)</code> qui renvoie le terme qui suit <code>u</code> dans la suite de Syracuse. On veut un résultat entier.`, source: R`le TP sur la suite de Syracuse`,
      depart: R`def suivant(u):
    ...
`, solution: R`def suivant(u):
    if u % 2 == 0:
        return u // 2
    return 3 * u + 1
`, indice: R`Utiliser <code>//</code> et non <code>/</code>, qui renverrait le flottant <code>3.0</code>.`,
      tests: [{"e": "suivant(6)", "a": "3", "s": false}, {"e": "suivant(3)", "a": "10", "s": false}, {"e": "suivant(1)", "a": "4", "s": false}, {"e": "isinstance(suivant(6), int)", "a": "True", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('suivant(6)', 3), ('suivant(3)', 10), ('suivant(1)', 4), ('isinstance(suivant(6), int)', True)])
` },
    { id: "eme", theme: "py_suites", titre: R`Calcul de $u_n$`, enonce: R`On définit $u_0=1$ et $u_{n+1}=2u_n+n+1$. Écrire <code>u(n)</code> qui renvoie $u_n$.`, source: R`le TP sur les boucles for`,
      depart: R`def u(n):
    ...
`, solution: R`def u(n):
    v = 1
    for i in range(n):
        v = 2 * v + i + 1
    return v
`, indice: R`Initialiser à $u_0$, puis appliquer $n$ fois la relation, avec l'indice de boucle à la place de $n$.`,
      tests: [{"e": "u(0)", "a": "1", "s": false}, {"e": "u(4)", "a": "42", "s": false}, {"e": "u(7)", "a": "375", "s": false}, {"e": "u(15)", "a": "98287", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('u(0)', 1), ('u(4)', 42), ('u(7)', 375), ('u(15)', 98287)])
` },
    { id: "eml18", theme: "py_suites", titre: R`EML 2018`, enonce: R`On pose $u_0=4$ et $u_{n+1}=\ln(u_n)+2$. Écrire <code>suite(n)</code> qui renvoie $u_n$.`, source: R`l'EML 2018`,
      depart: R`import numpy as np

def suite(n):
    ...
`, solution: R`import numpy as np

def suite(n):
    u = 4
    for k in range(n):
        u = np.log(u) + 2
    return u
`, indice: R`Le logarithme népérien est <code>np.log</code> (ou <code>log</code> du module <code>math</code>).`,
      tests: [{"e": "suite(0)", "a": "4", "s": false}, {"e": "suite(1)", "a": "3.386294361119891", "s": false}, {"e": "suite(30)", "a": "3.1461932206205825", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('suite(0)', 4), ('suite(1)', 3.386294361119891), ('suite(30)', 3.1461932206205825)])
` },
    { id: "fibo", theme: "py_suites", titre: R`Fibonacci`, enonce: R`On pose $F_0=0$, $F_1=1$ et $F_{n+2}=F_{n+1}+F_n$. Écrire <code>fibo(n)</code> qui renvoie $F_n$, avec une boucle.`, source: R`le TP1 d'introduction`,
      depart: R`def fibo(n):
    a, b = 0, 1
    ...
    return a
`, solution: R`def fibo(n):
    a, b = 0, 1
    for k in range(n):
        a, b = b, a + b
    return a
`, indice: R`L'affectation simultanée <code>a, b = b, a + b</code> évite d'écraser une valeur dont on a encore besoin.`,
      tests: [{"e": "fibo(0)", "a": "0", "s": false}, {"e": "fibo(1)", "a": "1", "s": false}, {"e": "fibo(10)", "a": "55", "s": false}, {"e": "fibo(50)", "a": "12586269025", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('fibo(0)', 0), ('fibo(1)', 1), ('fibo(10)', 55), ('fibo(50)', 12586269025)])
` },
    { id: "liste09", theme: "py_suites", titre: R`Liste des termes`, enonce: R`On pose $u_0=10$ et $u_{n+1}=0{,}9\,u_n$. Écrire <code>termes(n)</code> qui renvoie la liste $[u_0,u_1,\dots,u_n]$.`, source: R`le TP sur les graphiques`,
      depart: R`def termes(n):
    U = [10]
    ...
    return U
`, solution: R`def termes(n):
    U = [10]
    for k in range(n):
        U.append(0.9 * U[-1])
    return U
`, indice: R`Ajouter à chaque tour <code>0.9 * U[-1]</code>, où <code>U[-1]</code> est le dernier terme calculé.`,
      tests: [{"e": "len(termes(20))", "a": "21", "s": false}, {"e": "termes(2)[2]", "a": "8.1", "s": false}, {"e": "termes(0)", "a": "[10]", "s": false}, {"e": "termes(20)[-1]", "a": "1.2157665459056934", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('len(termes(20))', 21), ('termes(2)[2]', 8.1), ('termes(0)', [10]), ('termes(20)[-1]', 1.2157665459056934)])
` },
    { id: "moyL", theme: "py_listes", titre: R`Moyenne d'une liste`, enonce: R`Écrire <code>moyenne(L)</code> qui renvoie la moyenne des éléments de la liste <code>L</code>, avec une boucle (sans <code>sum</code>).`, source: R`le TP2 sur les listes`,
      depart: R`def moyenne(L):
    ...
`, solution: R`def moyenne(L):
    S = 0
    for x in L:
        S = S + x
    return S / len(L)
`, indice: R`Additionner dans un accumulateur, puis diviser par <code>len(L)</code>.`,
      tests: [{"e": "moyenne([8, 15, 8.5, 14.5])", "a": "11.5", "s": false}, {"e": "moyenne([10])", "a": "10.0", "s": false}, {"e": "moyenne([8, 15, 8.5, 14.5, 11.5, 2, 3.5, 3.5, 4.5, 8.5, 4, 0.5, 7.5, 1])", "a": "6.607142857142857", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('moyenne([8, 15, 8.5, 14.5])', 11.5), ('moyenne([10])', 10.0), ('moyenne([8, 15, 8.5, 14.5, 11.5, 2, 3.5, 3.5, 4.5, 8.5, 4, 0.5, 7.5, 1])', 6.607142857142857)])
` },
    { id: "maxL", theme: "py_listes", titre: R`Maximum d'une liste`, enonce: R`Écrire <code>maximum(L)</code> qui renvoie le plus grand élément d'une liste non vide, sans utiliser <code>max</code>.`, source: R`le TP4 sur les tris`,
      depart: R`def maximum(L):
    m = L[0]
    ...
    return m
`, solution: R`def maximum(L):
    m = L[0]
    for x in L:
        if x > m:
            m = x
    return m
`, indice: R`Parcourir la liste et mettre <code>m</code> à jour quand on trouve plus grand. Ne pas initialiser à $0$ : la liste peut être négative.`,
      tests: [{"e": "maximum([3, 9, 2])", "a": "9", "s": false}, {"e": "maximum([-5, -2, -8])", "a": "-2", "s": false}, {"e": "maximum([7])", "a": "7", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('maximum([3, 9, 2])', 9), ('maximum([-5, -2, -8])', -2), ('maximum([7])', 7)])
` },
    { id: "compte", theme: "py_listes", titre: R`Compter les occurrences`, enonce: R`Écrire <code>compte(L, x)</code> qui renvoie le nombre de fois où <code>x</code> apparaît dans <code>L</code>.`, source: R``,
      depart: R`def compte(L, x):
    ...
`, solution: R`def compte(L, x):
    c = 0
    for y in L:
        if y == x:
            c = c + 1
    return c
`, indice: R`Un compteur qui augmente de $1$ à chaque élément égal à <code>x</code>.`,
      tests: [{"e": "compte([1, 2, 1, 3, 1], 1)", "a": "3", "s": false}, {"e": "compte([1, 2, 3], 5)", "a": "0", "s": false}, {"e": "compte([], 4)", "a": "0", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('compte([1, 2, 1, 3, 1], 1)', 3), ('compte([1, 2, 3], 5)', 0), ('compte([], 4)', 0)])
` },
    { id: "positifs", theme: "py_listes", titre: R`Garder les positifs`, enonce: R`Écrire <code>positifs(L)</code> qui renvoie la liste des éléments strictement positifs de <code>L</code>, dans le même ordre.`, source: R``,
      depart: R`def positifs(L):
    ...
`, solution: R`def positifs(L):
    return [x for x in L if x > 0]
`, indice: R`Partir d'une liste vide et utiliser <code>append</code>, ou écrire une liste en compréhension avec un <code>if</code>.`,
      tests: [{"e": "positifs([3, -1, 0, 5, -2])", "a": "[3, 5]", "s": false}, {"e": "positifs([-1, -2])", "a": "[]", "s": false}, {"e": "positifs([])", "a": "[]", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('positifs([3, -1, 0, 5, -2])', [3, 5]), ('positifs([-1, -2])', []), ('positifs([])', [])])
` },
    { id: "renverse", theme: "py_listes", titre: R`Renverser une liste`, enonce: R`Écrire <code>renverse(L)</code> qui renvoie une nouvelle liste contenant les éléments de <code>L</code> dans l'ordre inverse (sans <code>reverse</code> ni <code>[::-1]</code>).`, source: R``,
      depart: R`def renverse(L):
    ...
`, solution: R`def renverse(L):
    R = []
    for i in range(len(L) - 1, -1, -1):
        R.append(L[i])
    return R
`, indice: R`Parcourir les indices de <code>len(L) - 1</code> à $0$ avec un pas de $-1$.`,
      tests: [{"e": "renverse([1, 2, 3])", "a": "[3, 2, 1]", "s": false}, {"e": "renverse([5])", "a": "[5]", "s": false}, {"e": "renverse([])", "a": "[]", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('renverse([1, 2, 3])', [3, 2, 1]), ('renverse([5])', [5]), ('renverse([])', [])])
` },
    { id: "mediane", theme: "py_listes", titre: R`Médiane`, enonce: R`Écrire <code>mediane(L)</code> qui renvoie la médiane d'une liste non vide de nombres : la valeur centrale de la liste triée, ou la moyenne des deux valeurs centrales si la longueur est paire.`, source: R`le TP2 sur les listes`,
      depart: R`def mediane(L):
    T = sorted(L)
    ...
`, solution: R`def mediane(L):
    T = sorted(L)
    n = len(T)
    if n % 2 == 1:
        return T[n // 2]
    return (T[n // 2 - 1] + T[n // 2]) / 2
`, indice: R`Si $n$ est impair, la valeur centrale est à l'indice <code>n // 2</code>.`,
      tests: [{"e": "mediane([3, 1, 2])", "a": "2", "s": false}, {"e": "mediane([4, 1, 3, 2])", "a": "2.5", "s": false}, {"e": "mediane([7])", "a": "7", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('mediane([3, 1, 2])', 2), ('mediane([4, 1, 3, 2])', 2.5), ('mediane([7])', 7)])
` },
    { id: "riemann", theme: "py_accu", titre: R`Somme de Riemann`, enonce: R`Écrire <code>riemann(f, a, b, n)</code> qui renvoie $\displaystyle\frac{b-a}{n}\sum_{k=0}^{n-1}f\left(a+k\,\frac{b-a}{n}\right)$.`, source: R`le TP sur les sommes de Riemann`,
      depart: R`def riemann(f, a, b, n):
    h = (b - a) / n
    ...
`, solution: R`def riemann(f, a, b, n):
    h = (b - a) / n
    S = 0
    for k in range(n):
        S = S + f(a + k * h)
    return h * S
`, indice: R`La fonction <code>f</code> est un paramètre comme un autre : on l'appelle avec <code>f(...)</code>.`,
      tests: [{"e": "riemann(lambda x: x ** 2, 0, 1, 10)", "a": "0.285", "s": false}, {"e": "riemann(lambda x: 1 / x, 1, 2, 10)", "a": "0.7187714031754279", "s": false}, {"e": "riemann(lambda x: 3, 0, 2, 5)", "a": "6.0", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('riemann(lambda x: x ** 2, 0, 1, 10)', 0.285), ('riemann(lambda x: 1 / x, 1, 2, 10)', 0.7187714031754279), ('riemann(lambda x: 3, 0, 2, 5)', 6.0)])
` },
    { id: "approxe", theme: "py_accu", titre: R`Approcher $e$`, enonce: R`Écrire <code>approx_e(n)</code> qui renvoie $\displaystyle\sum_{k=0}^{n}\frac1{k!}$ avec <strong>une seule</strong> boucle, en mettant à jour le terme $\frac1{k!}$ à chaque tour.`, source: R`le TP sur les sommes`,
      depart: R`def approx_e(n):
    t = 1
    S = 1
    ...
    return S
`, solution: R`def approx_e(n):
    t = 1
    S = 1
    for k in range(1, n + 1):
        t = t / k
        S = S + t
    return S
`, indice: R`Si <code>t</code> vaut $\frac1{(k-1)!}$, alors <code>t / k</code> vaut $\frac1{k!}$.`,
      tests: [{"e": "approx_e(0)", "a": "1.0", "s": false}, {"e": "approx_e(3)", "a": "2.6666666666666665", "s": false}, {"e": "approx_e(15)", "a": "2.718281828458995", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('approx_e(0)', 1.0), ('approx_e(3)', 2.6666666666666665), ('approx_e(15)', 2.718281828458995)])
` },
    { id: "produitL", theme: "py_accu", titre: R`Produit des éléments`, enonce: R`Écrire <code>produit(L)</code> qui renvoie le produit des éléments de la liste <code>L</code> (et $1$ si la liste est vide).`, source: R``,
      depart: R`def produit(L):
    ...
`, solution: R`def produit(L):
    P = 1
    for x in L:
        P = P * x
    return P
`, indice: R`Accumulateur multiplicatif initialisé à $1$.`,
      tests: [{"e": "produit([2, 3, 4])", "a": "24", "s": false}, {"e": "produit([])", "a": "1", "s": false}, {"e": "produit([5, 0, 7])", "a": "0", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('produit([2, 3, 4])', 24), ('produit([])', 1), ('produit([5, 0, 7])', 0)])
` },
    { id: "factrec", theme: "py_rec", titre: R`Factorielle récursive`, enonce: R`Écrire une fonction <strong>récursive</strong> <code>fact(n)</code> qui renvoie $n!$, en utilisant $(n+1)!=(n+1)\times n!$.`, source: R`le TP1 d'introduction`,
      depart: R`def fact(n):
    if n == 0:
        return ...
    return ...
`, solution: R`def fact(n):
    if n == 0:
        return 1
    return n * fact(n - 1)
`, indice: R`Cas de base : $0!=1$. Sinon, <code>n * fact(n - 1)</code>.`,
      tests: [{"e": "fact(0)", "a": "1", "s": false}, {"e": "fact(5)", "a": "120", "s": false}, {"e": "fact(12)", "a": "479001600", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('fact(0)', 1), ('fact(5)', 120), ('fact(12)', 479001600)])
` },
    { id: "puissrec", theme: "py_rec", titre: R`Puissance récursive`, enonce: R`Écrire une fonction récursive <code>puissance(x, n)</code> qui renvoie $x^n$ pour $n\in\mathbb N$, sans utiliser <code>**</code>.`, source: R``,
      depart: R`def puissance(x, n):
    ...
`, solution: R`def puissance(x, n):
    if n == 0:
        return 1
    return x * puissance(x, n - 1)
`, indice: R`$x^0=1$ et $x^n=x\times x^{n-1}$.`,
      tests: [{"e": "puissance(2, 10)", "a": "1024", "s": false}, {"e": "puissance(5, 0)", "a": "1", "s": false}, {"e": "puissance(-3, 3)", "a": "-27", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('puissance(2, 10)', 1024), ('puissance(5, 0)', 1), ('puissance(-3, 3)', -27)])
` },
    { id: "volrec", theme: "py_rec", titre: R`Temps de vol récursif`, enonce: R`Écrire une fonction récursive <code>vol(u)</code> qui renvoie le temps de vol de Syracuse : $0$ si $u=1$, sinon $1$ + le temps de vol du terme suivant.`, source: R`le TP sur la suite de Syracuse`,
      depart: R`def vol(u):
    ...
`, solution: R`def vol(u):
    if u == 1:
        return 0
    if u % 2 == 0:
        return 1 + vol(u // 2)
    return 1 + vol(3 * u + 1)
`, indice: R`La suite qui démarre au terme suivant atteint $1$ exactement une étape plus tôt.`,
      tests: [{"e": "vol(1)", "a": "0", "s": false}, {"e": "vol(6)", "a": "8", "s": false}, {"e": "vol(27)", "a": "111", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('vol(1)', 0), ('vol(6)', 8), ('vol(27)', 111)])
` },
    { id: "chiffres", theme: "py_rec", titre: R`Somme des chiffres`, enonce: R`Écrire une fonction récursive <code>somme_chiffres(n)</code> qui renvoie la somme des chiffres de l'entier naturel <code>n</code>.`, source: R``,
      depart: R`def somme_chiffres(n):
    ...
`, solution: R`def somme_chiffres(n):
    if n < 10:
        return n
    return n % 10 + somme_chiffres(n // 10)
`, indice: R`Le dernier chiffre est <code>n % 10</code> ; les autres forment <code>n // 10</code>.`,
      tests: [{"e": "somme_chiffres(7)", "a": "7", "s": false}, {"e": "somme_chiffres(2026)", "a": "10", "s": false}, {"e": "somme_chiffres(99999)", "a": "45", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('somme_chiffres(7)', 7), ('somme_chiffres(2026)', 10), ('somme_chiffres(99999)', 45)])
` },
    { id: "de", theme: "py_alea", titre: R`Lancer un dé`, enonce: R`Écrire <code>lancer_de()</code> qui renvoie un entier au hasard entre $1$ et $6$, en utilisant seulement <code>rd.random()</code> et <code>int</code>.`, source: R`le TP « Le côté obscur de la force »`,
      depart: R`import numpy.random as rd

def lancer_de():
    ...
`, solution: R`import numpy.random as rd

def lancer_de():
    return int(6 * rd.random()) + 1
`, indice: R`<code>6 * rd.random()</code> est dans $[0,6[$ : prendre sa partie entière, puis ajouter $1$.`,
      tests: [{"e": "set(lancer_de() for k in range(3000)) == {1, 2, 3, 4, 5, 6}", "a": "True", "s": false}, {"e": "abs(sum(lancer_de() for k in range(20000)) / 20000 - 3.5) < 0.1", "a": "True", "s": false}, {"e": "type(lancer_de()) == int", "a": "True", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('set(lancer_de() for k in range(3000)) == {1, 2, 3, 4, 5, 6}', True), ('abs(sum(lancer_de() for k in range(20000)) / 20000 - 3.5) < 0.1', True), ('type(lancer_de()) == int', True)])
` },
    { id: "bern", theme: "py_alea", titre: R`Loi de Bernoulli`, enonce: R`Écrire <code>bernoulli(p)</code> qui renvoie $1$ avec probabilité $p$ et $0$ sinon.`, source: R``,
      depart: R`import numpy.random as rd

def bernoulli(p):
    ...
`, solution: R`import numpy.random as rd

def bernoulli(p):
    if rd.random() < p:
        return 1
    return 0
`, indice: R`Comparer <code>rd.random()</code> à <code>p</code>.`,
      tests: [{"e": "abs(sum(bernoulli(0.3) for k in range(20000)) / 20000 - 0.3) < 0.02", "a": "True", "s": false}, {"e": "set(bernoulli(0.5) for k in range(500)) == {0, 1}", "a": "True", "s": false}, {"e": "bernoulli(0)", "a": "0", "s": false}, {"e": "bernoulli(1)", "a": "1", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('abs(sum(bernoulli(0.3) for k in range(20000)) / 20000 - 0.3) < 0.02', True), ('set(bernoulli(0.5) for k in range(500)) == {0, 1}', True), ('bernoulli(0)', 0), ('bernoulli(1)', 1)])
` },
    { id: "binom", theme: "py_alea", titre: R`Loi binomiale`, enonce: R`Écrire <code>binomiale(n, p)</code> qui simule une variable de loi $\mathcal B(n,p)$ en comptant les succès de $n$ épreuves de Bernoulli.`, source: R``,
      depart: R`import numpy.random as rd

def binomiale(n, p):
    ...
`, solution: R`import numpy.random as rd

def binomiale(n, p):
    c = 0
    for k in range(n):
        if rd.random() < p:
            c = c + 1
    return c
`, indice: R`Un compteur dans une boucle de $n$ tours.`,
      tests: [{"e": "abs(sum(binomiale(10, 0.4) for k in range(5000)) / 5000 - 4) < 0.15", "a": "True", "s": false}, {"e": "binomiale(7, 1)", "a": "7", "s": false}, {"e": "binomiale(7, 0)", "a": "0", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('abs(sum(binomiale(10, 0.4) for k in range(5000)) / 5000 - 4) < 0.15', True), ('binomiale(7, 1)', 7), ('binomiale(7, 0)', 0)])
` },
    { id: "partie", theme: "py_alea", titre: R`Une partie de dés`, enonce: R`Écrire <code>gain(m, n)</code> qui renvoie le gain du joueur pour les dés <code>m</code> et <code>n</code> : $10$ pour un double 6, $2$ pour un autre double, $0$ si les deux dés sont impairs (et différents), $-1$ sinon.`, source: R`le TP « Le côté obscur de la force »`,
      depart: R`def gain(m, n):
    ...
`, solution: R`def gain(m, n):
    if m == n == 6:
        return 10
    if m == n:
        return 2
    if m % 2 == 1 and n % 2 == 1:
        return 0
    return -1
`, indice: R`Tester les cas dans l'ordre : double 6, puis autre double, puis deux impairs.`,
      tests: [{"e": "gain(6, 6)", "a": "10", "s": false}, {"e": "gain(3, 3)", "a": "2", "s": false}, {"e": "gain(1, 5)", "a": "0", "s": false}, {"e": "gain(2, 5)", "a": "-1", "s": false}, {"e": "gain(4, 6)", "a": "-1", "s": false}, {"e": "sum(gain(m, n) for m in range(1, 7) for n in range(1, 7))", "a": "-4", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('gain(6, 6)', 10), ('gain(3, 3)', 2), ('gain(1, 5)', 0), ('gain(2, 5)', -1), ('gain(4, 6)', -1), ('sum(gain(m, n) for m in range(1, 7) for n in range(1, 7))', -4)])
` },
    { id: "fusion", theme: "py_tri", titre: R`Fusionner deux listes triées`, enonce: R`Écrire <code>fusion(A, B)</code> qui prend deux listes triées par ordre croissant et renvoie une liste triée contenant tous leurs éléments, <strong>sans</strong> utiliser <code>sort</code> ni <code>sorted</code>.`, source: R`le TP4 sur les tris`,
      depart: R`def fusion(A, B):
    M = []
    i, j = 0, 0
    ...
    return M
`, solution: R`def fusion(A, B):
    M = []
    i, j = 0, 0
    while i < len(A) and j < len(B):
        if A[i] <= B[j]:
            M.append(A[i])
            i = i + 1
        else:
            M.append(B[j])
            j = j + 1
    return M + A[i:] + B[j:]
`, indice: R`Comparer <code>A[i]</code> et <code>B[j]</code>, ajouter le plus petit, avancer dans sa liste ; à la fin, ajouter ce qui reste.`,
      tests: [{"e": "fusion([1, 4, 9], [2, 3, 10])", "a": "[1, 2, 3, 4, 9, 10]", "s": false}, {"e": "fusion([], [1, 2])", "a": "[1, 2]", "s": false}, {"e": "fusion([5], [])", "a": "[5]", "s": false}, {"e": "fusion([1, 1], [1])", "a": "[1, 1, 1]", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('fusion([1, 4, 9], [2, 3, 10])', [1, 2, 3, 4, 9, 10]), ('fusion([], [1, 2])', [1, 2]), ('fusion([5], [])', [5]), ('fusion([1, 1], [1])', [1, 1, 1])])
` },
    { id: "triee", theme: "py_tri", titre: R`Liste triée ?`, enonce: R`Écrire <code>est_triee(L)</code> qui renvoie <code>True</code> si la liste est triée par ordre croissant, <code>False</code> sinon.`, source: R``,
      depart: R`def est_triee(L):
    ...
`, solution: R`def est_triee(L):
    for i in range(len(L) - 1):
        if L[i] > L[i + 1]:
            return False
    return True
`, indice: R`Comparer chaque élément au suivant ; un seul désordre suffit pour renvoyer <code>False</code>.`,
      tests: [{"e": "est_triee([1, 2, 2, 5])", "a": "True", "s": false}, {"e": "est_triee([1, 3, 2])", "a": "False", "s": false}, {"e": "est_triee([])", "a": "True", "s": false}, {"e": "est_triee([4])", "a": "True", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('est_triee([1, 2, 2, 5])', True), ('est_triee([1, 3, 2])', False), ('est_triee([])', True), ('est_triee([4])', True)])
` },
    { id: "monnaie", theme: "py_tri", titre: R`Rendu de monnaie`, enonce: R`Avec des pièces de $50$, $20$, $10$, $5$, $2$ et $1$, écrire <code>nb_pieces(s)</code> qui renvoie le nombre de pièces utilisées par l'algorithme glouton pour rendre la somme entière <code>s</code>.`, source: R`le TP4 sur les tris`,
      depart: R`def nb_pieces(s):
    pieces = [50, 20, 10, 5, 2, 1]
    ...
`, solution: R`def nb_pieces(s):
    pieces = [50, 20, 10, 5, 2, 1]
    n = 0
    for p in pieces:
        while s >= p:
            s = s - p
            n = n + 1
    return n
`, indice: R`Pour chaque pièce, de la plus grande à la plus petite : tant qu'elle ne dépasse pas ce qui reste, on la donne.`,
      tests: [{"e": "nb_pieces(0)", "a": "0", "s": false}, {"e": "nb_pieces(13)", "a": "3", "s": false}, {"e": "nb_pieces(88)", "a": "6", "s": false}, {"e": "nb_pieces(99)", "a": "6", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('nb_pieces(0)', 0), ('nb_pieces(13)', 3), ('nb_pieces(88)', 6), ('nb_pieces(99)', 6)])
` },
    { id: "tri_sel", theme: "py_tri", titre: R`Tri par sélection`, enonce: R`Écrire <code>tri_selection(L)</code> qui trie la liste <code>L</code> par ordre croissant (sans <code>sort</code> ni <code>sorted</code>) et la renvoie : à l'étape $i$, on échange <code>L[i]</code> avec le plus petit élément de <code>L[i:]</code>.`, source: R`le TP4 sur les tris`,
      depart: R`def tri_selection(L):
    for i in range(len(L)):
        ...
    return L
`, solution: R`def tri_selection(L):
    for i in range(len(L)):
        k = i
        for j in range(i + 1, len(L)):
            if L[j] < L[k]:
                k = j
        L[i], L[k] = L[k], L[i]
    return L
`, indice: R`Chercher l'indice <code>k</code> du minimum à partir de <code>i</code>, puis échanger <code>L[i]</code> et <code>L[k]</code>.`,
      tests: [{"e": "tri_selection([5, 2, 8, 1])", "a": "[1, 2, 5, 8]", "s": false}, {"e": "tri_selection([])", "a": "[]", "s": false}, {"e": "tri_selection([3, 3, 1])", "a": "[1, 3, 3]", "s": false}, {"e": "tri_selection(list(range(20, 0, -1)))", "a": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('tri_selection([5, 2, 8, 1])', [1, 2, 5, 8]), ('tri_selection([])', []), ('tri_selection([3, 3, 1])', [1, 3, 3]), ('tri_selection(list(range(20, 0, -1)))', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])])
` },
    { id: "lettres", theme: "py_dict", titre: R`Compter les lettres`, enonce: R`Écrire <code>compte_lettres(mot)</code> qui renvoie un dictionnaire associant à chaque lettre du mot son nombre d'apparitions.`, source: R``,
      depart: R`def compte_lettres(mot):
    d = {}
    ...
    return d
`, solution: R`def compte_lettres(mot):
    d = {}
    for c in mot:
        d[c] = d.get(c, 0) + 1
    return d
`, indice: R`<code>d.get(c, 0)</code> vaut $0$ quand la lettre n'a pas encore été vue.`,
      tests: [{"e": "compte_lettres(\"banane\")", "a": "{'b': 1, 'a': 2, 'n': 2, 'e': 1}", "s": false}, {"e": "compte_lettres(\"\")", "a": "{}", "s": false}, {"e": "compte_lettres(\"aaa\")", "a": "{'a': 3}", "s": false}], verif: R`
import io as _io, contextlib as _cl
def _verif(_T):
    _ok = 0
    for _t in _T:
        _s = _t[0] == "sortie"
        _e, _att = (_t[1], _t[2]) if _s else (_t[0], _t[1])
        try:
            if _s:
                _b = _io.StringIO()
                with _cl.redirect_stdout(_b):
                    eval(_e)
                _v = _b.getvalue()
            else:
                _v = eval(_e)
            if isinstance(_att, float) and isinstance(_v, (int, float)) and not isinstance(_v, bool):
                _bon = abs(_v - _att) <= 1e-6 * max(1, abs(_att))
            else:
                _bon = bool(_v == _att)
        except Exception as _x:
            print("✘ " + _e + " : erreur " + type(_x).__name__ + " (" + str(_x) + ")")
            continue
        if _bon:
            _ok += 1
            print("✔ " + _e + (" affiche bien le texte attendu" if _s else " vaut " + repr(_v)))
        else:
            print("✘ " + _e + (" affiche " + repr(_v) + " au lieu de " + repr(_att) if _s else " vaut " + repr(_v) + " au lieu de " + repr(_att)))
    print("§BILAN§ " + str(_ok) + "/" + str(len(_T)))
_verif([('compte_lettres("banane")', {'b': 1, 'a': 2, 'n': 2, 'e': 1}), ('compte_lettres("")', {}), ('compte_lettres("aaa")', {'a': 3})])
` }
  ]
};
})();
