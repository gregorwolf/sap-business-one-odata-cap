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
exports.TargetGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TargetGroupsRequestBuilder_1 = require("./TargetGroupsRequestBuilder");
var TargetGroupsDetail_1 = require("./TargetGroupsDetail");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "TargetGroups" of service "SAPB1".
 */
var TargetGroups = /** @class */ (function (_super) {
    __extends(TargetGroups, _super);
    function TargetGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TargetGroups`.
     * @returns A builder that constructs instances of entity type `TargetGroups`.
     */
    TargetGroups.builder = function () {
        return v4_1.Entity.entityBuilder(TargetGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TargetGroups` entity type.
     * @returns A `TargetGroups` request builder.
     */
    TargetGroups.requestBuilder = function () {
        return new TargetGroupsRequestBuilder_1.TargetGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TargetGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TargetGroups`.
     */
    TargetGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, TargetGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TargetGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TargetGroups.
     */
    TargetGroups._entityName = 'TargetGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TargetGroups.
     */
    TargetGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    TargetGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TargetGroups;
}(v4_1.Entity));
exports.TargetGroups = TargetGroups;
var Campaigns_1 = require("./Campaigns");
(function (TargetGroups) {
    /**
     * Static representation of the [[targetGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TargetGroups.TARGET_GROUP_CODE = new v4_1.StringField('TargetGroupCode', TargetGroups, 'Edm.String');
    /**
     * Static representation of the [[targetGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TargetGroups.TARGET_GROUP_NAME = new v4_1.StringField('TargetGroupName', TargetGroups, 'Edm.String');
    /**
     * Static representation of the [[targetGroupsDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TargetGroups.TARGET_GROUPS_DETAILS = new v4_1.CollectionField('TargetGroupsDetails', TargetGroups, new TargetGroupsDetail_1.TargetGroupsDetailField('', TargetGroups));
    /**
     * Static representation of the one-to-many navigation property [[campaigns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TargetGroups.CAMPAIGNS = new v4_1.OneToManyLink('Campaigns', TargetGroups, Campaigns_1.Campaigns);
    /**
     * All fields of the TargetGroups entity.
     */
    TargetGroups._allFields = [
        TargetGroups.TARGET_GROUP_CODE,
        TargetGroups.TARGET_GROUP_NAME,
        TargetGroups.TARGET_GROUPS_DETAILS,
        TargetGroups.CAMPAIGNS
    ];
    /**
     * All fields selector.
     */
    TargetGroups.ALL_FIELDS = new v4_1.AllFields('*', TargetGroups);
    /**
     * All key fields of the TargetGroups entity.
     */
    TargetGroups._keyFields = [TargetGroups.TARGET_GROUP_CODE];
    /**
     * Mapping of all key field names to the respective static field property TargetGroups.
     */
    TargetGroups._keys = TargetGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TargetGroups = exports.TargetGroups || (exports.TargetGroups = {}));
exports.TargetGroups = TargetGroups;
//# sourceMappingURL=TargetGroups.js.map