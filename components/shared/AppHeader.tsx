import UserInfo from "@/components/shared/user/UserInfo";

const AppHeader = () => {
  return (
    <div className="w-full h-18 dark:bg-app-header-dark bg-app-header-light border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <h1>Поиск</h1>
        <UserInfo/>
      </div>
    </div>
  )
}
export default AppHeader
