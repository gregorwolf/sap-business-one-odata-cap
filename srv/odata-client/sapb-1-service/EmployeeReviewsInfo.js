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
exports.EmployeeReviewsInfo = exports.EmployeeReviewsInfoField = exports.createEmployeeReviewsInfo = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeReviewsInfo.build]] instead.
 */
function createEmployeeReviewsInfo(json) {
    return EmployeeReviewsInfo.build(json);
}
exports.createEmployeeReviewsInfo = createEmployeeReviewsInfo;
/**
 * EmployeeReviewsInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeReviewsInfoField = /** @class */ (function (_super) {
    __extends(EmployeeReviewsInfoField, _super);
    /**
     * Creates an instance of EmployeeReviewsInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmployeeReviewsInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmployeeReviewsInfo) || this;
        /**
         * Representation of the [[EmployeeReviewsInfo.employeeNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeNo = new core_1.ComplexTypeNumberPropertyField('EmployeeNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeReviewsInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeReviewsInfo.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new core_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeReviewsInfo.reviewDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reviewDescription = new core_1.ComplexTypeStringPropertyField('ReviewDescription', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeReviewsInfo.manager]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manager = new core_1.ComplexTypeNumberPropertyField('Manager', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeReviewsInfo.grade]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grade = new core_1.ComplexTypeStringPropertyField('Grade', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeReviewsInfo.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return EmployeeReviewsInfoField;
}(core_1.ComplexTypeField));
exports.EmployeeReviewsInfoField = EmployeeReviewsInfoField;
var EmployeeReviewsInfo;
(function (EmployeeReviewsInfo) {
    /**
     * Metadata information on all properties of the `EmployeeReviewsInfo` complex type.
     */
    EmployeeReviewsInfo._propertyMetadata = [{
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
            originalName: 'Date',
            name: 'date',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ReviewDescription',
            name: 'reviewDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Manager',
            name: 'manager',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Grade',
            name: 'grade',
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
        return core_1.deserializeComplexTypeV4(json, EmployeeReviewsInfo);
    }
    EmployeeReviewsInfo.build = build;
})(EmployeeReviewsInfo = exports.EmployeeReviewsInfo || (exports.EmployeeReviewsInfo = {}));
//# sourceMappingURL=EmployeeReviewsInfo.js.map