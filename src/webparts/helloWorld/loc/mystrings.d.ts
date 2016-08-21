declare interface IStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  TestFieldLabel: string;
}

declare module 'mystrings' {
  const strings: IStrings;
  export = strings;
}
