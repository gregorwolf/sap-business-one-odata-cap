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
exports.BinLocationAttributes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BinLocationAttributesRequestBuilder_1 = require("./BinLocationAttributesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BinLocationAttributes" of service "SAPB1".
 */
var BinLocationAttributes = /** @class */ (function (_super) {
    __extends(BinLocationAttributes, _super);
    function BinLocationAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BinLocationAttributes`.
     * @returns A builder that constructs instances of entity type `BinLocationAttributes`.
     */
    BinLocationAttributes.builder = function () {
        return core_1.EntityV4.entityBuilder(BinLocationAttributes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BinLocationAttributes` entity type.
     * @returns A `BinLocationAttributes` request builder.
     */
    BinLocationAttributes.requestBuilder = function () {
        return new BinLocationAttributesRequestBuilder_1.BinLocationAttributesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BinLocationAttributes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BinLocationAttributes`.
     */
    BinLocationAttributes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BinLocationAttributes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BinLocationAttributes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BinLocationAttributes.
     */
    BinLocationAttributes._entityName = 'BinLocationAttributes';
    /**
     * Default url path for the according service.
     */
    BinLocationAttributes._defaultServicePath = '/b1s/v2/';
    return BinLocationAttributes;
}(core_1.EntityV4));
exports.BinLocationAttributes = BinLocationAttributes;
var BinLocationFields_1 = require("./BinLocationFields");
(function (BinLocationAttributes) {
    /**
     * Static representation of the [[attribute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationAttributes.ATTRIBUTE = new core_1.NumberField('Attribute', BinLocationAttributes, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationAttributes.CODE = new core_1.StringField('Code', BinLocationAttributes, 'Edm.String');
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationAttributes.ABS_ENTRY = new core_1.NumberField('AbsEntry', BinLocationAttributes, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[binLocationField]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationAttributes.BIN_LOCATION_FIELD = new core_1.OneToOneLink('BinLocationField', BinLocationAttributes, BinLocationFields_1.BinLocationFields);
    /**
     * All fields of the BinLocationAttributes entity.
     */
    BinLocationAttributes._allFields = [
        BinLocationAttributes.ATTRIBUTE,
        BinLocationAttributes.CODE,
        BinLocationAttributes.ABS_ENTRY,
        BinLocationAttributes.BIN_LOCATION_FIELD
    ];
    /**
     * All fields selector.
     */
    BinLocationAttributes.ALL_FIELDS = new core_1.AllFields('*', BinLocationAttributes);
    /**
     * All key fields of the BinLocationAttributes entity.
     */
    BinLocationAttributes._keyFields = [BinLocationAttributes.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property BinLocationAttributes.
     */
    BinLocationAttributes._keys = BinLocationAttributes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BinLocationAttributes = exports.BinLocationAttributes || (exports.BinLocationAttributes = {}));
exports.BinLocationAttributes = BinLocationAttributes;
//# sourceMappingURL=BinLocationAttributes.js.map