-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 25 juin 2020 à 11:37
-- Version du serveur :  10.1.31-MariaDB
-- Version de PHP :  7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `eff-id`
--

-- --------------------------------------------------------

--
-- Structure de la table `acces_salles`
--

CREATE TABLE `acces_salles` (
  `id_type` int(11) NOT NULL,
  `id_salle` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

CREATE TABLE `classe` (
  `id_classe` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `effectif` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `classe`
--

INSERT INTO `classe` (`id_classe`, `nom`, `effectif`) VALUES
(1, '19-20_CSIA', 32);

-- --------------------------------------------------------

--
-- Structure de la table `porte`
--

CREATE TABLE `porte` (
  `id_porte` int(11) NOT NULL,
  `numero_porte` int(11) NOT NULL,
  `id_salle` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `porte`
--

INSERT INTO `porte` (`id_porte`, `numero_porte`, `id_salle`) VALUES
(1, 1, 1),
(2, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id_reservation` int(11) NOT NULL,
  `date` date NOT NULL,
  `heure` time NOT NULL,
  `duree` time NOT NULL,
  `intitule` int(11) NOT NULL,
  `nb_personnes` int(11) NOT NULL,
  `id_salle` int(11) NOT NULL,
  `id_prof` int(11) DEFAULT NULL,
  `id_validation` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `salle`
--

CREATE TABLE `salle` (
  `id_salle` int(11) NOT NULL,
  `numero_salle` varchar(50) NOT NULL,
  `etage` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `occupee` tinyint(1) NOT NULL,
  `capacite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `salle`
--

INSERT INTO `salle` (`id_salle`, `numero_salle`, `etage`, `type`, `occupee`, `capacite`) VALUES
(1, '001', 0, 'Classique', 0, 28);

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE `type` (
  `id_type` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id_type`, `nom`) VALUES
(1, 'Admin'),
(2, 'Etudiant');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_puce` int(11) NOT NULL,
  `id_type` int(11) NOT NULL,
  `id_classe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_user`, `nom`, `prenom`, `email`, `password`, `id_puce`, `id_type`, `id_classe`) VALUES
(1, 'Lefebvre', 'Cyndie', 'cyndie@gmail.com', 'cyndie', 12, 2, 1),
(2, 'Bernezet', 'Julien', 'julien@gmail.com', 'julien', 2, 2, 1),
(3, 'Poppé', 'Christophe', 'christophe@gmail.com', 'christophe', 2, 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `validation`
--

CREATE TABLE `validation` (
  `id_validation` int(11) NOT NULL,
  `etat` int(11) NOT NULL,
  `id_reservation` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `acces_salles`
--
ALTER TABLE `acces_salles`
  ADD UNIQUE KEY `id_type` (`id_type`,`id_salle`),
  ADD UNIQUE KEY `id_salle` (`id_salle`),
  ADD KEY `id_type_2` (`id_type`);

--
-- Index pour la table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`id_classe`);

--
-- Index pour la table `porte`
--
ALTER TABLE `porte`
  ADD PRIMARY KEY (`id_porte`),
  ADD KEY `id_salle` (`id_salle`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `id_salle` (`id_salle`),
  ADD KEY `id_prof` (`id_prof`),
  ADD KEY `id_validation` (`id_validation`);

--
-- Index pour la table `salle`
--
ALTER TABLE `salle`
  ADD PRIMARY KEY (`id_salle`);

--
-- Index pour la table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id_type`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_classe` (`id_classe`),
  ADD KEY `id_puce` (`id_puce`) USING BTREE,
  ADD KEY `id_type` (`id_type`);

--
-- Index pour la table `validation`
--
ALTER TABLE `validation`
  ADD PRIMARY KEY (`id_validation`),
  ADD KEY `id_reservation` (`id_reservation`),
  ADD KEY `id_user` (`id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `classe`
--
ALTER TABLE `classe`
  MODIFY `id_classe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `porte`
--
ALTER TABLE `porte`
  MODIFY `id_porte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `salle`
--
ALTER TABLE `salle`
  MODIFY `id_salle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `type`
--
ALTER TABLE `type`
  MODIFY `id_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `validation`
--
ALTER TABLE `validation`
  MODIFY `id_validation` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `acces_salles`
--
ALTER TABLE `acces_salles`
  ADD CONSTRAINT `acces_salles_ibfk_2` FOREIGN KEY (`id_salle`) REFERENCES `salle` (`id_salle`),
  ADD CONSTRAINT `acces_salles_ibfk_3` FOREIGN KEY (`id_type`) REFERENCES `type` (`id_type`);

--
-- Contraintes pour la table `porte`
--
ALTER TABLE `porte`
  ADD CONSTRAINT `porte_ibfk_1` FOREIGN KEY (`id_salle`) REFERENCES `salle` (`id_salle`);

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`id_validation`) REFERENCES `validation` (`id_validation`),
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`id_salle`) REFERENCES `salle` (`id_salle`),
  ADD CONSTRAINT `reservation_ibfk_3` FOREIGN KEY (`id_prof`) REFERENCES `users` (`id_user`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`id_type`) REFERENCES `type` (`id_type`);

--
-- Contraintes pour la table `validation`
--
ALTER TABLE `validation`
  ADD CONSTRAINT `validation_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `validation_ibfk_2` FOREIGN KEY (`id_reservation`) REFERENCES `reservation` (`id_reservation`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
