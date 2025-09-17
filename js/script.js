// Page Elements
const mainPage = document.getElementById('main-list');
const logoutButton = document.getElementById('logout-button');
const welcomeMessage = document.getElementById('welcome-message');

const detailPage = document.getElementById('detail-page');
const freeGrid = document.getElementById('free-grid');
const vipGrid = document.getElementById('vip-grid');
const costGrid = document.getElementById('cost-grid');
const detailImage = document.getElementById('detail-image');
const detailTitle = document.getElementById('detail-title');
const detailPrice = document.getElementById('detail-price');
const detailDescription = document.getElementById('detail-description');
const backButton = document.getElementById('back-button');
const passwordFormContainer = document.getElementById('password-form-container');
const passwordInput = document.getElementById('password-input');
const passwordSubmitButton = document.getElementById('password-submit-button');
const passwordMessage = document.getElementById('password-message');
const downloadLink = document.getElementById('download-link');
const searchInput = document.getElementById('search-input');

// Credentials (for demonstration purposes)
const correctVipPassword = 'vip123';

// --- Idle Timer and Session Management ---
let idleTimer;
const IDLE_TIMEOUT_MS = 5 * 60 * 1000; // 5 นาที (5 * 60 วินาที * 1000 มิลลิวินาที)

function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        // เช็คว่าผู้ใช้ไม่ได้อยู่ในหน้า login อยู่แล้ว
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            alert('คุณไม่มีการใช้งานเกิน 5 นาที กรุณาเข้าสู่ระบบอีกครั้ง');
            handleLogout();
        }
    }, IDLE_TIMEOUT_MS);
}

// ตรวจสอบการใช้งานของผู้ใช้และรีเซ็ต Timer
document.addEventListener('mousemove', resetIdleTimer);
document.addEventListener('keypress', resetIdleTimer);
document.addEventListener('touchstart', resetIdleTimer); // สำหรับอุปกรณ์มือถือ

// Function to handle logout
function handleLogout() {
    clearTimeout(idleTimer); // หยุด Timer เมื่อล็อกเอาท์
    localStorage.removeItem('autoLogin');
    sessionStorage.removeItem('isLoggedIn'); // ลบสถานะการล็อกอินใน sessionStorage
    sessionStorage.removeItem('loggedInUser'); // ลบชื่อผู้ใช้ใน sessionStorage

    window.location.href = 'page.html'; // Redirect to the login page
}

// Check login status on page load
window.addEventListener('load', () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const autoLogin = localStorage.getItem('autoLogin');

    if (isLoggedIn !== 'true' && autoLogin !== 'true') {
        // ถ้าไม่ได้ล็อกอินอยู่และไม่ได้เลือก auto-login ให้เด้งกลับไปหน้า login
        window.location.href = 'page.html';
        return;
    }

    // ถ้าล็อกอินอยู่แล้ว
    const loggedInUser = sessionStorage.getItem('loggedInUser') || localStorage.getItem('username');
    welcomeMessage.textContent = `ยินดีต้อนรับ, ${loggedInUser}!`;
    renderProductCards(productsData);
    resetIdleTimer();
});

// Add event listener to logout button
logoutButton.addEventListener('click', handleLogout);

// --- Product Page Functionality ---

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('product-image-container');
    const image = document.createElement('img');
    image.src = product.imageURL;
    image.alt = product.title;
    image.classList.add('product-image');
    imageContainer.appendChild(image);

    const info = document.createElement('div');
    info.classList.add('product-info');
    const title = document.createElement('h3');
    title.textContent = product.title;
    title.classList.add('product-title');
// เดิม
// const price = document.createElement('p');
// price.textContent = product.price;

// แก้ไขเป็น:
const price = document.createElement('p');
// สมมติว่าต้องการแสดงราคาเดิม 5,620 บาท แล้วขีดฆ่า
// และแสดงราคาใหม่ 0.00 บาท
const originalPrice = "฿ 5,620"; // ตัวแปรนี้คุณอาจต้องกำหนดใน productData
const newPrice = product.price; // ราคาใหม่ที่ต้องการแสดง

// ใช้ innerHTML เพื่อให้แท็กทำงาน
price.innerHTML = `<s>${originalPrice}</s> ${newPrice}`;
price.classList.add('product-price');

// หรือหากต้องการแสดงแค่ราคาเดียวที่มีเส้นขีด
price.innerHTML = `<s>${product.price}</s>`;
price.classList.add('product-price');

    info.appendChild(title);
    info.appendChild(price);
    
    card.appendChild(imageContainer);
    card.appendChild(info);
    
    card.addEventListener('click', () => {
        showProductDetails(product);
    });
    
    return card;
}

