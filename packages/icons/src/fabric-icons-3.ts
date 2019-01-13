// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {IIconOptions, IIconSubset, registerIcons} from "@s-bauer/uifabric-styling";

export function initializeIcons(baseUrl: string = "", options?: IIconOptions): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
      fontStyle: "normal",
      fontWeight: "normal",
      speak: "none"
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-3"`,
      src: `url("${baseUrl}fabric-icons-3-ccddc9e1.woff") format("woff")`
    },
    icons: {
      Snow: "\uE9C8",
      BlowingSnow: "\uE9C9",
      Frigid: "\uE9CA",
      Fog: "\uE9CB",
      Squalls: "\uE9CC",
      Duststorm: "\uE9CD",
      Unknown: "\uE9CE",
      Precipitation: "\uE9CF",
      Ribbon: "\uE9D1",
      AreaChart: "\uE9D2",
      Assign: "\uE9D3",
      FlowChart: "\uE9D4",
      CheckList: "\uE9D5",
      Diagnostic: "\uE9D9",
      Generate: "\uE9DA",
      LineChart: "\uE9E6",
      Equalizer: "\uE9E9",
      BarChartHorizontal: "\uE9EB",
      BarChartVertical: "\uE9EC",
      Freezing: "\uE9EF",
      FunnelChart: "\uE9F1",
      Processing: "\uE9F5",
      Quantity: "\uE9F8",
      ReportDocument: "\uE9F9",
      StackColumnChart: "\uE9FC",
      SnowShowerDay: "\uE9FD",
      HailDay: "\uEA00",
      WorkFlow: "\uEA01",
      HourGlass: "\uEA03",
      StoreLogoMed20: "\uEA04",
      TimeSheet: "\uEA05",
      TriangleSolid: "\uEA08",
      UpgradeAnalysis: "\uEA0B",
      VideoSolid: "\uEA0C",
      RainShowersNight: "\uEA0F",
      SnowShowerNight: "\uEA11",
      Teamwork: "\uEA12",
      HailNight: "\uEA13",
      PeopleAdd: "\uEA15",
      Glasses: "\uEA16",
      DateTime2: "\uEA17",
      Shield: "\uEA18",
      Header1: "\uEA19",
      PageAdd: "\uEA1A",
      NumberedList: "\uEA1C",
      PowerBILogo: "\uEA1E",
      Info2: "\uEA1F",
      MusicInCollectionFill: "\uEA36",
      Asterisk: "\uEA38",
      ErrorBadge: "\uEA39",
      CircleFill: "\uEA3B",
      Record2: "\uEA3F",
      AllAppsMirrored: "\uEA40",
      BookmarksMirrored: "\uEA41",
      BulletedListMirrored: "\uEA42",
      CaretHollowMirrored: "\uEA45",
      CaretSolidMirrored: "\uEA46",
      ChromeBackMirrored: "\uEA47",
      ClosePaneMirrored: "\uEA49",
      DockLeftMirrored: "\uEA4C",
      DoubleChevronLeftMedMirrored: "\uEA4D",
      GoMirrored: "\uEA4F",
      HelpMirrored: "\uEA51",
      ImportMirrored: "\uEA52",
      ImportAllMirrored: "\uEA53",
      ListMirrored: "\uEA55",
      MailForwardMirrored: "\uEA56",
      MailReplyMirrored: "\uEA57",
      MailReplyAllMirrored: "\uEA58",
      MiniContractMirrored: "\uEA59",
      MiniExpandMirrored: "\uEA5A",
      OpenPaneMirrored: "\uEA5B",
      ParkingLocationMirrored: "\uEA5E",
      SendMirrored: "\uEA63",
      ShowResultsMirrored: "\uEA65",
      ThumbnailViewMirrored: "\uEA67",
      Media: "\uEA69",
      Devices3: "\uEA6C",
      Focus: "\uEA6F",
      VideoLightOff: "\uEA74",
      Lightbulb: "\uEA80",
      StatusTriangle: "\uEA82",
      VolumeDisabled: "\uEA85",
      Puzzle: "\uEA86",
      EmojiNeutral: "\uEA87",
      EmojiDisappointed: "\uEA88",
      HomeSolid: "\uEA8A",
      Ringer: "\uEA8F",
      PDF: "\uEA90",
      HeartBroken: "\uEA92",
      StoreLogo16: "\uEA96",
      MultiSelectMirrored: "\uEA98",
      Broom: "\uEA99",
      Cocktails: "\uEA9D",
      Wines: "\uEABF",
      Articles: "\uEAC1",
      Cycling: "\uEAC7",
      DietPlanNotebook: "\uEAC8",
      Pill: "\uEACB",
      ExerciseTracker: "\uEACC"
    }
  };

  registerIcons(subset, options);
}