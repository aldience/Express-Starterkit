# **README: Backend Setup for MQTT, MySQL, and Express Integration**

## **1. Membuat Folder Backend**
   Buat folder baru yang akan digunakan untuk menyimpan semua kode backend.

## **2. Masuk ke dalam Folder**
   Setelah membuat folder, buka terminal dan navigasi ke dalam folder tersebut:
   ```bash
   cd nama-folder-backend
   ```

## **3. Inisialisasi Folder**
   Inisialisasi proyek Node.js dalam folder backend:
   ```bash
   npm init -y
   ```
   Ini akan membuat file `package.json` yang berisi informasi tentang proyek Anda.

## **4. Install Dependencies**
   Instal semua dependency yang dibutuhkan:
   ```bash
   npm install argon2 connect-session-sequelize cors dotenv express express-session mysql2 restify sequelize
   ```
   Berikut adalah penjelasan singkat tentang dependency yang diinstal:
   - **argon2**: Untuk hashing password yang aman.
   - **connect-session-sequelize**: Menghubungkan sesi Express dengan database menggunakan Sequelize.
   - **cors**: Mengelola kebijakan **Cross-Origin Resource Sharing**.
   - **dotenv**: Mengelola variabel lingkungan dari file `.env`.
   - **express**: Framework web yang digunakan untuk membuat server HTTP dan API.
   - **express-session**: Mengelola sesi pengguna di Express.
   - **mysql2**: Klien MySQL untuk Node.js.
   - **restify**: Framework untuk membuat API RESTful.
   - **sequelize**: ORM untuk bekerja dengan database relasional.

## **5. Membuat Struktur Folder**
   Organisasikan proyek dengan membuat folder berikut:
   - **Model**: Menyimpan definisi data aplikasi yang digunakan untuk berinteraksi dengan database.
   - **Controller**: Berisi logika aplikasi yang menangani request dan respon.
   - **Router**: Menyimpan rute API untuk aplikasi.
   - **Middleware**: Fungsi perantara untuk otentikasi, validasi, atau logging.
   - **Config**: Menyimpan konfigurasi aplikasi seperti pengaturan database.

## **6. Menjalankan Aplikasi**
   Jalankan aplikasi dengan menggunakan **nodemon**:
   ```bash
   nodemon index.js
   ```
   Jika semuanya berhasil, Anda akan melihat output di console:
   ```bash
   Example app listening on port 3000
   Connected to the database!
   ```
