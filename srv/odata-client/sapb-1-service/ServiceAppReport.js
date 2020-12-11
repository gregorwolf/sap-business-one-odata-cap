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
exports.ServiceAppReport = exports.ServiceAppReportField = exports.createServiceAppReport = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReport.build]] instead.
 */
function createServiceAppReport(json) {
    return ServiceAppReport.build(json);
}
exports.createServiceAppReport = createServiceAppReport;
/**
 * ServiceAppReportField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceAppReportField = /** @class */ (function (_super) {
    __extends(ServiceAppReportField, _super);
    /**
     * Creates an instance of ServiceAppReportField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ServiceAppReportField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ServiceAppReport) || this;
        /**
         * Representation of the [[ServiceAppReport.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceAppReport.systemReportName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemReportName = new core_1.ComplexTypeStringPropertyField('SystemReportName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceAppReport.customizedReportName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customizedReportName = new core_1.ComplexTypeStringPropertyField('CustomizedReportName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceAppReport.reportChoice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportChoice = new core_1.ComplexTypeEnumPropertyField('ReportChoice', _this);
        return _this;
    }
    return ServiceAppReportField;
}(core_1.ComplexTypeField));
exports.ServiceAppReportField = ServiceAppReportField;
var ServiceAppReport;
(function (ServiceAppReport) {
    /**
     * Metadata information on all properties of the `ServiceAppReport` complex type.
     */
    ServiceAppReport._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SystemReportName',
            name: 'systemReportName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomizedReportName',
            name: 'customizedReportName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReportChoice',
            name: 'reportChoice',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ServiceAppReport);
    }
    ServiceAppReport.build = build;
})(ServiceAppReport = exports.ServiceAppReport || (exports.ServiceAppReport = {}));
//# sourceMappingURL=ServiceAppReport.js.map