const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      '2xl': "1536px", // Sửa lại kích thước cho '2xl'
    },
    extend: {
      colors: {
        primary: "#00ADEF",
        BGD: "#212121",
      },
    },
  },
  plugins: [], // Loại bỏ @tailwindcss/postcss ở đây
};

export default config;