function showProductDetails(product) {
    mainPage.style.display = 'none';
    detailPage.style.display = 'block';
    
    // Reset timer when a product is clicked
    resetIdleTimer();

    detailImage.src = product.imageURL;
    detailTitle.textContent = product.title;
    // เปลี่ยนเป็นโค้ดนี้:
    if (product.originalPrice) {
        detailPrice.innerHTML = `<span class="original-price">${product.originalPrice}</span>`;
    } else {
        detailPrice.innerHTML = product.price;
    }
    detailDescription.innerHTML = product.description;

    passwordFormContainer.style.display = 'none';
    downloadLink.style.display = 'none';
    passwordInput.value = '';
    passwordMessage.textContent = '';

    if (product.type === 'vip') {
        passwordFormContainer.style.display = 'block';
        passwordSubmitButton.onclick = () => {
            if (passwordInput.value === correctVipPassword) {
                passwordMessage.textContent = 'รหัสผ่านถูกต้อง!';
                passwordMessage.style.color = 'green';
                passwordFormContainer.style.display = 'none';
                downloadLink.style.display = 'block';
                downloadLink.href = product.downloadURL;
                downloadLink.target = "_blank"; // เพิ่มบรรทัดนี้เพื่อเปิดในแท็บใหม่
            } else {
                passwordMessage.textContent = 'รหัสผ่านไม่ถูกต้อง.';
                passwordMessage.style.color = 'red';
            }
        };
    } else {
        downloadLink.style.display = 'block';
        downloadLink.href = product.downloadURL;
        downloadLink.target = "_blank"; // เพิ่มบรรทัดนี้เพื่อเปิดในแท็บใหม่
    }
    if (product.type === 'cost') {
        passwordFormContainer.style.display = 'block';
        passwordSubmitButton.onclick = () => {
            if (passwordInput.value === correctVipPassword) {
                passwordMessage.textContent = 'รหัสผ่านถูกต้อง!';
                passwordMessage.style.color = 'green';
                passwordFormContainer.style.display = 'none';
                downloadLink.style.display = 'block';
                downloadLink.href = product.downloadURL;
                downloadLink.target = "_blank"; // เพิ่มบรรทัดนี้เพื่อเปิดในแท็บใหม่
            } else {
                passwordMessage.textContent = 'รหัสผ่านไม่ถูกต้อง.';
                passwordMessage.style.color = 'red';
            }
        };
    } else {
        downloadLink.style.display = 'block';
        downloadLink.href = product.downloadURL;
        downloadLink.target = "_blank"; // เพิ่มบรรทัดนี้เพื่อเปิดในแท็บใหม่
    }


    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
    mainPage.style.display = 'block';
    detailPage.style.display = 'none';
    searchInput.value = '';
    renderProductCards(productsData);
    resetIdleTimer(); // Reset timer when going back to the main list
}

backButton.addEventListener('click', goBack);

function renderProductCards(productsToDisplay) {
    freeGrid.innerHTML = '';
    vipGrid.innerHTML = '';
    costGrid.innerHTML = '';

    const freeProducts = productsToDisplay.filter(p => p.type === 'free');
    const vipProducts = productsToDisplay.filter(p => p.type === 'vip');
    const costProducts = productsToDisplay.filter(p => p.type === 'cost');

    if (freeProducts.length > 0) {
        document.querySelector('.container .section-header:nth-of-type(1)').style.display = 'block';
        freeProducts.forEach(product => {
            freeGrid.appendChild(createProductCard(product));
        });
    } else {
        document.querySelector('.container .section-header:nth-of-type(1)').style.display = 'none';
    }
    if (vipProducts.length > 0) {
        document.querySelector('.container .section-header:nth-of-type(2)').style.display = 'block';
        vipProducts.forEach(product => {
            vipGrid.appendChild(createProductCard(product));
        });
    } else {
        document.querySelector('.container .section-header:nth-of-type(2)').style.display = 'none';
    }

    if (costProducts.length > 0) {
        document.querySelector('.container .section-header:nth-of-type(3)').style.display = 'block';
        costProducts.forEach(product => {
            costGrid.appendChild(createProductCard(product));
        });
    } else {
        document.querySelector('.container .section-header:nth-of-type(3)').style.display = 'none';
    }    
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredProducts = productsData.filter(product => {
        return product.title.toLowerCase().includes(searchTerm);
    });

    renderProductCards(filteredProducts);
}

searchInput.addEventListener('keyup', handleSearch);