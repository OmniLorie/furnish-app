import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faChair,
  faPenNib,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
const features = [
  {
    icon: faHandshake,
    iconColor: "#CB9696",
    backgroundColor: "#F5EBEB",
    title: "Amazing Deals",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
  {
    iconColor: "#8BBD8E",
    icon: faChair,
    backgroundColor: "#DCEBDD",
    title: "Quality Building",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
  {
    icon: faPenNib,
    iconColor: "#D1B54A",
    backgroundColor: "#F5EFD8",
    title: "Modern Design",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
  {
    icon: faHeadset,
    iconColor: "#D29A61",
    backgroundColor: "#F4E6D8",
    title: "Best Support",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 m-2">
      {features.map((feature, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: feature.backgroundColor }}
            className="p-10 shadow-sm flex flex-col gap-3"
          >
            <div className="flex">
              <div
                className="h-20 w-20 rounded-full flex justify-center items-center"
                style={{ backgroundColor: feature.iconColor }}
              >
                <FontAwesomeIcon icon={feature.icon} color="#fff" size="2x" />
              </div>
            </div>
            <h3 className="font-bold text-x1 text-gray-700">{feature.title}</h3>
            <p className="text-gray-500 text-lg">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
