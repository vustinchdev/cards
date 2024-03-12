import { useState } from 'react'

import { Pagination } from './components/ui/pagination'

export function App() {
  const [value, setValue] = useState(1)

  return (
    <div>
      <Pagination
        currentPage={value}
        onChange={(page: number) => setValue(page)}
        pageSize={10}
        totalItemsCount={100}
      />
    </div>
  )
}
