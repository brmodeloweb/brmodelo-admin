import Image from "next/image"

type Props = {
  avatarUrl: string
}

export default function UserAvatar({ avatarUrl }: Props) {
  return (
    <div className="self-center">
      <Image src={avatarUrl} width={40} height={40} className="rounded-full" />
    </div>
  )
}