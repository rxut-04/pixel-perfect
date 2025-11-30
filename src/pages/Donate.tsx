import React from "react"
import DonationListingComponent, { Donation } from "@/components/ui/donation-listing"
import { 
  Utensils, 
  BookOpen, 
  Shirt, 
  DollarSign, 
  Heart, 
  Cake, 
  Users, 
  GraduationCap, 
  ShoppingCart 
} from "lucide-react"

const donations: Donation[] = [
  {
    id: "food-donation",
    title: "Food Donation",
    icon: <Utensils className="h-6 w-6 sm:h-8 sm:w-8" />,
    description: "Donate leftover or surplus food with details of quantity, expiry date, and source.",
    category: "Food & Nutrition",
    details: "Help us reduce food waste and feed those in need. You can donate leftover or surplus food items. Please provide details about the quantity, expiry date, and source of the food. All donations are inspected for quality and safety before distribution to families in need."
  },
  {
    id: "book-donation",
    title: "Book Donation",
    icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />,
    description: "Donate books by category: Story, Academic, or Reference to empower children.",
    category: "Education",
    details: "Empower children through the gift of knowledge. Donate books categorized as Story books, Academic textbooks, or Reference materials. Your book donations help build libraries in schools and community centers, giving children access to educational resources they need to succeed."
  },
  {
    id: "clothes-donation",
    title: "Clothes Donation",
    icon: <Shirt className="h-6 w-6 sm:h-8 sm:w-8" />,
    description: "Donate clothes by gender and size for children, women, and men.",
    category: "Clothing & Essentials",
    details: "Provide warmth and dignity through clothing donations. We accept clothes for children, women, and men. Please specify the gender and size when donating. All clothing items are sorted, cleaned, and distributed to families in need, helping them maintain dignity and comfort."
  },
  {
    id: "money-donation",
    title: "Money Donation",
    icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8" />,
    description: "Provide financial support for NGO projects, school supplies, and family aid.",
    category: "Financial Support",
    details: "Your financial contributions directly support our NGO projects, including school supplies for children, emergency family aid, and community development programs. Every donation, no matter the size, makes a significant impact on the lives of those we serve."
  },
  {
    id: "medical-support",
    title: "Medical Support",
    icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
    description: "Donate medical supplies or funds linked with partner hospitals.",
    category: "Healthcare",
    details: "Support healthcare initiatives by donating medical supplies or funds that are linked with our partner hospitals. Your contributions help provide essential medical care, medications, and health services to underserved communities, ensuring everyone has access to quality healthcare."
  },
  {
    id: "event-celebration",
    title: "Event Celebration",
    icon: <Cake className="h-6 w-6 sm:h-8 sm:w-8" />,
    description: "Support birthday parties, celebrations, and special events for children.",
    category: "Community Events",
    details: "Bring joy to children's lives by supporting birthday parties, celebrations, and special events. Your donations help create memorable experiences for children who may not otherwise have the opportunity to celebrate special occasions, fostering happiness and creating lasting memories."
  },
  {
    id: "adopt-child",
    title: "Adopt a Child",
    icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
    description: "Support a child: specify age, gender, and contact support for more info.",
    category: "Child Sponsorship",
    details: "Make a lasting impact by adopting a child. You can specify the age and gender preference, and we'll connect you with a child in need. Your support includes education, healthcare, nutrition, and emotional support. Contact us for more information about the adoption process and how you can change a child's life."
  },
  {
    id: "education-support",
    title: "Education Support",
    icon: <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8" />,
    description: "Donate for school fees, stationery, scholarships, or online learning programs.",
    category: "Education",
    details: "Invest in the future by supporting education initiatives. Your donations help cover school fees, provide stationery and learning materials, offer scholarships to deserving students, and fund online learning programs. Education is the key to breaking the cycle of poverty and creating opportunities for success."
  },
  {
    id: "grocery-donation",
    title: "Grocery Donation",
    icon: <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8" />,
    description: "Donate groceries for families in need, providing real-time tracking of items.",
    category: "Food & Essentials",
    details: "Support families with essential groceries. Donate food items, household essentials, and daily necessities. Our system provides real-time tracking of donated items, ensuring transparency and allowing you to see exactly how your contributions are helping families in need."
  },
]

export default function Donate() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Ways to Make a Difference
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose how you'd like to contribute to our mission and make a lasting impact in the lives of those in need.
          </p>
        </div>
        
        <DonationListingComponent donations={donations} />
      </div>
    </div>
  )
}

