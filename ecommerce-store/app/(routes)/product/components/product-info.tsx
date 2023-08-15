import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import React from 'react'

const ProductInfo = () => {
  return (
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Delivery time</AccordionTrigger>
      <AccordionContent>
        Items are made after Order is done, delivery estimate 2-3 weeks.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  )
}

export default ProductInfo
