import { Avatar, AvatarImage } from "./ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-9 w-8">
      <AvatarImage className="p-1" src="/logo.png" />
    </Avatar>
  );
};
