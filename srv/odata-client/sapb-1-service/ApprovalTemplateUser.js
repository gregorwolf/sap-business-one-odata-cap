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
exports.ApprovalTemplateUser = exports.ApprovalTemplateUserField = exports.createApprovalTemplateUser = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateUser.build]] instead.
 */
function createApprovalTemplateUser(json) {
    return ApprovalTemplateUser.build(json);
}
exports.createApprovalTemplateUser = createApprovalTemplateUser;
/**
 * ApprovalTemplateUserField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ApprovalTemplateUserField = /** @class */ (function (_super) {
    __extends(ApprovalTemplateUserField, _super);
    function ApprovalTemplateUserField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ApprovalTemplateUser.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new v4_1.ComplexTypeNumberPropertyField('UserID', _this, 'Edm.Int32');
        return _this;
    }
    return ApprovalTemplateUserField;
}(v4_1.ComplexTypeField));
exports.ApprovalTemplateUserField = ApprovalTemplateUserField;
var ApprovalTemplateUser;
(function (ApprovalTemplateUser) {
    function build(json) {
        return v4_1.createComplexType(json, {
            UserID: function (userId) { return ({ userId: v4_1.edmToTs(userId, 'Edm.Int32') }); }
        });
    }
    ApprovalTemplateUser.build = build;
})(ApprovalTemplateUser = exports.ApprovalTemplateUser || (exports.ApprovalTemplateUser = {}));
//# sourceMappingURL=ApprovalTemplateUser.js.map