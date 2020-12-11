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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiLanguageTranslations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var MultiLanguageTranslationsRequestBuilder_1 = require("./MultiLanguageTranslationsRequestBuilder");
var TranslationsInUserLanguage_1 = require("./TranslationsInUserLanguage");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "MultiLanguageTranslations" of service "SAPB1".
 */
var MultiLanguageTranslations = /** @class */ (function (_super) {
    __extends(MultiLanguageTranslations, _super);
    function MultiLanguageTranslations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `MultiLanguageTranslations`.
     * @returns A builder that constructs instances of entity type `MultiLanguageTranslations`.
     */
    MultiLanguageTranslations.builder = function () {
        return core_1.EntityV4.entityBuilder(MultiLanguageTranslations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MultiLanguageTranslations` entity type.
     * @returns A `MultiLanguageTranslations` request builder.
     */
    MultiLanguageTranslations.requestBuilder = function () {
        return new MultiLanguageTranslationsRequestBuilder_1.MultiLanguageTranslationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MultiLanguageTranslations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MultiLanguageTranslations`.
     */
    MultiLanguageTranslations.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, MultiLanguageTranslations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MultiLanguageTranslations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MultiLanguageTranslations.
     */
    MultiLanguageTranslations._entityName = 'MultiLanguageTranslations';
    /**
     * Default url path for the according service.
     */
    MultiLanguageTranslations._defaultServicePath = '/b1s/v2/';
    return MultiLanguageTranslations;
}(core_1.EntityV4));
exports.MultiLanguageTranslations = MultiLanguageTranslations;
(function (MultiLanguageTranslations) {
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MultiLanguageTranslations.NUMERATOR = new core_1.NumberField('Numerator', MultiLanguageTranslations, 'Edm.Int32');
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MultiLanguageTranslations.TABLE_NAME = new core_1.StringField('TableName', MultiLanguageTranslations, 'Edm.String');
    /**
     * Static representation of the [[fieldAlias]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MultiLanguageTranslations.FIELD_ALIAS = new core_1.StringField('FieldAlias', MultiLanguageTranslations, 'Edm.String');
    /**
     * Static representation of the [[primaryKeyofobject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MultiLanguageTranslations.PRIMARY_KEYOFOBJECT = new core_1.StringField('PrimaryKeyofobject', MultiLanguageTranslations, 'Edm.String');
    /**
     * Static representation of the [[translationsInUserLanguages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MultiLanguageTranslations.TRANSLATIONS_IN_USER_LANGUAGES = new core_1.CollectionField('TranslationsInUserLanguages', MultiLanguageTranslations, TranslationsInUserLanguage_1.TranslationsInUserLanguage);
    /**
     * All fields of the MultiLanguageTranslations entity.
     */
    MultiLanguageTranslations._allFields = [
        MultiLanguageTranslations.NUMERATOR,
        MultiLanguageTranslations.TABLE_NAME,
        MultiLanguageTranslations.FIELD_ALIAS,
        MultiLanguageTranslations.PRIMARY_KEYOFOBJECT,
        MultiLanguageTranslations.TRANSLATIONS_IN_USER_LANGUAGES
    ];
    /**
     * All fields selector.
     */
    MultiLanguageTranslations.ALL_FIELDS = new core_1.AllFields('*', MultiLanguageTranslations);
    /**
     * All key fields of the MultiLanguageTranslations entity.
     */
    MultiLanguageTranslations._keyFields = [MultiLanguageTranslations.NUMERATOR];
    /**
     * Mapping of all key field names to the respective static field property MultiLanguageTranslations.
     */
    MultiLanguageTranslations._keys = MultiLanguageTranslations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MultiLanguageTranslations = exports.MultiLanguageTranslations || (exports.MultiLanguageTranslations = {}));
exports.MultiLanguageTranslations = MultiLanguageTranslations;
//# sourceMappingURL=MultiLanguageTranslations.js.map