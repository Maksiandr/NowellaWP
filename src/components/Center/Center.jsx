const Center = () => {

// const YourComponent = () => {
//   useEffect(() => {
//     const applyUserProperties = (properties) => {
//       if (properties.use_background_image) {
//         // Вместо config.TRANSPARENT используйте состояние или другой способ управления этим значением в React
//         // Например, const [transparent, setTransparent] = useState(properties.use_background_image.value);
//         // setTransparent(properties.use_background_image.value);
//       }

//       if (properties.background_image) {
//         // Вместо canvas.style.backgroundImage используйте React-специфичные способы установки стилей
//         // Например, создайте состояние и используйте его в стиле компонента
//         // const [backgroundImage, setBackgroundImage] = useState(`url("file:///${properties.background_image.value}")`);
//         // setBackgroundImage(`url("file:///${properties.background_image.value}")`);
//       }
//     };

//     window.wallpaperPropertyListener = {
//       applyUserProperties,
//     };

//     // Очистите слушатель, когда компонент размонтируется
//     return () => {
//       window.wallpaperPropertyListener = null;
//     };
//   }, []); // Пустой массив зависимостей гарантирует, что useEffect будет вызываться только при монтировании и размонтировании компонента

//   return (
//     // Ваш компонент React
//   );
// };

  return (
    <div>
        <div>
            {/* 
            вставка своего изображения
            document.addEventListener("DOMContentLoaded", () => {
                window.wallpaperPropertyListener = {
                    applyUserProperties: (properties) => {
                        if (properties.use_background_image) config.TRANSPARENT = properties.use_background_image.value;
                        if (properties.background_image) canvas.style.backgroundImage = `url("file:///${properties.background_image.value}")`;
                    }
                }
                    
            }) */}
        </div>
    </div>
  )
}

export default Center