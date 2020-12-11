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
exports.EnhancedDiscountGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EnhancedDiscountGroupsRequestBuilder_1 = require("./EnhancedDiscountGroupsRequestBuilder");
var DiscountGroupLine_1 = require("./DiscountGroupLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EnhancedDiscountGroups" of service "SAPB1".
 */
var EnhancedDiscountGroups = /** @class */ (function (_super) {
    __extends(EnhancedDiscountGroups, _super);
    function EnhancedDiscountGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `EnhancedDiscountGroups`.
     * @returns A builder that constructs instances of entity type `EnhancedDiscountGroups`.
     */
    EnhancedDiscountGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(EnhancedDiscountGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EnhancedDiscountGroups` entity type.
     * @returns A `EnhancedDiscountGroups` request builder.
     */
    EnhancedDiscountGroups.requestBuilder = function () {
        return new EnhancedDiscountGroupsRequestBuilder_1.EnhancedDiscountGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EnhancedDiscountGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EnhancedDiscountGroups`.
     */
    EnhancedDiscountGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, EnhancedDiscountGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EnhancedDiscountGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EnhancedDiscountGroups.
     */
    EnhancedDiscountGroups._entityName = 'EnhancedDiscountGroups';
    /**
     * Default url path for the according service.
     */
    EnhancedDiscountGroups._defaultServicePath = '/b1s/v2/';
    return EnhancedDiscountGroups;
}(core_1.EntityV4));
exports.EnhancedDiscountGroups = EnhancedDiscountGroups;
(function (EnhancedDiscountGroups) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EnhancedDiscountGroups.ABS_ENTRY = new core_1.NumberField('AbsEntry', EnhancedDiscountGroups, 'Edm.Int32');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EnhancedDiscountGroups.TYPE = new core_1.EnumField('Type', EnhancedDiscountGroups);
    /**
     * Static representation of the [[objectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EnhancedDiscountGroups.OBJECT_CODE = new core_1.StringField('ObjectCode', EnhancedDiscountGroups, 'Edm.String');
    /**
     * Static representation of the [[discountRelations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EnhancedDiscountGroups.DISCOUNT_RELATIONS = new core_1.EnumField('DiscountRelations', EnhancedDiscountGroups);
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EnhancedDiscountGroups.ACTIVE = new core_1.EnumField('Active', EnhancedDiscountGroups);
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EnhancedDiscountGroups.VALID_FROM = new core_1.DateField('ValidFrom', EnhancedDiscountGroups, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EnhancedDiscountGroups.VALID_TO = new core_1.DateField('ValidTo', EnhancedDiscountGroups, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[discountGroupLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EnhancedDiscountGroups.DISCOUNT_GROUP_LINE_COLLECTION = new core_1.CollectionField('DiscountGroupLineCollection', EnhancedDiscountGroups, DiscountGroupLine_1.DiscountGroupLine);
    /**
     * All fields of the EnhancedDiscountGroups entity.
     */
    EnhancedDiscountGroups._allFields = [
        EnhancedDiscountGroups.ABS_ENTRY,
        EnhancedDiscountGroups.TYPE,
        EnhancedDiscountGroups.OBJECT_CODE,
        EnhancedDiscountGroups.DISCOUNT_RELATIONS,
        EnhancedDiscountGroups.ACTIVE,
        EnhancedDiscountGroups.VALID_FROM,
        EnhancedDiscountGroups.VALID_TO,
        EnhancedDiscountGroups.DISCOUNT_GROUP_LINE_COLLECTION
    ];
    /**
     * All fields selector.
     */
    EnhancedDiscountGroups.ALL_FIELDS = new core_1.AllFields('*', EnhancedDiscountGroups);
    /**
     * All key fields of the EnhancedDiscountGroups entity.
     */
    EnhancedDiscountGroups._keyFields = [EnhancedDiscountGroups.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property EnhancedDiscountGroups.
     */
    EnhancedDiscountGroups._keys = EnhancedDiscountGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EnhancedDiscountGroups = exports.EnhancedDiscountGroups || (exports.EnhancedDiscountGroups = {}));
exports.EnhancedDiscountGroups = EnhancedDiscountGroups;
//# sourceMappingURL=EnhancedDiscountGroups.js.map