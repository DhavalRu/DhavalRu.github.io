-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2017 at 07:21 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(3) NOT NULL,
  `cat_title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `cat_title`) VALUES
(1, 'Bootstrap'),
(2, 'JavaScript'),
(3, 'PHP'),
(11, 'HTML'),
(12, 'CSS');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(3) NOT NULL,
  `comment_post_id` int(3) NOT NULL,
  `comment_author` varchar(255) NOT NULL,
  `comment_email` varchar(255) NOT NULL,
  `comment_content` text NOT NULL,
  `comment_status` varchar(255) NOT NULL,
  `comment_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `comment_post_id`, `comment_author`, `comment_email`, `comment_content`, `comment_status`, `comment_date`) VALUES
(9, 13, 'Donald Duck', 'don@duck.com', 'Would you like a fried duck?', 'approved', '2017-07-18'),
(10, 13, 'wow', 'wow@wow.com', 'Best post ever', 'approved', '2017-07-18'),
(11, 13, 'wow', 'wow@wow.com', 'Best post ever', 'unapproved', '2017-07-18');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(3) NOT NULL,
  `post_category_id` int(3) NOT NULL,
  `post_title` varchar(255) NOT NULL,
  `post_author` varchar(255) NOT NULL,
  `post_user` varchar(255) NOT NULL,
  `post_date` date NOT NULL,
  `post_image` text NOT NULL,
  `post_content` text NOT NULL,
  `post_tags` varchar(255) NOT NULL,
  `post_comment_count` int(11) NOT NULL,
  `post_status` varchar(255) NOT NULL DEFAULT 'draft',
  `post_views_count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `post_category_id`, `post_title`, `post_author`, `post_user`, `post_date`, `post_image`, `post_content`, `post_tags`, `post_comment_count`, `post_status`, `post_views_count`) VALUES
(13, 2, 'Loops', '', 'Bob Ross', '2017-07-18', 'MQ7-3.jpg', '<p>In <a title=\"Computer science\" href=\"https://en.wikipedia.org/wiki/Computer_science\">computer science</a>, <strong>control flow</strong> (or <strong>flow of control</strong>) is the order in which individual <a title=\"Statement (computer science)\" href=\"https://en.wikipedia.org/wiki/Statement_%28computer_science%29\">statements</a>, <a class=\"mw-redirect\" title=\"Instruction (computer science)\" href=\"https://en.wikipedia.org/wiki/Instruction_%28computer_science%29\">instructions</a> or <a class=\"mw-redirect\" title=\"Function call\" href=\"https://en.wikipedia.org/wiki/Function_call\">function calls</a> of an imperative <a title=\"Computer program\" href=\"https://en.wikipedia.org/wiki/Computer_program\">program</a> are <a title=\"Execution (computing)\" href=\"https://en.wikipedia.org/wiki/Execution_%28computing%29\">executed</a> or evaluated. The emphasis on explicit control flow distinguishes an <em><a title=\"Imperative programming\" href=\"https://en.wikipedia.org/wiki/Imperative_programming\">imperative programming</a></em> language from a <em><a title=\"Declarative programming\" href=\"https://en.wikipedia.org/wiki/Declarative_programming\">declarative programming</a></em> language.</p>\r\n<p>Within an imperative <a title=\"Programming language\" href=\"https://en.wikipedia.org/wiki/Programming_language\">programming language</a>, a <em>control flow statement</em> is a statement which execution results in a choice being made as to which of two or more paths to follow. For <a title=\"Strict programming language\" href=\"https://en.wikipedia.org/wiki/Strict_programming_language\">non-strict</a> functional languages, functions and language constructs exist to achieve the same result, but they are usually not termed control flow statements.</p>\r\n<p>A set of statements is in turn generally structured as a <a title=\"Block (programming)\" href=\"https://en.wikipedia.org/wiki/Block_%28programming%29\">block</a>, which in addition to grouping, also defines a <a class=\"mw-redirect\" title=\"Lexical scope\" href=\"https://en.wikipedia.org/wiki/Lexical_scope\">lexical scope</a>.</p>\r\n<p><a title=\"Interrupt\" href=\"https://en.wikipedia.org/wiki/Interrupt\">Interrupts</a> and <a class=\"mw-redirect\" title=\"Signal (computing)\" href=\"https://en.wikipedia.org/wiki/Signal_%28computing%29\">signals</a> are low-level mechanisms that can alter the flow of control in a way similar to a subroutine, but usually occur as a response to some external stimulus or event (that can occur <a class=\"mw-redirect\" title=\"Asynchronous systems\" href=\"https://en.wikipedia.org/wiki/Asynchronous_systems\">asynchronously</a>), rather than execution of an <em>in-line</em> control flow statement.</p>\r\n<p>At the level of <a class=\"mw-redirect\" title=\"Machine language\" href=\"https://en.wikipedia.org/wiki/Machine_language\">machine language</a> or <a title=\"Assembly language\" href=\"https://en.wikipedia.org/wiki/Assembly_language\">assembly language</a>, control flow instructions usually work by altering the <a title=\"Program counter\" href=\"https://en.wikipedia.org/wiki/Program_counter\">program counter</a>. For some <a title=\"Central processing unit\" href=\"https://en.wikipedia.org/wiki/Central_processing_unit\">central processing units</a> (CPUs), the only control flow instructions available are conditional or unconditional <a title=\"Branch (computer science)\" href=\"https://en.wikipedia.org/wiki/Branch_%28computer_science%29\">branch</a> instructions, also termed jumps.</p>', 'JavaScript', 0, 'published', 13),
(14, 3, 'Conditional', '', 'Bob Ross', '2017-07-18', 'images.png', '<p>In <a title=\"Computer science\" href=\"https://en.wikipedia.org/wiki/Computer_science\">computer science</a>, <strong>conditional statements</strong>, <strong>conditional expressions</strong> and <strong>conditional constructs</strong> are features of a <a title=\"Programming language\" href=\"https://en.wikipedia.org/wiki/Programming_language\">programming language</a>, which perform different computations or actions depending on whether a programmer-specified <a class=\"mw-redirect\" title=\"Boolean datatype\" href=\"https://en.wikipedia.org/wiki/Boolean_datatype\">boolean</a> <em>condition</em> evaluates to true or false. Apart from the case of <a class=\"mw-redirect\" title=\"Branch predication\" href=\"https://en.wikipedia.org/wiki/Branch_predication\">branch predication</a>, this is always achieved by selectively altering the <a title=\"Control flow\" href=\"https://en.wikipedia.org/wiki/Control_flow\">control flow</a> based on some condition.</p>\r\n<p>In <a title=\"Imperative programming\" href=\"https://en.wikipedia.org/wiki/Imperative_programming\">imperative programming</a> languages, the term \"conditional <a class=\"mw-redirect\" title=\"Statement (programming)\" href=\"https://en.wikipedia.org/wiki/Statement_%28programming%29\">statement</a>\" is usually used, whereas in <a title=\"Functional programming\" href=\"https://en.wikipedia.org/wiki/Functional_programming\">functional programming</a>, the terms \"conditional <a class=\"mw-redirect\" title=\"Expression (programming)\" href=\"https://en.wikipedia.org/wiki/Expression_%28programming%29\">expression</a>\" or \"conditional construct\" are preferred, because these terms all have distinct meanings.</p>\r\n<p>Although <a title=\"Dynamic dispatch\" href=\"https://en.wikipedia.org/wiki/Dynamic_dispatch\">dynamic dispatch</a> is not usually classified as a conditional construct, it is another way to select between alternatives at <a title=\"Run time (program lifecycle phase)\" href=\"https://en.wikipedia.org/wiki/Run_time_%28program_lifecycle_phase%29\">runtime</a>.</p>', 'PHP', 0, 'published', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(3) NOT NULL,
  `username` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_firstname` varchar(255) NOT NULL,
  `user_lastname` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_image` text NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `randSalt` varchar(255) NOT NULL DEFAULT '$2y$07$iusesomecrazystrings22'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `user_password`, `user_firstname`, `user_lastname`, `user_email`, `user_image`, `user_role`, `randSalt`) VALUES
(3, 'peter', 'ZAZZ', 'Williamson', 'Peterson', 'pet@pet.com', '', 'admin', ''),
(19, 'Bob Ross', '$2y$10$hqFTX16IgNgb0OHtjNSRROrlgGjHG4U.37JpYlO/Zp/DJcp.oVJp2', '', '', 'bob@ross.com', '', 'admin', '$2y$07$iusesomecrazystrings22');

-- --------------------------------------------------------

--
-- Table structure for table `users_online`
--

CREATE TABLE `users_online` (
  `id` int(11) NOT NULL,
  `session` varchar(255) NOT NULL,
  `time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_online`
--

INSERT INTO `users_online` (`id`, `session`, `time`) VALUES
(1, 'jcrgmoet3qujfe3ph1tbdmr7ff', 1497677819),
(2, 's1bj4hp96av2e1chq234vl2hkv', 1497673890),
(3, 'aablf589vuh4ce2itucrgjnnt2', 1497677730),
(4, 'q482bttgcn34ega3nae51rfq6i', 1497843851),
(5, '9jlno1bmo01kj59a1h2nmic6p9', 1498462203),
(6, 'ri70o4rlqv8lf7c9941t6iucut', 1500441688);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `users_online`
--
ALTER TABLE `users_online`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `users_online`
--
ALTER TABLE `users_online`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
