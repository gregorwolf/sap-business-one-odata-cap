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
exports.ReportLayoutParams = exports.ReportLayoutParamsField = exports.createReportLayoutParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutParams.build]] instead.
 */
function createReportLayoutParams(json) {
    return ReportLayoutParams.build(json);
}
exports.createReportLayoutParams = createReportLayoutParams;
/**
 * ReportLayoutParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReportLayoutParamsField = /** @class */ (function (_super) {
    __extends(ReportLayoutParamsField, _super);
    /**
     * Creates an instance of ReportLayoutParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ReportLayoutParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ReportLayoutParams) || this;
        /**
         * Representation of the [[ReportLayoutParams.layoutCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layoutCode = new core_1.ComplexTypeStringPropertyField('LayoutCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutParams.layoutName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layoutName = new core_1.ComplexTypeStringPropertyField('LayoutName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutParams.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new core_1.ComplexTypeEnumPropertyField('Category', _this);
        return _this;
    }
    return ReportLayoutParamsField;
}(core_1.ComplexTypeField));
exports.ReportLayoutParamsField = ReportLayoutParamsField;
var ReportLayoutParams;
(function (ReportLayoutParams) {
    /**
     * Metadata information on all properties of the `ReportLayoutParams` complex type.
     */
    ReportLayoutParams._propertyMetadata = [{
            originalName: 'LayoutCode',
            name: 'layoutCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LayoutName',
            name: 'layoutName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Category',
            name: 'category',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ReportLayoutParams);
    }
    ReportLayoutParams.build = build;
})(ReportLayoutParams = exports.ReportLayoutParams || (exports.ReportLayoutParams = {}));
//# sourceMappingURL=ReportLayoutParams.js.map