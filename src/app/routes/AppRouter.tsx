import { Navigate, Route, Routes } from "react-router-dom"
import { AppShell } from "@/app/layout/AppShell"
import { HomePage } from "@/pages/HomePage"
import { BasicsPage } from "@/pages/BasicsPage"
import { InteractivePage } from "@/pages/InteractivePage"
import { FormsPage } from "@/pages/FormsPage"
import { PlaygroundPage } from "@/pages/PlaygroundPage"

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/basics" element={<BasicsPage />} />
        <Route path="/interactive" element={<InteractivePage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
