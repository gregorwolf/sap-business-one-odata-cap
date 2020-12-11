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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTableParams = exports.UserTableParamsField = exports.createUserTableParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserTableParams.build]] instead.
 */
function createUserTableParams(json) {
    return UserTableParams.build(json);
}
exports.createUserTableParams = createUserTableParams;
/**
 * UserTableParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserTableParamsField = /** @class */ (function (_super) {
    __extends(UserTableParamsField, _super);
    /**
     * Creates an instance of UserTableParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserTableParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserTableParams) || this;
        /**
         * Representation of the [[UserTableParams.tableType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableType = new core_1.ComplexTypeStringPropertyField('TableType', _this, 'Edm.String');
        /**
         * Representation of the [[UserTableParams.tableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableName = new core_1.ComplexTypeStringPropertyField('TableName', _this, 'Edm.String');
        /**
         * Representation of the [[UserTableParams.tableDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableDescription = new core_1.ComplexTypeStringPropertyField('TableDescription', _this, 'Edm.String');
        /**
         * Representation of the [[UserTableParams.archiveDateField]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.archiveDateField = new core_1.ComplexTypeStringPropertyField('ArchiveDateField', _this, 'Edm.String');
        /**
         * Representation of the [[UserTableParams.archivable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.archivable = new core_1.ComplexTypeStringPropertyField('Archivable', _this, 'Edm.String');
        return _this;
    }
    return UserTableParamsField;
}(core_1.ComplexTypeField));
exports.UserTableParamsField = UserTableParamsField;
var UserTableParams;
(function (UserTableParams) {
    /**
     * Metadata information on all properties of the `UserTableParams` complex type.
     */
    UserTableParams._propertyMetadata = [{
            originalName: 'TableType',
            name: 'tableType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TableName',
            name: 'tableName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TableDescription',
            name: 'tableDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ArchiveDateField',
            name: 'archiveDateField',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Archivable',
            name: 'archivable',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserTableParams);
    }
    UserTableParams.build = build;
})(UserTableParams = exports.UserTableParams || (exports.UserTableParams = {}));
//# sourceMappingURL=UserTableParams.js.map