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
exports.QueryAuthGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var QueryAuthGroupsRequestBuilder_1 = require("./QueryAuthGroupsRequestBuilder");
var CategoryGroup_1 = require("./CategoryGroup");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "QueryAuthGroups" of service "SAPB1".
 */
var QueryAuthGroups = /** @class */ (function (_super) {
    __extends(QueryAuthGroups, _super);
    function QueryAuthGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `QueryAuthGroups`.
     * @returns A builder that constructs instances of entity type `QueryAuthGroups`.
     */
    QueryAuthGroups.builder = function () {
        return v4_1.Entity.entityBuilder(QueryAuthGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `QueryAuthGroups` entity type.
     * @returns A `QueryAuthGroups` request builder.
     */
    QueryAuthGroups.requestBuilder = function () {
        return new QueryAuthGroupsRequestBuilder_1.QueryAuthGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `QueryAuthGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `QueryAuthGroups`.
     */
    QueryAuthGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, QueryAuthGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    QueryAuthGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for QueryAuthGroups.
     */
    QueryAuthGroups._entityName = 'QueryAuthGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for QueryAuthGroups.
     */
    QueryAuthGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    QueryAuthGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return QueryAuthGroups;
}(v4_1.Entity));
exports.QueryAuthGroups = QueryAuthGroups;
(function (QueryAuthGroups) {
    /**
     * Static representation of the [[authGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QueryAuthGroups.AUTH_GROUP_CODE = new v4_1.StringField('AuthGroupCode', QueryAuthGroups, 'Edm.String');
    /**
     * Static representation of the [[authGroupDes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QueryAuthGroups.AUTH_GROUP_DES = new v4_1.StringField('AuthGroupDes', QueryAuthGroups, 'Edm.String');
    /**
     * Static representation of the [[authGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QueryAuthGroups.AUTH_GROUP_ID = new v4_1.NumberField('AuthGroupId', QueryAuthGroups, 'Edm.Int32');
    /**
     * Static representation of the [[categoryGroupCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QueryAuthGroups.CATEGORY_GROUP_COLLECTION = new v4_1.CollectionField('CategoryGroupCollection', QueryAuthGroups, new CategoryGroup_1.CategoryGroupField('', QueryAuthGroups));
    /**
     * All fields of the QueryAuthGroups entity.
     */
    QueryAuthGroups._allFields = [
        QueryAuthGroups.AUTH_GROUP_CODE,
        QueryAuthGroups.AUTH_GROUP_DES,
        QueryAuthGroups.AUTH_GROUP_ID,
        QueryAuthGroups.CATEGORY_GROUP_COLLECTION
    ];
    /**
     * All fields selector.
     */
    QueryAuthGroups.ALL_FIELDS = new v4_1.AllFields('*', QueryAuthGroups);
    /**
     * All key fields of the QueryAuthGroups entity.
     */
    QueryAuthGroups._keyFields = [QueryAuthGroups.AUTH_GROUP_ID];
    /**
     * Mapping of all key field names to the respective static field property QueryAuthGroups.
     */
    QueryAuthGroups._keys = QueryAuthGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(QueryAuthGroups = exports.QueryAuthGroups || (exports.QueryAuthGroups = {}));
exports.QueryAuthGroups = QueryAuthGroups;
//# sourceMappingURL=QueryAuthGroups.js.map