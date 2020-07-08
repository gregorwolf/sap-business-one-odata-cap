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
exports.EmployeeReviewsInfo = exports.EmployeeReviewsInfoField = exports.createEmployeeReviewsInfo = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function EmployeeReviewsInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeReviewsInfo.employeeNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeNo = new v4_1.ComplexTypeNumberPropertyField('EmployeeNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeReviewsInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeReviewsInfo.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeReviewsInfo.reviewDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reviewDescription = new v4_1.ComplexTypeStringPropertyField('ReviewDescription', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeReviewsInfo.manager]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manager = new v4_1.ComplexTypeNumberPropertyField('Manager', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeReviewsInfo.grade]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grade = new v4_1.ComplexTypeStringPropertyField('Grade', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeReviewsInfo.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return EmployeeReviewsInfoField;
}(v4_1.ComplexTypeField));
exports.EmployeeReviewsInfoField = EmployeeReviewsInfoField;
var EmployeeReviewsInfo;
(function (EmployeeReviewsInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EmployeeNo: function (employeeNo) { return ({ employeeNo: v4_1.edmToTs(employeeNo, 'Edm.Int32') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); },
            ReviewDescription: function (reviewDescription) { return ({ reviewDescription: v4_1.edmToTs(reviewDescription, 'Edm.String') }); },
            Manager: function (manager) { return ({ manager: v4_1.edmToTs(manager, 'Edm.Int32') }); },
            Grade: function (grade) { return ({ grade: v4_1.edmToTs(grade, 'Edm.String') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); }
        });
    }
    EmployeeReviewsInfo.build = build;
})(EmployeeReviewsInfo = exports.EmployeeReviewsInfo || (exports.EmployeeReviewsInfo = {}));
//# sourceMappingURL=EmployeeReviewsInfo.js.map