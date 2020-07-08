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
exports.QueryCategories = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var QueryCategoriesRequestBuilder_1 = require("./QueryCategoriesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "QueryCategories" of service "SAPB1".
 */
var QueryCategories = /** @class */ (function (_super) {
    __extends(QueryCategories, _super);
    function QueryCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `QueryCategories`.
     * @returns A builder that constructs instances of entity type `QueryCategories`.
     */
    QueryCategories.builder = function () {
        return v4_1.Entity.entityBuilder(QueryCategories);
    };
    /**
     * Returns a request builder to construct requests for operations on the `QueryCategories` entity type.
     * @returns A `QueryCategories` request builder.
     */
    QueryCategories.requestBuilder = function () {
        return new QueryCategoriesRequestBuilder_1.QueryCategoriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `QueryCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `QueryCategories`.
     */
    QueryCategories.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, QueryCategories);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    QueryCategories.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for QueryCategories.
     */
    QueryCategories._entityName = 'QueryCategories';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for QueryCategories.
     */
    QueryCategories._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    QueryCategories._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return QueryCategories;
}(v4_1.Entity));
exports.QueryCategories = QueryCategories;
var UserQueries_1 = require("./UserQueries");
(function (QueryCategories) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QueryCategories.CODE = new v4_1.NumberField('Code', QueryCategories, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QueryCategories.NAME = new v4_1.StringField('Name', QueryCategories, 'Edm.String');
    /**
     * Static representation of the [[permissions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QueryCategories.PERMISSIONS = new v4_1.StringField('Permissions', QueryCategories, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[userQueries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QueryCategories.USER_QUERIES = new v4_1.OneToManyLink('UserQueries', QueryCategories, UserQueries_1.UserQueries);
    /**
     * All fields of the QueryCategories entity.
     */
    QueryCategories._allFields = [
        QueryCategories.CODE,
        QueryCategories.NAME,
        QueryCategories.PERMISSIONS,
        QueryCategories.USER_QUERIES
    ];
    /**
     * All fields selector.
     */
    QueryCategories.ALL_FIELDS = new v4_1.AllFields('*', QueryCategories);
    /**
     * All key fields of the QueryCategories entity.
     */
    QueryCategories._keyFields = [QueryCategories.CODE];
    /**
     * Mapping of all key field names to the respective static field property QueryCategories.
     */
    QueryCategories._keys = QueryCategories._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(QueryCategories = exports.QueryCategories || (exports.QueryCategories = {}));
exports.QueryCategories = QueryCategories;
//# sourceMappingURL=QueryCategories.js.map