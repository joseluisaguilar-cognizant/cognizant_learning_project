interface GenerateRegexp {
  email: string;
  generateMaxMinLengthRegexp: (min: number, max: number) => string;
  generatePassRegexp: (
    min: number,
    max: number,
    specialCharacters: string
  ) => string;
}

export const generateRegexp: GenerateRegexp = {
  email:
    '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
  generateMaxMinLengthRegexp: (min, max) => {
    console.log('regex');
    return `^[a-zA-Z]{${String(min)},${String(max)}}$`;
  },
  generatePassRegexp: (min, max, specialCharacters) =>
    `^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[${specialCharacters}]).{${String(
      min
    )},${String(max)}}$`
};
