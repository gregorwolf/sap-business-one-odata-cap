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
exports.EmployeePreviousEmpoymentInfo = exports.EmployeePreviousEmpoymentInfoField = exports.createEmployeePreviousEmpoymentInfo = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EmployeePreviousEmpoymentInfo.build]] instead.
 */
function createEmployeePreviousEmpoymentInfo(json) {
    return EmployeePreviousEmpoymentInfo.build(json);
}
exports.createEmployeePreviousEmpoymentInfo = createEmployeePreviousEmpoymentInfo;
/**
 * EmployeePreviousEmpoymentInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeePreviousEmpoymentInfoField = /** @class */ (function (_super) {
    __extends(EmployeePreviousEmpoymentInfoField, _super);
    /**
     * Creates an instance of EmployeePreviousEmpoymentInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmployeePreviousEmpoymentInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmployeePreviousEmpoymentInfo) || this;
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.employeeNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeNo = new core_1.ComplexTypeNumberPropertyField('EmployeeNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.fromDtae]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDtae = new core_1.ComplexTypeDatePropertyField('FromDtae', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.toDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDate = new core_1.ComplexTypeDatePropertyField('ToDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.employer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employer = new core_1.ComplexTypeStringPropertyField('Employer', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.position]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.position = new core_1.ComplexTypeStringPropertyField('Position', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return EmployeePreviousEmpoymentInfoField;
}(core_1.ComplexTypeField));
exports.EmployeePreviousEmpoymentInfoField = EmployeePreviousEmpoymentInfoField;
var EmployeePreviousEmpoymentInfo;
(function (EmployeePreviousEmpoymentInfo) {
    /**
     * Metadata information on all properties of the `EmployeePreviousEmpoymentInfo` complex type.
     */
    EmployeePreviousEmpoymentInfo._propertyMetadata = [{
            originalName: 'EmployeeNo',
            name: 'employeeNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FromDtae',
            name: 'fromDtae',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ToDate',
            name: 'toDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Employer',
            name: 'employer',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Position',
            name: 'position',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EmployeePreviousEmpoymentInfo);
    }
    EmployeePreviousEmpoymentInfo.build = build;
})(EmployeePreviousEmpoymentInfo = exports.EmployeePreviousEmpoymentInfo || (exports.EmployeePreviousEmpoymentInfo = {}));
//# sourceMappingURL=EmployeePreviousEmpoymentInfo.js.map