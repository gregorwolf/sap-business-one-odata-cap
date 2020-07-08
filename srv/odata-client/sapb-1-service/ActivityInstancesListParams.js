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
exports.ActivityInstancesListParams = exports.ActivityInstancesListParamsField = exports.createActivityInstancesListParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ActivityInstancesListParams.build]] instead.
 */
function createActivityInstancesListParams(json) {
    return ActivityInstancesListParams.build(json);
}
exports.createActivityInstancesListParams = createActivityInstancesListParams;
/**
 * ActivityInstancesListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ActivityInstancesListParamsField = /** @class */ (function (_super) {
    __extends(ActivityInstancesListParamsField, _super);
    function ActivityInstancesListParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ActivityInstancesListParams.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ActivityInstancesListParams.instanceCount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instanceCount = new v4_1.ComplexTypeNumberPropertyField('InstanceCount', _this, 'Edm.Int32');
        return _this;
    }
    return ActivityInstancesListParamsField;
}(v4_1.ComplexTypeField));
exports.ActivityInstancesListParamsField = ActivityInstancesListParamsField;
var ActivityInstancesListParams;
(function (ActivityInstancesListParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            InstanceCount: function (instanceCount) { return ({ instanceCount: v4_1.edmToTs(instanceCount, 'Edm.Int32') }); }
        });
    }
    ActivityInstancesListParams.build = build;
})(ActivityInstancesListParams = exports.ActivityInstancesListParams || (exports.ActivityInstancesListParams = {}));
//# sourceMappingURL=ActivityInstancesListParams.js.map