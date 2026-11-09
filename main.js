let mangSoNguyen = [];
let mangSoThuc = [];

// Hàm hiển thị mảng chính
function hienThiMang() {
    let chuoi = "";
    for (let i = 0; i < mangSoNguyen.length; i++) {
        chuoi += mangSoNguyen[i];
        // Thêm dấu phẩy và khoảng trắng nếu chưa phải phần tử cuối cùng
        if (i < mangSoNguyen.length - 1) {
            chuoi += ", ";
        }
    }
    document.getElementById("ketQuaMang").innerHTML = `[${chuoi}]`;
}

// Thêm số vào mảng chính
function themSo() {
    let so = parseInt(document.getElementById("inputNum").value);
    if (!isNaN(so)) {
        mangSoNguyen.push(so);
        hienThiMang();
        document.getElementById("inputNum").value = "";
    } else {
        alert("Vui lòng nhập số nguyên hợp lệ!");
    }
}

// 1. Tổng các số dương
function tinhTongSoDuong() {
    let tong = mangSoNguyen.reduce((tichLuy, hienTai) => hienTai > 0 ? tichLuy + hienTai : tichLuy, 0);
    document.getElementById("rs1").innerHTML = `Tổng số dương: ${tong}`;
}

// 2. Đếm số dương
function demSoDuong() {
    let soLuong = mangSoNguyen.filter(so => so > 0).length;
    document.getElementById("rs2").innerHTML = `Số lượng số dương: ${soLuong}`;
}

// 3. Tìm số nhỏ nhất
function timSoNhoNhat() {
    if (mangSoNguyen.length === 0) {
        document.getElementById("rs3").innerHTML = "Mảng rỗng!";
        return;
    }
    let nhat = Math.min(...mangSoNguyen);
    document.getElementById("rs3").innerHTML = `Số nhỏ nhất: ${nhat}`;
}

// 4. Tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
    let mangDuong = mangSoNguyen.filter(so => so > 0);
    if (mangDuong.length === 0) {
        document.getElementById("rs4").innerHTML = "Không có số dương trong mảng";
        return;
    }
    let duongNhoNhat = Math.min(...mangDuong);
    document.getElementById("rs4").innerHTML = `Số dương nhỏ nhất: ${duongNhoNhat}`;
}

// 5. Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
    let chanCuoi = -1;
    for (let i = mangSoNguyen.length - 1; i >= 0; i--) {
        if (mangSoNguyen[i] % 2 === 0) {
            chanCuoi = mangSoNguyen[i];
            break;
        }
    }
    document.getElementById("rs5").innerHTML = `Số chẵn cuối cùng: ${chanCuoi}`;
}

// 6. Đổi chỗ 2 giá trị theo vị trí
function doiChoHaiGiaTri() {
    let viTri1 = parseInt(document.getElementById("pos1").value);
    let viTri2 = parseInt(document.getElementById("pos2").value);

    if (viTri1 >= 0 && viTri1 < mangSoNguyen.length && viTri2 >= 0 && viTri2 < mangSoNguyen.length) {
        let tam = mangSoNguyen[viTri1];
        mangSoNguyen[viTri1] = mangSoNguyen[viTri2];
        mangSoNguyen[viTri2] = tam;
        
        hienThiMang();
        document.getElementById("rs6").innerHTML = `Mảng sau khi đổi: [${mangSoNguyen.join(", ")}]`;
    } else {
        document.getElementById("rs6").innerHTML = "Vị trí không hợp lệ!";
    }
}

// 7. Sắp xếp tăng dần
function sapXepTangDan() {
    let mangDaSapXep = [];
    for (let i = 0; i < mangSoNguyen.length; i++) {
        mangDaSapXep.push(mangSoNguyen[i]);
    }

    // Dùng 2 vòng lặp for i, j để sắp xếp tăng dần
    for (let i = 0; i < mangDaSapXep.length - 1; i++) {
        for (let j = i + 1; j < mangDaSapXep.length; j++) {
            // Nếu phần tử đứng trước lớn hơn phần tử đứng sau thì đổi chỗ
            if (mangDaSapXep[i] > mangDaSapXep[j]) {
                let tam = mangDaSapXep[i];
                mangDaSapXep[i] = mangDaSapXep[j];
                mangDaSapXep[j] = tam;
            }
        }
    }

    // Nối chuỗi để hiển thị 
    let chuoiSapXep = "";
    for (let i = 0; i < mangDaSapXep.length; i++) {
        chuoiSapXep += mangDaSapXep[i];
        if (i < mangDaSapXep.length - 1) {
            chuoiSapXep += ", ";
        }
    }

    document.getElementById("rs7").innerHTML = `Mảng tăng dần: [${chuoiSapXep}]`;
}

// 8. Tìm số nguyên tố đầu tiên
function kiemTraSoNguyenTo(n) {
    // Số nguyên tố phải lớn hơn hoặc bằng 2
    if (n < 2) {
        return false;
    }
    
    // Kiểm tra xem n có chia hết cho bất kỳ số nào từ 2 đến n - 1 hay không
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; // Nếu chia hết thì không phải số nguyên tố
        }
    }
    
    return true; // Nếu duyệt hết mà không chia hết cho số nào thì nó là số nguyên tố
}

function timSoNguyenToDauTien() {
    let nguyenToDau = -1;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (kiemTraSoNguyenTo(mangSoNguyen[i])) {
            nguyenToDau = mangSoNguyen[i];
            break;
        }
    }
    document.getElementById("rs8").innerHTML = nguyenToDau !== -1 
        ? `Số nguyên tố đầu tiên: ${nguyenToDau}` 
        : `Không có số nguyên tố (-1)`;
}

// 9. Nhập mảng số thực và đếm số nguyên
function themSoThuc() {
    let so = parseFloat(document.getElementById("inputFloat").value);
    if (!isNaN(so)) {
        mangSoThuc.push(so);
        thực
        // Dùng vòng lặp for để nối chuỗi mảng số 
        let chuoiSoThuc = "";
        for (let i = 0; i < mangSoThuc.length; i++) {
            chuoiSoThuc += mangSoThuc[i];
            if (i < mangSoThuc.length - 1) {
                chuoiSoThuc += ", ";
            }
        }
        
        document.getElementById("ketQuaMangSoThuc").innerHTML = `[${chuoiSoThuc}]`;
        document.getElementById("inputFloat").value = "";
    } else {
        alert("Vui lòng nhập số thực hợp lệ!");
    }
}

function demSoNguyenTrongMangSoThuc() {
    let soLuong = mangSoThuc.filter(so => Number.isInteger(so)).length;
    document.getElementById("rs9").innerHTML = `Số lượng số nguyên: ${soLuong}`;
}

// 10. So sánh số lượng số dương và âm
function soSanhAmDuong() {
    let soDuong = mangSoNguyen.filter(so => so > 0).length;
    let soAm = mangSoNguyen.filter(so => so < 0).length;

    let ketQua = "";
    if (soDuong > soAm) {
        ketQua = `Số dương (${soDuong}) > Số âm (${soAm})`;
    } else if (soAm > soDuong) {
        ketQua = `Số âm (${soAm}) > Số dương (${soDuong})`;
    } else {
        ketQua = `Số dương (${soDuong}) = Số âm (${soAm})`;
    }
    document.getElementById("rs10").innerHTML = ketQua;
}