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
exports.EmployeeAbsenceInfo = exports.EmployeeAbsenceInfoField = exports.createEmployeeAbsenceInfo = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeAbsenceInfo.build]] instead.
 */
function createEmployeeAbsenceInfo(json) {
    return EmployeeAbsenceInfo.build(json);
}
exports.createEmployeeAbsenceInfo = createEmployeeAbsenceInfo;
/**
 * EmployeeAbsenceInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeAbsenceInfoField = /** @class */ (function (_super) {
    __extends(EmployeeAbsenceInfoField, _super);
    /**
     * Creates an instance of EmployeeAbsenceInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmployeeAbsenceInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmployeeAbsenceInfo) || this;
        /**
         * Representation of the [[EmployeeAbsenceInfo.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new core_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeAbsenceInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeAbsenceInfo.fromDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDate = new core_1.ComplexTypeDatePropertyField('FromDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeAbsenceInfo.toDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDate = new core_1.ComplexTypeDatePropertyField('ToDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeAbsenceInfo.reason]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reason = new core_1.ComplexTypeStringPropertyField('Reason', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeAbsenceInfo.approvedBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approvedBy = new core_1.ComplexTypeStringPropertyField('ApprovedBy', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeAbsenceInfo.confirmerNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.confirmerNumber = new core_1.ComplexTypeNumberPropertyField('ConfirmerNumber', _this, 'Edm.Int32');
        return _this;
    }
    return EmployeeAbsenceInfoField;
}(core_1.ComplexTypeField));
exports.EmployeeAbsenceInfoField = EmployeeAbsenceInfoField;
var EmployeeAbsenceInfo;
(function (EmployeeAbsenceInfo) {
    /**
     * Metadata information on all properties of the `EmployeeAbsenceInfo` complex type.
     */
    EmployeeAbsenceInfo._propertyMetadata = [{
            originalName: 'EmployeeID',
            name: 'employeeId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FromDate',
            name: 'fromDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ToDate',
            name: 'toDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Reason',
            name: 'reason',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ApprovedBy',
            name: 'approvedBy',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ConfirmerNumber',
            name: 'confirmerNumber',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EmployeeAbsenceInfo);
    }
    EmployeeAbsenceInfo.build = build;
})(EmployeeAbsenceInfo = exports.EmployeeAbsenceInfo || (exports.EmployeeAbsenceInfo = {}));
//# sourceMappingURL=EmployeeAbsenceInfo.js.map