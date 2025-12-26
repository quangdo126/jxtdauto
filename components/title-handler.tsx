"use client"

import { useEffect, useRef } from "react"

export function TitleHandler() {
  const savedTitleRef = useRef<string>("")
  const hiddenTitle = "Quay trở lại đây 😈"

  useEffect(() => {
    // Lưu title ban đầu
    savedTitleRef.current = document.title

    // Hàm xử lý khi visibility thay đổi
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab bị ẩn - lưu title hiện tại và đổi title
        savedTitleRef.current = document.title
        document.title = hiddenTitle
      } else {
        // Tab được active lại - trả về title đã lưu
        document.title = savedTitleRef.current
      }
    }

    // Lắng nghe sự kiện visibilitychange
    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Cập nhật title đã lưu khi title thay đổi (khi điều hướng trang)
    const observer = new MutationObserver(() => {
      // Chỉ cập nhật nếu tab đang active và title không phải là hiddenTitle
      if (!document.hidden && document.title !== hiddenTitle) {
        savedTitleRef.current = document.title
      }
    })

    // Quan sát thay đổi trong thẻ <title>
    const titleElement = document.querySelector("title")
    if (titleElement) {
      observer.observe(titleElement, {
        childList: true,
        subtree: true,
        characterData: true,
      })
    }

    // Cleanup khi component unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      observer.disconnect()
      // Đảm bảo trả về title đã lưu khi unmount
      if (document.title === hiddenTitle) {
        document.title = savedTitleRef.current
      }
    }
  }, [])

  return null
}

