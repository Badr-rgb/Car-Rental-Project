/**
 * LUXE Car Rental Management System
 * Core Logic and LocalStorage Database Simulation
 */

// Initial data matching ERD structure
const initialData = {
    customers: [
        { customerId: 'CUST_001', username: 'guest', password: 'password', name: 'Guest User', email: 'guest@example.com', address: 'Unknown', driverLicenseNum: 'N/A', phones: [] },
        { customerId: 'CUST_ADMIN', username: 'ElSona2yaEltare5ya', password: 'Badr_AboTarek', name: 'System Admin', email: 'admin@luxe.com', address: 'HQ', driverLicenseNum: 'ADMIN', phones: [] }
    ],
    branches: [
        { branchId: 'BR_001', name: 'Main Luxe Branch', phone: '1-800-LUXE-CAR', location: 'Beverly Hills' }
    ],
    cars: [
        // Mercedes
        { carId: '1', brand: 'Mercedes', model: 'S-Class', year: 2024, pricePerDay: 450, horsepower: '429 HP', topSpeed: '130 mph', zeroToSixty: '4.8s', transmission: '9-Speed Auto', imageURL: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800', status: 'Available', branchId: 'BR_001' },
        { carId: '2', brand: 'Mercedes', model: 'G63 AMG', year: 2023, pricePerDay: 600, horsepower: '577 HP', topSpeed: '149 mph', zeroToSixty: '3.9s', transmission: '9-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_W463_G_350_BlueTEC_01.jpg/960px-Mercedes-Benz_W463_G_350_BlueTEC_01.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '3', brand: 'Mercedes', model: 'AMG GT R', year: 2022, pricePerDay: 750, horsepower: '577 HP', topSpeed: '198 mph', zeroToSixty: '3.5s', transmission: '7-Speed DCT', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/960px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '4', brand: 'Mercedes', model: 'Maybach S680', year: 2024, pricePerDay: 1200, horsepower: '621 HP', topSpeed: '130 mph', zeroToSixty: '4.5s', transmission: '9-Speed Auto', imageURL: 'images/mercedes_maybach_s680.png', status: 'Available', branchId: 'BR_001' },
        { carId: '5', brand: 'Mercedes', model: 'SL 63 AMG', year: 2023, pricePerDay: 500, horsepower: '577 HP', topSpeed: '196 mph', zeroToSixty: '3.5s', transmission: '9-Speed MCT', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mercedes-AMG_SL_43_IMG_8050.jpg/960px-Mercedes-AMG_SL_43_IMG_8050.jpg', status: 'Available', branchId: 'BR_001' },

        // BMW
        { carId: '6', brand: 'BMW', model: 'M5 Competition', year: 2023, pricePerDay: 400, horsepower: '617 HP', topSpeed: '190 mph', zeroToSixty: '3.1s', transmission: '8-Speed Auto', imageURL: 'images/bmw_m5_competition.png', status: 'Available', branchId: 'BR_001' },
        { carId: '7', brand: 'BMW', model: 'M4 CSL', year: 2024, pricePerDay: 450, horsepower: '543 HP', topSpeed: '191 mph', zeroToSixty: '3.6s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2021_BMW_M4_Competition_Automatic_3.0_Front.jpg/960px-2021_BMW_M4_Competition_Automatic_3.0_Front.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '8', brand: 'BMW', model: 'X7 M60i', year: 2023, pricePerDay: 350, horsepower: '523 HP', topSpeed: '155 mph', zeroToSixty: '4.5s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/BMW_G07_1X7A1696.jpg/960px-BMW_G07_1X7A1696.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '9', brand: 'BMW', model: 'i7 xDrive60', year: 2024, pricePerDay: 500, horsepower: '536 HP', topSpeed: '149 mph', zeroToSixty: '4.5s', transmission: 'Single-Speed', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/BMW_7-Series_%28G70%29_750e_IMG_9358.jpg/1280px-BMW_7-Series_%28G70%29_750e_IMG_9358.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '10', brand: 'BMW', model: 'M8 Competition', year: 2023, pricePerDay: 600, horsepower: '617 HP', topSpeed: '190 mph', zeroToSixty: '3.0s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/BMW_M8_Competition_IMG_3364.jpg/960px-BMW_M8_Competition_IMG_3364.jpg', status: 'Available', branchId: 'BR_001' },

        // Porsche
        { carId: '11', brand: 'Porsche', model: '911 Turbo S', year: 2024, pricePerDay: 600, horsepower: '640 HP', topSpeed: '205 mph', zeroToSixty: '2.6s', transmission: '8-Speed PDK', imageURL: 'images/porsche_911_turbo_s.png', status: 'Available', branchId: 'BR_001' },
        { carId: '12', brand: 'Porsche', model: 'Taycan Turbo S', year: 2023, pricePerDay: 550, horsepower: '750 HP', topSpeed: '161 mph', zeroToSixty: '2.6s', transmission: '2-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2020_Porsche_Taycan_4S_79kWh_Front.jpg/960px-2020_Porsche_Taycan_4S_79kWh_Front.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '13', brand: 'Porsche', model: 'Cayenne Turbo GT', year: 2024, pricePerDay: 500, horsepower: '650 HP', topSpeed: '189 mph', zeroToSixty: '3.1s', transmission: '8-Speed Tiptronic', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Porsche_Cayenne_%28III%2C_Facelift%29_%E2%80%93_f_01012025.jpg/960px-Porsche_Cayenne_%28III%2C_Facelift%29_%E2%80%93_f_01012025.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '14', brand: 'Porsche', model: 'Panamera GTS', year: 2023, pricePerDay: 450, horsepower: '473 HP', topSpeed: '186 mph', zeroToSixty: '3.7s', transmission: '8-Speed PDK', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Porsche_972_Turbo_E-Hybrid_IMG_0445.jpg/960px-Porsche_972_Turbo_E-Hybrid_IMG_0445.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '15', brand: 'Porsche', model: '911 GT3 RS', year: 2024, pricePerDay: 900, horsepower: '518 HP', topSpeed: '184 mph', zeroToSixty: '3.0s', transmission: '7-Speed PDK', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Porsche_992_GT3_1X7A0323.jpg/960px-Porsche_992_GT3_1X7A0323.jpg', status: 'Available', branchId: 'BR_001' },

        // Lamborghini
        { carId: '16', brand: 'Lamborghini', model: 'Huracan Evo', year: 2023, pricePerDay: 1200, horsepower: '630 HP', topSpeed: '202 mph', zeroToSixty: '2.9s', transmission: '7-Speed DCT', imageURL: 'images/lamborghini_huracan_evo.png', status: 'Available', branchId: 'BR_001' },
        { carId: '17', brand: 'Lamborghini', model: 'Urus Performante', year: 2024, pricePerDay: 1300, horsepower: '657 HP', topSpeed: '190 mph', zeroToSixty: '3.1s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lamborghini_Urus_SE_DSC_8524.jpg/960px-Lamborghini_Urus_SE_DSC_8524.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '18', brand: 'Lamborghini', model: 'Aventador SVJ', year: 2022, pricePerDay: 2000, horsepower: '759 HP', topSpeed: '217 mph', zeroToSixty: '2.8s', transmission: '7-Speed ISR', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2016_Lamborghini_Aventador_SV_%2882931%29.jpg/960px-2016_Lamborghini_Aventador_SV_%2882931%29.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '19', brand: 'Lamborghini', model: 'Revuelto', year: 2024, pricePerDay: 2500, horsepower: '1001 HP', topSpeed: '217 mph', zeroToSixty: '2.5s', transmission: '8-Speed DCT', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg/960px-Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '20', brand: 'Lamborghini', model: 'Huracan STO', year: 2023, pricePerDay: 1500, horsepower: '630 HP', topSpeed: '193 mph', zeroToSixty: '3.0s', transmission: '7-Speed DCT', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/2021_Lamborghini_Huracan_STO_Blue.jpg/1280px-2021_Lamborghini_Huracan_STO_Blue.jpg', status: 'Available', branchId: 'BR_001' },

        // Rolls Royce
        { carId: '21', brand: 'Rolls Royce', model: 'Phantom', year: 2024, pricePerDay: 1500, horsepower: '563 HP', topSpeed: '155 mph', zeroToSixty: '5.1s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg/960px-2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '22', brand: 'Rolls Royce', model: 'Cullinan', year: 2023, pricePerDay: 1400, horsepower: '563 HP', topSpeed: '155 mph', zeroToSixty: '4.8s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg/960px-2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '23', brand: 'Rolls Royce', model: 'Ghost', year: 2024, pricePerDay: 1200, horsepower: '563 HP', topSpeed: '155 mph', zeroToSixty: '4.6s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/2022_Rolls-Royce_Ghost_Black_Badge_in_Arctic_White%2C_front_left.jpg/960px-2022_Rolls-Royce_Ghost_Black_Badge_in_Arctic_White%2C_front_left.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '24', brand: 'Rolls Royce', model: 'Wraith', year: 2022, pricePerDay: 1100, horsepower: '624 HP', topSpeed: '155 mph', zeroToSixty: '4.4s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2019_Rolls-Royce_Wraith_V12_Automatic_6.6.jpg/1280px-2019_Rolls-Royce_Wraith_V12_Automatic_6.6.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '25', brand: 'Rolls Royce', model: 'Dawn', year: 2023, pricePerDay: 1300, horsepower: '563 HP', topSpeed: '155 mph', zeroToSixty: '4.8s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2019_Rolls-Royce_Dawn_V12_Automatic_6.6.jpg/960px-2019_Rolls-Royce_Dawn_V12_Automatic_6.6.jpg', status: 'Available', branchId: 'BR_001' },

        // Audi
        { carId: '26', brand: 'Audi', model: 'R8 V10', year: 2023, pricePerDay: 500, horsepower: '602 HP', topSpeed: '205 mph', zeroToSixty: '3.1s', transmission: '7-Speed DCT', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2018_Audi_R8_Coupe_V10_plus_Front.jpg/960px-2018_Audi_R8_Coupe_V10_plus_Front.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '27', brand: 'Audi', model: 'RS e-tron GT', year: 2024, pricePerDay: 450, horsepower: '637 HP', topSpeed: '155 mph', zeroToSixty: '3.1s', transmission: '2-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Audi_e-tron_GT_IMG_5689.jpg/960px-Audi_e-tron_GT_IMG_5689.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '28', brand: 'Audi', model: 'RS6 Avant', year: 2023, pricePerDay: 400, horsepower: '591 HP', topSpeed: '190 mph', zeroToSixty: '3.5s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/2021_Audi_RS6_Avant_in_Nardo_Gray%2C_front_right.jpg/1280px-2021_Audi_RS6_Avant_in_Nardo_Gray%2C_front_right.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '29', brand: 'Audi', model: 'RS Q8', year: 2024, pricePerDay: 350, horsepower: '591 HP', topSpeed: '189 mph', zeroToSixty: '3.7s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/2018_Audi_Q8_S_Line_50_TDi_Quattro_3.0_Front.jpg/960px-2018_Audi_Q8_S_Line_50_TDi_Quattro_3.0_Front.jpg', status: 'Available', branchId: 'BR_001' },
        { carId: '30', brand: 'Audi', model: 'S8', year: 2023, pricePerDay: 300, horsepower: '563 HP', topSpeed: '155 mph', zeroToSixty: '3.8s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Audi_S8_-_Tokyo_Motor_Show_2013_%28cropped%29.jpg/960px-Audi_S8_-_Tokyo_Motor_Show_2013_%28cropped%29.jpg', status: 'Available', branchId: 'BR_001' },
        // --- Used Cars ---
        { carId: 'U1',  brand: 'Kia',        model: 'Sportage',    year: 2019, pricePerDay: 55,  horsepower: '181 HP', topSpeed: '120 mph', zeroToSixty: '8.9s', transmission: '6-Speed Auto', imageURL: 'https://images.unsplash.com/photo-1606611013481-29648ac32be2?auto=format&fit=crop&q=80&w=800', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '62,000 km' },
        { carId: 'U2',  brand: 'Kia',        model: 'Cerato',      year: 2020, pricePerDay: 40,  horsepower: '147 HP', topSpeed: '115 mph', zeroToSixty: '9.5s', transmission: '6-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2022_Kia_Forte_GT-Line_in_Runway_Red%2C_front_3.22.22.jpg/1280px-2022_Kia_Forte_GT-Line_in_Runway_Red%2C_front_3.22.22.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '48,000 km' },
        { carId: 'U3',  brand: 'Nissan',     model: 'Altima',      year: 2018, pricePerDay: 45,  horsepower: '188 HP', topSpeed: '118 mph', zeroToSixty: '8.2s', transmission: 'CVT Auto',     imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/2019_Nissan_Altima_SV_in_Brilliant_Silver%2C_front_10.31.19.jpg/1280px-2019_Nissan_Altima_SV_in_Brilliant_Silver%2C_front_10.31.19.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '75,000 km' },
        { carId: 'U4',  brand: 'Nissan',     model: 'X-Trail',     year: 2020, pricePerDay: 60,  horsepower: '170 HP', topSpeed: '118 mph', zeroToSixty: '9.8s', transmission: 'CVT Auto',     imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2019_Nissan_Rogue_SV_AWD_in_Monarch_Orange%2C_front_10.31.19.jpg/1280px-2019_Nissan_Rogue_SV_AWD_in_Monarch_Orange%2C_front_10.31.19.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '43,000 km' },
        { carId: 'U5',  brand: 'Toyota',     model: 'Camry',       year: 2019, pricePerDay: 50,  horsepower: '203 HP', topSpeed: '124 mph', zeroToSixty: '7.6s', transmission: '8-Speed Auto', imageURL: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '55,000 km' },
        { carId: 'U6',  brand: 'Toyota',     model: 'RAV4',        year: 2020, pricePerDay: 65,  horsepower: '203 HP', topSpeed: '120 mph', zeroToSixty: '8.1s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/2019_Toyota_RAV4_XSE_Hybrid_in_Blueprint%2C_front_7.29.19.jpg/1280px-2019_Toyota_RAV4_XSE_Hybrid_in_Blueprint%2C_front_7.29.19.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '39,000 km' },
        { carId: 'U7',  brand: 'Hyundai',    model: 'Tucson',      year: 2019, pricePerDay: 52,  horsepower: '187 HP', topSpeed: '119 mph', zeroToSixty: '8.7s', transmission: '7-Speed DCT',  imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/2022_Hyundai_Tucson_SEL_in_Amazon_Gray%2C_front_9.27.21.jpg/1280px-2022_Hyundai_Tucson_SEL_in_Amazon_Gray%2C_front_9.27.21.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '58,000 km' },
        { carId: 'U8',  brand: 'Hyundai',    model: 'Elantra',     year: 2021, pricePerDay: 38,  horsepower: '147 HP', topSpeed: '117 mph', zeroToSixty: '9.1s', transmission: '6-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2021_Hyundai_Elantra_SEL_in_Phantom_Black%2C_front_4.29.21.jpg/1280px-2021_Hyundai_Elantra_SEL_in_Phantom_Black%2C_front_4.29.21.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '30,000 km' },
        { carId: 'U9',  brand: 'Honda',      model: 'Accord',      year: 2018, pricePerDay: 48,  horsepower: '192 HP', topSpeed: '123 mph', zeroToSixty: '7.9s', transmission: 'CVT Auto',     imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/2018_Honda_Accord_Sport_1.5T_in_Lunar_Silver_Metallic%2C_front_10.26.19.jpg/1280px-2018_Honda_Accord_Sport_1.5T_in_Lunar_Silver_Metallic%2C_front_10.26.19.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '72,000 km' },
        { carId: 'U10', brand: 'Honda',      model: 'CR-V',        year: 2020, pricePerDay: 58,  horsepower: '190 HP', topSpeed: '121 mph', zeroToSixty: '7.8s', transmission: 'CVT Auto',     imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/2020_Honda_CR-V_Touring_AWD_in_Lunar_Silver_Metallic%2C_front_7.10.20.jpg/1280px-2020_Honda_CR-V_Touring_AWD_in_Lunar_Silver_Metallic%2C_front_7.10.20.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '44,000 km' },
        { carId: 'U11', brand: 'Volkswagen', model: 'Passat',      year: 2018, pricePerDay: 45,  horsepower: '174 HP', topSpeed: '130 mph', zeroToSixty: '8.5s', transmission: '7-Speed DSG',  imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2019_Volkswagen_Passat_SE_in_Pure_White%2C_front_10.28.19.jpg/1280px-2019_Volkswagen_Passat_SE_in_Pure_White%2C_front_10.28.19.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '68,000 km' },
        { carId: 'U12', brand: 'Volkswagen', model: 'Tiguan',      year: 2019, pricePerDay: 62,  horsepower: '184 HP', topSpeed: '125 mph', zeroToSixty: '7.9s', transmission: '8-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/2018_Volkswagen_Tiguan_SE_4Motion_in_Deep_Black_Pearl%2C_front_11.22.19.jpg/1280px-2018_Volkswagen_Tiguan_SE_4Motion_in_Deep_Black_Pearl%2C_front_11.22.19.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '52,000 km' },
        { carId: 'U13', brand: 'Ford',       model: 'Fusion',      year: 2018, pricePerDay: 42,  horsepower: '181 HP', topSpeed: '121 mph', zeroToSixty: '8.0s', transmission: '6-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/2017_Ford_Fusion_SE_in_Magnetic%2C_front_7.27.18.jpg/1280px-2017_Ford_Fusion_SE_in_Magnetic%2C_front_7.27.18.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '80,000 km' },
        { carId: 'U14', brand: 'Ford',       model: 'Explorer',    year: 2020, pricePerDay: 72,  horsepower: '300 HP', topSpeed: '117 mph', zeroToSixty: '6.9s', transmission: '10-Speed Auto', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/2020_Ford_Explorer_XLT_in_Star_White_Metallic_Tri-Coat%2C_front_7.13.20.jpg/1280px-2020_Ford_Explorer_XLT_in_Star_White_Metallic_Tri-Coat%2C_front_7.13.20.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '36,000 km' },
        { carId: 'U15', brand: 'Chevrolet',  model: 'Malibu',      year: 2019, pricePerDay: 40,  horsepower: '160 HP', topSpeed: '116 mph', zeroToSixty: '9.0s', transmission: 'CVT Auto',     imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2019_Chevrolet_Malibu_LT_in_Silver_Ice_Metallic%2C_front_7.28.19.jpg/1280px-2019_Chevrolet_Malibu_LT_in_Silver_Ice_Metallic%2C_front_7.28.19.jpg', status: 'Available', branchId: 'BR_001', condition: 'Used', mileage: '61,000 km' }
    ],
    bookings: [],
    payments: [],
    reviews: [],
    employees: [],
    insurances: [],
    carTypes: [],
    cart: [] // Kept for frontend state
};

// Full ERD Database Class
class CarDatabase {
    constructor() {
        this.storageKey = 'luxe_erd_db_v6';
        this.initializeDB();
    }

    initializeDB() {
        const storedData = localStorage.getItem(this.storageKey);
        if (!storedData) {
            localStorage.setItem(this.storageKey, JSON.stringify(initialData));
        }
    }

    getAllData() {
        return JSON.parse(localStorage.getItem(this.storageKey));
    }

    saveAll(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    getTable(tableName) {
        return this.getAllData()[tableName] || [];
    }

    insert(tableName, record) {
        const db = this.getAllData();
        const idField = this.getIdFieldName(tableName);
        if (idField && !record[idField]) {
            record[idField] = `${tableName.slice(0, 3).toUpperCase()}_${Date.now()}`;
        }
        db[tableName].push(record);
        this.saveAll(db);
        return record;
    }

    update(tableName, id, updatedFields) {
        const db = this.getAllData();
        const idField = this.getIdFieldName(tableName);
        const index = db[tableName].findIndex(record => record[idField] === id);
        if (index !== -1) {
            db[tableName][index] = { ...db[tableName][index], ...updatedFields };
            this.saveAll(db);
            return db[tableName][index];
        }
        return null;
    }

    getIdFieldName(tableName) {
        const mappings = {
            customers: 'customerId', cars: 'carId', bookings: 'bookingId',
            payments: 'payId', reviews: 'reviewId', branches: 'branchId',
            employees: 'employeeId', insurances: 'insuranceId', carTypes: 'typeName',
            cart: 'cartId'
        };
        return mappings[tableName] || null;
    }

    // --- Backwards compatible methods for UI ---
    
    registerCustomer(data) {
        const existing = this.getTable('customers').find(c => c.username === data.username);
        if (existing) return { error: 'Username already taken. Please choose another one.' };
        
        const newCustomer = this.insert('customers', {
            username: data.username,
            name: data.name,
            email: data.email,
            password: data.password, // Simulated
            phone: data.phone,
            address: data.address
        });
        return { success: true, customer: newCustomer };
    }

    loginCustomer(username, password) {
        const customer = this.getTable('customers').find(c => c.username === username && c.password === password);
        if (customer) {
            return { success: true, customer };
        }
        return { error: 'Invalid username or password.' };
    }

    // --- Reviews Methods ---
    
    addReview(carId, customerId, rating, comment) {
        return this.insert('reviews', {
            carId,
            customerId,
            rating: parseInt(rating),
            comment,
            date: new Date().toISOString().split('T')[0]
        });
    }

    getReviewsForCar(carId) {
        const reviews = this.getTable('reviews').filter(r => r.carId === carId);
        // Enrich with customer name
        return reviews.map(r => {
            const customer = this.getTable('customers').find(c => c.customerId === r.customerId);
            return {
                ...r,
                customerName: customer ? customer.name : 'Unknown User'
            };
        }).sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    getAverageRating(carId) {
        const reviews = this.getTable('reviews').filter(r => r.carId === carId);
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
        return (sum / reviews.length).toFixed(1);
    }

    getAllCars() {
        return this.getTable('cars');
    }

    getCarById(id) {
        return this.getTable('cars').find(car => car.carId === id);
    }

    rentCar(id) {
        const car = this.getCarById(id);
        if (car && car.status === 'Available') {
            this.update('cars', id, { status: 'Rented' });
            return true;
        }
        return false;
    }

    returnCar(id) {
        const car = this.getCarById(id);
        if (car && car.status !== 'Available') {
            this.update('cars', id, { status: 'Available' });
            
            // Remove from active bookings and payments
            const db = this.getAllData();
            const booking = db.bookings.find(b => b.carId === id);
            if (booking) {
                db.payments = db.payments.filter(p => p.bookingId !== booking.bookingId);
            }
            db.bookings = db.bookings.filter(b => b.carId !== id);
            this.saveAll(db);
            
            return true;
        }
        return false;
    }

    // Cart Methods
    getCart() {
        return this.getTable('cart');
    }

    addToCart(carId, days) {
        const cart = this.getCart();
        const existing = cart.find(item => item.carId === carId);
        if (existing) return false;
        
        const car = this.getCarById(carId);
        if(!car || car.status !== 'Available') return false;

        this.insert('cart', { carId, days, total: car.pricePerDay * days });
        return true;
    }

    removeFromCart(carId) {
        const db = this.getAllData();
        db.cart = db.cart.filter(item => item.carId !== carId);
        this.saveAll(db);
    }

    checkoutCart(customerId = 'CUST_001') {
        let successCount = 0;
        const cart = this.getCart();

        cart.forEach(item => {
            const car = this.getCarById(item.carId);
            if (this.rentCar(item.carId)) {
                // ERD Simulation: Create Booking
                const booking = this.insert('bookings', {
                    startDate: new Date().toISOString().split('T')[0],
                    endDate: new Date(Date.now() + item.days * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                    totalCost: item.total,
                    customerId: customerId,
                    carId: item.carId,
                    branchId: car.branchId
                });

                // ERD Simulation: Create Payment
                this.insert('payments', {
                    amount: item.total,
                    payDate: new Date().toISOString().split('T')[0],
                    payMethod: 'Credit Card',
                    bookingId: booking.bookingId
                });

                successCount++;
            }
        });
        
        // Clear cart
        const db = this.getAllData();
        db.cart = [];
        this.saveAll(db);
        
        return successCount;
    }
    
    resetDatabase() {
        localStorage.setItem(this.storageKey, JSON.stringify(initialData));
    }
}

// UI Controller
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.logo span').style.color = '#00d4ff'; // JS execution indicator
    const db = new CarDatabase();
    
    // DOM Elements
    const carGrid = document.getElementById('carGrid');
    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');
    
    // Auth Logic
    const authBtn = document.getElementById('authBtn');
    const authContainer = document.getElementById('authContainer');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const authOverlay = document.getElementById('authOverlay');
    const closeAuthBtn = document.getElementById('closeAuthBtn');
    const authForm = document.getElementById('authForm');
    const authTitle = document.getElementById('authTitle');
    const registerFields = document.getElementById('registerFields');
    const authSwitchBtn = document.getElementById('authSwitchBtn');
    const authSwitchText = document.getElementById('authSwitchText');
    const authSubmitBtn = document.getElementById('authSubmitBtn');

    let isRegisterMode = false;
    let currentUser = JSON.parse(localStorage.getItem('luxe_session')) || null;

    // ── Currency / Region System ──────────────────────────────────────────────
    const REGIONS = {
        us: { name: 'United States', flag: '🇺🇸', currency: 'USD', symbol: '$',   rate: 1,      code: 'USD' },
        eg: { name: 'Egypt',         flag: '🇪🇬', currency: 'EGP', symbol: 'EGP ', rate: 50.5,   code: 'EGP' },
        gb: { name: 'United Kingdom',flag: '🇬🇧', currency: 'GBP', symbol: '£',   rate: 0.79,   code: 'GBP' },
        eu: { name: 'Europe',        flag: '🇪🇺', currency: 'EUR', symbol: '€',   rate: 0.92,   code: 'EUR' },
        sa: { name: 'Saudi Arabia',  flag: '🇸🇦', currency: 'SAR', symbol: '﷼',   rate: 3.75,   code: 'SAR' },
        ae: { name: 'UAE',           flag: '🇦🇪', currency: 'AED', symbol: 'AED ', rate: 3.67,   code: 'AED' },
        kw: { name: 'Kuwait',        flag: '🇰🇼', currency: 'KWD', symbol: 'KD ',  rate: 0.31,   code: 'KWD' },
        tr: { name: 'Turkey',        flag: '🇹🇷', currency: 'TRY', symbol: '₺',   rate: 32.5,   code: 'TRY' },
        jo: { name: 'Jordan',        flag: '🇯🇴', currency: 'JOD', symbol: 'JD ',  rate: 0.71,   code: 'JOD' },
        qa: { name: 'Qatar',         flag: '🇶🇦', currency: 'QAR', symbol: 'QR ',  rate: 3.64,   code: 'QAR' },
    };

    let savedRegion = localStorage.getItem('luxe_region');
    let currentRegion = (savedRegion && REGIONS[savedRegion]) ? REGIONS[savedRegion] : REGIONS.us;

    const formatPrice = (usdAmount) => {
        const converted = Math.round(usdAmount * currentRegion.rate);
        return `${currentRegion.symbol}${converted.toLocaleString()}`;
    };

    const updateRegionUI = () => {
        document.getElementById('regionFlag').textContent = currentRegion.flag;
        document.getElementById('regionCurrencyCode').textContent = currentRegion.code;
        // Highlight active region button
        document.querySelectorAll('.region-btn').forEach(btn => {
            btn.classList.toggle('active-region', REGIONS[btn.dataset.region] === currentRegion);
        });
    };

    // Region overlay logic
    const regionOverlay = document.getElementById('regionOverlay');
    const regionToggle  = document.getElementById('regionToggle');

    const openRegionDialog = () => regionOverlay.classList.add('active');
    const closeRegionDialog = () => regionOverlay.classList.remove('active');

    if (regionToggle) regionToggle.addEventListener('click', openRegionDialog);

    if (regionOverlay) {
        regionOverlay.addEventListener('click', (e) => {
            if (e.target === regionOverlay) closeRegionDialog();
        });
    }

    document.querySelectorAll('.region-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.region;
            currentRegion = REGIONS[key];
            localStorage.setItem('luxe_region', key);
            updateRegionUI();
            closeRegionDialog();
            filterCars();
            filterUsedCars();
            showToast(`Region set to ${currentRegion.name} (${currentRegion.code})`);
        });
    });

    // Show dialog on first visit
    if (!localStorage.getItem('luxe_region')) {
        setTimeout(() => regionOverlay.classList.add('active'), 800);
    }
    updateRegionUI();
    // ─────────────────────────────────────────────────────────────────────────

    const updateAuthUI = () => {
        const adminBtn = document.getElementById('adminToggle');
        const resetBtn = document.getElementById('theme-toggle');

        if (currentUser) {
            userNameDisplay.textContent = `Welcome, ${currentUser.name}`;
            userNameDisplay.style.display = 'inline-block';
            authBtn.textContent = 'Logout';

            if (currentUser.username === 'ElSona2yaEltare5ya') {
                if (adminBtn) adminBtn.style.display = 'flex';
                if (resetBtn) resetBtn.style.display = 'flex';
            } else {
                if (adminBtn) adminBtn.style.display = 'none';
                if (resetBtn) resetBtn.style.display = 'none';
            }
        } else {
            if (userNameDisplay) userNameDisplay.style.display = 'none';
            if (authBtn) authBtn.textContent = 'Sign In';
            if (adminBtn) adminBtn.style.display = 'none';
            // Reset button stays visible
        }
    };

    if (authBtn) {
        authBtn.addEventListener('click', () => {
            if (currentUser) {
                // Logout
                localStorage.removeItem('luxe_session');
                currentUser = null;
                updateAuthUI();
                showToast('Successfully logged out.');
            } else {
                authOverlay.classList.add('active');
            }
        });
        
        closeAuthBtn.addEventListener('click', () => {
            authOverlay.classList.remove('active');
        });

        authSwitchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            isRegisterMode = !isRegisterMode;
            if (isRegisterMode) {
                authTitle.textContent = 'Create Account';
                registerFields.style.display = 'block';
                authSubmitBtn.textContent = 'Register';
                authSwitchText.textContent = 'Already have an account?';
                authSwitchBtn.textContent = 'Sign In';
            } else {
                authTitle.textContent = 'Sign In';
                registerFields.style.display = 'none';
                authSubmitBtn.textContent = 'Sign In';
                authSwitchText.textContent = "Don't have an account?";
                authSwitchBtn.textContent = 'Register';
            }
        });

        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('authUsername').value.trim();
            const password = document.getElementById('authPassword').value.trim();

            if (isRegisterMode) {
                const name = document.getElementById('authName').value;
                const email = document.getElementById('authEmail').value;
                const phone = document.getElementById('authPhone').value;
                const address = document.getElementById('authAddress').value;
                
                if (!email) {
                    alert('Email is required for registration.');
                    return;
                }

                const res = db.registerCustomer({ username, name, email, password, phone, address });
                if (res.error) {
                    alert(res.error);
                } else {
                    currentUser = res.customer;
                    localStorage.setItem('luxe_session', JSON.stringify(currentUser));
                    showToast('Registration successful!');
                    authOverlay.classList.remove('active');
                    updateAuthUI();
                }
            } else {
                const res = db.loginCustomer(username, password);
                if (res.error) {
                    alert(res.error);
                } else {
                    currentUser = res.customer;
                    localStorage.setItem('luxe_session', JSON.stringify(currentUser));
                    showToast('Login successful!');
                    authOverlay.classList.remove('active');
                    updateAuthUI();
                }
            }
        });
    }

    updateAuthUI();

    // Modal Elements
    const modal = document.getElementById('bookingModal');
    const closeModal = document.getElementById('closeModal');
    const bookingForm = document.getElementById('bookingForm');
    const rentalDaysInput = document.getElementById('rentalDays');
    const totalCostDisplay = document.getElementById('totalCost');
    const carIdInput = document.getElementById('carIdInput');
    const modalCarTitle = document.getElementById('modalCarTitle');
    const modalCarPrice = document.getElementById('modalCarPrice');
    
    // Cart Elements
    const cartToggle = document.getElementById('cartToggle');
    const cartBadge = document.getElementById('cartBadge');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartGrandTotal = document.getElementById('cartGrandTotal');
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    // Toast Element
    const toast = document.getElementById('toast');
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Render Cars
    const renderCars = (carsToRender) => {
        console.log("Rendering cars:", carsToRender);
        if (carGrid) carGrid.innerHTML = '';
        
        if(carsToRender.length === 0) {
            carGrid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">No cars found matching your criteria.</p>';
            return;
        }

        carsToRender.forEach(car => {
            const isRented = car.status !== 'Available';
            const avgRating = db.getAverageRating(car.carId);
            const badgeClass = isRented ? 'car-badge rented' : 'car-badge';
            const badgeText = isRented ? 'UNAVAILABLE' : 'AVAILABLE';
            
            const card = document.createElement('div');
            card.className = 'car-card glass';
            card.innerHTML = `
                <div class="car-card-inner">
                    <div class="car-card-front">
                        <div class="car-img-wrapper" style="height: 220px; overflow: hidden; position: relative; display: block !important;">
                            <span class="${badgeClass}">${badgeText}</span>
                            <span class="car-rating">⭐ ${avgRating > 0 ? avgRating : 'New'}</span>
                            <div class="car-img" style="width: 100%; height: 100%; background-image: url('${car.imageURL}'), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'); background-size: cover; background-position: center; display: block !important; visibility: visible !important;"></div>
                        </div>
                        <div class="car-info">
                            <div class="car-brand">${car.brand}</div>
                            <h3 class="car-model">${car.model}</h3>
                            <div class="car-details">
                                <div class="detail-item">Year <span>${car.year}</span></div>
                                <div class="detail-item" style="text-align: right;">Rate <span>${formatPrice(car.pricePerDay)}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="car-card-back">
                        <div class="car-spec-header">
                            <h3>Specifications</h3>
                            <div class="spec-divider"></div>
                        </div>
                        <div class="specs-grid">
                            <div class="car-spec">
                                <span class="car-spec-label">⚡ Horsepower</span>
                                <span class="car-spec-value">${car.horsepower || 'N/A'}</span>
                            </div>
                            <div class="car-spec">
                                <span class="car-spec-label">🏎 0 to 60</span>
                                <span class="car-spec-value">${car.zeroToSixty || 'N/A'}</span>
                            </div>
                            <div class="car-spec">
                                <span class="car-spec-label">🚀 Top Speed</span>
                                <span class="car-spec-value">${car.topSpeed || 'N/A'}</span>
                            </div>
                            <div class="car-spec">
                                <span class="car-spec-label">⚙️ Gearbox</span>
                                <span class="car-spec-value">${car.transmission || 'N/A'}</span>
                            </div>
                            <div class="car-spec full-width">
                                <span class="car-spec-label">📅 Model Year &amp; Daily Rate</span>
                                <span class="car-spec-value">${car.year} &nbsp;·&nbsp; ${formatPrice(car.pricePerDay)} / day</span>
                            </div>
                        </div>
                        <button class="btn btn-primary w-100 rent-btn" data-id="${car.carId}" ${isRented ? 'disabled' : ''} style="margin-top: 14px;">
                            ${isRented ? '🚫 Unavailable' : '🛒 Add to Cart'}
                        </button>
                    </div>
                </div>
            `;
            if (carGrid) carGrid.appendChild(card);
        });

        // Add event listeners to newly created rent buttons
        document.querySelectorAll('.rent-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const carId = e.target.getAttribute('data-id');
                openModal(carId);
            });
        });
    };

    // Filter Logic (New/Luxury Cars only)
    const filterCars = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const brand = brandFilter.value;
        const allCars = db.getAllCars().filter(c => c.condition !== 'Used');

        const filtered = allCars.filter(car => {
            const matchesSearch = car.brand.toLowerCase().includes(searchTerm) || 
                                  car.model.toLowerCase().includes(searchTerm);
            const matchesBrand = brand === 'All' || car.brand === brand;
            return matchesSearch && matchesBrand;
        });

        renderCars(filtered);
    };

    // Used Cars Render & Filter
    const usedCarGrid = document.getElementById('usedCarGrid');
    const usedSearchInput = document.getElementById('usedSearchInput');
    const usedBrandFilter = document.getElementById('usedBrandFilter');

    const renderUsedCars = (carsToRender) => {
        console.log("Rendering used cars:", carsToRender);
        if (usedCarGrid) usedCarGrid.innerHTML = '';

        if (carsToRender.length === 0) {
            usedCarGrid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">No used cars found matching your criteria.</p>';
            return;
        }

        carsToRender.forEach(car => {
            const isRented = car.status !== 'Available';
            const avgRating = db.getAverageRating(car.carId);
            const badgeText = isRented ? 'UNAVAILABLE' : 'AVAILABLE';
            const badgeClass = isRented ? 'car-badge rented' : 'car-badge';

            const card = document.createElement('div');
            card.className = 'car-card used-car-card';
            card.innerHTML = `
                <div class="car-card-inner">
                    <div class="car-card-front">
                        <div class="car-img-wrapper" style="height: 220px; overflow: hidden; position: relative; display: block !important;">
                            <span class="${badgeClass}">${badgeText}</span>
                            <span class="used-badge">USED</span>
                            <span class="car-rating">⭐ ${avgRating > 0 ? avgRating : 'New'}</span>
                            <div class="car-img" style="width: 100%; height: 100%; background-image: url('${car.imageURL}'), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'); background-size: cover; background-position: center; display: block !important; visibility: visible !important;"></div>
                        </div>
                        <div class="car-info">
                            <div class="car-brand">${car.brand}</div>
                            <h3 class="car-model">${car.model}</h3>
                            <div class="car-details">
                                <div class="detail-item">Year <span>${car.year}</span></div>
                                <div class="detail-item" style="text-align:right;">Rate <span>${formatPrice(car.pricePerDay)}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="car-card-back">
                        <div class="car-spec-header">
                            <h3>Specifications</h3>
                            <div class="spec-divider"></div>
                        </div>
                        <div class="specs-grid">
                            <div class="car-spec">
                                <span class="car-spec-label">⚡ Horsepower</span>
                                <span class="car-spec-value">${car.horsepower || 'N/A'}</span>
                            </div>
                            <div class="car-spec">
                                <span class="car-spec-label">🛣️ Mileage</span>
                                <span class="car-spec-value">${car.mileage || 'N/A'}</span>
                            </div>
                            <div class="car-spec">
                                <span class="car-spec-label">🚀 Top Speed</span>
                                <span class="car-spec-value">${car.topSpeed || 'N/A'}</span>
                            </div>
                            <div class="car-spec">
                                <span class="car-spec-label">⚙️ Gearbox</span>
                                <span class="car-spec-value">${car.transmission || 'N/A'}</span>
                            </div>
                            <div class="car-spec full-width">
                                <span class="car-spec-label">📅 Model Year &amp; Daily Rate</span>
                                <span class="car-spec-value">${car.year} &nbsp;·&nbsp; ${formatPrice(car.pricePerDay)} / day</span>
                            </div>
                        </div>
                        <button class="btn btn-primary w-100 rent-btn" data-id="${car.carId}" ${isRented ? 'disabled' : ''} style="margin-top: 14px;">
                            ${isRented ? '🚫 Unavailable' : '🛒 Add to Cart'}
                        </button>
                    </div>
                </div>
            `;
            if (usedCarGrid) usedCarGrid.appendChild(card);
        });

        // Attach click listeners for the booking modal
        usedCarGrid.querySelectorAll('.rent-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                openModal(id);
            });
        });
    };

    const filterUsedCars = () => {
        const searchTerm = usedSearchInput.value.toLowerCase();
        const brand = usedBrandFilter.value;
        const usedCars = db.getAllCars().filter(c => c.condition === 'Used');

        const filtered = usedCars.filter(car => {
            const matchesSearch = car.brand.toLowerCase().includes(searchTerm) ||
                                  car.model.toLowerCase().includes(searchTerm);
            const matchesBrand = brand === 'All' || car.brand === brand;
            return matchesSearch && matchesBrand;
        });

        renderUsedCars(filtered);
    };

    // Event Listeners for Filters
    searchInput.addEventListener('input', filterCars);
    brandFilter.addEventListener('change', filterCars);
    usedSearchInput.addEventListener('input', filterUsedCars);
    usedBrandFilter.addEventListener('change', filterUsedCars);

    // Reviews Logic
    const renderReviews = (carId) => {
        const reviewsList = document.getElementById('reviewsList');
        const modalAvg = document.getElementById('modalAverageRating');
        const addReviewForm = document.getElementById('addReviewForm');
        const authPrompt = document.getElementById('reviewAuthPrompt');
        
        const reviews = db.getReviewsForCar(carId);
        const avg = db.getAverageRating(carId);
        
        modalAvg.textContent = `⭐ ${avg > 0 ? avg : 'New'}`;
        
        if (reviews.length === 0) {
            reviewsList.innerHTML = '<p style="color: var(--text-muted); text-align: center; font-size: 0.9rem;">No reviews yet. Be the first!</p>';
        } else {
            reviewsList.innerHTML = reviews.map(r => `
                <div class="review-item">
                    <div class="review-header">
                        <span class="review-author">${r.customerName}</span>
                        <span>${'⭐'.repeat(r.rating)}</span>
                    </div>
                    <div class="review-text">${r.comment}</div>
                    <div style="font-size: 0.75rem; color: #666; margin-top: 5px;">${r.date}</div>
                </div>
            `).join('');
        }

        if (currentUser) {
            addReviewForm.style.display = 'block';
            authPrompt.style.display = 'none';
        } else {
            addReviewForm.style.display = 'none';
            authPrompt.style.display = 'block';
        }
    };

    // Modal Logic
    const openModal = (id) => {
        const car = db.getCarById(id);
        if (!car || car.status !== 'Available') return;

        carIdInput.value = car.carId;
        modalCarTitle.textContent = `Book ${car.brand} ${car.model}`;
        modalCarPrice.textContent = `${formatPrice(car.pricePerDay)} / day`;
        
        // Reset form
        bookingForm.reset();
        totalCostDisplay.textContent = '$0';
        
        // Update price when days change
        rentalDaysInput.oninput = (e) => {
            const days = parseInt(e.target.value) || 0;
            totalCostDisplay.textContent = formatPrice(days * car.pricePerDay);
        };

        renderReviews(id);
        modal.classList.add('active');
    };

    // Handle Review Submission
    const addReviewForm = document.getElementById('addReviewForm');
    if (addReviewForm) {
        addReviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!currentUser) return;

            const carId = carIdInput.value;
            const rating = document.getElementById('reviewRating').value;
            const comment = document.getElementById('reviewComment').value;

            db.addReview(carId, currentUser.customerId, rating, comment);
            
            showToast('Review submitted successfully!');
            addReviewForm.reset();
            renderReviews(carId);
            filterCars(); // Refresh background car cards to update rating
        });
    }

    const reviewSignInBtn = document.getElementById('reviewSignInBtn');
    if (reviewSignInBtn) {
        reviewSignInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeBookingModal();
            const authOverlay = document.getElementById('authOverlay');
            if (authOverlay) authOverlay.classList.add('active');
        });
    }

    const closeBookingModal = () => {
        modal.classList.remove('active');
    };

    closeModal.addEventListener('click', closeBookingModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeBookingModal();
    });

    // Handle Add to Cart Submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!currentUser) {
            closeBookingModal();
            const authOverlay = document.getElementById('authOverlay');
            if (authOverlay) authOverlay.classList.add('active');
            showToast('Please sign in to add cars to your cart.');
            return;
        }
        
        const carId = carIdInput.value;
        const days = parseInt(rentalDaysInput.value) || 1;
        const car = db.getCarById(carId);
        
        if (db.addToCart(carId, days)) {
            closeBookingModal();
            showToast(`Added ${car.brand} ${car.model} to cart!`);
            updateCartUI();
        } else {
            showToast('Item is already in your cart or unavailable.');
        }
    });

    // Cart UI Logic
    const updateCartUI = () => {
        const cart = db.getCart();
        cartBadge.textContent = cart.length;
        
        if(cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">Your cart is empty.</p>';
            cartGrandTotal.textContent = formatPrice(0);
            checkoutBtn.disabled = true;
            return;
        }

        checkoutBtn.disabled = false;
        cartItemsContainer.innerHTML = '';
        let grandTotal = 0;

        cart.forEach(item => {
            const car = db.getCarById(item.carId);
            if(!car) return;
            grandTotal += item.total;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${car.imageURL}" class="cart-item-img" alt="${car.brand}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${car.brand} ${car.model}</div>
                    <div class="cart-item-price">${formatPrice(car.pricePerDay)} x ${item.days} days = ${formatPrice(item.total)}</div>
                </div>
                <button class="cart-item-remove" data-id="${car.carId}">&times;</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartGrandTotal.textContent = formatPrice(grandTotal);

        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                db.removeFromCart(id);
                updateCartUI();
            });
        });
    };

    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        updateCartUI();
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!currentUser) {
            cartSidebar.classList.remove('active');
            authOverlay.classList.add('active');
            showToast('Please sign in or register to complete your booking.');
            return;
        }

        const successCount = db.checkoutCart(currentUser.customerId);
        if(successCount > 0) {
            cartSidebar.classList.remove('active');
            showToast(`Successfully booked ${successCount} car(s)!`);
            updateCartUI();
            filterCars();
            checkoutForm.reset();
        }
    });

    // Toast Logic
    const showToast = (message) => {
        const toastMessage = document.getElementById('toastMessage');
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    };

    // Admin Reset
    document.getElementById('theme-toggle').addEventListener('click', () => {
        db.resetDatabase();
        filterCars();
        filterUsedCars();
        updateCartUI();
        showToast('Database and Cart reset to initial state.');
    });
    try {
        filterCars();
        filterUsedCars();
        updateCartUI();
    } catch (err) {
        console.error("Initialization Error:", err);
        if (carGrid) carGrid.innerHTML = `<div style="color:red; padding:20px; text-align:center;">Error loading cars: ${err.message}. Please click 'Reset DB' above.</div>`;
    }

    // Admin Dashboard Logic
    const adminToggle = document.getElementById('adminToggle');
    const adminOverlay = document.getElementById('adminOverlay');
    const closeAdminBtn = document.getElementById('closeAdminBtn');
    
    const adminTotalRevenue = document.getElementById('adminTotalRevenue');
    const adminActiveBookings = document.getElementById('adminActiveBookings');
    const adminRentalsBody = document.getElementById('adminRentalsBody');

    const renderAdminDashboard = () => {
        // Calculate Revenue
        const payments = db.getTable('payments');
        const revenue = payments.reduce((sum, pay) => sum + pay.amount, 0);
        adminTotalRevenue.textContent = `$${revenue.toLocaleString()}`;

        // Active Bookings Count
        const bookings = db.getTable('bookings');
        adminActiveBookings.textContent = bookings.length;

        // Render Active Rentals Table
        adminRentalsBody.innerHTML = '';
        if (bookings.length === 0) {
            adminRentalsBody.innerHTML = '<tr><td colspan="5" style="text-align:center; color: var(--text-muted); padding: 20px;">No active rentals.</td></tr>';
        } else {
            bookings.forEach(b => {
                const car = db.getCarById(b.carId);
                if (!car) return;

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${car.brand} ${car.model}</td>
                    <td>${b.customerId}</td>
                    <td>${b.startDate}</td>
                    <td>${b.endDate}</td>
                    <td><button class="btn btn-primary return-btn" data-carid="${b.carId}" style="padding: 5px 10px; font-size: 0.8rem;">Return</button></td>
                `;
                adminRentalsBody.appendChild(tr);
            });

            // Bind Return Buttons
            document.querySelectorAll('.return-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-carid');
                    if (db.returnCar(id)) {
                        showToast('Car returned successfully!');
                        renderAdminDashboard();
                        filterCars(); // Refresh main grid
                    }
                });
            });
        }
    };

    if (adminToggle && adminOverlay) {
        adminToggle.addEventListener('click', () => {
            renderAdminDashboard();
            adminOverlay.classList.add('active');
        });

        closeAdminBtn.addEventListener('click', () => {
            adminOverlay.classList.remove('active');
        });
    }

    // Support Chat Logic
    const supportLink = document.getElementById('supportLink');
    const supportWidget = document.getElementById('supportWidget');
    const closeSupport = document.getElementById('closeSupport');
    const sendChatBtn = document.getElementById('sendChatBtn');
    const chatInput = document.getElementById('chatInput');
    const chatHistory = document.getElementById('chatHistory');

    if (supportLink && supportWidget) {
        supportLink.addEventListener('click', (e) => {
            e.preventDefault();
            supportWidget.classList.add('open');
        });

        closeSupport.addEventListener('click', () => {
            supportWidget.classList.remove('open');
        });

        const handleSendChat = () => {
            const msg = chatInput.value.trim();
            if (msg) {
                // Add User Message
                const userMsgDiv = document.createElement('div');
                userMsgDiv.className = 'chat-msg user';
                userMsgDiv.textContent = msg;
                chatHistory.appendChild(userMsgDiv);
                chatInput.value = '';
                chatHistory.scrollTop = chatHistory.scrollHeight;

                // Mock Bot Reply
                setTimeout(() => {
                    const botMsgDiv = document.createElement('div');
                    botMsgDiv.className = 'chat-msg bot';
                    botMsgDiv.innerHTML = 'Thank you for your message. An agent will text you back via Gmail shortly. If urgent, please email us directly at <a href="mailto:Elsona2yaElTare5ya@gmail.com" style="color:var(--primary-blue); text-decoration:none;"><strong>Elsona2yaElTare5ya@gmail.com</strong></a>.';
                    chatHistory.appendChild(botMsgDiv);
                    chatHistory.scrollTop = chatHistory.scrollHeight;
                }, 1000);
            }
        };

        sendChatBtn.addEventListener('click', handleSendChat);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSendChat();
        });
    }
});
