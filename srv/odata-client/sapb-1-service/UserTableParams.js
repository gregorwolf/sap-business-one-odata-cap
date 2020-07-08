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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTableParams = exports.UserTableParamsField = exports.createUserTableParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function UserTableParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserTableParams.tableType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableType = new v4_1.ComplexTypeStringPropertyField('TableType', _this, 'Edm.String');
        /**
         * Representation of the [[UserTableParams.tableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableName = new v4_1.ComplexTypeStringPropertyField('TableName', _this, 'Edm.String');
        /**
         * Representation of the [[UserTableParams.tableDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableDescription = new v4_1.ComplexTypeStringPropertyField('TableDescription', _this, 'Edm.String');
        /**
         * Representation of the [[UserTableParams.archiveDateField]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.archiveDateField = new v4_1.ComplexTypeStringPropertyField('ArchiveDateField', _this, 'Edm.String');
        /**
         * Representation of the [[UserTableParams.archivable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.archivable = new v4_1.ComplexTypeStringPropertyField('Archivable', _this, 'Edm.String');
        return _this;
    }
    return UserTableParamsField;
}(v4_1.ComplexTypeField));
exports.UserTableParamsField = UserTableParamsField;
var UserTableParams;
(function (UserTableParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TableType: function (tableType) { return ({ tableType: v4_1.edmToTs(tableType, 'Edm.String') }); },
            TableName: function (tableName) { return ({ tableName: v4_1.edmToTs(tableName, 'Edm.String') }); },
            TableDescription: function (tableDescription) { return ({ tableDescription: v4_1.edmToTs(tableDescription, 'Edm.String') }); },
            ArchiveDateField: function (archiveDateField) { return ({ archiveDateField: v4_1.edmToTs(archiveDateField, 'Edm.String') }); },
            Archivable: function (archivable) { return ({ archivable: v4_1.edmToTs(archivable, 'Edm.String') }); }
        });
    }
    UserTableParams.build = build;
})(UserTableParams = exports.UserTableParams || (exports.UserTableParams = {}));
//# sourceMappingURL=UserTableParams.js.map