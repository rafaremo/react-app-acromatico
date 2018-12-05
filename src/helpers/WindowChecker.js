export default class WindowChecker {
    isMobile = () => {
      const displayWidth = window.innerWidth;
        if (displayWidth > 992) {
            return false;
        }
        return true;
    };

    getWidth = () => {
        return window.innerWidth;
    }
}