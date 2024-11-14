
import {
    FaHome,
    FaCalendarCheck,
    FaFlask,
    FaPills,
    FaHeart,
    FaUserFriends,
    FaFileMedical,
    FaEnvelope,
    FaMoneyBill, FaCog
} from 'react-icons/fa';
import { Doctor } from '../components/pages/dashboard/dashboard.types';



export const doctors: Doctor[] = [
    {
        name: "Dr. Darlene Robertson",
        specialty: "Dental Specialist",
        rating: 5.0,
        reviews: 50,
        imgSrc: 'https://img.freepik.com/premium-photo/doctor-digital-avatar-generative-ai_934475-9326.jpg'
    },
    {
        name: "Dr. Darrell Steward",
        specialty: "Heart Specialist",
        rating: 4.9,
        reviews: 50,
        imgSrc: 'https://img.freepik.com/premium-photo/doctor-digital-avatar-generative-ai_934475-9326.jpg'
    },
    {
        name: "Dr. Cameron Williamson",
        specialty: "Dental Specialist",
        rating: 5.0,
        reviews: 80,
        imgSrc: 'https://img.freepik.com/premium-photo/doctor-digital-avatar-generative-ai_934475-9326.jpg'
    },
    {
        name: "Dr. Darlene Robertson",
        specialty: "Dental Specialist",
        rating: 5.0,
        reviews: 80,
        imgSrc: 'https://img.freepik.com/premium-photo/doctor-digital-avatar-generative-ai_934475-9326.jpg'
    }
];

export const medications = [
    {
        name: "Acetaminophen",
        dosage: "500 mg",
        instructions: "Take with food every morning"
    },
    {
        name: "Doxycycline",
        dosage: "100 mg",
        instructions: "Take 1 with food twice a day, and avoid drinking alcohol for 2 hours after"
    },
    {
        name: "Hydrochlorothiazide",
        dosage: "23 mg",
        instructions: "Take 3 tablets, 3 times a day for 7 days"
    }
];

export const popularProducts = [
    {
        name: "Necessaire 75ML",
        price: 27.60,
        originalPrice: 34.7,
        image: "https://thumbs.dreamstime.com/b/d-vitamin-c-round-sphere-capsule-orange-golden-icon-beauty-nutrition-skincare-complex-product-design-medical-d-vitamin-c-324146981.jpg"
    },
    {
        name: "Mario 118ml",
        price: 25.70,
        originalPrice: 32.7,
        image: "https://thumbs.dreamstime.com/b/page-template-presentation-steps-option-blank-range-modern-style-design-cover-business-brochure-vector-illustration-eps-can-be-50205424.jpg"
    },
    {
        name: "Allergy Relief 25mg",
        price: 25.70,
        originalPrice: 32.7,
        image: "https://thumbs.dreamstime.com/b/bevel-thought-bubble-blue-background-vector-ilustration-174841956.jpg"
    }
];

export const healthPackages = [
    {
        name: "Basic Health Package",
        description: "Ideal for individuals aged 21-40...",
        icon: "B"
    },
    {
        name: "Fever Panel",
        description: "Ideal for individuals aged 21-40...",
        icon: "F"
    }
];

export const upcomingConsultation = {
    doctor: {
        name: "Dr. Darlene Robertson",
        specialty: "Dental Specialist",
        avatar: "/doctor-avatar.png"
    },
    date: "27 Oct 2021",
    time: "11:00 - 12:00 AM",
    imgSrc: "https://img.freepik.com/premium-photo/dentist-digital-avatar-generative-ai_934475-9021.jpg"
};

export const navItems = [
    { Icon: FaHome, text: "Home" },
    { Icon: FaCalendarCheck, text: "Appointment" },
    { Icon: FaFlask, text: "Lab Tests" },
    { Icon: FaPills, text: "Medicine Order" },
    { Icon: FaHeart, text: "Favourites" },
    { Icon: FaUserFriends, text: "Family" },
    { Icon: FaFileMedical, text: "Prescription" },
    { Icon: FaEnvelope, text: "Messages" },
    { Icon: FaMoneyBill, text: "Payments" },
    { Icon: FaCog, text: "Settings" }
];
