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
exports.ResourceCapacities = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ResourceCapacitiesRequestBuilder_1 = require("./ResourceCapacitiesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ResourceCapacities" of service "SAPB1".
 */
var ResourceCapacities = /** @class */ (function (_super) {
    __extends(ResourceCapacities, _super);
    function ResourceCapacities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ResourceCapacities`.
     * @returns A builder that constructs instances of entity type `ResourceCapacities`.
     */
    ResourceCapacities.builder = function () {
        return core_1.EntityV4.entityBuilder(ResourceCapacities);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ResourceCapacities` entity type.
     * @returns A `ResourceCapacities` request builder.
     */
    ResourceCapacities.requestBuilder = function () {
        return new ResourceCapacitiesRequestBuilder_1.ResourceCapacitiesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ResourceCapacities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ResourceCapacities`.
     */
    ResourceCapacities.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ResourceCapacities);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ResourceCapacities.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ResourceCapacities.
     */
    ResourceCapacities._entityName = 'ResourceCapacities';
    /**
     * Default url path for the according service.
     */
    ResourceCapacities._defaultServicePath = '/b1s/v2/';
    return ResourceCapacities;
}(core_1.EntityV4));
exports.ResourceCapacities = ResourceCapacities;
var Resources_1 = require("./Resources");
var Warehouses_1 = require("./Warehouses");
(function (ResourceCapacities) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.ID = new core_1.NumberField('Id', ResourceCapacities, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.CODE = new core_1.StringField('Code', ResourceCapacities, 'Edm.String');
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.WAREHOUSE = new core_1.StringField('Warehouse', ResourceCapacities, 'Edm.String');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.DATE = new core_1.DateField('Date', ResourceCapacities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.TYPE = new core_1.EnumField('Type', ResourceCapacities);
    /**
     * Static representation of the [[capacity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.CAPACITY = new core_1.NumberField('Capacity', ResourceCapacities, 'Edm.Double');
    /**
     * Static representation of the [[sourceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.SOURCE_TYPE = new core_1.EnumField('SourceType', ResourceCapacities);
    /**
     * Static representation of the [[sourceEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.SOURCE_ENTRY = new core_1.NumberField('SourceEntry', ResourceCapacities, 'Edm.Int32');
    /**
     * Static representation of the [[sourceLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.SOURCE_LINE_NUM = new core_1.NumberField('SourceLineNum', ResourceCapacities, 'Edm.Int32');
    /**
     * Static representation of the [[baseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.BASE_TYPE = new core_1.EnumField('BaseType', ResourceCapacities);
    /**
     * Static representation of the [[baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.BASE_ENTRY = new core_1.NumberField('BaseEntry', ResourceCapacities, 'Edm.Int32');
    /**
     * Static representation of the [[baseLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.BASE_LINE_NUM = new core_1.NumberField('BaseLineNum', ResourceCapacities, 'Edm.Int32');
    /**
     * Static representation of the [[action]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.ACTION = new core_1.EnumField('Action', ResourceCapacities);
    /**
     * Static representation of the [[owningType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.OWNING_TYPE = new core_1.EnumField('OwningType', ResourceCapacities);
    /**
     * Static representation of the [[owningEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.OWNING_ENTRY = new core_1.NumberField('OwningEntry', ResourceCapacities, 'Edm.Int32');
    /**
     * Static representation of the [[owningLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.OWNING_LINE_NUM = new core_1.NumberField('OwningLineNum', ResourceCapacities, 'Edm.Int32');
    /**
     * Static representation of the [[revertedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.REVERTED_TYPE = new core_1.EnumField('RevertedType', ResourceCapacities);
    /**
     * Static representation of the [[revertedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.REVERTED_ENTRY = new core_1.NumberField('RevertedEntry', ResourceCapacities, 'Edm.Int32');
    /**
     * Static representation of the [[revertedLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.REVERTED_LINE_NUM = new core_1.NumberField('RevertedLineNum', ResourceCapacities, 'Edm.Int32');
    /**
     * Static representation of the [[memoSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.MEMO_SOURCE = new core_1.EnumField('MemoSource', ResourceCapacities);
    /**
     * Static representation of the [[memo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.MEMO = new core_1.StringField('Memo', ResourceCapacities, 'Edm.String');
    /**
     * Static representation of the [[singleRunCapacity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.SINGLE_RUN_CAPACITY = new core_1.NumberField('SingleRunCapacity', ResourceCapacities, 'Edm.Double');
    /**
     * Static representation of the [[singleRunMemoSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.SINGLE_RUN_MEMO_SOURCE = new core_1.EnumField('SingleRunMemoSource', ResourceCapacities);
    /**
     * Static representation of the [[singleRunMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.SINGLE_RUN_MEMO = new core_1.StringField('SingleRunMemo', ResourceCapacities, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[resource]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.RESOURCE = new core_1.OneToOneLink('Resource', ResourceCapacities, Resources_1.Resources);
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceCapacities.WAREHOUSE_2 = new core_1.OneToOneLink('Warehouse2', ResourceCapacities, Warehouses_1.Warehouses);
    /**
     * All fields of the ResourceCapacities entity.
     */
    ResourceCapacities._allFields = [
        ResourceCapacities.ID,
        ResourceCapacities.CODE,
        ResourceCapacities.WAREHOUSE,
        ResourceCapacities.DATE,
        ResourceCapacities.TYPE,
        ResourceCapacities.CAPACITY,
        ResourceCapacities.SOURCE_TYPE,
        ResourceCapacities.SOURCE_ENTRY,
        ResourceCapacities.SOURCE_LINE_NUM,
        ResourceCapacities.BASE_TYPE,
        ResourceCapacities.BASE_ENTRY,
        ResourceCapacities.BASE_LINE_NUM,
        ResourceCapacities.ACTION,
        ResourceCapacities.OWNING_TYPE,
        ResourceCapacities.OWNING_ENTRY,
        ResourceCapacities.OWNING_LINE_NUM,
        ResourceCapacities.REVERTED_TYPE,
        ResourceCapacities.REVERTED_ENTRY,
        ResourceCapacities.REVERTED_LINE_NUM,
        ResourceCapacities.MEMO_SOURCE,
        ResourceCapacities.MEMO,
        ResourceCapacities.SINGLE_RUN_CAPACITY,
        ResourceCapacities.SINGLE_RUN_MEMO_SOURCE,
        ResourceCapacities.SINGLE_RUN_MEMO,
        ResourceCapacities.RESOURCE,
        ResourceCapacities.WAREHOUSE_2
    ];
    /**
     * All fields selector.
     */
    ResourceCapacities.ALL_FIELDS = new core_1.AllFields('*', ResourceCapacities);
    /**
     * All key fields of the ResourceCapacities entity.
     */
    ResourceCapacities._keyFields = [ResourceCapacities.ID];
    /**
     * Mapping of all key field names to the respective static field property ResourceCapacities.
     */
    ResourceCapacities._keys = ResourceCapacities._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ResourceCapacities = exports.ResourceCapacities || (exports.ResourceCapacities = {}));
exports.ResourceCapacities = ResourceCapacities;
//# sourceMappingURL=ResourceCapacities.js.map