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
exports.UserKeyParams = exports.UserKeyParamsField = exports.createUserKeyParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserKeyParams.build]] instead.
 */
function createUserKeyParams(json) {
    return UserKeyParams.build(json);
}
exports.createUserKeyParams = createUserKeyParams;
/**
 * UserKeyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserKeyParamsField = /** @class */ (function (_super) {
    __extends(UserKeyParamsField, _super);
    function UserKeyParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserKeyParams.tableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableName = new v4_1.ComplexTypeStringPropertyField('TableName', _this, 'Edm.String');
        /**
         * Representation of the [[UserKeyParams.keyIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyIndex = new v4_1.ComplexTypeNumberPropertyField('KeyIndex', _this, 'Edm.Int32');
        return _this;
    }
    return UserKeyParamsField;
}(v4_1.ComplexTypeField));
exports.UserKeyParamsField = UserKeyParamsField;
var UserKeyParams;
(function (UserKeyParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TableName: function (tableName) { return ({ tableName: v4_1.edmToTs(tableName, 'Edm.String') }); },
            KeyIndex: function (keyIndex) { return ({ keyIndex: v4_1.edmToTs(keyIndex, 'Edm.Int32') }); }
        });
    }
    UserKeyParams.build = build;
})(UserKeyParams = exports.UserKeyParams || (exports.UserKeyParams = {}));
//# sourceMappingURL=UserKeyParams.js.map