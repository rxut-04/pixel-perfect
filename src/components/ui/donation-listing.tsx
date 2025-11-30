import { useEffect, useRef, useState, type JSX } from "react"
import type { SVGProps } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import { Button } from "./button"
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

export interface Donation {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  category: string
  details: string
}

export interface DonationListingComponentProps {
  donations: Donation[]
  className?: string
  onDonationClick?: (donation: Donation) => void
}

export default function DonationListingComponent({
  donations,
  className,
  onDonationClick,
}: DonationListingComponentProps) {
  const [activeItem, setActiveItem] = useState<Donation | null>(null)
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>

  useOnClickOutside(ref, () => setActiveItem(null))

  useEffect(() => {
    function onKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setActiveItem(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/50 pointer-events-none absolute inset-0 z-10 backdrop-blur-xl"
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeItem ? (
          <>
            <div className="group absolute inset-0 z-10 grid place-items-center p-2 sm:p-4">
              <motion.div
                className="bg-background flex h-fit w-full sm:w-[95%] md:w-[90%] max-w-2xl cursor-pointer flex-col items-start gap-4 sm:gap-6 overflow-hidden border p-4 sm:p-6 shadow-xl max-h-[90vh] overflow-y-auto"
                ref={ref}
                layoutId={`donationItem-${activeItem.id}`}
                style={{ borderRadius: 12 }}
              >
                <div className="flex w-full items-start sm:items-center gap-3 sm:gap-4">
                  <motion.div 
                    layoutId={`donationIcon-${activeItem.id}`}
                    className="text-[#FF3838] flex-shrink-0"
                  >
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
                      {activeItem.icon}
                    </div>
                  </motion.div>
                  <div className="flex grow items-start sm:items-center justify-between min-w-0">
                    <div className="flex w-full flex-col gap-1 sm:gap-2 min-w-0">
                      <motion.div
                        className="text-foreground text-lg sm:text-xl font-bold"
                        layoutId={`donationTitle-${activeItem.id}`}
                      >
                        {activeItem.title}
                      </motion.div>
                      <motion.div
                        className="text-muted-foreground text-xs sm:text-sm"
                        layoutId={`donationCategory-${activeItem.id}`}
                      >
                        {activeItem.category}
                      </motion.div>
                    </div>
                  </div>
                </div>

                <motion.p
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="text-foreground text-sm sm:text-base leading-relaxed"
                >
                  {activeItem.description}
                </motion.p>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full pt-3 sm:pt-4 border-t"
                >
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {activeItem.details}
                  </p>
                  <Button 
                    className="bg-[#FF3838] hover:bg-[#DC0000] text-white font-semibold w-full text-sm sm:text-base py-5 sm:py-6"
                    onClick={() => {
                      // Handle donation action
                      console.log(`Donate: ${activeItem.title}`)
                    }}
                  >
                    Donate / Support
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      <div className={`relative flex items-start p-2 sm:p-4 md:p-6 ${className || ""}`}>
        <div className="relative flex w-full flex-col items-center gap-3 sm:gap-4 px-1 sm:px-2">
          {donations.map((donation) => (
            <motion.div
              layoutId={`donationItem-${donation.id}`}
              key={donation.id}
              className="group bg-background flex w-full cursor-pointer flex-row items-start sm:items-center gap-3 sm:gap-4 border p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow"
              onClick={() => {
                setActiveItem(donation)
                if (onDonationClick) onDonationClick(donation)
              }}
              style={{ borderRadius: 8 }}
            >
              <motion.div 
                layoutId={`donationIcon-${donation.id}`}
                className="text-[#FF3838] flex-shrink-0"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
                  {donation.icon}
                </div>
              </motion.div>
              <div className="flex w-full flex-col items-start justify-between gap-1 min-w-0">
                <motion.div
                  className="text-foreground font-semibold text-base sm:text-lg"
                  layoutId={`donationTitle-${donation.id}`}
                >
                  {donation.title}
                </motion.div>
                <motion.p
                  className="text-muted-foreground text-xs sm:text-sm line-clamp-2 sm:line-clamp-3"
                  layoutId={`donationCategory-${donation.id}`}
                >
                  {donation.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

