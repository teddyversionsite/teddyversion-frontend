import Song from './songs/Song'
import StoreProvider from './storeProvider'

export default function Home() {
  return (
    <StoreProvider>
      <Song />
    </StoreProvider>
  )
}
