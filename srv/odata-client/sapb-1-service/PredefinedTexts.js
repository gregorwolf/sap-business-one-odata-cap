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
exports.PredefinedTexts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PredefinedTextsRequestBuilder_1 = require("./PredefinedTextsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "PredefinedTexts" of service "SAPB1".
 */
var PredefinedTexts = /** @class */ (function (_super) {
    __extends(PredefinedTexts, _super);
    function PredefinedTexts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PredefinedTexts`.
     * @returns A builder that constructs instances of entity type `PredefinedTexts`.
     */
    PredefinedTexts.builder = function () {
        return v4_1.Entity.entityBuilder(PredefinedTexts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PredefinedTexts` entity type.
     * @returns A `PredefinedTexts` request builder.
     */
    PredefinedTexts.requestBuilder = function () {
        return new PredefinedTextsRequestBuilder_1.PredefinedTextsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PredefinedTexts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PredefinedTexts`.
     */
    PredefinedTexts.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, PredefinedTexts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PredefinedTexts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PredefinedTexts.
     */
    PredefinedTexts._entityName = 'PredefinedTexts';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PredefinedTexts.
     */
    PredefinedTexts._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    PredefinedTexts._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PredefinedTexts;
}(v4_1.Entity));
exports.PredefinedTexts = PredefinedTexts;
(function (PredefinedTexts) {
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PredefinedTexts.NUMERATOR = new v4_1.NumberField('Numerator', PredefinedTexts, 'Edm.Int32');
    /**
     * Static representation of the [[textCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PredefinedTexts.TEXT_CODE = new v4_1.StringField('TextCode', PredefinedTexts, 'Edm.String');
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PredefinedTexts.TEXT = new v4_1.StringField('Text', PredefinedTexts, 'Edm.String');
    /**
     * All fields of the PredefinedTexts entity.
     */
    PredefinedTexts._allFields = [
        PredefinedTexts.NUMERATOR,
        PredefinedTexts.TEXT_CODE,
        PredefinedTexts.TEXT
    ];
    /**
     * All fields selector.
     */
    PredefinedTexts.ALL_FIELDS = new v4_1.AllFields('*', PredefinedTexts);
    /**
     * All key fields of the PredefinedTexts entity.
     */
    PredefinedTexts._keyFields = [PredefinedTexts.NUMERATOR];
    /**
     * Mapping of all key field names to the respective static field property PredefinedTexts.
     */
    PredefinedTexts._keys = PredefinedTexts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PredefinedTexts = exports.PredefinedTexts || (exports.PredefinedTexts = {}));
exports.PredefinedTexts = PredefinedTexts;
//# sourceMappingURL=PredefinedTexts.js.map