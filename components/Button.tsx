import Image from "next/image";
type Icon = {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
};

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}: {
  label: string;
  iconUrl?: Icon;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt={`arrow-right`}
          width={20}
          height={20}
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
