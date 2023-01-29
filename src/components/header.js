import { i18n } from "../translations/en";

export const header = (logo) => {
  return (
    <div class="header">
      <img src={logo} alt={i18n.logo} />
    </div>
  );
};
