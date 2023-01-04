-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2023 at 06:02 AM
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
-- Database: `dormtlu`
--

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
(1, 'Quạt điện', 500000, 'A', '2022-12-25', 'Hoạt động'),
(7, 'Bóng đèn', 890000, '', '2022-01-02', 'Hoạt động'),
(10, 'Quạt trần', 256000, 'Quạt trần', '2022-12-31', 'Hoạt động ');

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
  `GhiChu` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NgayTaoCsvcPhong` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `csvc_phong`
--

INSERT INTO `csvc_phong` (`idCsvcPhong`, `idPhong`, `idCsvc`, `SoLuongCsvc`, `SoLuongConTot`, `SoLuongDaHong`, `GhiChu`, `NgayTaoCsvcPhong`) VALUES
(1, 1, 1, 4, 4, 0, 'Phòng 100', '2022-12-25'),
(8, 1, 7, 6, 4, 2, 'P101', '2022-01-01'),
(10, 1, 1, 1, 2, 6, '', '2022-12-27'),
(11, 2, 1, 1, 2, 0, '', '2022-12-27');

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
(2, 1, 100, 190, 'Chưa nộp', 1, '2022-10-10', 100, 150),
(3, 1, 150, 170, 'ádsa', 1, '2022-12-10', 100, 150),
(4, 1, 100, 170, 'ádsa', 1, '2022-12-10', 100, 140),
(6, 1, 150, 170, 'ádsa', 1, '2022-12-10', 100, 150),
(8, 1, 150, 170, 'ádsa', 1, '2022-12-10', 100, 150);

-- --------------------------------------------------------

--
-- Table structure for table `dondangky`
--

CREATE TABLE `dondangky` (
  `idDonDK` int(11) NOT NULL,
  `id_TK` int(11) NOT NULL,
  `HoTen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MSV` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `GioiTinh` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Lop` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CCCD` int(15) NOT NULL,
  `Dctt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DoiTuong` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Sdt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sdt_Phuhuynh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayTaoDon` date NOT NULL,
  `TrangThai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dondangky`
--

