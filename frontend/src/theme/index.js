import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // 黑色，象征棋子的主颜色
    },
    secondary: {
      main: "#ffffff", // 白色，象征棋盘中的另一种棋子
    },
    background: {
      default: "#f4f4f4", // 淡灰色，适合作为棋盘的背景色
    },
    text: {
      primary: "#000000", // 默认文字颜色为黑色
      secondary: "#757575", // 辅助文字颜色为灰色
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h6: {
      fontWeight: 700, // 标题字体加粗
    },
    button: {
      textTransform: "none", // 按钮文字不使用大写
    },
  },
  shape: {
    borderRadius: 8, // 全局圆角样式
  },
});
export default theme;
