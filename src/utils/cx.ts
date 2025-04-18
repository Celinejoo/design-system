import classNames from "classnames";

export const cx = (...classes: (string | false | null | undefined)[]) => {
  return classNames(classes);
};
