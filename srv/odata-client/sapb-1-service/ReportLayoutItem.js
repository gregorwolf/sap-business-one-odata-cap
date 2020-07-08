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
exports.ReportLayoutItem = exports.ReportLayoutItemField = exports.createReportLayoutItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ReportLayoutItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ReportLayoutItem.fieldIdentifier]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldIdentifier = new v4_1.ComplexTypeStringPropertyField('FieldIdentifier', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.parentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentType = new v4_1.ComplexTypeNumberPropertyField('ParentType', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.left]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.left = new v4_1.ComplexTypeNumberPropertyField('Left', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.top]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.top = new v4_1.ComplexTypeNumberPropertyField('Top', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.width]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width = new v4_1.ComplexTypeNumberPropertyField('Width', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.height]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height = new v4_1.ComplexTypeNumberPropertyField('Height', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.leftMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.leftMargin = new v4_1.ComplexTypeNumberPropertyField('LeftMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.rightMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rightMargin = new v4_1.ComplexTypeNumberPropertyField('RightMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.topMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.topMargin = new v4_1.ComplexTypeNumberPropertyField('TopMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.bottomMargin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bottomMargin = new v4_1.ComplexTypeNumberPropertyField('BottomMargin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.leftBorderLineThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.leftBorderLineThickness = new v4_1.ComplexTypeNumberPropertyField('LeftBorderLineThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.rightBorderLineThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rightBorderLineThickness = new v4_1.ComplexTypeNumberPropertyField('RightBorderLineThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.topBorderLineThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.topBorderLineThickness = new v4_1.ComplexTypeNumberPropertyField('TopBorderLineThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.bottomBorderLineThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bottomBorderLineThickness = new v4_1.ComplexTypeNumberPropertyField('BottomBorderLineThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.shadowThickness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shadowThickness = new v4_1.ComplexTypeNumberPropertyField('ShadowThickness', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.backgroundRed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backgroundRed = new v4_1.ComplexTypeNumberPropertyField('BackgroundRed', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.backgroundGreen]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backgroundGreen = new v4_1.ComplexTypeNumberPropertyField('BackgroundGreen', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.backgroundBlue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backgroundBlue = new v4_1.ComplexTypeNumberPropertyField('BackgroundBlue', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.textRed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textRed = new v4_1.ComplexTypeNumberPropertyField('TextRed', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.textGreen]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textGreen = new v4_1.ComplexTypeNumberPropertyField('TextGreen', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.textBlue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textBlue = new v4_1.ComplexTypeNumberPropertyField('TextBlue', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.highlightRed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.highlightRed = new v4_1.ComplexTypeNumberPropertyField('HighlightRed', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.highlightGreen]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.highlightGreen = new v4_1.ComplexTypeNumberPropertyField('HighlightGreen', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.highlightBlue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.highlightBlue = new v4_1.ComplexTypeNumberPropertyField('HighlightBlue', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.borderRed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderRed = new v4_1.ComplexTypeNumberPropertyField('BorderRed', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.borderGreen]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderGreen = new v4_1.ComplexTypeNumberPropertyField('BorderGreen', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.borderBlue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderBlue = new v4_1.ComplexTypeNumberPropertyField('BorderBlue', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.groupNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupNumber = new v4_1.ComplexTypeNumberPropertyField('GroupNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.fontName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fontName = new v4_1.ComplexTypeStringPropertyField('FontName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.fontSize]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fontSize = new v4_1.ComplexTypeNumberPropertyField('FontSize', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.textStyle]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textStyle = new v4_1.ComplexTypeNumberPropertyField('TextStyle', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.string]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.string = new v4_1.ComplexTypeStringPropertyField('String', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.variableNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variableNumber = new v4_1.ComplexTypeNumberPropertyField('VariableNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.tableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableName = new v4_1.ComplexTypeStringPropertyField('TableName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.fieldName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldName = new v4_1.ComplexTypeStringPropertyField('FieldName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.editable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.editable = new v4_1.ComplexTypeNumberPropertyField('Editable', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.itemNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNumber = new v4_1.ComplexTypeNumberPropertyField('ItemNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.sortLevel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortLevel = new v4_1.ComplexTypeNumberPropertyField('SortLevel', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.linkToField]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkToField = new v4_1.ComplexTypeStringPropertyField('LinkToField', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.parentIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentIndex = new v4_1.ComplexTypeNumberPropertyField('ParentIndex', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.itemIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemIndex = new v4_1.ComplexTypeNumberPropertyField('ItemIndex', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.stringLength]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stringLength = new v4_1.ComplexTypeNumberPropertyField('StringLength', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.stringFiller]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stringFiller = new v4_1.ComplexTypeStringPropertyField('StringFiller', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.relateToField]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relateToField = new v4_1.ComplexTypeStringPropertyField('RelateToField', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.nextSegmentItemNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextSegmentItemNumber = new v4_1.ComplexTypeStringPropertyField('NextSegmentItemNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutItem.numberOfLinesInRepetitiveArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numberOfLinesInRepetitiveArea = new v4_1.ComplexTypeNumberPropertyField('NumberOfLinesInRepetitiveArea', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportLayoutItem.distanceToRepetitiveDuplicate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distanceToRepetitiveDuplicate = new v4_1.ComplexTypeNumberPropertyField('DistanceToRepetitiveDuplicate', _this, 'Edm.Int32');
        return _this;
    }
    return ReportLayoutItemField;
}(v4_1.ComplexTypeField));
exports.ReportLayoutItemField = ReportLayoutItemField;
var ReportLayoutItem;
(function (ReportLayoutItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FieldIdentifier: function (fieldIdentifier) { return ({ fieldIdentifier: v4_1.edmToTs(fieldIdentifier, 'Edm.String') }); },
            ParentType: function (parentType) { return ({ parentType: v4_1.edmToTs(parentType, 'Edm.Int32') }); },
            Left: function (left) { return ({ left: v4_1.edmToTs(left, 'Edm.Int32') }); },
            Top: function (top) { return ({ top: v4_1.edmToTs(top, 'Edm.Int32') }); },
            Width: function (width) { return ({ width: v4_1.edmToTs(width, 'Edm.Int32') }); },
            Height: function (height) { return ({ height: v4_1.edmToTs(height, 'Edm.Int32') }); },
            LeftMargin: function (leftMargin) { return ({ leftMargin: v4_1.edmToTs(leftMargin, 'Edm.Int32') }); },
            RightMargin: function (rightMargin) { return ({ rightMargin: v4_1.edmToTs(rightMargin, 'Edm.Int32') }); },
            TopMargin: function (topMargin) { return ({ topMargin: v4_1.edmToTs(topMargin, 'Edm.Int32') }); },
            BottomMargin: function (bottomMargin) { return ({ bottomMargin: v4_1.edmToTs(bottomMargin, 'Edm.Int32') }); },
            LeftBorderLineThickness: function (leftBorderLineThickness) { return ({ leftBorderLineThickness: v4_1.edmToTs(leftBorderLineThickness, 'Edm.Int32') }); },
            RightBorderLineThickness: function (rightBorderLineThickness) { return ({ rightBorderLineThickness: v4_1.edmToTs(rightBorderLineThickness, 'Edm.Int32') }); },
            TopBorderLineThickness: function (topBorderLineThickness) { return ({ topBorderLineThickness: v4_1.edmToTs(topBorderLineThickness, 'Edm.Int32') }); },
            BottomBorderLineThickness: function (bottomBorderLineThickness) { return ({ bottomBorderLineThickness: v4_1.edmToTs(bottomBorderLineThickness, 'Edm.Int32') }); },
            ShadowThickness: function (shadowThickness) { return ({ shadowThickness: v4_1.edmToTs(shadowThickness, 'Edm.Int32') }); },
            BackgroundRed: function (backgroundRed) { return ({ backgroundRed: v4_1.edmToTs(backgroundRed, 'Edm.Int32') }); },
            BackgroundGreen: function (backgroundGreen) { return ({ backgroundGreen: v4_1.edmToTs(backgroundGreen, 'Edm.Int32') }); },
            BackgroundBlue: function (backgroundBlue) { return ({ backgroundBlue: v4_1.edmToTs(backgroundBlue, 'Edm.Int32') }); },
            TextRed: function (textRed) { return ({ textRed: v4_1.edmToTs(textRed, 'Edm.Int32') }); },
            TextGreen: function (textGreen) { return ({ textGreen: v4_1.edmToTs(textGreen, 'Edm.Int32') }); },
            TextBlue: function (textBlue) { return ({ textBlue: v4_1.edmToTs(textBlue, 'Edm.Int32') }); },
            HighlightRed: function (highlightRed) { return ({ highlightRed: v4_1.edmToTs(highlightRed, 'Edm.Int32') }); },
            HighlightGreen: function (highlightGreen) { return ({ highlightGreen: v4_1.edmToTs(highlightGreen, 'Edm.Int32') }); },
            HighlightBlue: function (highlightBlue) { return ({ highlightBlue: v4_1.edmToTs(highlightBlue, 'Edm.Int32') }); },
            BorderRed: function (borderRed) { return ({ borderRed: v4_1.edmToTs(borderRed, 'Edm.Int32') }); },
            BorderGreen: function (borderGreen) { return ({ borderGreen: v4_1.edmToTs(borderGreen, 'Edm.Int32') }); },
            BorderBlue: function (borderBlue) { return ({ borderBlue: v4_1.edmToTs(borderBlue, 'Edm.Int32') }); },
            GroupNumber: function (groupNumber) { return ({ groupNumber: v4_1.edmToTs(groupNumber, 'Edm.Int32') }); },
            FontName: function (fontName) { return ({ fontName: v4_1.edmToTs(fontName, 'Edm.String') }); },
            FontSize: function (fontSize) { return ({ fontSize: v4_1.edmToTs(fontSize, 'Edm.Int32') }); },
            TextStyle: function (textStyle) { return ({ textStyle: v4_1.edmToTs(textStyle, 'Edm.Int32') }); },
            String: function (string) { return ({ string: v4_1.edmToTs(string, 'Edm.String') }); },
            VariableNumber: function (variableNumber) { return ({ variableNumber: v4_1.edmToTs(variableNumber, 'Edm.Int32') }); },
            TableName: function (tableName) { return ({ tableName: v4_1.edmToTs(tableName, 'Edm.String') }); },
            FieldName: function (fieldName) { return ({ fieldName: v4_1.edmToTs(fieldName, 'Edm.String') }); },
            Editable: function (editable) { return ({ editable: v4_1.edmToTs(editable, 'Edm.Int32') }); },
            ItemNumber: function (itemNumber) { return ({ itemNumber: v4_1.edmToTs(itemNumber, 'Edm.Int32') }); },
            SortLevel: function (sortLevel) { return ({ sortLevel: v4_1.edmToTs(sortLevel, 'Edm.Int32') }); },
            LinkToField: function (linkToField) { return ({ linkToField: v4_1.edmToTs(linkToField, 'Edm.String') }); },
            ParentIndex: function (parentIndex) { return ({ parentIndex: v4_1.edmToTs(parentIndex, 'Edm.Int32') }); },
            ItemIndex: function (itemIndex) { return ({ itemIndex: v4_1.edmToTs(itemIndex, 'Edm.Int32') }); },
            StringLength: function (stringLength) { return ({ stringLength: v4_1.edmToTs(stringLength, 'Edm.Int32') }); },
            StringFiller: function (stringFiller) { return ({ stringFiller: v4_1.edmToTs(stringFiller, 'Edm.String') }); },
            RelateToField: function (relateToField) { return ({ relateToField: v4_1.edmToTs(relateToField, 'Edm.String') }); },
            NextSegmentItemNumber: function (nextSegmentItemNumber) { return ({ nextSegmentItemNumber: v4_1.edmToTs(nextSegmentItemNumber, 'Edm.String') }); },
            NumberOfLinesInRepetitiveArea: function (numberOfLinesInRepetitiveArea) { return ({ numberOfLinesInRepetitiveArea: v4_1.edmToTs(numberOfLinesInRepetitiveArea, 'Edm.Int32') }); },
            DistanceToRepetitiveDuplicate: function (distanceToRepetitiveDuplicate) { return ({ distanceToRepetitiveDuplicate: v4_1.edmToTs(distanceToRepetitiveDuplicate, 'Edm.Int32') }); }
        });
    }
    ReportLayoutItem.build = build;
})(ReportLayoutItem = exports.ReportLayoutItem || (exports.ReportLayoutItem = {}));
//# sourceMappingURL=ReportLayoutItem.js.map