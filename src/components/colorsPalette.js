// styles/colors.js

export const colors = {
  primary: {
    // 🎯 COULEUR PRINCIPALE DE LA MARQUE - Identité visuelle
    main: "#FF385C", // Boutons principaux, actions importantes, logo
    hover: "#E31C5F", // Effet au survol des éléments primaires
    pressed: "#D10F60", // État enfoncé/click des boutons principaux
    disabled: "#FFB8C8", // Éléments primaires désactivés (grisés)
  },

  neutral: {
    // 📐 COULEURS DE STRUCTURE - Hiérarchie visuelle et lisibilité
    textPrimary: "#222222", // Titres, textes principaux, contenu important
    textSecondary: "#717171", // Descriptions, labels secondaires, métadonnées
    textDisabled: "#B0B0B0", // Textes non modifiables, champs désactivés
    borderLight: "#07689F", // Bordures fines, séparateurs, contours subtils
    borderMedium: "#BBBBBB", // Bordures plus visibles, états de focus
    bgSection: "#F7F7F7", // Arrière-plan des sections, zones de séparation
    bgCard: "#FFFFFF", // Cartes, modales, surfaces surélevées
    bgHover: "#F5F5F5", // Arrière-plan au survol des éléments de liste
  },

  semantic: {
    // 🚦 COULEURS SÉMANTIQUES - Communication d'état et feedback
    success: "#00A699", // Actions réussies, confirmations, validations
    successLight: "#99E6E0", // Fonds d'alertes de succès, arrière-plans positifs
    warning: "#FFB400", // Avertissements, états nécessitant attention
    warningLight: "#FFE099", // Fonds d'alertes d'avertissement, états intermédiaires
    error: "#C13515", // Erreurs, actions destructives, échecs
    errorLight: "#F0C9BF", // Fonds d'alertes d'erreur, arrière-plans d'alerte
  },
};

export default colors;
