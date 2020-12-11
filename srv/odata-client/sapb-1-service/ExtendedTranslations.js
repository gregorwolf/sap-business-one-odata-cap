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
exports.ExtendedTranslations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ExtendedTranslationsRequestBuilder_1 = require("./ExtendedTranslationsRequestBuilder");
var ExtendedTranslationItemLine_1 = require("./ExtendedTranslationItemLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExtendedTranslations" of service "SAPB1".
 */
var ExtendedTranslations = /** @class */ (function (_super) {
    __extends(ExtendedTranslations, _super);
    function ExtendedTranslations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ExtendedTranslations`.
     * @returns A builder that constructs instances of entity type `ExtendedTranslations`.
     */
    ExtendedTranslations.builder = function () {
        return core_1.EntityV4.entityBuilder(ExtendedTranslations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExtendedTranslations` entity type.
     * @returns A `ExtendedTranslations` request builder.
     */
    ExtendedTranslations.requestBuilder = function () {
        return new ExtendedTranslationsRequestBuilder_1.ExtendedTranslationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtendedTranslations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtendedTranslations`.
     */
    ExtendedTranslations.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ExtendedTranslations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExtendedTranslations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExtendedTranslations.
     */
    ExtendedTranslations._entityName = 'ExtendedTranslations';
    /**
     * Default url path for the according service.
     */
    ExtendedTranslations._defaultServicePath = '/b1s/v2/';
    return ExtendedTranslations;
}(core_1.EntityV4));
exports.ExtendedTranslations = ExtendedTranslations;
(function (ExtendedTranslations) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtendedTranslations.DOC_ENTRY = new core_1.NumberField('DocEntry', ExtendedTranslations, 'Edm.Int32');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtendedTranslations.CATEGORY = new core_1.EnumField('Category', ExtendedTranslations);
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtendedTranslations.ID = new core_1.StringField('ID', ExtendedTranslations, 'Edm.String');
    /**
     * Static representation of the [[secondaryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtendedTranslations.SECONDARY_ID = new core_1.StringField('SecondaryID', ExtendedTranslations, 'Edm.String');
    /**
     * Static representation of the [[sourceLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtendedTranslations.SOURCE_LANGUAGE = new core_1.NumberField('SourceLanguage', ExtendedTranslations, 'Edm.Int32');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtendedTranslations.UPDATE_DATE = new core_1.DateField('UpdateDate', ExtendedTranslations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtendedTranslations.CREATE_DATE = new core_1.DateField('CreateDate', ExtendedTranslations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[extendedTranslationItemLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtendedTranslations.EXTENDED_TRANSLATION_ITEM_LINES = new core_1.CollectionField('ExtendedTranslation_ItemLines', ExtendedTranslations, ExtendedTranslationItemLine_1.ExtendedTranslationItemLine);
    /**
     * All fields of the ExtendedTranslations entity.
     */
    ExtendedTranslations._allFields = [
        ExtendedTranslations.DOC_ENTRY,
        ExtendedTranslations.CATEGORY,
        ExtendedTranslations.ID,
        ExtendedTranslations.SECONDARY_ID,
        ExtendedTranslations.SOURCE_LANGUAGE,
        ExtendedTranslations.UPDATE_DATE,
        ExtendedTranslations.CREATE_DATE,
        ExtendedTranslations.EXTENDED_TRANSLATION_ITEM_LINES
    ];
    /**
     * All fields selector.
     */
    ExtendedTranslations.ALL_FIELDS = new core_1.AllFields('*', ExtendedTranslations);
    /**
     * All key fields of the ExtendedTranslations entity.
     */
    ExtendedTranslations._keyFields = [ExtendedTranslations.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property ExtendedTranslations.
     */
    ExtendedTranslations._keys = ExtendedTranslations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExtendedTranslations = exports.ExtendedTranslations || (exports.ExtendedTranslations = {}));
exports.ExtendedTranslations = ExtendedTranslations;
//# sourceMappingURL=ExtendedTranslations.js.map