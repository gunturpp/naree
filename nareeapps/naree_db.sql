-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06 Mar 2018 pada 05.47
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
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'guntur', 'g@gmail.com', '$2y$10$qhQDr34uaBlGpSGSJR.i9Oi1NRmm0bcZYukpX4fekm1JSx.hngCZi', 'Admin', NULL, '2018-01-18 22:08:08', '2018-01-18 22:08:08'),
(2, 'Guntur Putra Pratama', 'gg@gmail.com', '$2y$10$Nzqp2QvLA74S.VIiKZlrOuaLX1vBdRZWlPYyyRjmAQJVWs0rLyvEu', 'Admin', NULL, '2018-02-06 05:09:44', '2018-02-06 05:09:44'),
(3, 'Gun', 'ggg@gmail.com', '$2y$10$9EIRRHdGchxctZETKbJmrOSGdxwIGbHJGwwq0JkoEVoFW98X3eTb2', 'Admin', NULL, '2018-02-06 05:18:56', '2018-02-06 05:18:56'),
(4, 'guntur', 'pratama@gmail.com', '$2y$10$CC2yGgX3QSBMYsikcoznyOQD0q2SXZK.Bi.HHKeeZ5m0VH2q.2npq', 'admin', NULL, '2018-02-06 08:05:30', '2018-02-06 08:05:30');

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

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2017_11_10_132100_create_admins_table', 2),
(9, '2018_01_19_050133_create_events_table', 2),
(10, '2018_03_02_062808_add_votes_to_users_table', 3),
(11, '2018_03_02_063130_create_news_table', 4),
(12, '2018_03_02_063511_create_news_table', 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `id` int(10) UNSIGNED NOT NULL,
  `judul_news` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`id`, `judul_news`, `description`, `image`, `created_at`, `updated_at`) VALUES
