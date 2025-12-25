import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserCard = ({
  username = "Username",
  avatarUrl,
}: {
  username: string;
  avatarUrl: string;
}) => {
  return (
    <div className="flex flex-row gap-4 align-middle justify-center items-center">
      {username}
      <Avatar>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserCard;
