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
exports.UserObjectMdChildTable = exports.UserObjectMdChildTableField = exports.createUserObjectMdChildTable = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdChildTable.build]] instead.
 */
function createUserObjectMdChildTable(json) {
    return UserObjectMdChildTable.build(json);
}
exports.createUserObjectMdChildTable = createUserObjectMdChildTable;
/**
 * UserObjectMdChildTableField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserObjectMdChildTableField = /** @class */ (function (_super) {
    __extends(UserObjectMdChildTableField, _super);
    /**
     * Creates an instance of UserObjectMdChildTableField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserObjectMdChildTableField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserObjectMdChildTable) || this;
        /**
         * Representation of the [[UserObjectMdChildTable.sonNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sonNumber = new core_1.ComplexTypeNumberPropertyField('SonNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdChildTable.tableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableName = new core_1.ComplexTypeStringPropertyField('TableName', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdChildTable.logTableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logTableName = new core_1.ComplexTypeStringPropertyField('LogTableName', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdChildTable.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdChildTable.objectName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectName = new core_1.ComplexTypeStringPropertyField('ObjectName', _this, 'Edm.String');
        return _this;
    }
    return UserObjectMdChildTableField;
}(core_1.ComplexTypeField));
exports.UserObjectMdChildTableField = UserObjectMdChildTableField;
var UserObjectMdChildTable;
(function (UserObjectMdChildTable) {
    /**
     * Metadata information on all properties of the `UserObjectMdChildTable` complex type.
     */
    UserObjectMdChildTable._propertyMetadata = [{
            originalName: 'SonNumber',
            name: 'sonNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TableName',
            name: 'tableName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LogTableName',
            name: 'logTableName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ObjectName',
            name: 'objectName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserObjectMdChildTable);
    }
    UserObjectMdChildTable.build = build;
})(UserObjectMdChildTable = exports.UserObjectMdChildTable || (exports.UserObjectMdChildTable = {}));
//# sourceMappingURL=UserObjectMdChildTable.js.map