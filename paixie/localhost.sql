-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 08 月 16 日 11:44
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `paixie`
--
CREATE DATABASE IF NOT EXISTS `paixie` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `paixie`;

-- --------------------------------------------------------

--
-- 表的结构 `activeintime`
--

CREATE TABLE IF NOT EXISTS `activeintime` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `starttime` varchar(10) NOT NULL,
  `stoptime` varchar(10) NOT NULL,
  `class` varchar(20) NOT NULL,
  `src` char(50) NOT NULL,
  `url` char(100) NOT NULL,
  `oldprice` int(10) NOT NULL,
  `newprice` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- 转存表中的数据 `activeintime`
--

INSERT INTO `activeintime` (`id`, `starttime`, `stoptime`, `class`, `src`, `url`, `oldprice`, `newprice`) VALUES
(1, '2016-07-07', '2016-08-30', '1', 'shop_show.html', 'image/act1.jpg', 599, 399),
(2, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act2.jpg', 799, 399),
(3, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act3.jpg', 799, 399),
(4, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act4.jpg', 799, 399),
(5, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act5.jpg', 799, 399),
(6, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act6.jpg', 799, 399),
(7, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act7.jpg', 799, 399),
(8, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act6.jpg', 199, 399),
(9, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act6.jpg', 199, 399),
(10, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act6.jpg', 199, 399),
(11, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act6.jpg', 199, 399),
(12, '2016-07-07', '2016-08-30', '1', 'javascript:;', 'image/act6.jpg', 199, 399),
(13, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act3.jpg', 199, 399),
(14, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act3.jpg', 199, 399),
(15, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act3.jpg', 199, 399),
(16, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act3.jpg', 199, 399),
(17, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act3.jpg', 199, 399),
(18, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act3.jpg', 199, 399),
(25, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act2.jpg', 199, 399),
(26, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act2.jpg', 199, 399),
(27, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act2.jpg', 199, 399),
(28, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act2.jpg', 199, 399),
(29, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act2.jpg', 199, 399),
(30, '2016-07-07', '2016-08-30', '2', 'javascript:;', 'image/act2.jpg', 199, 399);

-- --------------------------------------------------------

--
-- 表的结构 `floor1`
--

CREATE TABLE IF NOT EXISTS `floor1` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `class` char(10) NOT NULL,
  `hre` char(100) NOT NULL,
  `src` char(100) NOT NULL,
  `tltle` char(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- 转存表中的数据 `floor1`
--

INSERT INTO `floor1` (`id`, `class`, `hre`, `src`, `tltle`, `price`) VALUES
(1, 'lb', 'http://www.baidu.com', 'image/f1_lb.jpg', '', 0),
(2, 'r1', 'http://www.baidu.com', 'image/f1_img0_0.jpg', '', 0),
(3, 'r1', 'http://www.baidu.com', 'image/f1_img0_1.jpg', '', 0),
(4, 'r1', 'http://www.baidu.com', 'image/f1_img0_2.jpg', '', 0),
(5, 'r1', 'http://www.baidu.com', 'image/f1_img0_3.jpg', '', 0),
(6, 'r1', 'http://www.baidu.com', 'image/f1_img0_4.jpg', '', 0),
(7, 'r1', 'http://www.baidu.com', 'image/f1_img0_5.jpg', '李宁  运动球衣足球系列', 89),
(8, 'r1', 'http://www.baidu.com', 'image/f1_img0_6.jpg', '野外探险 情侣登山包', 99),
(9, 'r1', 'http://www.baidu.com', 'image/f1_img0_7.jpg', '阿迪达斯 三叶草板鞋', 100),
(10, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 399),
(11, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 399),
(12, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 399),
(13, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 399),
(14, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 399),
(15, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 399),
(16, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 399),
(17, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 399),
(18, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 399),
(19, 'r2', 'javascript:;', 'image/f1_img1_1.jpg', 'NIKE 耐克新款男子AIRMAX', 899),
(22, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299),
(23, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299),
(24, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299),
(25, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299),
(26, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299),
(27, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299),
(28, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299),
(29, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299),
(30, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299),
(31, 'r3', 'javascript:;', 'image/f1_img2_2.jpg', '特步 成就你的梦想', 299);

-- --------------------------------------------------------

--
-- 表的结构 `floor2`
--

CREATE TABLE IF NOT EXISTS `floor2` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `class` char(10) NOT NULL,
  `hre` char(100) NOT NULL,
  `src` char(100) NOT NULL,
  `tltle` char(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- 转存表中的数据 `floor2`
--

INSERT INTO `floor2` (`id`, `class`, `hre`, `src`, `tltle`, `price`) VALUES
(1, 'lb', 'http://www.baidu.com', 'image/f2_01_lb.jpg', '', 0),
(2, 'r1', 'http://www.baidu.com', 'image/f2_01_0.jpg', '', 0),
(3, 'r1', 'http://www.baidu.com', 'image/f2_01_1.jpg', '', 0),
(4, 'r1', 'http://www.baidu.com', 'image/f2_01_2.jpg', '', 0),
(5, 'r1', 'http://www.baidu.com', 'image/f2_01_3.jpg', '', 0),
(6, 'r1', 'http://www.baidu.com', 'image/f2_01_4.jpg', '', 0),
(7, 'r1', 'http://www.baidu.com', 'image/f2_01_5.jpg', '', 0),
(8, 'r1', 'http://www.baidu.com', 'image/f2_01_6.jpg', '米基头 网纱透气休闲鞋', 299),
(9, 'r1', 'http://www.baidu.com', 'image/f2_01_7.jpg', '米基头2 网纱透气休闲鞋', 199),
(10, 'r1', 'http://www.baidu.com', 'image/f2_01_8.jpg', '米基头3 网纱透气休闲鞋', 599),
(11, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2016夏季欧美凉鞋鱼嘴新款', 199),
(12, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2016夏季欧美凉鞋鱼嘴新款', 299),
(13, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2016夏季欧美凉鞋鱼嘴新款', 399),
(14, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2017夏季欧美凉鞋鱼嘴新款', 99),
(15, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2017夏季欧美凉鞋鱼嘴新款', 99),
(16, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2017夏季欧美凉鞋鱼嘴新款', 99),
(17, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2017夏季欧美凉鞋鱼嘴新款', 99),
(18, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2017夏季欧美凉鞋鱼嘴新款', 99),
(19, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2017夏季欧美凉鞋鱼嘴新款', 99),
(20, 'r2', 'http://www.baidu.com', 'image/f2_02_1.jpg', '2017夏季欧美凉鞋鱼嘴新款', 99),
(23, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 19),
(24, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 29),
(25, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 329),
(26, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 49),
(27, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 59),
(28, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 69),
(31, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 69),
(32, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 69),
(33, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 69),
(34, 'r3', 'http://www.baidu.com', 'image/f2_03_1.jpg', '人本 情侣款韩版学生低帮系带', 69);

-- --------------------------------------------------------

--
-- 表的结构 `floor3`
--

CREATE TABLE IF NOT EXISTS `floor3` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `class` char(10) NOT NULL,
  `hre` char(100) NOT NULL,
  `src` char(100) NOT NULL,
  `tltle` char(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- 转存表中的数据 `floor3`
--

INSERT INTO `floor3` (`id`, `class`, `hre`, `src`, `tltle`, `price`) VALUES
(1, 'lb', 'http://www.baidu.com', 'image/f301.jpg', '', 0),
(2, 'r1', 'http://www.baidu.com', 'image/f302.jpg', '', 0),
(3, 'r1', 'http://www.baidu.com', 'image/f303.jpg', '', 0),
(4, 'r1', 'http://www.baidu.com', 'image/f304.jpg', '', 0),
(5, 'r1', 'http://www.baidu.com', 'image/f305.jpg', '', 0),
(6, 'r1', 'http://www.baidu.com', 'image/f306.jpg', '', 0),
(7, 'r1', 'http://www.baidu.com', 'image/f307.jpg', '', 0),
(8, 'r1', 'http://www.baidu.com', 'image/f308.jpg', '斯鑫明 男士运动裤', 39),
(9, 'r1', 'http://www.baidu.com', 'image/f309.jpg', '丹杰士 男士运动套服', 99),
(10, 'r1', 'http://www.baidu.com', 'image/f30a.jpg', '丹杰士2 男士运动套服', 99),
(11, 'r2', 'http://www.baidu.com', 'image/f311.jpg', '公羊 英伦男士头层软皮低帮', 179),
(12, 'r2', 'http://www.baidu.com', 'image/f311.jpg', '公羊 英伦男士头层软皮低帮', 179),
(13, 'r2', 'http://www.baidu.com', 'image/f311.jpg', '公羊 英伦男士头层软皮低帮', 179),
(14, 'r2', 'http://www.baidu.com', 'image/f311.jpg', '公羊 英伦男士头层软皮低帮', 179),
(15, 'r2', 'http://www.baidu.com', 'image/f311.jpg', '公羊 英伦男士头层软皮低帮', 179),
(17, 'r2', 'http://www.baidu.com', 'image/f312.jpg', '想川 英伦低帮源头系带耐磨透气', 169),
(18, 'r2', 'http://www.baidu.com', 'image/f312.jpg', '想川 英伦低帮源头系带耐磨透气', 169),
(19, 'r2', 'http://www.baidu.com', 'image/f312.jpg', '想川 英伦低帮源头系带耐磨透气', 169),
(20, 'r2', 'http://www.baidu.com', 'image/f312.jpg', '想川 英伦低帮源头系带耐磨透气', 169),
(21, 'r2', 'http://www.baidu.com', 'image/f312.jpg', '想川 英伦低帮源头系带耐磨透气', 169),
(23, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168),
(24, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168),
(25, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168),
(26, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168),
(27, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168),
(28, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168),
(31, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168),
(32, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168),
(33, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168),
(34, 'r3', 'http://www.baidu.com', 'image/f322.jpg', '卡足帝夏季新款男士鞋凉鞋男这你', 168);

-- --------------------------------------------------------

--
-- 表的结构 `floor4`
--

CREATE TABLE IF NOT EXISTS `floor4` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `class` char(10) NOT NULL,
  `hre` char(100) NOT NULL,
  `src` char(100) NOT NULL,
  `tltle` char(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- 转存表中的数据 `floor4`
--

INSERT INTO `floor4` (`id`, `class`, `hre`, `src`, `tltle`, `price`) VALUES
(1, 'lb', 'http;//www.baidu.com', 'image/f400.jpg', '', 0),
(2, 'r1', 'http;//www.baidu.com', 'image/f401.jpg', '', 0),
(3, 'r1', 'http;//www.baidu.com', 'image/f402.jpg', '', 0),
(4, 'r1', 'http;//www.baidu.com', 'image/f403.jpg', '', 0),
(5, 'r1', 'http;//www.baidu.com', 'image/f404.jpg', '', 0),
(6, 'r1', 'http;//www.baidu.com', 'image/f405.jpg', '', 0),
(7, 'r1', 'http;//www.baidu.com', 'image/f406.jpg', '', 0),
(8, 'r1', 'http;//www.baidu.com', 'image/f407.jpg', '', 0),
(9, 'r1', 'http;//www.baidu.com', 'image/f408.jpg', '儿童套装', 96),
(10, 'r1', 'http;//www.baidu.com', 'image/f409.jpg', '儿童运动鞋', 46),
(11, 'r1', 'http;//www.baidu.com', 'image/f40a.jpg', '361户外休闲鞋', 66),
(12, 'r2', 'http;//www.baidu.com', 'image/f411.jpg', '咪咪熊2016夏季新款男童短袖T恤', 69),
(13, 'r2', 'http;//www.baidu.com', 'image/f411.jpg', '咪咪熊2016夏季新款男童短袖T恤', 69),
(14, 'r2', 'http;//www.baidu.com', 'image/f411.jpg', '咪咪熊2016夏季新款男童短袖T恤', 69),
(15, 'r2', 'http;//www.baidu.com', 'image/f411.jpg', '咪咪熊2016夏季新款男童短袖T恤', 69),
(16, 'r2', 'http;//www.baidu.com', 'image/f411.jpg', '咪咪熊2016夏季新款男童短袖T恤', 69),
(18, 'r2', 'http;//www.baidu.com', 'image/f412.jpg', '咪咪熊童装夏季女童短袖T恤', 69),
(19, 'r2', 'http;//www.baidu.com', 'image/f412.jpg', '咪咪熊童装夏季女童短袖T恤', 69),
(20, 'r2', 'http;//www.baidu.com', 'image/f412.jpg', '咪咪熊童装夏季女童短袖T恤', 69),
(21, 'r2', 'http;//www.baidu.com', 'image/f412.jpg', '咪咪熊童装夏季女童短袖T恤', 69),
(22, 'r2', 'http;//www.baidu.com', 'image/f412.jpg', '咪咪熊童装夏季女童短袖T恤', 69),
(24, 'r3', 'http;//www.baidu.com', 'image/f421.jpg', '鸿星尔克 男童低帮魔术贴调节', 119),
(25, 'r3', 'http;//www.baidu.com', 'image/f421.jpg', '鸿星尔克 男童低帮魔术贴调节', 119),
(26, 'r3', 'http;//www.baidu.com', 'image/f421.jpg', '鸿星尔克 男童低帮魔术贴调节', 119),
(27, 'r3', 'http;//www.baidu.com', 'image/f421.jpg', '鸿星尔克 男童低帮魔术贴调节', 119),
(28, 'r3', 'http;//www.baidu.com', 'image/f421.jpg', '鸿星尔克 男童低帮魔术贴调节', 119),
(30, 'r3', 'http;//www.baidu.com', 'image/f422.jpg', '鸿星尔克 男童低帮耐磨系带', 119),
(31, 'r3', 'http;//www.baidu.com', 'image/f422.jpg', '鸿星尔克 男童低帮耐磨系带', 119),
(32, 'r3', 'http;//www.baidu.com', 'image/f422.jpg', '鸿星尔克 男童低帮耐磨系带', 119),
(33, 'r3', 'http;//www.baidu.com', 'image/f422.jpg', '鸿星尔克 男童低帮耐磨系带', 119),
(34, 'r3', 'http;//www.baidu.com', 'image/f422.jpg', '鸿星尔克 男童低帮耐磨系带', 119);

-- --------------------------------------------------------

--
-- 表的结构 `floor5`
--

CREATE TABLE IF NOT EXISTS `floor5` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `class` char(10) NOT NULL,
  `hre` char(100) NOT NULL,
  `src` char(100) NOT NULL,
  `tltle` char(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- 转存表中的数据 `floor5`
--

INSERT INTO `floor5` (`id`, `class`, `hre`, `src`, `tltle`, `price`) VALUES
(1, 'lb', 'http:www.baidu.com', 'image/f500.jpg', '', 0),
(2, 'r1', 'http:www.baidu.com', 'image/f501.jpg', '', 0),
(3, 'r1', 'http:www.baidu.com', 'image/f502.jpg', '', 0),
(4, 'r1', 'http:www.baidu.com', 'image/f503.jpg', '', 0),
(5, 'r1', 'http:www.baidu.com', 'image/f504.jpg', '', 0),
(6, 'r1', 'http:www.baidu.com', 'image/f505.jpg', '', 0),
(7, 'r1', 'http:www.baidu.com', 'image/f506.jpg', '青雨 牛皮钥匙包', 25),
(8, 'r1', 'http:www.baidu.com', 'image/f507.jpg', '花花公子蕾丝性感内裤', 49),
(9, 'r1', 'http:www.baidu.com', 'image/f508.jpg', '瑞士军刀 男士钱包', 109),
(10, 'r2', 'http:www.baidu.com', 'image/f511.jpg', '柏丽雅诗时尚百搭蝴蝶结斜挎包', 60),
(11, 'r2', 'http:www.baidu.com', 'image/f511.jpg', '柏丽雅诗时尚百搭蝴蝶结斜挎包', 60),
(12, 'r2', 'http:www.baidu.com', 'image/f511.jpg', '柏丽雅诗时尚百搭蝴蝶结斜挎包', 60),
(13, 'r2', 'http:www.baidu.com', 'image/f511.jpg', '柏丽雅诗时尚百搭蝴蝶结斜挎包', 60),
(14, 'r2', 'http:www.baidu.com', 'image/f511.jpg', '柏丽雅诗时尚百搭蝴蝶结斜挎包', 60),
(15, 'r2', 'http:www.baidu.com', 'image/f512.jpg', '柏丽雅诗2016新款铆钉时尚百搭', 50),
(16, 'r2', 'http:www.baidu.com', 'image/f512.jpg', '柏丽雅诗2016新款铆钉时尚百搭', 50),
(17, 'r2', 'http:www.baidu.com', 'image/f512.jpg', '柏丽雅诗2016新款铆钉时尚百搭', 50),
(18, 'r2', 'http:www.baidu.com', 'image/f512.jpg', '柏丽雅诗2016新款铆钉时尚百搭', 50),
(19, 'r2', 'http:www.baidu.com', 'image/f512.jpg', '柏丽雅诗2016新款铆钉时尚百搭', 50),
(20, 'r3', 'http:www.baidu.com', 'image/f521.jpg', '玉鹭家纺 钓鱼竿支架蚊帐三开', 239),
(21, 'r3', 'http:www.baidu.com', 'image/f521.jpg', '玉鹭家纺 钓鱼竿支架蚊帐三开', 239),
(22, 'r3', 'http:www.baidu.com', 'image/f521.jpg', '玉鹭家纺 钓鱼竿支架蚊帐三开', 239),
(23, 'r3', 'http:www.baidu.com', 'image/f521.jpg', '玉鹭家纺 钓鱼竿支架蚊帐三开', 239),
(24, 'r3', 'http:www.baidu.com', 'image/f521.jpg', '玉鹭家纺 钓鱼竿支架蚊帐三开', 239),
(25, 'r3', 'http:www.baidu.com', 'image/f522.jpg', '玉鹭家纺 夏季防蚊大吊顶唯美', 239),
(26, 'r3', 'http:www.baidu.com', 'image/f522.jpg', '玉鹭家纺 夏季防蚊大吊顶唯美', 239),
(27, 'r3', 'http:www.baidu.com', 'image/f522.jpg', '玉鹭家纺 夏季防蚊大吊顶唯美', 239),
(28, 'r3', 'http:www.baidu.com', 'image/f522.jpg', '玉鹭家纺 夏季防蚊大吊顶唯美', 239),
(29, 'r3', 'http:www.baidu.com', 'image/f522.jpg', '玉鹭家纺 夏季防蚊大吊顶唯美', 239);

-- --------------------------------------------------------

--
-- 表的结构 `goodslist`
--

CREATE TABLE IF NOT EXISTS `goodslist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `url` char(50) NOT NULL,
  `src` char(50) NOT NULL,
  `oldprice` int(4) NOT NULL,
  `nowprice` int(4) NOT NULL,
  `title` char(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `storename` char(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- 转存表中的数据 `goodslist`
--

INSERT INTO `goodslist` (`id`, `url`, `src`, `oldprice`, `nowprice`, `title`, `storename`) VALUES
(1, 'product.html', 'image/glist01.jpg', 198, 198, '落雁莎 2016夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(2, 'product.html', 'image/glist02.jpg', 198, 98, '落雁莎 2010夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(3, 'product.html', 'image/glist03.jpg', 198, 109, '落雁莎 2014夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(4, 'product.html', 'image/glist04.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(5, 'product.html', 'image/glist05.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(6, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(7, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(8, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(9, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(10, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(11, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(12, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(13, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(14, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(15, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(16, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(17, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(18, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(19, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(20, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店'),
(21, 'product.html', 'image/glist06.jpg', 198, 129, '落雁莎 2017夏装新款哈南潮流圆领印花女式T恤衫', '落雁莎旗舰店');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `uname` varchar(20) NOT NULL,
  `pwd` char(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uname` (`uname`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `uname`, `pwd`) VALUES
(1, '2147483647', '123456'),
(2, '1234567890', '123456'),
(8, '12345678909', '123456'),
(10, '12345678901', '123456'),
(11, '12345678902', '123456'),
(12, '12345678903', '123456'),
(13, '12345678904', '123456'),
(14, '12345678905', '123456'),
(15, '12345678906', '123456'),
(16, '12345678907', '123456'),
(17, '12345678908', '123456'),
(19, '12345678900', '123456'),
(20, '15890443793', '123456'),
(21, '1', '123456'),
(23, '2', '123456'),
(24, '13781443645', '123456'),
(26, '13788888888', '123456'),
(27, '13788888881', '123456'),
(28, '13500000001', '123456'),
(29, '13500000002', '123456'),
(30, '15890443795', '123456'),
(31, '1589044379', '123456'),
(32, '15811111111', '123456');
--
-- 数据库: `qwe`
--
CREATE DATABASE IF NOT EXISTS `qwe` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `qwe`;
--
-- 数据库: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

-- --------------------------------------------------------

--
-- 表的结构 `shopcart`
--

CREATE TABLE IF NOT EXISTS `shopcart` (
  `shopid` int(11) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`shopid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `shopcart`
--

INSERT INTO `shopcart` (`shopid`, `price`, `name`) VALUES
(1, 5000, '苹果9'),
(2, 5000, '苹果8'),
(3, 6000, '华为手机');

-- --------------------------------------------------------

--
-- 表的结构 `t_user`
--

CREATE TABLE IF NOT EXISTS `t_user` (
  `username` text CHARACTER SET utf8 COLLATE utf8_bin,
  `password` text,
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `t_user`
--

INSERT INTO `t_user` (`username`, `password`, `userid`) VALUES
('liuyongsheng', '123456', 1),
('asdaff', '124124', 2),
('asdas', '124124', 3),
('4345347', '124124', 4);
--
-- 数据库: `xhkdb`
--
CREATE DATABASE IF NOT EXISTS `xhkdb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `xhkdb`;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
