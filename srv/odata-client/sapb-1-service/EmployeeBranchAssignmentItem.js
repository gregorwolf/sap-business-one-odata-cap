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
exports.EmployeeBranchAssignmentItem = exports.EmployeeBranchAssignmentItemField = exports.createEmployeeBranchAssignmentItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeBranchAssignmentItem.build]] instead.
 */
function createEmployeeBranchAssignmentItem(json) {
    return EmployeeBranchAssignmentItem.build(json);
}
exports.createEmployeeBranchAssignmentItem = createEmployeeBranchAssignmentItem;
/**
 * EmployeeBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeBranchAssignmentItemField = /** @class */ (function (_super) {
    __extends(EmployeeBranchAssignmentItemField, _super);
    /**
     * Creates an instance of EmployeeBranchAssignmentItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmployeeBranchAssignmentItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmployeeBranchAssignmentItem) || this;
        /**
         * Representation of the [[EmployeeBranchAssignmentItem.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new core_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeBranchAssignmentItem.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new core_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        return _this;
    }
    return EmployeeBranchAssignmentItemField;
}(core_1.ComplexTypeField));
exports.EmployeeBranchAssignmentItemField = EmployeeBranchAssignmentItemField;
var EmployeeBranchAssignmentItem;
(function (EmployeeBranchAssignmentItem) {
    /**
     * Metadata information on all properties of the `EmployeeBranchAssignmentItem` complex type.
     */
    EmployeeBranchAssignmentItem._propertyMetadata = [{
            originalName: 'EmployeeID',
            name: 'employeeId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BPLID',
            name: 'bplid',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EmployeeBranchAssignmentItem);
    }
    EmployeeBranchAssignmentItem.build = build;
})(EmployeeBranchAssignmentItem = exports.EmployeeBranchAssignmentItem || (exports.EmployeeBranchAssignmentItem = {}));
//# sourceMappingURL=EmployeeBranchAssignmentItem.js.map