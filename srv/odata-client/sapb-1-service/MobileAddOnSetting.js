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
exports.MobileAddOnSetting = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var MobileAddOnSettingRequestBuilder_1 = require("./MobileAddOnSettingRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "MobileAddOnSetting" of service "SAPB1".
 */
var MobileAddOnSetting = /** @class */ (function (_super) {
    __extends(MobileAddOnSetting, _super);
    function MobileAddOnSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `MobileAddOnSetting`.
     * @returns A builder that constructs instances of entity type `MobileAddOnSetting`.
     */
    MobileAddOnSetting.builder = function () {
        return v4_1.Entity.entityBuilder(MobileAddOnSetting);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MobileAddOnSetting` entity type.
     * @returns A `MobileAddOnSetting` request builder.
     */
    MobileAddOnSetting.requestBuilder = function () {
        return new MobileAddOnSettingRequestBuilder_1.MobileAddOnSettingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MobileAddOnSetting`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MobileAddOnSetting`.
     */
    MobileAddOnSetting.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, MobileAddOnSetting);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MobileAddOnSetting.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MobileAddOnSetting.
     */
    MobileAddOnSetting._entityName = 'MobileAddOnSetting';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MobileAddOnSetting.
     */
    MobileAddOnSetting._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    MobileAddOnSetting._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return MobileAddOnSetting;
}(v4_1.Entity));
exports.MobileAddOnSetting = MobileAddOnSetting;
(function (MobileAddOnSetting) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MobileAddOnSetting.CODE = new v4_1.StringField('Code', MobileAddOnSetting, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MobileAddOnSetting.DESCRIPTION = new v4_1.StringField('Description', MobileAddOnSetting, 'Edm.String');
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MobileAddOnSetting.URL = new v4_1.StringField('Url', MobileAddOnSetting, 'Edm.String');
    /**
     * Static representation of the [[provider]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MobileAddOnSetting.PROVIDER = new v4_1.StringField('Provider', MobileAddOnSetting, 'Edm.String');
    /**
     * All fields of the MobileAddOnSetting entity.
     */
    MobileAddOnSetting._allFields = [
        MobileAddOnSetting.CODE,
        MobileAddOnSetting.DESCRIPTION,
        MobileAddOnSetting.URL,
        MobileAddOnSetting.PROVIDER
    ];
    /**
     * All fields selector.
     */
    MobileAddOnSetting.ALL_FIELDS = new v4_1.AllFields('*', MobileAddOnSetting);
    /**
     * All key fields of the MobileAddOnSetting entity.
     */
    MobileAddOnSetting._keyFields = [MobileAddOnSetting.CODE];
    /**
     * Mapping of all key field names to the respective static field property MobileAddOnSetting.
     */
    MobileAddOnSetting._keys = MobileAddOnSetting._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MobileAddOnSetting = exports.MobileAddOnSetting || (exports.MobileAddOnSetting = {}));
exports.MobileAddOnSetting = MobileAddOnSetting;
//# sourceMappingURL=MobileAddOnSetting.js.map