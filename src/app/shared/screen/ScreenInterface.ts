export interface ScreenInterface {
  screenHeight: number;
  screenWidth: number;

  getScreenSize: (event?: any) => void;
  onViewChange: (width: number) => void;
}
