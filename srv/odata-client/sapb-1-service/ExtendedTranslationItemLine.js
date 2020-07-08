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
exports.ExtendedTranslationItemLine = exports.ExtendedTranslationItemLineField = exports.createExtendedTranslationItemLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ExtendedTranslationResultLine_1 = require("./ExtendedTranslationResultLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationItemLine.build]] instead.
 */
function createExtendedTranslationItemLine(json) {
    return ExtendedTranslationItemLine.build(json);
}
exports.createExtendedTranslationItemLine = createExtendedTranslationItemLine;
/**
 * ExtendedTranslationItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExtendedTranslationItemLineField = /** @class */ (function (_super) {
    __extends(ExtendedTranslationItemLineField, _super);
    function ExtendedTranslationItemLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExtendedTranslationItemLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationItemLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationItemLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.itemType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemType = new v4_1.ComplexTypeStringPropertyField('ItemType', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.slimType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.slimType = new v4_1.ComplexTypeStringPropertyField('SlimType', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.maxLength]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxLength = new v4_1.ComplexTypeNumberPropertyField('MaxLength', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationItemLine.sourceText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceText = new v4_1.ComplexTypeStringPropertyField('SourceText', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.memo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.memo = new v4_1.ComplexTypeStringPropertyField('Memo', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.extendedTranslationResultLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.extendedTranslationResultLines = new ExtendedTranslationResultLine_1.ExtendedTranslationResultLineField('ExtendedTranslation_ResultLines', _this);
        return _this;
    }
    return ExtendedTranslationItemLineField;
}(v4_1.ComplexTypeField));
exports.ExtendedTranslationItemLineField = ExtendedTranslationItemLineField;
var ExtendedTranslationItemLine;
(function (ExtendedTranslationItemLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemType: function (itemType) { return ({ itemType: v4_1.edmToTs(itemType, 'Edm.String') }); },
            SlimType: function (slimType) { return ({ slimType: v4_1.edmToTs(slimType, 'Edm.String') }); },
            MaxLength: function (maxLength) { return ({ maxLength: v4_1.edmToTs(maxLength, 'Edm.Int32') }); },
            SourceText: function (sourceText) { return ({ sourceText: v4_1.edmToTs(sourceText, 'Edm.String') }); },
            Memo: function (memo) { return ({ memo: v4_1.edmToTs(memo, 'Edm.String') }); },
            ExtendedTranslation_ResultLines: function (extendedTranslationResultLines) { return ({ extendedTranslationResultLines: ExtendedTranslationResultLine_1.ExtendedTranslationResultLine.build(extendedTranslationResultLines) }); }
        });
    }
    ExtendedTranslationItemLine.build = build;
})(ExtendedTranslationItemLine = exports.ExtendedTranslationItemLine || (exports.ExtendedTranslationItemLine = {}));
//# sourceMappingURL=ExtendedTranslationItemLine.js.map