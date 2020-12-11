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
exports.ExtendedTranslationResultLine = exports.ExtendedTranslationResultLineField = exports.createExtendedTranslationResultLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationResultLine.build]] instead.
 */
function createExtendedTranslationResultLine(json) {
    return ExtendedTranslationResultLine.build(json);
}
exports.createExtendedTranslationResultLine = createExtendedTranslationResultLine;
/**
 * ExtendedTranslationResultLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExtendedTranslationResultLineField = /** @class */ (function (_super) {
    __extends(ExtendedTranslationResultLineField, _super);
    /**
     * Creates an instance of ExtendedTranslationResultLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ExtendedTranslationResultLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ExtendedTranslationResultLine) || this;
        /**
         * Representation of the [[ExtendedTranslationResultLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationResultLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationResultLine.subLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subLineNumber = new core_1.ComplexTypeNumberPropertyField('SubLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationResultLine.languageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.languageCode = new core_1.ComplexTypeNumberPropertyField('LanguageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationResultLine.translatedText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.translatedText = new core_1.ComplexTypeStringPropertyField('TranslatedText', _this, 'Edm.String');
        return _this;
    }
    return ExtendedTranslationResultLineField;
}(core_1.ComplexTypeField));
exports.ExtendedTranslationResultLineField = ExtendedTranslationResultLineField;
var ExtendedTranslationResultLine;
(function (ExtendedTranslationResultLine) {
    /**
     * Metadata information on all properties of the `ExtendedTranslationResultLine` complex type.
     */
    ExtendedTranslationResultLine._propertyMetadata = [{
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
            originalName: 'SubLineNumber',
            name: 'subLineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LanguageCode',
            name: 'languageCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TranslatedText',
            name: 'translatedText',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ExtendedTranslationResultLine);
    }
    ExtendedTranslationResultLine.build = build;
})(ExtendedTranslationResultLine = exports.ExtendedTranslationResultLine || (exports.ExtendedTranslationResultLine = {}));
//# sourceMappingURL=ExtendedTranslationResultLine.js.map