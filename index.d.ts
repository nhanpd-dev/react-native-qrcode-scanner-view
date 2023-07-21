import { ReactNode } from 'react';
import {
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import { BarCodeReadEvent } from 'react-native-camera';

declare class QRScannerView extends React.Component<QRScannerProps, any> {}

export interface QRScannerProps {
  maskColor?: string;
  rectStyle?: ViewStyle;

  cornerStyle?: ViewStyle;
  cornerOffsetSize?: number;
  isShowCorner?: boolean;

  isShowScanBar?: boolean;
  scanBarAnimateTime?: number;
  scanBarAnimateReverse?: boolean;
  scanBarImage?: ImageSourcePropType;
  scanBarStyle?: ViewStyle;
  
  hintText?: string; 
  hintTextStyle?: TextStyle;

  renderHeaderView?(): ReactNode;
  renderFooterView?(): ReactNode;

  onScanResult?(event: BarCodeReadEvent): void;
  scanInterval?: number;
  torchOn: boolean,
  userFront: boolean, 
}

export default QRScannerView

