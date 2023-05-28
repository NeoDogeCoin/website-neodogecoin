import { useEffect, useRef } from "react";
import greenlet from "greenlet";

const letters = [
  "日",
  "ﾊ",
  "ﾐ",
  "ﾋ",
  "ｰ",
  "ｳ",
  "ｼ",
  "ﾅ",
  "ﾓ",
  "ﾆ",
  "ｻ",
  "ﾜ",
  "ﾂ",
  "ｵ",
  "ﾘ",
  "ｱ",
  "ﾎ",
  "ﾃ",
  "ﾏ",
  "ｹ",
  "ﾒ",
  "ｴ",
  "ｶ",
  "ｷ",
  "ﾑ",
  "ﾕ",
  "ﾗ",
  "ｾ",
  "ﾈ",
  "ｽ",
  "ﾀ",
  "ﾇ",
  "ﾍ",
  ":",
  "・",
  ".",
  "=",
  "*",
  "+",
  "-",
  "<",
  ">",
  "¦",
  "｜",
  "ﾘ"
];

export const MatrixBackground = () => {
  const matrix = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (matrix.current) {
      const ctxMatrix = matrix.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;

      matrix.current.height = window.innerHeight;
      matrix.current.width = window.innerWidth;

      const fontSize = 18;
      const columns = matrix.current.width / fontSize;
      let drops: any[] = [];
      for (let x = 0; x < columns; x++) drops[x] = 1;

      const draw = () => {
        if (matrix.current) {
          ctxMatrix.fillStyle = "rgba(0, 0, 0, 0.05)";
          ctxMatrix.fillRect(0, 0, matrix.current.width, matrix.current.height);

          ctxMatrix.fillStyle = "#0F0";
          ctxMatrix.font = `${fontSize}px arial`;

          for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];

            ctxMatrix.fillText(text, i * fontSize, drops[i] * fontSize);

            if (
              drops[i] * fontSize > matrix.current.height &&
              Math.random() > 0.975
            ) {
              drops[i] = 0;
            }

            drops[i]++;
          }

          window.requestAnimationFrame(draw);
        }
      };
      draw();
    }
  }, []);

  return <canvas ref={matrix} className="fixed inset-0 z-[-1] opacity-50" />;
};
