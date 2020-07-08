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
exports.UserObjectMdFindColumn = exports.UserObjectMdFindColumnField = exports.createUserObjectMdFindColumn = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFindColumn.build]] instead.
 */
function createUserObjectMdFindColumn(json) {
    return UserObjectMdFindColumn.build(json);
}
exports.createUserObjectMdFindColumn = createUserObjectMdFindColumn;
/**
 * UserObjectMdFindColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserObjectMdFindColumnField = /** @class */ (function (_super) {
    __extends(UserObjectMdFindColumnField, _super);
    function UserObjectMdFindColumnField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserObjectMdFindColumn.columnNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnNumber = new v4_1.ComplexTypeNumberPropertyField('ColumnNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdFindColumn.columnAlias]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnAlias = new v4_1.ComplexTypeStringPropertyField('ColumnAlias', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdFindColumn.columnDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnDescription = new v4_1.ComplexTypeStringPropertyField('ColumnDescription', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdFindColumn.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        return _this;
    }
    return UserObjectMdFindColumnField;
}(v4_1.ComplexTypeField));
exports.UserObjectMdFindColumnField = UserObjectMdFindColumnField;
var UserObjectMdFindColumn;
(function (UserObjectMdFindColumn) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ColumnNumber: function (columnNumber) { return ({ columnNumber: v4_1.edmToTs(columnNumber, 'Edm.Int32') }); },
            ColumnAlias: function (columnAlias) { return ({ columnAlias: v4_1.edmToTs(columnAlias, 'Edm.String') }); },
            ColumnDescription: function (columnDescription) { return ({ columnDescription: v4_1.edmToTs(columnDescription, 'Edm.String') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); }
        });
    }
    UserObjectMdFindColumn.build = build;
})(UserObjectMdFindColumn = exports.UserObjectMdFindColumn || (exports.UserObjectMdFindColumn = {}));
//# sourceMappingURL=UserObjectMdFindColumn.js.map