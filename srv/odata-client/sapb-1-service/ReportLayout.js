"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ReportLayoutField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ReportLayoutField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ReportLayout) || this;
        /**
         * Representation of the [[ReportLayout.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.author]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.author = new core_1.ComplexTypeStringPropertyField('Author', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.width]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width = new core_1.ComplexTypeNumberPropertyField('Width', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.height]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height = new core_1.ComplexTypeNumberPropertyField('Height', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.leftMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.leftMargin = new core_1.ComplexTypeNumberPropertyField('LeftMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.rightMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rightMargin = new core_1.ComplexTypeNumberPropertyField('RightMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.topMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.topMargin = new core_1.ComplexTypeNumberPropertyField('TopMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.bottomMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bottomMargin = new core_1.ComplexTypeNumberPropertyField('BottomMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.editable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.editable = new core_1.ComplexTypeEnumPropertyField('Editable', _this);
        /**
         * Representation of the [[ReportLayout.paperSize]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paperSize = new core_1.ComplexTypeStringPropertyField('PaperSize', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.orientation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orientation = new core_1.ComplexTypeEnumPropertyField('Orientation', _this);
        /**
         * Representation of the [[ReportLayout.gridSize]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gridSize = new core_1.ComplexTypeNumberPropertyField('GridSize', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.gridType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gridType = new core_1.ComplexTypeEnumPropertyField('GridType', _this);
        /**
         * Representation of the [[ReportLayout.showGrid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.showGrid = new core_1.ComplexTypeEnumPropertyField('ShowGrid', _this);
        /**
         * Representation of the [[ReportLayout.snapToGrid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.snapToGrid = new core_1.ComplexTypeEnumPropertyField('SnapToGrid', _this);
        /**
         * Representation of the [[ReportLayout.picture]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.picture = new core_1.ComplexTypeStringPropertyField('Picture', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.typeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.typeCode = new core_1.ComplexTypeStringPropertyField('TypeCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.foreignLanguageReport]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignLanguageReport = new core_1.ComplexTypeEnumPropertyField('ForeignLanguageReport', _this);
        /**
         * Representation of the [[ReportLayout.sortable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortable = new core_1.ComplexTypeEnumPropertyField('Sortable', _this);
        /**
         * Representation of the [[ReportLayout.leaderReport]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.leaderReport = new core_1.ComplexTypeStringPropertyField('LeaderReport', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.followUpReport]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.followUpReport = new core_1.ComplexTypeStringPropertyField('FollowUpReport', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.convertFontInPrintPreview]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.convertFontInPrintPreview = new core_1.ComplexTypeEnumPropertyField('ConvertFontInPrintPreview', _this);
        /**
         * Representation of the [[ReportLayout.previewPrintingFont]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.previewPrintingFont = new core_1.ComplexTypeStringPropertyField('PreviewPrintingFont', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.changeFontSizeInPreview]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeFontSizeInPreview = new core_1.ComplexTypeNumberPropertyField('ChangeFontSizeInPreview', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.convertFontForEMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.convertFontForEMail = new core_1.ComplexTypeEnumPropertyField('ConvertFontForEMail', _this);
        /**
         * Representation of the [[ReportLayout.eMailFont]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eMailFont = new core_1.ComplexTypeStringPropertyField('EMailFont', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.changeFontSizeForEMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeFontSizeForEMail = new core_1.ComplexTypeNumberPropertyField('ChangeFontSizeForEMail', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.query]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.query = new core_1.ComplexTypeStringPropertyField('Query', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.queryType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.queryType = new core_1.ComplexTypeEnumPropertyField('QueryType', _this);
        /**
         * Representation of the [[ReportLayout.language]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.language = new core_1.ComplexTypeNumberPropertyField('language', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.impExpObjCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.impExpObjCode = new core_1.ComplexTypeNumberPropertyField('ImpExpObjCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.extensionName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.extensionName = new core_1.ComplexTypeStringPropertyField('ExtensionName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.extensionErrorAction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.extensionErrorAction = new core_1.ComplexTypeEnumPropertyField('ExtensionErrorAction', _this);
        /**
         * Representation of the [[ReportLayout.repetitiveAreasNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.repetitiveAreasNumber = new core_1.ComplexTypeNumberPropertyField('RepetitiveAreasNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.allignFooterToBottom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allignFooterToBottom = new core_1.ComplexTypeEnumPropertyField('AllignFooterToBottom', _this);
        /**
         * Representation of the [[ReportLayout.layoutCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layoutCode = new core_1.ComplexTypeStringPropertyField('LayoutCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new core_1.ComplexTypeEnumPropertyField('Category', _this);
        /**
         * Representation of the [[ReportLayout.printer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.printer = new core_1.ComplexTypeStringPropertyField('Printer', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.printerFirstPage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.printerFirstPage = new core_1.ComplexTypeStringPropertyField('PrinterFirstPage', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.numberOfCopies]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numberOfCopies = new core_1.ComplexTypeNumberPropertyField('NumberOfCopies', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayout.localization]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.localization = new core_1.ComplexTypeStringPropertyField('Localization', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.useFirstPrinter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useFirstPrinter = new core_1.ComplexTypeEnumPropertyField('UseFirstPrinter', _this);
        /**
         * Representation of the [[ReportLayout.b1Version]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.b1Version = new core_1.ComplexTypeStringPropertyField('B1Version', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.crVersion]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.crVersion = new core_1.ComplexTypeStringPropertyField('CRVersion', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.typeDetail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.typeDetail = new core_1.ComplexTypeStringPropertyField('TypeDetail', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayout.reportLayoutItems]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportLayoutItems = new core_1.CollectionField('ReportLayoutItems', _this, ReportLayoutItem_1.ReportLayoutItem);
        /**
         * Representation of the [[ReportLayout.reportLayoutTranslationLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportLayoutTranslationLines = new core_1.CollectionField('ReportLayout_TranslationLines', _this, ReportLayoutTranslationLine_1.ReportLayoutTranslationLine);
        return _this;
    }
    return ReportLayoutField;
}(core_1.ComplexTypeField));
exports.ReportLayoutField = ReportLayoutField;
var ReportLayout;
(function (ReportLayout) {
    /**
     * Metadata information on all properties of the `ReportLayout` complex type.
     */
    ReportLayout._propertyMetadata = [{
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Author',
            name: 'author',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Width',
            name: 'width',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Height',
            name: 'height',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LeftMargin',
            name: 'leftMargin',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RightMargin',
            name: 'rightMargin',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TopMargin',
            name: 'topMargin',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BottomMargin',
            name: 'bottomMargin',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Editable',
            name: 'editable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PaperSize',
            name: 'paperSize',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Orientation',
            name: 'orientation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'GridSize',
            name: 'gridSize',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GridType',
            name: 'gridType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ShowGrid',
            name: 'showGrid',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SnapToGrid',
            name: 'snapToGrid',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Picture',
            name: 'picture',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TypeCode',
            name: 'typeCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ForeignLanguageReport',
            name: 'foreignLanguageReport',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Sortable',
            name: 'sortable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'LeaderReport',
            name: 'leaderReport',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FollowUpReport',
            name: 'followUpReport',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ConvertFontInPrintPreview',
            name: 'convertFontInPrintPreview',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PreviewPrintingFont',
            name: 'previewPrintingFont',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ChangeFontSizeInPreview',
            name: 'changeFontSizeInPreview',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ConvertFontForEMail',
            name: 'convertFontForEMail',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EMailFont',
            name: 'eMailFont',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ChangeFontSizeForEMail',
            name: 'changeFontSizeForEMail',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Query',
            name: 'query',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'QueryType',
            name: 'queryType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'language',
            name: 'language',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ImpExpObjCode',
            name: 'impExpObjCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExtensionName',
            name: 'extensionName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExtensionErrorAction',
            name: 'extensionErrorAction',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RepetitiveAreasNumber',
            name: 'repetitiveAreasNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AllignFooterToBottom',
            name: 'allignFooterToBottom',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'LayoutCode',
            name: 'layoutCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Category',
            name: 'category',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Printer',
            name: 'printer',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PrinterFirstPage',
            name: 'printerFirstPage',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'NumberOfCopies',
            name: 'numberOfCopies',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Localization',
            name: 'localization',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UseFirstPrinter',
            name: 'useFirstPrinter',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'B1Version',
            name: 'b1Version',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CRVersion',
            name: 'crVersion',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TypeDetail',
            name: 'typeDetail',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReportLayoutItems',
            name: 'reportLayoutItems',
            type: ReportLayoutItem_1.ReportLayoutItem,
            isCollection: true
        }, {
            originalName: 'ReportLayout_TranslationLines',
            name: 'reportLayoutTranslationLines',
            type: ReportLayoutTranslationLine_1.ReportLayoutTranslationLine,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ReportLayout);
    }
    ReportLayout.build = build;
})(ReportLayout = exports.ReportLayout || (exports.ReportLayout = {}));
//# sourceMappingURL=ReportLayout.js.map