import { ChevronLeft, ChevronRight } from 'lucide-react'

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
  onPrevious?: () => void
  onNext?: () => void
}

export default function Stepindicator({
  currentStep = 1,
  totalSteps = 5,
  onPrevious,
  onNext
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-900 text-white text-center rounded-full w-[300px]">
      <button
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="p-1 hover:bg-purple-800 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous step"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-2 min-w-[3rem] justify-center font-medium">
        <span>{currentStep}</span>
        <span className="text-purple-300">/</span>
        <span>{totalSteps}</span>
      </div>
      <button
        onClick={onNext}
        disabled={currentStep === totalSteps}
        className="p-1 hover:bg-purple-800 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next step"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
