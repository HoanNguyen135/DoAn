-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2022 at 11:50 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodebasic`
--

-- --------------------------------------------------------

--
-- Table structure for table `application_dorm`
--

CREATE TABLE `application_dorm` (
  `idDonDK` int(11) NOT NULL,
  `id_TK` int(11) NOT NULL,
  `HoTen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MSV` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `GioiTinh` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Lop` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CCCD` int(15) NOT NULL,
  `Dctt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DoiTuong` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sdt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sdt_Phuhuynh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayTaoDon` date NOT NULL,
  `TrangThai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `application_dorm`
--

INSERT INTO `application_dorm` (`idDonDK`, `id_TK`, `HoTen`, `MSV`, `NgaySinh`, `GioiTinh`, `Lop`, `CCCD`, `Dctt`, `DoiTuong`, `Sdt`, `Sdt_Phuhuynh`, `NgayTaoDon`, `TrangThai`) VALUES
(1, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(2, 9, 'Phạm Tuyết Như', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(3, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(4, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(5, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(6, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(7, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(8, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(9, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(10, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(11, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(12, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(13, 9, 'a', 'a', '2022-12-15', 'Nam', '60TH6', 32141214, 'Hà nội', 'Không', '084563454', '0956745634', '2022-12-15', 'Chờ duyệt');

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `idKhu` int(11) NOT NULL,
  `TenKhu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MoTa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TrangThai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayTao` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`idKhu`, `TenKhu`, `MoTa`, `TrangThai`, `NgayTao`) VALUES
(1, 'Nhà 05', 'Tòa nhà 05', 'Hoạt động', '0000-00-00'),
(2, 'Nhà 03', 'Tòa nhà 03', 'Hoạt động', '0000-00-00'),
(6, 'Nhà 07', 'Nhà 07', 'Hoạt động', '2022-12-12');

-- --------------------------------------------------------

--
-- Table structure for table `csvc`
--

CREATE TABLE `csvc` (
  `idCsvc` int(11) NOT NULL,
  `TenCsvc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GiaTien` bigint(20) NOT NULL,
  `MoTaCsvc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NgayTaoCsvc` date NOT NULL,
  `TrangThai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `csvc`
--

INSERT INTO `csvc` (`idCsvc`, `TenCsvc`, `GiaTien`, `MoTaCsvc`, `NgayTaoCsvc`, `TrangThai`) VALUES
(1, 'Quạt điện', 500000, 'quạt điện 4 cánh', '2022-12-25', 'Hoạt động'),
(7, 'ulala', 890000, 'Abc', '2022-01-02', 'Hoat dong');

-- --------------------------------------------------------

--
-- Table structure for table `csvc_phong`
--

