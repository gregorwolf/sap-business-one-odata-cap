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
exports.UserBranchAssignmentItem = exports.UserBranchAssignmentItemField = exports.createUserBranchAssignmentItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserBranchAssignmentItem.build]] instead.
 */
function createUserBranchAssignmentItem(json) {
    return UserBranchAssignmentItem.build(json);
}
exports.createUserBranchAssignmentItem = createUserBranchAssignmentItem;
/**
 * UserBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserBranchAssignmentItemField = /** @class */ (function (_super) {
    __extends(UserBranchAssignmentItemField, _super);
    function UserBranchAssignmentItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserBranchAssignmentItem.userCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userCode = new v4_1.ComplexTypeStringPropertyField('UserCode', _this, 'Edm.String');
        /**
         * Representation of the [[UserBranchAssignmentItem.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new v4_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        return _this;
    }
    return UserBranchAssignmentItemField;
}(v4_1.ComplexTypeField));
exports.UserBranchAssignmentItemField = UserBranchAssignmentItemField;
var UserBranchAssignmentItem;
(function (UserBranchAssignmentItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            UserCode: function (userCode) { return ({ userCode: v4_1.edmToTs(userCode, 'Edm.String') }); },
            BPLID: function (bplid) { return ({ bplid: v4_1.edmToTs(bplid, 'Edm.Int32') }); }
        });
    }
    UserBranchAssignmentItem.build = build;
})(UserBranchAssignmentItem = exports.UserBranchAssignmentItem || (exports.UserBranchAssignmentItem = {}));
//# sourceMappingURL=UserBranchAssignmentItem.js.map