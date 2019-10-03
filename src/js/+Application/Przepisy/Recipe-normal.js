﻿// (function (jsPDFAPI) {
// var font = 'aW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICJyZWFjdCI7DQppbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gInJlYWN0LWRvbS9zZXJ2ZXIiOw0KaW1wb3J0IGpzUERGIGZyb20gImpzcGRmIjsNCmltcG9ydCAianNwZGYtYXV0b3RhYmxlIjsNCi8vIGltcG9ydCBHZW5lcmF0ZVBkZiBmcm9tICIuL0dlbmVyYXRlUGRmIjsNCg0KaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gInJlYWN0LXJlZHV4IjsNCmltcG9ydCB7DQogIGRlbGV0ZVJlY2lwZSwNCiAgZ2V0UmVjaXBlRGV0YWlsc1RvUGRmDQp9IGZyb20gIi4uLy4uLy4uL3JlZHV4L3JlY2lwZXMvYWN0aW9ucyI7DQoNCmNvbnN0IFJlY2lwZSA9ICh7DQogIHJlY2lwZSwNCiAgcmVjaXBlUGRmLA0KICBkZWxldGVSZWNpcGUsDQogIHRvZ2dsZUVkaXQsDQogIGlkLA0KICBnZXRSZWNpcGVEZXRhaWxzVG9QZGYNCn0pID0+IHsNCiAgY29uc3QgW2lzUGRmLCBzZXRQZGZdID0gdXNlU3RhdGUoZmFsc2UpOw0KDQogIGNvbnN0IGhhbmRsZUNsaWNrID0gKGlkKSA9PiB7DQogICAgZGVsZXRlUmVjaXBlKGlkKTsNCiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7DQogIH07DQoNCiAgY29uc3QgbWFrZVBkZiA9IChlKSA9PiB7DQogICAgc2V0UGRmKCFpc1BkZik7DQogICAgZ2V0UmVjaXBlRGV0YWlsc1RvUGRmKHJlY2lwZS5pZCk7DQogICAganNQZGZHZW5lcmF0b3IoKTsNCiAgfTsNCg0KICBjb25zdCBzdHlsZXMgPSB7DQogICAgZm9udEZhbWlseTogInNhbnMtc2VyaWYiLA0KICAgIHRleHRBbGlnbjogImNlbnRlciINCiAgfTsNCiAgY29uc3QgY29sc3R5bGUgPSB7DQogICAgd2lkdGg6ICIzMCUiDQogIH07DQogIGNvbnN0IHRhYmxlU3R5bGUgPSB7DQogICAgd2lkdGg6ICIxMDAlIg0KICB9Ow0KICBjb25zdCBQcmludHMgPSAoKSA9PiAoDQogICAgPGRpdj4NCiAgICAgIDxoMz57cmVjaXBlLm5hbWV9PC9oMz4NCiAgICAgIDxwPntyZWNpcGUuZGVzY3JpcHRpb259PC9wPg0KDQogICAgICB7LyogPHRhYmxlIGlkPSd0YWJfY3VzdG9tZXJzJyBjbGFzcz0ndGFibGUgdGFibGUtc3RyaXBlZCcgc3R5bGU9e3RhYmxlU3R5bGV9Pg0KICAgICAgICA8Y29sZ3JvdXA+DQogICAgICAgICAgPGNvbCBzcGFuPScxJyBzdHlsZT17Y29sc3R5bGV9IC8+DQogICAgICAgICAgPGNvbCBzcGFuPScxJyBzdHlsZT17Y29sc3R5bGV9IC8+DQogICAgICAgIDwvY29sZ3JvdXA+DQogICAgICAgIDx0aGVhZD4NCiAgICAgICAgICA8dHIgY2xhc3M9J3dhcm5pbmcnPg0KICAgICAgICAgICAgPHRoPlNPVyBDcmVhdGlvbiBEYXRlPC90aD4NCiAgICAgICAgICAgIDx0aD5TT1cgU3RhcnQgRGF0ZTwvdGg+DQogICAgICAgICAgICA8dGg+UHJvamVjdDwvdGg+DQogICAgICAgICAgICA8dGg+TGFzdCBVcGRhdGVkPC90aD4NCiAgICAgICAgICAgIDx0aD5TT1cgRW5kIERhdGU8L3RoPg0KICAgICAgICAgIDwvdHI+DQogICAgICAgIDwvdGhlYWQ+DQogICAgICAgIDx0Ym9keT4NCiAgICAgICAgICA8dHI+DQogICAgICAgICAgICA8dGQ+RGVjIDEzLCAyMDE3PC90ZD4NCiAgICAgICAgICAgIDx0ZD5KYW4gMSwgMjAxODwvdGQ+DQogICAgICAgICAgICA8dGQ+Tk0gQ29ubmVjdCAtIE5NRVROTUNNPC90ZD4NCiAgICAgICAgICAgIDx0ZD5EZWMgMTMsIDIwMTc8L3RkPg0KICAgICAgICAgICAgPHRkPkRlYyAzMSwgMjAxODwvdGQ+DQogICAgICAgICAgPC90cj4NCiAgICAgICAgPC90Ym9keT4NCiAgICAgIDwvdGFibGU+DQogICAgICA8cD4NCiAgICAgICAgVGhpcyBpcyBhIFRpbWUgYW5kIE1hdGVyaWFscyBTdGF0ZW1lbnQgb2YgV29yayBiZXR3ZWVuIE5vcnRod2VzdGVybg0KICAgICAgICBNdXR1YWwgTGlmZSBJbnN1cmFuY2UgQ29tcGFueSBhbmQgSW5mb3N5cyB3aXRoIGFsbCBnZW5lcmFsIHRlcm1zIGFuZA0KICAgICAgICBjb25kaXRpb25zIGFzIGRlc2NyaWJlZCBpbiB0aGUgY3VycmVudCBNYXN0ZXIgQWdyZWVtZW50IGFuZCBpdHMgcmVsYXRlZA0KICAgICAgICBkb2N1bWVudHMNCiAgICAgIDwvcD4gKi99DQogICAgPC9kaXY+DQogICk7DQoNCiAgY29uc3QganNQZGZHZW5lcmF0b3IgPSAoKSA9PiB7DQogICAgY29uc3Qgc3RyaW5nID0gcmVuZGVyVG9TdHJpbmcoPFByaW50cyAvPik7DQogICAgY29uc3QgcGRmID0gbmV3IGpzUERGKCJwIiwgInB0IiwgImE0Iik7DQogICAgY29uc3QgY29sdW1ucyA9IFsNCiAgICAgICJTT1cgQ3JlYXRpb24gRGF0ZSIsDQogICAgICAiU09XIFN0YXJ0IERhdGUiLA0KICAgICAgIlByb2plY3QiLA0KICAgICAgIkxhc3QgVXBkYXRlZCIsDQogICAgICAiU09XIEVuZCBEYXRlIg0KICAgIF07DQogICAgdmFyIHJvd3MgPSBbDQogICAgICBbDQogICAgICAgICJEZWMgMTMsIDIwMTciLA0KICAgICAgICAiSmFuIDEsIDIwMTgiLA0KICAgICAgICAiQUJDIENvbm5lY3QgLSBBQkNYWVoiLA0KICAgICAgICAiRGVjIDEzLCAyMDE3IiwNCiAgICAgICAgIkRlYyAzMSwgMjAxOCINCiAgICAgIF0NCiAgICBdOw0KDQogICAgcGRmLnNldEZvbnQoImhlbHZldGljYSIpOw0KDQogICAgcGRmLmZyb21IVE1MKHN0cmluZyk7DQogICAgcGRmLnNhdmUoYCR7cmVjaXBlLm5hbWV9LnBkZmApOw0KICB9Ow0KDQogIHJldHVybiAoDQogICAgPHRyIGNsYXNzTmFtZT0naXRlbXNMaXN0LS1ib2R5Um93Jz4NCiAgICAgIDx0ZD57cmVjaXBlLmlkfTwvdGQ+DQogICAgICA8dGQ+e3JlY2lwZS5uYW1lfTwvdGQ+DQogICAgICA8dGQ+e3JlY2lwZS5kZXNjcmlwdGlvbn08L3RkPg0KICAgICAgPHRkIGNsYXNzTmFtZT0naXRlbXNMaXN0X19hY3Rpb25zJz4NCiAgICAgICAgPGkNCiAgICAgICAgICBjbGFzc05hbWU9J2VkaXQgZmEgZmEtcGVuY2lsLXNxdWFyZS1vJw0KICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJw0KICAgICAgICAgIGlkPXtyZWNpcGUuaWR9DQogICAgICAgICAgb25DbGljaz17dG9nZ2xlRWRpdH0+PC9pPg0KICAgICAgICA8aQ0KICAgICAgICAgIGNsYXNzTmFtZT0nZGVsZXRlIGZhIGZhLXRyYXNoLW8nDQogICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnDQogICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socmVjaXBlLmlkKX0+PC9pPg0KICAgICAgICA8aQ0KICAgICAgICAgIGNsYXNzTmFtZT0nZmEgZmEtZmlsZS1wZGYtbycNCiAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZScNCiAgICAgICAgICBvbkNsaWNrPXttYWtlUGRmfT48L2k+DQogICAgICA8L3RkPg0KICAgIDwvdHI+DQogICk7DQp9Ow0KDQpjb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gew0KICByZXR1cm4gew0KICAgIHJlY2lwZVBkZjogc3RhdGUucmVjaXBlcy5yZWNpcGVQZGYNCiAgfTsNCn07DQoNCmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoew0KICBkZWxldGVSZWNpcGU6IChpZCkgPT4gZGlzcGF0Y2goZGVsZXRlUmVjaXBlKGlkKSksDQogIGdldFJlY2lwZURldGFpbHNUb1BkZjogKGlkKSA9PiBkaXNwYXRjaChnZXRSZWNpcGVEZXRhaWxzVG9QZGYoaWQpKQ0KfSk7DQoNCmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoDQogIG1hcFN0YXRlLA0KICBtYXBEaXNwYXRjaA0KKShSZWNpcGUpOw0K';
// var callAddFont = function () {
// this.addFileToVFS('Recipe-normal.ttf', font);
// this.addFont('Recipe-normal.ttf', 'Recipe', 'normal');
// };
// jsPDFAPI.events.push(['addFonts', callAddFont])
//  })(jsPDF.API);