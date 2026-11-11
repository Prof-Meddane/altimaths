/* Cours de Python d'AltiMaths (généré par build.py à partir de py/ch*.js) */
(function(){ const R=String.raw;
window.PYTHON = { chapitres: [
{ id:"py1", numero:1, ecg:true, titre:"Premiers pas en Python", resume:"Types, opérations, chaînes et tuples, conditions, boucles, fonctions, fichiers.",
cours:[
{type:"section", titre:"1. Traits généraux du langage"},
{type:"sous", titre:"Typage dynamique"},
{type:"def", texte:R`<p>L'interpréteur Python détermine le <b>type</b> d'une donnée <b>à la volée</b>, au moment de l'exécution du code.</p>`},
{type:"texte", texte:R`<p>En machine, toute donnée est une suite de bits regroupés en octets : c'est sa <b>valeur</b>. La valeur seule ne suffit pas : l'entier <code>88</code> et le caractère <code>"X"</code> ont tous deux la valeur <code>01011000</code> sur un octet. Une donnée est donc représentée par sa valeur <b>et</b> par un type, qui dit comment interpréter ces bits.</p>`},
{type:"console", code:R`>>> type(88)
<class 'int'>
>>> type("X")
<class 'str'>
>>> type(2.)
<class 'float'>`},
{type:"remarque", texte:R`<p>On n'a pas à déclarer le type des paramètres d'une fonction. On peut toutefois l'indiquer, pour la lisibilité (certains sujets de concours le font) :</p><p><code>def maFonction(n: int, X: list, c: str, u) -> int :</code></p><p>Cette écriture n'est jamais exigée : <code>def maFonction(n, X, c, u) :</code> suffit.</p>`},
{type:"sous", titre:"Principe d'indentation"},
{type:"texte", texte:R`<p>Les blocs d'instructions (dans un <code>def</code>, <code>for</code>, <code>while</code>, <code>if</code>…) ne sont pas délimités par des accolades mais par l'<b>indentation</b>. L'en-tête se termine par deux-points <code>:</code>, le corps est décalé de quatre espaces, et le retour à l'alignement de l'en-tête marque la fin du bloc. Les blocs peuvent s'imbriquer.</p>`},
{type:"code", code:R`for i in range(3):
    print("tour", i)          # dans la boucle
    if i == 1:
        print("  i vaut 1")   # dans le if, lui-même dans la boucle
print("fin")                  # après la boucle`},
{type:"sous", titre:"Portée des variables"},
{type:"prop", texte:R`<p>Quand une fonction utilise une variable, Python cherche d'abord sa valeur <b>dans la fonction</b>, puis, à défaut, dans l'espace <b>global</b> du programme. Si elle n'existe nulle part : <code>NameError</code>.</p>`},
{type:"console", titre:"La liste L globale est modifiée par f", code:R`>>> L = [1, 2, 3]
>>> def f():
...     L[0] = 0
...     return L
...
>>> f(), L
([0, 2, 3], [0, 2, 3])`},
{type:"console", titre:"Ici f travaille sur sa propre liste L", code:R`>>> L = [1, 2, 3]
>>> def f():
...     L = [1, 2, 3]
...     L[0] = 0
...     return L
...
>>> f(), L
([0, 2, 3], [1, 2, 3])`},
{type:"sous", titre:"Appel de fonction par valeur"},
{type:"prop", texte:R`<p>L'appel <code>f(x)</code> évalue d'abord <code>x</code>, puis exécute <code>f</code> avec la valeur obtenue. Modifier le paramètre dans la fonction ne modifie donc pas la variable passée en argument.</p>`},
{type:"console", code:R`>>> a = 2
>>> def f(x):
...     x = 3
...     return x
...
>>> f(a), a
(3, 2)`},
{type:"attention", texte:R`<p>Si l'argument est <b>mutable</b> (une liste), la fonction peut modifier l'objet lui-même : la « valeur » d'une liste est l'adresse où elle est stockée en mémoire. On y revient au chapitre sur les listes.</p>`},
{type:"console", code:R`>>> L = [1, 2, 3]
>>> def f(X):
...     X[0] = 0
...     return X
...
>>> f(L), L
([0, 2, 3], [0, 2, 3])`},

{type:"section", titre:"2. Types de base"},
{type:"sous", titre:"Entiers (int) et flottants (float)"},
{type:"prop", texte:R`<table><tr><th>Opération</th><th><code>int</code></th><th><code>float</code></th></tr>
<tr><td>somme, différence, produit</td><td><code>+ - *</code></td><td><code>+ - *</code></td></tr>
<tr><td>puissance</td><td><code>**</code></td><td><code>**</code></td></tr>
<tr><td>quotient</td><td><code>//</code> (division euclidienne)</td><td><code>/</code></td></tr>
<tr><td>reste</td><td><code>%</code></td><td></td></tr></table>
<p>Les opérations entre entiers renvoient un <code>int</code> (sauf <code>/</code>, qui renvoie toujours un <code>float</code>).</p>`},
{type:"console", code:R`>>> 17 // 5, 17 % 5
(3, 2)
>>> 2 ** 10
1024
>>> 7 / 2
3.5`},
{type:"attention", texte:R`<p><code>^</code> n'est pas la puissance en Python (c'est une opération bit à bit, hors programme). On écrit <code>2**3</code>, pas <code>2^3</code>.</p>`},
{type:"sous", titre:"Booléens (bool) et caractère paresseux"},
{type:"prop", texte:R`<p>Opérateurs <code>not</code>, <code>and</code>, <code>or</code>. Ils sont <b>paresseux</b> :</p><ul><li>dans <code>A and B</code>, <code>B</code> n'est évalué que si <code>A</code> vaut <code>True</code> ;</li><li>dans <code>A or B</code>, <code>B</code> n'est évalué que si <code>A</code> vaut <code>False</code>.</li></ul>`},
{type:"texte", texte:R`<p>Intérêt : chercher l'indice de la première apparition de <code>x</code> dans une liste. La version naïve plante si <code>x</code> est absent.</p>`},
{type:"code", code:R`def recherche(x, L):
    i = 0
    while L[i] != x:
        i = i + 1
    return i

print(recherche(3, [1, 2, 3, 4]))
print(recherche(5, [1, 2, 3, 4]))   # IndexError`},
{type:"texte", texte:R`<p>Ajouter le test <code>i &lt; len(L)</code> <b>après</b> <code>L[i] != x</code> ne suffit pas : l'erreur se produit avant. Il faut le placer <b>avant</b>, et l'évaluation paresseuse du <code>and</code> empêche alors l'accès hors de la liste.</p>`},
{type:"code", code:R`def recherche(x, L):
    i = 0
    while i < len(L) and L[i] != x:
        i = i + 1
    if i < len(L):
        return i          # sinon la fonction renvoie None

print(recherche(3, [1, 2, 3, 4]))
print(recherche(5, [1, 2, 3, 4]))`},
{type:"sous", titre:"Comparaisons"},
{type:"prop", texte:R`<p><code>==</code> (égalité), <code>!=</code> (différence), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Elles renvoient un booléen.</p>`},
{type:"attention", texte:R`<p>Ne pas confondre <code>=</code> (affectation) et <code>==</code> (test d'égalité).</p>`},

{type:"section", titre:"3. Types structurés"},
{type:"sous", titre:"Chaînes de caractères et tuples"},
{type:"def", texte:R`<ul><li>Une structure est <b>indicée</b> si l'on accède à ses éléments par leur indice.</li><li>Elle est <b>immuable</b> si ses éléments ne peuvent pas être modifiés.</li></ul><p>Les chaînes (<code>str</code>, entre guillemets simples ou doubles) et les tuples (<code>tuple</code>, valeurs séparées par des virgules) sont indicées et immuables.</p>`},
{type:"console", code:R`>>> s = "La horde du contrevent"
>>> len(s), len((2, 3, 5, 7, 11))
(22, 5)
>>> s[4], (2, 3, 5, 7, 11)[3]
('o', 7)
>>> s[3:8]
'horde'
>>> "Alain" + " Damasio"
'Alain Damasio'
>>> (1,) * 5
(1, 1, 1, 1, 1)`},
{type:"remarque", texte:R`<p>Les indices commencent à <code>0</code>. La tranche <code>[i:j]</code> va de <code>i</code> inclus à <code>j</code> <b>exclu</b>. Un tuple à un élément s'écrit <code>(1,)</code> : la virgule est indispensable.</p>`},
{type:"sous", titre:"Listes : l'essentiel"},
{type:"texte", texte:R`<p>Le chapitre 2 est consacré aux listes. Trois façons de les créer :</p><ul><li>par <b>compréhension</b> : <code>[expr for x in s]</code> ;</li><li>par <b>duplication</b> : <code>[expr] * n</code> (seulement des valeurs égales, et incorrect si la valeur est mutable : à éviter) ;</li><li>par <code>.append</code> successifs.</li></ul>`},
{type:"code", code:R`carres = [x**2 for x in range(1, 11)]
print(carres)

carres = []
for x in range(1, 11):
    carres.append(x**2)
print(carres)`},
{type:"prop", texte:R`<ul><li>Les listes sont <b>mutables</b> : <code>L[i] = v</code> modifie un élément sans recréer la liste.</li><li><code>L.append(x)</code> ajoute un élément à la liste existante ; <code>L = L + [x]</code> <b>recrée</b> une liste entière, ce qui est bien plus coûteux.</li><li><code>L.copy()</code> ou <code>L[:]</code> copient une liste.</li><li><code>L.pop()</code> supprime et renvoie le dernier élément, en temps constant.</li></ul>`},
{type:"sous", titre:"Dictionnaires : l'essentiel"},
{type:"texte", texte:R`<p>Un dictionnaire ressemble à une liste, mais on accède aux valeurs par une <b>clé</b> au lieu d'un indice : <code>{c1: v1, ..., cn: vn}</code> (clés deux à deux distinctes), <code>{}</code> pour le dictionnaire vide.</p><ul><li><code>c in D</code> : la clé <code>c</code> est-elle présente ?</li><li><code>D[c]</code> : valeur associée (erreur si la clé est absente) ;</li><li><code>D[c] = v</code> : crée ou modifie l'association.</li></ul>`},
{type:"console", code:R`>>> D = {"Lukla": 2860, "Namche": 3440}
>>> D["Namche"]
3440
>>> D["Sommet"] = 8849
>>> "Sommet" in D, len(D)
(True, 3)`},

{type:"section", titre:"4. Structures de contrôle"},
{type:"texte", texte:R`<p>Une <b>structure de contrôle</b> fixe l'ordre d'exécution des instructions : séquentielle (les unes après les autres), conditionnelle (branchements) ou itérative (répétitions).</p>`},
{type:"sous", titre:"Affectation"},
{type:"texte", texte:R`<p>L'affectation s'écrit <code>=</code>. On peut <b>dépaqueter</b> un tuple : <code>x, y, z = a, b, c</code>. C'est pratique pour échanger deux variables.</p>`},
{type:"console", code:R`>>> x, y = 1, 2
>>> x, y = y, x
>>> x, y
(2, 1)`},
{type:"sous", titre:"Instruction conditionnelle if / elif / else"},
{type:"prop", texte:R`<p>La branche exécutée est la <b>première</b> dont la condition vaut <code>True</code> ; si aucune ne l'est, c'est le bloc du <code>else</code>. Avec un <code>else</code> final, le filtrage est <b>exhaustif</b> : un bloc est toujours exécuté (c'est une bonne habitude).</p>`},
{type:"code", code:R`if condition_1:
    instruction_1
elif condition_2:
    instruction_2
else:
    instruction_3`, run:false},
{type:"exemple", titre:"Exemple : racines d'un trinôme", texte:R`<p>On teste le signe du discriminant avant d'en prendre la racine carrée.</p>`},
{type:"code", code:R`import math

def racines(a, b, c):
    delta = b**2 - 4*a*c
    if delta > 0:
        return (-b - math.sqrt(delta)) / (2*a), (-b + math.sqrt(delta)) / (2*a)
    elif delta == 0:
        return -b / (2*a)
    else:
        return "pas de racine réelle"

print(racines(1, -3, 2))
print(racines(1, 2, 1))
print(racines(3, 1, 4))`},
{type:"sous", titre:"Boucles bornées : for"},
{type:"prop", texte:R`<p><code>for elt in liste :</code> exécute le bloc pour chaque valeur de <code>liste</code>, dans l'ordre. Le plus souvent, <code>liste</code> est <code>range(n, m, pas)</code> : les entiers de <code>n</code> à <code>m-1</code> avec le pas donné (par défaut <code>n = 0</code> et <code>pas = 1</code>).</p>`},
{type:"code", code:R`m = 6
u = []
for i in range(m):
    u.append(i**3)
print(u)
print(i)        # en sortie de boucle, i vaut m-1`},
{type:"sous", titre:"Boucles non bornées : while"},
{type:"prop", texte:R`<p><code>while condition :</code> répète le bloc <b>tant que</b> la condition est vraie. La condition est testée avant chaque tour.</p>`},
{type:"attention", texte:R`<p><b>Terminaison</b> : si la condition reste toujours vraie, la boucle ne s'arrête jamais (boucle infinie). Ici, l'application coupe l'exécution au bout de 20 secondes.</p>`},
{type:"exemple", texte:R`<p>Premier élément d'une liste supérieur ou égal à <code>t</code>. Le test <code>i &lt;= n-1</code> placé en premier évite l'accès hors de la liste, grâce au <code>and</code> paresseux.</p>`},
{type:"code", code:R`r = [0.49, 0.18, 0.75, 0.94, 0.21, 0.58, 0.26]
t = 0.95
n = len(r)
i = 0
while i <= n-1 and r[i] < t:
    i = i + 1
if i > n-1:
    print("Aucun élément >= t")
else:
    print("Premier élément >= t :", r[i])`},
{type:"sous", titre:"for ou while ?"},
{type:"methode", texte:R`<ul><li>Nombre de tours <b>connu à l'avance</b> → <code>for</code> : parcourir une liste, calculer les $n$ premiers termes d'une suite, une somme $\sum_{k=0}^{n}$ ou un produit $\prod_{k=0}^{n}$.</li><li>Nombre de tours <b>inconnu</b> → <code>while</code> : premier indice vérifiant une condition, nombre d'années pour qu'un capital double…</li></ul><p>Un <code>for</code> peut toujours s'écrire avec un <code>while</code> et un compteur qu'on incrémente.</p>`},
{type:"code", titre:"Exercice : factorielle, coefficient binomial, somme", code:R`def facto(n):
    f = 1
    for k in range(2, n+1):
        f = f * k
    return f

def binom(n, p):
    return facto(n) // (facto(p) * facto(n-p))

def sommeInv(n, r):
    s = 0
    for k in range(1, n+1):
        s = s + 1 / k**r
    return s

print(facto(5), binom(5, 2), sommeInv(1000, 2))`},
{type:"sous", titre:"Définir une fonction"},
{type:"prop", texte:R`<p><code>def f(x1, ..., xn) :</code> puis le bloc d'instructions. <code>return</code> renvoie le résultat et <b>interrompt immédiatement</b> la fonction. Sans <code>return</code>, la fonction renvoie <code>None</code>.</p>`},
{type:"attention", texte:R`<p><code>print</code> <b>affiche</b> du texte ; <code>return</code> <b>renvoie</b> une valeur réutilisable. Une fonction qui affiche son résultat sans le renvoyer est inutilisable dans un calcul.</p>`},
{type:"console", code:R`>>> def f(x):
...     print(2*x)
...
>>> y = f(3)
6
>>> print(y)
None`},

{type:"section", titre:"5. Divers"},
{type:"sous", titre:"Commentaires et modules"},
{type:"texte", texte:R`<p>Un commentaire commence par <code>#</code>. On importe un module avec <code>import module</code>, <code>import module as alias</code>, ou une seule fonction avec <code>from module import fonction</code>.</p>`},
{type:"code", code:R`import math
import numpy as np
from random import randint

print(math.cos(math.pi), np.cos(np.pi), randint(1, 6))`},
{type:"sous", titre:"Fichiers texte"},
{type:"texte", texte:R`<p>Exemple d'un fichier CSV (valeurs séparées par des virgules) <code>naissances.csv</code>.</p><ul><li><code>open(nom, "r")</code> ouvre en lecture, <code>"w"</code> en écriture (écrase le fichier), <code>"a"</code> en ajout ;</li><li><code>.read()</code> lit tout en une chaîne, <code>.readline()</code> lit une ligne, <code>.readlines()</code> renvoie la liste des lignes, <code>for ligne in fichier</code> parcourt les lignes ;</li><li><code>.write(texte)</code> écrit ; <code>.close()</code> ferme le fichier ;</li><li><code>"F, Charlotte, 1988".split(", ")</code> découpe une chaîne selon un séparateur.</li></ul><p>Le caractère <code>\n</code> code un passage à la ligne.</p>`},
{type:"code", code:R`f = open("naissances.csv", "w")
f.write("Sexe, Prenom, Annee\nM, Alphonse, 1932\nF, Beatrice, 1964\nF, Charlotte, 1988\n")
f.close()

f = open("naissances.csv", "r")
entete = f.readline()
for ligne in f:
    sexe, prenom, annee = ligne.strip().split(", ")
    print(prenom, "est né(e) en", annee)
f.close()`},
{type:"sous", titre:"Assertions"},
{type:"prop", texte:R`<p><code>assert condition</code> arrête le programme avec une <code>AssertionError</code> si la condition est fausse. C'est une aide au débogage : on vérifie à l'entrée d'une fonction que les arguments sont valides.</p>`},
{type:"code", code:R`def facto(n):
    assert isinstance(n, int)
    assert n >= 0
    f = 1
    for k in range(2, n+1):
        f = f * k
    return f

print(facto(5))
print(facto(-5))`},
]},
{ id:"py2", numero:2, ecg:true, titre:"Les listes", resume:"Accès, tranches, modifications, compréhension, matrices, méthodes, parcours, prédicats, mémoire.",
cours:[
{type:"section", titre:"1. Définition d'une liste"},
{type:"sous", titre:"Qu'est-ce qu'une liste ?"},
{type:"def", texte:R`<p>Une <b>liste</b> est une suite finie et ordonnée d'éléments, écrite entre crochets et séparés par des virgules. Les éléments peuvent être de types différents, y compris d'autres listes. <code>len(L)</code> donne sa longueur.</p>`},
{type:"console", code:R`>>> L1 = [1, 2, 5, 8, 9]
>>> L2 = ["un mot", 1, [4, 4]]
>>> type(L1), len(L1), len(L2)
(<class 'list'>, 5, 3)`},
{type:"sous", titre:"Accès à un élément"},
{type:"prop", texte:R`<p>Les éléments sont numérotés de <code>0</code> à <code>len(L)-1</code> : <code>L[0]</code> est le premier, <code>L[len(L)-1]</code> le dernier. Les indices négatifs comptent depuis la fin : <code>L[-1]</code> est le dernier élément, <code>L[-2]</code> l'avant-dernier.</p>`},
{type:"console", code:R`>>> L1 = [1, 2, 5, 8, 9]
>>> L2 = ["un mot", 1, [4, 4]]
>>> L1[0], L1[len(L1)-1], L1[-1]
(1, 9, 9)
>>> L2[2], L2[-3]
([4, 4], 'un mot')
>>> L1[12]
IndexError: list index out of range`},
{type:"sous", titre:"Accès multiple : les tranches (slicing)"},
{type:"prop", texte:R`<p><code>L[i:j]</code> est la liste des éléments d'indice <code>i</code> (inclus) à <code>j</code> (<b>exclu</b>). <code>L[i:j:p]</code> prend un élément tous les <code>p</code>. Si <code>i</code> est omis, on part du début ; si <code>j</code> est omis, on va jusqu'à la fin. Une tranche hors de la liste donne <code>[]</code>, sans erreur.</p>`},
{type:"console", code:R`>>> L1 = [1, 2, 5, 8, 9]
>>> L1[1:4]
[2, 5, 8]
>>> L1[1:], L1[:4]
([2, 5, 8, 9], [1, 2, 5, 8])
>>> L1[0:4:2]
[1, 5]
>>> L1[:-2], L1[-2:]
([1, 2, 5], [8, 9])
>>> L1[::-1]
[9, 8, 5, 2, 1]
>>> L1[10:17]
[]`},

{type:"section", titre:"2. Modifier une liste"},
{type:"sous", titre:"Modifier un élément"},
{type:"texte", texte:R`<p>Les listes sont <b>mutables</b> : <code>L[i] = v</code> remplace l'élément d'indice <code>i</code>.</p>`},
{type:"console", code:R`>>> L1 = [1, 2, 5, 8, 9]
>>> L1[0] = -6
>>> L1[-1] = [2, 4, 6]
>>> L1
[-6, 2, 5, 8, [2, 4, 6]]`},
{type:"culture", titre:"Pour la culture : modifier par tranches", texte:R`<p>On peut remplacer une tranche par une liste de longueur quelconque : <code>L[0:3] = [4, 3]</code> remplace trois éléments par deux. Ce procédé est donné pour la culture.</p>`},
{type:"console", code:R`>>> L = [-6, 2, 5, 1, 0]
>>> L[0:3] = [4, 3]
>>> L
[4, 3, 1, 0]
>>> L[0:1] = [18, 5, 9]
>>> L
[18, 5, 9, 3, 1, 0]`},
{type:"sous", titre:"Ajouter des éléments"},
{type:"prop", texte:R`<ul><li><code>L + M</code> <b>concatène</b> deux listes (et crée une nouvelle liste) ;</li><li><code>L + 4</code> est une erreur : on ne concatène qu'une liste avec une liste, il faut écrire <code>L + [4]</code> ;</li><li>insérer au milieu : <code>L = L[:3] + [0] + L[3:]</code>.</li></ul>`},
{type:"console", code:R`>>> L2 = ["un mot", 1, [4, 4]]
>>> L2 + [9]
['un mot', 1, [4, 4], 9]
>>> [-2, 0] + L2
[-2, 0, 'un mot', 1, [4, 4]]
>>> L2 + 4
TypeError: can only concatenate list (not "int") to list`},
{type:"sous", titre:"Supprimer des éléments"},
{type:"texte", texte:R`<p><code>del L[i]</code> supprime l'élément d'indice <code>i</code> ; <code>del L[i:j]</code> supprime une tranche.</p>`},
{type:"console", code:R`>>> L = [[1, 2], 1, "truc", 0, [2], 5]
>>> del L[4]
>>> L
[[1, 2], 1, 'truc', 0, 5]
>>> del L[:3]
>>> L
[0, 5]`},

{type:"section", titre:"3. Créer une liste"},
{type:"sous", titre:"Avec l'opérateur *"},
{type:"texte", texte:R`<p><code>[x] * n</code> répète <code>n</code> fois la liste <code>[x]</code>. <code>[] * 5</code> et <code>L * 0</code> donnent <code>[]</code>.</p>`},
{type:"console", code:R`>>> [0] * 5
[0, 0, 0, 0, 0]
>>> [[1, 2], 4, "truc"] * 2
[[1, 2], 4, 'truc', [1, 2], 4, 'truc']`},
{type:"attention", texte:R`<p>Avec un élément mutable, <code>*</code> recopie <b>la même</b> liste plusieurs fois : la modifier à un endroit la modifie partout.</p>`},
{type:"console", code:R`>>> M = [[0, 0]] * 3
>>> M[0][0] = 1
>>> M
[[1, 0], [1, 0], [1, 0]]`},
{type:"sous", titre:"Les listes en compréhension"},
{type:"texte", texte:R`<p>En mathématiques, on définit un ensemble en compréhension : $\{k^2 \mid k \in [\![0,19]\!],\ k^2 \text{ pair}\}$. Python offre la même écriture pour les listes :</p><p><code>[expression for x in itérable if condition]</code></p>`},
{type:"console", code:R`>>> [k for k in range(10)]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> [k**2 for k in range(1, 6)]
[1, 4, 9, 16, 25]
>>> [0 for _ in range(5)]
[0, 0, 0, 0, 0]
>>> [k**2 for k in range(20) if k**2 % 4 == 0 and k % 3 == 0]
[0, 36, 144, 324]
>>> [(i, j) for i in range(2) for j in range(3)]
[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2)]
>>> [(i, j, k) for i in range(1, 4) for j in range(1, 4) for k in range(1, 4) if i != j and j != k and k != i]
[(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]`},
{type:"sous", titre:"Les matrices : des listes de listes"},
{type:"texte", texte:R`<p>Une matrice est représentée par la liste de ses lignes. <code>M[i]</code> est la ligne $i$, <code>M[i][j]</code> le coefficient ligne $i$, colonne $j$ (indices à partir de 0).</p>`},
{type:"console", code:R`>>> M = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
>>> M[1], M[1][2]
([4, 5, 6], 6)
>>> M[1][2] = 0
>>> M
[[1, 2, 3], [4, 5, 0], [7, 8, 9]]
>>> [[0 for j in range(3)] for i in range(3)]
[[0, 0, 0], [0, 0, 0], [0, 0, 0]]
>>> [[i*3 + j + 1 for j in range(3)] for i in range(3)]
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
>>> [[M[j][i] for j in range(3)] for i in range(3)]
[[1, 4, 7], [2, 5, 8], [3, 0, 9]]`},
{type:"remarque", texte:R`<p>La dernière ligne calcule la <b>transposée</b> de <code>M</code>. Pour une matrice $n\times n$ remplie de zéros, on écrit <code>[[0 for j in range(n)] for i in range(n)]</code> et surtout pas <code>[[0]*n]*n</code>.</p>`},

{type:"section", titre:"4. La classe list et ses méthodes"},
{type:"texte", texte:R`<p>En Python, tout objet appartient à une <b>classe</b> (son type). Une classe fournit des <b>méthodes</b>, des fonctions propres à ses objets, appelées avec un point : <code>L.append(x)</code>.</p>`},
{type:"prop", titre:"Méthodes à connaître", texte:R`<ul><li><code>list(x)</code> (constructeur) : transforme un itérable en liste (<code>list(range(5))</code>, <code>list("abc")</code>) ;</li><li><code>L.append(x)</code> : ajoute <code>x</code> à la fin, en modifiant <code>L</code> ;</li><li><code>L.pop()</code> : supprime et renvoie le dernier élément ; <code>L.pop(i)</code> celui d'indice <code>i</code> ;</li><li><code>L.count(x)</code> : nombre d'occurrences de <code>x</code>.</li></ul>`},
{type:"console", code:R`>>> list(range(2, 20, 3)), list(range(10, 3, -1))
([2, 5, 8, 11, 14, 17], [10, 9, 8, 7, 6, 5, 4])
>>> list("abc")
['a', 'b', 'c']
>>> L = [18, 5, 9, 3]
>>> L.append(78)
>>> L
[18, 5, 9, 3, 78]
>>> L.pop()
78
>>> L.pop(1)
5
>>> L
[18, 9, 3]
>>> [1, 1, 1, 3, 1, [1, 1]].count(1)
4`},
{type:"attention", texte:R`<p><code>L.append(x)</code> modifie <code>L</code> et renvoie <code>None</code> : écrire <code>L = L.append(x)</code> efface la liste !</p>`},

{type:"section", titre:"5. Parcourir une liste"},
{type:"methode", texte:R`<ul><li>Sur les <b>indices</b> : <code>for i in range(len(L)) :</code> puis <code>L[i]</code>. Indispensable si l'on a besoin de la position ou si l'on modifie la liste.</li><li>Sur les <b>éléments</b> : <code>for e in L :</code>. Plus lisible quand seule la valeur compte.</li><li>Les deux à la fois (culture) : <code>for i, e in enumerate(L) :</code>.</li></ul>`},
{type:"code", code:R`L = [1, 2, 4, 5]
for i in range(len(L)):
    print("indice", i, ":", L[i])
for e in L:
    print("élément", e)
for i, e in enumerate(L):
    print(i, e)`},

{type:"section", titre:"6. Prédicats sur les listes"},
{type:"def", texte:R`<p>Un <b>prédicat</b> est une fonction qui renvoie un booléen : « la liste contient-elle plus de 1 que de 0 ? », « tous les éléments sont-ils positifs ? ».</p>`},
{type:"sous", titre:"Quand il faut parcourir toute la liste"},
{type:"texte", texte:R`<p>Pour compter, on doit tout voir : boucle <code>for</code>. Inutile d'écrire <code>if c: return True else: return False</code>, on renvoie directement le booléen.</p>`},
{type:"code", code:R`def plus_de_un(L):
    c_un = 0      # compteur de 1
    c_zero = 0    # compteur de 0
    for e in L:
        if e == 0:
            c_zero += 1
        elif e == 1:
            c_un += 1
    return c_un >= c_zero

print(plus_de_un([1, 0, 1, 1, 0]), plus_de_un([0, 0, 1]))`},
{type:"sous", titre:"Quand un parcours partiel suffit"},
{type:"texte", texte:R`<p>Pour savoir si tous les éléments sont positifs, on peut s'arrêter au premier négatif. Avec un <code>while</code>, l'ordre des tests compte (évaluation paresseuse) : <code>i &lt; n</code> d'abord, puis <code>L[i] &gt;= 0</code>.</p>`},
{type:"code", code:R`def tous_positifs(L):
    n = len(L)
    i = 0
    while i < n and L[i] >= 0:
        i += 1
    return i == n

print(tous_positifs([3, 1, 4]), tous_positifs([3, -1, 4]), tous_positifs([]))`},
{type:"texte", texte:R`<p>Avec <code>for</code> et un <code>return</code> anticipé, c'est encore plus court : le <code>return</code> interrompt la boucle dès qu'un contre-exemple est trouvé.</p>`},
{type:"code", code:R`def tous_positifs(L):
    for e in L:
        if e < 0:
            return False
    return True

print(tous_positifs([3, 1, 4]), tous_positifs([3, -1, 4]))`},
{type:"attention", texte:R`<p>Le <code>return True</code> est placé <b>après</b> la boucle, pas dans un <code>else</code> à l'intérieur : sinon la fonction conclurait dès le premier élément.</p>`},

{type:"section", titre:"7. Programmes classiques"},
{type:"sous", titre:"Maximum d'une liste"},
{type:"code", code:R`def maximum(L):
    M = L[0]
    for e in L:
        if e > M:
            M = e
    return M

def indice_max(L):
    i_M = 0
    for i in range(1, len(L)):
        if L[i] > L[i_M]:
            i_M = i
    return i_M

L = [3, 8, 1, 8, 5]
print(maximum(L), indice_max(L))`},
{type:"remarque", texte:R`<p><code>indice_max</code> renvoie l'indice de la <b>première</b> apparition du maximum (test strict <code>&gt;</code>). Avec <code>&gt;=</code>, on obtiendrait la dernière.</p>`},

{type:"section", titre:"8. Listes et mémoire (culture)"},
{type:"sous", titre:"Alias"},
{type:"texte", texte:R`<p><code>b = a</code> ne copie pas la liste : <code>a</code> et <code>b</code> désignent le <b>même</b> objet en mémoire. Modifier l'un modifie l'autre.</p>`},
{type:"code", code:R`a = [1, 2]
b = a
a[0] = 5
print(a, b)`},
{type:"sous", titre:"Copie superficielle"},
{type:"texte", texte:R`<p><code>b = a[:]</code> (ou <code>a.copy()</code>) crée une nouvelle liste. Mais si <code>a</code> contient des listes, celles-ci sont partagées.</p>`},
{type:"code", code:R`a = [1, 2]
b = a[:]
a[0] = 5
print(a, b)

a = [1, [2]]
b = a[:]
a[1][0] = 5
print(a, b)`},
{type:"sous", titre:"Copie profonde"},
{type:"code", code:R`import copy
a = [1, [2]]
b = copy.deepcopy(a)
a[1][0] = 5
print(a, b)`},
]},
{ id:"py3", numero:3, ecg:true, titre:"Les dictionnaires", resume:"Associations clé : valeur, création, opérations, parcours, compter, morse, jointures.",
cours:[
{type:"section", titre:"1. Le type dict"},
{type:"def", texte:R`<p>Un <b>dictionnaire</b> est un ensemble d'associations <code>clé: valeur</code>, chaque clé étant <b>unique</b>. Une liste est indexée par des entiers $0, 1, 2\dots$ ; un dictionnaire est indexé par ses clés, qui peuvent être de n'importe quel type <b>non modifiable</b> : <code>str</code>, <code>int</code>, <code>float</code>, <code>bool</code>, <code>tuple</code> (mais pas une liste).</p>`},

{type:"section", titre:"2. Créer un dictionnaire"},
{type:"methode", texte:R`<ul><li><b>Directement</b> : <code>{"voiture": 4, "vélo": 2}</code> ; <code>{}</code> est le dictionnaire vide.</li><li>Avec la fonction <b><code>dict</code></b> : <code>dict(yes="oui", no="non")</code>.</li><li>À partir d'une <b>liste de couples</b> : <code>dict([("one", 1), ("two", 2)])</code>.</li><li>Par <b>compréhension</b> : <code>{x: x**2 for x in range(5)}</code>.</li><li>Avec une <b>boucle</b>, en ajoutant les clés une à une.</li><li>Par <b>copie</b> : <code>D.copy()</code>.</li></ul>`},
{type:"code", code:R`nombre_de_roues = {"voiture": 4, "vélo": 2, "tricycle": 3}
dico_en_fr = dict(yes="oui", no="non", why="pourquoi")
dico_en_nb = dict([("one", 1), ("two", 2), ("three", 3)])
suite_carres = {x: x**2 for x in range(5)}

chiffres = ["zéro", "un", "deux", "trois", "quatre", "cinq"]
valeurs = {}
for i in range(6):
    valeurs[chiffres[i]] = i

print(nombre_de_roues)
print(dico_en_fr)
print(dico_en_nb)
print(suite_carres)
print(valeurs)`},

{type:"section", titre:"3. Opérations"},
{type:"prop", texte:R`<table><tr><th>Écriture</th><th>Effet</th></tr>
<tr><td><code>D[c] = v</code></td><td>ajoute l'association si <code>c</code> est absente, sinon remplace la valeur</td></tr>
<tr><td><code>del D[c]</code></td><td>supprime l'entrée de clé <code>c</code></td></tr>
<tr><td><code>D.clear()</code></td><td>vide le dictionnaire</td></tr>
<tr><td><code>c in D</code></td><td><code>True</code> si <b>la clé</b> <code>c</code> est présente</td></tr>
<tr><td><code>len(D)</code></td><td>nombre d'entrées</td></tr>
<tr><td><code>D[c]</code></td><td>valeur associée à <code>c</code> (<code>KeyError</code> si absente)</td></tr>
<tr><td><code>D.keys()</code>, <code>D.values()</code>, <code>D.items()</code></td><td>les clés, les valeurs, les couples <code>(clé, valeur)</code></td></tr></table>`},
{type:"console", code:R`>>> D = dict(yes="oui", no="non", why="pourquoi")
>>> D["because"] = "seulement"
>>> D["because"] = "parce que"
>>> del D["no"]
>>> D
{'yes': 'oui', 'why': 'pourquoi', 'because': 'parce que'}
>>> "yes" in D, "oui" in D
(True, False)
>>> len(D), D["why"]
(3, 'pourquoi')
>>> list(D.keys())
['yes', 'why', 'because']
>>> list(D.items())
[('yes', 'oui'), ('why', 'pourquoi'), ('because', 'parce que')]
>>> D["hello"]
KeyError: 'hello'`},
{type:"attention", texte:R`<p><code>in</code> teste les <b>clés</b>, pas les valeurs : <code>"oui" in D</code> vaut <code>False</code>. Pour les valeurs : <code>"oui" in D.values()</code>.</p>`},
{type:"sous", titre:"Parcourir un dictionnaire"},
{type:"code", code:R`D = {"Lukla": 2860, "Namche": 3440, "Sommet": 8849}
for c in D:              # parcourt les clés (comme D.keys())
    print(c, D[c])
for c, v in D.items():   # clés et valeurs ensemble
    print(c, "->", v)`},

{type:"section", titre:"4. Applications"},
{type:"sous", titre:"Décoder et coder : le morse"},
{type:"texte", texte:R`<p>Un dictionnaire est une table de traduction. On code un message en morse lettre par lettre ; <code>message.split()</code> découpe le message en mots (séparateur par défaut : l'espace).</p>`},
{type:"code", code:R`morse = {"A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.",
         "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
         "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.",
         "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
         "Y": "-.--", "Z": "--.."}

def trad_to_morse(message):
    mots = []
    for mot in message.split():
        mots.append(" ".join([morse[lettre] for lettre in mot]))
    return "   ".join(mots)

print(trad_to_morse("HELLO WORLD"))

inverse = {v: c for c, v in morse.items()}   # dictionnaire inverse
print(inverse["...."], inverse["---"])`},
{type:"sous", titre:"Compter avec un dictionnaire"},
{type:"methode", texte:R`<p>Pour compter des occurrences, on parcourt les données : si l'élément est déjà une clé, on augmente sa valeur de 1, sinon on crée la clé avec la valeur 1.</p>`},
{type:"code", code:R`def occurrences(mot):
    dico = {}
    for lettre in mot:
        if lettre in dico:
            dico[lettre] = dico[lettre] + 1
        else:
            dico[lettre] = 1
    return dico

print(occurrences("anticonstitutionnellement"))`},
{type:"exemple", texte:R`<p>La lettre la plus fréquente : on cherche la clé de plus grande valeur, comme un maximum dans une liste.</p>`},
{type:"code", code:R`def plus_frequente(mot):
    d = occurrences(mot)
    meilleure = None
    for c in d:
        if meilleure is None or d[c] > d[meilleure]:
            meilleure = c
    return meilleure, d[meilleure]

print(plus_frequente("anticonstitutionnellement"))`},
{type:"sous", titre:"Jointures"},
{type:"texte", texte:R`<p>À partir de plusieurs dictionnaires liés, on en construit un nouveau qui croise leurs informations : c'est une <b>jointure</b> (on retrouvera cette opération sur les bases de données). Dans le TP, on lit un fichier <code>countries.csv</code> avec le module <code>csv</code> :</p>`},
{type:"code", code:R`import csv
fichier = open("countries.csv", "r")
lecture = csv.reader(fichier)
capitale = {ligne[1]: ligne[2] for ligne in lecture}
fichier.close()
print(capitale["France"])`, run:false},
{type:"code", titre:"Une jointure sur de petites données", code:R`capitale = {"France": "Paris", "Népal": "Katmandou", "Italie": "Rome"}
monnaie = {"France": "euro", "Népal": "roupie népalaise", "Italie": "euro"}

monnaie_capitale = {capitale[p]: monnaie[p] for p in capitale if p in monnaie}
print(monnaie_capitale)`},
{type:"sous", titre:"Devinettes"},
{type:"texte", texte:R`<p>L'ordinateur choisit un pays au hasard avec <code>random.choice</code> et vous demande sa capitale. Écrivez votre réponse dans le champ « Entrées » avant d'exécuter.</p>`},
{type:"code", entrees:"Katmandou", code:R`import random as rd
capitale = {"France": "Paris", "Népal": "Katmandou", "Italie": "Rome", "Pérou": "Lima"}

pays = rd.choice(list(capitale.keys()))
reponse = input("Quelle est la capitale de " + pays + " ? ")
print("Capitale de", pays, "? Vous avez répondu", reponse)
if reponse == capitale[pays]:
    print("Gagné !")
else:
    print("Perdu ! La bonne réponse était", capitale[pays])`},
]},
{ id:"py4", numero:4, ecg:true, titre:"Structures itératives", resume:"Boucles for et while en détail : ordre d'exécution, choix de la boucle, sommes, suites, seuils.",
cours:[
{type:"section", titre:"1. Structures de contrôle"},
{type:"texte", texte:R`<p>Une <b>structure de contrôle</b> décide de l'ordre d'exécution des instructions :</p><ul><li><b>séquentielle</b> : les instructions s'exécutent les unes après les autres ;</li><li><b>conditionnelle</b> (<code>if</code>) : plusieurs branches, on exécute la première dont la condition est réalisée ;</li><li><b>itérative</b> (<code>for</code>, <code>while</code>) : on répète des instructions, un nombre de fois fixé ou tant qu'une condition est vraie.</li></ul>`},

{type:"section", titre:"2. Boucles bornées : for"},
{type:"sous", titre:"Syntaxe"},
{type:"prop", texte:R`<p><code>for elt in liste :</code> suivi d'un bloc indenté. La variable <code>elt</code> prend successivement chacune des valeurs de <code>liste</code>, et le bloc est exécuté pour chacune.</p><p>Cas le plus courant : <code>for i in range(n, m, p) :</code>, où <code>i</code> prend les valeurs $n, n+p, n+2p, \dots$ strictement inférieures à $m$. Par défaut $n = 0$ et $p = 1$.</p>`},
{type:"console", code:R`>>> list(range(5)), list(range(2, 6)), list(range(1, 10, 3)), list(range(5, 0, -1))
([0, 1, 2, 3, 4], [2, 3, 4, 5], [1, 4, 7], [5, 4, 3, 2, 1])`},
{type:"attention", texte:R`<p><code>range(n)</code> s'arrête à $n-1$ : il produit exactement $n$ valeurs. Pour aller de 1 à $n$ inclus, on écrit <code>range(1, n+1)</code>.</p>`},
{type:"sous", titre:"Ordre d'exécution"},
{type:"texte", texte:R`<p>Calcul des <code>m</code> premiers termes de la suite $u_n = n^3$ : au tour $k$, <code>i</code> vaut $k$ et on exécute <code>u.append(k**3)</code>. En sortie de boucle, <code>u</code> contient $0^3, 1^3, \dots, (m-1)^3$ et <code>i</code> vaut <code>m-1</code>.</p>`},
{type:"code", entrees:"5", code:R`m = int(input("Entrez la valeur de m : "))
u = []
for i in range(m):
    u.append(i**3)
    print("tour", i, ": u =", u)
print("en sortie, i =", i)`},
{type:"remarque", texte:R`<p>La même liste s'obtient en compréhension : <code>u = [i**3 for i in range(m)]</code>.</p>`},

{type:"section", titre:"3. Boucles non bornées : while"},
{type:"sous", titre:"Syntaxe"},
{type:"prop", texte:R`<p><code>while condition :</code> suivi d'un bloc. La condition est testée <b>avant chaque tour</b> : si elle vaut <code>True</code>, le bloc est exécuté puis on recommence ; sinon on sort de la boucle. La condition dépend en général de variables modifiées dans le bloc.</p>`},
{type:"attention", texte:R`<p><b>Terminaison</b> : si la condition reste vraie pour toujours (par exemple <code>while True</code> sans sortie, ou une variable qu'on oublie de modifier), la boucle est infinie.</p>`},
{type:"sous", titre:"Ordre d'exécution sur un exemple"},
{type:"texte", texte:R`<p>On cherche dans une liste <code>r</code> le premier élément supérieur ou égal à un réel <code>t</code>. Avec <code>t = 0.5</code> : on teste <code>r[0] &lt; 0.5</code> (vrai, <code>i</code> passe à 1), <code>r[1] &lt; 0.5</code> (vrai, <code>i</code> passe à 2), <code>r[2] &lt; 0.5</code> (faux : on sort), et on affiche <code>r[2] = 0.75</code>.</p>`},
{type:"code", entrees:"0.5", code:R`r = [0.49, 0.18, 0.75, 0.94, 0.21, 0.58, 0.26]
t = float(input("Choisissez une valeur pour t : "))
i = 0
while r[i] < t:
    print("r[" + str(i) + "] =", r[i], "< t : on continue")
    i = i + 1
print("Le premier élément >= t est", r[i])`},
{type:"texte", texte:R`<p>Essayez avec <code>0.95</code> dans le champ « Entrées » : aucun élément ne convient, <code>i</code> atteint 7 et <code>r[7]</code> n'existe pas. D'où l'erreur <code>IndexError</code>. Il faut vérifier que <code>i</code> reste un indice valide <b>avant</b> de lire <code>r[i]</code> :</p>`},
{type:"code", entrees:"0.95", code:R`r = [0.49, 0.18, 0.75, 0.94, 0.21, 0.58, 0.26]
t = float(input("Choisissez une valeur pour t : "))
n = len(r)
i = 0
while i <= n-1 and r[i] < t:
    i = i + 1
if i > n-1:
    print("La liste r ne possède pas d'élément >= t")
else:
    print("Le premier élément >= t est", r[i])`},
{type:"prop", texte:R`<p>L'évaluation de <code>(i &lt;= n-1) and (r[i] &lt; t)</code> commence par <code>i &lt;= n-1</code>. Si ce test est faux, <code>r[i] &lt; t</code> n'est <b>pas</b> évalué (caractère paresseux du <code>and</code>) : aucun accès hors de la liste.</p>`},

{type:"section", titre:"4. for ou while ?"},
{type:"sous", titre:"Simuler un for avec un while"},
{type:"texte", texte:R`<p>On utilise un compteur initialisé avant la boucle et incrémenté à la fin de chaque tour.</p>`},
{type:"code", code:R`m = 5
u = []
i = 0
while i <= m-1:
    u.append(i**3)
    i = i + 1
print(u)`},
{type:"sous", titre:"Que choisir ?"},
{type:"methode", texte:R`<ul><li>On connaît <b>à l'avance</b> le nombre de tours → <code>for</code> : modifier tous les éléments d'une liste, calculer les $n$ premiers termes d'une suite, une somme $\sum_{k=0}^n$, un produit $\prod_{k=0}^n$.</li><li>On ne le connaît <b>pas</b> → <code>while</code> : premier coefficient non nul d'une liste, premier rang où une suite dépasse un seuil, nombre d'années pour qu'un chiffre d'affaires double.</li></ul>`},

{type:"section", titre:"5. Schémas classiques"},
{type:"sous", titre:"Accumuler : sommes et produits"},
{type:"methode", texte:R`<p>On initialise un accumulateur à l'élément neutre (<code>0</code> pour une somme, <code>1</code> pour un produit), puis on ajoute (ou multiplie) un terme à chaque tour.</p>`},
{type:"code", code:R`def facto(n):
    f = 1
    for k in range(2, n+1):
        f = f * k
    return f

def binom(n, p):
    return facto(n) // (facto(p) * facto(n - p))

def sommeInv(n, r):
    s = 0
    for k in range(1, n+1):
        s = s + 1 / k**r
    return s

print(facto(10), binom(10, 3))
print(sommeInv(10000, 2), "à comparer à pi²/6 =", 3.141592653589793**2 / 6)`},
{type:"sous", titre:"Suite récurrente"},
{type:"texte", texte:R`<p>Pour $u_0 = a$ et $u_{n+1} = f(u_n)$, une seule variable suffit : on la remplace par son image à chaque tour.</p>`},
{type:"code", code:R`def u(n):
    x = 1                 # u_0
    for k in range(n):
        x = (x + 2 / x) / 2   # u_{k+1} en fonction de u_k
    return x

for n in range(6):
    print(n, u(n))        # tend vers racine de 2`},
{type:"sous", titre:"Seuil : premier rang où…"},
{type:"code", code:R`def seuil(A):
    # plus petit n tel que 1 + 1/2 + ... + 1/n >= A
    n = 1
    s = 1
    while s < A:
        n = n + 1
        s = s + 1 / n
    return n

print(seuil(3), seuil(5), seuil(8))`},
{type:"sous", titre:"Boucles imbriquées"},
{type:"code", code:R`# somme double : somme des i*j pour 1 <= i <= j <= n
def S(n):
    s = 0
    for j in range(1, n+1):
        for i in range(1, j+1):
            s = s + i * j
    return s

print([S(n) for n in range(1, 7)])`},
{type:"remarque", texte:R`<p>On retrouve les sommes doubles du chapitre de maths : la boucle extérieure fixe $j$, la boucle intérieure fait varier $i$ de $1$ à $j$.</p>`},
]},
{ id:"py5", numero:5, ecg:true, titre:"La récursivité", resume:"Fonctions qui s'appellent elles-mêmes : cas de base, terminaison, listes, exponentiation rapide, dichotomie.",
cours:[
{type:"section", titre:"1. Qu'est-ce que la récursivité ?"},
{type:"sous", titre:"Définition"},
{type:"def", texte:R`<p>Un objet est <b>récursif</b> lorsque sa définition fait appel à l'objet lui-même. Une <b>fonction récursive</b> est une fonction qui s'appelle elle-même.</p>`},
{type:"texte", texte:R`<p>C'est un schéma courant en mathématiques : les suites récurrentes.</p>$$\begin{cases}u_0=1\\ u_{n+1}=3u_n+1\end{cases}\qquad\begin{cases}v_0=v_1=1\\ v_{n+2}=v_{n+1}+v_n\end{cases}\qquad\begin{cases}0!=1\\ n!=n\times(n-1)!\end{cases}$$<p>Définir $u$ à l'aide de $u$ semble circulaire, mais ces suites sont bien définies : la valeur au rang $n$ se ramène à des rangs plus petits, jusqu'aux <b>valeurs initiales</b>.</p>`},
{type:"sous", titre:"Une première tentative pour la factorielle"},
{type:"code", code:R`def factrec(n):
    # renvoie n!  (version incorrecte)
    return n * factrec(n-1)

print(factrec(3))`},
{type:"texte", texte:R`<p>On obtient <code>RecursionError: maximum recursion depth exceeded</code>. En effet :</p>$$\texttt{factrec}(3)=3\times\texttt{factrec}(2)=3\times2\times\texttt{factrec}(1)=3\times2\times1\times\texttt{factrec}(0)=3\times2\times1\times0\times\texttt{factrec}(-1)=\dots$$<p>On a oublié la <b>condition d'arrêt</b> $0! = 1$ : la fonction s'appelle indéfiniment, jusqu'à dépasser la limite d'appels imbriqués de Python (environ 1000).</p>`},
{type:"sous", titre:"Une implémentation correcte"},
{type:"prop", texte:R`<p>Une fonction récursive comporte :</p><ul><li>un ou plusieurs <b>cas de base</b>, traités sans appel récursif ;</li><li>un ou plusieurs <b>appels récursifs</b> sur des arguments « plus petits », qui se rapprochent d'un cas de base.</li></ul><p>C'est ce qui garantit la <b>terminaison</b>, exactement comme l'initialisation et l'hérédité d'une récurrence.</p>`},
{type:"code", code:R`def factrec(n):
    assert isinstance(n, int) and n >= 0, "n doit être un entier naturel"
    if n == 0:
        return 1
    return n * factrec(n-1)

print(factrec(5))
print(factrec(-1))`},
{type:"remarque", texte:R`<p>Sans l'<code>assert</code>, <code>factrec(-1)</code> provoquerait une <code>RecursionError</code> : les appels se feraient sur $-2, -3, \dots$ sans jamais atteindre $0$. L'<code>assert</code> donne un message d'erreur bien plus clair.</p>`},
{type:"exemple", titre:"Voir la pile d'appels", texte:R`<p>Chaque appel attend le résultat du suivant : les multiplications se font « au retour ».</p>`},
{type:"code", code:R`def factrec(n, profondeur=0):
    print("  " * profondeur + "appel factrec(" + str(n) + ")")
    if n == 0:
        r = 1
    else:
        r = n * factrec(n-1, profondeur+1)
    print("  " * profondeur + "factrec(" + str(n) + ") renvoie " + str(r))
    return r

factrec(4)`},

{type:"section", titre:"2. Récursivité sur les listes"},
{type:"methode", texte:R`<p>Une liste est soit vide (cas de base), soit formée d'un premier élément <code>L[0]</code> suivi du reste <code>L[1:]</code>, qui est une liste plus courte. On traite <code>L[0]</code> et on appelle la fonction sur <code>L[1:]</code>.</p>`},
{type:"code", code:R`def nbElementListe(L):
    if L == []:
        return 0
    return 1 + nbElementListe(L[1:])

def sommeListe(L):
    if L == []:
        return 0
    return L[0] + sommeListe(L[1:])

def ajoutListe(L, x):          # ajoute x à chaque élément
    if L == []:
        return []
    return [L[0] + x] + ajoutListe(L[1:], x)

def rechercheListe(L, x):
    if L == []:
        return False
    return L[0] == x or rechercheListe(L[1:], x)

def positifListe(L):
    if L == []:
        return True
    return L[0] >= 0 and positifListe(L[1:])

L = [3, 1, 4, 1, 5]
print(nbElementListe(L), sommeListe(L), ajoutListe(L, 10))
print(rechercheListe(L, 4), rechercheListe(L, 7), positifListe(L))`},
{type:"remarque", texte:R`<p>Dans <code>rechercheListe</code> et <code>positifListe</code>, le caractère paresseux de <code>or</code> et <code>and</code> arrête les appels dès que la réponse est connue.</p>`},
{type:"sous", titre:"Extension aux matrices"},
{type:"texte", texte:R`<p>Une matrice est une liste de lignes : on traite la première ligne avec la fonction sur les listes, et le reste de la matrice récursivement.</p>`},
{type:"code", code:R`def nbElementMatrice(M):
    if M == []:
        return 0
    return nbElementListe(M[0]) + nbElementMatrice(M[1:])

def sommeMatrice(M):
    if M == []:
        return 0
    return sommeListe(M[0]) + sommeMatrice(M[1:])

def positifMatrice(M):
    if M == []:
        return True
    return positifListe(M[0]) and positifMatrice(M[1:])

M = [[1, 2, 3], [4, 5, 6]]
print(nbElementMatrice(M), sommeMatrice(M), positifMatrice(M))`},

{type:"section", titre:"3. Exponentiation rapide"},
{type:"texte", texte:R`<p>Version naïve : $x^0 = 1$ et $x^n = x^{n-1}\times x$. Elle fait $n$ multiplications.</p>`},
{type:"code", code:R`def expo_naive(x, n):
    if n == 0:
        return 1
    return expo_naive(x, n-1) * x

print(expo_naive(2, 10))`},
{type:"prop", texte:R`<p>On utilise plutôt :</p>$$x^n=\begin{cases}1 & \text{si } n=0\\ (x^2)^{n/2} & \text{si } n \text{ est pair}\\ (x^2)^{(n-1)/2}\times x & \text{si } n \text{ est impair}\end{cases}$$<p>L'exposant est divisé par 2 à chaque appel : environ $\log_2 n$ appels au lieu de $n$.</p>`},
{type:"code", code:R`def expo_rapide(x, n):
    if n == 0:
        return 1
    elif n % 2 == 0:
        return expo_rapide(x * x, n // 2)
    else:
        return expo_rapide(x * x, n // 2) * x

print(expo_rapide(2, 10), expo_rapide(3, 13) == 3**13)

compteur = 0
def expo_compte(x, n):
    global compteur
    compteur += 1
    if n == 0:
        return 1
    elif n % 2 == 0:
        return expo_compte(x * x, n // 2)
    return expo_compte(x * x, n // 2) * x

expo_compte(2, 1000)
print("appels pour n = 1000 :", compteur)`},

{type:"section", titre:"4. Recherche dichotomique"},
{type:"methode", texte:R`<p>Dans une liste <b>triée</b>, on compare <code>x</code> à l'élément du milieu <code>L[m]</code> : s'il est égal, c'est gagné ; si <code>x</code> est plus grand, on cherche dans la moitié droite <code>L[m+1:]</code> ; sinon dans la moitié gauche <code>L[:m]</code>. La taille est divisée par 2 à chaque étape.</p>`},
{type:"code", code:R`def rechercheDichoto(L, x):
    if L == []:
        return False
    m = len(L) // 2
    if L[m] == x:
        return True
    elif x > L[m]:
        return rechercheDichoto(L[m+1:], x)
    else:
        return rechercheDichoto(L[:m], x)

L = [1, 3, 4, 7, 9, 12, 15, 20]
print([rechercheDichoto(L, x) for x in [1, 7, 8, 20, 21]])`},
{type:"attention", texte:R`<p>La moitié gauche est <code>L[:m]</code> (indices $0$ à $m-1$). Écrire <code>L[:m-1]</code> oublierait l'élément d'indice $m-1$ : essayez avec <code>x = 4</code> en modifiant le code.</p>`},

{type:"section", titre:"5. Une suite récurrente d'ordre 2"},
{type:"texte", texte:R`<p>Soit $u_0 = 1$, $u_1 = 0$ et $u_{n+2} = u_{n+1} + 2u_n$. La traduction récursive est immédiate, avec deux cas de base.</p>`},
{type:"code", code:R`def suiteU(n):
    assert isinstance(n, int) and n >= 0
    if n == 0:
        return 1
    elif n == 1:
        return 0
    return suiteU(n-1) + 2 * suiteU(n-2)

print([suiteU(n) for n in range(10)])`},
{type:"attention", texte:R`<p>Essayez <code>suiteU(30)</code> : c'est très lent. Chaque appel en déclenche deux, et les mêmes termes sont recalculés un nombre énorme de fois : le nombre d'appels croît exponentiellement avec $n$.</p>`},
{type:"code", code:R`appels = 0
def suiteU_compte(n):
    global appels
    appels += 1
    if n == 0: return 1
    if n == 1: return 0
    return suiteU_compte(n-1) + 2 * suiteU_compte(n-2)

for n in [5, 10, 15, 20, 22]:
    appels = 0
    suiteU_compte(n)
    print("n =", n, ":", appels, "appels")`},
{type:"methode", texte:R`<p>Version itérative : on garde seulement les deux derniers termes et on avance d'un rang à chaque tour. Le calcul de $u_{50}$ devient instantané.</p>`},
{type:"code", code:R`def suiteU_iter(n):
    a, b = 1, 0          # u_0, u_1
    for k in range(n):
        a, b = b, b + 2*a
    return a

print([suiteU_iter(n) for n in range(10)])
print(suiteU_iter(50))
print("formule : u_n = (2^n + 2(-1)^n)/3 ->", (2**50 + 2*(-1)**50) // 3)`},
{type:"remarque", texte:R`<p>L'équation caractéristique $r^2 = r + 2$ a pour racines $2$ et $-1$ ; avec $u_0 = 1$, $u_1 = 0$, on trouve $u_n = \frac{2^n + 2(-1)^n}{3}$ (méthode du chapitre sur les suites récurrentes linéaires d'ordre 2).</p>`},
]},
{ id:"py6", numero:6, ecg:false, titre:"Diviser pour régner", resume:"Exponentiation rapide, Fibonacci par les matrices, tri fusion, théorème maître.",
cours:[
{type:"section", titre:"1. Exemple introductif : l'exponentiation rapide"},
{type:"sous", titre:"Exponentiation naïve"},
{type:"texte", texte:R`<p>On calcule $x^n$ avec $x^0 = 1$ et $x^n = x \times x^{n-1}$ : cela coûte $n$ multiplications.</p>`},
{type:"sous", titre:"Principe et implémentation"},
{type:"prop", texte:R`<p>$x^n = (x^2)^{n/2}$ si $n$ est pair, $x^n = x\times(x^2)^{(n-1)/2}$ si $n$ est impair. On remplace un problème de taille $n$ par <b>un</b> problème de taille $n/2$.</p>`},
{type:"code", code:R`def expo_rapide(x, n):
    if n == 0:
        return 1
    y = expo_rapide(x * x, n // 2)
    if n % 2 == 0:
        return y
    return x * y

print(expo_rapide(2, 100) == 2**100, expo_rapide(1.0001, 10000))`},
{type:"sous", titre:"Complexité"},
{type:"prop", texte:R`<p>Notons $C(n)$ le nombre de multiplications. La lecture du programme donne</p>$$C(0)=0,\qquad C(n)=C\!\left(\tfrac n2\right)+1 \text{ si } n>0 \text{ pair},\qquad C(n)=C\!\left(\tfrac{n-1}2\right)+2 \text{ si } n \text{ impair}.$$<p>On en déduit $C(n) = \Theta(\ln n)$, contre $\Theta(n)$ pour la méthode naïve.</p>`},
{type:"remarque", texte:R`<p>Intuition : l'exposant est divisé par 2 à chaque étape, donc il y a environ $\log_2 n$ étapes, chacune coûtant 1 ou 2 multiplications. Plus précisément, $C(n)$ vaut (nombre de chiffres de $n$ en binaire) + (nombre de 1 dans l'écriture binaire de $n$).</p>`},
{type:"sous", titre:"Application : le n-ième nombre de Fibonacci"},
{type:"texte", texte:R`<p>L'exponentiation rapide marche dans tout ensemble muni d'une multiplication associative, par exemple les matrices. Avec $M=\begin{pmatrix}0&1\\1&1\end{pmatrix}$ et la suite de Fibonacci $f_0=0$, $f_1=1$, $f_{n+2}=f_{n+1}+f_n$, on montre par récurrence que</p>$$M^n=\begin{pmatrix}f_{n-1}&f_n\\ f_n&f_{n+1}\end{pmatrix}\quad(n\geqslant1).$$<p>On calcule donc $f_n$ avec $\Theta(\ln n)$ produits de matrices $2\times2$.</p>`},
{type:"code", code:R`def produit(A, B):
    return [[A[0][0]*B[0][0] + A[0][1]*B[1][0], A[0][0]*B[0][1] + A[0][1]*B[1][1]],
            [A[1][0]*B[0][0] + A[1][1]*B[1][0], A[1][0]*B[0][1] + A[1][1]*B[1][1]]]

def puissance(M, n):
    if n == 0:
        return [[1, 0], [0, 1]]
    P = puissance(produit(M, M), n // 2)
    if n % 2 == 0:
        return P
    return produit(M, P)

def fibo(n):
    return puissance([[0, 1], [1, 1]], n)[0][1]

print([fibo(n) for n in range(12)])
print(fibo(300))`},

{type:"section", titre:"2. Deuxième exemple : le tri fusion"},
{type:"sous", titre:"Principe"},
{type:"texte", texte:R`<p>Pour trier <code>[1, 4, 2, 8, 5, 7]</code> : on coupe en deux, <code>[1, 4, 2]</code> et <code>[8, 5, 7]</code> ; on trie chaque moitié (récursivement) pour obtenir <code>[1, 2, 4]</code> et <code>[5, 7, 8]</code> ; puis on <b>fusionne</b> ces deux listes triées.</p>$$\texttt{tri}(L)=\texttt{fusion}\big(\texttt{tri}(\text{moitié gauche}),\ \texttt{tri}(\text{moitié droite})\big)$$<p>Une liste de longueur 0 ou 1 est déjà triée : c'est le cas de base.</p>`},
{type:"sous", titre:"Implémentation"},
{type:"methode", texte:R`<p><b>Fusion</b> de deux listes triées : on compare leurs premiers éléments restants, on prend le plus petit, et on recommence. Quand une liste est épuisée, on ajoute la fin de l'autre.</p>`},
{type:"code", code:R`def fusion(A, B):
    i, j, R = 0, 0, []
    while i < len(A) and j < len(B):
        if A[i] <= B[j]:
            R.append(A[i]); i += 1
        else:
            R.append(B[j]); j += 1
    return R + A[i:] + B[j:]

def tri_fusion(L):
    if len(L) <= 1:
        return L
    m = len(L) // 2
    return fusion(tri_fusion(L[:m]), tri_fusion(L[m:]))

print(fusion([1, 2, 4], [5, 7, 8]))
print(tri_fusion([1, 4, 2, 8, 5, 7]))
import random
L = [random.randint(0, 99) for _ in range(20)]
print(tri_fusion(L) == sorted(L))`},
{type:"sous", titre:"Complexité"},
{type:"prop", texte:R`<p>Si $\alpha_n$ est le coût de la fusion (proportionnel à $n$), la complexité vérifie</p>$$C(0)=0,\qquad C(n)=C\!\left(\left\lfloor \tfrac n2\right\rfloor\right)+C\!\left(\left\lceil \tfrac n2\right\rceil\right)+\alpha_n,$$<p>et l'on obtient $C(n)=\Theta(n\ln n)$. C'est bien mieux que les tris naïfs en $\Theta(n^2)$ (chapitre 7).</p>`},

{type:"section", titre:"3. Les algorithmes DPR et leur complexité"},
{type:"sous", titre:"Le principe diviser pour régner"},
{type:"def", texte:R`<p>Face à un problème de taille $n$, un algorithme « diviser pour régner » :</p><ul><li>si $n$ est petit, renvoie directement la solution (cas de base) ;</li><li>sinon, découpe le problème en $a$ sous-problèmes de taille $n/b$ (<b>diviser</b>) ;</li><li>résout récursivement ces sous-problèmes ;</li><li>combine leurs solutions (<b>régner</b>, ou reconstruire).</li></ul><p>Exponentiation rapide : $a = 1$, $b = 2$. Tri fusion : $a = 2$, $b = 2$.</p>`},
{type:"sous", titre:"Le théorème maître"},
{type:"texte", texte:R`<p>La complexité d'un algorithme DPR vérifie une relation $C(n) = a\,C(n/b) + f(n)$, où $f(n)$ est le coût de la division et de la reconstruction ($n/b$ désignant en fait des parties entières).</p>`},
{type:"prop", titre:"Théorème maître (version allégée)", texte:R`<p>On suppose $C(n) = a\,C(n/b) + f(n)$ avec $f(n) = \Theta(n^\alpha)$, et on pose $\lambda = \log_b(a) = \dfrac{\ln a}{\ln b}$.</p><ul><li>Si $\alpha &lt; \lambda$ : $C(n) = \Theta(n^\lambda)$.</li><li>Si $\alpha = \lambda$ : $C(n) = \Theta(n^\alpha \ln n)$.</li><li>Si $\alpha &gt; \lambda$ : $C(n) = \Theta(n^\alpha)$.</li></ul>`},
{type:"remarque", titre:"Intuition", texte:R`<p>L'arbre des appels a une profondeur d'environ $\log_b n$ et environ $a^{\log_b n} = n^{\lambda}$ feuilles. Si la reconstruction coûte cher ($\alpha &gt; \lambda$), le premier appel domine. Si elle est bon marché ($\alpha &lt; \lambda$), c'est le nombre d'appels qui domine. Dans le cas critique $\alpha = \lambda$, chaque niveau coûte autant : on multiplie par la profondeur, d'où le facteur $\ln n$.</p>`},
{type:"exemple", texte:R`<ul><li>Exponentiation rapide : $a = 1$, $b = 2$, $\lambda = 0$, $f(n) = \Theta(1)$ donc $\alpha = 0 = \lambda$ : $C(n) = \Theta(\ln n)$.</li><li>Tri fusion : $a = 2$, $b = 2$, $\lambda = 1$, $f(n) = \Theta(n)$ donc $\alpha = 1 = \lambda$ : $C(n) = \Theta(n \ln n)$.</li></ul>`},
{type:"sous", titre:"Comparer des algorithmes DPR"},
{type:"exemple", texte:R`<p>Trois algorithmes résolvent le même problème :</p><ul><li><b>(A)</b> 9 sous-problèmes de taille $n/3$, recombinaison quadratique : $A(n) = 9A(n/3) + \Theta(n^2)$, $\lambda = \log_3 9 = 2 = \alpha$, donc $A(n) = \Theta(n^2\ln n)$ ;</li><li><b>(B)</b> 2 sous-problèmes de taille $n-1$, recombinaison constante : $B(n) = 2B(n-1) + \Theta(1)$. Le théorème ne s'applique pas, mais c'est une suite arithmético-géométrique : $B(n) = \Theta(2^n)$ ;</li><li><b>(C)</b> 5 sous-problèmes de taille $n/2$, recombinaison linéaire : $\lambda = \log_2 5 \approx 2{,}32 &gt; 1 = \alpha$, donc $C(n) = \Theta(n^{\log_2 5})$.</li></ul><p>(A) est asymptotiquement le meilleur, (B) le pire.</p>`},
{type:"code", titre:"Vérification numérique de la croissance", code:R`import math

def A(n): return 1 if n <= 1 else 9 * A(n // 3) + n**2
def C(n): return 1 if n <= 1 else 5 * C(n // 2) + n

for n in [3**6, 3**8, 3**10]:
    print(n, round(A(n) / (n**2 * math.log(n)), 3))
for n in [2**8, 2**12, 2**16]:
    print(n, round(C(n) / n**math.log2(5), 3))`},
]},
{ id:"py7", numero:7, ecg:false, titre:"Les algorithmes de tri", resume:"Tris par sélection, insertion, bulles, puis tri fusion, tri rapide et tri par comptage.",
cours:[
{type:"texte", texte:R`<p>Trier une liste, c'est ranger ses éléments dans l'ordre croissant. Python le fait avec <code>sorted(L)</code> ou <code>L.sort()</code>, mais écrire ses propres tris est un excellent entraînement, et la comparaison de leurs coûts introduit la notion de complexité.</p>`},
{type:"section", titre:"1. Premiers algorithmes de tri"},
{type:"sous", titre:"Tri par sélection"},
{type:"methode", texte:R`<p>Pour $i$ allant de $0$ à $n-1$ : on cherche l'indice du plus petit élément de <code>L[i:]</code>, puis on l'échange avec <code>L[i]</code>. Après le tour $i$, les $i+1$ premiers éléments sont les plus petits, rangés dans l'ordre.</p>`},
{type:"code", code:R`def indice_min(L, i):
    i_min = i
    for j in range(i, len(L)):
        if L[j] < L[i_min]:
            i_min = j
    return i_min

def echange(L, i, j):
    L[i], L[j] = L[j], L[i]

def tri_selection(L):
    for i in range(len(L)):
        echange(L, i, indice_min(L, i))

L = [5, 2, 9, 1, 7, 3]
tri_selection(L)
print(L)`},
{type:"remarque", texte:R`<p>Ce tri modifie la liste <b>en place</b> et ne renvoie rien (<code>None</code>). Il effectue toujours $\frac{n(n-1)}{2}$ comparaisons : sa complexité est en $\Theta(n^2)$.</p>`},
{type:"sous", titre:"Tri par insertion"},
{type:"methode", texte:R`<p>C'est le tri du joueur de cartes : on suppose <code>L[:i]</code> déjà triée, et on insère <code>L[i]</code> à sa place en décalant vers la droite les éléments plus grands.</p>`},
{type:"code", code:R`def tri_insertion(L):
    for i in range(1, len(L)):
        x = L[i]
        j = i
        while j > 0 and L[j-1] > x:
            L[j] = L[j-1]      # on décale vers la droite
            j = j - 1
        L[j] = x               # on insère x à sa place

L = [5, 2, 9, 1, 7, 3]
tri_insertion(L)
print(L)`},
{type:"remarque", texte:R`<p>Dans le pire cas (liste triée à l'envers), $\Theta(n^2)$ comparaisons. Mais sur une liste déjà triée, la boucle <code>while</code> s'arrête aussitôt : $\Theta(n)$. Le tri par insertion est donc efficace sur des listes presque triées.</p>`},
{type:"sous", titre:"Tri à bulles"},
{type:"methode", texte:R`<p>On parcourt la liste en échangeant deux voisins mal rangés. Après le premier passage, le plus grand élément est « remonté » à la fin, comme une bulle. On recommence sur la partie non triée.</p>`},
{type:"code", code:R`def tri_bulles(L):
    n = len(L)
    for k in range(n-1, 0, -1):        # L[k+1:] est déjà triée
        for i in range(k):
            if L[i] > L[i+1]:
                L[i], L[i+1] = L[i+1], L[i]

L = [5, 2, 9, 1, 7, 3]
tri_bulles(L)
print(L)`},

{type:"section", titre:"2. Tri fusion et tri rapide"},
{type:"texte", texte:R`<p>Ces deux tris suivent la stratégie <b>diviser pour régner</b> (chapitre 6) : on découpe la liste, on trie les morceaux récursivement, et on reconstruit.</p>`},
{type:"sous", titre:"Tri fusion"},
{type:"code", code:R`def fusion(L1, L2):
    L = []
    i, j = 0, 0
    m, n = len(L1), len(L2)
    for k in range(m + n):
        if i < m and (j == n or L1[i] <= L2[j]):
            L.append(L1[i]); i = i + 1
        else:
            L.append(L2[j]); j = j + 1
    return L

def tri_fusion(L):
    if len(L) <= 1:
        return L
    m = len(L) // 2
    return fusion(tri_fusion(L[:m]), tri_fusion(L[m:]))

print(fusion([1, 4, 8], [2, 3, 9, 10]))
print(tri_fusion([5, 2, 9, 1, 7, 3, 8]))`},
{type:"remarque", texte:R`<p>La condition <code>i &lt; m and (j == n or L1[i] &lt;= L2[j])</code> signifie : « il reste des éléments dans <code>L1</code>, et soit <code>L2</code> est épuisée, soit le prochain de <code>L1</code> est le plus petit ». La fusion s'écrit aussi récursivement :</p>`},
{type:"code", code:R`def fusionRec(L1, L2):
    if L1 == []:
        return L2
    if L2 == []:
        return L1
    if L1[0] < L2[0]:
        return [L1[0]] + fusionRec(L1[1:], L2)
    return [L2[0]] + fusionRec(L1, L2[1:])

print(fusionRec([1, 4, 8], [2, 3, 9, 10]))`},
{type:"sous", titre:"Tri rapide"},
{type:"methode", texte:R`<p>On choisit un <b>pivot</b> (ici le premier élément de la zone), puis on <b>partitionne</b> : les éléments plus petits que le pivot à gauche, les plus grands à droite, le pivot entre les deux, à sa place définitive. On trie ensuite récursivement les deux côtés. Contrairement au tri fusion, le travail se fait avant les appels récursifs, et en place.</p>`},
{type:"code", code:R`def echange(L, i, j):
    L[i], L[j] = L[j], L[i]

def partition(L, g, d):
    # partitionne L[g..d] autour du pivot L[g], renvoie sa position finale
    pivot = L[g]
    if g >= d:
        return g
    i, j = g + 1, d
    while i < j:
        if L[i] <= pivot:
            i = i + 1
        elif L[j] > pivot:
            j = j - 1
        else:
            echange(L, i, j)
            i, j = i + 1, j - 1
    if L[i] < pivot:
        echange(L, g, i)
        return i
    echange(L, g, i - 1)
    return i - 1

def tri_rapide(L, g, d):
    if g < d:
        k = partition(L, g, d)
        tri_rapide(L, g, k - 1)
        tri_rapide(L, k + 1, d)

L = [5, 2, 9, 1, 7, 3, 8, 5]
tri_rapide(L, 0, len(L) - 1)
print(L)

import random
ok = True
for _ in range(500):
    L = [random.randint(0, 20) for _ in range(random.randint(0, 15))]
    M = L[:]
    tri_rapide(M, 0, len(M) - 1)
    ok = ok and M == sorted(L)
print("500 tests :", ok)`},
{type:"remarque", texte:R`<p>En moyenne, le tri rapide est en $\Theta(n\ln n)$ et très efficace en pratique. Mais si le pivot est toujours le plus petit élément (liste déjà triée !), les deux parts sont de tailles $0$ et $n-1$ : on retombe sur $\Theta(n^2)$. Choisir le pivot au hasard évite ce piège.</p>`},

{type:"section", titre:"3. Tri par comptage"},
{type:"methode", texte:R`<p>Si les éléments sont des entiers entre $0$ et $m$, on n'a pas besoin de les comparer : on compte combien de fois apparaît chaque valeur (avec un dictionnaire), puis on reconstruit la liste dans l'ordre. Coût : $\Theta(n + m)$.</p>`},
{type:"code", code:R`def tri_comptage(L, m):
    occ = {k: 0 for k in range(m + 1)}
    for x in L:
        occ[x] += 1
    L_triee = []
    for k in range(m + 1):
        L_triee = L_triee + [k] * occ[k]
    return L_triee

print(tri_comptage([3, 0, 2, 3, 1, 0, 3], 3))`},
{type:"texte", texte:R`<p>Variante sans connaître $m$ : on ne crée que les clés présentes, puis on trie ces clés (avec le tri fusion, par exemple).</p>`},
{type:"code", code:R`def tri_comptage_2(L):
    occ = {}
    for x in L:
        if x in occ:
            occ[x] += 1
        else:
            occ[x] = 1
    L_triee = []
    for k in sorted(occ.keys()):
        L_triee = L_triee + [k] * occ[k]
    return L_triee

print(tri_comptage_2([12, 5, 12, 7, 5, 12, 100]))`},

{type:"section", titre:"4. Comparer les tris"},
{type:"code", titre:"Mesurer les temps d'exécution", code:R`import random, time

def chrono(tri, L):
    M = L[:]
    t = time.time()
    tri(M)
    return round(time.time() - t, 4)

for n in [500, 1000, 2000]:
    L = [random.random() for _ in range(n)]
    print(n, "sélection :", chrono(tri_selection, L), " insertion :", chrono(tri_insertion, L),
          " fusion :", chrono(tri_fusion, L), " sorted :", chrono(sorted, L))`},
{type:"remarque", texte:R`<p>Ce bloc réutilise les fonctions définies plus haut : exécutez d'abord les blocs du tri par sélection, du tri par insertion et du tri fusion. Quand $n$ double, le temps des tris quadratiques est environ multiplié par 4, celui du tri fusion par un peu plus de 2.</p>`},
]},
{ id:"py8", numero:8, ecg:false, titre:"Les algorithmes gloutons", resume:"Faire le meilleur choix local à chaque étape : rendu de monnaie, sac à dos, voyageur de commerce.",
cours:[
{type:"section", titre:"1. Le principe glouton"},
{type:"def", texte:R`<p>Un algorithme <b>glouton</b> construit une solution étape par étape en faisant, à chaque étape, le choix qui semble <b>le meilleur sur le moment</b> (optimum local), sans jamais revenir en arrière.</p>`},
{type:"prop", texte:R`<p>Un algorithme glouton est simple et rapide, mais il ne donne <b>pas toujours</b> la meilleure solution globale. Pour certains problèmes il est optimal, pour d'autres il fournit seulement une solution raisonnable (une <b>heuristique</b>).</p>`},

{type:"section", titre:"2. Le rendu de monnaie"},
{type:"texte", texte:R`<p>On dispose de pièces de valeurs données (liste croissante <code>pieces</code>) en quantité illimitée, et on veut rendre un <code>montant</code> avec le moins de pièces possible. Le résultat est une liste <code>rendu</code> : <code>rendu[i]</code> est le nombre de pièces de valeur <code>pieces[i]</code>.</p>`},
{type:"methode", texte:R`<p>Choix glouton : tant qu'il reste quelque chose à rendre, on prend la <b>plus grande pièce</b> qui ne dépasse pas le reste.</p>`},
{type:"code", code:R`def somme_rendue(pieces, rendu):
    return sum([pieces[i] * rendu[i] for i in range(len(pieces))])

def i_max_inferieur(t, x):
    # indice de la plus grande valeur de t (triée) inférieure ou égale à x
    i = 0
    while i < len(t) and t[i] <= x:
        i = i + 1
    return i - 1

def rendu_iter(pieces, montant):
    rendu = [0] * len(pieces)
    reste = montant
    while reste > 0:
        i = i_max_inferieur(pieces, reste)
        rendu[i] = rendu[i] + 1
        reste = reste - pieces[i]
    return rendu

euros = [1, 2, 5, 10, 20, 50, 100, 200]       # en centimes
r = rendu_iter(euros, 289)
print(r, "->", somme_rendue(euros, r), "centimes avec", sum(r), "pièces")`},
{type:"texte", texte:R`<p>Version récursive : rendre <code>montant</code>, c'est rendre une grosse pièce puis rendre le reste.</p>`},
{type:"code", code:R`def rendu_rec(pieces, montant):
    if montant == 0:
        return [0] * len(pieces)
    i = i_max_inferieur(pieces, montant)
    rendu = rendu_rec(pieces, montant - pieces[i])
    rendu[i] = rendu[i] + 1
    return rendu

print(rendu_rec([1, 2, 5, 10, 20, 50, 100, 200], 289))`},
{type:"attention", texte:R`<p>Avec les pièces en euros, l'algorithme glouton est optimal. Mais avec un système de pièces $\{1, 3, 4\}$ et un montant de $6$, il rend $4 + 1 + 1$ (3 pièces) alors que $3 + 3$ (2 pièces) est meilleur.</p>`},
{type:"code", code:R`print(rendu_iter([1, 3, 4], 6))     # 2 pièces de 1 et une de 4 : 3 pièces`},

{type:"section", titre:"3. Le problème du sac à dos"},
{type:"texte", texte:R`<p>Des objets ont chacun une valeur et un poids. Le sac supporte un poids maximal : quels objets emporter pour maximiser la valeur totale ? La solution est une liste <code>selection</code> de 0 et de 1.</p>`},
{type:"methode", texte:R`<p>Choix glouton : parmi les objets pas encore pris et qui tiennent encore dans le sac, on prend celui de meilleur <b>rapport valeur / poids</b>. On recommence jusqu'à ce qu'aucun objet ne rentre.</p>`},
{type:"code", code:R`def objets_disponibles(poids, capacite, selection):
    return [i for i in range(len(poids)) if selection[i] == 0 and poids[i] <= capacite]

def choix_objet(valeurs, poids, objets):
    i_max = objets[0]
    for i in objets:
        if valeurs[i] / poids[i] > valeurs[i_max] / poids[i_max]:
            i_max = i
    return i_max

def sac_a_dos(valeurs, poids, poids_max):
    selection = [0] * len(valeurs)
    capacite = poids_max
    dispo = objets_disponibles(poids, capacite, selection)
    while dispo != []:
        i = choix_objet(valeurs, poids, dispo)
        selection[i] = 1
        capacite = capacite - poids[i]
        dispo = objets_disponibles(poids, capacite, selection)
    return selection

valeurs = [10, 7, 25, 24]
poids   = [2, 1, 6, 5]
s = sac_a_dos(valeurs, poids, 7)
print(s, "valeur :", sum(valeurs[i] for i in range(4) if s[i]))`},
{type:"remarque", texte:R`<p>Ici le glouton prend les objets 1 et 0 (meilleurs rapports), puis plus rien ne rentre : valeur 17. Or l'objet 3 et l'objet 0 tiennent ensemble (poids 7) et valent 34. Le glouton n'est pas optimal pour le sac à dos ; la solution exacte relève de la programmation dynamique.</p>`},

{type:"section", titre:"4. Le voyageur de commerce"},
{type:"texte", texte:R`<p>Un voyageur doit visiter des lieux (points du plan) en passant une fois par chacun, avec un trajet le plus court possible. Il y a $(n-1)!$ ordres de visite : impossible de tous les essayer dès que $n$ dépasse une quinzaine.</p>`},
{type:"methode", texte:R`<p>Heuristique gloutonne du <b>plus proche voisin</b> : depuis la position actuelle, on va au lieu non visité le plus proche. On garde dans un dictionnaire <code>deja_vus</code> les lieux déjà visités.</p>`},
{type:"code", code:R`import random as rd
import matplotlib.pyplot as plt

def d2(a, b):              # carré de la distance (suffit pour comparer)
    return (b[0] - a[0])**2 + (b[1] - a[1])**2

def plus_proche(position, deja_vus):
    a_visiter = [lieu for lieu in deja_vus if not deja_vus[lieu]]
    prochain = a_visiter[0]
    for lieu in a_visiter:
        if d2(lieu, position) < d2(prochain, position):
            prochain = lieu
    return prochain

def chemin_glouton(lieux):
    deja_vus = {lieu: False for lieu in lieux}
    position = lieux[0]
    deja_vus[position] = True
    trajet = [position]
    while len(trajet) < len(lieux):
        position = plus_proche(position, deja_vus)
        deja_vus[position] = True
        trajet.append(position)
    return trajet

n, m = 25, 100
lieux = list({(rd.randint(0, m), rd.randint(0, m)) for _ in range(n)})
trajet = chemin_glouton(lieux)
plt.figure(figsize=(5, 5))
plt.plot([p[0] for p in trajet], [p[1] for p in trajet], "b-")
plt.plot([p[0] for p in lieux], [p[1] for p in lieux], "bo")
plt.plot(lieux[0][0], lieux[0][1], "rd", markersize=10)
plt.axis("equal")
plt.title("Trajet du plus proche voisin")
plt.show()`},
{type:"remarque", texte:R`<p>Le trajet obtenu est souvent correct, mais rarement optimal : on voit parfois de longs retours en fin de parcours, quand les lieux restants sont éloignés. Exécutez plusieurs fois pour comparer.</p>`},
]},
{ id:"py9", numero:9, ecg:false, titre:"Traitement d'images", resume:"Une image est une matrice de pixels : couleurs, négatif, sépia, symétries, rotations, gris, photomaton, stéganographie.",
cours:[
{type:"section", titre:"1. Coder une image"},
{type:"def", texte:R`<p>Une image numérique est un tableau de <b>pixels</b> : $n$ lignes, $p$ colonnes. En couleur, chaque pixel est un triplet <code>[R, G, B]</code> (rouge, vert, bleu), chaque composante étant un entier de $0$ à $255$ (un octet). <code>[0, 0, 0]</code> est le noir, <code>[255, 255, 255]</code> le blanc.</p>`},
{type:"code", titre:"Un personnage en 12 × 16 pixels", code:R`import matplotlib.pyplot as plt

b = [255, 255, 255]   # blanc
r = [255, 25, 25]     # rouge
j = [255, 200, 50]    # jaune
k = [100, 100, 0]     # kaki

M = [[b, b, b, r, r, r, r, r, b, b, b, b],
     [b, b, r, r, r, r, r, r, r, r, r, b],
     [b, b, k, k, k, j, j, k, j, b, b, b],
     [b, k, j, k, j, j, j, k, j, j, j, b],
     [b, k, j, k, k, j, j, j, k, j, j, j],
     [b, k, k, j, j, j, j, k, k, k, k, b],
     [b, b, b, j, j, j, j, j, j, j, b, b],
     [b, b, k, k, r, k, k, k, b, b, b, b],
     [b, k, k, k, r, k, k, r, k, k, k, b],
     [k, k, k, k, r, r, r, r, k, k, k, k],
     [j, j, k, r, j, r, r, j, r, k, j, j],
     [j, j, j, r, r, r, r, r, r, j, j, j],
     [j, j, r, r, r, r, r, r, r, r, j, j],
     [b, b, r, r, r, b, b, r, r, r, b, b],
     [b, k, k, k, b, b, b, b, k, k, k, b],
     [k, k, k, k, b, b, b, b, k, k, k, k]]

plt.figure(figsize=(3, 4))
plt.imshow(M, interpolation="nearest")
plt.axis("off")
plt.show()`},
{type:"sous", titre:"Images et tableaux numpy"},
{type:"texte", texte:R`<p>En pratique, on charge une photo avec <code>plt.imread("Etretat.jpg")</code>, qui renvoie un <b>tableau numpy</b> de forme <code>(n, p, 3)</code>. On accède au pixel ligne <code>i</code>, colonne <code>j</code> par <code>image[i, j]</code>, à sa composante verte par <code>image[i, j, 1]</code>. <code>image.shape</code> donne les dimensions, <code>image.copy()</code> une copie.</p><p>Ici, pas de fichier : on fabrique une image de montagne pour servir d'exemple. <b>Exécutez ce bloc en premier.</b></p>`},
{type:"code", titre:"Notre image de travail", code:R`import numpy as np
import matplotlib.pyplot as plt

def paysage(n=90, p=120):
    img = np.zeros((n, p, 3), dtype=np.uint8)
    for i in range(n):
        for j in range(p):
            img[i, j] = [70 + i, 120 + i, 230]                     # ciel en dégradé
            if (i - 18)**2 + (j - 95)**2 < 70:
                img[i, j] = [255, 210, 60]                           # soleil
            h = 25 + abs(j - 55) * 0.9                               # ligne de crête
            if i > h:
                img[i, j] = [235, 240, 250] if i < h + 12 else [90, 110, 140]
            if i > 75:
                img[i, j] = [60, 140, 70]                            # prairie
    return img

def montrer(*images):
    plt.figure(figsize=(3 * len(images), 2.4))
    for k, im in enumerate(images):
        plt.subplot(1, len(images), k + 1)
        plt.imshow(np.array(im, dtype=np.uint8))
        plt.axis("off")
    plt.show()

image = paysage()
print(image.shape, image[0, 0], image[80, 10])
montrer(image)`},

{type:"section", titre:"2. Traitements pixel par pixel"},
{type:"sous", titre:"Garder une seule couleur"},
{type:"methode", texte:R`<p>On parcourt tous les pixels avec deux boucles imbriquées (lignes puis colonnes) et on modifie une copie de l'image, pour ne pas abîmer l'originale.</p>`},
{type:"code", code:R`def rouge(image):
    n, p, q = image.shape
    res = image.copy()
    for i in range(n):
        for j in range(p):
            res[i, j, 1] = 0
            res[i, j, 2] = 0
    return res

def vert(image):
    res = image.copy()
    res[:, :, 0] = 0          # même chose en une ligne, avec numpy
    res[:, :, 2] = 0
    return res

def bleu(image):
    res = image.copy()
    res[:, :, 0] = 0
    res[:, :, 1] = 0
    return res

montrer(rouge(image), vert(image), bleu(image))`},
{type:"sous", titre:"Négatif"},
{type:"texte", texte:R`<p>Chaque composante $c$ est remplacée par $255 - c$.</p>`},
{type:"code", code:R`def negatif(image):
    n, p, q = image.shape
    res = image.copy()
    for i in range(n):
        for j in range(p):
            for c in range(3):
                res[i, j, c] = 255 - image[i, j, c]
    return res

montrer(image, negatif(image))`},
{type:"sous", titre:"Filtre sépia"},
{type:"texte", texte:R`<p>Chaque nouvelle composante est une combinaison linéaire de $R$, $G$, $B$, plafonnée à 255 :</p>$$R'=0{,}393R+0{,}769G+0{,}189B,\quad G'=0{,}349R+0{,}686G+0{,}168B,\quad B'=0{,}272R+0{,}534G+0{,}131B.$$`},
{type:"code", code:R`def sepia(pixel):
    R, G, B = int(pixel[0]), int(pixel[1]), int(pixel[2])
    return [min(255, int(0.393*R + 0.769*G + 0.189*B)),
            min(255, int(0.349*R + 0.686*G + 0.168*B)),
            min(255, int(0.272*R + 0.534*G + 0.131*B))]

def filtre_sepia(image):
    n, p, q = image.shape
    return [[sepia(image[i, j]) for j in range(p)] for i in range(n)]

montrer(image, filtre_sepia(image))`},
{type:"attention", texte:R`<p>Les composantes d'une image numpy sont souvent de type <code>uint8</code> (entiers de 0 à 255) : un calcul qui dépasse 255 « reboucle » ($250 + 10$ donne $4$). D'où la conversion en <code>int</code> avant de calculer.</p>`},
{type:"sous", titre:"Niveaux de gris et contraste"},
{type:"texte", texte:R`<p>La <b>luminance</b> d'un pixel est $0{,}2126R + 0{,}7152G + 0{,}0722B$ (l'œil est plus sensible au vert). On remplace les trois composantes par cette valeur. Pour augmenter le contraste, on écarte les valeurs de la moyenne : $x \mapsto a(x - 0{,}5) + 0{,}5$, ramené dans $[0, 1]$.</p>`},
{type:"code", code:R`def niveauxDeGris(image, a=1):
    n, p, q = image.shape
    res = image.copy()
    for i in range(n):
        for j in range(p):
            R, G, B = image[i, j]
            x = (0.2126*R + 0.7152*G + 0.0722*B) / 256
            x = min(1, max(0, a * (x - 0.5) + 0.5))
            res[i, j] = [int(255*x)] * 3
    return res

montrer(niveauxDeGris(image), niveauxDeGris(image, 3))`},

{type:"section", titre:"3. Transformations géométriques"},
{type:"texte", texte:R`<p>On ne change plus la couleur des pixels mais leur position. Pour une image $n\times p$ :</p><ul><li><b>symétrie verticale</b> : le pixel $(i, j)$ vient de $(i, p-1-j)$ ;</li><li><b>rotation de 180°</b> : il vient de $(n-1-i, p-1-j)$ ;</li><li><b>rotation de 90°</b> (sens direct) : l'image devient $p\times n$, et le pixel $(i, j)$ vient de $(j, p-1-i)$.</li></ul>`},
{type:"code", code:R`def symetrieVerticale(image):
    n, p, q = image.shape
    return [[image[i, p-1-j] for j in range(p)] for i in range(n)]

def rotation90(image):
    n, p, q = image.shape
    return [[image[j, p-1-i] for j in range(n)] for i in range(p)]

def rotation180(image):
    n, p, q = image.shape
    return [[image[n-1-i, p-1-j] for j in range(p)] for i in range(n)]

def rotation270(image):
    n, p, q = image.shape
    return [[image[n-1-j, i] for j in range(n)] for i in range(p)]

montrer(symetrieVerticale(image), rotation90(image), rotation180(image), rotation270(image))`},
{type:"sous", titre:"Le photomaton"},
{type:"texte", texte:R`<p>On découpe l'image en blocs de $2\times2$ pixels et on envoie le pixel en haut à gauche de chaque bloc dans le quart supérieur gauche, celui en haut à droite dans le quart supérieur droit, etc. On obtient quatre copies réduites. En itérant, l'image se brouille… puis réapparaît !</p>`},
{type:"code", code:R`def photomaton(image):
    n, p, q = image.shape
    nn, pp = n // 2, p // 2
    res = image.copy()
    for i in range(nn):
        for j in range(pp):
            res[i, j] = image[2*i, 2*j]
            res[i, pp+j] = image[2*i, 2*j+1]
            res[nn+i, j] = image[2*i+1, 2*j]
            res[nn+i, pp+j] = image[2*i+1, 2*j+1]
    return res

carre = paysage(64, 64)
etapes = [carre]
for k in range(6):
    etapes.append(photomaton(etapes[-1]))
montrer(*etapes)`},
{type:"remarque", texte:R`<p>Pour une image $2^k\times2^k$, on retrouve l'image de départ après $k$ itérations ($k = 6$ pour $64\times64$).</p>`},

{type:"section", titre:"4. Stéganographie"},
{type:"texte", texte:R`<p>La <b>stéganographie</b> cache une image dans une autre. Une composante $c \in [\![0, 255]\!]$ s'écrit $c = 16q + r$ avec $q$ et $r$ entre $0$ et $15$. Les 4 bits de poids fort ($q$) portent l'essentiel de la couleur, les 4 bits de poids faible ($r$) presque rien.</p><ul><li><b>Dissimuler</b> l'image 2 dans l'image 1 : on garde les 4 bits forts de l'image 1 et on met les 4 bits forts de l'image 2 à la place des bits faibles : $16\lfloor c_1/16\rfloor + \lfloor c_2/16\rfloor$.</li><li><b>Révéler</b> : on récupère les bits faibles et on les remet en position forte : $16\,(c \bmod 16)$.</li></ul>`},
{type:"code", code:R`def steganoDissimulation(image1, image2):
    return (image1 // 16) * 16 + image2 // 16

def steganoRevelation(image):
    return (image % 16) * 16

secret = negatif(image[::-1, ::-1].copy())     # une autre image de même taille
cachee = steganoDissimulation(image, secret)
montrer(image, cachee, steganoRevelation(cachee))`},
{type:"remarque", texte:R`<p>L'image du milieu contient le secret mais semble identique à l'originale : l'œil ne perçoit pas les modifications des bits faibles. Ici les calculs s'appliquent à tout le tableau numpy d'un coup, sans boucle.</p>`},
]},
{ id:"py10", numero:10, ecg:false, titre:"Correction et complexité", resume:"Spécifier un algorithme, prouver qu'il termine et qu'il est correct (variants, invariants), mesurer son coût.",
cours:[
{type:"section", titre:"1. Spécifier un algorithme"},
{type:"def", titre:"Définition (signature, spécification)", texte:R`<p>La <b>signature</b> d'une fonction : son nom, ses arguments et leur type, ses sorties et leur type.</p><p><b>Spécifier</b> une fonction, c'est donner :</p><ul><li>sa signature ;</li><li>ses <b>pré-conditions</b> : ce que les arguments doivent vérifier ;</li><li>ses <b>post-conditions</b> : ce que vérifient les valeurs renvoyées.</li></ul>`},
{type:"remarque", texte:R`<p>La spécification ne dit rien du déroulement : c'est la commande d'un client. « Programmez une fonction qui prend deux entiers $a &gt; b \geqslant 1$ et renvoie leur PGCD » se traduit par : signature <code>(a: int, b: int) -> (d: int)</code> ; pré-conditions $a &gt; b$ et $b \geqslant 1$ ; post-condition : $d$ est le PGCD de $a$ et $b$.</p>`},
{type:"sous", titre:"Vérifier les pré-conditions : assert"},
{type:"texte", texte:R`<p>On écrit la spécification dans une chaîne de documentation (entre triples guillemets), et on vérifie les pré-conditions avec <code>assert</code> : si une condition est fausse, le programme s'arrête avec une <code>AssertionError</code> au lieu de produire un résultat faux.</p>`},
{type:"code", code:R`import math

def racines(a, b, c):
    """
    signature : (a: int, b: int, c: int) -> (x1: float, x2: float)
    pré-condition : b**2 - 4*a*c > 0
    post-condition : x1 et x2 sont les racines de aX**2 + bX + c
    """
    assert isinstance(a, int) and isinstance(b, int) and isinstance(c, int)
    assert b**2 - 4*a*c > 0, "discriminant négatif ou nul"
    delta = math.sqrt(b**2 - 4*a*c)
    return (-b + delta) / (2*a), (-b - delta) / (2*a)

print(racines(1, -3, 2))
print(racines(1, 1, 1))`},

{type:"section", titre:"2. Correction d'un algorithme"},
{type:"sous", titre:"Problématique"},
{type:"texte", texte:R`<p>Un programme peut sembler juste et se tromper, ou ne jamais s'arrêter. Exemples piégés : que valent <code>S</code> et <code>P</code> ci-dessous ? Le produit contient le facteur $k = 0$…</p>`},
{type:"code", code:R`n = 5
S, P = 0, 1
for k in range(n):
    S = S + k
    P = P * k
print(S, P)        # P vaut 0 : on voulait sans doute range(1, n+1)`},
{type:"def", titre:"Définitions", texte:R`<ul><li>Un algorithme est <b>partiellement correct</b> s'il respecte sa spécification <i>sous l'hypothèse qu'il se termine</i>.</li><li>Il est <b>correct</b> s'il se termine et respecte sa spécification.</li></ul><p style="text-align:center"><b>partiellement correct + terminaison = correct</b></p>`},
{type:"def", titre:"Variant de boucle", texte:R`<p>Un <b>variant</b> est une quantité entière, fonction des variables de l'algorithme, positive tant que la condition de la boucle est vraie, et qui <b>décroît strictement</b> à chaque tour.</p>`},
{type:"prop", texte:R`<p>Si une boucle admet un variant, elle se termine (une suite d'entiers naturels strictement décroissante est finie).</p>`},
{type:"def", titre:"Invariant de boucle", texte:R`<p>Un <b>invariant</b> est une propriété des variables, vraie avant la boucle et qui reste vraie après chaque tour. En sortie de boucle, l'invariant joint à la négation de la condition donne le résultat voulu.</p>`},
{type:"methode", texte:R`<p>C'est une récurrence : on montre que l'invariant est vrai au départ (initialisation) et que s'il est vrai avant un tour, il l'est après (hérédité).</p>`},
{type:"sous", titre:"Exemple 1 : l'algorithme d'Euclide"},
{type:"code", code:R`def Euclide(a, b):
    if a < b:
        return Euclide(b, a)
    d, r = a, b
    while r > 0:
        d, r = r, d % r
    return d

print(Euclide(252, 198), Euclide(17, 5))`},
{type:"texte", texte:R`<ul><li><b>Variant</b> : <code>r</code>. Comme <code>d % r</code> est strictement inférieur à <code>r</code>, <code>r</code> décroît strictement et reste positif : la boucle termine.</li><li><b>Invariant</b> : $\operatorname{pgcd}(d, r) = \operatorname{pgcd}(a, b)$, car $\operatorname{pgcd}(d, r) = \operatorname{pgcd}(r, d \bmod r)$. En sortie, $r = 0$ et $\operatorname{pgcd}(d, 0) = d$ : la fonction renvoie bien $\operatorname{pgcd}(a, b)$.</li></ul>`},
{type:"sous", titre:"Exemple 2 : le tri fusion"},
{type:"texte", texte:R`<p>Pour une fonction récursive, la terminaison vient de ce que la taille de l'argument diminue strictement à chaque appel jusqu'au cas de base (liste de longueur $\leqslant 1$). La correction se prouve par récurrence forte sur la longueur : si les deux moitiés sont correctement triées et si <code>fusion</code> est correcte, le résultat est trié.</p>`},
{type:"sous", titre:"Exemple 3 : divisibilité par 7"},
{type:"texte", texte:R`<p>Tant que $N \geqslant 100$, on écrit $N = 10q + u$ ($u$ chiffre des unités) et on remplace $N$ par $q - 2u$. Le nombre de départ est multiple de 7 si et seulement si le résultat l'est.</p>`},
{type:"code", code:R`def divisibleParSept(n):
    N = n
    while N >= 100:
        q, u = N // 10, N % 10
        N = q - 2 * u
    return N

for n in [343, 1001, 2024, 123456]:
    print(n, divisibleParSept(n), n % 7 == 0)`},
{type:"texte", texte:R`<ul><li><b>Variant</b> : $N$, qui décroît strictement (car $q - 2u \leqslant q &lt; N$).</li><li><b>Invariant</b> : « $7 \mid N \iff 7 \mid n$ ». Il suffit de voir que $7 \mid N \iff 7 \mid (q - 2u)$. Or $N = 10q + u \equiv 3q + u \pmod 7$, et $3(q - 2u) = 3q - 6u \equiv 3q + u \pmod 7$. Comme 3 est inversible modulo 7, $7 \mid (3q+u) \iff 7 \mid (q - 2u)$.</li></ul>`},
{type:"sous", titre:"Exemple 4 : la suite de Syracuse"},
{type:"texte", texte:R`<p>On part de $u_0 &gt; 0$ ; si $u$ est pair on le divise par 2, sinon on le remplace par $3u + 1$. On compte les étapes pour atteindre 1.</p>`},
{type:"code", code:R`def Syracuse(u0):
    """signature : (u0: int) -> (i: int) ; pré-condition : u0 > 0"""
    assert u0 > 0
    u, i = u0, 0
    while u != 1:
        if u % 2 == 0:
            u = u // 2
        else:
            u = 3 * u + 1
        i += 1
    return i

print([Syracuse(k) for k in range(1, 16)], Syracuse(27))`},
{type:"attention", texte:R`<p>Personne ne sait démontrer que cette boucle se termine pour tout $u_0$ : c'est la célèbre <b>conjecture de Syracuse</b>, vérifiée sur ordinateur jusqu'à des valeurs immenses. On ne connaît pas de variant !</p>`},

{type:"section", titre:"3. Complexité"},
{type:"sous", titre:"Aux frontières des possibilités de la machine"},
{type:"texte", texte:R`<p>Un ordinateur a une mémoire finie, effectue un nombre fini d'opérations par seconde (de l'ordre de $10^9$), et calcule avec une précision limitée. Un algorithme correct peut donc être inutilisable s'il demande trop de temps ou de mémoire.</p>`},
{type:"code", titre:"Précision limitée : à partir de quand 10**(-i) vaut-il 0 ?", code:R`i = 0
while 10**(-i) != 0:
    i += 1
print(i)`},
{type:"sous", titre:"Définitions"},
{type:"def", texte:R`<p>On choisit des <b>opérations fondamentales</b> (comparaisons, affectations, multiplications…). Le <b>coût</b> de l'algorithme sur une donnée $d$ est le nombre d'opérations fondamentales effectuées. Pour les données de taille $n$ :</p><ul><li>la <b>complexité dans le pire des cas</b> est le coût maximal ;</li><li>la <b>complexité dans le meilleur des cas</b> est le coût minimal ;</li><li>la <b>complexité moyenne</b> est la moyenne des coûts.</li></ul>`},
{type:"prop", titre:"Relations de comparaison", texte:R`<ul><li>$u_n = O(v_n)$ : $(u_n)$ est majorée à une constante près par $(v_n)$ ;</li><li>$u_n = \Theta(v_n)$ : $u_n = O(v_n)$ et $v_n = O(u_n)$, même ordre de grandeur.</li></ul><p>Échelle usuelle : $\Theta(1)$ (constant) $\ll \Theta(\ln n)$ (logarithmique) $\ll \Theta(n)$ (linéaire) $\ll \Theta(n\ln n) \ll \Theta(n^2)$ (quadratique) $\ll \Theta(2^n)$ (exponentiel).</p>`},
{type:"sous", titre:"Premiers exemples"},
{type:"code", code:R`def divEuclidienne(a, b):     # Theta(a/b) tours de boucle
    q, r = 0, a
    while r >= b:
        q = q + 1
        r = a - q * b
    return q, r

def rechercheListeNonTriee(L, x):   # pire cas : n comparaisons
    for i in range(len(L)):
        if L[i] == x:
            return i

def maxi(L):                    # toujours n-1 comparaisons
    M = L[0]
    for i in range(1, len(L)):
        if L[i] > M:
            M = L[i]
    return M

def puissanceDeux(n):           # p tel que 2**p <= n < 2**(p+1) : Theta(ln n)
    p, d = 0, 1
    while d <= n:
        d, p = 2 * d, p + 1
    return p - 1

print(divEuclidienne(47, 5), rechercheListeNonTriee([4, 8, 1], 1), maxi([4, 8, 1]), puissanceDeux(1000))`},
{type:"remarque", texte:R`<p><code>rechercheListeNonTriee</code> : 1 comparaison dans le meilleur cas ($x$ en tête), $n$ dans le pire (absent ou en dernier). Pour <code>puissanceDeux</code>, <code>d</code> double à chaque tour : environ $\log_2 n$ tours.</p>`},
{type:"sous", titre:"Le tri par insertion"},
{type:"code", code:R`def tri_insertion(L):
    comparaisons = 0
    for i in range(1, len(L)):
        aux = L[i]
        j = i
        while j > 0:
            comparaisons += 1
            if L[j-1] <= aux:
                break
            L[j] = L[j-1]
            j = j - 1
        L[j] = aux
    return comparaisons

n = 100
print("liste triée :", tri_insertion(list(range(n))))
print("liste à l'envers :", tri_insertion(list(range(n, 0, -1))), "= n(n-1)/2 =", n*(n-1)//2)`},
{type:"prop", texte:R`<p>Tri par insertion : $n - 1$ comparaisons dans le meilleur cas (liste déjà triée), donc $\Theta(n)$ ; $\frac{n(n-1)}{2}$ dans le pire cas (liste triée à l'envers), donc $\Theta(n^2)$. Le tri par sélection, lui, fait toujours $\frac{n(n-1)}{2}$ comparaisons.</p>`},
{type:"sous", titre:"La recherche dichotomique"},
{type:"code", code:R`def recherche_dichotomique(L, x):
    deb, fin = 0, len(L) - 1
    while fin - deb >= 0:
        m = (deb + fin) // 2
        if L[m] == x:
            return m
        elif L[m] > x:
            fin = m - 1
        else:
            deb = m + 1
    return None

L = list(range(0, 200, 3))
print(recherche_dichotomique(L, 99), recherche_dichotomique(L, 100))`},
{type:"texte", texte:R`<ul><li><b>Variant</b> : $\texttt{fin} - \texttt{deb}$, qui décroît strictement à chaque tour (on retire au moins l'indice $m$).</li><li><b>Invariant</b> : si $x$ est dans la liste, il est dans <code>L[deb..fin]</code>. C'est vrai au départ, et chaque cas ($L[m] &gt; x$ ou $L[m] &lt; x$) conserve cette propriété car la liste est triée.</li><li><b>Complexité</b> : la longueur de la zone de recherche est au moins divisée par 2 à chaque tour, donc il y a au plus environ $\log_2 n + 1$ tours : $\Theta(\ln n)$ dans le pire cas, contre $\Theta(n)$ pour une recherche séquentielle.</li></ul>`},
]},
{ id:"py11", numero:11, ecg:true, titre:"Les graphes", resume:"Vocabulaire, matrice d'adjacence, chaînes, connexité, cycles eulériens, piles et files, parcours, Dijkstra.",
cours:[
{type:"section", titre:"1. Graphes non orientés"},
{type:"sous", titre:"Définition"},
{type:"def", texte:R`<p>Soit $S$ un ensemble fini. Un <b>graphe</b> est un couple $\mathcal G = (S, \mathcal A)$ où $S$ est l'ensemble des <b>sommets</b> et $\mathcal A$ un ensemble de parties à deux éléments $\{s, t\}$ de $S$, appelées <b>arêtes</b>. L'arête $\{s, t\}$ se note aussi $s - t$.</p><ul><li>L'<b>ordre</b> du graphe est son nombre de sommets $\operatorname{Card}(S)$.</li><li>Deux sommets reliés par une arête sont <b>adjacents</b> (ou voisins).</li><li>Le <b>degré</b> $d(s)$ d'un sommet est le nombre d'arêtes incidentes à $s$.</li></ul>`},
{type:"texte", texte:R`<p>Dans tout le chapitre, on utilise ce graphe d'ordre 6 (les nombres sur les arêtes ne serviront qu'à la fin, pour les plus courts chemins).</p>
<svg viewBox="0 0 300 125" style="width:100%;max-width:340px;display:block;margin:6px auto" role="img" aria-label="Graphe à 6 sommets numérotés de 0 à 5">
<g stroke="#5A82BF" stroke-width="2.5"><line x1="30" y1="62" x2="110" y2="20"/><line x1="30" y1="62" x2="110" y2="104"/><line x1="110" y1="20" x2="110" y2="104"/><line x1="110" y1="20" x2="190" y2="20"/><line x1="110" y1="104" x2="190" y2="20"/><line x1="110" y1="104" x2="190" y2="104"/><line x1="190" y1="20" x2="190" y2="104"/><line x1="190" y1="20" x2="270" y2="62"/><line x1="190" y1="104" x2="270" y2="62"/></g>
<g font-size="11" font-weight="700" fill="#E8541C" font-family="Public Sans,sans-serif" text-anchor="middle"><text x="64" y="34">3</text><text x="64" y="98">1</text><text x="101" y="66">1</text><text x="150" y="13">2</text><text x="142" y="56">3</text><text x="150" y="119">5</text><text x="200" y="66">1</text><text x="236" y="34">3</text><text x="236" y="98">1</text></g>
<g fill="#fff" stroke="#22418F" stroke-width="2.5"><circle cx="30" cy="62" r="13"/><circle cx="110" cy="20" r="13"/><circle cx="110" cy="104" r="13"/><circle cx="190" cy="20" r="13"/><circle cx="190" cy="104" r="13"/><circle cx="270" cy="62" r="13"/></g>
<g font-size="13" font-weight="800" fill="#22418F" font-family="Public Sans,sans-serif" text-anchor="middle"><text x="30" y="67">0</text><text x="110" y="25">1</text><text x="110" y="109">2</text><text x="190" y="25">3</text><text x="190" y="109">4</text><text x="270" y="67">5</text></g></svg>
<p>Les degrés sont $d(0)=2$, $d(1)=3$, $d(2)=4$, $d(3)=4$, $d(4)=3$, $d(5)=2$ : leur somme vaut $18$, le double du nombre d'arêtes ($9$). C'est général : chaque arête compte pour deux sommets, donc $\sum_{s\in S} d(s) = 2\operatorname{Card}(\mathcal A)$ (lemme des poignées de main).</p>`},
{type:"sous", titre:"Graphe complet"},
{type:"def", texte:R`<p>Un graphe est <b>complet</b> si ses sommets sont deux à deux adjacents.</p>`},
{type:"prop", texte:R`<p>Un graphe complet d'ordre $n$ possède exactement $\dbinom n2 = \dfrac{n(n-1)}2$ arêtes.</p>`},
{type:"remarque", texte:R`<p>Preuve directe : les arêtes sont toutes les parties à deux éléments de $S$. Autre preuve, par récurrence : ajouter un $(n+1)$-ième sommet relié aux $n$ autres ajoute $n$ arêtes, et $\frac{n(n-1)}2 + n = \frac{(n+1)n}2$.</p>`},
{type:"sous", titre:"Représentations en Python"},
{type:"def", titre:"Matrice d'adjacence", texte:R`<p>On numérote les sommets de $0$ à $n-1$. La <b>matrice d'adjacence</b> est la matrice $M$ de taille $n\times n$ telle que $M_{i,j} = 1$ si $i$ et $j$ sont adjacents, $0$ sinon. Pour un graphe non orienté, elle est <b>symétrique</b>.</p>`},
{type:"texte", texte:R`<p>On utilise aussi les <b>listes d'adjacence</b> : <code>L_adj[i]</code> est la liste des voisins du sommet <code>i</code>. On passe de l'une à l'autre en une ligne.</p>`},
{type:"code", code:R`M = [[0, 1, 1, 0, 0, 0],
     [1, 0, 1, 1, 0, 0],
     [1, 1, 0, 1, 1, 0],
     [0, 1, 1, 0, 1, 1],
     [0, 0, 1, 1, 0, 1],
     [0, 0, 0, 1, 1, 0]]

L_adj = [[j for j in range(len(L)) if L[j] == 1] for L in M]
print(L_adj)

degres = [sum(ligne) for ligne in M]
print("degrés :", degres, " somme :", sum(degres))`},

{type:"section", titre:"2. Accessibilité"},
{type:"sous", titre:"Chaînes"},
{type:"def", texte:R`<p>Une <b>chaîne</b> de longueur $m$ est une suite de sommets $(s_0, \dots, s_m)$ telle que $s_i - s_{i+1}$ est une arête pour tout $i \in [\![0, m-1]\!]$. Sa <b>longueur</b> est son nombre d'arêtes ($m$, pour $m+1$ sommets). $s_0$ est la <b>source</b>, $s_m$ le <b>but</b>. Une chaîne de longueur 0 est un sommet seul.</p>`},
{type:"sous", titre:"Lien avec la matrice d'adjacence"},
{type:"prop", titre:"Théorème", texte:R`<p>Soit $M$ la matrice d'adjacence d'un graphe et $p \in \mathbb N$. Le coefficient $(i, j)$ de $M^p$ est égal au nombre de chaînes de longueur $p$ reliant le sommet $i$ au sommet $j$.</p>`},
{type:"remarque", texte:R`<p>Preuve par récurrence sur $p$ : une chaîne de longueur $p+1$ de $i$ à $j$ est une chaîne de longueur $p$ de $i$ à un voisin $k$ de $j$, suivie de l'arête $k - j$. D'où $c_{i,j}(p+1) = \sum_k c_{i,k}(p)\,M_{k,j}$, qui est la formule du produit matriciel $M^p \times M$.</p>`},
{type:"code", code:R`import numpy as np

M = np.array([[0, 1, 1, 0, 0, 0],
              [1, 0, 1, 1, 0, 0],
              [1, 1, 0, 1, 1, 0],
              [0, 1, 1, 0, 1, 1],
              [0, 0, 1, 1, 0, 1],
              [0, 0, 0, 1, 1, 0]])

M3 = np.linalg.matrix_power(M, 3)
print(M3)
print("chaînes de longueur 3 de 0 à 5 :", M3[0, 5])`},
{type:"sous", titre:"Graphe connexe"},
{type:"def", texte:R`<p>Un graphe est <b>connexe</b> s'il existe une chaîne entre tout couple de sommets : chaque sommet est accessible depuis tous les autres.</p>`},
{type:"remarque", texte:R`<p>Avec la matrice d'adjacence : un graphe d'ordre $n$ est connexe si et seulement si tous les coefficients de $I_n + M + M^2 + \dots + M^{n-1}$ sont strictement positifs (une chaîne entre deux sommets peut toujours être choisie de longueur au plus $n - 1$).</p>`},

{type:"section", titre:"3. Parcours en profondeur"},
{type:"methode", texte:R`<p><b>Explorer</b> un sommet $x$ : s'il n'est pas encore visité, on le marque, puis on explore chacun de ses voisins. On s'enfonce le plus loin possible avant de revenir en arrière : c'est le <b>parcours en profondeur</b>. On garde une liste de booléens <code>visite</code>.</p>`},
{type:"code", code:R`L_adj = [[1, 2], [0, 2, 3], [0, 1, 3, 4], [1, 2, 4, 5], [2, 3, 5], [3, 4]]

def profondeur_rec(L_adj, visite, x, ordre):
    if not visite[x]:
        visite[x] = True
        ordre.append(x)
        for y in L_adj[x]:
            profondeur_rec(L_adj, visite, y, ordre)

def profondeur(L_adj, s):
    visite = [False] * len(L_adj)
    ordre = []
    profondeur_rec(L_adj, visite, s, ordre)
    return ordre

print("ordre de visite depuis 0 :", profondeur(L_adj, 0))
print("ordre de visite depuis 5 :", profondeur(L_adj, 5))`},
{type:"sous", titre:"Premières applications"},
{type:"code", code:R`def existe_chemin(L_adj, x, y):
    visite = [False] * len(L_adj)
    profondeur_rec(L_adj, visite, x, [])
    return visite[y]

def est_connexe(L_adj):
    visite = [False] * len(L_adj)
    profondeur_rec(L_adj, visite, 0, [])
    return all(visite)

G2 = [[1], [0], [3], [2]]          # deux morceaux : 0-1 et 2-3
print(existe_chemin(L_adj, 0, 5), est_connexe(L_adj))
print(existe_chemin(G2, 0, 3), est_connexe(G2))`},
{type:"remarque", texte:R`<p>Pour visiter <b>tous</b> les sommets, même dans un graphe non connexe, on relance l'exploration depuis chaque sommet non encore visité. Le nombre de relances est le nombre de <b>composantes connexes</b>.</p>`},

{type:"section", titre:"4. Cycles"},
{type:"def", texte:R`<ul><li>Un <b>cycle</b> est une chaîne qui comporte au moins une arête, n'emprunte pas deux fois la même arête, et revient à son sommet de départ. Un graphe sans cycle est <b>acyclique</b>.</li><li>Une <b>chaîne eulérienne</b> passe par toutes les arêtes, chacune exactement une fois. Un <b>cycle eulérien</b> est une chaîne eulérienne qui revient au point de départ ; un graphe qui en possède un est dit <b>eulérien</b>.</li></ul>`},
{type:"prop", texte:R`<p>Si tous les sommets d'un graphe sont de degré au moins 2, le graphe possède au moins un cycle.</p>`},
{type:"prop", titre:"Théorème d'Euler", texte:R`<p>Soit $\mathcal G$ un graphe connexe, sans boucle. Alors</p><p style="text-align:center">$\mathcal G$ est eulérien $\iff$ tous ses sommets sont de degré pair.</p><p>De plus, $\mathcal G$ possède une chaîne eulérienne (non fermée) si et seulement si il a exactement deux sommets de degré impair, qui sont alors les extrémités de la chaîne.</p>`},
{type:"exemple", titre:"Les ponts de Königsberg", texte:R`<p>Au XVIII<sup>e</sup> siècle, les habitants de Königsberg se demandaient s'il est possible de se promener en traversant chacun des 7 ponts de la ville exactement une fois. En représentant les 4 quartiers par des sommets et les ponts par des arêtes, les degrés sont $5, 3, 3, 3$ : quatre sommets de degré impair, donc c'est impossible (Euler, 1736). Notre graphe exemple a deux sommets de degré impair (1 et 4) : il possède une chaîne eulérienne de 1 à 4, mais pas de cycle eulérien.</p>`},
{type:"code", code:R`def degres_impairs(L_adj):
    return [s for s in range(len(L_adj)) if len(L_adj[s]) % 2 == 1]

def est_eulerien(L_adj):
    return est_connexe(L_adj) and degres_impairs(L_adj) == []

print(degres_impairs(L_adj), est_eulerien(L_adj))`},
{type:"remarque", texte:R`<p>Ce bloc utilise <code>est_connexe</code> défini plus haut : exécutez d'abord les blocs du parcours en profondeur.</p>`},

{type:"section", titre:"5. Graphes orientés"},
{type:"def", texte:R`<p>Un <b>graphe orienté</b> est un couple $(S, \mathcal A)$ où $\mathcal A \subset S\times S$ est un ensemble de couples $(s, t)$ appelés <b>arcs</b>, notés $s \to t$. On parle de chemins (au lieu de chaînes) et de circuits (au lieu de cycles). Sa matrice d'adjacence n'est plus forcément symétrique, et le théorème sur $M^p$ reste vrai en comptant les chemins.</p>`},

{type:"section", titre:"6. Piles et files"},
{type:"sous", titre:"Pile"},
{type:"def", texte:R`<p>Une <b>pile</b> suit le principe « dernier arrivé, premier servi » (LIFO, <i>Last In First Out</i>), comme une pile d'assiettes. En Python, une liste fait l'affaire : <code>pile.append(x)</code> empile, <code>pile.pop()</code> dépile le dernier élément.</p>`},
{type:"sous", titre:"File"},
{type:"def", texte:R`<p>Une <b>file</b> suit le principe « premier arrivé, premier servi » (FIFO, <i>First In First Out</i>), comme une file d'attente. On utilise <code>collections.deque</code> : <code>file.append(x)</code> ajoute à la fin, <code>file.popleft()</code> retire le premier, en temps constant.</p>`},
{type:"code", code:R`import collections

pile = []
for x in [1, 2, 3]:
    pile.append(x)
print("pile :", pile.pop(), pile.pop(), pile.pop())

file = collections.deque()
for x in [1, 2, 3]:
    file.append(x)
print("file :", file.popleft(), file.popleft(), file.popleft())`},
{type:"remarque", texte:R`<p>Avec une liste, <code>L.pop(0)</code> retire aussi le premier élément, mais il faut décaler tous les autres : coût proportionnel à la longueur. D'où <code>deque</code>.</p>`},
{type:"sous", titre:"File de priorité"},
{type:"def", texte:R`<p>Dans une <b>file de priorité</b>, chaque élément a une priorité, et on retire toujours l'élément le plus prioritaire, comme dans une liste de tâches classées par importance. C'est la structure naturelle de l'algorithme de Dijkstra.</p>`},

{type:"section", titre:"7. Parcours itératifs"},
{type:"sous", titre:"Parcours en profondeur avec une pile"},
{type:"code", code:R`L_adj = [[1, 2], [0, 2, 3], [0, 1, 3, 4], [1, 2, 4, 5], [2, 3, 5], [3, 4]]

def profondeur_iter(s, L_adj):
    visite = [False] * len(L_adj)
    ordre = []
    pile = [s]
    while len(pile) != 0:
        x = pile.pop()
        if not visite[x]:
            visite[x] = True
            ordre.append(x)
            for y in L_adj[x]:
                pile.append(y)
    return ordre

print(profondeur_iter(0, L_adj))`},
{type:"sous", titre:"Parcours en largeur avec une file"},
{type:"methode", texte:R`<p>En remplaçant la pile par une file, on visite d'abord tous les voisins du départ, puis les voisins des voisins, etc. : le <b>parcours en largeur</b> visite les sommets par distance croissante au départ. Il donne donc le nombre minimal d'arêtes pour atteindre chaque sommet.</p>`},
{type:"code", code:R`import collections

def largeur(L_adj, s):
    dist = [None] * len(L_adj)      # None : pas encore atteint
    dist[s] = 0
    ordre = []
    file = collections.deque([s])
    while len(file) != 0:
        x = file.popleft()
        ordre.append(x)
        for y in L_adj[x]:
            if dist[y] is None:
                dist[y] = dist[x] + 1
                file.append(y)
    return ordre, dist

print(largeur(L_adj, 0))`},

{type:"section", titre:"8. Plus courts chemins : Dijkstra"},
{type:"sous", titre:"Objectif"},
{type:"def", texte:R`<p>Un graphe est <b>pondéré</b> si chaque arête porte un poids positif (une distance, une durée…). La <b>matrice des poids</b> $G$ a pour coefficient $g_{i,j}$ le poids de l'arête $i - j$ si elle existe, $+\infty$ sinon (et $0$ sur la diagonale). La longueur d'un chemin est la somme des poids de ses arêtes.</p>`},
{type:"texte", texte:R`<p>L'algorithme de Dijkstra calcule, depuis un sommet de départ $s$, la longueur $\delta(t)$ d'un plus court chemin vers chaque sommet $t$. Les poids doivent être positifs.</p>`},
{type:"sous", titre:"Principe"},
{type:"methode", texte:R`<ul><li>On maintient un tableau <code>d</code> d'estimations : $d[s] = 0$, $d[t] = +\infty$ ailleurs.</li><li>À chaque étape, on <b>sélectionne</b> le sommet $u$ non encore traité dont l'estimation $d[u]$ est la plus petite : elle est alors définitive, $d[u] = \delta(u)$.</li><li>On <b>relâche</b> les arêtes partant de $u$ : pour chaque voisin $v$ non traité, si $d[u] + g_{u,v} &lt; d[v]$, on remplace $d[v]$ par $d[u] + g_{u,v}$ (passer par $u$ est plus court) et on note que le prédécesseur de $v$ est $u$.</li><li>On s'arrête quand tous les sommets sont traités.</li></ul>`},
{type:"sous", titre:"Implémentation"},
{type:"code", code:R`Inf = float("inf")
G = [[0,   3,   1,   Inf, Inf, Inf],
     [3,   0,   1,   2,   Inf, Inf],
     [1,   1,   0,   3,   5,   Inf],
     [Inf, 2,   3,   0,   1,   3  ],
     [Inf, Inf, 5,   1,   0,   1  ],
     [Inf, Inf, Inf, 3,   1,   0  ]]

def Dijkstra(G, depart):
    n = len(G)
    d = [Inf] * n
    pred = [None] * n
    traite = [False] * n
    d[depart] = 0
    for etape in range(n):
        # sélection du sommet non traité le plus proche
        u, mini = None, Inf
        for k in range(n):
            if not traite[k] and d[k] < mini:
                u, mini = k, d[k]
        if u is None:          # sommets restants inaccessibles
            break
        traite[u] = True
        # relâchement des arêtes issues de u
        for v in range(n):
            if not traite[v] and d[u] + G[u][v] < d[v]:
                d[v] = d[u] + G[u][v]
                pred[v] = u
    return d, pred

def chemin(pred, t):
    c = [t]
    while pred[c[-1]] is not None:
        c.append(pred[c[-1]])
    return c[::-1]

d, pred = Dijkstra(G, 0)
print("distances depuis 0 :", d)
for t in range(6):
    print("vers", t, ":", chemin(pred, t))`},
{type:"remarque", texte:R`<p>Pour trouver le plus court chemin de 0 à 5, on suit les prédécesseurs depuis 5 en remontant jusqu'à 0. Ici : $0 \to 2 \to 3 \to 4 \to 5$, de longueur $1+3+1+1 = 6$. Un plus court chemin n'est pas toujours unique : $0 \to 2 \to 1 \to 3 \to 4 \to 5$ a la même longueur.</p>`},
{type:"sous", titre:"Correction et complexité"},
{type:"prop", texte:R`<ul><li><b>Correction</b> : invariant « pour tout sommet traité $u$, $d[u] = \delta(u)$ ». Quand on sélectionne le sommet non traité $u$ de plus petite estimation, tout autre chemin vers $u$ sort de la zone traitée par un sommet d'estimation au moins $d[u]$, puis ne fait que s'allonger (poids positifs) : $d[u]$ est bien la distance minimale.</li><li><b>Complexité</b> : $n$ étapes, chacune parcourant les $n$ sommets pour la sélection puis pour le relâchement : $\Theta(n^2)$ avec une matrice des poids. Une file de priorité permet de faire mieux sur les graphes avec peu d'arêtes.</li></ul>`},
]},
{ id:"py12", numero:12, ecg:false, titre:"Représentation des nombres", resume:"Bases 2, 10, 16, complément à deux, entiers multi-précision, flottants et leurs pièges.",
cours:[
{type:"section", titre:"1. Représentation des entiers"},
{type:"sous", titre:"Écriture en base B"},
{type:"prop", texte:R`<p>Soit $B \geqslant 2$. Tout entier naturel $N$ s'écrit de manière unique $N = \sum_{k=0}^{p} a_k B^k$ avec des <b>chiffres</b> $a_k \in [\![0, B-1]\!]$ et $a_p \neq 0$ (si $N \neq 0$). On note $N = \overline{a_p \cdots a_1 a_0}^{\,B}$.</p><ul><li>base 10 : décimal ;</li><li>base 2 : binaire, chiffres 0 et 1 (les <b>bits</b>) ;</li><li>base 16 : hexadécimal, chiffres $0,\dots,9,A,\dots,F$.</li></ul>`},
{type:"exemple", texte:R`<p>$\overline{1011}^{\,2} = 8 + 2 + 1 = 11$ et $\overline{2A}^{\,16} = 2\times16 + 10 = 42$.</p>`},
{type:"methode", titre:"Obtenir les chiffres", texte:R`<p>Le chiffre des unités $a_0$ est le reste de la division euclidienne de $N$ par $B$, et le quotient $\overline{a_p\cdots a_1}^{\,B}$ donne les chiffres suivants. On divise donc par $B$ jusqu'à obtenir $0$.</p>`},
{type:"code", code:R`def chiffres(N, B):
    # liste [a_0, a_1, ..., a_p] des chiffres de N en base B
    if N == 0:
        return [0]
    L = []
    while N > 0:
        L.append(N % B)
        N = N // B
    return L

def valeur(L, B):            # réciproque, par la méthode de Horner
    N = 0
    for a in reversed(L):
        N = N * B + a
    return N

print(chiffres(11, 2), chiffres(42, 16), chiffres(1632, 13))
print(valeur([1, 1, 0, 1], 2), bin(11), hex(42), int("101010", 2))`},
{type:"sous", titre:"Nombres non entiers"},
{type:"texte", texte:R`<p>De même, $\overline{0{,}b_1b_2b_3\cdots}^{\,2} = \sum_{k\geqslant1} b_k 2^{-k}$. Pour trouver les chiffres de $x \in [0, 1[$ : on multiplie par 2, la partie entière donne le chiffre suivant, et on recommence avec la partie fractionnaire. Un nombre qui a une écriture décimale finie peut avoir une écriture binaire <b>infinie</b> : $0{,}1 = \overline{0{,}0001100110011\cdots}^{\,2}$.</p>`},
{type:"code", code:R`def bits_fraction(x, n):
    L = []
    for k in range(n):
        x = 2 * x
        L.append(int(x))
        x = x - int(x)
    return L

print(bits_fraction(0.75, 6))
print(bits_fraction(0.1, 20))`},
{type:"sous", titre:"Entiers sur n bits : le complément à deux"},
{type:"texte", texte:R`<p>En machine, un entier occupe souvent un nombre fixe $n$ de bits (8, 32, 64). Avec la convention naïve de la <b>valeur signée</b> (un bit de signe puis la valeur absolue), $0$ a deux représentations et l'addition est compliquée. On utilise plutôt :</p>`},
{type:"def", titre:"Complément à deux sur n bits", texte:R`<p>Pour $x \in [\![-2^{n-1}, 2^{n-1}-1]\!]$, la représentation en complément à deux de $x$ sur $n$ bits est l'écriture binaire de $x$ si $x \geqslant 0$, et de $2^n + x$ si $x &lt; 0$.</p>`},
{type:"prop", texte:R`<ul><li>Le bit de poids fort vaut 0 pour les positifs et 1 pour les négatifs.</li><li><b>Lecture</b> : si le bit de poids fort est 0, $x = \sum a_k 2^k$ ; s'il vaut 1, $x = \sum a_k 2^k - 2^n$.</li><li><b>Addition</b> : on additionne les représentations comme des entiers ordinaires et on ignore la retenue au-delà de $n$ bits (calcul modulo $2^n$). Le résultat est juste s'il reste dans l'intervalle représentable.</li><li><b>Opposé</b> : on inverse tous les bits et on ajoute 1.</li></ul>`},
{type:"exemple", texte:R`<p>Sur 8 bits : de $-128$ à $127$. $5 = 0000\,0101$ et $-5 \mapsto 2^8 - 5 = 251 = 1111\,1011$. Le plus grand est $0111\,1111 = 127$, le plus petit $1000\,0000 = -128$.</p>`},
{type:"code", code:R`def complement2(x, n):
    assert -2**(n-1) <= x < 2**(n-1)
    v = x if x >= 0 else 2**n + x
    return format(v, "0" + str(n) + "b")

def lecture(s):
    n = len(s)
    v = int(s, 2)
    return v if s[0] == "0" else v - 2**n

for x in [5, -5, 127, -128, -1]:
    print(x, complement2(x, 8), lecture(complement2(x, 8)))

# addition modulo 2**8 : 100 + 50 déborde !
s = (int(complement2(100, 8), 2) + int(complement2(50, 8), 2)) % 2**8
print("100 + 50 sur 8 bits :", lecture(format(s, "08b")))`},
{type:"sous", titre:"Entiers multi-précision"},
{type:"texte", texte:R`<p>Sur 64 bits, on ne dépasse pas $2^{63}-1$. Pourtant Python calcule <code>2**16000</code> sans broncher : ses entiers sont <b>multi-précision</b>. Un grand entier est stocké par la liste de ses chiffres dans une grande base $b$ (chaque chiffre tient dans un registre machine), par exemple $1632 = 9\times13^2 + 8\times13 + 7$ donne <code>[7, 8, 9]</code> en base 13. Les opérations ne sont alors plus en temps constant : leur coût dépend du nombre de chiffres.</p>`},
{type:"code", code:R`print(2**200)
import math
print((2**16000).bit_length(), "bits, soit", math.floor(16000 * math.log10(2)) + 1, "chiffres décimaux")
print(math.factorial(50))`},

{type:"section", titre:"2. Représentation des flottants"},
{type:"def", texte:R`<p>Un nombre en <b>virgule flottante</b> s'écrit $x = \varepsilon \times m \times b^k$ avec un signe $\varepsilon \in \{-1, 1\}$, une base $b$, une <b>mantisse</b> $m$ (nombre à virgule ayant une écriture finie en base $b$) et un <b>exposant</b> $k \in \mathbb Z$. La représentation est <b>normalisée</b> si $m = b_0{,}b_{-1}\cdots b_{-p}$ avec $b_0 \neq 0$ ; elle est alors unique.</p>`},
{type:"exemple", texte:R`<p>$-32{,}75 = -3{,}275 \times 10^1$ en base 10, et $-32{,}75 = -\overline{100000{,}11}^{\,2} = -\overline{1{,}0000011}^{\,2} \times 2^5$ en base 2.</p>`},
{type:"prop", titre:"Les flottants en Python (norme IEEE 754, 64 bits)", texte:R`<p>1 bit de signe, 11 bits d'exposant, 52 bits de mantisse (le premier chiffre, toujours 1, n'est pas stocké). On a donc environ 16 chiffres décimaux significatifs, et des valeurs entre environ $10^{-308}$ et $10^{308}$. Tout réel est arrondi au flottant le plus proche : <b>les calculs sur les flottants sont approchés</b>.</p>`},
{type:"code", code:R`import sys
print(0.1 + 0.2, 0.1 + 0.2 == 0.3)
print(sys.float_info.max, sys.float_info.epsilon)
print(2.0**1023 * 2)        # dépassement : inf
print(1 + 1e-16 == 1)       # 1e-16 est perdu devant 1`},
{type:"attention", texte:R`<p>On ne teste jamais l'égalité de deux flottants avec <code>==</code>. On écrit plutôt <code>abs(x - y) &lt; 1e-9</code>.</p>`},

{type:"section", titre:"3. Calculer avec des flottants"},
{type:"sous", titre:"Sommer des flottants"},
{type:"code", titre:"n fois 1/n ne fait pas toujours 1", code:R`for n in [3, 7, 10, 49, 1000]:
    S = 0
    for k in range(n):
        S = S + 1/n
    print(n, S, S == 1)`},
{type:"texte", texte:R`<p>L'addition de flottants n'est pas <b>associative</b> : avec $a = 10^{30}$, $b = -a$, $c = 1.0$, on obtient $(a + b) + c = 1$ mais $a + (b + c) = 0$, car $1$ est « absorbé » par $10^{30}$ (phénomène d'<b>absorption</b>). Avec des entiers Python (multi-précision), les deux calculs donnent 1.</p>`},
{type:"code", code:R`a, b, c = 10**30, -10**30, 1.0
print((a + b) + c, a + (b + c))
c = 1
print((a + b) + c, a + (b + c))`},
{type:"remarque", texte:R`<p>Pour sommer beaucoup de termes de tailles très différentes, il vaut mieux additionner les plus petits d'abord. <code>math.fsum</code> fait une somme compensée bien plus précise.</p>`},
{type:"sous", titre:"Accumulation d'erreurs et annulation"},
{type:"texte", texte:R`<p>L'équation $x^2 + \frac{1}{a^2}x - 1 = 0$ a deux racines $x_{1,2} = \dfrac{-1 \mp \sqrt{1+4a^4}}{2a^2}$ dont le produit vaut $-1$. Calculons-les naïvement pour $a$ de plus en plus petit :</p>`},
{type:"code", code:R`def racinesNaif(a, b, c):
    delta = (b**2 - 4*a*c)**0.5
    return (-b - delta) / (2*a), (-b + delta) / (2*a)

for k in range(7):
    a = 0.7 * 10**(-k)
    x1, x2 = racinesNaif(1, 1/a**2, -1)
    print("a =", a, " produit x1*x2 =", x1 * x2)`},
{type:"texte", texte:R`<p>Le produit s'éloigne de $-1$ : quand $a$ est petit, $b = 1/a^2$ est énorme et $\sqrt\Delta \approx b$. Le calcul de $-b + \sqrt\Delta$ soustrait deux nombres presque égaux : les chiffres significatifs s'annulent et il ne reste que des erreurs d'arrondi. C'est l'<b>effet d'annulation</b> (<i>cancellation</i>).</p>`},
{type:"methode", texte:R`<p>On calcule d'abord la racine qui ne pose pas de problème (celle où l'on ajoute deux nombres de même signe), puis l'autre grâce au produit des racines $x_1x_2 = c/a$.</p>`},
{type:"code", code:R`def racinesMalin(a, b, c):
    delta = (b**2 - 4*a*c)**0.5
    if b > 0:
        x1 = (-b - delta) / (2*a)
        x2 = c / (a * x1)
    else:
        x2 = (-b + delta) / (2*a)
        x1 = c / (a * x2)
    return x1, x2

for k in range(7):
    a = 0.7 * 10**(-k)
    x1, x2 = racinesMalin(1, 1/a**2, -1)
    print("a =", a, " produit x1*x2 =", x1 * x2)`},
]},
{ id:"py13", numero:13, ecg:true, titre:"Simulation de variables aléatoires discrètes", resume:"Bernoulli, binomiale, géométrique, Poisson : simuler avec random et comparer aux lois théoriques.",
cours:[
{type:"texte", texte:R`<p>Simuler une variable aléatoire, c'est écrire un programme qui renvoie une valeur au hasard selon la loi voulue. On s'en sert en statistiques, en finance, en physique, et pour <b>vérifier expérimentalement</b> un calcul de probabilités. On utilise les modules suivants :</p>`},
{type:"code", code:R`import random
import numpy as np
import matplotlib.pyplot as plt

print(random.random())        # un réel « au hasard » dans [0, 1[
print(random.randint(1, 6))   # un entier au hasard entre 1 et 6 inclus`},
{type:"prop", texte:R`<p><code>random.random()</code> simule une variable $U$ de loi <b>uniforme</b> sur $[0, 1[$ : pour $0 \leqslant a \leqslant b \leqslant 1$, $P(a \leqslant U &lt; b) = b - a$. En particulier, $P(U &lt; p) = p$. Toutes les simulations de ce chapitre reposent sur cette propriété.</p>`},

{type:"section", titre:"1. Loi de Bernoulli"},
{type:"methode", texte:R`<p>Pour simuler $X \hookrightarrow \mathcal B(p)$, on tire $U$ uniforme sur $[0, 1[$ et on renvoie $1$ si $U &lt; p$, $0$ sinon : $P(X = 1) = P(U &lt; p) = p$.</p>`},
{type:"code", code:R`def simuler_bernoulli(p):
    if random.random() < p:
        return 1
    return 0

p = 0.4
Y = [simuler_bernoulli(p) for k in range(101)]
plt.figure(figsize=(6, 2))
plt.bar(range(101), Y)
plt.title("101 simulations d'une Bernoulli de paramètre 0,4")
plt.show()`},
{type:"texte", texte:R`<p>Il est plus parlant de représenter les <b>fréquences</b> de piles et de faces, par exemple sur 1000 lancers d'une pièce équilibrée :</p>`},
{type:"code", code:R`N = 1000
tirages = [simuler_bernoulli(0.5) for k in range(N)]
piles = sum(tirages) / N
plt.figure(figsize=(3, 2.5))
plt.bar(["Pile", "Face"], [piles, 1 - piles])
plt.title("Fréquences sur 1000 lancers")
plt.show()
print("fréquence de pile :", piles)`},

{type:"section", titre:"2. Loi binomiale"},
{type:"methode", texte:R`<p>Si $X_1, \dots, X_n$ sont indépendantes de loi $\mathcal B(p)$, alors $X_1 + \dots + X_n \hookrightarrow \mathcal B(n, p)$ : c'est le nombre de succès en $n$ épreuves indépendantes. On additionne donc $n$ simulations de Bernoulli.</p>`},
{type:"code", code:R`def simuler_binomiale(n, p):
    res = 0
    for i in range(n):
        res += simuler_bernoulli(p)
    return res

n, p, N = 20, 0.4, 2000
Y = [simuler_binomiale(n, p) for k in range(N)]
print("moyenne empirique :", sum(Y) / N, " espérance np =", n * p)

from math import comb
freq = [Y.count(k) / N for k in range(n + 1)]
theo = [comb(n, k) * p**k * (1 - p)**(n - k) for k in range(n + 1)]
plt.figure(figsize=(6, 3))
plt.bar(range(n + 1), freq, label="fréquences simulées")
plt.plot(range(n + 1), theo, "ro-", label="P(X = k)")
plt.legend()
plt.show()`},
{type:"remarque", texte:R`<p>La moyenne des valeurs simulées est proche de l'espérance $np$, et les fréquences sont proches des probabilités $\binom nk p^k(1-p)^{n-k}$. Plus on fait de simulations, meilleure est l'approximation (loi des grands nombres, chapitre 14).</p>`},

{type:"section", titre:"3. Loi géométrique"},
{type:"methode", texte:R`<p>$X \hookrightarrow \mathcal G(p)$ est le rang du premier succès dans une suite d'épreuves de Bernoulli indépendantes. On répète donc des épreuves jusqu'au premier succès :</p>`},
{type:"code", code:R`def simuler_geometrique(p):
    k = 1
    while random.random() >= p:      # échec : on recommence
        k += 1
    return k

p, N = 0.3, 5000
G = [simuler_geometrique(p) for k in range(N)]
print("moyenne :", sum(G) / N, " espérance 1/p =", 1 / p)
K = range(1, 15)
plt.figure(figsize=(6, 3))
plt.bar(K, [G.count(k) / N for k in K], label="fréquences")
plt.plot(K, [(1 - p)**(k - 1) * p for k in K], "ro-", label="(1-p)^(k-1) p")
plt.legend()
plt.show()`},
{type:"prop", titre:"Pourquoi ça marche", texte:R`<p>Notons $U_1, U_2, \dots$ les nombres tirés, indépendants et uniformes. L'algorithme renvoie $k$ si et seulement si $U_1 \geqslant p, \dots, U_{k-1} \geqslant p$ et $U_k &lt; p$. Par indépendance :</p>$$P(X = k) = P(U_1 \geqslant p)\cdots P(U_{k-1}\geqslant p)\,P(U_k &lt; p) = (1-p)^{k-1}p.$$`},
{type:"sous", titre:"Une autre méthode : la fonction quantile"},
{type:"prop", titre:"Théorème (méthode d'inversion)", texte:R`<p>Soit $F$ une fonction de répartition d'une variable à valeurs entières. On définit la <b>fonction quantile</b> $F^-(u) = \min\{k : F(k) \geqslant u\}$ pour $u \in\, ]0, 1[$. Si $U$ suit la loi uniforme sur $[0, 1]$, alors $X = F^-(U)$ a pour fonction de répartition $F$.</p>`},
{type:"texte", texte:R`<p>Ce théorème permet de simuler <b>n'importe quelle</b> loi discrète dont on connaît la fonction de répartition : on tire $u$ et on cherche le premier $k$ tel que $F(k) \geqslant u$. Pour la loi géométrique, $F(k) = 1 - (1-p)^k$, et $F(k) \geqslant u \iff k \geqslant \frac{\ln(1-u)}{\ln(1-p)}$ : on obtient une formule directe, sans boucle.</p>`},
{type:"code", code:R`import math

def geometrique_inversion(p):
    u = random.random()
    return max(1, math.ceil(math.log(1 - u) / math.log(1 - p)))

def simuler_par_quantile(F):
    u = random.random()
    k = 0
    while F(k) < u:
        k += 1
    return k

p = 0.3
G2 = [geometrique_inversion(p) for k in range(5000)]
G3 = [simuler_par_quantile(lambda k: 1 - (1 - p)**k) for k in range(5000)]
print(sum(G2) / 5000, sum(G3) / 5000, "à comparer à", 1 / p)`},

{type:"section", titre:"4. Loi de Poisson"},
{type:"texte", texte:R`<p>La loi de Poisson modélise le nombre d'événements rares survenant dans un intervalle de temps (appels reçus en une heure, désintégrations…). $X \hookrightarrow \mathcal P(\lambda)$, avec $\lambda &gt; 0$, si</p>$$\forall k \in \mathbb N,\quad P(X = k) = e^{-\lambda}\frac{\lambda^k}{k!}.$$<p>Elle a pour espérance et variance $\lambda$.</p>`},
{type:"methode", texte:R`<p>Algorithme de simulation : on multiplie des nombres uniformes $U_1 U_2 \cdots$ tant que le produit reste au-dessus de $e^{-\lambda}$ ; le nombre de facteurs utilisés, moins 1, suit la loi $\mathcal P(\lambda)$.</p>`},
{type:"code", code:R`def simuler_poisson(lam):
    k = 0
    p = 1.0
    while p >= np.exp(-lam):
        p *= random.random()
        k += 1
    return k - 1

def fact(k):
    return 1 if k <= 1 else k * fact(k - 1)

def Poisson(k, lam):
    return np.exp(-lam) * lam**k / fact(k)

lam, N = 2.5, 5000
Z = [simuler_poisson(lam) for i in range(N)]
Z2 = [Z.count(k) / N for k in range(11)]      # Z2[k] : fréquence de k
plt.figure(figsize=(6, 3))
plt.bar(range(11), Z2, label="fréquences simulées")
plt.plot(range(11), [Poisson(k, lam) for k in range(11)], "ro-", label="P(X = k)")
plt.legend()
plt.show()
print("moyenne :", sum(Z) / N)`},
{type:"remarque", texte:R`<p>On constate que les fréquences observées collent aux probabilités théoriques. Justification de l'algorithme (hors programme) : $-\ln U_i$ suit une loi exponentielle de paramètre 1, et le nombre de sommes partielles de ces exponentielles inférieures à $\lambda$ suit une loi de Poisson.</p>`},
{type:"sous", titre:"Avec numpy"},
{type:"texte", texte:R`<p>Le module <code>numpy.random</code> fournit directement des simulateurs : <code>np.random.binomial(n, p, N)</code>, <code>np.random.geometric(p, N)</code>, <code>np.random.poisson(lam, N)</code> renvoient des tableaux de $N$ valeurs indépendantes.</p>`},
{type:"code", code:R`print(np.random.binomial(20, 0.4, 10))
print(np.random.geometric(0.3, 10))
print(np.random.poisson(2.5, 10))`},
]},
{ id:"py14", numero:14, ecg:true, titre:"Lois limites et convergences", resume:"Binomiale vers Poisson, loi des grands nombres, théorème limite central, processus de Galton-Watson.",
cours:[
{type:"texte", texte:R`<p>On illustre numériquement les grands théorèmes de convergence en probabilités. On utilise les simulateurs de <code>numpy.random</code> : <code>np.random.binomial</code>, <code>np.random.geometric</code>, <code>np.random.poisson</code>.</p>`},
{type:"code", code:R`import numpy as np
import matplotlib.pyplot as plt

print(np.random.binomial(10, 0.3, 8))   # 8 tirages de B(10, 0.3)
print(np.random.poisson(3, 8))          # 8 tirages de P(3)`},

{type:"section", titre:"1. Des lois binomiales vers la loi de Poisson"},
{type:"prop", texte:R`<p>Soit $\lambda &gt; 0$ et, pour $n &gt; \lambda$, $X_n \hookrightarrow \mathcal B(n, \lambda/n)$. Alors pour tout $k \in \mathbb N$ :</p>$$P(X_n = k) = \binom nk\left(\frac\lambda n\right)^k\left(1-\frac\lambda n\right)^{n-k} \xrightarrow[n\to+\infty]{} e^{-\lambda}\frac{\lambda^k}{k!}.$$<p>Un grand nombre d'épreuves, chacune de probabilité de succès faible : le nombre de succès suit approximativement une loi de Poisson.</p>`},
{type:"code", code:R`import math

lam = 3
def Poisson(k, lam):
    return math.exp(-lam) * lam**k / math.factorial(k)

K = list(range(11))
plt.figure(figsize=(6, 3.2))
plt.bar(K, [Poisson(k, lam) for k in K], color="red", alpha=0.35, label="Poisson(3)")
for n, c in [(4, "orange"), (10, "green"), (100, "blue")]:
    B = list(np.random.binomial(n, lam / n, 5000))
    plt.plot(K, [B.count(k) / 5000 for k in K], "o-", color=c, label="B(" + str(n) + ", 3/" + str(n) + ")")
plt.legend()
plt.show()`},
{type:"remarque", texte:R`<p>Pour $n = 4$, la loi binomiale est encore loin de la loi de Poisson ; pour $n = 100$, les deux sont presque confondues.</p>`},

{type:"section", titre:"2. La loi des grands nombres"},
{type:"prop", texte:R`<p>Soit $(X_n)$ une suite de variables aléatoires indépendantes, de même loi, d'espérance $m$ (et de variance finie). Alors la moyenne empirique $\overline{X}_n = \frac1n(X_1 + \dots + X_n)$ converge vers $m$ : pour tout $\varepsilon &gt; 0$, $P\big(|\overline X_n - m| \geqslant \varepsilon\big) \xrightarrow[n\to+\infty]{} 0$.</p>`},
{type:"code", code:R`lam = 3
n = 2000
Y = np.random.poisson(lam, n)
moyennes = np.cumsum(Y) / np.arange(1, n + 1)   # moyenne des k premiers, pour tout k

plt.figure(figsize=(6, 3))
plt.plot(moyennes, label="moyenne des k premiers tirages")
plt.axhline(lam, color="red", linestyle="--", label="espérance = 3")
plt.xlabel("k")
plt.legend()
plt.show()`},
{type:"remarque", texte:R`<p>C'est ce qui justifie l'approche « fréquentiste » : la fréquence d'un événement sur un grand nombre d'expériences indépendantes approche sa probabilité (appliquer la loi à des Bernoulli, d'espérance $p$).</p>`},
{type:"code", titre:"Version avec une boucle", code:R`import random

def moyenne_des(n, p):
    S = 0
    for k in range(n):
        if random.random() < p:
            S = S + 1
    return S / n

for n in [10, 100, 1000, 10000, 100000]:
    print(n, moyenne_des(n, 0.3))`},

{type:"section", titre:"3. Le théorème limite central"},
{type:"prop", texte:R`<p>Avec les mêmes hypothèses, en notant $\sigma^2$ la variance, la moyenne empirique centrée réduite</p>$$\overline{X}_n^* = \frac{\overline X_n - m}{\sigma/\sqrt n}$$<p>converge en loi vers la loi normale centrée réduite $\mathcal N(0,1)$. Autrement dit, pour $n$ grand, $\overline X_n$ suit approximativement la loi $\mathcal N(m, \sigma^2/n)$ : l'histogramme des moyennes a une forme de « courbe en cloche ».</p>`},
{type:"code", code:R`p = 0.3          # loi de Bernoulli de paramètre p
n = 1000         # nombre de variables dans chaque moyenne
m = 5000         # nombre de moyennes simulées

echantillons = np.random.binomial(1, p, size=(m, n))
moyennes = np.mean(echantillons, axis=1)

plt.figure(figsize=(6, 3.2))
plt.hist(moyennes, bins=30, density=True, alpha=0.5, label="moyennes simulées")
s = np.sqrt(p * (1 - p) / n)
x = np.linspace(p - 4*s, p + 4*s, 200)
plt.plot(x, np.exp(-(x - p)**2 / (2 * s**2)) / (s * np.sqrt(2 * np.pi)), "r", label="densité de N(p, p(1-p)/n)")
plt.legend()
plt.title("Théorème limite central")
plt.show()`},
{type:"remarque", texte:R`<p><code>np.random.binomial(1, p, size=(m, n))</code> crée un tableau de $m$ lignes et $n$ colonnes de Bernoulli indépendantes ; <code>np.mean(..., axis=1)</code> calcule la moyenne de chaque ligne. Les variables de départ ne prennent que les valeurs 0 et 1, et pourtant leur moyenne a une loi presque normale !</p>`},

{type:"section", titre:"4. Dynamique des populations : Galton-Watson"},
{type:"texte", texte:R`<p>Le modèle de <b>Galton-Watson</b> étudie la reproduction et l'extinction d'une population (à l'origine, la survie des noms de famille). On part d'un fondateur ; chaque individu a un nombre aléatoire d'enfants, indépendamment des autres, et l'on suit la taille $Z_n$ de la $n$-ième génération.</p><p><b>Hypothèse</b> : le nombre d'enfants de chaque individu suit une loi de Poisson $\mathcal P(\lambda)$.</p>`},
{type:"code", code:R`def galton_watson(lam, n):
    Z = [1]                     # génération 0 : le fondateur
    for k in range(n):
        if Z[-1] > 0:
            enfants = np.random.poisson(lam, Z[-1])
            Z.append(int(sum(enfants)))
        else:
            Z.append(0)         # population éteinte
    return Z

plt.figure(figsize=(6, 3.2))
for lam, c in [(0.5, "red"), (1, "orange"), (1.5, "green")]:
    for essai in range(4):
        plt.plot(galton_watson(lam, 15), color=c, alpha=0.7)
plt.yscale("symlog")
plt.xlabel("génération n")
plt.ylabel("taille de la population")
plt.title("rouge : 0,5   orange : 1   vert : 1,5")
plt.show()`},
{type:"code", titre:"Fréquence d'extinction", code:R`def s_eteint(lam, n=60, plafond=1000):
    Z = 1
    for k in range(n):
        if Z == 0:
            return True
        if Z > plafond:           # population très nombreuse : on la considère sauvée
            return False
        Z = int(sum(np.random.poisson(lam, Z)))
    return Z == 0

def proportion_eteinte(lam, essais=1000):
    eteintes = 0
    for e in range(essais):
        if s_eteint(lam):
            eteintes += 1
    return eteintes / essais

for lam in [0.5, 0.8, 1, 1.2, 1.5, 2]:
    print("lambda =", lam, " extinction observée :", proportion_eteinte(lam))`},
{type:"prop", titre:"Ce que l'on constate (et que l'on sait démontrer)", texte:R`<p>L'espérance de $Z_n$ vaut $\lambda^n$. Si $\lambda \leqslant 1$, la population s'éteint presque sûrement. Si $\lambda &gt; 1$, elle survit avec une probabilité strictement positive : la probabilité d'extinction $q$ est la plus petite solution dans $[0, 1]$ de l'équation $q = e^{\lambda(q - 1)}$ (pour $\lambda = 2$, $q \approx 0{,}203$).</p>`},
{type:"code", code:R`import math

def proba_extinction(lam):
    q = 0
    for k in range(200):         # suite q_{k+1} = exp(lam (q_k - 1)), croissante vers q
        q = math.exp(lam * (q - 1))
    return q

for lam in [0.5, 1.2, 1.5, 2]:
    print(lam, round(proba_extinction(lam), 3))`},
]}
]};
})();
