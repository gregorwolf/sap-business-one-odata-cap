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
exports.UserQueries = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserQueriesRequestBuilder_1 = require("./UserQueriesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "UserQueries" of service "SAPB1".
 */
var UserQueries = /** @class */ (function (_super) {
    __extends(UserQueries, _super);
    function UserQueries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UserQueries`.
     * @returns A builder that constructs instances of entity type `UserQueries`.
     */
    UserQueries.builder = function () {
        return v4_1.Entity.entityBuilder(UserQueries);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserQueries` entity type.
     * @returns A `UserQueries` request builder.
     */
    UserQueries.requestBuilder = function () {
        return new UserQueriesRequestBuilder_1.UserQueriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserQueries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserQueries`.
     */
    UserQueries.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, UserQueries);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserQueries.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserQueries.
     */
    UserQueries._entityName = 'UserQueries';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserQueries.
     */
    UserQueries._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    UserQueries._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UserQueries;
}(v4_1.Entity));
exports.UserQueries = UserQueries;
var QueryCategories_1 = require("./QueryCategories");
(function (UserQueries) {
    /**
     * Static representation of the [[internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserQueries.INTERNAL_KEY = new v4_1.NumberField('InternalKey', UserQueries, 'Edm.Int32');
    /**
     * Static representation of the [[queryCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserQueries.QUERY_CATEGORY = new v4_1.NumberField('QueryCategory', UserQueries, 'Edm.Int32');
    /**
     * Static representation of the [[queryDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserQueries.QUERY_DESCRIPTION = new v4_1.StringField('QueryDescription', UserQueries, 'Edm.String');
    /**
     * Static representation of the [[query]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserQueries.QUERY = new v4_1.StringField('Query', UserQueries, 'Edm.String');
    /**
     * Static representation of the [[procedureAlias]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserQueries.PROCEDURE_ALIAS = new v4_1.StringField('ProcedureAlias', UserQueries, 'Edm.String');
    /**
     * Static representation of the [[procedureName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserQueries.PROCEDURE_NAME = new v4_1.StringField('ProcedureName', UserQueries, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[queryCategory2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserQueries.QUERY_CATEGORY_2 = new v4_1.OneToOneLink('QueryCategory2', UserQueries, QueryCategories_1.QueryCategories);
    /**
     * All fields of the UserQueries entity.
     */
    UserQueries._allFields = [
        UserQueries.INTERNAL_KEY,
        UserQueries.QUERY_CATEGORY,
        UserQueries.QUERY_DESCRIPTION,
        UserQueries.QUERY,
        UserQueries.PROCEDURE_ALIAS,
        UserQueries.PROCEDURE_NAME,
        UserQueries.QUERY_CATEGORY_2
    ];
    /**
     * All fields selector.
     */
    UserQueries.ALL_FIELDS = new v4_1.AllFields('*', UserQueries);
    /**
     * All key fields of the UserQueries entity.
     */
    UserQueries._keyFields = [UserQueries.INTERNAL_KEY, UserQueries.QUERY_CATEGORY];
    /**
     * Mapping of all key field names to the respective static field property UserQueries.
     */
    UserQueries._keys = UserQueries._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserQueries = exports.UserQueries || (exports.UserQueries = {}));
exports.UserQueries = UserQueries;
//# sourceMappingURL=UserQueries.js.map