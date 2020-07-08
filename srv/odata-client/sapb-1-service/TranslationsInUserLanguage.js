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
exports.TranslationsInUserLanguage = exports.TranslationsInUserLanguageField = exports.createTranslationsInUserLanguage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function TranslationsInUserLanguageField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TranslationsInUserLanguage.keyFromHeaderTable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFromHeaderTable = new v4_1.ComplexTypeNumberPropertyField('KeyFromHeaderTable', _this, 'Edm.Int32');
        /**
         * Representation of the [[TranslationsInUserLanguage.languageCodeOfUserLanguage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.languageCodeOfUserLanguage = new v4_1.ComplexTypeNumberPropertyField('LanguageCodeOfUserLanguage', _this, 'Edm.Int32');
        /**
         * Representation of the [[TranslationsInUserLanguage.translationscontent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.translationscontent = new v4_1.ComplexTypeStringPropertyField('Translationscontent', _this, 'Edm.String');
        return _this;
    }
    return TranslationsInUserLanguageField;
}(v4_1.ComplexTypeField));
exports.TranslationsInUserLanguageField = TranslationsInUserLanguageField;
var TranslationsInUserLanguage;
(function (TranslationsInUserLanguage) {
    function build(json) {
        return v4_1.createComplexType(json, {
            KeyFromHeaderTable: function (keyFromHeaderTable) { return ({ keyFromHeaderTable: v4_1.edmToTs(keyFromHeaderTable, 'Edm.Int32') }); },
            LanguageCodeOfUserLanguage: function (languageCodeOfUserLanguage) { return ({ languageCodeOfUserLanguage: v4_1.edmToTs(languageCodeOfUserLanguage, 'Edm.Int32') }); },
            Translationscontent: function (translationscontent) { return ({ translationscontent: v4_1.edmToTs(translationscontent, 'Edm.String') }); }
        });
    }
    TranslationsInUserLanguage.build = build;
})(TranslationsInUserLanguage = exports.TranslationsInUserLanguage || (exports.TranslationsInUserLanguage = {}));
//# sourceMappingURL=TranslationsInUserLanguage.js.map