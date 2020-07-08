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
exports.ExtendedTranslationResultLine = exports.ExtendedTranslationResultLineField = exports.createExtendedTranslationResultLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ExtendedTranslationResultLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExtendedTranslationResultLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationResultLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationResultLine.subLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subLineNumber = new v4_1.ComplexTypeNumberPropertyField('SubLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationResultLine.languageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.languageCode = new v4_1.ComplexTypeNumberPropertyField('LanguageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationResultLine.translatedText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.translatedText = new v4_1.ComplexTypeStringPropertyField('TranslatedText', _this, 'Edm.String');
        return _this;
    }
    return ExtendedTranslationResultLineField;
}(v4_1.ComplexTypeField));
exports.ExtendedTranslationResultLineField = ExtendedTranslationResultLineField;
var ExtendedTranslationResultLine;
(function (ExtendedTranslationResultLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            SubLineNumber: function (subLineNumber) { return ({ subLineNumber: v4_1.edmToTs(subLineNumber, 'Edm.Int32') }); },
            LanguageCode: function (languageCode) { return ({ languageCode: v4_1.edmToTs(languageCode, 'Edm.Int32') }); },
            TranslatedText: function (translatedText) { return ({ translatedText: v4_1.edmToTs(translatedText, 'Edm.String') }); }
        });
    }
    ExtendedTranslationResultLine.build = build;
})(ExtendedTranslationResultLine = exports.ExtendedTranslationResultLine || (exports.ExtendedTranslationResultLine = {}));
//# sourceMappingURL=ExtendedTranslationResultLine.js.map