(2, 'Berita terkini', 'wkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwkwk', '../images/news/5IkuBoGWZQkjFuqHYNlh1rEBmpzzrBTcmb4BYCUO.jpeg', '2018-03-02 00:02:49', '2018-03-02 00:02:49'),
(3, 'aee', 'dwdwd', '../images/news/saTEIBFLHoaKgwrsBH9yLgZRMsVO0gY3YS3LalMn.jpeg', '2018-03-02 00:18:00', '2018-03-02 00:18:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('025c08b55ca4fb39d2bc0cb4e3c111a1107392e6b45b28a1e13bf25ab23038bd9b04e34be53f36a1', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:35:40', '2018-03-02 18:35:40', '2019-03-03 01:35:40'),
('05a14eb3a8eab9ca138ffebf9a8c412ac93640fd2418cfb73cce98190096ad6bab424855d9f19269', 3, 1, 'MyApp', '[]', 0, '2018-03-02 18:45:45', '2018-03-02 18:45:45', '2019-03-03 01:45:45'),
('063a4abd71404e20a4ff3eb33ffdb1a9fa5dbf6c32ca9574c4282589336c6b7160e0ff22a0a71f09', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:42:58', '2018-03-02 18:42:58', '2019-03-03 01:42:58'),
('14d8bb398cee4ae48e38ad3baa8d13e6da0d6e1585a5c9d8b56b39e8c88af27921fb45c5f6ffd0fd', 2, 1, 'MyApp', '[]', 0, '2018-02-10 20:24:52', '2018-02-10 20:24:52', '2019-02-11 03:24:52'),
('1ce50b799c21b3c81632a3f7d5755e329bbcc9fcbdb0434d5204486ac1dc49b0717a4e6a85b6f14f', 1, 1, 'MyApp', '[]', 0, '2018-02-06 08:47:12', '2018-02-06 08:47:12', '2019-02-06 15:47:12'),
('26d2af9b4f6afdf8604e5fb1c63ab9325d7dd2355c2aa04a671fb664422129ec84240e99ac0a7fc9', 1, 1, 'MyApp', '[]', 0, '2018-03-02 12:05:41', '2018-03-02 12:05:41', '2019-03-02 19:05:41'),
('273141d64680869f781dc11c974d465a44f79ce04a645167b244ca55dae8c84b3eddaccbb34bcb44', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:38:13', '2018-03-02 18:38:13', '2019-03-03 01:38:13'),
('288af6acf63923b99fa11d65a5ae9cd6bba9c1e47c8d4eb314b1d3cf69b687e1b927faeb6f2f10f3', 2, 1, 'MyApp', '[]', 0, '2018-02-10 21:06:08', '2018-02-10 21:06:08', '2019-02-11 04:06:08'),
('2a04a29e70664bd1ec95c1507b4fcdfb48e110f5835420c6e260feef28f9128e0b0e4ccf11822c03', 2, 1, 'MyApp', '[]', 0, '2018-02-10 20:36:48', '2018-02-10 20:36:48', '2019-02-11 03:36:48'),
('3192b5f23ef15ceff317ef97c6480e301274c914e093b43985c40b4de0105a1c816e4c6363acb372', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:37:45', '2018-03-02 18:37:45', '2019-03-03 01:37:45'),
('4ab99c1ab761f199a532fb57e3caa6e9971404e8b9af135afb8e61b456585f8704e541fdf7160e2b', 1, 1, 'MyApp', '[]', 0, '2018-03-02 17:48:47', '2018-03-02 17:48:47', '2019-03-03 00:48:47'),
('59ac2855298e6d6673217d4b8b5ae0ad7085d246e577ccd1896605b4800147cd5e686fd9392c6b85', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:40:13', '2018-03-02 18:40:13', '2019-03-03 01:40:13'),
('5a8b10437fe14c01a9810bf5c69aa577349b4c5a5f75a936341ac3efe02ce606d4e84d164c2d6fbe', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:22:27', '2018-03-02 18:22:27', '2019-03-03 01:22:27'),
('5ed4f2f4b632c7a86a10f97b67b47137df4f2f9dfd5cd09c560e33d984dcd1e2200e7c3f0fc0e5bd', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:38:15', '2018-03-02 18:38:15', '2019-03-03 01:38:15'),
('5f163ec0c0b9a273f0b71ea148650f90bd2b202e73f52386f21f9daaa4de40271034358047beea3a', 2, 1, 'MyApp', '[]', 0, '2018-03-05 21:46:31', '2018-03-05 21:46:31', '2019-03-06 04:46:31'),
('654bdfa7ddacc4d842de8286e6d795fe73f77a4af891c2c0e285f25a3e189ed0d111b4911093cd8a', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:40:08', '2018-03-02 18:40:08', '2019-03-03 01:40:08'),
('6d0c1b91c93ea94a8bd85e3103deed234d24e5d22cfff456bb3f254468d4eb3064989979bfed83bc', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:15:28', '2018-03-02 18:15:28', '2019-03-03 01:15:28'),
('701024d54fba69efd7fe6b37034641895bd27438757c96fbd3eaded7a9f96703f49e72de76eb6fe0', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:13:08', '2018-03-02 18:13:08', '2019-03-03 01:13:08'),
('8bdfaa952c8758cc63ecaf95c2a9882795a454e449ccfe176477d47d5f50268a6c0a1a9f4fefb61f', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:37:42', '2018-03-02 18:37:42', '2019-03-03 01:37:42'),
('8e3209d5ed9db55af97eda056064cffc22f8dcff4d72d836417eec739071ed347f90aec46a4d8812', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:40:10', '2018-03-02 18:40:10', '2019-03-03 01:40:10'),
('91cf0dcb7c63b30a35c6339c3443dfe933b88dfbfb11ffa9d511bc2ca33be69f3260296792e7bb24', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:43:44', '2018-03-02 18:43:44', '2019-03-03 01:43:44'),
('9f1e7b898d212fdfa37529f5c0063a7c86c6593ed5802ca08db50472cc8eec11adb6ec5a9621e429', 1, 1, 'MyApp', '[]', 0, '2018-02-06 09:02:14', '2018-02-06 09:02:14', '2019-02-06 16:02:14'),
('a601a9d59409aafa6264c778e18d9a0f6a7b01b04d1c6b2999fd7a127db0cfa2e31316fbc0fa9f9b', 1, 1, 'MyApp', '[]', 0, '2018-02-06 09:12:30', '2018-02-06 09:12:30', '2019-02-06 16:12:30'),
('a6d761f32304edc75367adeaea3dcc175009df0116d77e88b2cc5c0fba739eaa42ec49176ccedf41', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:12:39', '2018-03-02 18:12:39', '2019-03-03 01:12:39'),
('a9d0d4242b746bedc833e0a0697ea923128e4bcd8ae35ef5965f27074be054ed66f5f50f3c9ab5b3', 1, 1, 'MyApp', '[]', 0, '2018-03-02 17:48:11', '2018-03-02 17:48:11', '2019-03-03 00:48:11'),
('b080ba637ebafc558f17a5fe3171370899852508767662889c249dffcde8fac149ec5f80a203efdc', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:23:51', '2018-03-02 18:23:51', '2019-03-03 01:23:51'),
('ca1885a9badb4fd66f98d9092f4876bfb5ed6a8ff3792c45f588631d4dcd46880f001d5017044ed8', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:38:11', '2018-03-02 18:38:11', '2019-03-03 01:38:11'),
('cd0c5ce1a6b47317e7018483074232473e63c6ae66aaba2fa18e9d5ac6ed94a8c20b6349aaf8fb62', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:00:07', '2018-03-02 18:00:07', '2019-03-03 01:00:07'),
('ce5201c987e5b226b0fc55e3a4b782323f7917e4cd043ef1af5990c29c183d7eb902f2f08f09cfbd', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:17:35', '2018-03-02 18:17:35', '2019-03-03 01:17:35'),
('cea00a1641bf9e6ead71cb18ebd9bcb885f793c2544c83e5f3ccb60e166894afe968493090ef0cb2', 2, 1, 'MyApp', '[]', 0, '2018-02-10 20:25:46', '2018-02-10 20:25:46', '2019-02-11 03:25:46'),
('d24cca2e4e0d6762eaabdc18ac305545d515b68e10c48ecabb3977ad71dd1261a654a5915125d9e7', 7, 1, 'MyApp', '[]', 0, '2018-03-01 21:24:21', '2018-03-01 21:24:21', '2019-03-02 04:24:21'),
('e08d12fe3eb332671f14fc2483f4da196fcef00d58487350ff4aefdb0c805dd0a4e209582c7389fa', 1, 1, 'MyApp', '[]', 0, '2018-02-06 09:13:19', '2018-02-06 09:13:19', '2019-02-06 16:13:19'),
('ec1b0205aa25f83a53475d4f876960c3943a570b0c0016751d8e4bd15322efddb2dd53eab383d817', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:17:16', '2018-03-02 18:17:16', '2019-03-03 01:17:16'),
('efac05b21fca3cf3411d2e183313a996e9ede5ac94ea860122cba61da7ef543e3654563c805a292a', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:38:17', '2018-03-02 18:38:17', '2019-03-03 01:38:17'),
('f18bc03e05ec65dde4ebec839b08bbdca01b2114f4759df77e55e0b5b7858a7bb328a98063f3dc4a', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:09:43', '2018-03-02 18:09:43', '2019-03-03 01:09:43'),
('f43dd41125a08b190a63b779fa2947d5783faa9e601d5b91508aa830c16712d38e28d10936e345e3', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:35:44', '2018-03-02 18:35:44', '2019-03-03 01:35:44'),
('f4c96b3928406b7e75e22f3f5a14a7a2a8992be8e814d73eebec97dea1756e8b2f4e9c0352c38cb9', 1, 1, 'MyApp', '[]', 0, '2018-03-02 17:47:39', '2018-03-02 17:47:39', '2019-03-03 00:47:39'),
('f530d03c48f796acbfe98fd55afb590dbda046367e0e91de736bd484e389db2f61f26ed498203e14', 2, 1, 'MyApp', '[]', 0, '2018-03-02 18:43:07', '2018-03-02 18:43:07', '2019-03-03 01:43:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', '03gG3fw8mjZPHOXTz5WGgBweAAH4xdCFoqhAyiER', 'http://localhost', 1, 0, 0, '2018-02-06 06:09:03', '2018-02-06 06:09:03'),
(2, NULL, 'Laravel Password Grant Client', '1giXifyT98a9gknOqfD1fa2enFbVtjMOl0R7FPXH', 'http://localhost', 0, 1, 0, '2018-02-06 06:09:04', '2018-02-06 06:09:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2018-02-06 06:09:04', '2018-02-06 06:09:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` date NOT NULL,
  `occupation` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_me` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `exp` int(11) DEFAULT NULL,
  `dance_type` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `gender`, `birthdate`, `occupation`, `photo`, `about_me`, `team`, `exp`, `dance_type`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'guntur', 'pratama@gmail.com', '$2y$10$2OwyPLImgMX.GjCMyhgTg.9WOn/8LbuPbkvuNif6O5Uzl0Li6QWea', 'male', '2017-06-24', 'student', NULL, NULL, NULL, NULL, NULL, '', '2018-02-06 08:46:12', '2018-02-06 08:46:12'),
(2, 'guntur', 'g@gmail.com', '$2y$10$PnzyJTfD9jJkRMLDO4D/HOtc8JGS9vJx5eqYJN5.75rUhgJFgvMGS', 'male', '2017-06-24', 'student', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:06:51', '2018-02-06 09:06:51'),
(3, 'guntut', 'gggg@gmail.com', '$2y$10$deeidXs0v3BEOkrNxM3vn.XE2mEA3OAZhq7Zu/scd6CWR5xKejSH2', 'male', '2000-03-03', 'student', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-10 19:23:50', '2018-02-10 19:23:50'),
(4, 'Guntur Putra Pratama', 'gppratama175@gmail.com', '$2y$10$ExyHTv0o55GEr0p5sR/XD.s.byVemBoGlnl.SNRjbyzD/CMcrj23G', 'male', '2017-06-23', 'student', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-10 19:50:50', '2018-02-10 19:50:50'),
(6, 'guntur', 'gg@gmail.com', '$2y$10$.gX4btK4ZafF0th.9abl0Oq.Gm1indFI0Hqlb0u60jzEK3VVrEgEu', 'male', '2017-06-24', 'student', NULL, NULL, NULL, NULL, NULL, NULL, '2018-03-01 21:22:55', '2018-03-01 21:22:55'),
(7, 'guntur', 'ggg@gmail.com', '$2y$10$BAQ.19aax.OE7RU764Akx.uUxaVy2rlpi/67coMDFgRramKlAMoqy', 'male', '2017-06-23', 'student', NULL, NULL, NULL, NULL, NULL, NULL, '2018-03-01 21:24:00', '2018-03-01 21:24:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
