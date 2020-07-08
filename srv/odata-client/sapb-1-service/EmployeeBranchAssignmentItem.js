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
exports.EmployeeBranchAssignmentItem = exports.EmployeeBranchAssignmentItemField = exports.createEmployeeBranchAssignmentItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function EmployeeBranchAssignmentItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeBranchAssignmentItem.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new v4_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeBranchAssignmentItem.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new v4_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        return _this;
    }
    return EmployeeBranchAssignmentItemField;
}(v4_1.ComplexTypeField));
exports.EmployeeBranchAssignmentItemField = EmployeeBranchAssignmentItemField;
var EmployeeBranchAssignmentItem;
(function (EmployeeBranchAssignmentItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EmployeeID: function (employeeId) { return ({ employeeId: v4_1.edmToTs(employeeId, 'Edm.Int32') }); },
            BPLID: function (bplid) { return ({ bplid: v4_1.edmToTs(bplid, 'Edm.Int32') }); }
        });
    }
    EmployeeBranchAssignmentItem.build = build;
})(EmployeeBranchAssignmentItem = exports.EmployeeBranchAssignmentItem || (exports.EmployeeBranchAssignmentItem = {}));
//# sourceMappingURL=EmployeeBranchAssignmentItem.js.map