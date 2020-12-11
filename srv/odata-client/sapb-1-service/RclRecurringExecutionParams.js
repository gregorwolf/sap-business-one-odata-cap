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
exports.RclRecurringExecutionParams = exports.RclRecurringExecutionParamsField = exports.createRclRecurringExecutionParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[RclRecurringExecutionParams.build]] instead.
 */
function createRclRecurringExecutionParams(json) {
    return RclRecurringExecutionParams.build(json);
}
exports.createRclRecurringExecutionParams = createRclRecurringExecutionParams;
/**
 * RclRecurringExecutionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RclRecurringExecutionParamsField = /** @class */ (function (_super) {
    __extends(RclRecurringExecutionParamsField, _super);
    /**
     * Creates an instance of RclRecurringExecutionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function RclRecurringExecutionParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, RclRecurringExecutionParams) || this;
        /**
         * Representation of the [[RclRecurringExecutionParams.onError]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.onError = new core_1.ComplexTypeEnumPropertyField('OnError', _this);
        return _this;
    }
    return RclRecurringExecutionParamsField;
}(core_1.ComplexTypeField));
exports.RclRecurringExecutionParamsField = RclRecurringExecutionParamsField;
var RclRecurringExecutionParams;
(function (RclRecurringExecutionParams) {
    /**
     * Metadata information on all properties of the `RclRecurringExecutionParams` complex type.
     */
    RclRecurringExecutionParams._propertyMetadata = [{
            originalName: 'OnError',
            name: 'onError',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, RclRecurringExecutionParams);
    }
    RclRecurringExecutionParams.build = build;
})(RclRecurringExecutionParams = exports.RclRecurringExecutionParams || (exports.RclRecurringExecutionParams = {}));
//# sourceMappingURL=RclRecurringExecutionParams.js.map