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
exports.ActivityInstanceParams = exports.ActivityInstanceParamsField = exports.createActivityInstanceParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ActivityInstanceParams.build]] instead.
 */
function createActivityInstanceParams(json) {
    return ActivityInstanceParams.build(json);
}
exports.createActivityInstanceParams = createActivityInstanceParams;
/**
 * ActivityInstanceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ActivityInstanceParamsField = /** @class */ (function (_super) {
    __extends(ActivityInstanceParamsField, _super);
    function ActivityInstanceParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ActivityInstanceParams.activityCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityCode = new v4_1.ComplexTypeNumberPropertyField('ActivityCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ActivityInstanceParams.instanceDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instanceDate = new v4_1.ComplexTypeDatePropertyField('InstanceDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return ActivityInstanceParamsField;
}(v4_1.ComplexTypeField));
exports.ActivityInstanceParamsField = ActivityInstanceParamsField;
var ActivityInstanceParams;
(function (ActivityInstanceParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ActivityCode: function (activityCode) { return ({ activityCode: v4_1.edmToTs(activityCode, 'Edm.Int32') }); },
            InstanceDate: function (instanceDate) { return ({ instanceDate: v4_1.edmToTs(instanceDate, 'Edm.DateTimeOffset') }); }
        });
    }
    ActivityInstanceParams.build = build;
})(ActivityInstanceParams = exports.ActivityInstanceParams || (exports.ActivityInstanceParams = {}));
//# sourceMappingURL=ActivityInstanceParams.js.map