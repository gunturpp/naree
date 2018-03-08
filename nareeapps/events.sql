-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06 Mar 2018 pada 05.52
-- Versi Server: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `naree_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `events`
--

CREATE TABLE `events` (
  `id` int(10) UNSIGNED NOT NULL,
  `name_event` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_event` date NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `province` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `organizer` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dance_type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `poster` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `long` decimal(10,7) NOT NULL,
  `lat` decimal(10,7) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `events`
--

INSERT INTO `events` (`id`, `name_event`, `description`, `date_event`, `location`, `province`, `organizer`, `dance_type`, `poster`, `duration`, `long`, `lat`, `created_at`, `updated_at`) VALUES
(2, 'GGevent', 'yuk dateng', '2018-02-16', 'jl.s.kampar', 'DKI Jakarta', 'ggEO', 'brightdance', '../images/event/5g9WMG1ucJkmluPUe8H39SKHC0Ny58U9iRA17nr0.jpeg', '2 hari', '1.1111000', '111.1111110', '2018-02-06 05:34:19', '2018-02-06 05:34:19'),
(3, 'Brighdance Competition', 'Keren nih', '2018-02-08', 'jl.s.kampar2', 'DKI Jakarta', 'CooLYEO', 'brightdance', '../images/event/OzXdMjYx4R7tWYNYY8eGGQZE32Ju9LLIjeFYoC5O.jpeg', '2 hari', '111.1111000', '11.1111000', '2018-02-06 09:24:13', '2018-02-06 09:24:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
