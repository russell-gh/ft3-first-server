-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2023 at 03:11 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `first-server`
--

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE `logins` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`id`, `user_id`, `password`, `entry_date`) VALUES
(1, 3, '7ed166ff5e7bbe06670e4f3cc57acce7ddc17f9efb6c215cf8f02063a8850b89', '2023-04-04 12:45:27');

-- --------------------------------------------------------

--
-- Table structure for table `secrets`
--

CREATE TABLE `secrets` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` varchar(1024) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `secrets`
--

INSERT INTO `secrets` (`id`, `user_id`, `content`, `entry_date`) VALUES
(1, 3, 'I like Beatles', '2023-04-04 13:06:57');

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(256) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `user_id`, `token`, `entry_date`) VALUES
(1, 3, '1680612978358RZdf7pZAnQT6jQxk4E1vdygJqqtig8It9rXxnT9r3mzdXQOueJlh9i8jXUOoockF3Yx3I0zPVX9Iy2sMIYLsPSZCBgbspAsnBTI3UElj6xk4j0Rv2Hs8Mn71gvYfTaJz', '2023-04-04 12:56:18'),
(2, 3, '16806129993934l3pzpBrxZP10hV2Dg0q047p7PQnzyrZDNItjJ0gLlwZoiGEa4SX7sw43mtVSHpATlvUHGT4oDyi0U2XGl2LVoC8L0j8FJNPbOUqFBBESnQYtZrR7Ec0XEh3p3kGCKZI', '2023-04-04 12:56:39'),
(3, 3, '1680613000072lQGRQSqksDcn7ok0B43Wpw1IF73LzC4k2RqrtETNubPLJKXw6CBHdPYZ0siqRGTm6ilHiB7Qb2ZDGDC5HSOXDKdEXZwugAlfgpKhg21em8EhQaZOynigPD6AZutSaLcc', '2023-04-04 12:56:40'),
(4, 3, '1680613000293iVFTMUl9CdLgs6PAGCdZSypbeuRepAlxCHo9yIRPViu8cB4F0uoROK95xjEWXVDLxyAORzJAqRrLZ67WiB6BaVNBIEtV86dMyGn7ZHj7luBNgZf4yXGAodz4acEHJpvw', '2023-04-04 12:56:40'),
(5, 3, '1680613000511FVwEqjrWazxZYZowZBzV77e9dChouyoxDGotQr2UK1oyUNCAlboJmBDQ51zmzvdeWyg3prwwYHbi9ajZXp22mfaew7m35GpwX2484Mov1JRmfIakXrBeWk1BcvLzxPqB', '2023-04-04 12:56:40'),
(6, 3, '1680613000754ga6HfpqvpRZCoRnxraXOvkqNHYK6QPGbtggprqZUjoFDSEr2ra9ynCz2mbDkmnv2L0eHYRd73pM9Lr3hF4n1Y1EcKYK4Raw6hxwiutr0z4rRQXkZxv0I4n6xv0K6AMQ7', '2023-04-04 12:56:40'),
(7, 3, '1680613000791L0n3mi1Fj9JT8rMljZweK7SXNuhzIzv9BQCZ1CuIKwuvsAjZGny1K41VgKvdE4q9Vy33v0YG9txOSRkkfNIm2xEcQ9SIbc4gQcTGWrAbl9KpMiDxlzqvlwxgJ6nwY4kS', '2023-04-04 12:56:40'),
(8, 3, '1680613001085wKXrzjj9Vf44lkS3oG9iJDDtvDlPmMw6tXONt7alI1hTZufEzxrIsIb69fNHp1GfhVJatZBvDQlYNEKNGPcsjyDPO7EC9Uw3AZhF8acoQomeNazDqLGb7SWIWbdwqN2T', '2023-04-04 12:56:41'),
(9, 3, '1680613001127gPMJrltSTxpxvewR8u0S7vGWP5YQMgxjNXhdQM3iWi2EugHoBQ9QP0U8hXvl4WmGijKRYfm0RShISRgeRjk9AI5q9OJaNeSkCTzRwHMEBv42AatH07RzNB9q4GuwiNE9', '2023-04-04 12:56:41'),
(10, 3, '1680613001465YdykKulUndtAmVj5aEVfXh0nYWEpRYy6Jyu9EKfhkFcjWAEsz4usRSEUv3ELJ1n8c4ELxyuqXVw3Jcf1iVccgtPQwTYB6QePuWGbYkmRNfUDgfFRzhXoOvcVqn0URSdt', '2023-04-04 12:56:41'),
(11, 3, '1680613001526zbITILew8JkEeMygNUvtubWy9v9B75BZYbJUfNDhLXpwTsCUuBUDPaQMLPOjlOKJiyxGMzetlRdrtNg6zN63Bpa5kzR1m2ubf4vrM8nv89Qsw87yzrZbTlNOZUuQiOF1', '2023-04-04 12:56:41'),
(12, 3, '1680613001808a1tUDJaRGyR6yW2elhuGLsNTKf0mV9igSWaMmSgQZdLXPglQiLuHH1e4AkCKOU7KPUBT0MqaRjlhUnSBYn88pu8Z9R44R4UoTqbOBH2IhKtdxQZdAYbbWKAzknxYyvr7', '2023-04-04 12:56:41'),
(13, 3, '1680613002025PYUGPA4jd6Mxy8wIpald2mp4HGVJRbeqqc84Zn7MNaDRdPDWQFEleBbI68IZOaKJ3UZRlIGd62ZKl8W5tI5MjpUp5FGosduOkcirwEif035dKL3DqlsMwhQL62gY4upB', '2023-04-04 12:56:42'),
(14, 3, '1680613002123oUCTMBI38iYssJbrh9Q9tn9fe7Dmqk7K1M2jelvzJ7R0Dzdgh8vYnD0Uqah5lU1PHj4DTOCs6yX9sOgKqo5YdI9YkEb0hxzcR2IRXfSjvXlhdUF16MO5Dd3thtCWss9o', '2023-04-04 12:56:42'),
(15, 3, '1680613002427gjLZfRrovTSFVwnzWSGPYDGAVzGyAn5R6wXkW0FT0l3ZaCBhsQVPT7NWb0iSm55VSDPLdqKaubxLF58FpL4Sq0mCtYt4wxa3rwiLTNisepbq0CjVTpCYIYO6gDJrNMuL', '2023-04-04 12:56:42'),
(16, 3, '1680613253522JK5OrxepSg3PSvB36LEvBqyWsgJesYfrunBdMfLH1lEf0DBJMPSKPh8ciBhD9RlobOzcBfO7Z77PhBHqyrDsgEULssblTH0hWbpB56t72gRfyvZclEs7j6koLRwTcoyu', '2023-04-04 13:00:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(331) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `entry_date`) VALUES
(3, 'a@b.c2', '2023-04-04 12:45:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `secrets`
--
ALTER TABLE `secrets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `logins`
--
ALTER TABLE `logins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `secrets`
--
ALTER TABLE `secrets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
