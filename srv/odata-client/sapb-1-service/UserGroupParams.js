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
exports.UserGroupParams = exports.UserGroupParamsField = exports.createUserGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserGroupParams.build]] instead.
 */
function createUserGroupParams(json) {
    return UserGroupParams.build(json);
}
exports.createUserGroupParams = createUserGroupParams;
/**
 * UserGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserGroupParamsField = /** @class */ (function (_super) {
    __extends(UserGroupParamsField, _super);
    function UserGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserGroupParams.userGroupId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userGroupId = new v4_1.ComplexTypeNumberPropertyField('UserGroupId', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserGroupParams.userGroupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userGroupName = new v4_1.ComplexTypeStringPropertyField('UserGroupName', _this, 'Edm.String');
        return _this;
    }
    return UserGroupParamsField;
}(v4_1.ComplexTypeField));
exports.UserGroupParamsField = UserGroupParamsField;
var UserGroupParams;
(function (UserGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            UserGroupId: function (userGroupId) { return ({ userGroupId: v4_1.edmToTs(userGroupId, 'Edm.Int32') }); },
            UserGroupName: function (userGroupName) { return ({ userGroupName: v4_1.edmToTs(userGroupName, 'Edm.String') }); }
        });
    }
    UserGroupParams.build = build;
})(UserGroupParams = exports.UserGroupParams || (exports.UserGroupParams = {}));
//# sourceMappingURL=UserGroupParams.js.map