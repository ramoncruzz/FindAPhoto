export const trackPageView = (pageName: string, componentName: string) =>
  String(`${pageName}_pageview_${componentName}`);

export const trackView = (pageName: string, componentName: string) =>
  String(`${pageName}_view_${componentName}`);

export const trackLabel = (pageName: string, componentName: string) =>
  String(`${pageName}_label_${componentName}`);

export const trackInput = (pageName: string, componentName: string) =>
  String(`${pageName}_input_${componentName}`);

export const trackIcon = (pageName: string, componentName: string) =>
  String(`${pageName}_icon_${componentName}`);

export const trackImage = (pageName: string, componentName: string) =>
  String(`${pageName}_image_${componentName}`);

export const trackButton = (pageName: string, componentName: string) =>
  String(`${pageName}_button_${componentName}`);

export const trackComponent = (pageName: string, componentName: string) =>
  String(`${pageName}_component_${componentName}`);
