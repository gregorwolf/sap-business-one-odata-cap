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
exports.ApprovalTemplateUser = exports.ApprovalTemplateUserField = exports.createApprovalTemplateUser = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ApprovalTemplateUserField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ApprovalTemplateUserField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ApprovalTemplateUser) || this;
        /**
         * Representation of the [[ApprovalTemplateUser.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new core_1.ComplexTypeNumberPropertyField('UserID', _this, 'Edm.Int32');
        return _this;
    }
    return ApprovalTemplateUserField;
}(core_1.ComplexTypeField));
exports.ApprovalTemplateUserField = ApprovalTemplateUserField;
var ApprovalTemplateUser;
(function (ApprovalTemplateUser) {
    /**
     * Metadata information on all properties of the `ApprovalTemplateUser` complex type.
     */
    ApprovalTemplateUser._propertyMetadata = [{
            originalName: 'UserID',
            name: 'userId',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ApprovalTemplateUser);
    }
    ApprovalTemplateUser.build = build;
})(ApprovalTemplateUser = exports.ApprovalTemplateUser || (exports.ApprovalTemplateUser = {}));
//# sourceMappingURL=ApprovalTemplateUser.js.map