INSERT INTO `dondangky` (`idDonDK`, `id_TK`, `HoTen`, `MSV`, `NgaySinh`, `GioiTinh`, `Lop`, `CCCD`, `Dctt`, `DoiTuong`, `Sdt`, `Sdt_Phuhuynh`, `NgayTaoDon`, `TrangThai`) VALUES
(1, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh,Hộ khẩu tỉnh xa', '025486787415', '05464578465', '2022-12-15', 'Đã duyệt'),
(2, 9, 'Phạm Tuyết Như', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con bệnh binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(3, 12, 'Trần Công Sang', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(4, 12, 'Nguyễn Văn Mai', '185200912', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con bệnh binh,Sinh viên dân tộc thiểu số', '025486787415', '05464578465', '2022-12-15', 'Đã duyệt'),
(5, 12, 'Kim Thị Liên', '1851211349', '2000-12-05', 'Nữ', '60TH4', 264842134, 'Hà Nội Thanh Xuân', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(6, 12, 'Trần Công Cường', '1851961349', '2000-12-05', 'Nam', '60TH3', 264842134, 'Thôn Cao Lãnh Phú Yên Hà Đông', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(7, 12, 'Nguyễn Công Phú', '1852551349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(8, 12, 'Nguyễn Thị Bình', '1851061349', '2000-12-05', 'Nữ', '60TH3', 224842134, 'Thanh Phú Thanh Lộc Mĩ Thuyền', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(9, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(10, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(11, 12, 'Mĩ Thị Kim Tuyến', '1851451349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con bệnh binh,Sinh viên dân tộc thiểu số', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(12, 12, 'Nguyễn Công Hoan', '1851061349', '2000-12-05', 'Nam', '60TH4', 264842134, 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục', 'Con thương binh', '025486787415', '05464578465', '2022-12-15', 'Chờ duyệt'),
(20, 19, 'Nguyễn Văn Vĩ', '18652810', '2000-05-13', 'Nam', '61K2', 199283838, 'Hà nội', 'Không', '0928281817', '09192929', '2023-01-01', 'Chờ duyệt'),
(21, 25, 'Trần Thị Mai Hoa', '1851061999', '2000-02-01', 'Nữ', '60TH5', 2147483647, 'Thôn Quê Xã Đàn Huyện Hóc Môn', 'Không', '098627271', '098281817', '2023-01-04', 'Chờ duyệt'),
(22, 28, 'Trịnh Đình Hiếu', '1851062000@e.tlu.edu.vn', '2000-05-13', 'Nam', '60TH4', 35828119, 'Hà Nội', 'Con thương binh', '092882811', '091818181', '2023-01-04', 'Chờ duyệt');

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
(1, 2000, 7000, '2022-12-19', '1969-12-31');

-- --------------------------------------------------------

--
-- Table structure for table `hososinhvien`
--

CREATE TABLE `hososinhvien` (
  `idHSSV` int(11) NOT NULL,
  `HoTen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MSV` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `Sdt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GioiTinh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DanToc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CCCD` bigint(20) NOT NULL,
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
  `AnhDaiDien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692',
  `NgayTaoHoSo` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hososinhvien`
--

INSERT INTO `hososinhvien` (`idHSSV`, `HoTen`, `MSV`, `NgaySinh`, `Sdt`, `GioiTinh`, `DanToc`, `CCCD`, `QueQuan`, `Khoa`, `Email`, `Lop`, `Dctt`, `HoTenBo`, `Sdt_Bo`, `HoTenMe`, `Sdt_Me`, `Email_Phuhuynh`, `id_TK`, `AnhDaiDien`, `NgayTaoHoSo`) VALUES
(1, 'Nguyễn Công Hoan', '1851061349', '2023-01-02', '09823743', 'Nam', 'Kinh', 211234142, 'Hà Nam', 'CNTT', '1851061349@e.tlu.edu.vn', '60TH4', 'Hà Nội', 'Nguyễn Khắc Thoại', '097482472', 'Trần Thị Tuyến', '0988274824', 'TuyenTran12@gmail.com', 9, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692', '2023-01-02'),
(4, 'Trần Thị Mai Hoa', '1851061999', '2000-02-01', '09862721', 'Nữ', 'Kinh', 351918181, 'Hà Nam', 'CNTT', '1851061999@e.tlu.edu.vn', '60TH4', 'Thôn Quê Xã Đàn Huyện Hóc Môn', 'Trần Khai Sáng', '098828281', 'Trần Văn Mai', '098888282', 'hoannguyen1352000@gmail.com', 25, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2F505942a9-f732-40bb-a1a3-9bacb0084a2d1672769103651.jpg?alt=media&token=d9e56638-7749-4a22-9510-f291046d897b', '2023-01-04'),
(5, 'Trịnh Đình Hiếu', '1851062000@e.tlu.edu.vn', '2000-05-13', '09828181', 'Nam', 'Kinh', 3929117, 'Hà Nội', 'CNTT', '1851062000@e.tlu.edu.vn', '60TH4', 'Hà Nội', 'Trần Văn Thời ', '09288181', 'Trần Hưng Đạo', '09181911', 'Hoannguyen1352000@gmail.com', 28, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692', '2023-01-04');

-- --------------------------------------------------------

--
-- Table structure for table `khuvuc`
--

CREATE TABLE `khuvuc` (
  `idKhu` int(11) NOT NULL,
  `TenKhu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MoTaKhu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TrangThaiKhu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayTaoKhu` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `khuvuc`
--

INSERT INTO `khuvuc` (`idKhu`, `TenKhu`, `MoTaKhu`, `TrangThaiKhu`, `NgayTaoKhu`) VALUES
(1, 'Nhà 05', 'Hoạt động', 'Tòa nhà 05 cạnh c5', '0000-00-00'),
(2, 'Nhà 03', 'Tòa nhà 03', 'Hoạt động', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `phong`
--

CREATE TABLE `phong` (
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
-- Dumping data for table `phong`
--

INSERT INTO `phong` (`idPhong`, `idKhu`, `TenPhong`, `SoLuong`, `MoTa`, `NgayTao`, `TrangThai`, `SoNguoi`, `Tang`) VALUES
(1, 1, 'P100', 6, 'Phòng 102', '2022-12-10', 'Hoạt động', 3, 'Tầng 1'),
(2, 1, 'P101', 6, 'Phòng 101', '2022-12-10', 'Hoạt động', 1, 'Tầng 1'),
(3, 1, 'P102', 7, 'Phòng 102', '2022-12-10', 'Hoạt động', 0, 'Tầng 1'),
(4, 1, 'P103', 6, 'Phòng 103', '2022-12-09', 'Hoạt động', 0, 'Tầng 1'),
(5, 1, 'P104', 6, 'Phòng 104', '2022-12-10', 'Hoạt động', 0, 'Tầng 2'),
(12, 1, 'P404', 7, 'P404', '2022-12-16', 'Hoạt động', 0, 'Tầng 2');

-- --------------------------------------------------------

--
-- Table structure for table `sinhvien`
--

CREATE TABLE `sinhvien` (
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
-- Dumping data for table `sinhvien`
--

INSERT INTO `sinhvien` (`idSV`, `HoTen`, `MSV`, `NgaySinh`, `Sdt`, `GioiTinh`, `DanToc`, `CCCD`, `QueQuan`, `Khoa`, `Email`, `Lop`, `Dctt`, `HoTenBo`, `Sdt_Bo`, `HoTenMe`, `Sdt_Me`, `Email_Phuhuynh`, `id_TK`, `idPhong`, `idKhu`, `AnhDaiDien`) VALUES
(1, 'Nguyễn Công Hoan', '1851061349', '2000-05-13', '0786453123', 'Nam', 'Kinh', 2131230213, 'Hà Nam', 'CNTT', '1851061349@e.tlu.edu.vn', '60TH3', 'Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục Tỉnh Hà Nam', 'Nguyễn Khắc Thoại', '098223821', 'Trần Thị Tuyến', '068213922', 'tuyentran@gmail.com', 9, 1, 1, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2F0dfdc1b8-bd24-4f27-bf94-348cef7b8d901671078266371.jpg?alt=media&token=f26e7ce7-9dfa-4b10-b966-9084f560b106'),
(2, 'Trần Thị Kiều', '1850162199', '2000-12-05', '0895451125', 'Nam', 'Kinh', 356486654, 'Hà Nội', 'CNTT', '1850162160@e.tlu.edu.vn', '60TH4', '12 Ngách 156 Khương Trung Đống Đa Hà Nội', 'Trần Văn A', '0564848926', 'Trần Văn Giàu', '0569123546', 'thoainguyen12@gmail.com', 2, 1, 1, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692'),
(3, 'Phạm Tuyết Như', '189523128', '2006-07-15', '059912130', 'Nữ', 'Kinh', 356225523, 'Hà Nam', 'CNTT', '1850322161@e.tlu.edu.vn', '60TH4', 'số 25 Trần Phú Hà Nội', 'Phạm Mai Mai', '056421122', 'Trần Mai Hiền', '0213214412', 'hoannguyen1352000@gmail.com', 3, 1, 1, 'https://firebasestorage.googleapis.com/v0/b/rn-dorm.appspot.com/o/images%2Favatar.png?alt=media&token=9eedad78-452f-4a65-b296-cb051f032692'),
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
  `TrangThaiSuaChua` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NguoiBaoSua` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MoTaSuaChua` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `suachuas`
--

INSERT INTO `suachuas` (`idSuaChua`, `idPhong`, `NoiDung`, `NgayTaoSuaChua`, `TrangThaiSuaChua`, `NguoiBaoSua`, `MoTaSuaChua`) VALUES
(1, 1, 'Vòi nước bị hỏng ', '2022-12-25', 'Đang sửa chữa ', 'Nguyễn Công Hoan', 'Vòi nước đang bị hỏng không vặn được'),
(2, 1, 'Hỏng quạt', '2022-12-25', 'Đang sửa ', 'Trần Thị Tuyến', 'vui lòng sửa vòi nước'),
(4, 2, 'Báo cháy đèn', '2022-12-25', 'Đang sửa chữa', 'Nguyễn Công Thiệu', 'Cháy đèn cạnh nhà tắm');

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

CREATE TABLE `taikhoan` (
  `Id` int(11) NOT NULL,
  `TenTaiKhoan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ChucVu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TrangThai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayTao` date NOT NULL,
  `MatKhau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GhiChu` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Quyen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`Id`, `TenTaiKhoan`, `ChucVu`, `Email`, `TrangThai`, `NgayTao`, `MatKhau`, `GhiChu`, `Quyen`) VALUES
(1, 'Hoan', 'Giám đốc trung tâm nội trú', 'Hoannguyen13520@gmail.com', 'Hoạt động', '0000-00-00', '12345', 'tài khoản của quản lí nhà', 'Tất cả'),
(2, 'Hoan135', 'Người quản lý', '186652226@e.tlu.edu.vn', 'Hoạt động', '0000-00-00', '12345', 'Sinh viên', '1'),
(9, '1851061349@e.tlu.edu.vn', 'Sinh viên', '1851061349@gmail.com', 'Hoạt động', '2022-11-20', '123', 'tài khoản của sinh viên', ''),
(13, '1851061998@e.tlu.edu.vn', 'Sinh viên', '1851061998@e.tlu.edu.vn', 'Hoạt động', '2000-01-01', 'B', 'A', ''),
(18, 'QuanLyNha3', 'Người quản lý', 'c', 'Hoạt động', '0000-00-00', 'c', 'c', '2'),
(25, '1851061999', 'Sinh viên', '1851061999@e.tlu.edu.vn', 'Hoạt động', '2023-01-04', 'Hoan12345', 'Sinh viên', ''),
(28, '1851062000@e.tlu.edu.vn', 'Sinh viên', '1851062000@e.tlu.edu.vn', 'Hoạt động', '2023-01-04', 'Hoan', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `vipham`
--

CREATE TABLE `vipham` (
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
-- Dumping data for table `vipham`
--

INSERT INTO `vipham` (`idViPham`, `idSV`, `idKhu`, `idPhong`, `NoiDungViPham`, `NgayViPham`, `MucDo`, `GhiChu`) VALUES
(1, 3, 1, 1, 'Không đổ rác ', '2022-12-16', 'Cảnh cáo ', 'Chú ý hơn nhé'),
(2, 3, 1, 1, 'Chưa lau sàn nhà', '2022-12-16', 'Cảnh cáo', 'Lưu ý'),
(3, 2, 1, 1, 'Uống bia rượu bia', '2022-12-16', 'Cảnh cáo nè', 'cảnh cáo'),
(4, 4, 1, 1, 'Làm ồn vào buổi đêm', '2022-12-31', 'Cảnh cáo', 'Cảnh cáo sinh viên');

--
-- Indexes for dumped tables
--

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
-- Indexes for table `dondangky`
--
ALTER TABLE `dondangky`
  ADD PRIMARY KEY (`idDonDK`);

--
-- Indexes for table `giadiennuoc`
--
ALTER TABLE `giadiennuoc`
  ADD PRIMARY KEY (`idGiaDienNuoc`);

--
-- Indexes for table `hososinhvien`
--
ALTER TABLE `hososinhvien`
  ADD PRIMARY KEY (`idHSSV`),
  ADD KEY `fk_htk_id_taikhoan` (`id_TK`);

--
-- Indexes for table `khuvuc`
--
ALTER TABLE `khuvuc`
  ADD PRIMARY KEY (`idKhu`);

--
-- Indexes for table `phong`
--
ALTER TABLE `phong`
  ADD PRIMARY KEY (`idPhong`),
  ADD KEY `idKhu` (`idKhu`);

--
-- Indexes for table `sinhvien`
--
ALTER TABLE `sinhvien`
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
-- Indexes for table `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `vipham`
--
ALTER TABLE `vipham`
  ADD PRIMARY KEY (`idViPham`),
  ADD KEY `idSV` (`idSV`),
  ADD KEY `idKhu` (`idKhu`),
  ADD KEY `idPhong` (`idPhong`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `csvc`
--
ALTER TABLE `csvc`
  MODIFY `idCsvc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `csvc_phong`
--
ALTER TABLE `csvc_phong`
  MODIFY `idCsvcPhong` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `diennuoc`
--
ALTER TABLE `diennuoc`
  MODIFY `idDienNuoc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `dondangky`
--
ALTER TABLE `dondangky`
  MODIFY `idDonDK` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `giadiennuoc`
--
ALTER TABLE `giadiennuoc`
  MODIFY `idGiaDienNuoc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hososinhvien`
--
ALTER TABLE `hososinhvien`
  MODIFY `idHSSV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `khuvuc`
--
ALTER TABLE `khuvuc`
  MODIFY `idKhu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `phong`
--
ALTER TABLE `phong`
  MODIFY `idPhong` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `sinhvien`
--
ALTER TABLE `sinhvien`
  MODIFY `idSV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `suachuas`
--
ALTER TABLE `suachuas`
  MODIFY `idSuaChua` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `vipham`
--
ALTER TABLE `vipham`
  MODIFY `idViPham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hososinhvien`
--
ALTER TABLE `hososinhvien`
  ADD CONSTRAINT `fk_htk_id_taikhoan` FOREIGN KEY (`id_TK`) REFERENCES `taikhoan` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