CREATE TABLE `csvc_phong` (
  `idCsvcPhong` int(11) NOT NULL,
  `idPhong` int(11) NOT NULL,
  `idCsvc` int(11) NOT NULL,
  `SoLuongCsvc` int(11) NOT NULL,
  `SoLuongConTot` int(11) NOT NULL,
  `SoLuongDaHong` int(11) NOT NULL,
  `GhiChu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayTaoCsvcPhong` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `csvc_phong`
--

INSERT INTO `csvc_phong` (`idCsvcPhong`, `idPhong`, `idCsvc`, `SoLuongCsvc`, `SoLuongConTot`, `SoLuongDaHong`, `GhiChu`, `NgayTaoCsvcPhong`) VALUES
(1, 1, 1, 4, 4, 0, 'Phòng 100', '2022-12-25');

-- --------------------------------------------------------

--
-- Table structure for table `diennuoc`
--

CREATE TABLE `diennuoc` (
  `idDienNuoc` int(11) NOT NULL,
  `idPhong` int(11) NOT NULL,
  `SoDienTruoc` int(11) NOT NULL,
  `SoDienSau` int(11) NOT NULL,
  `TrangThaiDienNuoc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idGiaDienNuoc` int(11) NOT NULL,
  `NgayTaoDon` date NOT NULL,
  `SoNuocTruoc` int(11) NOT NULL,
  `SoNuocSau` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `diennuoc`
--

INSERT INTO `diennuoc` (`idDienNuoc`, `idPhong`, `SoDienTruoc`, `SoDienSau`, `TrangThaiDienNuoc`, `idGiaDienNuoc`, `NgayTaoDon`, `SoNuocTruoc`, `SoNuocSau`) VALUES
(1, 1, 150, 170, 'Chưa nộp', 1, '2022-12-13', 100, 150),
(2, 1, 150, 170, 'Chưa nộp', 1, '2022-10-10', 100, 150),
(3, 1, 150, 170, 'ádsa', 1, '2022-12-10', 100, 150),
(4, 1, 150, 170, 'ádsa', 1, '2022-12-10', 100, 150),
(5, 1, 150, 170, 'ádsa', 1, '2021-12-10', 100, 150),
(6, 1, 150, 170, 'ádsa', 1, '2022-12-10', 100, 150),
(7, 1, 150, 170, 'ádsa', 1, '2022-11-10', 100, 150),
(8, 1, 150, 170, 'ádsa', 1, '2022-12-10', 100, 150);

-- --------------------------------------------------------

--
-- Table structure for table `giadiennuoc`
--

CREATE TABLE `giadiennuoc` (
  `idGiaDienNuoc` int(11) NOT NULL,
  `giaDien` int(11) NOT NULL,
  `giaNuoc` int(11) NOT NULL,
  `NgayTaoGiaDienNuoc` date NOT NULL,
  `NgaySua` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `giadiennuoc`
--

INSERT INTO `giadiennuoc` (`idGiaDienNuoc`, `giaDien`, `giaNuoc`, `NgayTaoGiaDienNuoc`, `NgaySua`) VALUES
(1, 2000, 7000, '2022-12-19', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `idJob` int(11) NOT NULL,
  `nameJob` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timeStart` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timeEnd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`idJob`, `nameJob`, `timeStart`, `timeEnd`, `date`) VALUES
(1, 'update', '2012', '2022', '3000'),
(2, 'update', '2012', '2022', '3000'),
(3, 'update', '2012', '2022', '3000'),
(4, 'update', '2012', '2022', '3000'),
(5, 'Hoan', '2012', '2022', '2023'),
(6, 'Hoan', '2012', '2022', '2023'),
(7, 'Hoan', '2012', '2022', '2022-11-05T05:00:00.000Z'),
(8, 'Hoan', '2012', '2022', '2022-11-05'),
(9, 'Hoan', '2012', '2022', '2022-11-05'),
(10, 'Hoan', '2012', '2022', '2022-11-12'),
(11, '5', 'tien', '5', '5');

-- --------------------------------------------------------

--
-- Table structure for table `profile_student`
--

CREATE TABLE `profile_student` (
  `idHSSV` int(11) NOT NULL,
  `HoTen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MSV` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `Sdt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GioiTinh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DanToc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CCCD` int(11) NOT NULL,
  `QueQuan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Khoa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Lop` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Dctt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HoTenBo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sdt_Bo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HoTenMe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sdt_Me` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email_Phuhuynh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_TK` int(11) NOT NULL,
  `AnhDaiDien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profile_student`
--

INSERT INTO `profile_student` (`idHSSV`, `HoTen`, `MSV`, `NgaySinh`, `Sdt`, `GioiTinh`, `DanToc`, `CCCD`, `QueQuan`, `Khoa`, `Email`, `Lop`, `Dctt`, `HoTenBo`, `Sdt_Bo`, `HoTenMe`, `Sdt_Me`, `Email_Phuhuynh`, `id_TK`, `AnhDaiDien`) VALUES
(1, 'Nguyễn Công Hoan', '1851061349', '2000-05-13', '0786453123', 'Nam', 'Kinh', 2131230213, 'Hà Nam', 'CNTT', '1851061349@e.tlu.edu.vn', '60TH3', 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục Tỉnh Hà Nam', 'Nguyễn Khắc Thoại', '098223821', 'Trần Thị Tuyến', '068213922', 'tuyentran@gmail.com', 12, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2F2b0f2d0d-78c7-4ca9-a16d-4462fa8561f81670924158879.jpg?alt=media&token=6e03c449-79ee-42f9-beae-460d3bb0f2c9');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `idPhong` int(11) NOT NULL,
  `idKhu` int(11) NOT NULL,
  `TenPhong` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `MoTa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayTao` date NOT NULL,
  `TrangThai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoNguoi` int(11) NOT NULL,
  `Tang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`idPhong`, `idKhu`, `TenPhong`, `SoLuong`, `MoTa`, `NgayTao`, `TrangThai`, `SoNguoi`, `Tang`) VALUES
(1, 1, 'P100', 6, 'Phòng 100', '2022-12-10', 'Hoạt động', 5, 'Tầng 1'),
(2, 1, 'P101', 6, 'Phòng 101', '2022-12-10', 'Hoạt động', 5, 'Tầng 1'),
(3, 1, 'P102', 7, 'Phòng 102', '2022-12-10', 'Hoạt động', 2, 'Tầng 1'),
(4, 1, 'P103', 6, 'Phòng 103', '2022-12-09', 'Hoạt động', 2, 'Tầng 1'),
(5, 1, 'P104', 6, 'Phòng 104', '2022-12-10', 'Hoạt động', 2, 'Tầng 1'),
(12, 1, 'P404', 7, 'P404', '2022-12-16', 'Hoạt động', 0, 'Tầng 2');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `idSV` int(11) NOT NULL,
  `HoTen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MSV` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `Sdt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GioiTinh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DanToc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CCCD` int(11) NOT NULL,
  `QueQuan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Khoa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Lop` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Dctt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HoTenBo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sdt_Bo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HoTenMe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sdt_Me` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email_Phuhuynh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_TK` int(11) NOT NULL,
  `idPhong` int(11) NOT NULL,
  `idKhu` int(11) NOT NULL,
  `AnhDaiDien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`idSV`, `HoTen`, `MSV`, `NgaySinh`, `Sdt`, `GioiTinh`, `DanToc`, `CCCD`, `QueQuan`, `Khoa`, `Email`, `Lop`, `Dctt`, `HoTenBo`, `Sdt_Bo`, `HoTenMe`, `Sdt_Me`, `Email_Phuhuynh`, `id_TK`, `idPhong`, `idKhu`, `AnhDaiDien`) VALUES
(1, 'Nguyễn Công Hoan', '1851061349', '2000-05-13', '0786453123', 'Nam', 'Kinh', 2131230213, 'Hà Nam', 'CNTT', '1851061349@e.tlu.edu.vn', '60TH3', 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục Tỉnh Hà Nam', 'Nguyễn Khắc Thoại', '098223821', 'Trần Thị Tuyến', '068213922', 'tuyentran@gmail.com', 9, 1, 1, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2F0dfdc1b8-bd24-4f27-bf94-348cef7b8d901671078266371.jpg?alt=media&token=f26e7ce7-9dfa-4b10-b966-9084f560b106'),
(2, 'Trần Thị Tuyến', '1850162160', '2000-12-05', '0895451125', 'Nữ', 'Kinh', 356486654, 'Hà Nội', 'CNTT', '1850162160@e.tlu.edu.vn', '60TH4', '12 Ngách 156 Khương Trung Đống Đa Hà Nội', 'Trần Văn A', '0564848926', 'Trần Văn B', '0569123546', 'thoainguyen12@gmail.com', 2, 1, 1, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692'),
(3, 'Phạm Tuyết Như', '189523128', '2006-07-15', '059912130', 'Nữ', 'Kinh', 356225523, 'Hà Nam', 'CNTT', '1850322161@e.tlu.edu.vn', '60TH4', 'số 25 Trần Phú Hà Nội', 'Phạm Mai Mai', '056421122', 'Trần Mai Hiền', '0213214412', 'tranmaimia@gmail.com', 3, 1, 1, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692'),
(4, 'Trần Công Nam', '1242536532', '2022-12-16', '096345234', 'Nam', 'Kinh', 341242142, 'Hưng Yên', 'CNTT', '128372182@e.tlu.edu.vn', '60TH4', 'Hà Nội', 'Trần Văn Cảnh', '0932132742', 'Trần Mai Hoa', '09647346223', 'Hoannguyne213@gmail.com', 12, 2, 1, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692');

-- --------------------------------------------------------

--
-- Table structure for table `suachuas`
--

CREATE TABLE `suachuas` (
  `idSuaChua` int(11) NOT NULL,
  `idPhong` int(11) NOT NULL,
  `NoiDung` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayTaoSuaChua` date NOT NULL,
  `TrangThaiSuaChua` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `suachuas`
--

INSERT INTO `suachuas` (`idSuaChua`, `idPhong`, `NoiDung`, `NgayTaoSuaChua`, `TrangThaiSuaChua`) VALUES
(1, 1, 'Vòi nước bị hỏng', '2022-12-25', 'Đang sửa chữa'),
(2, 1, 'Hỏng quạt', '2022-12-25', 'Đang sửa '),
(4, 2, 'A', '2022-12-25', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `address`) VALUES
(1, 'Nguyen', 'Nguyen', 'hoannguyen13520', 'Ha Nam 1'),
(5, 'tien', 'tien', 'tien@gmail.com', 'abc'),
(6, 'Hoan', 'Hoan', '1', '2');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `Username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date_created` date NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Username`, `Position`, `Email`, `Status`, `Date_created`, `Password`, `Note`) VALUES
(1, 'Hoan', 'Quản lí nhà', 'Hoannguyen13520@gmail.com', 'Hoạt động', '0000-00-00', '12345', 'tài khoản của quản lí nhà'),
(2, 'hoan1352', 'Sinh viên', '186652226@e.tlu.edu.vn', 'Hoạt động', '0000-00-00', '12345', 'Sinh viên'),
(3, 'Tuyen123', 'Sinh Viên', '186200256@e.tlu.edu.vn', 'Hoạt động', '2022-12-10', '12345', NULL),
(9, 'SinhVien', 'Sinh Viên', '1851061349@gmail.com', 'Hoạt động', '2022-11-20', 'QuanLiNha', 'tài khoản của sinh viên'),
(12, '1851061349@e.tlu.edu.vn', 'Sinh viên', '1851061349@e.tlu.edu.vn', 'Hoạt động', '2022-12-12', 'Hoan12345', '');

-- --------------------------------------------------------

--
-- Table structure for table `violation`
--

CREATE TABLE `violation` (
  `idViPham` int(11) NOT NULL,
  `idSV` int(11) NOT NULL,
  `idKhu` int(11) NOT NULL,
  `idPhong` int(11) NOT NULL,
  `NoiDungViPham` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayViPham` date NOT NULL,
  `MucDo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GhiChu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `violation`
--

INSERT INTO `violation` (`idViPham`, `idSV`, `idKhu`, `idPhong`, `NoiDungViPham`, `NgayViPham`, `MucDo`, `GhiChu`) VALUES
(1, 3, 1, 1, 'Không đổ rác', '2022-12-16', 'Cảnh cáo', 'Chú ý'),
(2, 3, 1, 1, 'Chưa lau nhà', '2022-12-16', 'Cảnh cáo', 'cảnh cáo'),
(3, 2, 1, 1, 'Uống bia rượu', '2022-12-16', 'Cảnh cáo', 'cảnh cáo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application_dorm`
--
ALTER TABLE `application_dorm`
  ADD PRIMARY KEY (`idDonDK`);

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`idKhu`);

--
-- Indexes for table `csvc`
--
ALTER TABLE `csvc`
  ADD PRIMARY KEY (`idCsvc`);

--
-- Indexes for table `csvc_phong`
--
ALTER TABLE `csvc_phong`
  ADD PRIMARY KEY (`idCsvcPhong`);

--
-- Indexes for table `diennuoc`
--
ALTER TABLE `diennuoc`
  ADD PRIMARY KEY (`idDienNuoc`);

--
-- Indexes for table `giadiennuoc`
--
ALTER TABLE `giadiennuoc`
  ADD PRIMARY KEY (`idGiaDienNuoc`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`idJob`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`idPhong`),
  ADD KEY `idKhu` (`idKhu`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`idSV`),
  ADD KEY `id_TK` (`id_TK`),
  ADD KEY `idPhong` (`idPhong`),
  ADD KEY `idNha` (`idKhu`);

--
-- Indexes for table `suachuas`
--
ALTER TABLE `suachuas`
  ADD PRIMARY KEY (`idSuaChua`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email` (`email`),
  ADD KEY `email_2` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `violation`
--
ALTER TABLE `violation`
  ADD PRIMARY KEY (`idViPham`),
  ADD KEY `idSV` (`idSV`),
  ADD KEY `idKhu` (`idKhu`),
  ADD KEY `idPhong` (`idPhong`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `application_dorm`
--
ALTER TABLE `application_dorm`
  MODIFY `idDonDK` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `idKhu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `csvc`
--
ALTER TABLE `csvc`
  MODIFY `idCsvc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `csvc_phong`
--
ALTER TABLE `csvc_phong`
  MODIFY `idCsvcPhong` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `diennuoc`
--
ALTER TABLE `diennuoc`
  MODIFY `idDienNuoc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `giadiennuoc`
--
ALTER TABLE `giadiennuoc`
  MODIFY `idGiaDienNuoc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `idJob` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `idPhong` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `idSV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `suachuas`
--
ALTER TABLE `suachuas`
  MODIFY `idSuaChua` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `violation`
--
ALTER TABLE `violation`
  MODIFY `idViPham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
