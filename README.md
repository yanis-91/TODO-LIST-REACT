# 📝 Exercice React - Liste de Tâches

Bienvenue dans votre premier exercice pratique avec React ! Ce projet vous guidera à travers les concepts fondamentaux de React en construisant une application de liste de tâches (Todo List).

## 🎯 Objectifs d'apprentissage

En complétant cet exercice, vous apprendrez :

1. **Composants React fonctionnels** - Structure de base d'un composant
2. **Hook useState** - Gestion de l'état local
3. **Gestion des événements** - onClick, onChange, onSubmit
4. **Rendu conditionnel** - Afficher différent contenu selon l'état
5. **Rendu de listes** - Utiliser map() pour afficher des éléments
6. **Props et communication** - Passer des données entre composants
7. **Clés React** - Optimisation des listes avec key
8. **Formulaires contrôlés** - Gérer les inputs avec React

## 🚀 Démarrage rapide 

1. **Installer les dépendances** (déjà fait) :

   ```bash
   npm install
   ```

2. **Lancer le serveur de développement** :

   ```bash
   npm run dev
   ```

3. **Ouvrir votre navigateur** à l'adresse indiquée (généralement http://localhost:5173)

## 📚 Structure de l'exercice

Le code dans `src/App.jsx` est organisé en 9 exercices progressifs :

### Exercice 1 : État local avec useState

```jsx
const [taches, setTaches] = useState([...])
```

- Comprendre comment créer et initialiser un état
- Observer comment React re-rend quand l'état change

### Exercice 2 : État pour formulaires

```jsx
const [nouvelleTache, setNouvelleTache] = useState("");
```

- Gérer l'état d'un champ de formulaire
- Concept de "controlled component"

### Exercice 3 : Ajouter des éléments

```jsx
const ajouterTache = (e) => { ... }
```

- Prévenir le comportement par défaut avec `e.preventDefault()`
- Mettre à jour l'état avec le spread operator `[...taches, nouvelleTache]`
- Générer des IDs uniques

### Exercice 4 : Modifier des éléments

```jsx
const basculerTache = (id) => { ... }
```

- Utiliser `map()` pour transformer un tableau
- Mise à jour immutable de l'état
- Logique conditionnelle dans les transformations

### Exercice 5 : Supprimer des éléments

```jsx
const supprimerTache = (id) => { ... }
```

- Utiliser `filter()` pour retirer des éléments
- Comprendre les fonctions de tableau en JavaScript

### Exercice 6 : Formulaires contrôlés

```jsx
<input
  value={nouvelleTache}
  onChange={(e) => setNouvelleTache(e.target.value)}
/>
```

- Connecter un input à l'état React
- Gérer les événements de changement

### Exercice 7 : Rendu conditionnel

```jsx
{
  taches.length === 0 ? <p>Aucune tâche</p> : <div>...</div>;
}
```

- Afficher différent contenu selon l'état
- Opérateur ternaire en JSX

### Exercice 8 : Rendu de listes

```jsx
{
  taches.map((tache) => <div key={tache.id}>...</div>);
}
```

- Transformer un tableau en éléments JSX
- Importance de la prop `key`
- Éviter les anti-patterns courants

### Exercice 9 : Calculs dérivés

```jsx
{
  taches.filter((t) => t.terminee).length;
}
```

- Calculer des valeurs basées sur l'état
- Utiliser `filter()` pour compter

## 🔧 Défis supplémentaires

Une fois que vous maîtrisez les concepts de base, essayez ces améliorations :

1. **Filtrage** - Ajoutez des boutons pour voir "Toutes", "Actives", "Terminées"
2. **Édition** - Permettre de modifier le texte d'une tâche existante
3. **Persistence** - Sauvegarder dans localStorage
4. **Composants** - Diviser en composants plus petits (TodoItem, TodoForm)
5. **Validation** - Empêcher les tâches vides ou trop longues
6. **Animation** - Ajouter des transitions CSS

## 🎨 Personnalisation

Le fichier `src/App.css` contient tous les styles. Vous pouvez :

- Changer les couleurs
- Modifier les espacements
- Ajouter des animations
- Rendre l'app responsive

## 🐛 Déboguer

Si vous rencontrez des problèmes :

1. **Vérifiez la console** - Ouvrez les DevTools (F12)
2. **React DevTools** - Installez l'extension pour Chrome/Firefox
3. **Messages d'erreur** - Lisez attentivement les erreurs en rouge
4. **État des composants** - Utilisez `console.log()` pour déboguer

## 📖 Concepts React clés à retenir

- **État immutable** - Ne jamais modifier directement l'état
- **Clés uniques** - Toujours utiliser des clés stables pour les listes
- **Functional updates** - Utiliser la fonction de mise à jour quand l'état dépend de la valeur précédente
- **Event handling** - Les événements React sont des SyntheticEvents
- **JSX rules** - Toujours retourner un seul élément parent

## 🎓 Prochaines étapes

Après avoir maîtrisé cet exercice :

1. Apprenez `useEffect` pour les effets de bord
2. Explorez le Context API pour le partage d'état global
3. Découvrez les hooks personnalisés
4. Étudiez React Router pour les applications multi-pages

Bon apprentissage avec React ! 🚀+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
