"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportLayout = exports.ReportLayoutField = exports.createReportLayout = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ReportLayoutItem_1 = require("./ReportLayoutItem");
var ReportLayoutTranslationLine_1 = require("./ReportLayoutTranslationLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ReportLayout.build]] instead.
 */
function createReportLayout(json) {
    return ReportLayout.build(json);
}
exports.createReportLayout = createReportLayout;
/**
 * ReportLayoutField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReportLayoutField = /** @class */ (function (_super) {
    __extends(ReportLayoutField, _super);
    function ReportLayoutField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ReportLayout.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.author]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.author = new v4_1.ComplexTypeStringPropertyField('Author', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.width]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width = new v4_1.ComplexTypeNumberPropertyField('Width', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.height]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height = new v4_1.ComplexTypeNumberPropertyField('Height', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.leftMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.leftMargin = new v4_1.ComplexTypeNumberPropertyField('LeftMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.rightMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rightMargin = new v4_1.ComplexTypeNumberPropertyField('RightMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.topMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.topMargin = new v4_1.ComplexTypeNumberPropertyField('TopMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.bottomMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bottomMargin = new v4_1.ComplexTypeNumberPropertyField('BottomMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.paperSize]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paperSize = new v4_1.ComplexTypeStringPropertyField('PaperSize', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.gridSize]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gridSize = new v4_1.ComplexTypeNumberPropertyField('GridSize', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.picture]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.picture = new v4_1.ComplexTypeStringPropertyField('Picture', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.typeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.typeCode = new v4_1.ComplexTypeStringPropertyField('TypeCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.leaderReport]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.leaderReport = new v4_1.ComplexTypeStringPropertyField('LeaderReport', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.followUpReport]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.followUpReport = new v4_1.ComplexTypeStringPropertyField('FollowUpReport', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.previewPrintingFont]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.previewPrintingFont = new v4_1.ComplexTypeStringPropertyField('PreviewPrintingFont', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.changeFontSizeInPreview]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeFontSizeInPreview = new v4_1.ComplexTypeNumberPropertyField('ChangeFontSizeInPreview', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.eMailFont]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eMailFont = new v4_1.ComplexTypeStringPropertyField('EMailFont', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.changeFontSizeForEMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeFontSizeForEMail = new v4_1.ComplexTypeNumberPropertyField('ChangeFontSizeForEMail', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.query]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.query = new v4_1.ComplexTypeStringPropertyField('Query', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.language]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.language = new v4_1.ComplexTypeNumberPropertyField('language', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.impExpObjCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.impExpObjCode = new v4_1.ComplexTypeNumberPropertyField('ImpExpObjCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.extensionName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.extensionName = new v4_1.ComplexTypeStringPropertyField('ExtensionName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.repetitiveAreasNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.repetitiveAreasNumber = new v4_1.ComplexTypeNumberPropertyField('RepetitiveAreasNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.layoutCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layoutCode = new v4_1.ComplexTypeStringPropertyField('LayoutCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.printer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.printer = new v4_1.ComplexTypeStringPropertyField('Printer', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.printerFirstPage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.printerFirstPage = new v4_1.ComplexTypeStringPropertyField('PrinterFirstPage', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.numberOfCopies]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numberOfCopies = new v4_1.ComplexTypeNumberPropertyField('NumberOfCopies', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.localization]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.localization = new v4_1.ComplexTypeStringPropertyField('Localization', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.b1Version]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.b1Version = new v4_1.ComplexTypeStringPropertyField('B1Version', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.crVersion]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.crVersion = new v4_1.ComplexTypeStringPropertyField('CRVersion', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.typeDetail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.typeDetail = new v4_1.ComplexTypeStringPropertyField('TypeDetail', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.reportLayoutItems]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportLayoutItems = new ReportLayoutItem_1.ReportLayoutItemField('ReportLayoutItems', _this);
        /**
         * Representation of the [[ReportLayout.reportLayoutTranslationLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportLayoutTranslationLines = new ReportLayoutTranslationLine_1.ReportLayoutTranslationLineField('ReportLayout_TranslationLines', _this);
        return _this;
    }
    return ReportLayoutField;
}(v4_1.ComplexTypeField));
exports.ReportLayoutField = ReportLayoutField;
var ReportLayout;
(function (ReportLayout) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            Author: function (author) { return ({ author: v4_1.edmToTs(author, 'Edm.String') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            Width: function (width) { return ({ width: v4_1.edmToTs(width, 'Edm.Int32') }); },
            Height: function (height) { return ({ height: v4_1.edmToTs(height, 'Edm.Int32') }); },
            LeftMargin: function (leftMargin) { return ({ leftMargin: v4_1.edmToTs(leftMargin, 'Edm.Int32') }); },
            RightMargin: function (rightMargin) { return ({ rightMargin: v4_1.edmToTs(rightMargin, 'Edm.Int32') }); },
            TopMargin: function (topMargin) { return ({ topMargin: v4_1.edmToTs(topMargin, 'Edm.Int32') }); },
            BottomMargin: function (bottomMargin) { return ({ bottomMargin: v4_1.edmToTs(bottomMargin, 'Edm.Int32') }); },
            PaperSize: function (paperSize) { return ({ paperSize: v4_1.edmToTs(paperSize, 'Edm.String') }); },
            GridSize: function (gridSize) { return ({ gridSize: v4_1.edmToTs(gridSize, 'Edm.Int32') }); },
            Picture: function (picture) { return ({ picture: v4_1.edmToTs(picture, 'Edm.String') }); },
            TypeCode: function (typeCode) { return ({ typeCode: v4_1.edmToTs(typeCode, 'Edm.String') }); },
            LeaderReport: function (leaderReport) { return ({ leaderReport: v4_1.edmToTs(leaderReport, 'Edm.String') }); },
            FollowUpReport: function (followUpReport) { return ({ followUpReport: v4_1.edmToTs(followUpReport, 'Edm.String') }); },
            PreviewPrintingFont: function (previewPrintingFont) { return ({ previewPrintingFont: v4_1.edmToTs(previewPrintingFont, 'Edm.String') }); },
            ChangeFontSizeInPreview: function (changeFontSizeInPreview) { return ({ changeFontSizeInPreview: v4_1.edmToTs(changeFontSizeInPreview, 'Edm.Int32') }); },
            EMailFont: function (eMailFont) { return ({ eMailFont: v4_1.edmToTs(eMailFont, 'Edm.String') }); },
            ChangeFontSizeForEMail: function (changeFontSizeForEMail) { return ({ changeFontSizeForEMail: v4_1.edmToTs(changeFontSizeForEMail, 'Edm.Int32') }); },
            Query: function (query) { return ({ query: v4_1.edmToTs(query, 'Edm.String') }); },
            language: function (language) { return ({ language: v4_1.edmToTs(language, 'Edm.Int32') }); },
            ImpExpObjCode: function (impExpObjCode) { return ({ impExpObjCode: v4_1.edmToTs(impExpObjCode, 'Edm.Int32') }); },
            ExtensionName: function (extensionName) { return ({ extensionName: v4_1.edmToTs(extensionName, 'Edm.String') }); },
            RepetitiveAreasNumber: function (repetitiveAreasNumber) { return ({ repetitiveAreasNumber: v4_1.edmToTs(repetitiveAreasNumber, 'Edm.Int32') }); },
            LayoutCode: function (layoutCode) { return ({ layoutCode: v4_1.edmToTs(layoutCode, 'Edm.String') }); },
            Printer: function (printer) { return ({ printer: v4_1.edmToTs(printer, 'Edm.String') }); },
            PrinterFirstPage: function (printerFirstPage) { return ({ printerFirstPage: v4_1.edmToTs(printerFirstPage, 'Edm.String') }); },
            NumberOfCopies: function (numberOfCopies) { return ({ numberOfCopies: v4_1.edmToTs(numberOfCopies, 'Edm.Int32') }); },
            Localization: function (localization) { return ({ localization: v4_1.edmToTs(localization, 'Edm.String') }); },
            B1Version: function (b1Version) { return ({ b1Version: v4_1.edmToTs(b1Version, 'Edm.String') }); },
            CRVersion: function (crVersion) { return ({ crVersion: v4_1.edmToTs(crVersion, 'Edm.String') }); },
            TypeDetail: function (typeDetail) { return ({ typeDetail: v4_1.edmToTs(typeDetail, 'Edm.String') }); },
            ReportLayoutItems: function (reportLayoutItems) { return ({ reportLayoutItems: ReportLayoutItem_1.ReportLayoutItem.build(reportLayoutItems) }); },
            ReportLayout_TranslationLines: function (reportLayoutTranslationLines) { return ({ reportLayoutTranslationLines: ReportLayoutTranslationLine_1.ReportLayoutTranslationLine.build(reportLayoutTranslationLines) }); }
        });
    }
    ReportLayout.build = build;
})(ReportLayout = exports.ReportLayout || (exports.ReportLayout = {}));
//# sourceMappingURL=ReportLayout.js.map