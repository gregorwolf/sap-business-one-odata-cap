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
exports.TranslationsInUserLanguage = exports.TranslationsInUserLanguageField = exports.createTranslationsInUserLanguage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TranslationsInUserLanguage.build]] instead.
 */
function createTranslationsInUserLanguage(json) {
    return TranslationsInUserLanguage.build(json);
}
exports.createTranslationsInUserLanguage = createTranslationsInUserLanguage;
/**
 * TranslationsInUserLanguageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TranslationsInUserLanguageField = /** @class */ (function (_super) {
    __extends(TranslationsInUserLanguageField, _super);
    /**
     * Creates an instance of TranslationsInUserLanguageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TranslationsInUserLanguageField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TranslationsInUserLanguage) || this;
        /**
         * Representation of the [[TranslationsInUserLanguage.keyFromHeaderTable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFromHeaderTable = new core_1.ComplexTypeNumberPropertyField('KeyFromHeaderTable', _this, 'Edm.Int32');
        /**
         * Representation of the [[TranslationsInUserLanguage.languageCodeOfUserLanguage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.languageCodeOfUserLanguage = new core_1.ComplexTypeNumberPropertyField('LanguageCodeOfUserLanguage', _this, 'Edm.Int32');
        /**
         * Representation of the [[TranslationsInUserLanguage.translationscontent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.translationscontent = new core_1.ComplexTypeStringPropertyField('Translationscontent', _this, 'Edm.String');
        return _this;
    }
    return TranslationsInUserLanguageField;
}(core_1.ComplexTypeField));
exports.TranslationsInUserLanguageField = TranslationsInUserLanguageField;
var TranslationsInUserLanguage;
(function (TranslationsInUserLanguage) {
    /**
     * Metadata information on all properties of the `TranslationsInUserLanguage` complex type.
     */
    TranslationsInUserLanguage._propertyMetadata = [{
            originalName: 'KeyFromHeaderTable',
            name: 'keyFromHeaderTable',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LanguageCodeOfUserLanguage',
            name: 'languageCodeOfUserLanguage',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Translationscontent',
            name: 'translationscontent',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TranslationsInUserLanguage);
    }
    TranslationsInUserLanguage.build = build;
})(TranslationsInUserLanguage = exports.TranslationsInUserLanguage || (exports.TranslationsInUserLanguage = {}));
//# sourceMappingURL=TranslationsInUserLanguage.js.map