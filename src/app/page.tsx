import { getPages } from "@/utils/notion";

export default async function Home() {
  const res = await getPages()
  console.log("res====>", res)
  return <div>Today and always, beyond tomorrow, I need you beside me, always as my best friend, lover and forever soul mate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt porttitor venenatis. Vestibulum sit amet est nisl. Vestibulum iaculis finibus sem nec condimentum. Quisque nulla orci, aliquet sit amet sem eget, pellentesque euismod enim. Aenean quis nisl at est consequat elementum sed vel turpis. Phasellus dignissim sit amet orci vitae mattis. Phasellus a imperdiet ligula, efficitur dignissim ex. Mauris placerat aliquet sem commodo molestie.

  </div>;
}
