"use client"


import PreviewModal from '@/components/ui/previewModal'
import React, { useEffect, useState } from 'react'

const modalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])
  
  return (
    <>
    <PreviewModal />
    </>
  )
}

export default modalProvider