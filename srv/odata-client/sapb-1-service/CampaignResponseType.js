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
exports.CampaignResponseType = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CampaignResponseTypeRequestBuilder_1 = require("./CampaignResponseTypeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CampaignResponseType" of service "SAPB1".
 */
var CampaignResponseType = /** @class */ (function (_super) {
    __extends(CampaignResponseType, _super);
    function CampaignResponseType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CampaignResponseType`.
     * @returns A builder that constructs instances of entity type `CampaignResponseType`.
     */
    CampaignResponseType.builder = function () {
        return core_1.EntityV4.entityBuilder(CampaignResponseType);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CampaignResponseType` entity type.
     * @returns A `CampaignResponseType` request builder.
     */
    CampaignResponseType.requestBuilder = function () {
        return new CampaignResponseTypeRequestBuilder_1.CampaignResponseTypeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CampaignResponseType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CampaignResponseType`.
     */
    CampaignResponseType.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CampaignResponseType);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CampaignResponseType.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CampaignResponseType.
     */
    CampaignResponseType._entityName = 'CampaignResponseType';
    /**
     * Default url path for the according service.
     */
    CampaignResponseType._defaultServicePath = '/b1s/v2/';
    return CampaignResponseType;
}(core_1.EntityV4));
exports.CampaignResponseType = CampaignResponseType;
(function (CampaignResponseType) {
    /**
     * Static representation of the [[responseTypeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CampaignResponseType.RESPONSE_TYPE_DESCRIPTION = new core_1.StringField('ResponseTypeDescription', CampaignResponseType, 'Edm.String');
    /**
     * Static representation of the [[responseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CampaignResponseType.RESPONSE_TYPE = new core_1.StringField('ResponseType', CampaignResponseType, 'Edm.String');
    /**
     * Static representation of the [[isActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CampaignResponseType.IS_ACTIVE = new core_1.EnumField('IsActive', CampaignResponseType);
    /**
     * All fields of the CampaignResponseType entity.
     */
    CampaignResponseType._allFields = [
        CampaignResponseType.RESPONSE_TYPE_DESCRIPTION,
        CampaignResponseType.RESPONSE_TYPE,
        CampaignResponseType.IS_ACTIVE
    ];
    /**
     * All fields selector.
     */
    CampaignResponseType.ALL_FIELDS = new core_1.AllFields('*', CampaignResponseType);
    /**
     * All key fields of the CampaignResponseType entity.
     */
    CampaignResponseType._keyFields = [CampaignResponseType.RESPONSE_TYPE];
    /**
     * Mapping of all key field names to the respective static field property CampaignResponseType.
     */
    CampaignResponseType._keys = CampaignResponseType._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CampaignResponseType = exports.CampaignResponseType || (exports.CampaignResponseType = {}));
exports.CampaignResponseType = CampaignResponseType;
//# sourceMappingURL=CampaignResponseType.js.map