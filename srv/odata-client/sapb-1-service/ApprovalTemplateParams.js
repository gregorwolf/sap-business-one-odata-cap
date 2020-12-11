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
exports.ApprovalTemplateParams = exports.ApprovalTemplateParamsField = exports.createApprovalTemplateParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateParams.build]] instead.
 */
function createApprovalTemplateParams(json) {
    return ApprovalTemplateParams.build(json);
}
exports.createApprovalTemplateParams = createApprovalTemplateParams;
/**
 * ApprovalTemplateParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ApprovalTemplateParamsField = /** @class */ (function (_super) {
    __extends(ApprovalTemplateParamsField, _super);
    /**
     * Creates an instance of ApprovalTemplateParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ApprovalTemplateParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ApprovalTemplateParams) || this;
        /**
         * Representation of the [[ApprovalTemplateParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalTemplateParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return ApprovalTemplateParamsField;
}(core_1.ComplexTypeField));
exports.ApprovalTemplateParamsField = ApprovalTemplateParamsField;
var ApprovalTemplateParams;
(function (ApprovalTemplateParams) {
    /**
     * Metadata information on all properties of the `ApprovalTemplateParams` complex type.
     */
    ApprovalTemplateParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ApprovalTemplateParams);
    }
    ApprovalTemplateParams.build = build;
})(ApprovalTemplateParams = exports.ApprovalTemplateParams || (exports.ApprovalTemplateParams = {}));
//# sourceMappingURL=ApprovalTemplateParams.js.map