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
exports.ReportLayoutItem = exports.ReportLayoutItemField = exports.createReportLayoutItem = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutItem.build]] instead.
 */
function createReportLayoutItem(json) {
    return ReportLayoutItem.build(json);
}
exports.createReportLayoutItem = createReportLayoutItem;
/**
 * ReportLayoutItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReportLayoutItemField = /** @class */ (function (_super) {
    __extends(ReportLayoutItemField, _super);
    /**
     * Creates an instance of ReportLayoutItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ReportLayoutItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ReportLayoutItem) || this;
        /**
         * Representation of the [[ReportLayoutItem.fieldIdentifier]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldIdentifier = new core_1.ComplexTypeStringPropertyField('FieldIdentifier', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.parentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentType = new core_1.ComplexTypeNumberPropertyField('ParentType', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        /**
         * Representation of the [[ReportLayoutItem.visible]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visible = new core_1.ComplexTypeEnumPropertyField('Visible', _this);
        /**
         * Representation of the [[ReportLayoutItem.suppressZeros]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.suppressZeros = new core_1.ComplexTypeEnumPropertyField('SuppressZeros', _this);
        /**
         * Representation of the [[ReportLayoutItem.left]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.left = new core_1.ComplexTypeNumberPropertyField('Left', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.top]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.top = new core_1.ComplexTypeNumberPropertyField('Top', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.width]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width = new core_1.ComplexTypeNumberPropertyField('Width', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.height]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height = new core_1.ComplexTypeNumberPropertyField('Height', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.leftMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.leftMargin = new core_1.ComplexTypeNumberPropertyField('LeftMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.rightMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rightMargin = new core_1.ComplexTypeNumberPropertyField('RightMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.topMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.topMargin = new core_1.ComplexTypeNumberPropertyField('TopMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.bottomMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bottomMargin = new core_1.ComplexTypeNumberPropertyField('BottomMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.leftBorderLineThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.leftBorderLineThickness = new core_1.ComplexTypeNumberPropertyField('LeftBorderLineThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.rightBorderLineThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rightBorderLineThickness = new core_1.ComplexTypeNumberPropertyField('RightBorderLineThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.topBorderLineThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.topBorderLineThickness = new core_1.ComplexTypeNumberPropertyField('TopBorderLineThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.bottomBorderLineThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bottomBorderLineThickness = new core_1.ComplexTypeNumberPropertyField('BottomBorderLineThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.shadowThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shadowThickness = new core_1.ComplexTypeNumberPropertyField('ShadowThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.backgroundRed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backgroundRed = new core_1.ComplexTypeNumberPropertyField('BackgroundRed', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.backgroundGreen]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backgroundGreen = new core_1.ComplexTypeNumberPropertyField('BackgroundGreen', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.backgroundBlue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backgroundBlue = new core_1.ComplexTypeNumberPropertyField('BackgroundBlue', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.textRed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textRed = new core_1.ComplexTypeNumberPropertyField('TextRed', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.textGreen]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textGreen = new core_1.ComplexTypeNumberPropertyField('TextGreen', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.textBlue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textBlue = new core_1.ComplexTypeNumberPropertyField('TextBlue', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.highlightRed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.highlightRed = new core_1.ComplexTypeNumberPropertyField('HighlightRed', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.highlightGreen]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.highlightGreen = new core_1.ComplexTypeNumberPropertyField('HighlightGreen', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.highlightBlue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.highlightBlue = new core_1.ComplexTypeNumberPropertyField('HighlightBlue', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.borderRed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderRed = new core_1.ComplexTypeNumberPropertyField('BorderRed', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.borderGreen]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderGreen = new core_1.ComplexTypeNumberPropertyField('BorderGreen', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.borderBlue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderBlue = new core_1.ComplexTypeNumberPropertyField('BorderBlue', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.groupNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupNumber = new core_1.ComplexTypeNumberPropertyField('GroupNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.fontName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fontName = new core_1.ComplexTypeStringPropertyField('FontName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.fontSize]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fontSize = new core_1.ComplexTypeNumberPropertyField('FontSize', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.textStyle]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textStyle = new core_1.ComplexTypeNumberPropertyField('TextStyle', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.horizontalAlignment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.horizontalAlignment = new core_1.ComplexTypeEnumPropertyField('HorizontalAlignment', _this);
        /**
         * Representation of the [[ReportLayoutItem.lineBreak]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineBreak = new core_1.ComplexTypeEnumPropertyField('LineBreak', _this);
        /**
         * Representation of the [[ReportLayoutItem.pictureSize]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pictureSize = new core_1.ComplexTypeEnumPropertyField('PictureSize', _this);
        /**
         * Representation of the [[ReportLayoutItem.dataSource]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dataSource = new core_1.ComplexTypeEnumPropertyField('DataSource', _this);
        /**
         * Representation of the [[ReportLayoutItem.string]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.string = new core_1.ComplexTypeStringPropertyField('String', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.variableNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variableNumber = new core_1.ComplexTypeNumberPropertyField('VariableNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.tableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableName = new core_1.ComplexTypeStringPropertyField('TableName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.fieldName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldName = new core_1.ComplexTypeStringPropertyField('FieldName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.displayDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayDescription = new core_1.ComplexTypeEnumPropertyField('DisplayDescription', _this);
        /**
         * Representation of the [[ReportLayoutItem.editable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.editable = new core_1.ComplexTypeNumberPropertyField('Editable', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.itemNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNumber = new core_1.ComplexTypeNumberPropertyField('ItemNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.verticalAlignment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.verticalAlignment = new core_1.ComplexTypeEnumPropertyField('VerticalAlignment', _this);
        /**
         * Representation of the [[ReportLayoutItem.sortLevel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortLevel = new core_1.ComplexTypeNumberPropertyField('SortLevel', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.reverseSort]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reverseSort = new core_1.ComplexTypeEnumPropertyField('ReverseSort', _this);
        /**
         * Representation of the [[ReportLayoutItem.sortType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortType = new core_1.ComplexTypeEnumPropertyField('SortType', _this);
        /**
         * Representation of the [[ReportLayoutItem.unique]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unique = new core_1.ComplexTypeEnumPropertyField('Unique', _this);
        /**
         * Representation of the [[ReportLayoutItem.setAsGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.setAsGroup = new core_1.ComplexTypeEnumPropertyField('SetAsGroup', _this);
        /**
         * Representation of the [[ReportLayoutItem.newPage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newPage = new core_1.ComplexTypeEnumPropertyField('NewPage', _this);
        /**
         * Representation of the [[ReportLayoutItem.printAsBarCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.printAsBarCode = new core_1.ComplexTypeEnumPropertyField('PrintAsBarCode', _this);
        /**
         * Representation of the [[ReportLayoutItem.linkToField]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkToField = new core_1.ComplexTypeStringPropertyField('LinkToField', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.barCodeStandard]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCodeStandard = new core_1.ComplexTypeEnumPropertyField('BarCodeStandard', _this);
        /**
         * Representation of the [[ReportLayoutItem.displayTotalAsAWord]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayTotalAsAWord = new core_1.ComplexTypeEnumPropertyField('DisplayTotalAsAWord', _this);
        /**
         * Representation of the [[ReportLayoutItem.blockFontChange]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockFontChange = new core_1.ComplexTypeEnumPropertyField('BlockFontChange', _this);
        /**
         * Representation of the [[ReportLayoutItem.parentIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentIndex = new core_1.ComplexTypeNumberPropertyField('ParentIndex', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.itemIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemIndex = new core_1.ComplexTypeNumberPropertyField('ItemIndex', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.stringLength]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stringLength = new core_1.ComplexTypeNumberPropertyField('StringLength', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.stringFiller]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stringFiller = new core_1.ComplexTypeStringPropertyField('StringFiller', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.relateToField]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relateToField = new core_1.ComplexTypeStringPropertyField('RelateToField', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.nextSegmentItemNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextSegmentItemNumber = new core_1.ComplexTypeStringPropertyField('NextSegmentItemNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.heightAdjustments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.heightAdjustments = new core_1.ComplexTypeEnumPropertyField('HeightAdjustments', _this);
        /**
         * Representation of the [[ReportLayoutItem.duplicateRepetitiveArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.duplicateRepetitiveArea = new core_1.ComplexTypeEnumPropertyField('DuplicateRepetitiveArea', _this);
        /**
         * Representation of the [[ReportLayoutItem.numberOfLinesInRepetitiveArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numberOfLinesInRepetitiveArea = new core_1.ComplexTypeNumberPropertyField('NumberOfLinesInRepetitiveArea', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.distanceToRepetitiveDuplicate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distanceToRepetitiveDuplicate = new core_1.ComplexTypeNumberPropertyField('DistanceToRepetitiveDuplicate', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.hideRepetitiveAreaIfEmpty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hideRepetitiveAreaIfEmpty = new core_1.ComplexTypeEnumPropertyField('HideRepetitiveAreaIfEmpty', _this);
        /**
         * Representation of the [[ReportLayoutItem.displayRepetitiveAreaFooterOnAllPages]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayRepetitiveAreaFooterOnAllPages = new core_1.ComplexTypeEnumPropertyField('DisplayRepetitiveAreaFooterOnAllPages', _this);
        return _this;
    }
    return ReportLayoutItemField;
}(core_1.ComplexTypeField));
exports.ReportLayoutItemField = ReportLayoutItemField;
var ReportLayoutItem;
(function (ReportLayoutItem) {
    /**
     * Metadata information on all properties of the `ReportLayoutItem` complex type.
     */
    ReportLayoutItem._propertyMetadata = [{
            originalName: 'FieldIdentifier',
            name: 'fieldIdentifier',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ParentType',
            name: 'parentType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Visible',
            name: 'visible',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SuppressZeros',
            name: 'suppressZeros',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Left',
            name: 'left',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Top',
            name: 'top',
            type: 'Edm.Int32',
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
            originalName: 'LeftBorderLineThickness',
            name: 'leftBorderLineThickness',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RightBorderLineThickness',
            name: 'rightBorderLineThickness',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TopBorderLineThickness',
            name: 'topBorderLineThickness',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BottomBorderLineThickness',
            name: 'bottomBorderLineThickness',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ShadowThickness',
            name: 'shadowThickness',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BackgroundRed',
            name: 'backgroundRed',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BackgroundGreen',
            name: 'backgroundGreen',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BackgroundBlue',
            name: 'backgroundBlue',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TextRed',
            name: 'textRed',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TextGreen',
            name: 'textGreen',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TextBlue',
            name: 'textBlue',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'HighlightRed',
            name: 'highlightRed',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'HighlightGreen',
            name: 'highlightGreen',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'HighlightBlue',
            name: 'highlightBlue',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BorderRed',
            name: 'borderRed',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BorderGreen',
            name: 'borderGreen',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BorderBlue',
            name: 'borderBlue',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GroupNumber',
            name: 'groupNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FontName',
            name: 'fontName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FontSize',
            name: 'fontSize',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TextStyle',
            name: 'textStyle',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'HorizontalAlignment',
            name: 'horizontalAlignment',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'LineBreak',
            name: 'lineBreak',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PictureSize',
            name: 'pictureSize',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DataSource',
            name: 'dataSource',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'String',
            name: 'string',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VariableNumber',
            name: 'variableNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TableName',
            name: 'tableName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FieldName',
            name: 'fieldName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DisplayDescription',
            name: 'displayDescription',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Editable',
            name: 'editable',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemNumber',
            name: 'itemNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'VerticalAlignment',
            name: 'verticalAlignment',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SortLevel',
            name: 'sortLevel',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ReverseSort',
            name: 'reverseSort',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SortType',
            name: 'sortType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Unique',
            name: 'unique',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SetAsGroup',
            name: 'setAsGroup',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'NewPage',
            name: 'newPage',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PrintAsBarCode',
            name: 'printAsBarCode',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'LinkToField',
            name: 'linkToField',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BarCodeStandard',
            name: 'barCodeStandard',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DisplayTotalAsAWord',
            name: 'displayTotalAsAWord',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BlockFontChange',
            name: 'blockFontChange',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ParentIndex',
            name: 'parentIndex',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemIndex',
            name: 'itemIndex',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StringLength',
            name: 'stringLength',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StringFiller',
            name: 'stringFiller',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RelateToField',
            name: 'relateToField',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'NextSegmentItemNumber',
            name: 'nextSegmentItemNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'HeightAdjustments',
            name: 'heightAdjustments',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DuplicateRepetitiveArea',
            name: 'duplicateRepetitiveArea',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'NumberOfLinesInRepetitiveArea',
            name: 'numberOfLinesInRepetitiveArea',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DistanceToRepetitiveDuplicate',
            name: 'distanceToRepetitiveDuplicate',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'HideRepetitiveAreaIfEmpty',
            name: 'hideRepetitiveAreaIfEmpty',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DisplayRepetitiveAreaFooterOnAllPages',
            name: 'displayRepetitiveAreaFooterOnAllPages',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ReportLayoutItem);
    }
    ReportLayoutItem.build = build;
})(ReportLayoutItem = exports.ReportLayoutItem || (exports.ReportLayoutItem = {}));
//# sourceMappingURL=ReportLayoutItem.js.map