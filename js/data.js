// /your_project_folder/data.js

const productsData = [
    { 
        id: 1, 
        title: "โปรแกรมออกสาร 50 ทวิ", 
        price: "฿ 0.00",// แสดงราคาชำระแล้ว
        originalPrice: "฿ 0.00", // เพิ่มบรรทัดนี้เพื่อแสดงราคาเดิม
        imageURL: "https://res.cloudinary.com/dznqd3eu8/image/upload/v1757735053/mkctk5ny82ucz6kthfce.png",
        description: "ใช้งานง่ายและรวดเร็ว เหมาะสำหรับผู้ประกอบการและธุรกิจที่ต้องทำเอกสาร 50 ทวิจำนวนมาก<br><br><b>คุณสมบัติเด่น:</b><br>- ดึงข้อมูลจาก Excel<br>- สร้างเอกสารหลายรายการพร้อมกัน<br>- ออกเป็นไฟล์ PDF คุณภาพสูง<br>- ลดขั้นตอนที่ยุ่งยาก<br>- รวดเร็วและแม่นยำ",
        downloadURL: "https://drive.google.com/file/d/1S7HSythQTqnWR5_TYxUOaMkOocxxda7C/view",
        type: "free"
    },
    { 
        id: 2, 
        title: "โปรแกรมตีบวก FIFA", 
        price: "฿ 0.00",
        originalPrice: "฿ 0.00",
        imageURL: "https://res.cloudinary.com/dznqd3eu8/image/upload/v1757735053/mkctk5ny82ucz6kthfce.png",
        description: "คลิกภาพไม่ดึงเมาส์ ไม่มีผลต่อไฟล์เกม<br><br><b>การใช้งาน:</b><br>- ตั้งค่าขนาดจอเกม 1280x720<br>- กดคลิกขวา Run as administrator<br>- เลือกนักเตะที่ต้องการตีบวกมา 1 ตัวละคร<br><br><img src='https://res.cloudinary.com/dznqd3eu8/image/upload/v1757735053/mkctk5ny82ucz6kthfce.png' alt='ภาพการใช้งานโปรแกรมตีบวก' class='description-image'>",
        downloadURL: "https://drive.google.com/file/d/1S7HSythQTqnWR5_TYxUOaMkOocxxda7C/view",
        type: "free"
    },
    { 
        id: 3, 
        title: "โปรแกรมแคปหน้าจอ ", 
        price: "฿ 0.00",
        originalPrice: "฿ 0.00",
        imageURL: "https://res.cloudinary.com/dznqd3eu8/image/upload/v1757735053/mkctk5ny82ucz6kthfce.png",
        description: "SnapNotify โปรแกรมแคปหน้าจอคอม<br><br><b>คุณสมบัติเด่น:</b><br>- ตั้งเวลาแจ้งเตือน Discord ",
        downloadURL: "https://drive.google.com/file/d/1S7HSythQTqnWR5_TYxUOaMkOocxxda7C/view",
        type: "free"
    },
    { 
        id: 3, 
        title: "BOT IQ OPTION", 
        price: "฿ 1,900",
        imageURL: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibAdg6h4hyXI84dNzAMmhJxf_QfbZ5fsbDtaznoEKUTBqzxQsWBA35IG7zBy3AOTYu1JTTksYaFi447cb5NWRD2eCi6XmAddmit4kcANoNnPbugjvF5tOno1uzKN50NZJrB0Xsjzmqwqv81x_kgUSpWGcWyrr3wXz4RvzNg6xh0WN_dwoctSMev3N6vFrF/s1237/Screenshot_3.png",
        description: "ระบบเทรดอัตโนมัติใช้งานง่าย",
        downloadURL: "https://drive.google.com/file/d/146zkgPw0_aIoQuiopv4NzvVLgJi7c9dJ/view",
        type: "vip"
    },
    { 
        id: 4, 
        title: "Curved Monitor", 
        price: "฿ 9,800",
        imageURL: "https://res.cloudinary.com/dznqd3eu8/image/upload/v1757735053/mkctk5ny82ucz6kthfce.png",
        description: "A 27-inch curved gaming monitor...",
        downloadURL: "https://example.com/download/curved-monitor.zip",
        type: "vip"
    },
    { 
        id: 5, 
        title: "Curved Monitor 2", 
        price: "฿ 9,800",
        imageURL: "https://res.cloudinary.com/dznqd3eu8/image/upload/v1757735053/mkctk5ny82ucz6kthfce.png",
        description: "A 27-inch curved gaming monitor...",
        downloadURL: "https://example.com/download/curved-monitor2.zip",
        type: "vip"
    },
    { 
        id: 6, 
        title: "Curved Monitor 3", 
        price: "฿ 9,800",
        imageURL: "https://res.cloudinary.com/dznqd3eu8/image/upload/v1757735053/mkctk5ny82ucz6kthfce.png",
        description: "A 27-inch curved gaming monitor...",
        downloadURL: "https://example.com/download/curved-monitor3.zip",
        type: "vip"
    },
    { 
        id: 6, 
        title: "Curved Monitor 3", 
        price: "฿ 9,800",
        imageURL: "https://res.cloudinary.com/dznqd3eu8/image/upload/v1757735053/mkctk5ny82ucz6kthfce.png",
        description: "A 27-inch curved gaming monitor...",
        downloadURL: "https://example.com/download/curved-monitor3.zip",
        type: "cost"
    },
    { 
        id: 6, 
        title: "Curved Monitor 3", 
        price: "฿ 9,800",
        imageURL: "https://res.cloudinary.com/dznqd3eu8/image/upload/v1757735053/mkctk5ny82ucz6kthfce.png",
        description: "A 27-inch curved gaming monitor...",
        downloadURL: "https://example.com/download/curved-monitor3.zip",
        type: "cost"
    }
];