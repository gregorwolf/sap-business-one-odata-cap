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
exports.UserObjectMdChildTable = exports.UserObjectMdChildTableField = exports.createUserObjectMdChildTable = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function UserObjectMdChildTableField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserObjectMdChildTable.sonNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sonNumber = new v4_1.ComplexTypeNumberPropertyField('SonNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdChildTable.tableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableName = new v4_1.ComplexTypeStringPropertyField('TableName', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdChildTable.logTableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logTableName = new v4_1.ComplexTypeStringPropertyField('LogTableName', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdChildTable.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdChildTable.objectName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectName = new v4_1.ComplexTypeStringPropertyField('ObjectName', _this, 'Edm.String');
        return _this;
    }
    return UserObjectMdChildTableField;
}(v4_1.ComplexTypeField));
exports.UserObjectMdChildTableField = UserObjectMdChildTableField;
var UserObjectMdChildTable;
(function (UserObjectMdChildTable) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SonNumber: function (sonNumber) { return ({ sonNumber: v4_1.edmToTs(sonNumber, 'Edm.Int32') }); },
            TableName: function (tableName) { return ({ tableName: v4_1.edmToTs(tableName, 'Edm.String') }); },
            LogTableName: function (logTableName) { return ({ logTableName: v4_1.edmToTs(logTableName, 'Edm.String') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            ObjectName: function (objectName) { return ({ objectName: v4_1.edmToTs(objectName, 'Edm.String') }); }
        });
    }
    UserObjectMdChildTable.build = build;
})(UserObjectMdChildTable = exports.UserObjectMdChildTable || (exports.UserObjectMdChildTable = {}));
//# sourceMappingURL=UserObjectMdChildTable.js.map