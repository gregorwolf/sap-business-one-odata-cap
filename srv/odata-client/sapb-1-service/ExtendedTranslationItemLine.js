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
exports.ExtendedTranslationItemLine = exports.ExtendedTranslationItemLineField = exports.createExtendedTranslationItemLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ExtendedTranslationResultLine_1 = require("./ExtendedTranslationResultLine");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ExtendedTranslationItemLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ExtendedTranslationItemLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ExtendedTranslationItemLine) || this;
        /**
         * Representation of the [[ExtendedTranslationItemLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationItemLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationItemLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.itemType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemType = new core_1.ComplexTypeStringPropertyField('ItemType', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.slimType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.slimType = new core_1.ComplexTypeStringPropertyField('SlimType', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.maxLength]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxLength = new core_1.ComplexTypeNumberPropertyField('MaxLength', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationItemLine.sourceText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceText = new core_1.ComplexTypeStringPropertyField('SourceText', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.memo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.memo = new core_1.ComplexTypeStringPropertyField('Memo', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationItemLine.extendedTranslationResultLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.extendedTranslationResultLines = new core_1.CollectionField('ExtendedTranslation_ResultLines', _this, ExtendedTranslationResultLine_1.ExtendedTranslationResultLine);
        return _this;
    }
    return ExtendedTranslationItemLineField;
}(core_1.ComplexTypeField));
exports.ExtendedTranslationItemLineField = ExtendedTranslationItemLineField;
var ExtendedTranslationItemLine;
(function (ExtendedTranslationItemLine) {
    /**
     * Metadata information on all properties of the `ExtendedTranslationItemLine` complex type.
     */
    ExtendedTranslationItemLine._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemType',
            name: 'itemType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SlimType',
            name: 'slimType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MaxLength',
            name: 'maxLength',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SourceText',
            name: 'sourceText',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Memo',
            name: 'memo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExtendedTranslation_ResultLines',
            name: 'extendedTranslationResultLines',
            type: ExtendedTranslationResultLine_1.ExtendedTranslationResultLine,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ExtendedTranslationItemLine);
    }
    ExtendedTranslationItemLine.build = build;
})(ExtendedTranslationItemLine = exports.ExtendedTranslationItemLine || (exports.ExtendedTranslationItemLine = {}));
//# sourceMappingURL=ExtendedTranslationItemLine.js.map